import { UsersIcon } from "lucide-react";

const CardUser = () => {
  return (
    <article className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="flex items-center w-[280px] px-6 py-3 text-white rounded-xl cursor-default bg-soft-blue">
        <div className="px-2 py-2 bg-white rounded-2xl z-100">
          <UsersIcon className="text-black" />
        </div>
        <div className="flex flex-col ml-4">
          <span>450</span>
          <span>Active Users</span>
        </div>
      </div>
      <div className="flex items-center w-[280px] px-6 py-3 text-white cursor-default rounded-xl bg-success">
        <div className="px-2 py-2 bg-white rounded-2xl z-100 ">
          <UsersIcon className="text-black" />
        </div>
        <div className="flex flex-col ml-4">
          <span>25</span>
          <span>Active Class</span>
        </div>
      </div>
      <div className="flex items-center w-[280px] px-6 py-3 text-white cursor-default rounded-xl bg-dark-blue">
        <div className="px-2 py-2 bg-white rounded-2xl z-100 ">
          <UsersIcon className="text-black" />
        </div>
        <div className="flex flex-col ml-4">
          <span>20</span>
          <span>Premium Class</span>
        </div>
      </div>
    </article>
  );
};

export default CardUser;
