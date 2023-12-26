import { useState, useEffect } from "react";
import { useGetProfilQuery, useUpdateProfilMutation } from "@/stores";

const Profil = () => {
  const { data, isLoading, isError, error } = useGetProfilQuery();
  const [name, setName] = useState(() => {
    return data?.user.profiles.name || "";
  });
  const [email, setEmail] = useState(() => {
    return "" || data?.user.email;
  });
  const [telp, setTelp] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [updateProfil] = useUpdateProfilMutation();

  const handleUpdateProfil = async (e) => {
    e.preventDefault();
    // const newDataProfile = {};
    // const res = await updateProfil.mutateAsync({
    //   id: data.id,
    //   name,
    //   email,
    //   telp,
    //   country,
    //   city,
    // });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="max-w-7xl sm:px-6 md:px-8 py-1   items-center ">
      <div className="mt-3">
        <h1 className="flex items-center justify-center text-2xl font-Montserrat font-bold">
          Profil Saya
        </h1>
      </div>
      <form
        onSubmit={handleUpdateProfil}
        className="space-y-2   flex flex-col items-center "
      >
        <div>
          <label
            htmlFor="nama"
            className="font-Poppins text-xs font-normal leading-4"
          >
            Nama
          </label>
          <div className=" ">
            <input
              id="nama"
              type="text"
              className=" w-80  md:w-72 h-10 px-4 ring-1 ring-black rounded-2xl"
              placeholder={data?.user.profiles.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              className="w-80  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder={data?.user.email}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-80  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder={data?.user.phone}
              id="notelepon"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
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
              type="text"
              className="w-80  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder={data?.user.profiles.country}
              id="negara"
              value={data.country}
              onChange={(e) => setCountry(e.target.value)}
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
              type="text"
              className="w-80  md:w-72 h-10 items-center py-3 px-4 ring-1 ring-black rounded-2xl"
              placeholder={data?.user.profiles.city}
              id="kota"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
};

export default Profil;
