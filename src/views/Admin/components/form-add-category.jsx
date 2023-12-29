import { usePostCategoryMutation } from "@/stores";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FormAddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const [postCategory] = usePostCategoryMutation();

  const handleChangeName = async (e) => {
    setName(e.target.value);
  };
  const handleChangeImage = async (e) => {
    const file = e.target.files[0];

    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);

    try {
      const res = await postCategory(formData).unwrap();

      if (res?.success) {
        toast.success(res?.success);
        navigate("/my-class");

        window.location.reload();

        document.getElementById("create").close();
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Nama Kategori
        </label>
        <input
          id="name"
          value={name}
          onChange={handleChangeName}
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder="Masukan nama kategori"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="myfile"
          className="mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Upload Video :
        </label>
        <input
          onChange={handleChangeImage}
          accept="image/*"
          type="file"
          id="myFile"
          name="filename"
        />
      </div>
      <button type="submit" className="w-full btn btn-md btn-primary">
        Simpan
      </button>
    </form>
  );
};

export default FormAddCategory;
