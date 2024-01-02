import { usePutDeleteCourseMutation } from '@/stores';
import toast from 'react-hot-toast';

const DeleteCourse = () => {
  const [putDeleteCourse] = usePutDeleteCourseMutation();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await putDeleteCourse().unwrap();

      if (res.success) {
        toast.success(res?.success);

        window.location.reload();
        document.getElementById("delete").close();
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form method="dialog">
      <button className="btn">Batal</button>
      <button
        onClick={handleClick}
        className="ml-5 text-white btn bg-dark-blue hover:bg-[#4532bd]"
      >
        Yakin
      </button>
    </form>
  );
}

export default DeleteCourse
