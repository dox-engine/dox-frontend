import express from "express";

import type { Response, Router } from "express";

const siteRouter: Router = express.Router();

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
siteRouter.get("/api/v1/version", async (_, res: Response) => {
    /* return res.send(cache.get(appVersionAPI)); */
    return res.send("OK");
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
siteRouter.get("/api/v1/invalidate", async (_, res: Response) => {
    /* cache.set(cacheControlPrefix, "true"); */

    return res.send("ok");
});

export {
    siteRouter
};