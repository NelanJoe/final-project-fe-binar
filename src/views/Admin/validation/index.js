import * as yup from "yup";

const loginAdminSchema = yup.object().shape({
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

export { loginAdminSchema };