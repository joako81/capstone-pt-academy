import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es válido")
      .required("Campo obliglatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });
}
