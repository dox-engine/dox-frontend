import express from "express";

import type { Request, Response, Router } from "express";

import { routes } from "@/server/constant/routes";

const pagesRouter: Router = express.Router();

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
pagesRouter.get("/api/v1/pages/:pageString", async (req: Request<{pageString: string}>, res: Response) => {
    const { pageString } = req.params;
    if (routes.includes(pageString)) {
        return res.send(JSON.stringify({
            isActive: true
        }));
    };
    return res.sendStatus(404);
});

export {
    pagesRouter
};