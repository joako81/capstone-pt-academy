import * as Yup from "yup";

export function initialValues() {
  return {
    lastname: "",
    firstname: "",
    email: "",
  };
}

export function validationSchema() {
  return Yup.object({
    lastname: Yup.string().required("El Apellido es obligatorio"),
    firstname: Yup.string().required("El Nombre es obligatorio"),
    email: Yup.string()
      .email(true)
      .required("El correo electrónico es obligatorio"),
  });
}
