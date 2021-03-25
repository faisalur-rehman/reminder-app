import { Formik } from "formik";
import React from "react";

const AppForm = ({
  children,
  initialValues,
  validationSchema,
  handleSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit({ formValues: values });
      }}
    >
      {(props) => <form onSubmit={props.handleSubmit}>{children}</form>}
    </Formik>
  );
};

export default AppForm;
