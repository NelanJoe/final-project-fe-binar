import BaseLayout from "@/layouts/base.layout";
import { ArrowLeftIcon, BellIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <BaseLayout title="Payment History">
      <main className="min-h-screen ">
        <section className="bg-light-blue">
          <div className="py-12 mx-3 lg:pt-18 lg:pb-20 max-w-7xl lg:mx-auto">
            <Link to="/">
              <button className="flex flex-row items-center space-x-3 text-lg font-semibold text-dark-blue">
                <ArrowLeftIcon className="w-6 h-6" />{" "}
                <span>Kembali ke Beranda</span>
              </button>
            </Link>
          </div>
        </section>
        <section className="-mt-6 lg:-mt-14 h-[600px] max-w-[1200px] mx-2 lg:mx-auto border-2 border-dark-blue rounded-lg overflow-y-scroll">
          <div className="sticky inset-0 py-8 rounded-t-md bg-dark-blue">
            <h2 className="text-xl font-semibold text-center text-white">
              Notifikasi
            </h2>
          </div>
          <div className="p-2 lg:px-12 lg:py-6">
            <div className="flex flex-col gap-4">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center justify-between"
                >
                  <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col items-center justify-center w-4 h-4 rounded-full lg:h-8 lg:w-8 bg-dark-blue">
                      <BellIcon className="w-3 h-3 text-white lg:h-5 lg:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base lg:font-semibold text-dark-blue">
                        Promosi
                      </h3>
                      <p className="text-sm lg:font-semibold lg:text-lg">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="text-sm text-gray-500 lg:text-base">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center lg:gap-2">
                    <p className="text-sm lg:text-base">2 Maret, 12:00</p>
                    <span className="w-2 h-2 rounded-full lg:w-3 lg:h-3 bg-success"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Notification;
