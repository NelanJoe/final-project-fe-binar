import { useGetActiveClassQuery } from "@/stores";
import { BookText } from "lucide-react";

const ActiveClass = () => {
  const { data } = useGetActiveClassQuery();

  return (
    <div className="flex items-center w-[250px] px-6 py-3 text-white cursor-default rounded-xl bg-success">
      <div className="px-2 py-2 bg-white rounded-2xl z-100 ">
        <BookText className="text-black" />
      </div>
      <div className="flex flex-col ml-4">
        <span>{data?.activeClass}</span>
        <span>Active Class</span>
      </div>
    </div>
  );
};

export default ActiveClass;
