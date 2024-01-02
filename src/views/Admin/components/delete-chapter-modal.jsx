import { useNavigate, useSearchParams } from "react-router-dom";

import { useDeleteChapterMutation, useGetChapterByIdQuery } from "@/stores";
import LoadingBar from "@/components/ui/LoadingBar";
import toast from "react-hot-toast";

const DeleteChapterModal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const chapterId = searchParams.get("chapterId") || "";

  const { data, isLoading, isSuccess, isError, error } =
    useGetChapterByIdQuery(chapterId);

  const [deleteChapter] = useDeleteChapterMutation();

  let content;

  if (isLoading) {
    content = <LoadingBar />;
  }

  if (isError) {
    content = (
      <dialog id="delete-chapter" className="modal">
        <div className="space-y-4 modal-box">
          <h3 className="text-lg font-bold">Delete Chapter</h3>
          <p>{error?.data?.message}</p>
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={() => {
                document.querySelector("#delete-chapter")?.close();
              }}
              className="w-full btn btn-secondary bg-warning hover:bg-warning/80"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    );
  }

  const handleDelete = async () => {
    try {
      const res = await deleteChapter({ chapterId }).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          style: {
            textTransform: "capitalize",
          },
        });

        navigate("/chapters");

        window.location.reload();
      }
    } catch (error) {
      toast.error(error?.data?.message, {
        style: {
          textTransform: "capitalize",
        },
      });
    }
  };

  if (isSuccess) {
    content = (
      <dialog id="delete-chapter" className="modal">
        <div className="space-y-4 modal-box">
          <h3 className="text-lg font-bold">Delete Chapter</h3>
          <p>
            Apakah kamu yakin akan menghapus{" "}
            <span className="font-semibold">{`${data?.chapter?.title}`}</span> ?
          </p>
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={handleDelete}
              className="w-full cursor-pointer btn btn-primary"
            >
              Hapus
            </button>
            <button
              onClick={() => {
                document.querySelector("#delete-chapter")?.close();
              }}
              className="w-full cursor-pointer btn btn-secondary bg-warning hover:bg-warning/80"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    );
  }

  return content;
};

export default DeleteChapterModal;
