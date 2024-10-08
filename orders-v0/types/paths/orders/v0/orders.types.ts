// This code was automatically generated from an OpenAPI description.
// Do not edit this file. Edit the OpenAPI file instead.
// For more information, see https://github.com/pmcelhaney/counterfact/blob/main/docs/faq-generated-code.md

import type { WideOperationArgument } from "../../../../types.ts";
import type { OmitValueWhenNever } from "../../../../types.ts";
import type { COUNTERFACT_RESPONSE } from "../../../../types.ts";
import type { Context } from "../../../../routes/_.context.ts";
import type { ResponseBuilderFactory } from "../../../../types.ts";
import type { GetOrdersResponse } from "../../../definitions/GetOrdersResponse.js";

export type HTTP_GET = (
  $: OmitValueWhenNever<{
    query: {
      CreatedAfter?: string;
      CreatedBefore?: string;
      LastUpdatedAfter?: string;
      LastUpdatedBefore?: string;
      OrderStatuses?: Array<string>;
      MarketplaceIds: Array<string>;
      FulfillmentChannels?: Array<string>;
      PaymentMethods?: Array<string>;
      BuyerEmail?: string;
      SellerOrderId?: string;
      MaxResultsPerPage?: number;
      EasyShipShipmentStatuses?: Array<string>;
      ElectronicInvoiceStatuses?: Array<string>;
      NextToken?: string;
      AmazonOrderIds?: Array<string>;
      ActualFulfillmentSupplySourceId?: string;
      IsISPU?: boolean;
      StoreChainStoreId?: string;
      EarliestDeliveryDateBefore?: string;
      EarliestDeliveryDateAfter?: string;
      LatestDeliveryDateBefore?: string;
      LatestDeliveryDateAfter?: string;
    };
    path: never;
    header: never;
    body: never;
    context: Context;
    response: ResponseBuilderFactory<{
      200: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
      400: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
      403: {
        headers: {
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
      404: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
      429: {
        headers: {
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
      500: {
        headers: {
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
      503: {
        headers: {
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetOrdersResponse;
          };
        };
      };
    }>;
    x: WideOperationArgument;
    proxy: (url: string) => COUNTERFACT_RESPONSE;
    user: never;
  }>,
) =>
  | {
      status: 200;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | {
      status: 400;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | {
      status: 403;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | {
      status: 404;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | {
      status: 429;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | {
      status: 500;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | {
      status: 503;
      contentType?: "application/json";
      body?: GetOrdersResponse;
    }
  | { status: 415; contentType: "text/plain"; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };
