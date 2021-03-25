import { useFormikContext } from "formik";
import React from "react";

const AppField = (props) => {
  const { field, ...other } = props;
  const { values, handleChange } = useFormikContext();

  return (
    <input
      className="form-control"
      id={field}
      name={field}
      onChange={handleChange}
      value={values[field]}
      {...other}
    />
  );
};

export default AppField;
