import { OrderApi } from '@/src/api/order';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface PostState {
  a: string;
}

const defaultState: PostState = {
  a: '321321321',
};

const postSlice = createSlice({
  name: 'order',
  initialState: defaultState,
  reducers: {},
});

export const postNewOrder = createAsyncThunk(
  'order/create',
  async (params: any) => {
    try {
      const result = await OrderApi.postNewOrder(params);
      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const { reducer: postReducer, actions } = postSlice;

export const {} = actions;

export default postReducer;
