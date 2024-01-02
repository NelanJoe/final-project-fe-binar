import { Link, useSearchParams } from "react-router-dom";

import CoursesList from "@/components/common/courses-list";
import CoursesCTA from "./courses-cta";
import { useGetHomeCoursesQuery } from "@/stores";
import LoadingBar from "@/components/ui/LoadingBar";

const CoursesPopular = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  const { data, isLoading } = useGetHomeCoursesQuery(category);

  if (isLoading) {
    return <LoadingBar />;
  }

  const courses = data?.popular.slice(0, 3);

  return (
    <section>
      <div className="mx-4 mt-8 max-w-7xl lg:mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-semibold">Kursus Populer</h3>
          <Link to="/courses" className="font-semibold text-dark-blue">
            Lihat Semua
          </Link>
        </div>
        <CoursesCTA />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CoursesList courses={courses} />
        </div>
      </div>
    </section>
  );
};

export default CoursesPopular;
