import type { HTTP_POST } from '../../../../../types/paths/orders/v0/orders/{orderId}/shipmentConfirmation.types.js'

export const POST: HTTP_POST = _req =>
	_req.context.RequestHandler.handle(
		_req,
		{
			name: 'confirmShipment',
			rateLimit: {
				requestsPerSecond: 2,
				burst: 10,
			},
			validation: {
				jsonBody: _req.context.definitions.confirmShipmentRequestSchema.strict(),
				path: "orderId",
			},
		},
		(req: typeof _req) => {
			const responseFactory = new req.context.ResponseFactory(req)

			return responseFactory.make(204)
		}
	)
