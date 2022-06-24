import * as yup from 'yup';

const schema = yup.object().shape({
    first_name: yup
      .string()
      .trim()
      .required("Please enter your first name"),
    last_name: yup
    .string()
    .trim()
    .required("Please enter your last name"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(6, "Password must be at least six characters"),
    tos: yup.boolean().oneOf([true], 'You must accept the Terms of Service')
  })
  
  export default schema;