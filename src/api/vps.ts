import { fetchApi } from ".";
import { convertObjectToQuery } from "../utils";

const pathname = "/vps";

export const VpsApi = {
  getAllVpsByVpsTab: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = pathname + `/getAllVpsByVpsTab` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
