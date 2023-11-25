import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GoogleLogin from "./google-login";

const loginSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 mb-4 bg-white w-[460px] xl"
        >
          <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 font-bold leading-9 text-[#6148FF]">
            Masuk
          </h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-Poppins text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Email/No Telepon
            </label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base font-Poppins focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              placeholder="Contoh: johndoe@gmail.com"
            />
            <span className="text-red-500">{errors.email?.message}</span>
          </div>
          <div className="mb-8">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block mb-2 font-Poppins text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm lg:text-base font-Poppins font-medium hover:underline text-[#6148FF]"
                >
                  Lupa Kata Sandi
                </a>
              </div>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="Masukan Password"
                className="w-full px-3 py-2 text-sm leading-tight border shadow appearance-none rounded-2xl lg:text-base font-Poppins focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
                required=""
              />
              <span className="text-red-500">{errors.password?.message}</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full font-Poppins bg-[#6148FF] text-white hover:bg-[#4532bd] focus:ring-4 focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2 flex items-center justify-center gap-1"
          >
            Masuk
          </button>
          <div className="text-center">
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 font-Poppins">
                or
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex justify-center">
              <GoogleLogin buttonText={"Sign in with Google"} />
            </div>
            <p className="text-sm font-normal text-center font-Poppins lg:text-base">
              Belum punya akun?
              <a href="/register" className="font-bold text-[#6148FF] hover:underline">
                Daftar di sini
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
