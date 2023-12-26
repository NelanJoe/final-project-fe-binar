import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

import BaseLayout from "@/layouts/base.layout";

import ProfileNavigation from "../components/profile-navigation";

const Profile = () => {
  return (
    <BaseLayout title="Profile">
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
                <form>
                  <div className="space-y-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className="avatar placeholder">
                        <div className="w-24 rounded-full bg-neutral text-neutral-content">
                          <span className="text-3xl">D</span>
                        </div>
                      </div>
                      <input type="file" hidden="true" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Nama</label>
                      <input type="text" className="w-full rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Email</label>
                      <input type="text" className="w-full rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Nomor Telepon</label>
                      <input type="text" className="w-full rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Negara</label>
                      <input type="text" className="w-full rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Kota</label>
                      <input type="text" className="w-full rounded-xl" />
                    </div>
                    <div>
                      <button className="w-full btn btn-primary rounded-xl">
                        Simpan Profile Saya
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Profile;
