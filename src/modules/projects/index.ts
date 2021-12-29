import express from "express";
import { getAllProjects, getProjectReadme } from "./projectsController";

const projectsRouter = express.Router();

projectsRouter.get("/projects/:githubUserName", getAllProjects);
projectsRouter.get("/projects/:githubUserName/:projectName", getProjectReadme);


export default projectsRouter;
