import Logo from "@/assets/images/logo.png";
import AdminLoginForm from "../components/admin-login-form";

const AuthLayout = () => {
  return (
    <main className="lg:flex">
      <aside className="flex lg:w-[40%] items-center justify-center h-24 lg:min-h-screen bg-dark-blue lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="logo"
          src={Logo}
          className="object-cover w-[280px] me-4 lg:w-[380px]"
        />
      </aside>
      <AdminLoginForm />
    </main>
  );
};

export default AuthLayout;
