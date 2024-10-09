import type { HTTP_GET } from "../../../../../../types/paths/orders/v0/orders/{orderId}/orderItems/buyerInfo.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getOrderItemsBuyerInfo",
      rateLimit: {
        requestsPerSecond: 0.5,
        burst: 30,
      },
      validation: {
        path: { orderId: "orderId" },
        query: _req.context.z.getOrderItemsBuyerInfoQuerySchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);

      return responseFactory.make(200);
    },
  );
