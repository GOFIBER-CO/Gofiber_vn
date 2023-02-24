import { SeoApi } from "@/src/api/seo";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface HomeState {
  drawer: boolean;
  buyPackage: {
    count: number;
    item: any;
  };
  visibleSearch: false;
  searchValue: string;
  searchData: any[];
}

const defaultState: HomeState = {
  drawer: false,
  buyPackage: {
    count: 0,
    item: {},
  },
  visibleSearch: false,
  searchValue: "",
  searchData: [],
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
    updateSearchData: (state, { payload }) => {
      state.searchData = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchByDomain.fulfilled, (state, { payload }) => {
      const { data } = payload?.data;
      state.searchData = data || [];
    });
  },
});

export const searchByDomain = createAsyncThunk(
  "home/searchByDomain",
  async (params: any) => {
    try {
      const result = await SeoApi.searchByDomain(params);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const { reducer: homeReducer, actions } = homeSlice;

export const {
  updateDrawer,
  updateBuyPackage,
  updateSearchValue,
  updateVisibleSearch,
  updateSearchData,
} = actions;

export default homeReducer;
