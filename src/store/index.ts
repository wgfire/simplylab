import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./home";
import SearchSlice from "./search";
let reducer = {
  home: HomeSlice,
  search: SearchSlice,
};

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: reducer,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
