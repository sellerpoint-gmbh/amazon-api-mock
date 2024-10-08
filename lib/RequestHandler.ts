// @ts-ignore
import { RateLimiter } from './RateLimiter.cjs'
// @ts-ignore
import { Validator } from './Validator.cjs'

import type { RateLimiterArgs, RateLimiter as RateLimiterType } from './RateLimiter'
import type { ValidatorArgs, Validator as ValidatorType } from './Validator'
import { CounterfactContext } from './types/counterfact'

export interface RequestHandlerArgs {
	name: string
	rateLimit?: RateLimiterArgs
	validation?: ValidatorArgs
}

export class RequestHandler {
	private static rateLimiterMap: Record<string, RateLimiterType> = {}

	private static getRateLimiter({ rateLimit, name }: RequestHandlerArgs) {
		if (!rateLimit) return null
		if (name in this.rateLimiterMap) return this.rateLimiterMap[name]

		return (this.rateLimiterMap[name] = new RateLimiter(rateLimit) as RateLimiterType)
	}

	static handle(ctx: CounterfactContext, args: RequestHandlerArgs, fn) {
		const rateLimiter = this.getRateLimiter(args)

		const clientId = '12345'

		if (rateLimiter && !rateLimiter.allow(clientId)) {
			return ctx.response[429].json()
		}

		if (args.validation) {
			const validator = new Validator(args.validation) as ValidatorType
			const { success, data } = validator.process(ctx)
			if (!success) {
				return ctx.response[400].json(data)
			}
		}

		return fn(ctx)
	}
}
