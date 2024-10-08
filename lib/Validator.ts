import * as z from 'zod'
import { CounterfactContext } from './types/counterfact'

export interface ValidatorArgs {
	jsonBody: z.AnyZodObject
}

export interface ValidatorResponse {
	success: boolean
	data: Object
}

export class Validator {
	private jsonBodyValidator: z.AnyZodObject

	constructor(args: ValidatorArgs) {
		this.jsonBodyValidator = args.jsonBody
	}

	public process(ctx: CounterfactContext) {
		let validationErrors = []

		if (this.jsonBodyValidator) {
			if (!ctx.body || !this.jsonBodyValidator.safeParse(ctx.body).success) {
				validationErrors.push(...this.jsonBodyValidator.safeParse(ctx.body).error.issues)
			}
		}

		if (validationErrors.length) {
			return {
				success: false,
				data: {
					errors: validationErrors.map(e => ({
						code: e.code,
						message: JSON.stringify(e),
					})),
				},
			}
		}

		return {
			success: true,
			data: null,
		}
	}
}
