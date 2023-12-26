import { apiSlice } from "../apis/api.slice";

export const myCourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyCourses: builder.query({
      query: ({ keyword, categori, filter, level, progress, page }) => {
        return {
          url: `/my-course?search=${keyword}&kategori=${categori}&filter=${filter}&level=${level}&progress=${progress}&page=${page}`,
          method: "GET",
        };
      },
    }),
    getMyCourseById: builder.query({
      query: (id) => {
        return {
          url: `/my-course/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetMyCoursesQuery, useGetMyCourseByIdQuery } = myCourseApi;
