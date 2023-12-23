const CourseFilter = () => {
  return (
    <div className="px-4 py-3 space-y-3 border shadow-md h-fit rounded-xl md:max-w-xs">
      <h3 className="text-lg font-semibold">Filter</h3>
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Paling Baru</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Paling Popular</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Kategori</h3>
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>UI/UX Design</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Web Development</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Android Development</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Data Science</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Business Intelligence</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Level Kesulitan</h3>
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Semua Level</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Beginner Level</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Intermediate Level</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="px-2 py-2 rounded-md" />
          <p>Advanced Level</p>
        </div>
      </div>

      <div className="text-center">
        <button className="text-red-500">Clear Filter</button>
      </div>
    </div>
  );
};

export default CourseFilter;
