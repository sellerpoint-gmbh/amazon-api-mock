import { RequestHandler } from "../../lib/RequestHandler";
import { ResponseFactory } from "../../lib/ResponseFactory";
import { MemoryStore } from "../../lib/MemoryStore";
import * as definitions from "../../lib/validation/definitions.zod";
import * as custom from "../../lib/validation/custom.zod";
import * as dep from "../../lib/dep";
import { Order } from "../types/definitions/Order";
import { Destination } from "../types/definitions/Destination";
import { Subscription } from "../types/definitions/Subscription";

const memoryStore = new MemoryStore();

const db = {
  orders: memoryStore.collection<Order>("orders"),
  destinations: memoryStore.collection<Destination>("destinations"),
  subscriptions: memoryStore.collection<Subscription>("subscriptions"),
};

export class Context {
  RequestHandler = RequestHandler;
  ResponseFactory = ResponseFactory;
  z = {
    ...definitions,
    ...custom,
  };
  dep = dep;
  db = db;
}
