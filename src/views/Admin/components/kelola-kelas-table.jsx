import { Filter, Search } from "lucide-react";
import TambahKelas from "./tambah-kelas";

const KelolaKelasTable = () => {
  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Kelola Kelas</h1>
        <div className="flex items-center gap-3">
          <TambahKelas/>
          <button className="flex items-center gap-2 px-2 text-base border-2 rounded-full text-dark-blue hover:text-white hover:bg-dark-blue border-dark-blue">
            <Filter className="w-4 h-4 " /> Filter
          </button>
          <Search className="cursor-pointer text-dark-blue" />
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
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                UIUX0123
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">
                Belajar Web Designer dengan Figma
              </td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                GRATIS
              </td>
              <td className="px-2 py-3 font-semibold">Beginner</td>
              <td className="px-2 py-3 font-semibold">Rp 0</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                DS0223
              </th>
              <td className="px-2 py-3">Data Science</td>
              <td className="px-2 py-3 font-semibold">
                Data Cleaning untuk pemula
              </td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                GRATIS
              </td>
              <td className="px-2 py-3 font-semibold">Beginner</td>
              <td className="px-2 py-3 font-semibold">Rp 0</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                DS0323
              </th>
              <td className="px-2 py-3">Data Science</td>
              <td className="px-2 py-3 font-semibold">
                Data Cleaning untuk Professional
              </td>
              <td className="px-2 py-3 font-bold uppercase text-dark-blue">
                PREMIUM
              </td>
              <td className="px-2 py-3 font-semibold">Advanced</td>
              <td className="px-2 py-3 font-semibold">Rp 199,000</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                PM0123
              </th>
              <td className="px-2 py-3">Product Management</td>
              <td className="px-2 py-3 font-semibold">
                Scrum dalam tim kompleks
              </td>
              <td className="px-2 py-3 font-bold uppercase text-dark-blue">
                PREMIUM
              </td>
              <td className="px-2 py-3 font-semibold">Intermediate</td>
              <td className="px-2 py-3 font-semibold">Rp 299,000</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                PM0223
              </th>
              <td className="px-2 py-3">Product Management</td>
              <td className="px-2 py-3 font-semibold">
                Penerapan manajemen Agile
              </td>
              <td className="px-2 py-3 font-bold uppercase text-dark-blue">
                PREMIUM
              </td>
              <td className="px-2 py-3 font-semibold">Advanced</td>
              <td className="px-2 py-3 font-semibold">Rp 349,000</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                AD1023
              </th>
              <td className="px-2 py-3">Android Development</td>
              <td className="px-2 py-3 font-semibold">
                Mengenal Android Studio
              </td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                GRATIS
              </td>
              <td className="px-2 py-3 font-semibold">Beginner</td>
              <td className="px-2 py-3 font-semibold">Rp 0</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                WD1123
              </th>
              <td className="px-2 py-3">Web Development</td>
              <td className="px-2 py-3 font-semibold">
                CSS dan HTML dalam seminggu
              </td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                GRATIS
              </td>
              <td className="px-2 py-3 font-semibold">Beginner</td>
              <td className="px-2 py-3 font-semibold">Rp 0</td>
              <td className="flex items-center gap-2 px-2 pt-10 lg:py-3">
                <button className="px-2 text-white rounded-full bg-dark-blue">
                  Ubah
                </button>
                <button className="px-2 text-white rounded-full bg-warning">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default KelolaKelasTable;
