import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  BookOpenTextIcon,
  Clock9Icon,
  ShieldPlusIcon,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetCourseOrderByIdQuery,
  usePatchOrderCourseByIdMutation,
} from "@/stores";

import BaseLayout from "@/layouts/base.layout";
import toast from "react-hot-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetCourseOrderByIdQuery(Number(id));
  const [patchOrderCourseById] = usePatchOrderCourseByIdMutation();

  const onBackHandler = () => {
    navigate(-1);
  };

  const course = data?.myCourse;

  const handlerPatchOrderCourse = async () => {
    try {
      const res = await patchOrderCourseById(Number(id));

      const { success, message, myCourseId } = res.data;

      if (success) {
        toast.success(message);
        navigate(`/payment-success/${myCourseId}`);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <BaseLayout>
      <main className="min-h-screen">
        <section className="bg-light-blue shadow-md">
          <div className="max-w-7xl mx-4 md:mx-auto py-6">
            <button
              onClick={onBackHandler}
              className="flex flex-row items-center space-x-3"
            >
              <ArrowLeftIcon className="w-6 h-6" /> <span>Kelas lainnya</span>
            </button>
            <div className="my-10">
              <div className="block mx-auto md:max-w-4xl bg-warning py-3 rounded-2xl">
                <h2 className="text-white text-md lg:text-xl text-center font-semibold">
                  Selesaikan Pembayaran sampai 10 Maret 2023 12:00
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-4 md:mx-auto my-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-8/12 order-1 lg:order-0 space-y-3">
              <details className="collapse collapse-arrow bg-gray-800">
                <summary className="collapse-title text-white text-xl font-medium">
                  Bank Transfer
                </summary>
                <div className="collapse-content text-white">
                  <p>content</p>
                </div>
              </details>
              <details className="collapse border-2 collapse-arrow">
                <summary className="collapse-title bg-dark-blue text-white text-xl font-medium">
                  Credit Card
                </summary>
                <div className="collapse-content mt-2 space-y-3">
                  <div className="flex items-center justify-center gap-x-3">
                    <p>Icon here</p>
                    <p>Icon here</p>
                    <p>Icon here</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-col space-x-2">
                      <label htmlFor="" className="font-semibold">
                        Card number
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl"
                        placeholder="4480 0000 0000 0000"
                      />
                    </div>
                    <div className="flex flex-col space-x-2">
                      <label htmlFor="" className="font-semibold">
                        Card holder name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex w-full space-x-5">
                      <div className="w-full flex flex-col space-x-2">
                        <label htmlFor="" className="font-semibold">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-xl"
                          placeholder="000"
                        />
                      </div>
                      <div className="w-full flex flex-col space-x-2">
                        <label htmlFor="" className="font-semibold">
                          Expiry date
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-xl"
                          placeholder="07/24"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className="order-0 lg:order-1 lg:w-1/2">
              <div className="w-full shadow-xl rounded-3xl border border-dark-blue p-8 space-y-4">
                <h2 className="font-semibold text-xl">Pembayaran Kelas</h2>
                <div className="rounded-3xl border shadow-md w-full">
                  <div>
                    <img
                      src={
                        course?.image ||
                        "https://picsum.photos/seed/picsum/200/300"
                      }
                      alt={`${course?.title}`}
                      className="h-[120px] rounded-t-3xl w-full object-cover object-top"
                    />
                  </div>
                  <div className="py-2 px-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-dark-blue text-sm font-semibold">
                        {course?.categories}
                      </p>
                      <span className="font-semibold text-sm">
                        ⭐ {course?.rating?.toFixed(1) || 4.5}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg break-words">
                        {course?.title ||
                          "Membuat web sederhana menggunakan reactjs"}
                      </h3>
                      <p className="text-base">
                        by {course?.author || "Susan Doe"}
                      </p>
                    </div>
                    <div className="flex items-start md:flex-row justify-between md:items-center gap-x-1">
                      <div className="flex flex-row items-center gap-x-1">
                        <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
                        <p className="text-sm marker:text-dark-blue capitalize">
                          {course?.level || "Intemediate"} Level
                        </p>
                      </div>
                      <div className="flex flex-row items-center gap-x-1">
                        <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
                        <p className="text-sm">{course?.modul || 10} Modul</p>
                      </div>
                      <div className="flex flex-row items-center gap-x-1">
                        <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
                        <p className="text-sm">
                          {course?.duration || "120 Menit"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold">Harga</h3>
                    <p>Rp {course?.price}</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold">PPN</h3>
                    <p>Rp {course?.price}</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold">Total Bayar</h3>
                    <p className="text-base text-dark-blue font-semibold">
                      Rp {course?.price}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handlerPatchOrderCourse}
                    className="block mx-auto px-4 py-2 rounded-xl text-white bg-warning hover:bg-warning/70"
                  >
                    <div className="flex items-center gap-x-3">
                      <span>Bayar dan Ikuti Kelas Selamanya</span>
                      <ArrowRightCircleIcon className="w-6 h-6" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Payment;
