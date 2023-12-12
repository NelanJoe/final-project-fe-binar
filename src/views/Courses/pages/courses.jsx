import { useState } from "react";
import { ListFilterIcon } from "lucide-react";

import { useGetCoursesQuery } from "@/stores";

import HomeLayout from "@/layouts/home.layout";
import CoursesList from "@/components/common/courses-list";

import SearchFromCourses from "../components/search-form-courses";
import CourseFilter from "../components/course-filter";
import CourseCTA from "../components/course-cta";

const Courses = () => {
  const [show, setShow] = useState(false);
  const { data, isLoading, error } = useGetCoursesQuery("");

  if (isLoading) {
    return <div>Loading content...</div>;
  }

  if (error) {
    <div>Error {error.message}</div>;
  }

  const courses = data?.popular;

  return (
    <HomeLayout>
      <main className="relative">
        <section className="max-w-7xl mx-4 md:mx-auto min-h-screen mt-12">
          <section>
            <div className="flex flex-col md:flex-row justify-between gap-y-2">
              <h2 className="text-xl font-semibold">Kelas Berjalan</h2>
              <SearchFromCourses />
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-col md:flex-row justify-between gap-x-5">
              <div className="hidden md:block md:w-[20%] mb-5 md:mb-0">
                <CourseFilter />
              </div>

              {/* Mobile verse */}
              <div className="md:hidden flex flex-row gap-x-4">
                <button
                  onClick={() => setShow(!show)}
                  className="rounded-md border border-black px-4 py-2 flex flex-row items-center gap-x-2"
                >
                  <ListFilterIcon />
                  <span>Filter</span>
                </button>
                <select
                  name=""
                  id=""
                  className="rounded-md border border-black focus:ring-dark-blue"
                >
                  <option value="" disabled>
                    Urutkan
                  </option>
                  <option value="">All</option>
                  <option value="">In Progress</option>
                  <option value="">Berjalan</option>
                </select>
              </div>

              <div className="w-full md:w-[80%]">
                <CourseCTA />
                <div className="my-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CoursesList courses={courses} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {show ? (
          <div className="absolute top-0 z-20 transform translate-y-80 w-full h-full px-0 md:hidden">
            <div className="bg-white shadow-md h-full">
              <CourseFilter />
            </div>
          </div>
        ) : null}
      </main>
    </HomeLayout>
  );
};

export default Courses;
