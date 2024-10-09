import type { HTTP_GET } from "../../../../types/paths/orders/v0/orders/{orderId}.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getOrder",
      rateLimit: {
        requestsPerSecond: 0.5,
        burst: 5,
      },
      validation: {
        path: { orderId: "orderId" },
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);

      const order = req.context.db.orders.findOne({
        AmazonOrderId: req.path.orderId,
      });

      if (!order) {
        return responseFactory.make(404);
      }

      return responseFactory.make(200, order);
    },
  );
