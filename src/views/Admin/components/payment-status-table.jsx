import { Filter, Search } from "lucide-react";

const PaymentStatusTable = () => {
  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Status Pembayaran</h1>
        <div className="flex items-center gap-3">
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
              <th scope="col" className="px-3 py-3">
                ID
              </th>
              <th scope="col" className="px-3 py-3">
                Kategori
              </th>
              <th scope="col" className="px-3 py-3">
                Kelas Premium
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
              <th scope="col" className="px-3 py-3">
                Metode Pembayaran
              </th>
              <th scope="col" className="px-3 py-3">
                Tanggal Bayar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                johndoe123
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                Sudah Bayar
              </td>
              <td className="px-2 py-3 font-semibold">Credit Card</td>
              <td className="px-2 py-3">21 Sep, 2023 at 2:00 AM</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap "
              >
                supermanxx
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-warning">
                BELUM BAYAR
              </td>
              <td className="px-2 py-3 font-semibold">-</td>
              <td className="px-2 py-3">-</td>
            </tr>
            <tr className="bg-white hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap "
              >
                ironman99
              </th>
              <td className="px-2 py-3">Web Development</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                SUDAH BAYAR
              </td>
              <td className="px-2 py-3 font-semibold">Credit Card</td>
              <td className="px-2 py-3">20 Sep, 2023 at 2:00 AM</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap "
              >
                supermanxx
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-warning">
                BELUM BAYAR
              </td>
              <td className="px-2 py-3 font-semibold">-</td>
              <td className="px-2 py-3">-</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                johndoe123
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                Sudah Bayar
              </td>
              <td className="px-2 py-3 font-semibold">Credit Card</td>
              <td className="px-2 py-3">21 Sep, 2023 at 2:00 AM</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap "
              >
                supermanxx
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-warning">
                BELUM BAYAR
              </td>
              <td className="px-2 py-3 font-semibold">-</td>
              <td className="px-2 py-3">-</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                johndoe123
              </th>
              <td className="px-2 py-3">UI/UX Design</td>
              <td className="px-2 py-3 font-semibold">Belajar Web Designer dengan Figma</td>
              <td className="px-2 py-3 font-bold uppercase text-success">
                Sudah Bayar
              </td>
              <td className="px-2 py-3 font-semibold">Credit Card</td>
              <td className="px-2 py-3">21 Sep, 2023 at 2:00 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default PaymentStatusTable;
