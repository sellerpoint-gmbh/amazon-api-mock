// @ts-ignore
import { RateLimiter } from './RateLimiter.cjs'
import type { RateLimiterArgs, RateLimiter as RateLimiterType } from './RateLimiter'
import crypto from 'crypto'

export interface RequestHandlerArgs {
	name: string
	rateLimit?: RateLimiterArgs
}

export class RequestHandler {
	private static rateLimiterMap: Record<string, RateLimiterType> = {}

	private static getRateLimiter({ rateLimit, name }: RequestHandlerArgs) {
		if (!rateLimit) return null
		if (name in this.rateLimiterMap) return this.rateLimiterMap[name]

		return (this.rateLimiterMap[name] = new RateLimiter(rateLimit) as RateLimiterType)
	}

	static handle(ctx, args: RequestHandlerArgs, fn) {
		const rateLimiter = this.getRateLimiter(args)

		const clientId = '12345'

		if (rateLimiter && !rateLimiter.allow(clientId)) {
			return ctx.response[429].json()
		}

		return fn(ctx)
	}
}
