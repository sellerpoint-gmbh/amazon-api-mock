import type { HTTP_GET } from "../../../types/paths/orders/v0/orders.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getOrders",
      rateLimit: {
        requestsPerSecond: 0.0167,
        burst: 20,
      },
      validation: {
        query: _req.context.z.getOrdersQuerySchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);

      const orders = req.context.db.orders.findAll();

      return responseFactory.make(200, orders);
    },
  );
