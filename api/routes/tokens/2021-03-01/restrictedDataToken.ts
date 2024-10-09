import { CreateRestrictedDataTokenResponse } from "../../../types/definitions/CreateRestrictedDataTokenResponse.js";
import type { HTTP_POST } from "../../../types/paths/tokens/2021-03-01/restrictedDataToken.types.js";

export const POST: HTTP_POST = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "createRestrictedDataToken",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 10,
      },
      validation: {
        jsonBody:
          _req.context.z.createRestrictedDataTokenRequestSchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const response = _req.context.RestrictedDataTokenHandler.generate(
        req.body,
      );

      return responseFactory.make<CreateRestrictedDataTokenResponse>(
        200,
        response,
      );
    },
  );
