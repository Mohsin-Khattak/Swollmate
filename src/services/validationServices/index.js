import * as yup from 'yup';
// export const personalDetailFormValidation = values => {
//   const errorList = {};
//   if (!values.email) {
//     errorList.email = 'Email is required';
//   } else if (values.email.length < 5) {
//     errorList.email = 'Email is not valid';
//   }
//   if (!values.password) {
//     errorList.password = 'Password is required';
//   } else if (values.password.length < 8) {
//     errorList.password = 'Password should have atleast two alphabets';
//   }

//   return errorList;
// };

const personalDetailFormValidation = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});
