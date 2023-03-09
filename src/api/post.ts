import axios from "axios";
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
  getPagingByCate: async (params: any) => {
    const query = convertObjectToQuery(params);
    const url = `/getPostByCate` + query;

    try {
      const response = await fetchApi().get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
  getAllPost: async () => {
    const url = pathname + `/posts/getPaging`;

    try {
      const response = await axios.get(
        "http://localhost:8000/api/posts/getPaging?pageSize=10000&pageIndex=1"
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  getAllPostByCate: async () => {
    const url = pathname + `/posts/getPaging`;

    try {
      const response = await axios.get(
        "http://localhost:8000/api/getAllPostByCate"
      );
      return response.data;
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
