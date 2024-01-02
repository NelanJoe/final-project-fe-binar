import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  BookOpenTextIcon,
  Clock9Icon,
  ShieldPlusIcon,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  useGetCourseOrderByIdQuery,
  usePatchOrderCourseByIdMutation,
} from "@/stores";

import BaseLayout from "@/layouts/base.layout";

import MasterCardIcon from "@/assets/images/master-card.png";
import VisaLogo from "@/assets/images/visa-logo.png";
import AmexLogo from "@/assets/images/amex-logo.png";
import PaypalLogo from "@/assets/images/paypal-logo.png";
import LoadingBar from "@/components/ui/LoadingBar";

const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError, error } =
    useGetCourseOrderByIdQuery(Number(id));

  const [patchOrderCourseById, { isLoading: isLoadingOrderCourse }] =
    usePatchOrderCourseByIdMutation();

  let content;

  if (isLoading) {
    content = <LoadingBar />;
  }

  if (isError) {
    content = (
      <BaseLayout title="Payment">
        <main className="min-h-screen">
          <section className="shadow-md bg-light-blue">
            <h2>{error?.data?.message}</h2>
          </section>
        </main>
      </BaseLayout>
    );
  }

  const onBackHandler = () => {
    navigate(-1);
  };

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

  if (isSuccess) {
    const course = data?.myCourse;

    content = (
      <BaseLayout title="Payment">
        <main className="min-h-screen">
          <section className="shadow-md bg-light-blue">
            <div className="py-6 mx-4 max-w-7xl md:mx-auto">
              <button
                onClick={onBackHandler}
                className="flex flex-row items-center space-x-3"
              >
                <ArrowLeftIcon className="w-6 h-6" /> <span>Kelas lainnya</span>
              </button>
              <div className="my-10">
                <div className="block py-3 mx-auto md:max-w-4xl bg-warning rounded-2xl">
                  <h2 className="font-semibold text-center text-white text-md lg:text-xl">
                    Selesaikan Pembayaran sampai 10 Maret 2023 12:00
                  </h2>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-4 my-10 max-w-7xl md:mx-auto">
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="order-1 w-full space-y-3 lg:w-8/12 lg:order-0">
                <details className="bg-gray-800 collapse collapse-arrow">
                  <summary className="text-xl font-medium text-white collapse-title">
                    Bank Transfer
                  </summary>
                  <div className="text-white collapse-content">
                    <div className="grid grid-flow-row grid-cols-3 gap-3">
                      <div className="w-full col-span-3 p-4 border md:col-span-2 lg:col-span-1 rounded-xl">
                        <p className="text-lg font-semibold">Bank BCA</p>
                        <p className="text-sm">No. Rekening: 1234567890</p>
                        <p className="text-sm">Atas Nama: John Doe</p>
                      </div>
                      <div className="w-full col-span-3 p-4 border md:col-span-2 lg:col-span-1 rounded-xl">
                        <p className="text-lg font-semibold">Bank Mandiri</p>
                        <p className="text-sm">No. Rekening: 1234567890</p>
                        <p className="text-sm">Atas Nama: John Doe</p>
                      </div>
                      <div className="w-full col-span-3 p-4 border md:col-span-2 lg:col-span-1 rounded-xl">
                        <p className="text-lg font-semibold">Bank BSI</p>
                        <p className="text-sm">No. Rekening: 1234567890</p>
                        <p className="text-sm">Atas Nama: John Doe</p>
                      </div>
                    </div>
                  </div>
                </details>
                <details
                  className="border-2 collapse collapse-arrow"
                  open={true}
                >
                  <summary className="text-xl font-medium text-white collapse-title bg-dark-blue">
                    Credit Card
                  </summary>
                  <div className="p-6 space-y-3 collapse-content">
                    <div className="flex items-center justify-center gap-x-3">
                      <img
                        src={MasterCardIcon}
                        alt="master-card-logo"
                        className="object-cover h-6 w-fit"
                      />
                      <img
                        src={VisaLogo}
                        alt="visa-logo"
                        className="object-cover h-6 w-fit"
                      />
                      <img
                        src={AmexLogo}
                        alt="american-express-logo"
                        className="object-cover h-6 w-fit"
                      />
                      <img
                        src={PaypalLogo}
                        alt="paypal-logo"
                        className="object-cover h-6 w-fit"
                      />
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
                        <div className="flex flex-col w-full space-x-2">
                          <label htmlFor="" className="font-semibold">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-xl"
                            placeholder="000"
                          />
                        </div>
                        <div className="flex flex-col w-full space-x-2">
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
                <div className="w-full p-8 space-y-4 border shadow-xl rounded-3xl border-dark-blue">
                  <h2 className="text-xl font-semibold">Pembayaran Kelas</h2>
                  <div className="w-full border shadow-md rounded-3xl">
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
                    <div className="px-3 py-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-dark-blue">
                          {course?.categories}
                        </p>
                        <span className="text-sm font-semibold">
                          ⭐ {course?.rating?.toFixed(1) || 4.5}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold break-words">
                          {course?.title ||
                            "Membuat web sederhana menggunakan reactjs"}
                        </h3>
                        <p className="text-base">
                          by {course?.author || "Susan Doe"}
                        </p>
                      </div>
                      <div className="flex items-start justify-between md:flex-row md:items-center gap-x-1">
                        <div className="flex flex-row items-center gap-x-1">
                          <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
                          <p className="text-sm capitalize marker:text-dark-blue">
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
                      <p className="text-base font-semibold text-dark-blue">
                        Rp {course?.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handlerPatchOrderCourse}
                      disabled={isLoadingOrderCourse}
                      className="w-full px-4 py-2 mx-auto text-center text-white rounded-xl bg-warning hover:bg-warning/70"
                    >
                      <div className="flex items-center justify-center gap-x-3">
                        {isLoadingOrderCourse ? (
                          <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                          <>
                            <span>Bayar dan Ikuti Kelas Selamanya</span>
                            <ArrowRightCircleIcon className="w-6 h-6" />
                          </>
                        )}
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
  }

  return content;
};

export default Payment;
