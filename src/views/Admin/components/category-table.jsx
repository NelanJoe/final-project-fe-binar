import LoadingBar from "@/components/ui/LoadingBar";
import { useGetAllCategorysQuery } from "@/stores";
import { PlusCircle } from "lucide-react";

import FormAddCategory from "./form-add-category";
import EditCategory from "./edit-category";
import { useState } from "react";

const CategoryTable = () => {
const titleTable = ["Id", "Name", "Image", "Available", "Action"];
const limitPerPage = 10; // Number of items per page
const { data, isLoading } = useGetAllCategorysQuery();
const [currentPage, setCurrentPage] = useState(1);

// Calculate pagination
const indexOfLastItem = currentPage * limitPerPage;
const indexOfFirstItem = indexOfLastItem - limitPerPage;
const currentItems = data?.category.slice(indexOfFirstItem, indexOfLastItem);

// Calculate total pages
const totalPages = Math.ceil(data?.category.length / limitPerPage);

const handlePageChange = (page) => {
  setCurrentPage(page);
};

if (isLoading) {
  return <LoadingBar />;
}

  // TODO: Jika create data tanpa harus reload

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Category</h1>
        <button
          onClick={() => document.getElementById("create").showModal()}
          className="flex items-center ml-2 gap-2 px-2 py-[2px] text-base text-white rounded-full hover:bg-[#4532bd] bg-dark-blue"
        >
          <PlusCircle className="w-4 h-4 " /> Tambah
        </button>
        <dialog id="create" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="my-3 text-lg font-bold">Tambah Kategori</h3>
            <FormAddCategory />
          </div>
        </dialog>
      </div>
      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left border-2 border-slate-300 rtl:text-right">
          <thead className="text-xs bg-light-blue-100">
            <tr>
              {titleTable.map((title, index) => (
                <th
                  key={index}
                  scope="col"
                  className="py-5 text-center capitalize md:text-sm"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((category, index) => {
              const itemIndex = indexOfFirstItem + index + 1;
              return (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="py-3 pl-2 font-medium text-center text-gray-900 whitespace-nowrap"
                  >
                    {itemIndex}
                  </th>
                  <td className="flex justify-center py-3 pr-2">
                    {category?.name}
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex justify-center">
                      <img
                        src={category?.image}
                        alt={category?.name}
                        className="w-10 h-10 border-2 rounded-xl border-dark-blue"
                      />
                    </div>
                  </td>
                  <td
                    className={`px-2 py-3 font-bold uppercase text-center ${
                      category?.available ? "text-dark-blue" : "text-success"
                    }`}
                  >
                    {category.available ? "Tersedia" : "Tidak Tersedia"}
                  </td>

                  <td className="flex items-center justify-center gap-2 px-2 pt-5 lg:pt-5">
                    <button
                      onClick={() =>
                        document.getElementById("edit").showModal()
                      }
                      className="px-2 text-white rounded-full bg-dark-blue"
                    >
                      Ubah
                    </button>
                    <dialog id="edit" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <EditCategory
                          categoryName={category?.name}
                          categoryImage={category?.image}
                        />
                      </div>
                    </dialog>

                    <button
                      onClick={() =>
                        document.getElementById("delete").showModal()
                      }
                      className="px-2 text-white rounded-full bg-warning"
                    >
                      Hapus
                    </button>
                    <dialog
                      id="delete"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Hapus!</h3>
                        <p className="py-4 text-base">
                          Apakah anda yakin ingin menghapus kelas ini?
                        </p>
                        <div className="flex justify-center modal-action">
                          <form method="dialog">
                            <button className="btn">Batal</button>
                            <button className="ml-5 text-white btn bg-dark-blue hover:bg-[#4532bd]">
                              Yakin
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex items-center justify-center mt-7">
          <div className="join">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`join-item btn btn-md ${
                  currentPage === index + 1 ? "btn-active btn-primary" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CategoryTable;
