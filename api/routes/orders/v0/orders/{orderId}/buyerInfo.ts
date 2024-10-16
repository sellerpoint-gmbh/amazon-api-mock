import { GetOrderBuyerInfoResponse } from '../../../../../types/definitions/GetOrderBuyerInfoResponse.js';
import type { HTTP_GET } from '../../../../../types/paths/orders/v0/orders/{orderId}/buyerInfo.types.js';

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: 'getOrderBuyerInfo',
      rateLimit: {
        requestsPerSecond: 0.5,
        burst: 30,
      },
      validation: {
        path: { orderId: 'orderId' },
      },
    },
    (req: typeof _req) => {
      const responseFactory =
        new req.context.ResponseFactory<GetOrderBuyerInfoResponse>(req);

      const order = req.context.db.orders.findOne({
        AmazonOrderId: req.path.orderId,
      });

      if (!order) {
        return responseFactory.make(404);
      }

      const orderBuyerInfo = {
        ...order.BuyerInfo,
        AmazonOrderId: order.AmazonOrderId,
      };

      return responseFactory.make(200, { payload: orderBuyerInfo });
    }
  );
