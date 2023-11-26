import { SquareIcon, CheckSquare2Icon } from "lucide-react";

import HomeLayout from "@/layouts/home.layout";
import CoursesList from "@/components/common/courses-list";

import SearchFromCourses from "../components/search-form-courses";

const Courses = () => {
  const checked = false;

  return (
    <HomeLayout>
      <main className="max-w-7xl mx-4 md:mx-auto mt-12 min-h-screen">
        <section>
          <div className="flex flex-col md:flex-row justify-between gap-y-2">
            <h2 className="text-xl font-semibold">Kelas Berjalan</h2>
            <SearchFromCourses />
          </div>
        </section>
        <section className="mt-10">
          <div className="flex flex-col md:flex-row justify-between gap-x-5">
            <div className="w-full md:w-[20%] mb-5 md:mb-0">
              <div className="border shadow-md px-4 py-3 h-full rounded-xl space-y-3 md:max-w-xs ">
                <h3 className="font-semibold text-lg">Filter</h3>
                <div className="space-y-1">
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Paling Popular</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Paling Popular</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Paling Popular</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">Kategori</h3>
                <div className="space-y-1">
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>UI/UX Design</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Web Development</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Android Development</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Data Science</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Business Intelligence</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">Level Kesulitan</h3>
                <div className="space-y-1">
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Semua Level</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Beginner Level</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {!checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Intermediate Level</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button>
                      {checked ? <SquareIcon /> : <CheckSquare2Icon />}
                    </button>
                    <p>Advanced Level</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[80%]">
              <div className="flex flex-row justify-between items-center gap-x-3">
                <button className="w-full px-4 py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70">
                  All
                </button>
                <button className="w-full px-4 py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-white bg-[#6148FF]">
                  In Progress
                </button>
                <button className="w-full px-4 py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70">
                  Selesai
                </button>
              </div>
              <div className="my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <CoursesList />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
};

export default Courses;
