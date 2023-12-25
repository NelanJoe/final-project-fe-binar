import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListFilterIcon } from "lucide-react";

import BaseLyout from "@/layouts/base.layout";

import { useGetMyCoursesQuery } from "@/stores";

import LoadingBar from "@/components/ui/LoadingBar";

import CoursesList from "@/components/common/courses-list";
import CourseCTA from "@/components/common/course-cta";
import CourseFilter from "@/components/common/course-filter";
import CourseFilterSelect from "@/components/common/course-filter-select";

const MyCourses = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const progress = searchParams.get("progress") || "";
  const category = searchParams.get("category") || "";

  const paramsMyCourses = useMemo(() => {
    return {
      keyword: title,
      categori: category,
      filter: "",
      level: "",
      progress: progress,
      page: "",
    };
  }, [title, progress, category]);

  const { data, isLoading, error } = useGetMyCoursesQuery(paramsMyCourses);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const openModal = () => {
    document.querySelector("#course-filter")?.showModal();
  };

  return (
    <BaseLyout>
      <main>
        <section className="min-h-screen mx-4 mt-12 max-w-7xl md:mx-auto">
          <section>
            <div className="flex flex-col justify-between md:flex-row gap-y-2">
              <h2 className="text-xl font-semibold">Kelasku</h2>
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
                    {data?.MyCourse ? (
                      <CoursesList courses={data?.MyCourse} />
                    ) : (
                      <div>
                        <h2>Not found courses</h2>
                      </div>
                    )}
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
    </BaseLyout>
  );
};

export default MyCourses;
