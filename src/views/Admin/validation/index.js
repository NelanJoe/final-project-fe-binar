import * as yup from "yup";

const loginAdminSchema = yup.object().shape({
  id: yup
    .number()
    .typeError("Id Admin harus berupa angka")
    .max(9999999999999, "Id Admin terlalu panjang")
    .required("Id Admin harus di isi"),
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