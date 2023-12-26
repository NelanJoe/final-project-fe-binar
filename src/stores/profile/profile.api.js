import { apiSlice } from "../apis/api.slice";

const profilApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getprofile: builder.mutation({
      query: () => {
        return {
          url: `/me/profile`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProfilQuery } = profilApi;
