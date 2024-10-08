export interface RateLimiterArgs {
	requestsPerSecond: number
	burst: number
}

export class RateLimiter {
	private tokens: Record<string, number>
	private lastRefillTimestamp: Record<string, number>
	private requestsPerSecond: number
	private burst: number

	constructor(args: RateLimiterArgs) {
		this.requestsPerSecond = args.requestsPerSecond
		this.burst = args.burst
		this.tokens = {}
		this.lastRefillTimestamp = {}
	}

	private refill(clientId: string) {
		const now = Date.now()
		const lastRefillTime = this.lastRefillTimestamp[clientId] || now
		const elapsedTime = (now - lastRefillTime) / 1000
		const refillTokens = elapsedTime * this.requestsPerSecond

		this.tokens[clientId] = Math.min(this.burst, (this.tokens[clientId] || this.burst) + refillTokens)
		this.lastRefillTimestamp[clientId] = now
	}

	public allow(clientId: string): boolean {
		this.refill(clientId)

		if ((this.tokens[clientId] || 0) > 0) {
			this.tokens[clientId] -= 1
			return true // Request allowed
		} else {
			return false // Request throttled
		}
	}
}
