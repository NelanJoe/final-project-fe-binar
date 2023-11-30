import { Link } from "react-router-dom";

import CoursesCTA from "./courses-cta";
import CoursesList from "@/components/common/courses-list";

const CoursesPopular = () => {
  return (
    <section>
      <div className="mx-4 mt-8 max-w-7xl md:mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-semibold">Kursus Populer</h3>
          <Link to="/courses" className="text-[#6148FF] font-semibold">
            Lihat Semua
          </Link>
        </div>
        <CoursesCTA />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <CoursesList />
        </div>
      </div>
    </section>
  );
};

export default CoursesPopular;
