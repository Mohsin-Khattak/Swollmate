import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/colors';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import {hp, wp} from '../../../services/dimensions';
import {styles} from './style';
import * as yup from 'yup';
// import {useFormik} from 'formik';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const [conformPassword, setConformPassword] = useState();

  const loginValidation = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is required'),
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is required')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('SocialLogin')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <Text style={styles.signuptxt}>Sign Up</Text>
        <Text style={styles.logintxt}>
          Fill these details to sign up or{' '}
          <Text
            onPress={() => navigation.navigate('LogIn')}
            style={styles.loginpress}>
            Log in here
          </Text>
        </Text>
        <SimpleTextinput
          onChangeText={setFirstName}
          value={firstName}
          containerStyle={{marginTop: hp(49)}}
          placeholder="First Name"
        />
        <SimpleTextinput
          onChangeText={setLastName}
          value={lastName}
          placeholder="Last Name"
        />
        <SimpleTextinput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <SimpleTextinput
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder="Mobile Number"
        />
        <SimpleTextinput
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
        <SimpleTextinput
          onChangeText={setConformPassword}
          value={conformPassword}
          secureTextEntry
          containerStyle={{marginBottom: wp(69)}}
          placeholder="Conform Password"
        />
        <SimpleButton
          onPress={() => navigation.navigate('NumberVerification')}
          title="Sign Up"
        />
      </ScrollView>
    </View>
  );
};
export default SignUp;
