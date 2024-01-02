import { apiSlice } from "../apis/api.slice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/login",
          method: "POST",
          body: data,
        };
      },
    }),
    getActiveUser: builder.query({
      query: () => {
        return {
          url: "/admin/active-user",
          method: "GET",
        };
      },
    }),
    getActiveClass: builder.query({
      query: () => {
        return {
          url: "/admin/active-class",
          method: "GET",
        };
      },
    }),
    getActivePremium: builder.query({
      query: () => {
        return {
          url: "/admin/active-premium",
          method: "GET",
        };
      },
    }),
    getAdminDashboard: builder.query({
      query: ({ filter, page, pageSize }) => {
        return {
          url: `/admin/dashboard?filter=${filter}&page=${page}&pageSize=${pageSize}`,
          method: "GET",
        };
      },
    }),
    getAdminKelolaKelas: builder.query({
      query: ({ filter, page, pageSize }) => {
        return {
          url: `/admin/kelola-kelas?filter=${filter}&page=${page}&pageSize=${pageSize}`,
          method: "GET",
        };
      },
    }),
    getAllCategorys: builder.query({
      query: () => {
        return {
          url: "/admin/category",
          method: "GET",
        };
      },
    }),
    postCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/category/create",
          method: "POST",
          body: data,
        };
      },
    }),
    putEditCategory: builder.mutation({
      query: ({ categoryId, data }) => {
        return {
          url: `/admin/category/edit/${categoryId}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    putDeleteCategory: builder.mutation({
      query: ({ categoryId, data }) => {
        return {
          url: `/admin/category/delete/${categoryId}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    getAllChapter: builder.query({
      query: () => "/admin/chapter",
    }),
    getChapterById: builder.query({
      query: (chapterId) => `/admin/chapter/${chapterId}`,
    }),
    putChapter: builder.mutation({
      query: ({ chapterId, data }) => {
        return {
          method: "PUT",
          url: `/admin/chapter/edit/${chapterId}`,
          body: data,
        };
      },
    }),
    deleteChapter: builder.mutation({
      query: ({ chapterId }) => {
        return {
          method: "DELETE",
          url: `/admin/chapter/delete/${chapterId}`,
        };
      },
    }),
    getAllCourses: builder.query({
      query: () => "/admin/course",
    }),
    getAllSources: builder.query({
      query: () => "/admin/source",
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetActiveUserQuery,
  useGetActiveClassQuery,
  useGetActivePremiumQuery,
  useGetAdminDashboardQuery,
  useGetAdminKelolaKelasQuery,
  useGetAllCategorysQuery,
  usePostCategoryMutation,
  usePutEditCategoryMutation,
  usePutDeleteCategoryMutation,
  useGetAllChapterQuery,
  useGetChapterByIdQuery,
  usePutChapterMutation,
  useDeleteChapterMutation,
  useGetAllCoursesQuery,
  useGetAllSourcesQuery,
} = adminApi;
