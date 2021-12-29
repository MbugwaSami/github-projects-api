import { Express } from "express";

import ProjectsRoute from "./projects";

const apiPrefix = "/api";

const AppRoutes = (app: Express) => {
  app.use(apiPrefix, ProjectsRoute);
};

export default AppRoutes;
