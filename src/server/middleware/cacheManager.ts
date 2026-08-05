import type { NextFunction } from "express";

async function ExpressCacheManagerMiddleware (next: NextFunction) {

    /* if (!cache.has(cacheControlPrefix)) {
        
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
    }; */

    next();
};

export {
    ExpressCacheManagerMiddleware
};