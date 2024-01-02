import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

import ProfileNavigation from "../components/profile-navigation";

const ProfileLayout = ({ children }) => {
  return (
    <main className="min-h-screen">
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
      <section className="-mt-6 lg:-mt-14 h-full lg:h-full max-w-[1200px] mx-3 lg:mx-auto border-2 border-dark-blue rounded-lg">
        <div className="py-4 lg:py-8 rounded-t-md bg-dark-blue">
          <h2 className="text-xl font-semibold text-center text-white">Akun</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-7 gap-5">
            <div className="col-span-7 lg:col-span-3">
              <ProfileNavigation />
              <div className="hidden my-8 lg:block">
                <p className="text-center text-gray-400">Version 1.1.0</p>
              </div>
            </div>
            <div className="col-span-7 lg:col-span-4">{children}</div>
          </div>
          <div className="my-8 lg:hidden">
            <p className="text-center text-gray-400">Version 1.1.0</p>
          </div>
        </div>
      </section>
    </main>
  );
};

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileLayout;
