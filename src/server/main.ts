import type { Express } from "express";

import express from "express";
import ViteExpress from "vite-express";

import dotenv from "@dotenvx/dotenvx";

import { port, host, env_mode } from "@/server/utils/env";

// Routes
import { swaggerRouter } from "@/server/routes/swagger";
import { pagesRouter } from "@/server/routes/pages";
import { siteRouter } from "@/server/routes/site";

dotenv.config();

const app: Express = express();

app.use(swaggerRouter);
app.use(pagesRouter);
app.use(siteRouter);

const server = app.listen(port, host);

ViteExpress.config({
    mode: env_mode
});

ViteExpress.bind(app, server);