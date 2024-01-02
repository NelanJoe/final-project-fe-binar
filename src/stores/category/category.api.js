import { apiSlice } from "../apis/api.slice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return {
          url: "/home/category",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
