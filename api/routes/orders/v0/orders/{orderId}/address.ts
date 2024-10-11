import { GetOrderAddressResponse } from '../../../../../types/definitions/GetOrderAddressResponse.js'
import type { HTTP_GET } from '../../../../../types/paths/orders/v0/orders/{orderId}/address.types.js'

export const GET: HTTP_GET = _req =>
	_req.context.RequestHandler.handle(
		_req,
		{
			name: 'getOrderAddress',
			rateLimit: {
				requestsPerSecond: 0.5,
				burst: 30,
			},
			validation: {
				path: { orderId: 'orderId' },
			},
		},
		(req: typeof _req) => {
			const responseFactory = new req.context.ResponseFactory<GetOrderAddressResponse>(req)

			const order = req.context.db.orders.findOne({
				AmazonOrderId: req.path.orderId,
			})

			if (!order) {
				return responseFactory.make(404)
			}

			const orderBuyerInfo = {
				...order.ShippingAddress,
				AmazonOrderId: order.AmazonOrderId,
			}

			return responseFactory.make(200, { payload: orderBuyerInfo })
		}
	)
