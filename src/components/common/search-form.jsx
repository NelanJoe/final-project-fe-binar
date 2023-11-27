import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Search as SearchIcon } from "lucide-react";

const SearchForm = () => {
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
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Cari Kursus terbaik...."
          name="title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#EBF3FC]"
        />
        <div className="absolute inset-y-0 right-3 top-2">
          <button type="submit" className="rounded-lg bg-[#6148FF] px-3 py-2">
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
