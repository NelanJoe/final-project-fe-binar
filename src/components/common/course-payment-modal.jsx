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
      <div className="modal-box flex flex-col justify-center items-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-center">
          Selangkah lagi menuju <br />
          <span className="text-dark-blue">Kelas Premium</span>
        </h3>
        <div className="rounded-3xl border shadow-md w-full my-6">
          <div>
            <img
              src={coursePopup?.image}
              alt={`${coursePopup?.title}`}
              className="h-[120px] rounded-t-3xl w-full object-cover object-top"
            />
          </div>
          <div className="py-2 px-3 space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-dark-blue text-sm font-semibold">
                {coursePopup?.categories}
              </p>
              <span className="font-semibold text-sm">
                ⭐ {coursePopup?.rating?.toFixed(1) || 4.5}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg break-words">
                {coursePopup?.title ||
                  "Membuat web sederhana menggunakan reactjs"}
              </h3>
              <p className="text-base">
                by {coursePopup?.author || "Susan Doe"}
              </p>
            </div>
            <div className="flex items-start md:flex-row justify-between md:items-center">
              <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
                <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
                <p className="text-dark-blue capitalize">
                  {coursePopup?.level || "Intemediate"} Level
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
                <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
                <p>{coursePopup?.modul || 10} Modul</p>
              </div>
              <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
                <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
                <p>{coursePopup?.duration || "120 Menit"}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handlePostOrderCourse}
          className="px-4 py-2 rounded-full shadow-md text-white border-2 border-white bg-dark-blue "
        >
          <div className="flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in">
            <span>Beli Sekarang</span>
            <ArrowRightCircleIcon className="w-6 h-6 " />
          </div>
        </button>
      </div>
    </dialog>
  );
};

export default CoursePaymentModal;
