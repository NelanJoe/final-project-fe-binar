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
      }
    })
  }),
});

export const {
  useAdminLoginMutation,
  useGetActiveUserQuery,
  useGetActiveClassQuery,
  useGetActivePremiumQuery,
  useGetAdminDashboardQuery,
  useGetAdminKelolaKelasQuery
} = adminApi;
