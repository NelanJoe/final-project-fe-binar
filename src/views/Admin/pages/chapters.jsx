import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "lucide-react";

import { useGetAllChapterQuery } from "@/stores";

import { showFormattedDate } from "@/utils/format-date";

import AdminLayout from "@/layouts/admin.layout";

import LoadingBar from "@/components/ui/LoadingBar";

import EditChapterModal from "../components/edit-chapter-modal";
import DeleteChapterModal from "../components/delete-chapter-modal";

const Chapters = () => {
  const navigate = useNavigate();

  const {
    data: dataGetAllChapter,
    isLoading: isLoadingGetAllChapter,
    isSuccess: isSuccessGetAllChapter,
    isError: isErrorGetAllChapter,
    error: errorGetAllChapter,
  } = useGetAllChapterQuery();

  const customHelper = createColumnHelper();

  let content;

  if (isLoadingGetAllChapter) {
    content = <LoadingBar />;
  }

  if (isErrorGetAllChapter) {
    content = (
      <div className="sm:ml-64">
        <div className="py-5 px-14 bg-light-blue-100 lg:flex-row">
          <h2 className="text-xl font-semibold lg:text-2xl text-dark-blue">
            Hi, Admin!
          </h2>
        </div>
        <section className="py-4 lg:py-5 lg:px-5">
          <div className="flex items-center justify-between px-16 py-8">
            <h1 className="font-bold text-md lg:text-xl">Chapters</h1>
          </div>
          <div className="w-full text-center">
            <p>{errorGetAllChapter?.data?.message}</p>
          </div>
        </section>
      </div>
    );
  }

  const columns = [
    customHelper.accessor("No", {
      id: "No",
      header: "No",
      cell: (info) => <span>{info?.row?.index + 1}</span>,
    }),
    customHelper.accessor("courseId", {
      header: "Judul Course",
      cell: (info) => <span>{info?.getValue()}</span>,
    }),
    customHelper.accessor("title", {
      header: "Judul Chapter",
      cell: (info) => <span>{info?.getValue()}</span>,
    }),
    customHelper.accessor("duration", {
      header: "Durasi Belajar Chapter",
      cell: (info) => <span>{info?.getValue()}</span>,
    }),
    customHelper.accessor("createdAt", {
      header: "Tanggal Dibuat",
      cell: (info) => <span>{showFormattedDate(info?.getValue())}</span>,
    }),
    customHelper.accessor("updatedAt", {
      header: "Tanggal Diperbaharui",
      cell: (info) => <span>{showFormattedDate(info?.getValue())}</span>,
    }),
    customHelper.accessor("", {
      header: "Actions",
      cell: (info) => (
        <div className="flex flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              navigate(
                `/chapters?chapterId=${Number(info?.row?.original?.id)}`
              );
              document.querySelector("#edit-chapter")?.showModal();
            }}
            className="btn btn-sm btn-primary"
          >
            Ubah
          </button>
          <button
            onClick={() => {
              navigate(
                `/chapters?chapterId=${Number(info?.row?.original?.id)}`
              );
              document.querySelector("#delete-chapter")?.showModal();
            }}
            className="btn btn-sm btn-secondary "
          >
            Hapus
          </button>
        </div>
      ),
    }),
  ];

  const chapterList = useMemo(() => {
    return dataGetAllChapter?.chapter?.map((chapter) => ({
      ...chapter,
    }));
  }, [dataGetAllChapter]);

  const table = useReactTable({
    data: chapterList,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isSuccessGetAllChapter) {
    content = (
      <AdminLayout>
        <div className="sm:ml-64">
          <div className="py-5 px-14 bg-light-blue-100 lg:flex-row">
            <h2 className="text-xl font-semibold lg:text-2xl text-dark-blue">
              Hi, Admin!
            </h2>
          </div>
          <section className="py-4 lg:py-5 lg:px-5">
            <div className="py-4">
              <h1 className="font-bold text-md lg:text-xl">Chapters</h1>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="table border table-sm lg:table-md">
                <thead className="text-white bg-dark-blue">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="text-base text-center text-white bg-dark-blue"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table?.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row?.getVisibleCells()?.map((cell) => (
                        <td key={row.id} className="text-center">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <EditChapterModal />
                  <DeleteChapterModal />
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center my-3">
              <div className="join">
                <button
                  onClick={() => {
                    table.setPageIndex(0);
                  }}
                  disabled={!table.getCanPreviousPage()}
                  className="join-item btn btn-primary"
                >
                  <ChevronFirstIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    table.previousPage();
                  }}
                  disabled={!table.getCanPreviousPage()}
                  className="join-item btn btn-primary"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <div
                  disabled
                  className="flex items-center justify-center px-4 text-white bg-primary join-item"
                >
                  <p>
                    {table?.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    table.nextPage();
                  }}
                  disabled={!table.getCanNextPage()}
                  className="join-item btn btn-primary"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    table.setPageIndex(table.getPageCount() - 1);
                  }}
                  disabled={!table.getCanNextPage()}
                  className="join-item btn btn-primary"
                >
                  <ChevronLastIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </AdminLayout>
    );
  }

  return content;
};

export default Chapters;
