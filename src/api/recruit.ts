import { fetchApi } from ".";
import { convertObjectToQuery } from "../utils";

const pathname = "/recruits";

export const RecruitApi = {
  getRecruitsByDomain: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = pathname + `/getRecruitsByDomain` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },

  getRecruitById: async (id: string) => {
    const url = pathname + `/getRecruitById/` + id;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },

  getRecruitBySlug: async (params: any) => {
    const query = convertObjectToQuery(params);

    const url = pathname + `/getRecruitBySlug/` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },

  getRelativeRecruits: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = pathname + `/getRelativeRecruits` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
