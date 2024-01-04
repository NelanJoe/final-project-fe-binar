import LoadingBar from "@/components/ui/LoadingBar";
import { useGetAdminDashboardQuery } from "@/stores";
import { showFormattedDate } from "@/utils/format-date";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentStatusTable = () => {
  const [showPage, setShowPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const titleTable = [
    "ID",
    "Kategori",
    "Kelas Premium",
    "Status",
    "Metode Pembayaran",
    "Tanggal Bayar"
  ];

  const page = searchParams.get("page") || showPage;

  const handleShowPage = (page) => {
    setShowPage(page);

    navigate({
      pathname: "/admin-dashboard",
      search: `?page=${page}`,
    });
  };

  const paramsAdminDashboard = useMemo(() => {
    return {
      filter: "",
      page: page,
      pageSize: 10,
    };
  }, [page]);

  const { data, isLoading } = useGetAdminDashboardQuery(paramsAdminDashboard);

  if (isLoading) {
    return <LoadingBar/>
  }

    return (
      <article>
        <div className="flex items-center justify-between px-16">
          <h1 className="font-bold text-md lg:text-xl">Status Pembayaran</h1>
          
        </div>
        <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left border rtl:text-right">
            <thead className="text-sm bg-light-blue-100">
              <tr  className="text-center">
                {titleTable?.map((title, index) => (
                  <th key={index} scope="col" className="px-2 py-3 border-x">
                  {title}
                </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((payment) => {
                return (
                  <tr
                    key={payment.id}
                    className="text-center bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-2 py-3 font-medium text-gray-900 border-x whitespace-nowrap"
                    >
                      {payment?.myCourse?.users?.profiles?.name}
                    </th>
                    <td className="px-2 py-3 border-x">
                      {payment?.myCourse?.courses?.categories?.name}
                    </td>
                    <td className="px-2 py-3 font-semibold border-x">
                      {payment?.myCourse?.courses?.title}
                    </td>
                    <td
                      className={`px-2 border-x py-3 font-bold uppercase ${
                        payment.status === "paid"
                          ? "text-success"
                          : "text-warning"
                      }`}
                    >
                      {payment.status}
                    </td>
                    <td className="px-2 py-3 font-semibold border-x">
                      {payment.status === "paid" ? "Credit Card" : "-"}
                    </td>
                    <td className="px-2 py-3 border-x">
                      {payment.status === "paid"
                        ? showFormattedDate(payment.createdAt)
                        : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          <div className="flex items-center justify-center mt-7">
            <div className="join">
              {[1, 2, 3, 4, 5, 6, 7].map((pageNumber) => (
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

export default PaymentStatusTable;
