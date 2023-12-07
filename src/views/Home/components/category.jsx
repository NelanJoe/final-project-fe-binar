import { Link } from "react-router-dom";

import { useGetCategoriesQuery } from "@/stores";

import CategoryItem from "./category-item";

const Category = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <div>Loading content...</div>;
  }

  return (
    <section className="bg-light-blue-100 py-8 md:py-20">
      <div className="max-w-7xl mx-4 md:mx-auto space-y-6">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-xl font-semibold">Kategori Belajar</h3>
          <Link to="/category" className="text-dark-blue font-semibold">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
          {data?.categories?.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
