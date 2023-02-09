import { HostingApi } from "@/src/api/hosting";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface HostingState {
  a: string;
}

const defaultState: HostingState = {
  a: "321321321",
};

const hostingSlice = createSlice({
  name: "hosting",
  initialState: defaultState,
  reducers: {},
});

export const getAllHosting = createAsyncThunk(
  "hosting/getAllHosting",
  async (params: any) => {
    try {
      const result = await HostingApi.getAllHosting(params);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const { reducer: hostingReducer, actions } = hostingSlice;

export const {} = actions;

export default hostingReducer;
