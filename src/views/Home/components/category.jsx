import { Link } from "react-router-dom";

import { useGetCategoriesQuery } from "@/stores";

import CategoryItem from "./category-item";

const Category = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  let content;

  if (isLoading) {
    content = (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error {error?.data?.message}</div>;
  }

  if (isSuccess) {
    content = (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {categories?.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  }

  return (
    <section className="py-8 bg-light-blue-100 md:px-4 lg:py-20">
      <div className="mx-4 space-y-6 max-w-7xl lg:mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-semibold">Kategori Belajar</h3>
          <Link to="/courses" className="font-semibold text-dark-blue">
            Lihat Semua
          </Link>
        </div>
        {content}
      </div>
    </section>
  );
};

export default Category;
