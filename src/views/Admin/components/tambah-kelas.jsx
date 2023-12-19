import { useState } from "react";
import { PlusCircle, X } from "lucide-react";

export default function TambahKelas() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="flex items-center ml-2 gap-2 px-2 py-[2px] text-base text-white rounded-full hover:bg-[#4532bd] bg-dark-blue"
        onClick={() => setShowModal(true)}
        type="button"
      >
        <PlusCircle className="w-4 h-4 " /> Tambah
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-[80%] md:w-[50%] mx-auto my-6 max-h-[50vh] md:max-h-[80vh]">
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
                <form className="flex-auto px-10 overflow-y-auto">
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
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="category"
                      className="mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Kategori
                    </label>
                    <select
                      className="text-sm font-normal leading-4 rounded-md lg:text-base"
                      id="category"
                    >
                      <option
                        value="UI/UX Design"
                        className="text-[10px] font-normal leading-4 lg:text-base"
                      >
                        UI/UX Design
                      </option>
                      <option
                        value="Web Development"
                        className="text-[10px] font-normal leading-4 lg:text-base"
                      >
                        Web Development
                      </option>
                      <option
                        value="Android Development"
                        className="text-[10px] font-normal leading-4 lg:text-base"
                      >
                        Android Development
                      </option>
                      <option
                        value="Data Science"
                        className="text-[10px] font-normal leading-4 lg:text-base"
                      >
                        Data Science
                      </option>
                      <option
                        value="Bussiness Intelligence"
                        className="text-[10px] font-normal leading-4 lg:text-base"
                      >
                        Bussiness Intelligence
                      </option>
                    </select>
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
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="type class"
                      className="mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Tipe Kelas
                    </label>
                    <select
                      className="text-sm font-normal leading-4 rounded-md lg:text-base"
                      id="type class"
                    >
                      <option
                        value="GRATIS"
                        className="text-[10px]  font-normal leading-4 lg:text-base"
                      >
                        GRATIS
                      </option>
                      <option
                        value="PREMIUM"
                        className="text-[10px]  font-normal leading-4 lg:text-base"
                      >
                        PREMIUM
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="level"
                      className="mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Level Kesulitan
                    </label>
                    <select
                      className="text-sm font-normal leading-4 rounded-md lg:text-base"
                      id="level"
                    >
                      <option
                        value="Beginner Level"
                        className="text-[10px]  font-normal leading-4 lg:text-base"
                      >
                        Beginner Level
                      </option>
                      <option
                        value="Intermediate Level"
                        className="text-[10px]  font-normal leading-4 lg:text-base"
                      >
                        Intermediate Level
                      </option>
                      <option
                        value="Advanced Level"
                        className="text-[10px]  font-normal leading-4 lg:text-base"
                      >
                        Advanced Level
                      </option>
                    </select>
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
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="myfile"
                      className="mb-2 text-sm font-normal leading-4 lg:text-base"
                    >
                      Upload Video :
                    </label>
                    <input type="file" id="myFile" name="filename" />
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
                      className="w-full p-2.5 text-sm border shadow appearance-none rounded-md leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                      placeholder="Paragraph"
                    ></textarea>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center pt-3 pb-6 border-t border-solid rounded-b">
                    <button
                      className="px-10 py-2 mb-1 mr-1 text-sm hover:bg-[#4532bd] font-bold text-white uppercase transition-all duration-150 ease-linear rounded-full outline-none bg-dark-blue hover:shadow-lg focus:outline-none"
                      type="button"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
