import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  BookOpenTextIcon,
  Clock9Icon,
  MessagesSquareIcon,
  ShieldPlusIcon,
} from "lucide-react";

import { useGetMyCourseByIdQuery } from "@/stores";

import BaseLayout from "@/layouts/base.layout";
import CourseDescription from "@/components/common/course-description";
import CourseChapter from "@/components/common/course-chapter";
import YoutubeEmbed from "@/components/common/youtube-embed";

const MyCoursesDetail = () => {
  const { id } = useParams();

  const { data } = useGetMyCourseByIdQuery(Number(id));

  const course = data?.data?.courses;

  return (
    <BaseLayout>
      <main className="min-h-screen">
        <section className="bg-light-blue">
          <div className="py-6 mx-4 max-w-7xl md:mx-auto">
            <Link to="/courses">
              <button className="flex flex-row items-center space-x-3">
                <ArrowLeftIcon className="w-6 h-6" /> <span>Kelas lainnya</span>
              </button>
            </Link>
            <div className="md:px-10 mt-6 md:mt-12 space-y-3 md:w-[67%]">
              <div className="flex items-center justify-between md:flex-row">
                <h3 className="font-semibold text-dark-blue">
                  {course?.categories}
                </h3>
                <div className="flex items-center gap-x-2">
                  ⭐<p>{course?.rating?.toFixed(1) || 4.7}</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {course?.title || "Web Development with ReactJs"}
                </h2>
                <p>by {course?.author || "Simon Doe"}</p>
              </div>
              <div className="flex items-center space-x-3 md:space-x-12">
                <div className="flex items-center space-x-2">
                  <ShieldPlusIcon className="w-4 h-4 text-green-500" />
                  <p className="text-sm capitalize md:text-base text-dark-blue">
                    {course?.level || "Beginner"} Level
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpenTextIcon className="w-4 h-4 text-green-500" />
                  <p className="text-sm capitalize md:text-base">
                    {course?.modul || 20} Modul
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock9Icon className="w-4 h-4 text-green-500" />
                  <p className="text-sm capitalize md:text-base">
                    {course?.duration || "120 Menit"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <Link to={course?.telegram} target="_blank">
                  <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded-full hover:bg-green-600">
                    <div className="flex items-center space-x-2">
                      <MessagesSquareIcon className="w-6 h-6" />
                      <span>Join Grup Telegram</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 mx-4 max-w-7xl md:mx-auto md:px-10">
          <div className="md:grid md:grid-cols-12 gap-x-4">
            <div className="md:col-span-8 md:space-y-4">
              <div className="mb-6">
                <YoutubeEmbed url={course?.chapters[0]?.sources[0]?.link} />
              </div>
              <CourseDescription course={course} goals={course?.goals} />
            </div>
            <aside className="md:col-span-4 md:-mt-60">
              <div className="p-6 space-y-4 bg-white shadow-md rounded-xl">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-xl font-semibold">Materi Belajar</h2>
                  <progress
                    className="w-32 h-2.5 progress progress-success"
                    value={data?.data?.progres}
                    max="100"
                  ></progress>
                </div>
                <CourseChapter
                  chapters={course?.chapters}
                  status={course?.status}
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default MyCoursesDetail;
