import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface HomeState {
  drawer: boolean;
  buyPackage: {
    count: number;
    item: any;
  };
}

const defaultState: HomeState = {
  drawer: false,
  buyPackage: {
    count: 0,
    item: {},
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState: defaultState,
  reducers: {
    updateDrawer: (state, { payload }) => {
      state.drawer = payload;
    },
    updateBuyPackage: (state, { payload }) => {
      console.log("payload", payload);
      state.buyPackage = payload;
    },
  },
});

const { reducer: homeReducer, actions } = homeSlice;

export const { updateDrawer, updateBuyPackage } = actions;

export default homeReducer;
