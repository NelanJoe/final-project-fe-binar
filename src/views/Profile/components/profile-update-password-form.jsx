import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useUpdateProfileMutation } from "@/stores";

import { updatePasswordSchema } from "../validation";

const ProfileUpdatePasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPasswordNotMatch, seterrorPasswordNotMatch] = useState("");

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onSubmit = async ({ password }, e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        seterrorPasswordNotMatch("Password tidak cocok");
        return;
      }

      const formData = new FormData();
      formData.append("password", password);

      const res = await updateProfile(formData).unwrap();

      if (res.success) {
        toast.success("Password berhasil diubah");
        navigate("/profile/change-password");
        window.location.reload();
      }

      setConfirmPassword("");
      seterrorPasswordNotMatch("");
    } catch (error) {
      toast.error(`Error: ${error?.data?.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Masukkan Password Baru</label>
          <input
            id="password"
            type="password"
            className="w-full rounded-xl"
            placeholder="*********"
            {...register("password")}
          />
          <span className="text-warning">{errors?.password?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm-password">Ulangi Password Baru</label>
          <input
            id="confirm-password"
            type="password"
            className="w-full rounded-xl"
            placeholder="*********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="text-warning">{errorPasswordNotMatch}</span>
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn btn-primary rounded-xl"
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Simpan Perubahan"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileUpdatePasswordForm;
