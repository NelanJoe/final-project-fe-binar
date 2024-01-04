import { useGetAdminKelolaKelasQuery } from "@/stores";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingBar from "@/components/ui/LoadingBar";

const KelolaKelasTable = () => {
  const [showPage, setShowPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const titleTable = [
    "Kode Kelas",
    "Kategori",
    "Nama Kelas",
    "Tipe Kelas",
    "Level",
    "Harga Kelas",
    "Aksi",
  ];

  const page = searchParams.get("page") || showPage;

  const handleShowPage = (page) => {
    setShowPage(page);

    navigate({
      pathname: "/admin-kelas",
      search: `?page=${page}`,
    });
  };

  const paramsAdminKelolaKelas = useMemo(() => {
    return {
      filter: "",
      page: showPage,
      pageSize: 10,
    };
  }, [showPage]);

  const { data, isLoading } = useGetAdminKelolaKelasQuery(
    paramsAdminKelolaKelas
  );

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Kelola Kelas</h1>
      </div>
      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-white bg-dark-blue">
            <tr className="text-center">
              {titleTable?.map((title, index) => (
                <th key={index} scope="col" className="py-3 pl-2 text-sm border-x">
                {title}
              </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((myClass, index) => {
              return (
                <tr key={index} className="text-center bg-white border-b border-x hover:bg-gray-50">
                  <th
                    scope="row"
                    className="py-3 pl-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {myClass?.kelolakelas?.id}
                  </th>
                  <td className="py-3 pr-2 border-x">
                    {myClass?.kelolakelas?.categories?.name}
                  </td>
                  <td className="px-2 py-3 font-semibold border-x">
                    {myClass?.kelolakelas?.title}
                  </td>
                  <td
                    className={`px-2 py-3 border-x font-bold uppercase ${
                      myClass?.priceType === "paid"
                        ? "text-dark-blue"
                        : "text-success"
                    }`}
                  >
                    {myClass.priceType}
                  </td>
                  <td className="px-2 py-3 font-semibold capitalize border-x">
                    {myClass?.kelolakelas?.level}
                  </td>
                  <td className="px-2 py-3 font-semibold border-x">
                    {myClass?.kelolakelas?.price}
                  </td>
                  <td className="flex items-center justify-center gap-2 px-2 pt-10 lg:py-3">
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
      </div>
        <div className="flex items-center justify-center my-7">
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
        </div>
    </article>
  );
};

export default KelolaKelasTable;
