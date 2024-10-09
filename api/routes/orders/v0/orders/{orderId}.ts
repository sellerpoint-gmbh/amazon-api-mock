import { GetOrderResponse } from "../../../../types/definitions/GetOrderResponse.js";
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

      const dataElements = req.context.RestrictedDataTokenHandler.allow(req);

      const restrictedOrder = {
        ...order,
        ShippingAddress: dataElements.includes("shippingAddress")
          ? order.ShippingAddress
          : undefined,
        BuyerInfo: dataElements.includes("buyerInfo")
          ? order.BuyerInfo
          : undefined,
        BuyerTaxInformation: dataElements.includes("buyerTaxInformation")
          ? order.BuyerTaxInformation
          : undefined,
      };

      return responseFactory.make<GetOrderResponse>(200, {
        payload: restrictedOrder,
      });
    },
  );
