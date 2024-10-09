import * as z from "zod";
import { CounterfactRequest } from "./types/counterfact";

export interface ValidatorArgs {
  jsonBody?: z.AnyZodObject;
  path?: Record<string, "orderId" | "uuid" | RegExp>;
  query?: z.AnyZodObject;
}

export interface ValidatorResponse {
  success: boolean;
  data: Object;
}

export class Validator {
  private jsonBodyValidator: z.AnyZodObject;
  private pathValidator: Record<string, RegExp> = {};
  private queryValidator: z.AnyZodObject;

  constructor(args: ValidatorArgs) {
    this.jsonBodyValidator = args.jsonBody;
    this.queryValidator = args.query;

    for (const key in args.path) {
      switch (args.path[key]) {
        case "orderId":
          this.pathValidator[key] = /\d{3}-\d{7}-\d{7}/;
          break;
        case "uuid":
          this.pathValidator[key] =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
          break;
        default:
          this.pathValidator[key] = args.path[key];
      }
    }
  }

  private validateJsonBody(request: CounterfactRequest): any[] {
    let validationErrors = [];

    if (this.jsonBodyValidator) {
      const validationResponse = this.jsonBodyValidator.safeParse(request.body);
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

  private validatePath(request: CounterfactRequest): any[] {
    let validationErrors = [];

    if (this.pathValidator) {
      for (const key in this.pathValidator) {
        if (!this.pathValidator[key].test(request.path[key])) {
          validationErrors.push({
            code: "custom-2",
            message: `Invalid path variable "${key}"`,
          });
        }
      }
    }

    return validationErrors;
  }

  private validateQuery(request: CounterfactRequest): any[] {
    let validationErrors = [];

		console.log(request)

    if (this.queryValidator) {
      const validationResponse = this.queryValidator.safeParse(request.query);
      if (!validationResponse.success) {
        validationErrors.push(
          ...validationResponse.error.issues.map((e) => ({
            code: "custom-3",
            message: JSON.stringify(e),
          })),
        );
      }
    }

    return validationErrors;
  }

  public process(request: CounterfactRequest) {
    const validationErrors = [
      ...this.validateJsonBody(request),
      ...this.validatePath(request),
      ...this.validateQuery(request),
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
