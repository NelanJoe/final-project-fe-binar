import { useLocation, useSearchParams } from "react-router-dom";

import { useNavigateSearch } from "@/hooks/use-navigate-search";
import { useGetCategoriesQuery } from "@/stores";

const CoursesCTA = () => {
  const { search } = useLocation();
  const navigate = useNavigateSearch();
  const [searchParams] = useSearchParams();

  const { data } = useGetCategoriesQuery();

  const handleClick = (e) => {
    const params = {
      category: e.target.value,
    };

    navigate("/", params);
  };

  const categoryParams = searchParams.get("category") || "";

  const isActive = (to) => {
    return encodeURIComponent(search) === encodeURIComponent(to);
  };

  return (
    <div className="flex flex-row flex-wrap items-center gap-2 my-6 md:my-10">
      <div>
        <button
          value="all"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=all")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          All
        </button>
      </div>
      {data?.categories?.map((category) => {
        return (
          <div key={category?.id}>
            <button
              value={category.name}
              onClick={handleClick}
              className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
                category.name === categoryParams
                  ? "bg-dark-blue text-white"
                  : "bg-light-blue"
              }`}
            >
              {category.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CoursesCTA;
