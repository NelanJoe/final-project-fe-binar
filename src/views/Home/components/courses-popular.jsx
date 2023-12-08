import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useGetCoursesMutation } from "@/stores";

import CoursesList from "@/components/common/courses-list";
import CoursesCTA from "./courses-cta";

const CoursesPopular = () => {
  const [searchParams] = useSearchParams();
  const [getCourses, { data }] = useGetCoursesMutation();

  const category = searchParams.get("category");

  useEffect(() => {
    if (category === null) {
      getCourses("");
    } else {
      getCourses(category);
    }
  }, [getCourses, category]);

  const courses = data?.popular;

  return (
    <section>
      <div className="mx-4 mt-8 max-w-7xl md:mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-semibold">Kursus Populer</h3>
          <Link to="/courses" className="text-dark-blue font-semibold">
            Lihat Semua
          </Link>
        </div>
        <CoursesCTA />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CoursesList courses={courses} />
        </div>
      </div>
    </section>
  );
};

export default CoursesPopular;
