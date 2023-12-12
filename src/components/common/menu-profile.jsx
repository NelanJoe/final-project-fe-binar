import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PenLine, Settings, ShoppingCart, LogOutIcon } from "lucide-react";

import { logout } from "@/stores/auth/auth.slice";

export default function MenuProfil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <section className="menu-profil">
      <div className="flex text-base font-normal leading-5 max-w-7xl md:p-8 font-Poppins ">
        <div className="flex flex-col items-center justify-center w-full gap-4 px-0 py-4 ">
          <div className="flex items-center w-full gap-4 shadow ">
            <section className="flex bg-slate-50 ">
              <PenLine color="#6148FF" />
            </section>
            <Link to="/profile" className="p-3">
              Profil Saya
            </Link>
          </div>
          <div className="flex items-center w-full gap-4 shadow ">
            <section className="flex bg-slate-50">
              <Settings color="#6148FF" />
            </section>
            <Link to="/newpassword" className="p-3">
              Ubah Password
            </Link>
          </div>
          <div className="flex items-center w-full gap-4 shadow">
            <section className="flex bg-slate-50">
              <ShoppingCart color="#6148FF" />
            </section>

            <Link to="/paymenthistory" className="p-3">
              Riwayat Pembelian
            </Link>
          </div>
          <button
            onClick={onLogout}
            className="w-full px-4 py-2 bg-white shadow"
          >
            <div className="flex flex-row gap-x-4">
              <LogOutIcon className="text-dark-blue" />
              <span>Keluar</span>
            </div>
          </button>
          <div className="opacity-50">
            <p>Version 1.1.0 </p>
          </div>
        </div>
      </div>
    </section>
  );
}
