import { apiSlice } from "../apis/api.slice";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: `/me/profile`,
          method: "GET",
        };
      },
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/me/profile/update`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
