import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

import PrivateRoute from "@/components/common/private-route";

import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register, ResetPassword, SetPassword, Otp } from "@/views/Auth";
import {
  AdminDashboard,
  AdminLogin,
  Sources,
  Chapters,
  Course,
} from "@/views/Admin";

import Courses from "@/views/Courses";
import CoursesDetail from "@/views/Courses/pages/courses-detail";
import { Payment, PaymentSuccess } from "@/views/Payment";
import { MyCourses, MyCoursesDetail } from "./views/MyCourses";

import {
  Profile,
  ProfileChangePassword,
  ProfilePaymentHistory,
} from "@/views/Profile";
import Notification from "./views/Notification";
import Category from "./views/Admin/pages/category";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          {/* Home pages */}
          <Route path="/" element={<Home />} />

          {/* Courses pages */}
          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path=":id" element={<CoursesDetail />} />
          </Route>

          {/* My Courses pages */}
          <Route element={<PrivateRoute />}>
            <Route path="my-courses">
              <Route index element={<MyCourses />} />
              <Route path=":id" element={<MyCoursesDetail />} />
            </Route>
          </Route>

          {/* Payment page */}
          <Route element={<PrivateRoute />}>
            <Route path="payment/:id" element={<Payment />} />
            <Route path="payment-success/:id" element={<PaymentSuccess />} />
          </Route>

          {/* Auth Page */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="set-password/:token" element={<SetPassword />} />

          {/* Admin page */}
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="course" element={<Course />} />
          <Route path="sources" element={<Sources />} />
          <Route path="chapters" element={<Chapters />} />

          {/* Notification pages */}
          <Route element={<PrivateRoute />}>
            <Route path="notification" element={<Notification />} />
          </Route>

          {/* Profile page */}
          <Route element={<PrivateRoute />}>
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route
                path="change-password"
                element={<ProfileChangePassword />}
              />
              <Route
                path="payment-history"
                element={<ProfilePaymentHistory />}
              />
            </Route>
          </Route>

          {/* Profile page */}
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="change-password" element={<ProfileChangePassword />} />
            <Route path="payment-history" element={<ProfilePaymentHistory />} />
          </Route>

          {/* Profile page */}
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="change-password" element={<ProfileChangePassword />} />
            <Route path="payment-history" element={<ProfilePaymentHistory />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
        <Toaster position="top-left" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
