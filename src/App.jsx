import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register, ResetPassword, SetPassword, Otp } from "@/views/Auth";
import { AdminDashboard, AdminLogin } from "@/views/Admin";
import KelolaKelas from "./views/Admin/pages/kelola-kelas";

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
import MyClass from "./views/Admin/pages/my-class";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Courses pages */}
          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path=":id" element={<CoursesDetail />} />
          </Route>

          {/* My Courses page */}
          <Route path="my-courses">
            <Route index element={<MyCourses />} />
            <Route path=":id" element={<MyCoursesDetail />} />
          </Route>

          {/* Payment page */}
          <Route path="payment/:id" element={<Payment />} />
          <Route path="payment-success/:id" element={<PaymentSuccess />} />

          {/* Auth Page */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="set-password/:token" element={<SetPassword />} />

          {/* Admin page */}
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="admin-kelola-kelas" element={<KelolaKelas />} />
          <Route path="my-class" element={<MyClass />} />

          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ProfileChangePassword />} />
          <Route path="payment-history" element={<ProfilePaymentHistory />} />
          <Route path="notification" element={<Notification />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Toaster position="top-left" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
