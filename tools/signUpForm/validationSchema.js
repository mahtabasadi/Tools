const validationSchema = Yup.object({
  //
  name: Yup.string()
    .required("Name is Required")
    .min(6, "Name length is not valid"),
  email: Yup.string()
    .email("invalid Email format")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, //    The main part of our code is related to form validation
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  phoneNumber: Yup.string()
    .required("phone Number is required")
    .matches(/^[0-9]{11}$/, "Invalid phone Number")
    .nullable(),
  passwordConfirm: Yup.string()
    .required("Password confrimation is required")
    .oneOf([Yup.ref("password"), null], "Password must machd"),
  gender: Yup.string().required("Gender is requider"),
  nationality: Yup.string().required("select nationality!"),
  intrests: Yup.array().min(1).required("at least select one expertise"),
  terms: Yup.bool()
    .required("the terms and conditions must be accsepted")
    .oneOf([true], "You must accept the terms and conditions"),
});
