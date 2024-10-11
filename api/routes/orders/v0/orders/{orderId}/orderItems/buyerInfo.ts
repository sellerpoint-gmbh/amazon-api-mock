import { GetOrderItemsBuyerInfoResponse } from '../../../../../../types/definitions/GetOrderItemsBuyerInfoResponse.js'
import type { HTTP_GET } from '../../../../../../types/paths/orders/v0/orders/{orderId}/orderItems/buyerInfo.types.js'

export const GET: HTTP_GET = _req =>
	_req.context.RequestHandler.handle(
		_req,
		{
			name: 'getOrderItemsBuyerInfo',
			rateLimit: {
				requestsPerSecond: 0.5,
				burst: 30,
			},
			validation: {
				path: { orderId: 'orderId' },
				query: _req.context.z.getOrderItemsBuyerInfoQuerySchema.strict(),
			},
		},
		(req: typeof _req) => {
			const responseFactory = new req.context.ResponseFactory<GetOrderItemsBuyerInfoResponse>(req)

			const orderItemsList = req.context.db.orderItemsLists.findOne({
				AmazonOrderId: req.path.orderId,
			})

			if (!orderItemsList) {
				return responseFactory.make(404)
			}

			const orderItemBuyerInfos = orderItemsList.OrderItems.map(orderItem => {
				return req.context.db.orderItemBuyerInfos.findOne({
					OrderItemId: orderItem.OrderItemId,
				})
			}).filter(a => a)

			const orderItemsBuyerInfoList = {
				payload: {
					OrderItems: orderItemBuyerInfos,
					AmazonOrderId: orderItemsList.AmazonOrderId,
				},
			}

			return responseFactory.make(200, orderItemsBuyerInfoList)
		}
	)
