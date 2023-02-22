import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface HomeState {
  drawer: boolean;
  buyPackage: {
    count: number;
    item: any;
  };
  visibleSearch: false;
  searchValue: string;
}

const defaultState: HomeState = {
  drawer: false,
  buyPackage: {
    count: 0,
    item: {},
  },
  visibleSearch: false,
  searchValue: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState: defaultState,
  reducers: {
    updateDrawer: (state, { payload }) => {
      state.drawer = payload;
    },
    updateBuyPackage: (state, { payload }) => {
      state.buyPackage = payload;
    },
    updateVisibleSearch: (state, { payload }) => {
      state.visibleSearch = payload;
    },
    updateSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
});

const { reducer: homeReducer, actions } = homeSlice;

export const {
  updateDrawer,
  updateBuyPackage,
  updateSearchValue,
  updateVisibleSearch,
} = actions;

export default homeReducer;
