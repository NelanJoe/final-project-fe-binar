import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { useLoginMutation } from "@/stores";
import { setToken } from "@/stores/auth/auth.slice";

import { loginSchema } from "../validation";

import GoogleLogin from "./google-login";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values, event) => {
    event.preventDefault();

    try {
      const res = await login(values).unwrap();

      const token = res.data.token;
      dispatch(setToken(token));
      
      toast.success("Login Berhasil");
      navigate("/");
    } catch (error) {
      toast.error(`Error: ${error?.message}`);
    }
  };

  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 bg-white w-[380px] lg:w-[460px]"
        >
          <h1 className="mb-5 text-2xl font-bold leading-9 md:text-3xl xl:text-4xl text-dark-blue">
            Masuk
          </h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              placeholder="Contoh: johndoe@gmail.com"
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
            className="w-full transition-all duration-150 ease-linear bg-dark-blue text-white hover:bg-[#4532bd] focus:ring-4 focus:ring- focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2"
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
          <span className="text-sm font-normal text-center lg:text-base">
            Belum punya akun?&nbsp;
            <Link
              to="/register"
              className="font-bold duration-75 text-dark-blue hover:underline"
            >
              Daftar di sini
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
