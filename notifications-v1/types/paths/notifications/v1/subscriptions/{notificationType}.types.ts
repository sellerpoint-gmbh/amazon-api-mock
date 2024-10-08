// This code was automatically generated from an OpenAPI description.
// Do not edit this file. Edit the OpenAPI file instead.
// For more information, see https://github.com/pmcelhaney/counterfact/blob/main/docs/faq-generated-code.md

import type { WideOperationArgument } from "../../../../../types.ts";
import type { OmitValueWhenNever } from "../../../../../types.ts";
import type { COUNTERFACT_RESPONSE } from "../../../../../types.ts";
import type { Context } from "../../../../../routes/_.context.ts";
import type { ResponseBuilderFactory } from "../../../../../types.ts";
import type { NotificationType } from "../../../../parameters/NotificationType.js";
import type { CreateSubscriptionRequest } from "../../../../definitions/CreateSubscriptionRequest.js";
import type { CreateSubscriptionResponse } from "../../../../definitions/CreateSubscriptionResponse.js";

export type HTTP_GET = {
  /* error creating export "HTTP_GET" for types/paths/notifications/v1/subscriptions/{notificationType}.types.ts: TypeError: Cannot read properties of undefined (reading 'data')
    at file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/operation-type-coder.js:79:88
    at file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/requirement.js:49:41
    at file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/requirement.js:35:13
    at Array.forEach (<anonymous>)
    at Requirement.forEach (file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/requirement.js:34:32)
    at Requirement.find (file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/requirement.js:48:14)
    at OperationTypeCoder.writeCode (file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/operation-type-coder.js:79:19)
    at OperationTypeCoder.write (file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/type-coder.js:7:21)
    at file:///Users/sergei/.npm/_npx/e8d1761dc3fb6aab/node_modules/counterfact/dist/typescript-generator/script.js:50:51
    at async Promise.all (index 0) */
};

export type HTTP_POST = (
  $: OmitValueWhenNever<{
    query: never;
    path: never;
    header: never;
    body: CreateSubscriptionRequest;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
            schema: CreateSubscriptionResponse;
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
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 400;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 403;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 404;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 409;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 413;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 415;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 429;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 500;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | {
      status: 503;
      contentType?: "application/json";
      body?: CreateSubscriptionResponse;
    }
  | { status: 415; contentType: "text/plain"; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };
