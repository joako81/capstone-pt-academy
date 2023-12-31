// Newsletter.js

import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Newsletter as NewsletterController } from "../../../../api";
import { validationSchema, initialValues } from "./Newsletter.form";
import axios from "axios";

import "./Newsletter.scss";

const newsletterController = new NewsletterController();

export function Newsletter() {
  const [success, setSuccess] = useState(false);

  const addEmailToMailerLite = async (email) => {
    try {
      const response = await axios.get(
        `/.netlify/functions/addEmailToMailerLite?email=${encodeURIComponent(
          email
        )}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
        };

        console.log(formattedFormValue);

        await newsletterController.registerEmail(formattedFormValue);
        console.log("Email registered");

        addEmailToMailerLite(formattedEmail);
        console.log("Email added to MailerLite");

        formik.resetForm();
        console.log("Form reset");

        setSuccess(true);
        console.log("Success set to true");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="footer-newsletter">
      <h4>Sign up and stay up to date with the latest news in the sector.</h4>

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

        <Form.Button name="submit" primary fluid loading={formik.isSubmitting}>
          I subscribe!
        </Form.Button>
        {success && (
          <p className="success">You have successfully registered Welcome!</p>
        )}
      </Form>
    </div>
  );
}

//probar en live porque me da error api
