import type { HTTP_POST } from '../../../../../types/paths/orders/v0/orders/{orderId}/shipmentConfirmation.types.js'

export const POST: HTTP_POST = $ =>
	$.context.RequestHandler.handle(
		$,
		{
			name: 'confirmShipment',
			rateLimit: {
				requestsPerSecond: 2,
				burst: 10,
			},
			validation: {
				jsonBody: $.context.definitions.confirmShipmentRequestSchema.strict(),
			},
		},
		({ response }: typeof $) => {
			return response[204]
		}
	)
