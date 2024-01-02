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
      <div className="flex text-base font-normal leading-5 max-w-7xl md:p-8">
        <div className="flex flex-col items-center justify-center w-full gap-4 px-0 py-4">
          <Link className="w-full" to="/profile">
            <button className="w-full px-4 py-2 bg-white shadow">
              <div className="flex flex-row gap-x-4">
                <PenLine className="text-dark-blue" />
                <span>Ubah Password</span>
              </div>
            </button>
          </Link>

          <Link className="w-full" to="/newpassword">
            <button className="w-full px-4 py-2 bg-white shadow">
              <div className="flex flex-row gap-x-4">
                <Settings className="text-dark-blue" />
                <span>Ubah Password</span>
              </div>
            </button>
          </Link>

          <Link className="w-full" to="/paymenthistory">
            <button className="w-full px-4 py-2 bg-white shadow">
              <div className="flex flex-row gap-x-4">
                <ShoppingCart className="text-dark-blue" />
                <span>Riwayat Pembelian</span>
              </div>
            </button>
          </Link>

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
