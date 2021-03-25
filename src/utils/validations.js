import * as Yup from "yup";

export const registrationSchema = Yup.object({
  name: Yup.string()
    .max(50, "Must be 50 characters or less")
    .min(5, "Must be greater than 5")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(8).max(20).required(),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(8).max(20).required(),
});
