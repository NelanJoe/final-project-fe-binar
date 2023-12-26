const CourseFilter = () => {
  const dataFilter = [
    {
      id: 1,
      name: "Paling Baru",
      value: "baru",
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
      value: "ui-ux-design",
    },
    {
      id: 2,
      name: "Web Development",
      value: "web-development",
    },
    {
      id: 3,
      name: "Android Development",
      value: "android-development",
    },
    {
      id: 4,
      name: "Data Science",
      value: "data-science",
    },
    {
      id: 5,
      name: "Business Intelligence",
      value: "business-intelligence",
    },
  ];

  const dataFilterLevel = [
    {
      id: 1,
      name: "Semua Level",
      value: "semua-level",
    },
    {
      id: 2,
      name: "Beginner Level",
      value: "beginner-level",
    },
    {
      id: 3,
      name: "Intermediate Level",
      value: "intermediate-level",
    },
    {
      id: 4,
      name: "Advanced Level",
      value: "advanced-level",
    },
  ];

  const handleChangeFilter = (e) => {
    console.log(e.target.value);
  };

  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };

  const handleChangeLevel = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="px-4 py-3 space-y-3 border shadow-md h-fit rounded-xl md:max-w-xs">
      <h3 className="text-lg font-semibold">Filter</h3>
      <div className="space-y-1">
        {dataFilter.map((filter) => (
          <div key={filter.id} className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="px-2 py-2 rounded-md"
              value={filter.value}
              onChange={handleChangeFilter}
            />
            <p>{filter.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold">Kategori</h3>
      <div className="space-y-1">
        {dataFilterCategory.map((filter) => (
          <div key={filter.id} className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="px-2 py-2 rounded-md"
              value={filter.value}
              onChange={handleChangeCategory}
            />
            <p>{filter.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold">Level Kesulitan</h3>
      <div className="space-y-1">
        {dataFilterLevel.map((filter) => (
          <div key={filter.id} className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="px-2 py-2 rounded-md"
              value={filter.value}
              onChange={handleChangeLevel}
            />
            <p>{filter.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="text-red-500">Clear Filter</button>
      </div>
    </div>
  );
};

export default CourseFilter;
