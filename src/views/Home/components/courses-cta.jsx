import { useNavigateSearch } from "@/hooks/use-navigate-search";

const CoursesCTA = () => {
  const navigate = useNavigateSearch();

  const handleClick = (e) => {
    const params = {
      category: e.target.value,
    };

    navigate("/", params);
  };

  return (
    <div className="flex flex-row items-center gap-x-4 my-10 overflow-x-scroll">
      <div>
        <button
          value="all"
          onClick={handleClick}
          className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold"
        >
          All
        </button>
      </div>
      <div>
        <button
          value="Data Science"
          onClick={handleClick}
          className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold"
        >
          Data Science
        </button>
      </div>
      <div>
        <button
          value="Ui&Ux"
          onClick={handleClick}
          className="px-3 py-1 md:px-4 md:py-1 bg-dark-blue rounded-full text-sm md:text-base md:font-semibold text-white"
        >
          UI/UX Design
        </button>
      </div>
      <div>
        <button
          value="Cyber Cecurity"
          onClick={handleClick}
          className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold"
        >
          Cyber Security
        </button>
      </div>
      <div>
        <button
          value="Web Development"
          onClick={handleClick}
          className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold"
        >
          Android Development
        </button>
      </div>
      <div>
        <button className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          Web Development
        </button>
      </div>
      <div>
        <button
          value="IOS Development"
          onClick={handleClick}
          className="px-4 py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold"
        >
          IOS Development
        </button>
      </div>
      <div>
        <button
          value="Business Intellegence"
          onClick={handleClick}
          className="px-4 py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold"
        >
          Business Intellegence
        </button>
      </div>
    </div>
  );
};

export default CoursesCTA;
