const CourseFilter = () => {
  return (
    <div className="border shadow-md px-4 py-3 h-fit rounded-xl space-y-3 md:max-w-xs">
      <h3 className="font-semibold text-lg">Filter</h3>
      <div className="space-y-1">
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Paling Baru</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Paling Popular</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Kategori</h3>
      <div className="space-y-1">
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>UI/UX Design</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Web Development</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Android Development</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Data Science</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Business Intelligence</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Level Kesulitan</h3>
      <div className="space-y-1">
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Semua Level</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Beginner Level</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
          <p>Intermediate Level</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" className="rounded-md px-2 py-2" />
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
