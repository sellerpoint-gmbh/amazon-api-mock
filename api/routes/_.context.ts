import { RequestHandler } from '../../lib/RequestHandler'
import { ResponseFactory } from '../../lib/ResponseFactory'
import { RestrictedDataTokenHandler } from '../../lib/RestrictedDataTokenHandler'
import { MemoryStore } from '../../lib/MemoryStore'
import * as definitions from '../../lib/validation/definitions.zod'
import * as custom from '../../lib/validation/custom.zod'
import * as dep from '../../lib/dep'
import { Order } from '../types/definitions/Order'
import { Destination } from '../types/definitions/Destination'
import { Subscription } from '../types/definitions/Subscription'
import { OrderRegulatedInfo } from '../types/definitions/OrderRegulatedInfo'
import { OrderItemsList } from '../types/definitions/OrderItemsList'
import { OrderItemBuyerInfo } from '../types/definitions/OrderItemBuyerInfo'

const data = JSON.parse(dep.fs.readFileSync(dep.path.join(process.cwd(), 'store.json'), 'utf-8'))
const memoryStore = new MemoryStore()

const db = {
	orders: memoryStore.collection<Order>('orders', data.orders),
	orderRegulatedInfos: memoryStore.collection<OrderRegulatedInfo>('orderRegulatedInfos', data.orderRegulatedInfos),
	orderItemsLists: memoryStore.collection<OrderItemsList>('orderItemsLists', data.orderItemsLists),
	orderItemBuyerInfos: memoryStore.collection<OrderItemBuyerInfo>('orderItemBuyerInfos', data.orderItemBuyerInfos),
	destinations: memoryStore.collection<Destination>('destinations', data.destinations),
	subscriptions: memoryStore.collection<Subscription>('subscriptions', data.subscriptions),
}

type ContextValidator = Record<keyof typeof db, dep.z.ZodArray<any>> & typeof definitions & typeof custom

export class Context {
	RequestHandler = RequestHandler
	ResponseFactory = ResponseFactory
	RestrictedDataTokenHandler = RestrictedDataTokenHandler
	z: ContextValidator = {
		...definitions,
		...custom,
		orders: dep.z.array(definitions.orderSchema.strict()),
		orderRegulatedInfos: dep.z.array(definitions.orderRegulatedInfoSchema.strict()),
		orderItemsLists: dep.z.array(definitions.orderItemsListSchema.strict()),
		orderItemBuyerInfos: dep.z.array(definitions.orderItemBuyerInfoSchema.strict()),
		destinations: dep.z.array(definitions.destinationSchema.strict()),
		subscriptions: dep.z.array(definitions.subscriptionSchema.strict()),
	}
	dep = dep
	db = db
}
