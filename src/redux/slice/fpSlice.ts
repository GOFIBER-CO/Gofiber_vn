import { FPApi } from '@/src/api/fp';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface FPState {
  a: string;
}

const defaultState: FPState = {
  a: '321321321',
};

const fpSlice = createSlice({
  name: 'fp',
  initialState: defaultState,
  reducers: {},
});

export const initFP = createAsyncThunk('fp/initFP', async (data: any) => {
  try {
    const result = await FPApi.init(data);

    return result;
  } catch (error: any) {
    console.log(error);
  }
});

const { reducer: fpReducer, actions } = fpSlice;

export const {} = actions;

export default fpReducer;
