import { apiSlice } from "../apis/api.slice";

const notificationaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/me/notifications",
        };
      },
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationaApi;
