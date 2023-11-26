import { Link } from "react-router-dom";

import CoursesCTA from "./courses-cta";
import CoursesList from "@/components/common/courses-list";

const CoursesPopular = () => {
  return (
    <section>
      <div className="max-w-7xl mx-4 md:mx-auto mt-8">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-xl font-semibold">Kursus Populer</h3>
          <Link to="/courses" className="text-[#6148FF] font-semibold">
            Lihat Semua
          </Link>
        </div>
        <CoursesCTA />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <CoursesList />
        </div>
      </div>
    </section>
  );
};

export default CoursesPopular;
