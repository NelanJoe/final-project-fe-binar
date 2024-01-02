import LoadingBar from "@/components/ui/LoadingBar";
import {  useGetAllCourseQuery} from "@/stores";
import { showFormattedDate } from "@/utils/format-date";
import { PlusCircle } from "lucide-react";
// import { useState } from "react";
import FormAddCourse from "./form-add-course";
import DeleteCourse from "./delete-course";
import EditCourse from "./edit-course";

const CourseTable = () => {
  const titleTable = [
    "Id",
    "Title",
    "Author",
    "Telegram",
    "Image",
    "Description",
    "Price",
    "Level",
    "Prepare",
    "Aksi",
  ];
  // const itemsPerPage = 10;
  // const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAllCourseQuery();
  console.log(data);

  // // Hitung total halaman berdasarkan jumlah data
  // const totalPages = Math.ceil(data?.course.length / itemsPerPage);

  // // Mendapatkan data untuk halaman saat ini
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data?.course.slice(indexOfFirstItem, indexOfLastItem);

  // // Fungsi untuk mengubah halaman
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Course</h1>
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

      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left border rtl:text-right">
          <thead className="text-xs bg-light-blue-100">
            <tr className="text-center">
              {titleTable.map((title, index) => (
                <th
                  key={index}
                  scope="col"
                  className="py-5 pl-2 capitalize border-x md:text-sm"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.course?.map((course, index) => {
              return (
                <tr
                  key={index}
                  className="text-center bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="py-3 pl-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {course?.courseId}
                  </th>
                  <td className="py-3 pr-2 border-x">{course?.title}</td>
                  <td className="py-3 pr-2 border-x">{course?.author}</td>
                  <td className="py-3 pr-2 border-x">
                    {showFormattedDate(course?.createdAt)}
                  </td>
                  <td className="py-3 pr-2 border-x">
                    {showFormattedDate(course?.updatedAt)}
                  </td>

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
                        <EditCourse
                          // categoryId={category?.id}
                          // categoryName={category?.name}
                          // categoryImage={category?.image}
                        />
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
      {/* <div className="flex items-center justify-center mt-7">
        <div className="join">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`join-item btn btn-md ${
                currentPage === index + 1
                  ? "btn-active bg-dark-blue text-white"
                  : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div> */}
    </article>
  );
};

export default CourseTable;
