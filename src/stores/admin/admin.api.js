import { apiSlice } from "../apis/api.slice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/login",
          method: "POST",
          body: data,
        }
      }
    })
  })
})

export const { useAdminLoginMutation } = adminApi