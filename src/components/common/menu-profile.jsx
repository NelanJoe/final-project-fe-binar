// eslint-disable-next-line no-unused-vars
import React from "react";
import { PenLine, Settings, ShoppingCart, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
export default function MenuProfil() {
  return (
    <section className="menu-profil">
      <div className="max-w-7xl md:p-8   flex font-Poppins text-base font-normal leading-5  ">
        <div className=" w-full flex  flex-col items-center py-4 px-0 justify-center gap-4  ">
          <div className="flex   items-center gap-4 w-full   shadow  ">
            <section className="flex bg-slate-50   ">
              <PenLine color="#6148FF" />
            </section>
            <Link to="/profile" className="p-3">
              Profil Saya
            </Link>
          </div>
          <div className="flex  items-center gap-4 w-full  shadow ">
            <section className=" flex bg-slate-50 ">
              <Settings color="#6148FF" />
            </section>
            <Link to="/newpassword" className="p-3">
              Ubah Password
            </Link>
          </div>
          <div className="flex  items-center gap-4 w-full  shadow">
            <section className=" flex bg-slate-50 ">
              <ShoppingCart color="#6148FF" />
            </section>

            <Link to="/paymenthistory" className="p-3">
              Riwayat Pembelian
            </Link>
          </div>
          <div className="flex  items-center gap-4 w-full  shadow ">
            <section className=" flex bg-slate-50 ">
              <LogOut color="#6148FF" />
            </section>

            <Link to="/login" className="p-3">
              Keluar
            </Link>
          </div>
          <div className="opacity-50">
            <p>Version 1.1.0 </p>
          </div>
        </div>
      </div>
    </section>
  );
}
