import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authReducer } from "./auth/auth.slice";
import { apiSlice } from "./apis/api.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useLoginMutation,
  useRegisterActionMutation,
  useVerifyOtpMutation,
  useLoginGoogleMutation,
  useResetPasswordMutation,
  useSetPasswordMutation,
  useResendOtpMutation,
} from "./auth/auth.api";

export { useGetCategoriesQuery } from "./category/category.api";

export { useGetCoursesQuery } from "./course/course.api";

export {
  useAdminLoginMutation,
  useGetActiveUserQuery,
  useGetActiveClassQuery,
  useGetActivePremiumQuery,
  useGetAdminDashboardQuery,
} from "./admin/admin.api";
