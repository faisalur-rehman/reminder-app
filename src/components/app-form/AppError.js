import { useFormikContext } from "formik";
import React from "react";

const AppError = ({ field }) => {
  const { errors, touched } = useFormikContext();

  return touched[field] && errors[field] ? (
    <div style={{ color: "red" }} className="ml-3 mt-1">
      {errors[field]}
    </div>
  ) : null;
};

export default AppError;
