import SwaggerJsDoc from "swagger-jsdoc";
import path from "path";

import { ExpressGetDirName } from "@/server/utils/path";

const SwaggerSpec = SwaggerJsDoc({
    swaggerDefinition: {
        openapi: "3.2.0",
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
    apis: [
        path.join(ExpressGetDirName(import.meta.url, "./"), "../routes/site/index.ts"),
        path.join(ExpressGetDirName(import.meta.url, "./"), "../routes/pages/index.ts"),
    ], // files containing annotations as above
});

export {
    SwaggerSpec
};