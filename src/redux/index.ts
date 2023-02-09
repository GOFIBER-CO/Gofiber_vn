import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import fpReducer from "./slice/fpSlice";
import postReducer from "./slice/postSlice";
import recruitReducer from "./slice/recruitSlice";
import hostingReducer from "./slice/hostingSlice";
import vpsReducer from "./slice/vpsSlice";

const rootReducer = combineReducers({
  fp: fpReducer,
  post: postReducer,
  recruit: recruitReducer,
  hosting: hostingReducer,
  vps: vpsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
