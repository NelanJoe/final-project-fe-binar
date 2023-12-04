// import React from "react";

export default function AccountProfile() {
  return (
    <section className="max-w-screen-xl sm:px-6 lg:px-8 self-stretch py-1 shrink-0 gap-4 items-center mx-[10px]">
      <form action="" className="space-y-2   flex flex-col items-center ">
        <div>
          <label
            htmlFor=""
            className="font-Poppins text-xs font-normal leading-4"
          >
            Nama
          </label>

          <div className=" ">
            <input
              type="text"
              className=" w-96  md:w-72 h-10 px-4 ring-1 ring-black rounded-2xl"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Email"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Email
          </label>

          <div className="">
            <input
              type="email"
              className="w-96  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder="JohnDoe@gmail.com"
              name="password"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="notelepon"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Nomor Telepon
          </label>

          <div className="">
            <input
              type="number"
              className="w-96  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder="+62 832381821"
              id="notelepon"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="negara"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Negara
          </label>

          <div className="">
            <input
              type="password"
              className="w-96  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder="indonesia"
              id="negara"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="kota"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Kota
          </label>

          <div className="">
            <input
              type="password"
              className="w-96  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder="jakarta"
              id="kota"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-96  md:w-72 rounded-2xl bg-[#6148FF] px-5 py-3 text-sm font-medium text-white"
        >
          Simpan Profil Saya
        </button>
      </form>
    </section>
  );
}
