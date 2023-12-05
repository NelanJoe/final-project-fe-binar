import { apiSlice } from "../apis/api.slice";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (category) => {
        return {
          url: `/home/popular/?category=${category}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
