const CoursesCTA = () => {
  return (
    <div className="flex flex-row items-center gap-x-4 my-10 overflow-x-scroll">
      <div>
        <button className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          All
        </button>
      </div>
      <div>
        <button className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          Data Science
        </button>
      </div>
      <div>
        <button className="px-3 py-1 md:px-4 md:py-1 bg-dark-blue rounded-full text-sm md:text-base md:font-semibold text-white">
          UI/UX Design
        </button>
      </div>
      <div>
        <button className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          Android Development
        </button>
      </div>
      <div>
        <button className="px-3 py-1 md:px-4 md:py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          Web Development
        </button>
      </div>
      <div>
        <button className="px-4 py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          IOS Development
        </button>
      </div>
      <div>
        <button className="px-4 py-1 bg-light-blue rounded-full text-black/80 text-sm md:text-base md:font-semibold">
          Business Intellegence
        </button>
      </div>
    </div>
  );
};

export default CoursesCTA;
