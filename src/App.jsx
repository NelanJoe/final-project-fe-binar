import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register } from "@/views/Auth";
import Courses from "@/views/Courses";
import CoursesDetail from "@/views/Courses/pages/courses-detail";
import Otp from "@/views/Auth/pages/otp";
import Profile from "@/views/Profil/pages/profil";
import Newpassword from "@/views/Profil/pages/new-password";
import PaymentHistory from "@/views/Profil/pages/payment-history";
import Notifcation from "./views/Profil/pages/notifcation";
export default function App() {
  return (
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

        <Route path="profile" element={<Profile />} />
        <Route path="newpassword" element={<Newpassword />} />
        <Route path="paymenthistory" element={<PaymentHistory />} />
        <Route path="notifikasi" element={<Notifcation />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster position="top-left" />
    </BrowserRouter>
  );
}
