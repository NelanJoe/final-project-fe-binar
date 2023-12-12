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
      query: ({ accessToken }) => {
        return {
          url: "/auth/google",
          method: "POST",
          body: {
            access_token: accessToken,
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: {
            email: email,
          },
        };
      },
    }),
    setPassword: builder.mutation({
      query: ({ token, password }) => {
        return {
          url: `/auth/set-password/${token}`,
          method: "POST",
          body: {
            password: password,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterActionMutation,
  useVerifyOtpMutation,
  useLoginGoogleMutation,
  useResetPasswordMutation,
  useSetPasswordMutation,
} = authApi;
