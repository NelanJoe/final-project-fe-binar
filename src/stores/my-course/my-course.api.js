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
      providesTags: (result) => {
        if (result?.MyCourse) {
          return [
            { type: "MyCourse", id: "LIST" },
            ...result.MyCourse.map(({ id }) => ({ type: "MyCourse", id })),
          ];
        } else {
          return [{ type: "MyCourse", id: "LIST" }];
        }
      },
    }),
    getMyCourseById: builder.query({
      query: (id) => {
        return {
          url: `/my-course/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: (result, error, arg) => {
        return [{ type: "MyCourse", id: arg.id }];
      },
    }),
    getAllCourseReview: builder.query({
      query: (myCourseId) => {
        return {
          url: `/course/review/${myCourseId}`,
          method: "GET",
        };
      },
      providesTags: (result) => {
        if (result?.review) {
          return [
            { type: "Review", id: "LIST" },
            ...result.review.map(({ id }) => ({ type: "Review", id })),
          ];
        } else {
          return [{ type: "Review", id: "LIST" }];
        }
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
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Review", id: arg.myCourseId }];
      },
    }),
    postProgressVideo: builder.mutation({
      query: ({ myCourseId, videoId }) => {
        return {
          method: "POST",
          url: `/course/progres/${myCourseId}/${videoId}`,
        };
      },
      invalidatesTags: (result, error, arg) => {
        if (arg) {
          return [{ type: "MyCourse", id: arg.videoId }];
        }
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
