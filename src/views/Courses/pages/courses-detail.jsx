import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  ShieldPlusIcon,
  BookOpenTextIcon,
  Clock9Icon,
  MessagesSquareIcon,
} from "lucide-react";
import { useSelector } from "react-redux";

import { useGetCourseByIdQuery } from "@/stores/course/course.api";
import { selectedToken } from "@/stores/auth/auth.selector";

import BaseLayout from "@/layouts/base.layout";

import CourseDescription from "@/components/common/course-description";
import CourseChapter from "@/components/common/course-chapter";
import CoursePaymentModal from "@/components/common/course-payment-modal";
import YoutubeEmbed from "@/components/common/youtube-embed";
import LoadingBar from "@/components/ui/LoadingBar";

const CoursesDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const token = useSelector(selectedToken);

  const {
    data: detailCourse,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCourseByIdQuery(Number(id));

  const onShowPaymentHandler = () => {
    document.querySelector("#payment-modal")?.showModal();
  };

  const course = detailCourse?.course;

  const sources = course?.chapters[0]?.sources;

  const watchingTitle = searchParams.get("watch") || "";

  const urlYoutube =
    sources?.find((item) => item?.name === watchingTitle)?.link ??
    "https://www.youtube.com/watch?v=fCWOBU8OnMI";

  let content;

  if (isLoading) {
    content = <LoadingBar />;
  }

  if (isError) {
    content = (
      <BaseLayout title={course?.title}>
        <main className="grid min-h-screen place-content-center">
          <section>
            <div>
              <h3>{error?.data?.message}</h3>
            </div>
          </section>
        </main>
      </BaseLayout>
    );
  }

  if (isSuccess) {
    content = (
      <BaseLayout title={course?.title}>
        <main className="min-h-screen">
          <section className="bg-light-blue">
            <div className="py-6 mx-4 max-w-7xl lg:mx-auto">
              <Link to="/courses">
                <button className="flex flex-row items-center space-x-3">
                  <ArrowLeftIcon className="w-6 h-6" />{" "}
                  <span>Kelas lainnya</span>
                </button>
              </Link>
              <div className="lg:px-10 mt-6 lg:mt-12 space-y-3 lg:w-[67%]">
                <div className="flex items-center justify-between lg:flex-row">
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
                <div className="flex items-center space-x-3 lg:space-x-12">
                  <div className="flex items-center space-x-2">
                    <ShieldPlusIcon className="w-4 h-4 text-green-500" />
                    <p className="text-sm capitalize lg:text-base text-dark-blue">
                      {course?.level || "Beginner"} Level
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpenTextIcon className="w-4 h-4 text-green-500" />
                    <p className="text-sm capitalize lg:text-base">
                      {course?.modul || 20} Modul
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock9Icon className="w-4 h-4 text-green-500" />
                    <p className="text-sm capitalize lg:text-base">
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
                  {token !== null ? (
                    <>
                      {course?.status !== "paid" ? (
                        <button
                          onClick={onShowPaymentHandler}
                          className="px-4 py-2 text-white rounded-full bg-dark-blue"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Buy Now</span>
                          </div>
                        </button>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          <section className="hidden py-6 mx-4 max-w-7xl lg:block lg:mx-auto lg:px-10">
            <div className="lg:grid lg:grid-cols-12 gap-x-4">
              <div className="lg:col-span-8 lg:space-y-4">
                <div className="mb-6">
                  <YoutubeEmbed url={urlYoutube} />
                </div>
                <CourseDescription course={course} goals={course?.goals} />
              </div>
              <aside className="lg:col-span-4 lg:-mt-60">
                <div className="p-6 space-y-4 bg-white shadow-md rounded-xl">
                  <div className="flex flex-row items-center justify-between">
                    <h2 className="text-xl font-semibold">Materi Belajar</h2>
                    <progress
                      className="w-32 h-2.5 progress progress-success"
                      value={0}
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

          <section className="block py-6 mx-4 space-y-4 lg:hidden">
            <div>
              <YoutubeEmbed url={urlYoutube} />
            </div>
            <div>
              <div className="p-6 space-y-4 bg-white shadow-md rounded-xl">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-xl font-semibold">Materi Belajar</h2>
                  <progress
                    className="w-32 h-2.5 progress progress-success"
                    value="0"
                    max="100"
                  ></progress>
                </div>
                <CourseDescription course={course} goals={course?.goals} />
              </div>
            </div>
            <div>
              <CourseDescription course={course} goals={course?.goals} />
            </div>
          </section>
        </main>
        <CoursePaymentModal />
      </BaseLayout>
    );
  }

  return content;
};

export default CoursesDetail;
