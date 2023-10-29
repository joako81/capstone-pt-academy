import React, { useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import { Course } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { ENV } from "../../../../utils";
import { initialValues, validationSchema } from "./CourseForm.form";
import "./CourseForm.scss";

const courseController = new Course();

export function CourseForm(props) {
  const { onClose, onReload, course } = props;
  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(course),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (!course) {
          await courseController.createCourse(accessToken, formValue);
        } else {
          await courseController.updateCourse(
            accessToken,
            course._id,
            formValue
          );
        }
        onReload();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      formik.setFieldValue("miniature", URL.createObjectURL(file));
      formik.setFieldValue("file", file);
    },
    [formik]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    onDrop,
  });

  const getMiniature = () => {
    if (formik.values.file) {
      return formik.values.miniature;
    } else if (formik.values.miniature) {
      return `${ENV.BASE_PATH}/${formik.values.miniature}`;
    }

    return null;
  };

  return (
    <Form className="course-form" onSubmit={formik.handleSubmit}>
      <div className="course-form-miniature" {...getRootProps()}>
        <input {...getInputProps()} />
        {getMiniature() ? (
          <Image size="small" src={getMiniature()} />
        ) : (
          <div>
            <span> Click here or drag and drop the image of your course</span>
          </div>
        )}
      </div>

      <Form.Input
        name="title"
        placeholder="Course name"
        onChange={formik.handleChange}
        value={formik.values.title}
        error={formik.errors.title}
      />
      <Form.Input
        name="url"
        placeholder="Course link"
        onChange={formik.handleChange}
        value={formik.values.url}
        error={formik.errors.url}
      />
      <Editor
        scriptLoading={{ async: true }}
        apiKey="deklomkimbltpvm71pkw2lab98dlzvvubl3ono5iyxlmyoi3"
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
        initialValue={formik.values.description}
        onBlur={(e) =>
          formik.setFieldValue("description", e.target.getContent())
        }
      />

      <Form.Group widths="equal">
        <Form.Input
          type="number"
          name="price"
          placeholder="Course price"
          onChange={formik.handleChange}
          value={formik.values.price}
          error={formik.errors.price}
        />
        <Form.Input
          type="number"
          name="score"
          placeholder="Course score"
          onChange={formik.handleChange}
          value={formik.values.score}
          error={formik.errors.score}
        />
      </Form.Group>

      <Form.Input
        name="status"
        placeholder="Course status"
        onChange={formik.handleChange}
        value={formik.values.status}
        error={formik.errors.status}
      />

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        {!course ? "Create course" : "Update course"}
      </Form.Button>
    </Form>
  );
}
