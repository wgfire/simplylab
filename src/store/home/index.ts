import { createSlice } from "@reduxjs/toolkit";

export interface InintStateProps {
  searchValue: string;
}
const initialState: InintStateProps = {
  searchValue: "",
};

const HomeStore = createSlice({
  name: "homeStore",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
});
export const { setSearchValue } = HomeStore.actions;

export default HomeStore.reducer;
