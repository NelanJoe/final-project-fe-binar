import CourseFilter from "@/components/common/course-filter";
import LoadingBar from "@/components/ui/LoadingBar";
import { useGetAdminDashboardQuery } from "@/stores";
import { showFormattedDate } from "@/utils/format-date";
import { Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentStatusTable = () => {
  const [showPage, setShowPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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

  const openModal = () => {
    document.querySelector("#dashboard-filter")?.showModal();
  };

    return (
      <article>
        <div className="flex items-center justify-between px-16">
          <h1 className="font-bold text-md lg:text-xl">Status Pembayaran</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={openModal}
              className="flex items-center gap-2 px-2 text-base border-2 rounded-full text-dark-blue hover:text-white hover:bg-dark-blue border-dark-blue"
            >
              <Filter className="w-4 h-4 " /> Filter
            </button>
            <dialog id="dashboard-filter" className="modal">
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
                <th scope="col" className="px-2 py-3">
                  ID
                </th>
                <th scope="col" className="px-2 py-3">
                  Kategori
                </th>
                <th scope="col" className="px-2 py-3">
                  Kelas Premium
                </th>
                <th scope="col" className="px-2 py-3">
                  Status
                </th>
                <th scope="col" className="px-2 py-3">
                  Metode Pembayaran
                </th>
                <th scope="col" className="px-2 py-3">
                  Tanggal Bayar
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((payment) => {
                return (
                  <tr
                    key={payment.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {payment?.myCourse?.users?.profiles?.name}
                    </th>
                    <td className="px-2 py-3">
                      {payment?.myCourse?.courses?.categories?.name}
                    </td>
                    <td className="px-2 py-3 font-semibold">
                      {payment?.myCourse?.courses?.title}
                    </td>
                    <td
                      className={`px-2 py-3 font-bold uppercase ${
                        payment.status === "paid"
                          ? "text-success"
                          : "text-warning"
                      }`}
                    >
                      {payment.status}
                    </td>
                    <td className="px-2 py-3 font-semibold">
                      {payment.status === "paid" ? "Credit Card" : "-"}
                    </td>
                    <td className="px-2 py-3">
                      {payment.status === "paid"
                        ? showFormattedDate(payment.createdAt)
                        : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
        </div>
      </article>
    );
};

export default PaymentStatusTable;
