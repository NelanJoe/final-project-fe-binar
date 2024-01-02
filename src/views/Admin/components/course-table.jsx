import { PlusCircle } from "lucide-react";
import { useState } from "react";

import { useGetAllCourseQuery } from "@/stores";

import FormAddCourse from "./form-add-course";
import DeleteCourse from "./delete-course";
import LoadingBar from "@/components/ui/LoadingBar";
import EditCourse from "./edit-course";

const CourseTable = () => {
  const titleTable = [
    "No",
    "Judul",
    "Author",
    "Telegram",
    "Gambar",
    "Deskirpsi",
    "Harga",
    "Level",
    "Prepare",
    "Aksi",
  ];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAllCourseQuery();

  // Hitung total halaman berdasarkan jumlah data
  const totalPages = Math.ceil(data?.course.length / itemsPerPage);

  // Mendapatkan data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.course.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationRange = () => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(start + 4, totalPages);
    return { start, end };
  };

  const { start, end } = getPaginationRange();

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Courses</h1>
        <button
          onClick={() => document.getElementById("create-course").showModal()}
          className="flex items-center ml-2 gap-2 px-2 py-[2px] text-base text-white rounded-full hover:bg-[#4532bd] bg-dark-blue"
        >
          <PlusCircle className="w-4 h-4 " /> Tambah
        </button>
        <dialog id="create-course" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="my-3 text-lg font-bold">Tambah Course</h3>
            <FormAddCourse />
          </div>
        </dialog>
      </div>
      <div className="relative mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left border rtl:text-right">
          <thead className="text-xs text-white bg-dark-blue">
            <tr className="text-center">
              {titleTable.map((title, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-2 py-5 capitalize border-x md:text-sm"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((course, index) => {
              return (
                <tr
                  key={index}
                  className="text-center bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="px-2 py-3 font-bold border-x">
                    {course?.title}
                  </td>
                  <td className="px-2 py-3 border-x">{course?.author}</td>
                  <td className="px-2 py-3 border-x text-dark-blue hover:underline">
                    <a href={course?.telegram}>Link Telegram</a>
                  </td>
                  <td className="px-2 py-3 font-semibold border-x">
                    <div className="flex items-center justify-center">
                      <img
                        src={course?.image}
                        alt={course?.title}
                        className="object-cover w-10 h-10 border-2 rounded-xl border-dark-blue"
                      />
                    </div>
                  </td>
                  <td className="px-2 py-3 border-x">
                    {course?.description.slice(0, 50)}...
                  </td>
                  <td className="py-3 border-x">{course?.price}</td>
                  <td className="px-2 py-3 font-bold uppercase border-x text-dark-blue">
                    {course?.level}
                  </td>
                  <td className="px-2 py-3 border-x">{course?.prepare}</td>
                  <td className="flex items-center justify-center gap-2 px-2 pt-5 lg:py-5">
                    <button
                      onClick={() =>
                        document.getElementById("edit-course").showModal()
                      }
                      className="px-2 text-white rounded-full bg-dark-blue"
                    >
                      Ubah
                    </button>
                    <dialog id="edit-course" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <EditCourse />
                      </div>
                    </dialog>
                    <button
                      onClick={() =>
                        document.getElementById("delete-course").showModal()
                      }
                      className="px-2 text-white rounded-full bg-warning"
                    >
                      Hapus
                    </button>
                    <dialog
                      id="delete-course"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Hapus!</h3>
                        <p className="py-4 text-base">
                          Apakah anda yakin ingin menghapus course ini?
                        </p>
                        <div className="flex justify-center modal-action">
                          <DeleteCourse />
                        </div>
                      </div>
                    </dialog>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mt-7">
        <div className="join">
          {Array.from({ length: end - start + 1 }, (_, index) => {
            const pageNumber = start + index;
            return (
              <button
                key={pageNumber}
                className={`join-item btn btn-md ${
                  currentPage === pageNumber
                    ? "btn-active bg-dark-blue hover:bg-[#4d0dfd] text-white"
                    : ""
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
          {currentPage + 2 < totalPages && (
            <button
              className="join-item btn btn-md"
              onClick={() => handlePageChange(currentPage + 5)}
            >
              ...
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default CourseTable;
