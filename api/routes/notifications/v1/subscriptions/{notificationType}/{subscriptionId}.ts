import type { HTTP_GET } from "../../../../../types/paths/notifications/v1/subscriptions/{notificationType}/{subscriptionId}.types.js";
import type { HTTP_DELETE } from "../../../../../types/paths/notifications/v1/subscriptions/{notificationType}/{subscriptionId}.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getSubscriptionById",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      validation: {
        path: {
          notificationType: "notificationType",
          subscriptionId: "uuid",
        },
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const subscription = req.context.db.subscriptions.findOne({
        subscriptionId: req.path.subscriptionId,
      });

      if (!subscription) {
        return responseFactory.make(404);
      }

      return responseFactory.make(200, subscription);
    },
  );

export const DELETE: HTTP_DELETE = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "deleteSubscriptionById",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      validation: {
        path: {
          notificationType: "notificationType",
          subscriptionId: "uuid",
        },
      },
      grantless: true,
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const ok = req.context.db.destinations.delete({
        subscriptionId: req.path.subscriptionId,
      });

      if (ok) {
        return responseFactory.make(200);
      } else {
        return responseFactory.make(404);
      }
    },
  );
