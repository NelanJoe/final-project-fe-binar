import { useGetActiveUserQuery } from "@/stores";
import { UsersIcon } from "lucide-react";
import ActiveClass from "./active-class";
import ActivePremium from "./active-premium";

const CardUser = () => {
  const { data } = useGetActiveUserQuery();

  return (
    <article className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="flex items-center w-[250px] px-6 py-3 text-white rounded-xl cursor-default bg-soft-blue">
        <div className="px-2 py-2 bg-white rounded-2xl z-100">
          <UsersIcon className="text-black" />
        </div>
        <div className="flex flex-col ml-4">
          <span>{data?.activeUser}</span>
          <span>Active Users</span>
        </div>
      </div>
      <ActiveClass />
      <ActivePremium />
    </article>
  );
};

export default CardUser;
