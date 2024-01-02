import { useGetChapterByIdQuery, usePutChapterMutation } from "@/stores";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const EditChapterModal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const chapterId = searchParams.get("chapterId") || "";

  const { data, isLoading, isSuccess, isError, error } =
    useGetChapterByIdQuery(chapterId);

  const [putChapter, { isLoading: isLoadingPutChapter }] =
    usePutChapterMutation();

  let content;

  if (isLoading) {
    content = <span className="loading loading-bars loading-sm"></span>;
  }

  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const paramsPutChapter = {
        chapterId,
        data: {
          title: title || data?.chapter?.title,
          duration: duration || data?.chapter?.duration,
        },
      };

      const res = await putChapter(paramsPutChapter).unwrap();

      if (res?.success) {
        navigate("/chapters");

        toast.success(res?.success, {
          style: {
            textTransform: "capitalize",
          },
        });
        document.querySelector("#edit-chapter")?.close();

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
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="chapter-title" className="font-semibold">
              Title
            </label>
            <input
              id="chapter-title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={data?.chapter?.title}
              className="input input-primary"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="chapter-duration" className="font-semibold">
              Duration
            </label>
            <input
              id="chapter-duration"
              name="duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder={data?.chapter?.duration}
              className="input input-primary"
            />
          </div>
          <div>
            <button className="w-full btn btn-primary">
              {isLoadingPutChapter ? (
                <span className="loading loading-bars loading-sm"></span>
              ) : (
                "Simpan perubahan"
              )}
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <dialog id="edit-chapter" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="my-3 text-lg font-bold">Edit Chapter</h3>
        {content}
      </div>
    </dialog>
  );
};

export default EditChapterModal;
