import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { setPasswordSchema } from "../validation";
import { useSetPasswordMutation } from "@/stores";
import toast from "react-hot-toast";

import { setToken } from "@/stores/auth/auth.slice";
import { useState } from "react";

const SetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [setPassword] = useSetPasswordMutation();

  const verifyToken = searchParams.get("token");
  const [password, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPasswordValue] = useState("");
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(setPasswordSchema),
    });

    const onSubmit = async (values, event) => {
      event.preventDefault();

      try {
        if (password !== confirmPassword) {
          toast.error("Password tidak cocok");
          return;
        }

        const res = await setPassword({
          token: verifyToken,
          // password: password,
        }).unwrap();
        console.log("Values", values);

        const token = res.data.token;

        dispatch(setToken(token));
        navigate("/");
      } catch (error) {
        toast.error(error);
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
            Reset Password
          </h1>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
              >
                Masukan Password Baru
              </label>
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
              className="w-full px-3 py-2 text-sm leading-tight border shadow appearance-none rounded-2xl lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.password?.message}
            </span>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
              >
                Ulangi Password Baru
              </label>
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="*****"
              value={confirmPassword}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
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
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
}

export default SetPasswordForm
