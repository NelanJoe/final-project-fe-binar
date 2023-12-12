import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Harap masukkan email yang valid")
    .required("Email harus di isi"),
  password: yup
    .string()
    .required("Kata sandi harus di isi")
    .min(6, "Panjang kata sandi minimal 6 karakter")
    .matches(/[a-z]+/, "Password harus mengandung setidaknya satu huruf kecil")
    .matches(/[A-Z]+/, "Password harus mengandung setidaknya satu huruf besar")
    .matches(
      /[\d]+/,

      "Password harus mengandung setidaknya satu angka"
    )
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      "Password harus mengandung setidaknya satu karakter khusus"
    ),
});

const registerSchema = yup.object().shape({
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
    .required("Password harus di isi")
    .min(6, "Panjang kata sandi minimal 6 karakter")
    .matches(/[a-z]+/, "Password harus mengandung setidaknya satu huruf kecil")
    .matches(/[A-Z]+/, "Password harus mengandung setidaknya satu huruf besar")
    .matches(
      /[\d]+/,

      "Password harus mengandung setidaknya satu angka"
    )
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      "Password harus mengandung setidaknya satu karakter khusus"
    ),
});

const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Harap masukkan email yang valid")
    .required("Email harus di isi"),
});

export { loginSchema, registerSchema, resetPasswordSchema };
