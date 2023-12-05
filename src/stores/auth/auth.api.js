import { apiSlice } from "../apis/api.slice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    registerAction: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: ({ email, validasiCode }) => {
        return {
          url: `/auth/otp/${email}`,
          method: "POST",
          body: {
            validasi: validasiCode,
          },
        };
      },
    }),
    loginGoogle: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/google",
          method: "POST",
          body: data,
        };
      }
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterActionMutation,
  useVerifyOtpMutation,
  useLoginGoogleMutation,
} = authApi;
