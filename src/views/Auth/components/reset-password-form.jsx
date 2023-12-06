import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { resetPasswordSchema } from "../validation";
import { useResetPasswordMutation } from "@/stores";
// import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();

  const [resetPassword] = useResetPasswordMutation();

  const email = searchParams.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await resetPassword(email).unwrap();

      console.log(res.message);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 bg-white w-[380px] lg:w-[460px]"
        >
          <h1 className="mb-5 text-2xl font-bold leading-9 md:text-3xl xl:text-4xl text-dark-blue">
            Lupa Kata Sandi
          </h1>
          <div className="mb-8">
            <label
              htmlFor="email"
              className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 text-sm border shadow appearance-none rounded-2xl leading-tigh lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              placeholder="Masukan email anda"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.email?.message}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-dark-blue text-white hover:bg-[#4532bd] focus:ring-4 focus:ring- focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2"
          >
            Atur ulang sandi
          </button>
          <div className="mt-8 text-center">
            <span className="text-sm font-normal lg:text-base">
              atau&nbsp;
              <Link
                to="/login"
                className="font-bold duration-75 text-dark-blue hover:underline"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
