import type { Request, Response, NextFunction } from "express";

import { env_mode } from "@/server/utils/env";

async function ExpressSwaggerProdMiddleware(req: Request, res: Response, next: NextFunction) {
    const baseApiDocUrl = "/api-doc";
    const isApiDocRoute = req.originalUrl.search(baseApiDocUrl);
    if (env_mode === "production" && (isApiDocRoute !== -1 || req.originalUrl === "/api-openapi/openapi.json")) {
        return res.sendStatus(404);
    };
    next();
}

export {
    ExpressSwaggerProdMiddleware
};