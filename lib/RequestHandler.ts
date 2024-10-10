// @ts-ignore
import { RateLimiter } from "./RateLimiter.cjs";
// @ts-ignore
import { Validator } from "./Validator.cjs";
// @ts-ignore
import { ResponseFactory } from "./ResponseFactory.cjs";

import type {
  RateLimiterArgs,
  RateLimiter as RateLimiterType,
} from "./RateLimiter";
import type { ValidatorArgs, Validator as ValidatorType } from "./Validator";
import type { ResponseFactory as ResponseFactoryType } from "./ResponseFactory";
import { CounterfactRequest } from "./types/counterfact";

export interface RequestHandlerArgs {
  name: string;
  rateLimit?: RateLimiterArgs;
  validation?: ValidatorArgs;
  grantless?: boolean; // see https://developer-docs.amazon.com/sp-api/docs/grantless-operations
}

export class RequestHandler {
  private static rateLimiterMap: Record<string, RateLimiterType> = {};

  private static getRateLimiter({ rateLimit, name }: RequestHandlerArgs) {
    if (!rateLimit) return null;
    if (name in this.rateLimiterMap) return this.rateLimiterMap[name];

    return (this.rateLimiterMap[name] = new RateLimiter(
      rateLimit,
    ) as RateLimiterType);
  }

  static handle(request: CounterfactRequest, args: RequestHandlerArgs, fn) {
    request.responseHeaders = {};

    const rateLimiter = this.getRateLimiter(args);
    const responseFactory = new ResponseFactory(request) as ResponseFactoryType<any>;

    const clientId = "12345";

    if (rateLimiter) {
      if (!rateLimiter.allow(clientId)) {
        return responseFactory.make(429);
      }

      request.responseHeaders["x-amzn-RateLimit-Limit"] = rateLimiter
        .getTokens(clientId)
        .toFixed(2);
    }

    if (args.validation) {
      const validator = new Validator(args.validation) as ValidatorType;
      const { success, data } = validator.process(request);
      if (!success) {
        return responseFactory.make(400, data);
      }
    }

    return fn(request);
  }
}
