import { fetchApi } from ".";
import { convertObjectToQuery } from "../utils";

const pathname = "/hosting";

export const HostingApi = {
    getAllHosting: async (params: any) => {
        const query = convertObjectToQuery(params);
        const url = pathname + `/getAllHostings` + query;

        try {
            const response = await fetchApi().get(url);

            return response;
        } catch (error) {
            throw error;
        }
    },
};
