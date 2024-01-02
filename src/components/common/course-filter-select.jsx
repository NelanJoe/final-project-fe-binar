import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const CourseFilterSelect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const filter = searchParams.get("filter") || "";
  const level = searchParams.get("level") || "";
  const category = searchParams.get("category") || "";

  const handleChange = (e) => {
    if (pathname === "/my-courses") {
      navigate(
        `/my-courses?title=${title}&progress=${e.target.value}&filter=${filter}&category=${category}&level=${level}`
      );
    } else {
      navigate(
        `/courses?title=${title}&type=${e.target.value}&filter=${filter}&category=${category}&level=${level}`
      );
    }
  };

  return (
    <select
      className="select select-primary"
      name={pathname === "/my-courses" ? "progress" : "type"}
      onChange={handleChange}
    >
      <option disabled>Urutkan</option>
      {pathname === "/my-courses" ? (
        <>
          <option value="">All</option>
          <option value="InProgress">In Progress</option>
          <option value="completed">Completed</option>
        </>
      ) : (
        <>
          <option value="">All</option>
          <option value="gratis">Kelas Gratis</option>
          <option value="premium">Kelas Premium</option>
        </>
      )}
    </select>
  );
};

CourseFilterSelect.propTypes = {};

export default CourseFilterSelect;
