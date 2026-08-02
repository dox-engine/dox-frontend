import express from "express";
import type { Request, Response } from "express";
import ViteExpress from "vite-express";

import dotenv from "@dotenvx/dotenvx";

import SwaggerUi from "swagger-ui-express";
import SwaggerJsDoc from "swagger-jsdoc";

import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

type ViteMode = "development" | "production" | undefined;

const cache = new Map<string, string>();

enum PageStatusEnum {
    PAGE_STATUS = "PAGE_STATUS",
};

const pageStatusCache = new Map<PageStatusEnum, string>();

const cacheControlPrefix = "invalidated";
const appVersionAPI = "app_version";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const port = (process.env.PORT || 3000) as number;
const host = (process.env.HOST || "localhost") as string;
const env_mode: ViteMode = (process.env.NODE_ENV || "development") as ViteMode

const routes: string[] = [
    "main",
    "books",
    "bookDetail",
    "papers",
    "paperDetail",
    "about",
    "contact"
];

const server = app.listen(port, host);

const SwaggerSpec = SwaggerJsDoc({
    swaggerDefinition: {
        openapi: '3.2.0',
        info: {
            title: "DOX-ENGINE API(FRONT-END)",
            description: "A Shadow library. This part of api contains Api frontend such as site setting, etc...",
            version: "0.0.1-alpha-0.1",
            license: {
                name: "MIT",
                url: "https://google.com",
            },
            
        },
    },
    apis: [`${__dirname}/main.ts`], // files containing annotations as above
});

app.use(async (req, res, next) => {
    const baseApiDocUrl = "/api-doc";
    const isApiDocRoute = req.originalUrl.search(baseApiDocUrl);
    if (env_mode === "production" && (isApiDocRoute !== -1 || req.originalUrl === "/api-openapi/openapi.json")) {
        return res.sendStatus(404);
    };
    next();
});

app.use("/api-doc", SwaggerUi.serve, SwaggerUi.setup(SwaggerSpec))

app.get("/api-openapi/openapi.json", (_, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(SwaggerSpec);
});

app.use(async (_, __, next) => {

    if (!cache.has(cacheControlPrefix)) {
        
        cache.set(cacheControlPrefix, "false");
        
        console.log("FAKE REQUEST");
        
        const fetchedREQUEST = "0.0.1-alpha-0.1";
        cache.set(appVersionAPI, fetchedREQUEST);
        
        return next();
    };

    if (cache.has(cacheControlPrefix) && cache.get(cacheControlPrefix) === "true") {
        cache.set(cacheControlPrefix, "false");
        
        console.log("FAKE REQUEST");
        
        const fetchedREQUEST = "0.0.1-alpha-0.2";
        cache.set(appVersionAPI, fetchedREQUEST);
        
        return next();
    };

    next();
});

/**
 * @swagger
 * tags:
 *   name: Site
 *   description: Set or Get Site Setting
 */

/**
 * @swagger
 * /api/v1/version:
 *   get:
 *     summary: Get CMS version
 *     description: Returns the current version of the API from cache
 *     tags:
 *       - Site
 *     operationId: getApiVersion
 *     responses:
 *       200:
 *         description: API version retrieved successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               pattern: ^v\d+\.\d+\.\d+$
 *               description: API version in semantic versioning format
 *               example: "v1.2.3"
 *           application/json:
 *             schema:
 *               type: string
 *               example: "v1.2.3"
 *       404:
 *         description: Version not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Version information not available"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to retrieve version information from cache"
 *                 details:
 *                   type: string
 *                   example: "Cache service unavailable"
 */
app.get("/api/v1/version", async (_, res) => {
    return res.send(cache.get(appVersionAPI));
});

/**
 * @swagger
 * /api/v1/invalidate:
 *   get:
 *     summary: Invalidate cache
 *     description: |
 *       Forces cache invalidation by setting the cache control flag to true.
 *       This will cause the system to bypass cached data on subsequent requests.
 *     tags:
 *       - Site
 *     operationId: invalidateCache
 *     responses:
 *       200:
 *         description: Cache invalidated successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               enum: ["ok"]
 *               example: "ok"
 *       401:
 *         description: Unauthorized - Authentication required
 *         content:
 *           application/json:
 *             example:
 *               error: "Authentication required"
 *       403:
 *         description: Forbidden - Insufficient permissions
 *         content:
 *           application/json:
 *             example:
 *               error: "Insufficient permissions to invalidate cache"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             example:
 *               error: "Failed to invalidate cache"
 *               details: "Cache service unavailable"
 */
app.get("/api/v1/invalidate", async (_, res) => {
    cache.set(cacheControlPrefix, "true");

    return res.send("ok");
});

/**
 * @swagger
 * tags:
 *   name: Pages
 *   description: Set or Get Site Pages Setting
 */

/**
 * @swagger
 * /api/v1/pages/{pageString}:
 *   get:
 *     summary: Get page status
 *     description: Retrieves the active status of a specific page by its string identifier
 *     tags:
 *       - Pages
 *     parameters:
 *       - in: path
 *         name: pageString
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique page identifier string
 *         example: "homepage"
 *         minLength: 1
 *         maxLength: 255
 *     responses:
 *       200:
 *         description: Page status retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isActive:
 *                   type: boolean
 *                   description: Indicates whether the page is currently active
 *                   example: true
 *             example:
 *               isActive: true
 *       400:
 *         description: Invalid page identifier
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid page identifier format"
 *       404:
 *         description: Page not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Page not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
app.get("/api/v1/pages/:pageString", async (req: Request<{pageString: string}>, res: Response) => {
    const { pageString } = req.params;
    if (routes.includes(pageString)) {
        if (routes.)
        return res.send(JSON.stringify({
            isActive: false
        }));
    };
    return res.sendStatus(404);
});

ViteExpress.config({
    mode: env_mode
})

ViteExpress.bind(app, server, () => {
    console.log(`Server is listening on port ${port}...`);
    console.log(env_mode)
});