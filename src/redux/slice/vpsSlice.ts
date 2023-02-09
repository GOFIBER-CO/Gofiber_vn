import { VpsApi } from "@/src/api/vps";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface VpsState {
  a: string;
}

const defaultState: VpsState = {
  a: "321321321",
};

const vpsSlice = createSlice({
  name: "vps",
  initialState: defaultState,
  reducers: {},
});

export const getAllVpsByVpsTab = createAsyncThunk(
  "vps/getAllVpsByVpsTab",
  async (params: any) => {
    try {
      const result = await VpsApi.getAllVpsByVpsTab(params);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const { reducer: vpsReducer, actions } = vpsSlice;

export const {} = actions;

export default vpsReducer;
