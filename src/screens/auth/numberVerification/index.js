import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import CodeInput from 'react-native-confirmation-code-input';
import {styles} from './style';
import {hp, wp} from '../../../services/dimensions';
import {colors} from '../../../assets/colors';
import {SimpleButton} from '../../../components/buttons/index';

const NumberVerification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.verifyTxt}>Verify your mobile number</Text>
      <Text style={styles.enterTxt}>
        Enter the verification code that we just send to your email address
      </Text>
      <CodeInput
        className={'border-box'}
        space={10}
        size={50}
        codeLength={5}
        cellBorderWidth={wp(0)}
        activeColor={colors.colorblack}
        inactiveColor={colors.colorblack}
        keyboardType={'numeric'}
        onFulfill={code => console.log(code)}
        codeInputStyle={styles.codeverify}
      />
      <Text style={styles.resendTxt}>
        Didn’t get any code?
        <Text style={{color: colors.colorButton}}> Resend</Text>
      </Text>
      <SimpleButton
        onPress={() => navigation.navigate('LogIn')}
        title="Verify"
        style={styles.verifyBtn}
      />
    </View>
  );
};
export default NumberVerification;
