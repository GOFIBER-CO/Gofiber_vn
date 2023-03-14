import axios from 'axios';
import { fetchApi } from '.';

const pathname = '/orders';

export const OrderApi = {
  postNewOrder: async (data: any) => {
    const url = pathname + `/create`;

    try {
      const response = await fetchApi().post(url, data);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
