import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchFromCourses = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "/courses",
      search: `?title=${query}`,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="w-full">
          <input
            type="text"
            placeholder="Cari Kelas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-dark-blue outline-none focus:ring-1 focus:ring-dark-blue rounded-full px-3 py-2"
          />
        </div>
        <div className="absolute inset-y-0 right-3 top-2">
          <button type="submit" className="px-1 py-1 bg-dark-blue rounded-xl">
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchFromCourses;
