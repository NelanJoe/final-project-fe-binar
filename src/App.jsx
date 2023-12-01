import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register } from "@/views/Auth";
import Courses from "@/views/Courses";
import CoursesDetail from "@/views/Courses/pages/courses-detail";
import Otp from "@/views/Auth/pages/otp";

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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
