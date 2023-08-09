import dotenv from "dotenv";
import Server from "./models/serve.js";

dotenv.config();

const server = new Server();

server.listen();



