import * as z from 'zod'
import { CounterfactRequest } from './types/counterfact'

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

	public process(request: CounterfactRequest) {
		let validationErrors = []

		if (this.jsonBodyValidator) {
			if (!request.body || !this.jsonBodyValidator.safeParse(request.body).success) {
				validationErrors.push(...this.jsonBodyValidator.safeParse(request.body).error.issues)
			}
		}

		if (validationErrors.length) {
			return {
				success: false,
				data: {
					errors: validationErrors.map(e => ({
						code: "custom-1",
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
