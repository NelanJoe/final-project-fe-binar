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
        <section className="lg:-mt-14 h-full lg:h-full max-w-[1200px] mx-3 lg:mx-auto border-2 border-dark-blue rounded-lg">
          <div className="py-8 rounded-t-md bg-dark-blue">
            <h2 className="text-xl font-semibold text-center text-white">
              Notifikasi
            </h2>
          </div>
          <div className="px-12 py-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-4">
                  <div className="flex flex-col items-center justify-center w-8 h-8 rounded-full bg-dark-blue">
                    <BellIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Promosi</h3>
                    <p className="text-lg font-semibold">
                      Dapatkan Potongan 50% selama Bulan Maret!
                    </p>
                    <p className="text-gray-500">
                      Syarat dan Ketentuan berlaku!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>2 Maret, 12:00</p>
                  <span className="w-3 h-3 rounded-full bg-success"></span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-4">
                  <div className="flex flex-col items-center justify-center w-8 h-8 rounded-full bg-dark-blue">
                    <BellIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Promosi</h3>
                    <p className="text-lg font-semibold">
                      Dapatkan Potongan 50% selama Bulan Maret!
                    </p>
                    <p className="text-gray-500">
                      Syarat dan Ketentuan berlaku!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>2 Maret, 12:00</p>
                  <span className="w-3 h-3 rounded-full bg-success"></span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-4">
                  <div className="flex flex-col items-center justify-center w-8 h-8 rounded-full bg-dark-blue">
                    <BellIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Promosi</h3>
                    <p className="text-lg font-semibold">
                      Dapatkan Potongan 50% selama Bulan Maret!
                    </p>
                    <p className="text-gray-500">
                      Syarat dan Ketentuan berlaku!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>2 Maret, 12:00</p>
                  <span className="w-3 h-3 rounded-full bg-success"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Notification;
