import AdminLayout from "@/layouts/admin.layout"

import AdminSearchForm from "../components/admin-search-form";
import CardUser from "../components/card-user";
import PaymentStatusTable from "../components/payment-status-table";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className=" sm:ml-64">
          <div className="flex flex-col items-center justify-between py-5 px-14 bg-light-blue-100 lg:flex-row">
            <h2 className="text-xl font-semibold lg:text-2xl text-dark-blue">
              Hi, Admin!
            </h2>
            <div className="w-[280px] mt-2 lg:mt-0">
              <AdminSearchForm />
            </div>
          </div>
          <div className="flex justify-center py-14 px-14">
            <CardUser />
          </div>
          <div>
            <PaymentStatusTable />
          </div>
        </div>
    </AdminLayout>
  );
};

export default Dashboard;
