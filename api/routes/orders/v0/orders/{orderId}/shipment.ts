import type { HTTP_POST } from "../../../../../types/paths/orders/v0/orders/{orderId}/shipment.types.js";

export const POST: HTTP_POST = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "updateShipmentStatus",
      rateLimit: {
        requestsPerSecond: 5,
        burst: 15,
      },
      validation: {
        jsonBody: _req.context.z.updateShipmentStatusRequestSchema.strict(),
        path: { orderId: "orderId" },
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);

      return responseFactory.make(204);
    },
  );
