import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register, ResetPassword, SetPassword } from "@/views/Auth";
import Otp from "@/views/Auth/pages/otp";
import Courses from "@/views/Courses";
import CoursesDetail from "@/views/Courses/pages/courses-detail";
import { AdminDashboard, AdminLogin } from "@/views/Admin";
import Profile from "@/views/Profil/pages/profil";
import Newpassword from "@/views/Profil/pages/new-password";
import PaymentHistory from "@/views/Profil/pages/payment-history";
import KelolaKelas from "./views/Admin/pages/kelola-kelas";
import Notifcation from "./views/Profil/pages/notifcation";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path=":id" element={<CoursesDetail />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="set-password/:token" element={<SetPassword />} />

          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="admin-kelola-kelas" element={<KelolaKelas />} />

          <Route path="profile" element={<Profile />} />
          <Route path="newpassword" element={<Newpassword />} />
          <Route path="paymenthistory" element={<PaymentHistory />} />
          <Route path="notifikasi" element={<Notifcation />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Toaster position="top-left" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
