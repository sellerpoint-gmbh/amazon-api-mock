import { CounterfactRequest } from './types/counterfact'
import crypto from 'crypto'

const defaultErrorMessage = {
	400: 'Request has missing or invalid parameters and cannot be parsed.',
	403: 'Forbidden',
	404: 'The resource specified does not exist.',
	413: 'The request size exceeded the maximum accepted size.',
	415: 'The request payload is in an unsupported format.',
	429: 'The frequency of requests was greater than allowed.',
	500: 'An unexpected condition occurred that prevented the server from fulfilling the request.',
	503: 'Temporary overloading or maintenance of the server.',
}

export class ResponseFactory {
	constructor(private request: CounterfactRequest) {}

	public make(statusCode: number, body: any = null) {
		if (!body) {
			if (statusCode >= 400) {
				body = {
					errors: [
						{
							code: `custom-${statusCode}`,
							message: defaultErrorMessage?.[statusCode] || 'An unexpected error occurred.',
						},
					],
				}
			}
		}

		let res = this.request.response[statusCode]

		for (const key in this.request.responseHeaders) {
			res = res.header(key, this.request.responseHeaders[key])
		}

		return res.header('x-amzn-RequestId', crypto.randomUUID()).json(body)
	}
}
