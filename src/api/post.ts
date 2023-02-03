import { fetchApi } from ".";
import { convertObjectToQuery } from "../utils";

const pathname = "/posts";

export const PostApi = {
  getPagingByDomain: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = pathname + `/domain/getPagingByDomain` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },

  getNewsBySlug: async (params: any) => {
    const query = convertObjectToQuery(params);

    const url = pathname + `/domain/getByDomainAndSlug` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
