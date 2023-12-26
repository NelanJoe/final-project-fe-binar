import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

import BaseLayout from "@/layouts/base.layout";

import ProfileNavigation from "../components/profile-navigation";

const ProfilePaymentHistory = () => {
  return (
    <BaseLayout title="Payment History">
      <main className="min-h-screen ">
        <section className="bg-light-blue">
          <div className="py-12 mx-20 lg:py-24 max-w-7xl lg:mx-auto">
            <Link to="/">
              <button className="flex flex-row items-center space-x-3 text-lg font-semibold text-dark-blue">
                <ArrowLeftIcon className="w-6 h-6" />{" "}
                <span>Kembali ke Beranda</span>
              </button>
            </Link>
          </div>
        </section>
        <section className="lg:-mt-14 h-full lg:h-full max-w-[1200px] mx-3 lg:mx-auto border-2 border-dark-blue rounded-lg">
          <div className="py-8 bg-dark-blue">
            <h2 className="text-xl font-semibold text-center text-white">
              Akun
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-7 lg:col-span-3">
                <ProfileNavigation />
                <div className="mt-8">
                  <p className="text-center text-gray-400">Version 1.1.0</p>
                </div>
              </div>
              <div className="col-span-7 lg:col-span-4">
                <p>Content</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default ProfilePaymentHistory;
