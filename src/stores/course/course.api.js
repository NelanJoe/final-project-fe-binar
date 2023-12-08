import { apiSlice } from "../apis/api.slice";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.mutation({
      query: ({ category }) => {
        return {
          url: `/home/popular`,
          method: "POST",
          body: {
            category,
          },
        };
      },
    }),
  }),
});

export const { useGetCoursesMutation } = courseApi;
