import { BellRing } from "lucide-react";

export default function Notifikasi() {
  return (
    <div className="max-w-screen-xl sm:mx-auto lg:px-8 self-stretch py-1 shrink-0 gap-4 items-center my-10">
      <div className="flex flex-col sm:flex-row justify-between shadow-inner mb-4">
        <div className="flex gap-6">
          <span className="bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center p-1">
            <BellRing color="white" />
          </span>
          <div>
            <h1 className="text-dark-blue">Promosi</h1>
            <p>Dapatkan Potongan 50% selama bulan maret</p>
            <span className="opacity-40">Syarat dan ketentuan Berlaku</span>
          </div>
        </div>
        <div className="ml-14">
          <p className="opacity-40 sm:ml-40 ">3 maret,12:00</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between shadow-inner mb-4">
        <div className="flex gap-6">
          <span className="bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center p-1">
            <BellRing color="white" />
          </span>
          <div>
            <h1 className="text-dark-blue">Notifikasi</h1>
            <p>Password Berhasil Diubah</p>
          </div>
        </div>
        <div className="ml-14">
          <p className="opacity-40">1 maret, 10:00</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between shadow-inner">
        <div className="flex gap-5">
          <span className="bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center p-1 shadow-2xl">
            <BellRing color="white" />
          </span>
          <div>
            <h1 className="text-dark-blue">Promosi</h1>
            <p>Dapatkan Potongan 50% selama bulan maret</p>
            <span className="opacity-40">Syarat dan ketentuan Berlaku</span>
          </div>
        </div>
        <div className="ml-14">
          <p className="opacity-40">1 maret, 09:00</p>
        </div>
      </div>
    </div>
  );
}
