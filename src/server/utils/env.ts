import type { ViteMode } from "@/server/types";

const port: number = (process.env.PORT || 3000) as number;
const host: string = (process.env.HOST || "localhost") as string;
const env_mode: ViteMode = (process.env.NODE_ENV || "development") as ViteMode
const swagger_route: string = (process.env.SWAGGER_ROUTE || "api-doc") as string;

export {
    port,
    host,
    env_mode,
    swagger_route
};