import type { HTTP_GET } from "../../../../types/paths/notifications/v1/subscriptions/{notificationType}.types.js";
import type { HTTP_POST } from "../../../../types/paths/notifications/v1/subscriptions/{notificationType}.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getSubscriptions",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const destinations = req.context.db.destinations.findAll();

      return responseFactory.make(200);
    },
  );

export const POST: HTTP_POST = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "createSubscription",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const destinations = req.context.db.destinations.findAll();

      return responseFactory.make(200, destinations);
    },
  );
