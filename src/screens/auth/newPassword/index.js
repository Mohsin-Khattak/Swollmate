import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import {hp, wp} from '../../../services/dimensions';
import {styles} from './style';
const NewPassword = ({navigation}) => {
  const [password, setPassword] = useState();
  const [conformPassword, setConformPassword] = useState();
  const onNewPassword = () => {
    if (!password?.trim()) alert('Please enter Password');
    else if (!conformPassword?.trim()) alert('Please enter Conform Password');
    else navigation.navigate('Location');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CodeVerification', {check: null})}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.signuptxt}>New Password</Text>
      <Text style={styles.logintxt}>Enter new password for tour account</Text>
      <SimpleTextinput
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        containerStyle={{marginTop: hp(38)}}
        placeholder="Password"
      />
      <SimpleTextinput
        onChangeText={setConformPassword}
        value={conformPassword}
        secureTextEntry
        // containerStyle={{marginBottom: wp(69)}}
        placeholder="Conform Password"
      />
      <SimpleButton
        onPress={() => onNewPassword()}
        title="Update"
        style={styles.updateBtn}
      />
    </View>
  );
};
export default NewPassword;
