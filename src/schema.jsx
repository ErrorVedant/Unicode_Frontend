import * as Yup from "yup";
export const signupSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter name"),
    email: Yup.string().email().required("Please Enter email"),
    password: Yup.string().min(6).required("Please Enter password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });