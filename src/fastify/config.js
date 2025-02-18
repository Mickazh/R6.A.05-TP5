import Fastify from "fastify";
import { readFileSync } from "fs";
import routes from '../routes/routes.js'

export const app = Fastify({
  http2: true,
  https: {
    allowHTTP1: true,
    key: readFileSync("./keys/server.key"),
    cert: readFileSync("./keys/server.crt"),
  },
  logger: true,
});
