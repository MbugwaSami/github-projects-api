import http, { Server } from "http";
import app from "./app";


const port: number = parseInt(process.env.PORT, 10) || 4000;
const server: Server = http.createServer(app);
server.listen(port, () => {
  console.log(`find me at http://localhost:${port}`);
});