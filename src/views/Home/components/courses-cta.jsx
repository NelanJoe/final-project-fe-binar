import { useSearchParams } from "react-router-dom";

import { useNavigateSearch } from "@/hooks/use-navigate-search";
import { useGetCategoriesQuery } from "@/stores";

const CoursesCTA = () => {
  const navigate = useNavigateSearch();
  const [searchParams] = useSearchParams();

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  const handleClick = (e) => {
    const params = {
      category: e.target.value,
    };

    navigate("/", params);
  };

  const categoryParams = searchParams.get("category") || "";

  let content;

  if (isLoading) {
    content = (
      <div>
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  if (isError) {
    content = <p className="capitalize text-warning">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    content = (
      <>
        {categories?.map((category) => {
          return (
            <div key={category?.id}>
              <button
                value={category.name}
                onClick={handleClick}
                className={`capitalize px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
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
      </>
    );
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-2 my-6 lg:my-8">
      <div>
        <button
          value=""
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            categoryParams === "" ? "bg-dark-blue text-white" : "bg-light-blue"
          }`}
        >
          All
        </button>
      </div>
      {content}
    </div>
  );
};

export default CoursesCTA;
