import { useState } from "react";

import { SearchIcon } from "lucide-react";

const SearchFromCourses = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Query:", query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="w-full ">
          <input
            type="text"
            placeholder="Cari Kelas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-[#6148FF] outline-none focus:ring-1 focus:ring-[#6148FF] rounded-full px-3 py-2"
          />
        </div>
        <div className="absolute inset-y-0 right-3 top-2">
          <button type="submit" className="px-1 py-1 bg-[#6148FF] rounded-xl">
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchFromCourses;
