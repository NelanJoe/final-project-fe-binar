// eslint-disable-next-line no-unused-vars

export default function ChangePassword() {
  return (
    <section className="max-w-screen-xl sm:mx-auto lg:px-8 self-stretch py-1 shrink-0 gap-4 items-center ">
      <form
        action=""
        className="space-y-2  flex flex-col items-center mx-[10px]"
      >
        <div className="mt-3">
          <h1 className="flex items-center justify-center text-2xl font-Montserrat font-bold">
            Ubah Password
          </h1>
        </div>
        <div className="">
          <label
            htmlFor=""
            className="font-Poppins text-xs font-normal leading-4"
          >
            Masukkan Password Lama
          </label>

          <div className=" ">
            <input
              type="text"
              className="w-96  md:w-72 h-10 px-4 ring-1 ring-black rounded-2xl"
              placeholder="********"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Masukkan Password Baru
          </label>

          <div className="">
            <input
              type="text"
              className="w-96 md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder="********"
              name="password"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="passwordbaru"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Ulangi Password Baru
          </label>

          <div className="">
            <input
              type="password"
              className="w-96 md:w-72  h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder="********"
              id="passwordbaru"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-96 md:w-72 rounded-2xl bg-[#6148FF] px-5 py-3 text-sm font-medium text-white"
          onClick={(e) => {
            e.preventDefault();
            console.log("anda mengklik button ini");
          }}
        >
          Simpan Profil Saya
        </button>
      </form>
    </section>
  );
}
