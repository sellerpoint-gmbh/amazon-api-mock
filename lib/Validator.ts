import * as z from 'zod'
import { CounterfactRequest } from './types/counterfact'

export interface ValidatorArgs {
	jsonBody?: z.AnyZodObject
	path?: "orderId" | RegExp
}

export interface ValidatorResponse {
	success: boolean
	data: Object
}

export class Validator {
	private jsonBodyValidator: z.AnyZodObject
	private pathValidator: RegExp

	constructor(args: ValidatorArgs) {
		this.jsonBodyValidator = args.jsonBody
		this.pathValidator = args.path === "orderId" ? /\d{3}-\d{7}-\d{7}/ : args.path;
	}

	public process(request: CounterfactRequest) {
		let validationErrors = []

		if (this.jsonBodyValidator) {
			if (!request.body || !this.jsonBodyValidator.safeParse(request.body).success) {
				validationErrors.push(...this.jsonBodyValidator.safeParse(request.body).error.issues)
			}
		}

		if(this.pathValidator){
			const pathVariable = request.path[Object.keys(request.path)[0]]

			if(!this.pathValidator.test(pathVariable)){
				validationErrors.push({
					code: "custom-2",
					message: "Invalid path",
				})
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
