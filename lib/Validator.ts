import * as z from "zod";
import { CounterfactRequest } from "./types/counterfact";

export interface ValidatorArgs {
  jsonBody?: z.AnyZodObject;
  path?: Record<string, "notificationType" | "orderId" | "uuid" | RegExp>;
  query?: z.AnyZodObject;
}

export interface ValidatorResponse {
  success: boolean;
  data: Object;
}

export class Validator {
  private jsonBodyValidator: z.AnyZodObject;
  private pathValidator: z.AnyZodObject;
  private queryValidator: z.AnyZodObject;

  constructor(args: ValidatorArgs) {
    this.jsonBodyValidator = args.jsonBody;
    this.queryValidator = args.query;
    this.pathValidator = this.makePathValidator(args.path);
  }

  private makePathValidator(
    args: Record<string, "notificationType" | "orderId" | "uuid" | RegExp>,
  ) {
    let validatorObj = {};
    for (const key in args) {
      switch (args[key]) {
        case "orderId":
          validatorObj[key] = z.string().regex(/\d{3}-\d{7}-\d{7}/);
          break;
        case "uuid":
          validatorObj[key] = z.string().uuid();
          break;
        case "notificationType":
          validatorObj[key] = z.enum([
            "ACCOUNT_STATUS_CHANGED",
            "ANY_OFFER_CHANGED",
            "B2B_ANY_OFFER_CHANGED",
            "BRANDED_ITEM_CONTENT_CHANGE",
            "DETAIL_PAGE_TRAFFIC_EVENT",
            "FBA_INVENTORY_AVAILABILITY_CHANGES",
            "FBA_OUTBOUND_SHIPMENT_STATUS",
            "FEE_PROMOTION",
            "FEED_PROCESSING_FINISHED",
            "FULFILLMENT_ORDER_STATUS",
            "ITEM_INVENTORY_EVENT_CHANGE",
            "ITEM_SALES_EVENT_CHANGE",
            "ITEM_PRODUCT_TYPE_CHANGE",
            "LISTINGS_ITEM_STATUS_CHANGE",
            "LISTINGS_ITEM_ISSUES_CHANGE",
            "LISTINGS_ITEM_MFN_QUANTITY_CHANGE",
            "ORDER_CHANGE",
            "PRICING_HEALTH",
            "PRODUCT_TYPE_DEFINITIONS_CHANGE",
            "REPORT_PROCESSING_FINISHED",
          ]);
          break;
        default:
          validatorObj[key] = z.string().regex(args[key]);
      }
    }

    return z.object(validatorObj).strict();
  }

  private validate(validator: z.AnyZodObject, obj: any): any[] {
    let validationErrors = [];

    if (validator) {
      const validationResponse = validator.safeParse(obj);
      if (!validationResponse.success) {
        validationErrors.push(
          ...validationResponse.error.issues.map((e) => ({
            code: "custom-1",
            message: JSON.stringify(e),
          })),
        );
      }
    }

    return validationErrors;
  }

  public process(request: CounterfactRequest) {
    const validationErrors = [
      ...this.validate(this.jsonBodyValidator, request.body),
      ...this.validate(this.pathValidator, request.path),
      ...this.validate(this.queryValidator, request.query),
    ];

    if (validationErrors.length) {
      return {
        success: false,
        data: {
          errors: validationErrors,
        },
      };
    }

    return {
      success: true,
      data: null,
    };
  }
}
