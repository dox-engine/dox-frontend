import express from "express";

import type { Response, Router } from "express";

import SwaggerUi from "swagger-ui-express";

// Middlewares function
import { ExpressSwaggerProdMiddleware } from "@/server/middleware/swagger";

import { SwaggerSpec } from "@/server/swagger";

const swaggerRouter: Router = express.Router();

swaggerRouter.use(ExpressSwaggerProdMiddleware);

swaggerRouter.use("/api-doc", SwaggerUi.serve, SwaggerUi.setup(SwaggerSpec));

swaggerRouter.get("/api-openapi/openapi.json", (_, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(SwaggerSpec);
});

export {
    swaggerRouter
};