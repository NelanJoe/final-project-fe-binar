import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/views/Home";
import Error from "@/views/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
