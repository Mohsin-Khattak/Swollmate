import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/colors';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import * as yup from 'yup';
import {useFormik} from 'formik';

const loginValidation = yup.object().shape({
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

const LogIn = ({navigation}) => {
  const initialValues = {
    email: '',
    password: '',
  };
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: loginValidation,
      onSubmit: () => {},
    });
  const onSubmit = async () => {
    console.log(isValid, Object.keys(touched).length);
    if (isValid && Object.keys(touched).length > 0) {
      try {
        navigation.navigate('Location');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('NumberVerification')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <Text style={styles.signuptxt}>Log In</Text>
        <Text style={styles.logintxt}>
          Fill these details to log in or
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{color: colors.colorButton}}>
            {' '}
            Sign up here
          </Text>
        </Text>
        <SimpleTextinput
          value={values.email}
          onChangeText={e => setFieldValue('email', e)}
          onBlur={() => setFieldTouched('email', true)}
          containerStyle={styles.txtinput}
          placeholder="Email"
        />
        {errors.email && touched.email && (
          <Text style={styles.errors}>{errors?.email}</Text>
        )}
        <SimpleTextinput
          onChangeText={val => setFieldValue('password', val)}
          onBlur={() => setFieldTouched('password', true)}
          value={values.password}
          secureTextEntry
          placeholder="Password"
        />
        {errors.password && touched.password && (
          <Text style={styles.errors}>{errors?.password}</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgottxt}>Forgot Password?</Text>
        </TouchableOpacity>
        <SimpleButton
          onPress={() => onSubmit()}
          title="Log In"
          style={styles.loginbtn}
        />
        <View style={styles.OrmainView}>
          <LinearGradient
            colors={['#F1F1F1', '#D9D9D9']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
          />
          <Text style={styles.orText}>OR</Text>
          <LinearGradient
            colors={['#D9D9D9', '#F1F1F1']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
          />
        </View>
        <SimpleButton icon="Google" title="Google" style={styles.googlebtn} />
        <SimpleButton
          icon="Facebook"
          title="Facebook"
          style={styles.facebookbtn}
        />
      </ScrollView>
    </View>
  );
};
export default LogIn;
