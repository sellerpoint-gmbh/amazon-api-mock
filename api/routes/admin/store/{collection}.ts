export const GET = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: 'ADMIN_getStore',
      validation: {
        path: {
          collection: _req.context.dep.z.enum(Object.keys(_req.context.db)),
        },
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);

      const items = req.context.db[req.path.collection].findAll();

      return responseFactory.make(200, items);
    }
  );

export const POST = (_req) =>
  _req.context.RequestHandler.handle(
    _req,
    {
      name: 'ADMIN_updateStore',
      validation: {
        path: {
          collection: _req.context.dep.z.enum(Object.keys(_req.context.db)),
        },
        jsonBody: _req.context.z[_req.path.collection],
      },
    },
    (req: typeof _req) => {
      const responseFactory = new req.context.ResponseFactory(req);

      req.context.db[req.path.collection].setData(req.body);

      return responseFactory.make(200, {});
    }
  );
