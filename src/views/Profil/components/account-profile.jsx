
export default function AccountProfile() {
  return (
    <section className="items-center py-1 max-w-7xl sm:px-6 md:px-8 ">
      <div className="mt-3">
        <h1 className="flex items-center justify-center text-2xl font-bold font-Montserrat">
          Profil Saya
        </h1>
      </div>
      <form action="" className="flex flex-col items-center space-y-2 ">
        <div>
          <label
            htmlFor=""
            className="text-xs font-normal leading-4 font-Poppins"
          >
            Nama
          </label>

          <div className="">
            <input
              type="text"
              className="h-10 px-4  w-80 md:w-72 ring-1 ring-black rounded-2xl"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Email"
            className="text-xs font-normal leading-4 font-Poppins"
          >
            Email
          </label>

          <div className="">
            <input
              type="email"
              className="items-center h-10 px-4 py-3 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              placeholder="JohnDoe@gmail.com"
              name="password"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="notelepon"
            className="text-xs font-normal leading-4 font-Poppins"
          >
            Nomor Telepon
          </label>

          <div className="">
            <input
              type="number"
              className="items-center h-10 px-4 py-3 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              placeholder="+62 832381821"
              id="notelepon"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="negara"
            className="text-xs font-normal leading-4 font-Poppins"
          >
            Negara
          </label>

          <div className="">
            <input
              type="password"
              className="items-center h-10 px-4 py-3 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              placeholder="indonesia"
              id="negara"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="kota"
            className="text-xs font-normal leading-4 font-Poppins"
          >
            Kota
          </label>

          <div className="">
            <input
              type="password"
              className="items-center h-10 px-4 py-3 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              placeholder="jakarta"
              id="kota"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-80  md:w-72 rounded-2xl bg-[#6148FF] px-5 py-3 text-sm font-medium text-white"
        >
          Simpan Profil Saya
        </button>
      </form>
    </section>
  );
}
