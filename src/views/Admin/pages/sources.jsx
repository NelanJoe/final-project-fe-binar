import { useMemo } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { useGetAllSourcesQuery, useGetAllChapterQuery } from "@/stores";

import AdminLayout from "@/layouts/admin.layout";
import LoadingBar from "@/components/ui/LoadingBar";

import { showFormattedDate } from "@/utils/format-date";

import EditSourceModal from "../components/edit-source-modal";

const Sources = () => {
  const customHelper = createColumnHelper();

  const {
    data: dataAllSource,
    isSuccess: isSuccessSource,
    isLoading: isLoadingSource,
    isError: isErrorSource,
    error: errorSource,
  } = useGetAllSourcesQuery();
  const {
    data: dataAllChapter,
    isLoading: isLoadingChapter,
    isSuccess: isSuccessChapter,
    isError: isErrorChapter,
    error: errorChapter,
  } = useGetAllChapterQuery();

  const columns = [
    customHelper.accessor("No", {
      id: "No",
      header: "No",
      cell: (info) => <span>{info?.row?.index + 1}</span>,
    }),
    customHelper.accessor("chapter", {
      header: "Chapter",
      cell: (info) => <span>{info?.getValue()?.title}</span>,
    }),
    customHelper.accessor("name", {
      header: "Nama Source",
      cell: (info) => <span className="capitalize">{info?.getValue()}</span>,
    }),
    customHelper.accessor("link", {
      header: "Link Video",
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
      cell: () => (
        <div className="flex flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              document.querySelector("#edit-source")?.showModal();
            }}
            className="btn btn-sm btn-primary"
          >
            Ubah
          </button>
          <button className="btn btn-sm btn-secondary ">Hapus</button>
        </div>
      ),
    }),
  ];

  let content;

  if (isLoadingChapter && isLoadingSource) {
    content = <LoadingBar />;
  }

  if (isErrorChapter && isErrorSource) {
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
            <p>{errorChapter?.data?.message && errorSource?.data?.message}</p>
          </div>
        </section>
      </div>
    );
  }

  const sourceList = useMemo(() => {
    return dataAllSource?.source?.map((source) => ({
      ...source,
      chapter: dataAllChapter?.chapter.find(
        (chapter) => chapter.id === source?.chapterId
      ),
    }));
  }, [dataAllSource?.source, dataAllChapter?.chapter]);

  const table = useReactTable({
    data: sourceList,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isSuccessChapter && isSuccessSource) {
    content = (
      <AdminLayout>
        <div className=" sm:ml-64">
          <div className="py-5 px-14 bg-light-blue-100 lg:flex-row">
            <h2 className="text-xl font-semibold lg:text-2xl text-dark-blue">
              Hi, Admin!
            </h2>
          </div>
          <section className="py-4 lg:py-5 lg:px-5">
            <div className="py-4">
              <h1 className="font-bold text-md lg:text-xl">Sources</h1>
            </div>

            <div className="overflow-x-auto">
              <table className="table border">
                <thead>
                  {table?.getHeaderGroups()?.map((headerGroup) => (
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
                  {table?.getRowModel()?.rows?.map((row) => (
                    <tr key={row.id}>
                      {row?.getVisibleCells()?.map((cell) => (
                        <td key={row?.id} className="text-center">
                          {flexRender(
                            cell?.column.columnDef.cell,
                            cell?.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <EditSourceModal />
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center my-3">
              <div className="join">
                <button
                  onClick={() => {
                    table?.setPageIndex(0);
                  }}
                  disabled={!table?.getCanPreviousPage()}
                  className="join-item btn btn-primary"
                >
                  <ChevronFirstIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    table?.previousPage();
                  }}
                  disabled={!table?.getCanPreviousPage()}
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
                    {table?.getPageCount()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    table?.nextPage();
                  }}
                  disabled={!table?.getCanNextPage()}
                  className="join-item btn btn-primary"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    table?.setPageIndex(table?.getPageCount() - 1);
                  }}
                  disabled={!table?.getCanNextPage()}
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

export default Sources;
