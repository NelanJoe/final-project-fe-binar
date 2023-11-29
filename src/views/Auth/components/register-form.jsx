import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GoogleLogin from "./google-login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "@/stores/auth/authActions";

const loginSchema = yup.object().shape({
  name: yup.string().required("Nama harus di isi"),
  email: yup
    .string()
    .email("Harap masukkan email yang valid")
    .required("Email harus di isi"),
  phone: yup
    .number()
    .typeError("Nomor telepon harus berupa angka")
    .max(9999999999999, "Nomor telepon terlalu panjang")
    .required("Nomor telepon harus di isi"),
  password: yup
    .string()
    .required("Kata sandi harus di isi")
    .min(6, "Panjang kata sandi minimal 6 karakter")
    .matches(
      /[a-z]+/,
      "Kata sandi harus mengandung setidaknya satu huruf kecil"
    )
    .matches(
      /[A-Z]+/,
      "Kata sandi harus mengandung setidaknya satu huruf besar"
    )
    .matches(
      /[\d]+/,

      "Kata sandi harus mengandung setidaknya satu angka"
    )
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      "Kata sandi harus mengandung setidaknya satu karakter khusus"
    ),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver:yupResolver(loginSchema),
  })

  const onSubmit = async (data, event) => {
    console.log(data);

    event.preventDefault();

    dispatch(registerAction(data, navigate));
  }

  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 bg-white w-[460px]"
        >
          <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 font-bold leading-9 text-[#6148FF]">
            Daftar
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Nama
            </label>
            <input
              {...register("name")}
              className="w-full px-3 py-2 text-sm lg:text-base leading-tight border shadow text-[#3C3C3C] appearance-none rounded-2xl focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Nama Lengkap"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.name?.message}
            </span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="w-full px-3 text-sm lg:text-base py-2 leading-tight text-[#3C3C3C] border rounded-2xl shadow appearance-none focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              placeholder="Contoh: johndoe@gmail.com"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.email?.message}
            </span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Nomor Telpon
            </label>
            <input
              {...register("phone")}
              className="w-full px-3 py-2 text-sm lg:text-base leading-tight text-[#3C3C3C] border rounded-2xl shadow appearance-none focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              name="phone"
              id="phone"
              placeholder="+62"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.phone?.message}
            </span>
          </div>
          <div className="mb-8">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
                >
                  Buat Password
                </label>
              </div>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="Buat Password"
                className="w-full px-3 py-2 text-sm lg:text-base leading-tight text-[#3C3C3C] border rounded-2xl shadow appearance-none focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              />
              <span className="text-sm text-red-500 lg:text-base">
                {errors.password?.message}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full duration-75 bg-[#6148FF] text-white hover:bg-[#4532bd] focus:ring-4 focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2 flex items-center justify-center gap-1"
          >
            Daftar
          </button>
        </form>
        <div className="text-center ms-7 w-[400px]">
          <div className="flex items-center py-5 ">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <GoogleLogin buttonText={"Sign in with Google"} />
          <span className="text-sm font-normal text-center lg:text-base">
            Sudah punya akun?
            <Link
              to="/login"
              className="font-bold duration-75 text-[#6148FF] hover:underline"
            >
              Masuk di sini
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm
