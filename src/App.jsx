import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register } from "@/views/Auth";
import Courses from "./views/Courses";
import Profile from "./views/Profil/pages/profil";
import Newpassword from "./views/Profil/pages/new-password";
import PaymentHistory from "./views/Profil/pages/payment-history";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses">
          <Route index element={<Courses />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
        <Route path="profile" element={<Profile />} />
        <Route path="newpassword" element={<Newpassword />} />
        <Route path="paymenthistory" element={<PaymentHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
