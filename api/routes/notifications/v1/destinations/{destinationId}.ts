import type { HTTP_GET } from "../../../../types/paths/notifications/v1/destinations/{destinationId}.types.js";
import type { HTTP_DELETE } from "../../../../types/paths/notifications/v1/destinations/{destinationId}.types.js";

export const GET: HTTP_GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "getDestination",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      validation: {
        path: "uuid",
      },
      grantless: true,
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const destination = req.context.db.destinations.findOne({
        destinationId: req.path.destinationId,
      });

      if (!destination) {
        return responseFactory.make(404);
      }

      return responseFactory.make(200, destination);
    },
  );

export const DELETE: HTTP_DELETE = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: "deleteDestination",
      rateLimit: {
        requestsPerSecond: 1,
        burst: 5,
      },
      validation: {
        path: "uuid",
      },
      grantless: true,
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);
      const ok = req.context.db.destinations.delete({
        destinationId: req.path.destinationId,
      });

      if (ok) {
        return responseFactory.make(200);
      } else {
        return responseFactory.make(404);
      }
    },
  );
