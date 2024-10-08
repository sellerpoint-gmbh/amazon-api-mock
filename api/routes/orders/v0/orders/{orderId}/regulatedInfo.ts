import type { HTTP_GET } from '../../../../../types/paths/orders/v0/orders/{orderId}/regulatedInfo.types.js'
import type { HTTP_PATCH } from '../../../../../types/paths/orders/v0/orders/{orderId}/regulatedInfo.types.js'

export const GET: HTTP_GET = _req =>
	_req.context.RequestHandler.handle(
		_req,
		{
			name: 'getOrderRegulatedInfo',
			rateLimit: {
				requestsPerSecond: 0.5,
				burst: 30,
			},
			validation: {
				path: 'orderId',
			},
		},
		(req: typeof _req) => {
			const responseFactory = new req.context.ResponseFactory(req)

			return responseFactory.make(200)
		}
	)

export const PATCH: HTTP_PATCH = _req =>
	_req.context.RequestHandler.handle(
		_req,
		{
			name: 'updateVerificationStatus',
			rateLimit: {
				requestsPerSecond: 5,
				burst: 15,
			},
			validation: {
				jsonBody: _req.context.definitions.updateVerificationStatusRequestSchema.strict(),
				path: 'orderId',
			},
		},
		(req: typeof _req) => {
			const responseFactory = new req.context.ResponseFactory(req)

			return responseFactory.make(204)
		}
	)
