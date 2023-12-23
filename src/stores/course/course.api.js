import { apiSlice } from "../apis/api.slice";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomeCourses: builder.query({
      query: (keyword) => {
        return {
          url: `/home/popular?categories=${keyword}`,
          method: "GET",
        };
      },
    }),
    getCourses: builder.query({
      query: ({ keyword, type, filter, categori, level, page }) => {
        return {
          url: `/course?search=${keyword}&type=${type}&filter=${filter}&kategori=${categori}&level=${level}&page=${page}`,
          method: "GET",
        };
      },
    }),
    getCourseById: builder.query({
      query: (courseId) => {
        return {
          url: `/course/${courseId}`,
          method: "GET",
        };
      },
    }),
    getMyCourses: builder.query({
      query: ({ keyword, categori, filter, level, progress, page }) => {
        return {
          url: `/my-course?search=${keyword}&kategori=${categori}&filter=${filter}&level=${level}&progress=${progress}&page=${page}`,
          method: "GET",
        };
      },
    }),
    getDetailCoursePopup: builder.query({
      query: (courseId) => {
        return {
          url: `/course/popup/${courseId}`,
          method: "GET",
        };
      },
    }),
    getCourseOrderById: builder.query({
      query: (courseId) => {
        return {
          url: `/course/order/${courseId}`,
          method: "GET",
        };
      },
    }),
    postOrderCourseById: builder.mutation({
      query: (courseId) => {
        return {
          url: `/course/order/${courseId}`,
          method: "POST",
        };
      },
    }),
    patchOrderCourseById: builder.mutation({
      query: (courseId) => {
        return {
          url: `/course/order/${courseId}`,
          method: "PATCH",
        };
      },
    }),
  }),
});

export const {
  useGetHomeCoursesQuery,
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetMyCoursesQuery,
  useGetDetailCoursePopupQuery,
  useGetCourseOrderByIdQuery,
  usePostOrderCourseByIdMutation,
  usePatchOrderCourseByIdMutation,
} = courseApi;
