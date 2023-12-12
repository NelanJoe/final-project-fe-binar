import { apiSlice } from "../apis/api.slice";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (keyword) => {
        return {
          url: `/home/popular?categori=${keyword}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
