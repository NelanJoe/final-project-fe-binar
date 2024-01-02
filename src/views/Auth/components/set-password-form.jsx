import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import toast from "react-hot-toast";

import { setPasswordSchema } from "../validation";
import { useSetPasswordMutation } from "@/stores";

const SetPasswordForm = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const navigate = useNavigate();

  const [setPassword] = useSetPasswordMutation();

  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(setPasswordSchema),
  });

  const onSubmit = async ({ password }, event) => {
    event.preventDefault();
    

    try {
      if (password !== confirmPassword) {
        setConfirmError("Password tidak cocok");
        return
      } else {
        setConfirmError("");
      }

      const res = await setPassword({
        token,
        password: password,
      }).unwrap();

      toast.success(res?.success);
      navigate("/login");
    } catch (error) {
      toast.error(`Error: ${error?.data?.error}`);
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
              className="w-full px-3 py-2 text-sm leading-tight border shadow appearance-none rounded-2xl lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {errors.password?.message}
            </span>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
              >
                Ulangi Password Baru
              </label>
            </div>
            <input
              type="password"
              placeholder="*****"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmError("");
              }}
              className="w-full px-3 py-2 text-sm leading-tight border shadow appearance-none rounded-2xl lg:text-base focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
            />
            <span className="text-sm text-red-500 lg:text-base">
              {confirmError}
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
};

export default SetPasswordForm;
