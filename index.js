const buildRouter = (routes) => (
  {
    serve: (outerRoute) => {
      const route = routes.find(({ path }) => path === outerRoute);
      if (!route) {
        throw new Error();
      }
      return route.handler;
    },
  }
);

export default (routes) => {
  const router = buildRouter(routes);
  return router;
};
