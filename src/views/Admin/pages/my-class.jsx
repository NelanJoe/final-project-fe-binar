import AdminLayout from '@/layouts/admin.layout'
import CategoryTable from '../components/category-table';

const MyClass = () => {
  return (
    <AdminLayout>
      <div className=" sm:ml-64">
        <div className="py-5 px-14 bg-light-blue-100 lg:flex-row">
          <h2 className="text-xl font-semibold lg:text-2xl text-dark-blue">
            Hi, Admin!
          </h2>
        </div>
        <div className='px-5 py-5'>
          <CategoryTable />
        </div>
      </div>
    </AdminLayout>
  );
}

export default MyClass
