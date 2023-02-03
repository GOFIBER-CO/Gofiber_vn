import { fetchApi } from '.';

const pathname = '/fp';

export const FPApi = {
  init: async (data: any) => {
    const url = pathname + `/init`;

    try {
      const response = await fetchApi().post(url, data);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
