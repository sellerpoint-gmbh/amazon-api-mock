import { GetOrderItemsResponse } from "../../../../../types/definitions/GetOrderItemsResponse.js";
import type { HTTP_GET } from "../../../../../types/paths/orders/v0/orders/{orderId}/orderItems.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getOrderItems",
      rateLimit: {
        requestsPerSecond: 0.5,
        burst: 30,
      },
      validation: {
        path: { orderId: "orderId" },
        query: _req.context.z.getOrderItemsQuerySchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory =
        new req.context.ResponseFactory<GetOrderItemsResponse>(req);

      return responseFactory.make(200);
    },
  );
