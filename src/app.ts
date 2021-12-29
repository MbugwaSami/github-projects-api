import express, { Request, Response } from "express";
import cors from "cors";


import AppRoutes from "./modules";

// Set up the express app
const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(express.json());

AppRoutes(app);

// Setup a default for catch-all routes
app.use("*", (req: Request, res: Response) =>
  res.status(200).send({
    message: "Not Found. Use /api to access the Api.",
  })
);

export default app;
