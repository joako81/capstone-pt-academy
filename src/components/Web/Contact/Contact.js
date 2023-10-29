import React, { useState } from "react";
import { Form, Container } from "semantic-ui-react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import { validationSchema, initialValues } from "./ContactForm.form";

import "./Contact.scss";

const SERVICE_ID = "service_idxwldc";
const TEMPLATE_ID = "template_testing";
const USER_ID = "KTCOYvK306QrZpm0V";

export function ContactForm() {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setSuccess(false);
      try {
        const formattedFirstName = formValue.firstname.toUpperCase();
        const formattedLastName = formValue.lastname.toUpperCase();
        const formattedEmail = formValue.email.toLowerCase();

        const formattedFormValue = {
          ...formValue,
          firstname: formattedFirstName,
          lastname: formattedLastName,
          email: formattedEmail,
          message: formValue.message,
        };

        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          formattedFormValue,
          USER_ID
        );
        formik.resetForm();
        setSuccess(true);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Container className="contact-container">
      <h4>Contact us and we will answer any questions you may have.</h4>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="firstname"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            error={formik.errors.firstname}
          />
          <Form.Input
            name="lastname"
            placeholder="Lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            error={formik.errors.lastname}
          />
        </Form.Group>

        <Form.Input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />

        <Form.TextArea
          name="message"
          placeholder="Write us your message here"
          onChange={formik.handleChange}
          value={formik.values.message}
          error={formik.errors.message}
        />

        <Form.Button name="submit" primary fluid loading={formik.isSubmitting}>
          Ask for information!
        </Form.Button>
        {success && (
          <p className="success">Your message was sent successfully!!</p>
        )}
      </Form>
    </Container>
  );
}
