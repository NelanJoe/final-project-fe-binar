import { Filter } from "lucide-react";
import TambahKelas from "./tambah-kelas";
import { useGetAdminKelolaKelasQuery } from "@/stores";
import { useMemo } from "react";

const KelolaKelasTable = () => {
    const paramsAdminKelolaKelas = useMemo(() => {
      return {
        filter: "",
        page: 1,
        pageSize: 10,
      }
    }, []);
  
    const { data } = useGetAdminKelolaKelasQuery(paramsAdminKelolaKelas);

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Kelola Kelas</h1>
        <div className="flex items-center gap-3">
          <TambahKelas />
          <button className="flex items-center gap-2 px-2 text-base border-2 rounded-full text-dark-blue hover:text-white hover:bg-dark-blue border-dark-blue">
            <Filter className="w-4 h-4 " /> Filter
          </button>
        </div>
      </div>
      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs bg-light-blue-100">
            <tr>
              <th scope="col" className="px-2 py-3">
                Kode Kelas
              </th>
              <th scope="col" className="px-2 py-3">
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
            {data?.data?.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item?.kelolakelas?.id}
                  </th>
                  <td className="px-2 py-3">
                    {item?.kelolakelas?.categories?.name}
                  </td>
                  <td className="px-2 py-3 font-semibold">
                    {item?.kelolakelas?.title}
                  </td>
                  <td
                    className={`px-2 py-3 font-bold uppercase ${
                      item?.priceType === "paid"
                        ? "text-dark-blue"
                        : "text-success"
                    }`}
                  >
                    {item.priceType}
                  </td>
                  <td className="px-2 py-3 font-semibold capitalize">{item?.kelolakelas?.level}</td>
                  <td className="px-2 py-3 font-semibold">{item?.kelolakelas?.price}</td>
                  <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                    <button className="px-2 text-white rounded-full bg-dark-blue">
                      Ubah
                    </button>
                    <button className="px-2 text-white rounded-full bg-warning">
                      Hapus
                    </button>
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

export default KelolaKelasTable;
