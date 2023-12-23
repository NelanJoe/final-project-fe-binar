import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListFilterIcon } from "lucide-react";

import BaseLyout from "@/layouts/base.layout";

import CourseCTA from "@/components/common/course-cta";
import CourseFilter from "@/components/common/course-filter";
import CoursesList from "@/components/common/courses-list";
import { useGetMyCoursesQuery } from "@/stores";
import LoadingBar from "@/components/ui/LoadingBar";

const MyCourses = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const progress = searchParams.get("progress") || "";

  const paramsMyCourses = useMemo(() => {
    return {
      keyword: title,
      categori: "",
      filter: "",
      level: "",
      progress: progress,
      page: "",
    };
  }, [title, progress]);

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
      <main className="relative">
        <section className="max-w-7xl mx-4 md:mx-auto min-h-screen mt-12">
          <section>
            <div className="flex flex-col md:flex-row justify-between gap-y-2">
              <h2 className="text-xl font-semibold">Kelasku</h2>
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
                  onClick={openModal}
                  className="btn btn-primary text-white"
                >
                  <ListFilterIcon />
                  <span>Filter</span>
                </button>
                <select className="select select-primary">
                  <option value="" disabled>
                    Urutkan
                  </option>
                  <option value="all">All</option>
                  <option value="inprogress">In Progress</option>
                  <option value="berjalan">Berjalan</option>
                </select>
              </div>

              <div className="w-full md:w-[80%]">
                <CourseCTA />
                <div className="my-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
