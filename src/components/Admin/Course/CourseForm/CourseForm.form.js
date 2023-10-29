import * as Yup from "yup";

export function initialValues(course) {
  return {
    title: course?.title || "",
    miniature: course?.miniature || "",
    file: null,
    description: course?.description || "",
    url: course?.url || "",
    price: course?.price || "undefined",
    score: course?.score || "undefined",
    status: course?.status || "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required("Campo obligatorio"),
    miniature: Yup.string().required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    url: Yup.string().required("Campo obligatorio"),
    price: Yup.number().required("Campo obligatorio"),
    score: Yup.number().min(1, true).max(5, true).required("Campo obligatorio"),
  });
}
