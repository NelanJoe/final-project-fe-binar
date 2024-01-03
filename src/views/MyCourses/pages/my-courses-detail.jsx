import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowLeftIcon,
  BookOpenTextIcon,
  Clock9Icon,
  MessagesSquareIcon,
  ShieldPlusIcon,
} from "lucide-react";

import {
  useGetMyCourseByIdQuery,
  usePostProgressVideoMutation,
} from "@/stores";

import BaseLayout from "@/layouts/base.layout";
import CourseDescription from "@/components/common/course-description";
import CourseChapter from "@/components/common/course-chapter";
import YoutubeEmbed from "@/components/common/youtube-embed";
import LoadingBar from "@/components/ui/LoadingBar";
import toast from "react-hot-toast";

const MyCoursesDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const myCourseId = Number(id);

  const { data, isLoading, isSuccess, isError, error } =
    useGetMyCourseByIdQuery(myCourseId);

  const [postProgressVideo, { isLoading: isLoadingPostProgress }] =
    usePostProgressVideoMutation();

  const watchId = searchParams.get("watchId") || "";
  const chapterTitle = searchParams.get("chapterTitle") || "Chapter 1";

  const course = data?.course?.courses;

  const sources = course?.chapters?.find(
    (chapter) => chapter?.title === chapterTitle
  ).sources;

  const urlYoutube =
    sources?.find((item) => item?.id === Number(watchId))?.link ??
    "https://www.youtube.com/watch?v=fCWOBU8OnMI";

  const handleProgress = async () => {
    try {
      const itemVideo = sources?.find((item) => item?.id === Number(watchId));

      const progressParams = {
        myCourseId: myCourseId,
        videoId: itemVideo.id,
      };

      const response = await postProgressVideo(progressParams).unwrap();

      if (response.success) {
        toast.success(toast.success, {
          style: {
            textTransform: "capitalize",
          },
        });

        navigate(
          `/my-courses/${myCourseId}?chapterTitle=${chapterTitle}&watchId=${watchId}`
        );

        window.location.reload();
      }
    } catch (error) {
      toast.error(error?.data?.message, {
        style: {
          textTransform: "capitalize",
        },
      });
    }
  };

  let content;

  if (isLoading) {
    content = <LoadingBar />;
  }

  if (isError) {
    content = (
      <BaseLayout title={course?.title}>
        <main className="min-h-screen">
          <section className="">
            <div>
              <p className="capitalize text-warning">{error?.data?.message}</p>
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
                </div>
              </div>
            </div>
          </section>

          {/* Web Version */}
          <section className="hidden py-6 mx-4 max-w-7xl lg:block lg:mx-auto lg:px-10">
            <div className="lg:grid lg:grid-cols-12 gap-x-4">
              <div className="lg:col-span-8 lg:space-y-4">
                <div className="mb-6">
                  {urlYoutube ? <YoutubeEmbed url={urlYoutube} /> : null}
                </div>

                <div className="text-right">
                  <button
                    onClick={handleProgress}
                    disabled={isLoadingPostProgress}
                    className="btn btn-primary"
                  >
                    Complete Video
                  </button>
                </div>

                <CourseDescription course={course} goals={course?.goals} />
              </div>
              <aside className="lg:col-span-4 lg:-mt-60">
                <div className="p-6 space-y-4 bg-white shadow-md rounded-xl">
                  <div className="flex flex-row items-center justify-between">
                    <h2 className="text-xl font-semibold">Materi Belajar</h2>
                    <progress
                      className="w-32 h-2.5 progress progress-success"
                      value={data?.course?.progres}
                      max="10"
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
              <div className="my-6 text-right">
                <button onClick={handleProgress} className="btn btn-primary">
                  Complete Video
                </button>
              </div>
            </div>
            <div>
              <div className="p-6 space-y-4 bg-white shadow-md rounded-xl">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-xl font-semibold">Materi Belajar</h2>
                  <progress
                    className="w-32 h-2.5 progress progress-success"
                    value={data?.course?.progres}
                    max="10"
                  ></progress>
                </div>
                <CourseChapter
                  chapters={course?.chapters}
                  status={course?.status}
                />
              </div>
            </div>
            <div>
              <CourseDescription course={course} goals={course?.goals} />
            </div>
          </section>
        </main>
      </BaseLayout>
    );
  }

  return content;
};

export default MyCoursesDetail;
