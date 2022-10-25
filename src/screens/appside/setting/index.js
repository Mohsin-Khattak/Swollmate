import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SecondaryButton} from '../../../components/buttons';
import {styles} from './style';
const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Settings</Text>
      <SecondaryButton
        onPressTxt={() => navigation.navigate('SwipesUpgrade')}
        Viewstyle={styles.upgrade}
      />
      <SecondaryButton
        Viewstyle={styles.plane}
        onPressTxt={() => navigation.navigate('UpgradePlan')}
        title="My Plan"
        title1="Free"
        style={styles.txt}
        title2="Upgrade Now"
      />
      <SecondaryButton
        onPressTxt={() => navigation.navigate('VerifyAccount')}
        Viewstyle={styles.plane}
        title="Account Status"
        title1=""
        style={styles.txt}
        title2="Non Verifired"
      />
      <SecondaryButton
        Viewstyle={styles.plane}
        title="Travel Zone"
        title1=""
        style={styles.txtlocation}
        title2="Change Location"
      />
      <SecondaryButton
        onPress={() => navigation.navigate('TermAndCondation')}
        Viewstyle={styles.plane}
        title="Terms and Conditions"
        title1=""
        style={styles.txtlocation}
        title2=""
      />
      <SecondaryButton
        onPress={() => navigation.navigate('PrivacyPolicy')}
        Viewstyle={styles.plane}
        title="Privacy Policy"
        title1=""
        style={styles.txtlocation}
        title2=""
      />
      <SecondaryButton
        Viewstyle={styles.plane}
        title="Logout"
        title1=""
        styletitle={styles.txtlogout}
        title2=""
      />
    </View>
  );
};
export default SettingScreen;
