import { usePutDeleteCategoryMutation } from "@/stores";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const DeleteCategory = ({IdCategory}) => {
  const [putDeleteCategory] = usePutDeleteCategoryMutation();
  console.log("Id Category",IdCategory);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await putDeleteCategory(IdCategory).unwrap();

      if (res.success) {
        toast.success(res?.success);

        window.location.reload();
        document.getElementById("delete").close();
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

DeleteCategory.propTypes = {
  IdCategory: PropTypes.number,
};

export default DeleteCategory
