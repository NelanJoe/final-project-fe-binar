import { usePutEditCategoryMutation } from "@/stores";
import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditCategory = ({ categoryName, categoryImage, categoryId }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });
  const navigate = useNavigate();

  const [putEditCategory, { isLoading }] = usePutEditCategoryMutation();

  const handleChangeName = async (e) => {
    setName(e.target.value);
  };
  const handleChangeImage = async (e) => {
    const file = e.target.files[0];

    const img = {
      preview: URL.createObjectURL(file),
      data: e.target.files[0],
    };

    setImage(img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name || categoryName);
    formData.append("image", image);

    try {
      const res = await putEditCategory({
        categoryId,
        data: formData,
      }).unwrap();

      if (res.success) {
        toast.success(res?.success);

        navigate("/my-class");

        window.location.reload();

        document.getElementById("edit").close();
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold">Ubah</h3>
      <p className="py-4 text-base">Ingin Mengubah kelas anda?</p>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-normal leading-4 text-left lg:text-base"
        >
          Nama Kategori
        </label>
        <input
          id="name"
          value={name}
          onChange={handleChangeName}
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder={categoryName}
        />
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex justify-center">
          {image?.data ? (
            <img
              src={image.preview}
              className="w-32 rounded-lg "
              alt={categoryName}
            />
          ) : (
            <img
              src={categoryImage}
              className="w-32 rounded-lg"
              alt={categoryName}
            />
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="myfile"
            className="mb-2 text-sm font-normal leading-4 text-left lg:text-base"
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
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn btn-md btn-primary"
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Simpan"
        )}
      </button>
    </form>
  );
};

EditCategory.propTypes = {
  categoryId: PropTypes.number,
  categoryName: PropTypes.string,
  categoryImage: PropTypes.string,
};

export default EditCategory;
