import { useState } from "react";
import { PlusCircle, X } from "lucide-react";

export default function TambahKelas() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="flex items-center gap-2 px-2 py-[2px] text-base text-white rounded-full hover:bg-[#4532bd] bg-dark-blue"
        onClick={() => setShowModal(true)}
        type="button"
      >
        <PlusCircle className="w-4 h-4 " /> Tambah
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none mb-9 focus:outline-none">
            <div className="relative w-[50%] mx-auto my-6 max-h-[80vh]">
              {/*content*/}
              <div className="relative flex flex-col w-full overflow-y-auto bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <button
                  className="float-right p-3 ml-auto "
                  onClick={() => setShowModal(false)}
                >
                  <X className="w-6 h-6 text-dark-blue " />
                </button>
                <div className="mb-3 text-center border-solid rounded-t">
                  <h3 className="text-2xl font-semibold text-dark-blue">
                    Tambah Kelas
                  </h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto px-10 overflow-y-auto">
                  <div className="mb-4">
                    <label
                      htmlFor="class"
                      className="block mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Nama Kelas
                    </label>
                    <input
                      id="class"
                      className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Text"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Kategori
                    </label>
                    <input
                      id="category"
                      className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Text"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="code class"
                      className="block mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Kode Kelas
                    </label>
                    <input
                      id="code class"
                      className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Text"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="type class"
                      className="block mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Tipe Kelas
                    </label>
                    <input
                      id="type class"
                      className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Text"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="level"
                      className="block mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Level
                    </label>
                    <input
                      id="level"
                      className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Text"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Harga
                    </label>
                    <input
                      id="price"
                      className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Text"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="Materi"
                      className="block mb-2 text-sm font-medium "
                    >
                      Materi
                    </label>
                    <textarea
                      id="Materi"
                      rows="4"
                      className="w-full p-2.5 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Paragraph"
                    ></textarea>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid rounded-b">
                  <button
                    className="px-10 py-2 mb-1 mr-1 text-sm hover:bg-[#b42121] font-bold text-white uppercase transition-all duration-150 ease-linear rounded-full outline-none bg-warning hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    Upload Video
                  </button>
                  <button
                    className="px-10 py-2 mb-1 mr-1 text-sm hover:bg-[#4532bd] font-bold text-white uppercase transition-all duration-150 ease-linear rounded-full outline-none bg-dark-blue hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
