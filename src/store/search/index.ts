/**
 * 查询页面相关逻辑
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export interface GetProductDataProps {
  login_token: string;
  search_phrase: string;
}
export interface ProductData {
  result: {
    msg: string;
    status: string;
    data: {
      product_launch_data: Array<any>;
      products: Array<{
        id: number;
        image: string;
        price: string;
        title: string;
        published_at: string;
        store_domain: string;
      }>;
      product_trends: Array<{
        search_msv: Array<{
          date: string;
          sv: number;
        }>;
      }>;
    };
  } | null;
  loading: boolean;
}

/**
 * 获取远程面积图表数据
 * @returns
 */
const fetchData = (params: GetProductDataProps) => {
  return fetch("http://3.141.23.218:5000/interview/keyword_search", {
    method: "POST",
    body: JSON.stringify(params),
  }).then((response) => {
    return response.json();
  });
};
export const getProductData = createAsyncThunk("search/getProductData", async (params: GetProductDataProps) => {
  const result = await fetchData(params);
  return result;
});

const initialState: ProductData = { result: null, loading: false } as ProductData; // 返回数据初始值

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchState: (state, { payload }) => {
      state.loading = payload.loading;
      state.result = payload.result;
    },
  },
  // extraReducers 字段让 slice 处理在别处定义的 actions，
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  extraReducers(builder) {
    builder
      .addCase(getProductData.pending, (state) => {
        console.log("🚀 ~ 进行中！");
        state.loading = true;
      })
      .addCase(getProductData.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ fulfilled", payload);
        state.loading = false;
        state.result = payload;
      })
      .addCase(getProductData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err);
        state.loading = false;
      });
  },
});

export const { setSearchState } = searchSlice.actions;

export default searchSlice.reducer;
