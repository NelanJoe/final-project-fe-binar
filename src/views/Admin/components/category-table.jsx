import LoadingBar from "@/components/ui/LoadingBar";

import { useGetAllCategorysQuery } from "@/stores";

const CategoryTable = () => {
  const titleTable = ["Id", "Name", "Image", "Available", "Action"];

  const { data, isLoading } = useGetAllCategorysQuery();

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Category</h1>
      </div>

      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs bg-light-blue-100">
            <tr>
              {titleTable.map((title, index) => (
                <th
                  key={index}
                  scope="col"
                  className="py-5 pl-2 capitalize md:text-sm"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.category?.map((category, index) => {
              return (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="py-3 pl-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {category?.id}
                  </th>

                  <td className="py-3 pr-2">{category?.name}</td>

                  <td className="px-2 py-3 font-semibold">
                    <img
                      src={category?.image}
                      alt={category?.name}
                      className="w-10 h-10 border-2 rounded-xl border-dark-blue"
                    />
                  </td>

                  <td
                    className={`px-2 py-3 font-bold uppercase ${
                      category?.available ? "text-dark-blue" : "text-success"
                    }`}
                  >
                    {category.available ? "Tersedia" : "Tidak Tersedia"}
                  </td>

                  <td className="flex items-center gap-2 px-2 pt-5 lg:py-3">
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

                        <h3 className="text-lg font-bold">Ubah</h3>

                        <p className="py-4">Ingin Mengubah kelas anda?</p>
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

        {/* <div className="flex items-center justify-center mt-7">

          <div className="join">

            {[1, 2, 3, 4].map((pageNumber) => (

              <button

                key={pageNumber}

                onClick={() => handleShowPage(pageNumber)}

                className={`join-item btn btn-md ${

                  pageNumber === +page

                    ? "btn-active bg-dark-blue text-white hover:bg-[#5d4bd3]"

                    : ""

                }`}

              >

                {pageNumber}

              </button>

            ))}

          </div>

        </div> */}
      </div>
    </article>
  );
};

export default CategoryTable;