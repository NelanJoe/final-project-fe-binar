import GoogleLogin from "@/views/Auth/components/google-login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { loginAdminSchema } from "../validation";
import { Link } from "react-router-dom";

const AdminLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginAdminSchema),
  });

  const onSubmit = async (values, event) => {
    event.preventDefault();
  };

  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 bg-white w-[380px] lg:w-[460px]"
        >
          <h1 className="mb-5 text-2xl font-bold leading-9 text-center md:text-3xl xl:text-4xl text-dark-blue">
            Login
          </h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              ID Admin
            </label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              placeholder="ID Admin"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.email?.message}
            </span>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
              >
                Password
              </label>
              <Link
                to="/reset-password"
                className="text-sm font-medium lg:text-base hover:underline text-dark-blue"
              >
                Lupa Kata Sandi
              </Link>
            </div>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Masukan Password"
              className="w-full px-3 py-2 text-sm leading-tight border shadow appearance-none rounded-2xl lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.password?.message}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-dark-blue text-white hover:bg-[#4532bd] focus:ring-4 focus:ring- focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2"
          >
            Masuk
          </button>
        </form>
        <div className="text-center ms-7 w-[320px] lg:w-[400px]">
          <div className="flex items-center py-5 ">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <GoogleLogin buttonText={"Sign in with Google"} />
        </div>
      </div>
    </section>
  );
};

export default AdminLoginForm;
