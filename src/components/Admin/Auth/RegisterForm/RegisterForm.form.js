import * as Yup from "yup";

export function initialValues() {
  return {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    conditionsAccepted: false,
  };
}

export function validationSchema() {
  return Yup.object({
    firstname: Yup.string().required("El nombre es obligatorio"),
    lastname: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .email("Correo electronico invalido")
      .required("El correo electrónico es requerido."),
    password: Yup.string().required("Campo obligatorio"),
    repeatPassword: Yup.string()
      .required("Campo obligatorio")
      .oneOf([Yup.ref("password")], "Las contraseñas tienes que ser iguales"),
    conditionsAccepted: Yup.boolean().isTrue(true), //con esto ponemos en rojo el campo sin texto
  });
}
