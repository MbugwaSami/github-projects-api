import { Request, Response } from "express";
import axios from "axios";

export interface IProjectsReqParams {
  githubUserName: string;
}

export interface IProjectReadmeReqParams extends IProjectsReqParams {
  projectName: string;
}

export const getAllProjects = async (
  req: Request<IProjectsReqParams>,
  res: Response
) => {
  try {
    const { githubUserName } = req.params;
    const projectsUrl = "https://api.github.com/users/{0}/repos".replace(
      "{0}",
      githubUserName
    );
    const result = await axios.get(projectsUrl);
    res.status(200).send(result.data);
  } catch (error) {
    if (error.response.status === 404) {
      res.status(404).send({
        message: "Username was not found.",
      });
    } else {
      res.status(500).send({
        message: error.message,
      });
    }
  }
};

export const getProjectReadme = async (
  req: Request<IProjectReadmeReqParams>,
  res: Response
) => {
  try {
    const { githubUserName, projectName } = req.params;
    const reqOptions = {
      headers: {
        Accept: "application/vnd.github.VERSION.html",
      },
    };

    const readmeUrl = "https://api.github.com/repos/{0}/{1}/contents/README.md"
      .replace("{0}", githubUserName)
      .replace("{1}", projectName);
    const result = await axios.get(readmeUrl, reqOptions);
    res.status(200).send(result.data);
  } catch (error) {
    if (error.response.status === 404) {
        res.status(404).send({
          message: "Repo has no Readme",
        });
      } else {
        res.status(500).send({
          message: error.message,
        });
      }
  }
};
