import { Link, useSearchParams } from "react-router-dom";

import CoursesList from "@/components/common/courses-list";
import CoursesCTA from "./courses-cta";
import { useGetHomeCoursesQuery } from "@/stores";

const CoursesPopular = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  const {
    data: popular,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHomeCoursesQuery(category);

  let content;

  if (isLoading) {
    content = (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  if (isError) {
    content = (
      <h3 className="text-center capitalize text-warning">
        {error?.data?.message}
      </h3>
    );
  }

  const courses = popular?.slice(0, 3);

  if (isSuccess) {
    content = (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses ? (
          <CoursesList courses={courses} />
        ) : (
          <div>
            <p className="text-warning">Not found courses</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="mx-4 mt-4 max-w-7xl lg:mx-auto">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-semibold">Kursus Populer</h3>
        <Link to="/courses" className="font-semibold text-dark-blue">
          Lihat Semua
        </Link>
      </div>
      <CoursesCTA />
      {content}
    </section>
  );
};

export default CoursesPopular;
