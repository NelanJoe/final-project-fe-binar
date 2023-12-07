import { useSelector } from "react-redux";

import { selectedToken } from "@/stores/auth/auth.selector";

const CourseCTA = () => {
  const token = useSelector(selectedToken);

  return (
    <div className="hidden md:block">
      <div className="md:flex md:flex-row justify-between items-center gap-x-3">
        {token ? (
          <>
            <button className="w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70">
              All
            </button>
            <button className="w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-white bg-dark-blue">
              In Progress
            </button>
            <button className="w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70">
              Selesai
            </button>
          </>
        ) : (
          <>
            <button className="w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70">
              All
            </button>
            <button className="w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-white bg-dark-blue">
              Kelas Premium
            </button>
            <button className="w-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-2xl md:font-semibold text-gray-800/70">
              Kelas Gratis
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCTA;
