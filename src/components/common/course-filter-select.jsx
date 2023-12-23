import { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectedToken } from "@/stores/auth/auth.selector";

const CourseFilterSelect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const token = useSelector(selectedToken);

  const [selectedValue, setSelectedValue] = useState("");

  const title = searchParams.get("title") || "";

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    if (token && pathname === "/my-courses") {
      navigate(`/my-courses?title=${title}&type=${selectedValue}`);
    } else {
      navigate(`/courses?title=${title}&type=${selectedValue}`);
    }
  }, [navigate, pathname, selectedValue, token, title]);

  return (
    <select
      className="select select-primary"
      name={token && pathname === "/my-courses" ? "progress" : "type"}
      value={selectedValue}
      onChange={handleChange}
    >
      <option disabled>Urutkan</option>
      {token && pathname === "/my-courses" ? (
        <>
          <option value="">All</option>
          <option value="InProgress">In Progress</option>
          <option value="completed">Completed</option>
        </>
      ) : (
        <>
          <option value="">All</option>
          <option value="premium">Kelas Premium</option>
          <option value="gratis">Kelas Gratis</option>
        </>
      )}
    </select>
  );
};

CourseFilterSelect.propTypes = {};

export default CourseFilterSelect;
