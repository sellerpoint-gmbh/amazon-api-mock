import { CreateSubscriptionResponse } from "../../../../types/definitions/CreateSubscriptionResponse.js";
import { Subscription } from "../../../../types/definitions/Subscription.js";
import type { HTTP_GET } from "../../../../types/paths/notifications/v1/subscriptions/{notificationType}.types.js";
import type { HTTP_POST } from "../../../../types/paths/notifications/v1/subscriptions/{notificationType}.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getSubscription",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      validation: {
        path: {
          notificationType: "notificationType",
        },
        query: _req.context.z.getSubscriptionQuerySchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const subscription = req.context.db.subscriptions.findOne();

      return responseFactory.make(200, { payload: subscription });
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
      validation: {
        path: {
          notificationType: "notificationType",
        },
        jsonBody: _req.context.z.createSubscriptionRequestSchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory<CreateSubscriptionResponse>(req);

      const subcription = req.context.db.subscriptions.insert({
        subscriptionId: req.context.dep.crypto.randomUUID(),
        payloadVersion: req.body.payloadVersion,
        destinationId: req.body.destinationId,
        processingDirective: req.body.processingDirective,
      } as Subscription);

      return responseFactory.make(200, { payload: subcription});
    },
  );
