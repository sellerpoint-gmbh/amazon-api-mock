import { RequestHandler } from '../../lib/RequestHandler'
import { ResponseFactory } from '../../lib/ResponseFactory'
import * as definitions from '../../lib/validation/definitions.zod'
import * as db from '../../lib/db'

export class Context {
	RequestHandler = RequestHandler
	ResponseFactory = ResponseFactory
	definitions = definitions
	db = db
}
