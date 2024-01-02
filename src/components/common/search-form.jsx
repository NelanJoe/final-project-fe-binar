import { useState } from "react";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Search as SearchIcon } from "lucide-react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  const type = searchParams.get("type") || "";
  const filter = searchParams.get("filter") || "";
  const category = searchParams.get("category") || "";
  const level = searchParams.get("level") || "";
  const progress = searchParams.get("progress") || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pathname === "/courses") {
      navigate(
        `/courses?title=${query}&type=${type}&filter=${filter}&category=${category}&level=${level}`
      );
    } else {
      navigate(
        `/my-courses?title=${query}&progress=${progress}&filter=${filter}&category=${category}&level=${level}`
      );
    }
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
          <button type="submit" className="px-3 py-2 rounded-lg bg-dark-blue">
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
