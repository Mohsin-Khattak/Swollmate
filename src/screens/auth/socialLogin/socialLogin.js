import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './style';
import {SimpleButton} from '../../../components/buttons';
import {colors} from '../../../assets/colors';
import {Icons} from '../../../assets/images';

const SocialLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.icon} source={Icons} />
        <Text style={styles.titletxt}>
          Find your workout partner with{' '}
          <Text style={{color: colors.colorButton}}>Swollmate</Text>
        </Text>
        <Text style={styles.contentTxt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </Text>
        {/* <Google /> */}
        <SimpleButton
          onPress={() => navigation.navigate('SignUp')}
          title="Sign Up with Email"
          style={styles.SignUp}
        />
        <SimpleButton icon="Google" title="Google" style={styles.GoogleIn} />
        <SimpleButton
          icon="Facebook"
          title="Facebook"
          style={styles.FacebookIn}
        />
        <Text style={styles.footertxt}>
          By process you agree to the
          <Text style={{color: colors.colorButton}}> Privacy Policy </Text>and
          <Text style={{color: colors.colorButton}}> Terms & Conditions</Text>
        </Text>
      </ScrollView>
    </View>
  );
};
export default SocialLogin;
