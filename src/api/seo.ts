import { fetchApi } from ".";
import { convertObjectToQuery } from "../utils";

const pathname = "/seo";

export const SeoApi = {
  getSeoByLink: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = pathname + `/getSeoByLink` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },

  searchByDomain: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = pathname + `/searchByDomain` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
