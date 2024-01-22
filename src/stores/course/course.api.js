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
      transformResponse: (result) => {
        return result?.popular;
      },
      providesTags: (result) => {
        if (result?.popular) {
          return [
            { type: "Popular", id: "LIST" },
            ...result.popular.map(({ id }) => ({ type: "Popular", id })),
          ];
        } else {
          return [{ type: "Popular", id: "LIST" }];
        }
      },
    }),
    getCourses: builder.query({
      query: ({ keyword, type, filter, categori, level, page }) => {
        return {
          url: `/course?search=${keyword}&type=${type}&filter=${filter}&kategori=${categori}&level=${level}&page=${page}`,
          method: "GET",
        };
      },
      transformResponse: (result) => {
        return result?.course;
      },
      providesTags: (result) => {
        if (result?.course) {
          return [
            { type: "Course", id: "LIST" },
            ...result.course.map(({ id }) => ({ type: "Course", id })),
          ];
        } else {
          return [{ type: "Course", id: "LIST" }];
        }
      },
    }),
    getCourseById: builder.query({
      query: (courseId) => {
        return {
          url: `/course/${courseId}`,
          method: "GET",
        };
      },
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Course", id: arg.id }];
      },
    }),
    getDetailCoursePopup: builder.query({
      query: (courseId) => {
        return {
          url: `/course/popup/${courseId}`,
          method: "GET",
        };
      },
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Course", id: arg.id }];
      },
    }),
    getCourseOrderById: builder.query({
      query: (courseId) => {
        return {
          url: `/course/order/${courseId}`,
          method: "GET",
        };
      },
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Course", id: arg.id }];
      },
    }),
    postOrderCourseById: builder.mutation({
      query: (courseId) => {
        return {
          url: `/course/order/${courseId}`,
          method: "POST",
        };
      },
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Course", id: arg.id }];
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
    invalidatesTags: (result, error, arg) => {
      return [{ type: "MyCourse", id: arg.id }];
    },
  }),
});

export const {
  useGetHomeCoursesQuery,
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetDetailCoursePopupQuery,
  useGetCourseOrderByIdQuery,
  usePostOrderCourseByIdMutation,
  usePatchOrderCourseByIdMutation,
} = courseApi;
