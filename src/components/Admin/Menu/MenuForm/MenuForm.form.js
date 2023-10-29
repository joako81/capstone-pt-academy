import * as Yup from "yup";

export function initialValues(menu) {
  return {
    title: menu?.title || "",
    path: menu?.path || "",
    protocol: "/", //"https:// por /"
    active: menu?.active || true,
    order: menu?.order || undefined,
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    path: Yup.string().required("La ruta es obligatoria"),
    order: Yup.number().required("El orden es obligatorio"),
  });
}
