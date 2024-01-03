import { usePutDeleteCategoryMutation } from "@/stores";
import toast from "react-hot-toast";

const DeleteCategory = () => {
  const [putDeleteCategory] = usePutDeleteCategoryMutation();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await putDeleteCategory().unwrap();

      if (res.success) {
        toast.success(res?.success);

        window.location.reload();
        document.getElementById("delete-course").close();
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  }

  return (
    <form method="dialog">
      <button className="btn">Batal</button>
      <button onClick={handleClick} className="ml-5 text-white btn bg-dark-blue hover:bg-[#4532bd]">
        Yakin
      </button>
    </form>
  );
}


export default DeleteCategory
