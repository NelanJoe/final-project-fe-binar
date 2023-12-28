import { useGetActivePremiumQuery } from "@/stores";
import { BookMarked } from "lucide-react";

const ActivePremium = () => {
  const { data } = useGetActivePremiumQuery();

  return (
    <div className="flex items-center w-[250px] px-6 py-3 text-white cursor-default rounded-xl bg-dark-blue">
      <div className="px-2 py-2 bg-white rounded-2xl z-100 ">
        <BookMarked className="text-black" />
      </div>
      <div className="flex flex-col ml-4">
        <span>{data?.activePremium}</span>
        <span>Premium Class</span>
      </div>
    </div>
  );
}

export default ActivePremium;
