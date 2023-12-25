import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { ListFilterIcon, AlignJustifyIcon } from "lucide-react";

import { useGetCoursesQuery } from "@/stores";
import { selectedToken } from "@/stores/auth/auth.selector";

import MainLayout from "@/layouts/base.layout";
import CoursesList from "@/components/common/courses-list";
import LoadingBar from "@/components/ui/LoadingBar";

import CourseFilter from "../../../components/common/course-filter";
import CourseCTA from "../../../components/common/course-cta";
import CourseFilterSelect from "@/components/common/course-filter-select";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const token = useSelector(selectedToken);

  const type = searchParams.get("type") || "";
  const title = searchParams.get("title") || "";
  const category = searchParams.get("category") || "";

  const paramsCourses = useMemo(() => {
    return {
      keyword: title,
      type: type,
      filter: "",
      categori: category,
      level: "",
      page: "",
    };
  }, [title, type, category]);

  const { data, isLoading, error } = useGetCoursesQuery(paramsCourses);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (error) {
    <div>Error {error?.message}</div>;
  }

  const courses = data?.course;

  const openModal = () => {
    document.querySelector("#course-filter")?.showModal();
  };

  return (
    <MainLayout>
      <main className="relative">
        <section className="min-h-screen mx-4 mt-12 max-w-7xl md:mx-auto">
          <section>
            <div className="flex flex-row justify-between gap-y-2">
              <h2 className="text-xl font-semibold">Kelas Berjalan</h2>
              {token ? (
                <Link to="/my-courses">
                  <button className="text-white px-3 py-1.5 rounded-md shadow-md bg-blue-500 hover:bg-blue-400">
                    <div className="flex flex-row items-center gap-x-3">
                      <AlignJustifyIcon className="w-6 h-6" />
                      <span>Kelasku</span>
                    </div>
                  </button>
                </Link>
              ) : null}
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-col justify-between md:flex-row gap-x-5">
              <div className="hidden md:block md:w-[20%] mb-5 md:mb-0">
                <CourseFilter />
              </div>

              {/* Mobile verse */}
              <div className="flex flex-row md:hidden gap-x-4">
                <button
                  onClick={openModal}
                  className="text-white btn btn-primary"
                >
                  <ListFilterIcon />
                  <span>Filter</span>
                </button>
                <CourseFilterSelect />
              </div>

              <div className="w-full md:w-[80%]">
                <CourseCTA />
                <div className="my-4">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <CoursesList courses={courses} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <dialog id="course-filter" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <div className="p-4">
              <CourseFilter />
            </div>
          </div>
        </dialog>
      </main>
    </MainLayout>
  );
};

export default Courses;
