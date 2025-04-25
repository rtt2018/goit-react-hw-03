import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';


export default function ContactForm({ onSubmit, initValues }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    contactPhone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });
  return (
    <div className={css.container}>
      <Formik initialValues={initValues} onSubmit={onSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.formContainer} >
          <label className={css.labelContact} htmlFor="nameFieldId">Name</label>
          <Field className={css.contactInput} type="text" name="contactName" id={nameFieldId} />
          <ErrorMessage name="contactName" component="span" />
          <label className={css.labelContact} htmlFor="phoneFieldId">Number</label>
          <Field className={css.contactInput} type="tel" name="contactPhone" id={phoneFieldId} />
          <ErrorMessage name="contactPhone" component="span" />
          <button className={css.buttonAddContact} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
