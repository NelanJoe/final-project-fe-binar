import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-2">
        <label>Email</label>
        <input
          {...register("email")}
          className="border w-full px-4 py-2 rounded-lg"
        />
        <span>{errors.email?.message}</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <label>Password</label>
        <input
          {...register("password")}
          className="border w-full px-4 py-2 rounded-lg"
        />
        <span>{errors.password?.message}</span>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
