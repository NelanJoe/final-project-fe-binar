import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  ShieldPlusIcon,
  BookOpenTextIcon,
  Clock9Icon,
  MessagesSquareIcon,
} from "lucide-react";

import YouTube from "react-youtube";

import { useGetCourseByIdQuery } from "@/stores/course/course.api";

import BaseLayout from "@/layouts/base.layout";

import CourseDescription from "../components/course-description";
import CourseChapter from "../components/course-chapter";
import CoursePaymentModal from "@/components/common/course-payment-modal";

const CoursesDetail = () => {
  const { id } = useParams();

  const { data: detailCourse } = useGetCourseByIdQuery(Number(id));

  const optionsYoutube = {
    width: "100%",
    height: "400",
    playerVars: {
      autoplay: 0,
    },
  };

  const onShowPaymentHandler = () => {
    document.querySelector("#payment-modal")?.showModal();
  };

  const course = detailCourse?.course;

  console.log(course);

  return (
    <BaseLayout>
      <main className="min-h-screen">
        <section className="bg-light-blue">
          <div className="max-w-7xl mx-4 md:mx-auto py-6">
            <Link to="/courses">
              <button className="flex flex-row items-center space-x-3">
                <ArrowLeftIcon className="w-6 h-6" /> <span>Kelas lainnya</span>
              </button>
            </Link>
            <div className="md:px-10 mt-6 md:mt-12 space-y-3 md:w-[67%]">
              <div className="flex md:flex-row justify-between items-center">
                <h3 className="font-semibold text-dark-blue">
                  {course?.categories}
                </h3>
                <div className="flex items-center gap-x-2">
                  ⭐<p>{course?.rating?.toFixed(1) || 4.7}</p>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-xl">
                  {course?.title || "Web Development with ReactJs"}
                </h2>
                <p>by {course?.author || "Simon Doe"}</p>
              </div>
              <div className="flex items-center space-x-3 md:space-x-12">
                <div className="flex items-center space-x-2">
                  <ShieldPlusIcon className="w-4 h-4 text-green-500" />
                  <p className="text-sm md:text-base text-dark-blue capitalize">
                    {course?.level || "Beginner"} Level
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpenTextIcon className="w-4 h-4 text-green-500" />
                  <p className="text-sm md:text-base capitalize">
                    {course?.modul || 20} Modul
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock9Icon className="w-4 h-4 text-green-500" />
                  <p className="text-sm md:text-base capitalize">
                    {course?.duration || "120 Menit"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <Link to={course?.telegram} target="_blank">
                  <button className="px-4 py-2 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600">
                    <div className="flex items-center space-x-2">
                      <MessagesSquareIcon className="w-6 h-6" />
                      <span>Join Grup Telegram</span>
                    </div>
                  </button>
                </Link>
                {course?.status !== "paid" ? (
                  <button
                    onClick={onShowPaymentHandler}
                    className="px-4 py-2 rounded-full text-white bg-dark-blue"
                  >
                    <div className="flex items-center gap-x-3">
                      <span>Buy Now</span>
                    </div>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-4 md:mx-auto md:px-10 py-6">
          <div className="md:grid md:grid-cols-12 gap-x-4">
            <div className="md:col-span-8 md:space-y-4">
              <div>
                <YouTube videoId="ymjNGjuBCTo" opts={optionsYoutube} />
              </div>
              <CourseDescription course={course} />
            </div>
            <aside className="md:col-span-4 md:-mt-60">
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-semibold text-xl">Materi Belajar</h2>
                  <p>2</p>
                </div>
                <CourseChapter
                  chapters={course?.chapters}
                  goals={course?.goals}
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <CoursePaymentModal />
    </BaseLayout>
  );
};

export default CoursesDetail;
