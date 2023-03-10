import { PostApi } from "@/src/api/post";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PostState {
  a: string;
}

const defaultState: PostState = {
  a: "321321321",
};

const postSlice = createSlice({
  name: "post",
  initialState: defaultState,
  reducers: {},
});

export const getPagingByDomain = createAsyncThunk(
  "post/getPagingByDomain",
  async (params: any) => {
    try {
      const result = await PostApi.getPagingByDomain(params);
      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const getPagingByCate = createAsyncThunk(
  "/getPostByCate",
  async (params: any) => {
    try {
      const result = await PostApi.getPagingByCate(params);
      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const getPostForSpecificCate = createAsyncThunk(
  "/getPostForSpecificCate",
  async (params: any) => {
    try {
      const result = await PostApi.getPostForSpecificCate(params);
      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const getNewsBySlug = createAsyncThunk(
  "post/getNewsBySlug",
  async (params: any) => {
    try {
      const result = await PostApi.getNewsBySlug(params);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const { reducer: postReducer, actions } = postSlice;

export const {} = actions;

export default postReducer;
