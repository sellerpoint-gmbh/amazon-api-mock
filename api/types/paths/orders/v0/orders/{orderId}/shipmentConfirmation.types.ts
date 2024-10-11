// This code was automatically generated from an OpenAPI description.
// Do not edit this file. Edit the OpenAPI file instead.
// For more information, see https://github.com/pmcelhaney/counterfact/blob/main/docs/faq-generated-code.md

import type { WideOperationArgument } from '../../../../../../types.ts';
import type { OmitValueWhenNever } from '../../../../../../types.ts';
import type { COUNTERFACT_RESPONSE } from '../../../../../../types.ts';
import type { Context } from '../../../../../../routes/_.context.ts';
import type { ResponseBuilderFactory } from '../../../../../../types.ts';
import type { ConfirmShipmentRequest } from '../../../../../definitions/ConfirmShipmentRequest.js';
import type { ConfirmShipmentErrorResponse } from '../../../../../definitions/ConfirmShipmentErrorResponse.js';

export type HTTP_POST = (
  $: OmitValueWhenNever<{
    query: never;
    path: { orderId: string };
    header: never;
    body: ConfirmShipmentRequest;
    context: Context;
    response: ResponseBuilderFactory<{
      204: {
        headers: {
          'x-amzn-RateLimit-Limit': { schema: string };
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: never;
      };
      400: {
        headers: {
          'x-amzn-RateLimit-Limit': { schema: string };
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
      401: {
        headers: {
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
      403: {
        headers: {
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
      404: {
        headers: {
          'x-amzn-RateLimit-Limit': { schema: string };
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
      429: {
        headers: {
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
      500: {
        headers: {
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
      503: {
        headers: {
          'x-amzn-RequestId': { schema: string };
        };
        requiredHeaders: never;
        content: {
          'application/json': {
            schema: ConfirmShipmentErrorResponse;
          };
        };
      };
    }>;
    x: WideOperationArgument;
    proxy: (url: string) => COUNTERFACT_RESPONSE;
    user: never;
  }>
) =>
  | {
      status: 204;
    }
  | {
      status: 400;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | {
      status: 401;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | {
      status: 403;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | {
      status: 404;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | {
      status: 429;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | {
      status: 500;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | {
      status: 503;
      contentType?: 'application/json';
      body?: ConfirmShipmentErrorResponse;
    }
  | { status: 415; contentType: 'text/plain'; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };
