import { RecruitApi } from "@/src/api/recruit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PostState {
  a: string;
}

const defaultState: PostState = {
  a: "321321321",
};

const recruitSlice = createSlice({
  name: "recruit",
  initialState: defaultState,
  reducers: {},
});

export const getRecruitsByDomain = createAsyncThunk(
  "recruit/getRecruitsByDomain",
  async (params: any) => {
    try {
      const result = await RecruitApi.getRecruitsByDomain(params);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const getRecruitById = createAsyncThunk(
  "recruit/getRecruitById",
  async (id: string) => {
    try {
      const result = await RecruitApi.getRecruitById(id);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const getRelativeRecruits = createAsyncThunk(
  "recruit/getRelativeRecruits",
  async (params: any) => {
    try {
      const result = await RecruitApi.getRelativeRecruits(params);

      return result;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const { reducer: recruitReducer, actions } = recruitSlice;

export const {} = actions;

export default recruitReducer;
