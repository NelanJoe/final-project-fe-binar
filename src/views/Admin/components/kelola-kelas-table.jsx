import { Filter } from "lucide-react";
import TambahKelas from "./tambah-kelas";
import { useGetAdminKelolaKelasQuery } from "@/stores";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CourseFilter from "@/components/common/course-filter";
import LoadingBar from "@/components/ui/LoadingBar";

const KelolaKelasTable = () => {
  const [showPage, setShowPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = searchParams.get("page") || showPage;

  const handleShowPage = (page) => {
    setShowPage(page);

    navigate({
      pathname: "/admin-kelola-kelas",
      search: `?page=${page}`
    })
  }

    const paramsAdminKelolaKelas = useMemo(() => {
      return {
        filter: "",
        page: showPage,
        pageSize: 10,
      }
    }, [showPage]);

    const { data, isLoading } = useGetAdminKelolaKelasQuery(paramsAdminKelolaKelas);

    if (isLoading) {
      return <LoadingBar/>
    }

  const openModal = () => {
    document.querySelector("#kelola-kelas-filter")?.showModal();
  };

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Kelola Kelas</h1>
        <div className="flex items-center gap-3">
          <TambahKelas />
          <button
            onClick={openModal}
            className="flex items-center gap-2 px-2 text-base border-2 rounded-full text-dark-blue hover:text-white hover:bg-dark-blue border-dark-blue"
          >
            <Filter className="w-4 h-4 " /> Filter
          </button>
          <dialog id="kelola-kelas-filter" className="modal">
            <div className="md:px-5 modal-box md:w-fit ">
              <form method="dialog">
                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="p-4">
                <CourseFilter />
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs bg-light-blue-100">
            <tr>
              <th scope="col" className="py-3 pl-2">
                Kode Kelas
              </th>
              <th scope="col" className="py-3 pr-2">
                Kategori
              </th>
              <th scope="col" className="px-2 py-3">
                Nama Kelas
              </th>
              <th scope="col" className="px-2 py-3">
                Tipe Kelas
              </th>
              <th scope="col" className="px-2 py-3">
                Level
              </th>
              <th scope="col" className="px-2 py-3">
                Harga Kelas
              </th>
              <th scope="col" className="px-2 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((myClass, index) => {
              return (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="py-3 pl-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {myClass?.kelolakelas?.id}
                  </th>
                  <td className="py-3 pr-2">
                    {myClass?.kelolakelas?.categories?.name}
                  </td>
                  <td className="px-2 py-3 font-semibold">
                    {myClass?.kelolakelas?.title}
                  </td>
                  <td
                    className={`px-2 py-3 font-bold uppercase ${
                      myClass?.priceType === "paid"
                        ? "text-dark-blue"
                        : "text-success"
                    }`}
                  >
                    {myClass.priceType}
                  </td>
                  <td className="px-2 py-3 font-semibold capitalize">
                    {myClass?.kelolakelas?.level}
                  </td>
                  <td className="px-2 py-3 font-semibold">
                    {myClass?.kelolakelas?.price}
                  </td>
                  <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
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
        <div className="flex items-center justify-center mt-7">
          <div className="join">
            {[1, 2, 3, 4].map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handleShowPage(pageNumber)}
                className={`join-item btn btn-md ${
                  pageNumber === +page ? "btn-active" : ""
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default KelolaKelasTable;
