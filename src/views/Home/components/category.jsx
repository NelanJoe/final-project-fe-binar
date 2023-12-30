import { Link } from "react-router-dom";

import { useGetCategoriesQuery } from "@/stores";

import CategoryItem from "./category-item";
import LoadingBar from "@/components/ui/LoadingBar";

const Category = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();

  let content;

  if (isLoading) {
    content = <LoadingBar />;
  }

  if (isError) {
    return <div>Error {error?.data?.message}</div>;
  }

  if (isSuccess) {
    content = (
      <section className="py-8 bg-light-blue-100 md:px-4 lg:py-20">
        <div className="mx-4 space-y-6 max-w-7xl md:mx-auto">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-semibold">Kategori Belajar</h3>
            <Link to="/courses" className="font-semibold text-dark-blue">
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6">
            {data?.categories?.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return content;
};

export default Category;
