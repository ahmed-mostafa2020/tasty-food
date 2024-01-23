import { Formik } from "formik";
import * as Yup from "yup";
import { Alert } from "@mui/material";
import SubmitButton from "../atomicDesign/molecules/SubmitButton";
import TextareaGroup from "../atomicDesign/organisms/TextareaGroup";
import TextInputGroup from "../atomicDesign/organisms/TextInputGroup";
import { useState } from "react";
import { ChangeTheme } from "../context/ThemeContext";

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState([]);
  const [status, setStatus] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const { myPalette } = ChangeTheme();

  const requestSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name should more than 3 letters")
      .required("This field is required"),
    phone: Yup.string()
      .min(11, "Number should more than 11")
      .required("This field is required"),
    message: Yup.string()
      .required("Please enter a message")
      .min(5, "Message must be at least 5 characters long")
      .max(255, "Message cannot exceed 255 characters"),
  });

  const formErrorsList = formErrors.map((formError) => (
    <p key={formError}>{formError}</p>
  ));

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        message: "",
      }}
      validationSchema={requestSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setDisabledButton(true);
        const contactForm = new FormData();
        contactForm.append("name", values.name);
        contactForm.append("phone", values.phone);
        contactForm.append("message", values.message);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <TextInputGroup
            label={"Name"}
            type={"text"}
            name={"name"}
            value={values.name}
            errors={errors.name}
            touched={touched.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextInputGroup
            label={"Phone"}
            type={"number"}
            name={"phone"}
            value={values.phone}
            errors={errors.phone}
            touched={touched.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextareaGroup
            label={"Message"}
            name={"message"}
            value={values.message}
            errors={errors.message}
            touched={touched.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <SubmitButton
            content={"Send Message"}
            bgColor={myPalette.background.mainColor}
            textColor={myPalette.text.light}
            shadowColor={myPalette.shadowColor.red}
            isSubmitting={isSubmitting}
            disableState={disabledButton}
          />

          {status ? (
            <Alert severity="success">
              {"Message has been sent successfully, reviewing now."}
            </Alert>
          ) : null}

          {formErrors.length > 0 ? (
            <Alert severity="error">{formErrorsList}</Alert>
          ) : null}
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
