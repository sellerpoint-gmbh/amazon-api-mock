// @ts-ignore
import { MemoryStore } from './MemoryStore.cjs'
import type { MemoryStore as MemoryStoreType } from './MemoryStore'

const memoryStore = new MemoryStore() as MemoryStoreType

export const orders = memoryStore.collection('orders')
