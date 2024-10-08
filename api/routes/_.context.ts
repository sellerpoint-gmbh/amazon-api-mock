import { RequestHandler } from '../../lib/RequestHandler'
import * as definitions from '../../lib/generated/definitions.zod.js'

export class Context {
	RequestHandler = RequestHandler
	definitions = definitions
}
