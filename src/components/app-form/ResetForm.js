import { useFormikContext } from "formik";
import React from "react";

const ResetForm = ({ message, ...props }) => {
  const { handleReset } = useFormikContext();

  return (
    <button
      {...props}
      className={`btn btn-danger ml-2 ${
        props.className ? props.className : ""
      }`}
      onClick={handleReset}
    >
      {message}
    </button>
  );
};

ResetForm.defaultProps = {
  message: "Reset",
};

export default ResetForm;
