import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { useNavigateSearch } from "@/hooks/use-navigate-search";

import { selectedToken } from "@/stores/auth/auth.selector";

const CourseCTA = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigateSearch();
  const { pathname } = useLocation();

  const token = useSelector(selectedToken);

  const title = searchParams.get("title") || "";

  const handleClick = ({ target }) => {
    if (target.name === "type") {
      navigate("/courses", `?title=${title}&type=${target.value}`);
    } else {
      navigate("/my-courses", `?title=${title}&progress=${target.value}`);
    }
  };

  const getTypeValue = searchParams.get("type");
  const getProgressValue = searchParams.get("progress");

  return (
    <div className="hidden md:block">
      <div className="md:flex md:flex-row justify-between items-center gap-x-3">
        {token && pathname === "/my-courses" ? (
          <>
            <button
              name="progress"
              value=""
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                getProgressValue === "" && "bg-dark-blue text-white"
              }`}
            >
              All
            </button>
            <button
              name="progress"
              value="inProgress"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                getProgressValue === "inProgress" && "bg-dark-blue text-white"
              }`}
            >
              In Progress
            </button>
            <button
              name="progress"
              value="completed"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                getProgressValue === "completed" && "bg-dark-blue text-white"
              }`}
            >
              Selesai
            </button>
          </>
        ) : (
          <>
            <button
              name="type"
              value=""
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                getTypeValue === "" && "bg-dark-blue text-white"
              }`}
            >
              All
            </button>
            <button
              name="type"
              value="premium"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                getTypeValue === "premium" && "bg-dark-blue text-white"
              }`}
            >
              Kelas Premium
            </button>
            <button
              name="type"
              value="gratis"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                getTypeValue === "gratis" && "bg-dark-blue text-white"
              }`}
            >
              Kelas Gratis
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCTA;
