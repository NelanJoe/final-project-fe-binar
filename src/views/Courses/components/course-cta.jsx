import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useNavigateSearch } from "@/hooks/use-navigate-search";

import { selectedToken } from "@/stores/auth/auth.selector";

const CourseCTA = () => {
  const { search } = useLocation();
  const navigate = useNavigateSearch();

  const token = useSelector(selectedToken);

  const handleClick = (e) => {
    const params = {
      [e.target.name]: e.target.value,
    };

    navigate("/courses", params);
  };

  const isActive = (to) => search === to;

  return (
    <div className="hidden md:block">
      <div className="md:flex md:flex-row justify-between items-center gap-x-3">
        {token ? (
          <>
            <button
              name="progress"
              value="all"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                isActive("?progress=all") && "bg-dark-blue text-white"
              }`}
            >
              All
            </button>
            <button
              name="progress"
              value="inprogress"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                isActive("?progress=inprogress") && "bg-dark-blue text-white"
              }`}
            >
              In Progress
            </button>
            <button
              name="progress"
              value="done"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                isActive("?progress=done") && "bg-dark-blue text-white"
              }`}
            >
              Selesai
            </button>
          </>
        ) : (
          <>
            <button
              name="type"
              value="all"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                isActive("?type=all") && "bg-dark-blue text-white"
              }`}
            >
              All
            </button>
            <button
              name="type"
              value="premium"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                isActive("?type=premium") && "bg-dark-blue text-white"
              }`}
            >
              Kelas Premium
            </button>
            <button
              name="type"
              value="gratis"
              onClick={handleClick}
              className={`w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70 ${
                isActive("?type=gratis") && "bg-dark-blue text-white"
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
