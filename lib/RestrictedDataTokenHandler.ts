import * as jwt from "jsonwebtoken";
import * as z from "zod";
import {
  createRestrictedDataTokenRequestSchema,
  createRestrictedDataTokenResponseSchema,
  restrictedResourceSchema,
} from "./validation/definitions.zod";
import { CounterfactRequest } from "./types/counterfact";

const TOKEN_LIFE_TIME = 60 * 60;
const TOKEN_SECRET = "secret";

interface RestrictedDataToken {
  restrictedResources: Array<z.infer<typeof restrictedResourceSchema>>;
}

export class RestrictedDataTokenHandler {
  static allow(request: CounterfactRequest): string[] {
    const token = request.headers["x-amz-access-token"];

    if (!token) {
      return [];
    }

    const decoded = jwt.verify(token, TOKEN_SECRET) as RestrictedDataToken;

    const matchingResource = decoded.restrictedResources.find(
      (r) => r.path === request.matchedPath,
    );

    if (!matchingResource) {
      return [];
    }

    return matchingResource.dataElements;
  }

  static generate(
    payload: z.infer<typeof createRestrictedDataTokenRequestSchema>,
  ): z.infer<typeof createRestrictedDataTokenResponseSchema> {
    const token: RestrictedDataToken = {
      restrictedResources: payload.restrictedResources,
    };

    return {
      restrictedDataToken: jwt.sign(token, TOKEN_SECRET, {
        expiresIn: TOKEN_LIFE_TIME,
      }),
      expiresIn: TOKEN_LIFE_TIME,
    };
  }
}
