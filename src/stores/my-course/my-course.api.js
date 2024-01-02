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
    getAllCourseReview: builder.query({
      query: (myCourseId) => {
        return {
          url: `/course/review/${myCourseId}`,
          method: "GET",
        };
      },
    }),
    postCourseReview: builder.mutation({
      query: ({ myCourseId, data }) => {
        return {
          method: "POST",
          url: `/course/review/${myCourseId}`,
          body: data,
        };
      },
    }),
    postProgressVideo: builder.mutation({
      query: ({ myCourseId, videoId }) => {
        return {
          method: "POST",
          url: `/course/progres/${myCourseId}/${videoId}`,
        };
      },
    }),
  }),
});

export const {
  useGetMyCoursesQuery,
  useGetMyCourseByIdQuery,
  useGetAllCourseReviewQuery,
  usePostCourseReviewMutation,
  usePostProgressVideoMutation,
} = myCourseApi;
