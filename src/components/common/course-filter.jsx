import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const CourseFilter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dataFilter = [
    {
      id: 1,
      name: "Paling Baru",
      value: "paling-baru",
    },
    {
      id: 2,
      name: "Paling Popular",
      value: "popular",
    },
  ];

  const dataFilterCategory = [
    {
      id: 1,
      name: "UI/UX Design",
      value: "Ui&Ux",
    },
    {
      id: 2,
      name: "Web Development",
      value: "Web Development",
    },
    {
      id: 3,
      name: "Android Development",
      value: "Mobile Development",
    },
    {
      id: 4,
      name: "Data Science",
      value: "Data Science",
    },
    {
      id: 5,
      name: "Fullstack Development",
      value: "Fullstack",
    },
    {
      id: 6,
      name: "Cyber Security",
      value: "Cyber Cecurity",
    },
  ];

  const dataFilterLevel = [
    {
      id: 1,
      name: "Semua Level",
      value: "",
    },
    {
      id: 2,
      name: "Beginner Level",
      value: "beginer",
    },
    {
      id: 3,
      name: "Intermediate Level",
      value: "intermediate",
    },
    {
      id: 4,
      name: "Expret Level",
      value: "expert",
    },
  ];

  const title = searchParams.get("title") || "";
  const type = searchParams.get("type") || "";
  const filter = searchParams.get("filter") || "";
  const category = searchParams.get("category") || "";
  const level = searchParams.get("level") || "";
  const progress = searchParams.get("progress") || "";

  const onFilter = (e) => {
    const { target } = e;

    if (pathname === "/courses") {
      navigate(
        `/courses?title=${title}&type=${type}&filter=${target.value}&category=${category}&level=${level}`
      );
    } else {
      navigate(
        `/my-courses?title=${title}&progress=${progress}&filter=${target.value}&category=${category}&level=${level}`
      );
    }
  };

  const onFilterCategory = (e) => {
    const { target } = e;

    if (pathname === "/courses") {
      navigate(
        `/courses?title=${title}&type=${type}&filter=${filter}&category=${target.value}&level=${level}`
      );
    } else {
      navigate(
        `/my-courses?title=${title}&progress=${progress}&filter=${filter}&category=${target.value}&level=${level}`
      );
    }
  };

  const onFilterLevel = (e) => {
    const { target } = e;

    if (pathname === "/courses") {
      navigate(
        `/courses?title=${title}&type=${type}&filter=${filter}&category=${category}&level=${target.value}`
      );
    } else {
      navigate(
        `/my-courses?title=${title}&progress=${progress}&filter=${filter}&category=${category}&level=${target.value}`
      );
    }
  };

  const onClearFilter = () => {
    if (pathname === "/courses") {
      navigate("/courses");
    } else {
      navigate("/my-courses");
    }
  };

  const getFilterValue = searchParams.get("filter");
  const getCategoryValue = searchParams.get("category");
  const getLevelValue = searchParams.get("level");

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Filter</h3>
      <div className="space-y-1">
        {dataFilter.map((filter) => (
          <div key={filter.id} className="flex items-center gap-x-2">
            <button
              value={filter?.value}
              onClick={onFilter}
              className={`capitalize px-2 py-1.5 border w-full rounded-md ${
                getFilterValue === filter?.value
                  ? "bg-dark-blue text-white hover:bg-dark-blue/80"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {filter?.name}
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold">Kategori</h3>
      <div className="space-y-1">
        {dataFilterCategory.map((filter) => (
          <div key={filter.id} className="flex items-center gap-x-2">
            <button
              value={filter?.value}
              onClick={onFilterCategory}
              className={`capitalize px-2 py-1.5 border w-full rounded-md ${
                getCategoryValue === filter?.value
                  ? "bg-dark-blue text-white hover:bg-dark-blue/80"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {filter?.name}
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold">Level Kesulitan</h3>
      <div className="space-y-1">
        {dataFilterLevel.map((filter) => (
          <div key={filter.id} className="flex items-center gap-x-2">
            <button
              value={filter?.value}
              onClick={onFilterLevel}
              className={`capitalize px-2 py-1.5 border w-full rounded-md ${
                getLevelValue === filter?.value
                  ? "bg-dark-blue text-white hover:bg-dark-blue/80"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {filter?.name}
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={onClearFilter} className="text-warning">
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default CourseFilter;
