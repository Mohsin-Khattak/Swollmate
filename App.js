import React from 'react';
import {AppNavigation} from './src/navigation';
import {ScheduleClander} from './src/screens/appside';

const App = () => {
  return <AppNavigation />;
};
export default App;

// import React from 'react';
// import {View, Text, TextInput} from 'react-native';
// import * as yup from 'yup';
// import {Formik} from 'formik';
// import {SimpleTextinput} from './src/components/textInputs';
// import {SimpleButton} from './src/components/buttons';
// const loginValidation = yup.object().shape({
//   email: yup
//     .string()
//     .email('Please enter valid email')
//     .required('Email Address is required'),
//   password: yup
//     .string()
//     .min(8, ({min}) => `Password must be at least ${min} characters`)
//     .required('Password is required')
//     .matches(
//       '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
//     ),
// });
// const App = () => {
//   return (
//     <Formik
//       initialValues={{email: '', password: ''}}
//       validateOnMount={true}
//       validationSchema={loginValidation}
//       onSubmit={values => console.log(values)}>
//       {({
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         values,
//         touched,
//         errors,
//         isValid,
//         va,
//       }) => (
//         <View>
//           <TextInput
//             onChangeText={handleChange('email')}
//             onBlur={handleBlur('email')}
//             value={values.email}
//             style={{
//               width: 300,
//               height: 51,
//               backgroundColor: 'red',
//               alignSelf: 'center',
//               marginTop: 40,
//             }}
//           />
//           {errors.email && touched.email && (
//             <Text style={styles.errors}>{errors.email}</Text>
//           )}
//           <TextInput
//             onChangeText={handleChange('password')}
//             onBlur={handleBlur('password')}
//             value={values.password}
//             style={{
//               width: 300,
//               height: 51,
//               backgroundColor: 'red',
//               alignSelf: 'center',
//               marginTop: 40,
//             }}
//           />
//           {errors.password && touched.password && (
//             <Text style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>
//               {errors.password}
//             </Text>
//           )}
//           <SimpleButton title="Valid" style={{marginTop: 30}} />
//         </View>
//       )}
//     </Formik>
//   );
// };
// export default App;
