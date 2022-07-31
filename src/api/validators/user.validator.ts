import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  nickName: yup.string().required("Nick name is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
