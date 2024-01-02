import {
  ArrowRightCircleIcon,
  BookOpenTextIcon,
  Clock9Icon,
  ShieldPlusIcon,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetDetailCoursePopupQuery,
  usePostOrderCourseByIdMutation,
} from "@/stores";
import LoadingBar from "../ui/LoadingBar";

const CoursePaymentModal = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, error } = useGetDetailCoursePopupQuery(Number(id));
  const [postOrderCourseById] = usePostOrderCourseByIdMutation();

  const handlePostOrderCourse = async () => {
    try {
      const res = await postOrderCourseById(Number(id));

      if (res.data?.success) {
        navigate(`/payment/${res.data?.MyCourseId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoadingBar />;
  }

  if (error) {
    <div>Error: {error}</div>;
  }

  const coursePopup = data?.popUpCourse;

  return (
    <dialog id="payment-modal" className="modal">
      <div className="flex flex-col items-center justify-center modal-box">
        <form method="dialog">
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="text-2xl font-bold text-center">
          Selangkah lagi menuju <br />
          <span className="text-dark-blue">Kelas Premium</span>
        </h3>
        <div className="w-full my-6 border shadow-md rounded-3xl">
          <div>
            <img
              src={coursePopup?.image}
              alt={`${coursePopup?.title}`}
              className="h-[120px] rounded-t-3xl w-full object-cover object-top"
            />
          </div>
          <div className="px-3 py-2 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-dark-blue">
                {coursePopup?.categories}
              </p>
              <span className="text-sm font-semibold">
                ⭐ {coursePopup?.rating?.toFixed(1) || 4.5}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold break-words">
                {coursePopup?.title ||
                  "Membuat web sederhana menggunakan reactjs"}
              </h3>
              <p className="text-base">
                by {coursePopup?.author || "Susan Doe"}
              </p>
            </div>
            <div className="flex items-start justify-between md:flex-row md:items-center">
              <div className="flex flex-row items-center text-sm gap-x-1 md:text-base">
                <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
                <p className="capitalize text-dark-blue">
                  {coursePopup?.level || "Intemediate"} Level
                </p>
              </div>
              <div className="flex flex-row items-center text-sm gap-x-1 md:text-base">
                <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
                <p>{coursePopup?.modul || 10} Modul</p>
              </div>
              <div className="flex flex-row items-center text-sm gap-x-1 md:text-base">
                <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
                <p>{coursePopup?.duration || "120 Menit"}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handlePostOrderCourse}
          className="px-4 py-2 text-white border-2 border-white rounded-full shadow-md bg-dark-blue "
        >
          <div className="flex items-center transition-all duration-300 ease-in gap-x-1 hover:gap-x-2">
            <span>Beli Sekarang</span>
            <ArrowRightCircleIcon className="w-6 h-6 " />
          </div>
        </button>
      </div>
    </dialog>
  );
};

export default CoursePaymentModal;
