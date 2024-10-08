import { RequestHandler } from '../../lib/RequestHandler'
import { ResponseFactory } from '../../lib/ResponseFactory'
import * as definitions from '../../lib/generated/definitions.zod.js'
import * as db from '../../lib/db'

export class Context {
	RequestHandler = RequestHandler
	ResponseFactory = ResponseFactory
	definitions = definitions
	db = db
}
