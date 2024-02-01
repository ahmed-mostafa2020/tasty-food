import { Formik } from "formik";
import * as Yup from "yup";
import { Alert } from "@mui/material";
import SubmitButton from "../atomicDesign/molecules/SubmitButton";
import TextareaGroup from "../atomicDesign/organisms/TextareaGroup";
import TextInputGroup from "../atomicDesign/organisms/TextInputGroup";
import { useState } from "react";
import { ChangeTheme } from "../context/ThemeContext";
import { getApi } from "../util/getApi";
import { API_URLS } from "../util/API_URL";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ContactForm = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [formErrors, setFormErrors] = useState([]);
  const [status, setStatus] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const { myPalette } = ChangeTheme();

  const requestSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t("Forms.name.error"))
      .required(t("Forms.validation.require")),

    mobile: Yup.string()
      .min(10, t("Forms.phone.error.min"))
      .max(14, t("Forms.phone.error.max"))
      .required(t("Forms.validation.require")),

    email: Yup.string()
      .email(t("Forms.email.error"))
      .required(t("Forms.validation.require")),

    subject: Yup.string()
      .required(t("Forms.validation.require"))
      .min(5, t("Forms.subject.error.min"))
      .max(50, t("Forms.subject.error.max")),

    message: Yup.string()
      .required(t("Forms.validation.require"))
      .min(5, t("Forms.message.error.min"))
      .max(255, t("Forms.message.error.max")),
  });

  const formErrorsList = formErrors.map((formError) => (
    <p key={formError}>{formError}</p>
  ));

  return (
    <Formik
      initialValues={{
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={requestSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setDisabledButton(true);

        const contactForm = new FormData();
        contactForm.append("name", values.name);
        contactForm.append("mobile", values.mobile);
        contactForm.append("email", values.email);
        contactForm.append("subject", values.subject);
        contactForm.append("message", values.message);

        // post data
        // const sendData = async () => {
        //   API_URLS.HEADER_POST.body = JSON.stringify(contactForm);

        //   getApi(API_URLS.CONTACT_US, API_URLS.HEADER_POST)
        //     .then((res) => {
        //       if (res.status == 200) {
        //         setSubmitting(false);
        //         setStatus(true);
        //         setFormErrors([]);

        //         setTimeout(() => {
        //           setStatus(false);
        //           router.reload();
        //         }, 2000);
        //         resetForm();
        //       }
        //     })
        //     .catch((error) => {
        //       setDisabledButton(false);
        //       setSubmitting(false);
        //       setStatus(false);

        //       setFormErrors(
        //         error.response.data.errors.map(
        //           (error) => t("Forms.api_errors")[error]
        //         )
        //       );
        //     });
        // };

        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Bearer cc1a39ecdca4bcfcad8336eb5484e134"
        );

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: contactForm,
          redirect: "follow",
        };

        fetch(
          "https://market.amrbdr.com/public/api/contactus?lang=en",
          requestOptions
        )
          .then((res) => {
            if (res.status == 200) {
              setSubmitting(false);
              setStatus(true);
              setFormErrors([]);

              setTimeout(() => {
                setStatus(false);
                router.reload();
              }, 2000);
              resetForm();
            }
          })
          .catch((error) => {
            setDisabledButton(false);
            setSubmitting(false);
            setStatus(false);

            setFormErrors(
              error.response.data.errors.map(
                (error) => t("Forms.api_errors")[error]
              )
            );
          })
          .catch((error) => console.log("error", error));
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
      }) => (
        <form onSubmit={handleSubmit}>
          <TextInputGroup
            label={t("Forms.name.name")}
            type={"text"}
            name={"name"}
            value={values.name}
            errors={errors.name}
            touched={touched.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextInputGroup
            label={t("Forms.phone.name")}
            type={"number"}
            name={"mobile"}
            value={values.mobile}
            errors={errors.mobile}
            touched={touched.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextInputGroup
            label={t("Forms.email.name")}
            type={"email"}
            name={"email"}
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextInputGroup
            label={t("Forms.subject.name")}
            type={"text"}
            name={"subject"}
            value={values.subject}
            errors={errors.subject}
            touched={touched.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextareaGroup
            label={t("Forms.message.name")}
            name={"message"}
            value={values.message}
            errors={errors.message}
            touched={touched.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <SubmitButton
            content={t("Buttons.send_message")}
            bgColor={myPalette.background.mainColor}
            textColor={myPalette.text.light}
            shadowColor={myPalette.shadowColor.red}
            isSubmitting={isSubmitting}
            disableState={disabledButton}
          />

          {status ? (
            <Alert severity="success">{t("Forms.validation.success")}</Alert>
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
