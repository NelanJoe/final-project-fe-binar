import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useGetProfileQuery, useUpdateProfileMutation } from "@/stores";

import LoadingBar from "@/components/ui/LoadingBar";

const ProfileUpdateForm = () => {
  const { data, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isLoadingUpdateProfile }] =
    useUpdateProfileMutation();
  const navigate = useNavigate();

  const [image, setImage] = useState({ preview: "", data: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleChangeImage = (e) => {
    const file = e.target.files[0];

    const img = {
      preview: URL.createObjectURL(file),
      data: e.target.files[0],
    };

    setImage(img);
  };

  if (isLoading) {
    return <LoadingBar />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("image", image.data);
    formData.append("name", data?.user?.profiles?.name || name);
    formData.append("email", data?.user?.email || email);
    formData.append("phone", data?.user?.phone || phoneNumber);
    formData.append("country", data?.user?.profiles?.country || country);
    formData.append("city", data?.user?.profiles?.city || city);

    try {
      const res = await updateProfile(formData).unwrap();

      if (res?.success) {
        toast.success("Berhasil mengubah profile");
        navigate("/profile");
        window.location.reload();
      }
    } catch (error) {
      toast.error("Gagal mengubah profile");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3">
        <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
          <div className="flex flex-col items-center justify-center gap-3">
            <label htmlFor="">Profile Foto</label>
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {image.data ? (
                  <img
                    src={image.preview}
                    alt={`avatar-${data?.user?.profiles?.name}`}
                  />
                ) : (
                  <img
                    src={data?.user?.profiles?.image}
                    alt={`avatar-${data?.user?.profiles?.name}`}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-dark-blue px-4 py-1.5 cursor-pointer tracking-wide overflow-hidden">
              <span className="text-white">Select Profile Image</span>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="absolute opacity-0 cursor-pointer"
                required={true}
                onChange={handleChangeImage}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Nama</label>
          <input
            type="text"
            className="w-full rounded-xl"
            name="name"
            placeholder={data?.user?.profiles?.name || ""}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="w-full rounded-xl"
            placeholder={data?.user?.email || ""}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Nomor Telepon</label>
          <input
            type="text"
            name="phoneNumber"
            className="w-full rounded-xl"
            placeholder={data?.user?.phone || "Isi Nomor Telepon"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Negara</label>
          <input
            type="text"
            name="country"
            className="w-full rounded-xl"
            placeholder={
              data?.user?.profiles?.country || "Isi nama negara kamu"
            }
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Kota</label>
          <input
            type="text"
            name="city"
            className="w-full rounded-xl"
            placeholder={data?.user?.profiles?.city || "Isi nama kota kamu"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoadingUpdateProfile}
            className="w-full btn btn-primary rounded-xl"
          >
            {isLoadingUpdateProfile ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Simpan Perubahan"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
