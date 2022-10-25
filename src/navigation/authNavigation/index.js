import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StatusBar} from 'react-native';
import {colors} from '../../assets/colors';
import {
  Signup,
  Splash,
  OnBoardingScreen,
  SocialLogin,
  NumberVerification,
  NewPassword,
  LogIn,
  ForgotPassword,
  ForgotPasswordwithNumber,
  CodeVerification,
} from '../../screens/auth';

import {
  Location,
  Gender,
  AddYourPhoto,
  Birthday,
  PartnerGender,
  AddHere,
  StartedWithSwollmate,
} from '../../screens/accountCompletion';

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={colors.colorwhite}
        barStyle={'dark-content'}
      />

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SocialLogin" component={SocialLogin} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="ForgotPasswordwithNumber"
          component={ForgotPasswordwithNumber}
        />

        <Stack.Screen
          name="NumberVerification"
          component={NumberVerification}
        />
        <Stack.Screen name="CodeVerification" component={CodeVerification} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="AddYourPhoto" component={AddYourPhoto} />
        <Stack.Screen name="Birthday" component={Birthday} />
        <Stack.Screen name="PartnerGender" component={PartnerGender} />
        <Stack.Screen name="AddHere" component={AddHere} />
        <Stack.Screen
          name="StartedWithSwollmate"
          component={StartedWithSwollmate}
        />
      </Stack.Navigator>
    </View>
  );
};
