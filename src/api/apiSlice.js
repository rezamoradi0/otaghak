import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ADDRESS } from "../constant/address";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: API_ADDRESS }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => "cities",
      providesTags: ["Cities"],
    }),
    getSearchDefault: builder.query({
      query: () => "main-search-def",
      providesTags: ["main-search-def"],
    }),
    getSearchText:builder.query({
      query:(text)=>`cities?describe_like=${text}`
    })
    
    
  }),
});
export const { useGetCitiesQuery,useGetSearchDefaultQuery,useGetSearchTextQuery } = apiSlice;
