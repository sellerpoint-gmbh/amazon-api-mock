import { GetOrdersResponse } from '../../../types/definitions/GetOrdersResponse.js';
import type { HTTP_GET } from '../../../types/paths/orders/v0/orders.types.js';

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: 'getOrders',
      rateLimit: {
        requestsPerSecond: 0.0167,
        burst: 20,
      },
      validation: {
        query: _req.context.z.getOrdersQuerySchema.strict(),
      },
    },
    (req: typeof _req) => {
      const responseFactory =
        new req.context.ResponseFactory<GetOrdersResponse>(req);
      const orders = req.context.db.orders.findAll();

      const dataElements = req.context.RestrictedDataTokenHandler.allow(req);

      const restrictedOrders = orders.map((order) => ({
        ...order,
        ShippingAddress: dataElements.includes('shippingAddress')
          ? order.ShippingAddress
          : undefined,
        BuyerInfo: dataElements.includes('buyerInfo')
          ? order.BuyerInfo
          : undefined,
        BuyerTaxInformation: dataElements.includes('buyerTaxInformation')
          ? order.BuyerTaxInformation
          : undefined,
      }));

      return responseFactory.make(200, {
        payload: { Orders: restrictedOrders },
      });
    }
  );
