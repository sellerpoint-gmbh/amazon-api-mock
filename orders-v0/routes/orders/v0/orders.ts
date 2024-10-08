import type { HTTP_GET } from '../../../types/paths/orders/v0/orders.types.js'

export const GET: HTTP_GET = $ => $.response[200].random()
