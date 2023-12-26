import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useGetProfileQuery, useUpdateProfileMutation } from "@/stores";
import LoadingBar from "@/components/ui/LoadingBar";

const Profil = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();

  const [name, setName] = useState(() => {
    return data?.user?.profiles?.name || "";
  });

  const [email, setEmail] = useState(() => {
    return data?.user?.email || "";
  });

  const [phoneNumber, setPhoneNumber] = useState(() => {
    return data?.user?.phone || "";
  });

  const [country, setCountry] = useState(() => {
    return data?.user?.profiles?.country || "";
  });

  const [city, setCity] = useState(() => {
    return data?.user?.profiles?.city || "";
  });

  if (isLoading) {
    return <LoadingBar />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const res = await updateProfile({
        name: data?.user?.profiles?.name || name,
        email: data?.user?.email || email,
        phoneNumber: data?.user?.phone || phoneNumber,
        country,
        city,
      }).unwrap();

      if (res?.success === "success") {
        toast.success(res?.success);
        navigate("/profile");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="items-center py-4 max-w-7xl sm:px-6 md:px-8">
      <div className="mt-3">
        <h1 className="flex items-center justify-center text-2xl font-bold font-Montserrat">
          Profil Saya
        </h1>
      </div>
      <form
        onSubmit={handleUpdateProfile}
        className="flex flex-col items-center space-y-2 "
      >
        <div>
          <label
            htmlFor="nama"
            className="text-xs font-normal leading-4 font-Poppins"
          >
            Nama
          </label>
          <div className="">
            <input
              id="nama"
              type="text"
              className="h-10 px-4 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              placeholder={data?.user?.profiles?.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              name="email"
              placeholder={data?.user?.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id="notelepon"
              placeholder={data?.user?.phone}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              type="text"
              className="items-center h-10 px-4 py-3 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              id="negara"
              placeholder={data?.user?.profiles?.country}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              type="text"
              className="items-center h-10 px-4 py-3 w-80 md:w-72 ring-1 ring-black rounded-2xl"
              id="kota"
              placeholder={data?.user?.profiles?.city}
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
