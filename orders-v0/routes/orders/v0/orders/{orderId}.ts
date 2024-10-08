import { RequestHandler } from '../../../../../lib/RequestHandler'
import type { HTTP_GET } from '../../../../types/paths/orders/v0/orders/{orderId}.types.js'

export const GET: HTTP_GET = $ =>
	RequestHandler.handle(
		$,
		{
			name: 'getOrder',
			rateLimit: {
				requestsPerSecond: 0.5,
				burst: 5,
			},
		},
		({ response }: typeof $) => {
			return response[200].random()
		}
	)
