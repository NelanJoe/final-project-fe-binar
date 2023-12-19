import { Filter, Search } from "lucide-react";
import TambahKelas from "./tambah-kelas";

const KelolaKelasTable = () => {
    const manageClass = [
      {
        id: "UIUX0123",
        category: "UI/UX Design",
        name: "Belajar Web Designer dengan Figma",
        type: "GRATIS",
        level: "Beginner",
        price: "Rp. 0",
      },
      {
        id: "DS0223",
        category: "Data Science",
        name: "Data Cleaning untuk pemula",
        type: "GRATIS",
        level: "Beginner",
        price: "Rp. 0",
      },
      {
        id: "DS0323",
        category: "Data Science",
        name: "Data Cleaning untuk Professional",
        type: "PREMIUM",
        level: "Advanced",
        price: "Rp 199,000",
      },
      {
        id: "PM0123",
        category: "Product Management",
        name: "Scrum dalam tim kompleks",
        type: "PREMIUM",
        level: "Intermediate",
        price: "Rp 299,000",
      },
      {
        id: "PM0223",
        category: "Product Management",
        name: "Penerapan manajemen Agile",
        type: "PREMIUM",
        level: "Advanced",
        price: "Rp 349,000",
      },
      {
        id: "AD1023",
        category: "Android Development",
        name: "Mengenal Android Studio",
        type: "GRATIS",
        level: "Beginner",
        price: "Rp 0",
      },
      {
        id: "WD1123",
        category: "Web Development",
        name: "CSS dan HTML dalam seminggu",
        type: "GRATIS",
        level: "Beginner",
        price: "Rp 0",
      },
    ];
  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Kelola Kelas</h1>
        <div className="flex items-center gap-3">
          <TambahKelas />
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
            {manageClass.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.id}
                  </th>
                  <td className="px-2 py-3">{item.category}</td>
                  <td className="px-2 py-3 font-semibold">{item.name}</td>
                  <td
                    className={`px-2 py-3 font-bold uppercase ${
                      item.type === "PREMIUM"
                        ? "text-dark-blue"
                        : "text-success"
                    }`}
                  >
                    {item.type}
                  </td>
                  <td className="px-2 py-3 font-semibold">{item.level}</td>
                  <td className="px-2 py-3 font-semibold">{item.price}</td>
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
