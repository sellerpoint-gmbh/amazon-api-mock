// This code was automatically generated from an OpenAPI description.
// Do not edit this file. Edit the OpenAPI file instead.
// For more information, see https://github.com/pmcelhaney/counterfact/blob/main/docs/faq-generated-code.md

import type { WideOperationArgument } from "../../../../../types.ts";
import type { OmitValueWhenNever } from "../../../../../types.ts";
import type { COUNTERFACT_RESPONSE } from "../../../../../types.ts";
import type { Context } from "../../../../../routes/_.context.ts";
import type { ResponseBuilderFactory } from "../../../../../types.ts";
import type { GetDestinationResponse } from "../../../../definitions/GetDestinationResponse.js";
import type { DeleteDestinationResponse } from "../../../../definitions/DeleteDestinationResponse.js";

export type HTTP_GET = (
  $: OmitValueWhenNever<{
    query: never;
    path: { destinationId: string };
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
            schema: GetDestinationResponse;
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
            schema: GetDestinationResponse;
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
            schema: GetDestinationResponse;
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
            schema: GetDestinationResponse;
          };
        };
      };
      409: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetDestinationResponse;
          };
        };
      };
      413: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetDestinationResponse;
          };
        };
      };
      415: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetDestinationResponse;
          };
        };
      };
      429: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetDestinationResponse;
          };
        };
      };
      500: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetDestinationResponse;
          };
        };
      };
      503: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: GetDestinationResponse;
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
      body?: GetDestinationResponse;
    }
  | {
      status: 400;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 403;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 404;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 409;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 413;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 415;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 429;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 500;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | {
      status: 503;
      contentType?: "application/json";
      body?: GetDestinationResponse;
    }
  | { status: 415; contentType: "text/plain"; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };

export type HTTP_DELETE = (
  $: OmitValueWhenNever<{
    query: never;
    path: { destinationId: string };
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
            schema: DeleteDestinationResponse;
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
            schema: DeleteDestinationResponse;
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
            schema: DeleteDestinationResponse;
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
            schema: DeleteDestinationResponse;
          };
        };
      };
      409: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: DeleteDestinationResponse;
          };
        };
      };
      413: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: DeleteDestinationResponse;
          };
        };
      };
      415: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: DeleteDestinationResponse;
          };
        };
      };
      429: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: DeleteDestinationResponse;
          };
        };
      };
      500: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: DeleteDestinationResponse;
          };
        };
      };
      503: {
        headers: {
          "x-amzn-RateLimit-Limit": { schema: string };
          "x-amzn-RequestId": { schema: string };
        };
        requiredHeaders: never;
        content: {
          "application/json": {
            schema: DeleteDestinationResponse;
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
      body?: DeleteDestinationResponse;
    }
  | {
      status: 400;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 403;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 404;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 409;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 413;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 415;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 429;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 500;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | {
      status: 503;
      contentType?: "application/json";
      body?: DeleteDestinationResponse;
    }
  | { status: 415; contentType: "text/plain"; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };
