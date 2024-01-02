import LoadingBar from "@/components/ui/LoadingBar";

import { useGetAllCategorysQuery } from "@/stores";
import FormAddCategory from "./form-add-category";
import { PlusCircle } from "lucide-react";
import EditCategory from "./edit-category";
import DeleteCategory from "./delete-category";

const CategoryTable = () => {
  const titleTable = ["Id", "Nama", "Gambar", "Available", "Aksi"];

  const { data, isLoading } = useGetAllCategorysQuery();

  if (isLoading) {
    return <LoadingBar />;
  }

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
            {data?.category?.map((category, index) => {
              return (
                <tr
                  key={index}
                  className="text-center bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="py-3 pl-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {(index += 1)}
                  </th>
                  <td className="py-3 pr-2 border-x">{category?.name}</td>
                  <td className="px-2 py-3 font-semibold border-x">
                    <div className="flex items-center justify-center">
                      <img
                        src={category?.image}
                        alt={category?.name}
                        className="object-cover w-10 h-10 border-2 rounded-xl border-dark-blue"
                      />
                    </div>
                  </td>
                  <td
                    className={`px-2 py-3 border-x font-bold uppercase ${
                      category?.available ? "text-dark-blue" : "text-success"
                    }`}
                  >
                    {category.available ? "Tersedia" : "Tidak Tersedia"}
                  </td>

                  <td className="flex items-center justify-center gap-2 px-2 pt-5 lg:py-5">
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
                          categoryId={category?.id}
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
                          <DeleteCategory IdCategory={category?.id} />
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
    </article>
  );
};

export default CategoryTable;
