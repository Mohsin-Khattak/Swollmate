import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import {styles} from './style';
const ForgotPasswordwithNumber = ({navigation}) => {
  const [number, setNumber] = useState();
  const onForgotMobNo = () => {
    if (!number?.trim()) alert('Please enter your Phone Number');
    else navigation.navigate('CodeVerification', {check: 'number'});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.signuptxt}>Forgot Password</Text>
      <Text style={styles.logintxt}>
        Enter the mobile number associated with your account
      </Text>
      <SimpleTextinput
        onChangeText={setNumber}
        value={number}
        containerStyle={styles.txtinput}
        placeholder="Number"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.wantTxt}>Want to get code on Email?</Text>
      </TouchableOpacity>
      <SimpleButton
        onPress={() => onForgotMobNo()}
        title="Send"
        style={styles.sendbtn}
      />
    </View>
  );
};
export default ForgotPasswordwithNumber;
