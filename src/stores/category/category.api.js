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
      transformResponse: (result) => {
        return result?.categories;
      },
      providesTags: (result) => {
        if (result?.categories) {
          return [
            { type: "Category", id: "LIST" },
            ...result.categories.map(({ id }) => ({ type: "Category", id })),
          ];
        } else {
          return [{ type: "Category", id: "LIST" }];
        }
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
