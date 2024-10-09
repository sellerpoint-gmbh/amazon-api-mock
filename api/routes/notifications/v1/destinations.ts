import { Destination } from "../../../types/definitions/Destination.js";
import type { HTTP_GET } from "../../../types/paths/notifications/v1/destinations.types.js";
import type { HTTP_POST } from "../../../types/paths/notifications/v1/destinations.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getDestinations",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      grantless: true,
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const destinations = req.context.db.destinations.findAll();

      return responseFactory.make(200, destinations);
    },
  );

export const POST: HTTP_POST = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "createDestination",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      validation: {
        jsonBody: _req.context.z.createDestinationRequestSchema.strict(),
      },
      grantless: true,
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const destination = req.context.db.destinations.insert({
        name: req.body.name,
        destinationId: req.context.dep.crypto.randomUUID(),
        resource: {
          sqs: !req.body.resourceSpecification.sqs
            ? undefined
            : {
                arn: req.body.resourceSpecification.sqs.arn,
              },
          eventBridge: req.body.resourceSpecification.eventBridge,
        },
      } as Destination);

      return responseFactory.make(200, destination);
    },
  );
