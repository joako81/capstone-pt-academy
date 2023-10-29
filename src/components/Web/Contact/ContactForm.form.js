import * as Yup from "yup";

// contactform.form.js

export function initialValues() {
  return {
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  };
}

export function validationSchema() {
  return Yup.object({
    lastname: Yup.string().required("El Apellido es obligatorio"),
    firstname: Yup.string().required("El Nombre es obligatorio"),
    email: Yup.string()
      .email(true)
      .required("El correo electrónico es obligatorio"),
    message: Yup.string().required("El mensaje es obligatorio"),
  });
}
