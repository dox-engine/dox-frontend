import { OpenApiAxios } from "@web-bee-ru/openapi-axios";

import type { paths } from "@/client/core/api/types/front-api";

import { AxiosClient } from "@/client/core/api/services";

const AxiosHelper = new OpenApiAxios<paths, "axios">(AxiosClient, {
    validStatus: "axios"
});

export {
    AxiosHelper
};