import { usePostCourseMutation } from "@/stores";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditCourse = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const [postCourse, { isLoading: isLoadingPostCourse }] =
      usePostCourseMutation();

    const handleChangeImage = async (e) => {
      const file = e.target.files[0];

      setImage(file);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("title", title);
      formData.append("image", image);

      try {
        const res = await postCourse(formData).unwrap();

        if (res.success) {
          toast.success(res?.success);
          document.getElementById("edit-course").close();

          window.location.reload();

          navigate("/my-class");
        }
      } catch (error) {
        toast.error(error?.data?.message);
      }
    };



  return (
    <form onSubmit={handleSubmit} className="text-left">
      <h3 className="text-lg font-bold">Ubah</h3>
      <p className="py-4 text-base">Ingin Mengubah course anda?</p>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Judul
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder="Masukan judul course"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="author"
          className="block mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Pembuat
        </label>
        <input
          id="author"
          // value={name}
          // onChange={handleChangeName}
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder="Masukan pembuat course"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="telegram"
          className="block mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Telegram
        </label>
        <input
          id="telegram"
          // value={name}
          // onChange={handleChangeName}
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder="Masukan telegram"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Harga
        </label>
        <input
          id="price"
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Masukan Harga"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="level"
          className="mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Level
        </label>
        <select
          id="level"
          className="w-full rounded-2xl select select-md select-bordered"
        >
          <option disabled selected>
            Pilih Level Kesulitan
          </option>
          <option>Beginner Level</option>
          <option>Intermediate Level</option>
          <option>Advanced Level</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="prepare"
          className="block mb-2 text-sm font-normal leading-4 lg:text-base"
        >
          Prepare
        </label>
        <input
          id="prepare"
          // value={name}
          // onChange={handleChangeName}
          className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder="Masukan Prepare"
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
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium "
        >
          Deskripsi
        </label>
        <textarea
          id="description"
          rows="4"
          className="w-full p-2.5 text-sm border shadow appearance-none rounded-md leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
          placeholder="Paragraph"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isLoadingPostCourse}
        className="w-full btn btn-md btn-primary"
      >
        {isLoadingPostCourse ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Simpan"
        )}
      </button>
    </form>
  );
}

export default EditCourse
