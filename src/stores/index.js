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

export {
  useGetHomeCoursesQuery,
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetDetailCoursePopupQuery,
  useGetCourseOrderByIdQuery,
  usePostOrderCourseByIdMutation,
  usePatchOrderCourseByIdMutation,
} from "./course/course.api";

export { useGetNotificationsQuery } from "./notification/notification.api";

export {
  useAdminLoginMutation,
  useGetActiveUserQuery,
  useGetActiveClassQuery,
  useGetActivePremiumQuery,
  useGetAdminDashboardQuery,
  useGetAdminKelolaKelasQuery,
  useGetAllCategorysQuery,
  usePostCategoryMutation,
  usePutEditCategoryMutation,
  usePutDeleteCategoryMutation
} from "./admin/admin.api";

export {
  useGetMyCoursesQuery,
  useGetMyCourseByIdQuery,
} from "./my-course/my-course.api";

export {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "./profile/profile.api";
