import { useLocation } from "react-router-dom";

import { useNavigateSearch } from "@/hooks/use-navigate-search";

const CoursesCTA = () => {
  const { search } = useLocation();
  const navigate = useNavigateSearch();

  const handleClick = (e) => {
    const params = {
      category: e.target.value,
    };

    navigate("/", params);
  };

  const isActive = (to) => search === to;

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
      <div>
        <button
          value="Data Science"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=Data+Science")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          Data Science
        </button>
      </div>
      <div>
        <button
          value="Ui&Ux"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=Ui%26Ux")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          UI/UX Design
        </button>
      </div>
      <div>
        <button
          value="Cyber Cecurity"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=Cyber+Cecurity")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          Cyber Security
        </button>
      </div>
      <div>
        <button
          value="Android Development"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=Android+Development")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          Android Development
        </button>
      </div>
      <div>
        <button
          value="Web Development"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=Web+Development")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          Web Development
        </button>
      </div>
      <div>
        <button
          value="IOS Development"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=IOS+Development")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          IOS Development
        </button>
      </div>
      <div>
        <button
          value="Business Intellegence"
          onClick={handleClick}
          className={`px-3 py-1 rounded-full text-black/80 text-sm md:text-base md:font-semibold ${
            isActive("?category=Business+Intellegence")
              ? "bg-dark-blue text-white"
              : "bg-light-blue"
          }`}
        >
          Business Intellegence
        </button>
      </div>
    </div>
  );
};

export default CoursesCTA;
