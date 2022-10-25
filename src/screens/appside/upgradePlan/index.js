import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SecondaryButton, SimpleButton} from '../../../components/buttons';
import {styles} from './style';
const UpgradePlan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Upgrade Plan</Text>
      <SecondaryButton
        Viewstyle={styles.upgrade}
        title="Premium Gold"
        title1=""
        style={styles.txt}
        title2="$10.99/M"
      />
      <Text style={styles.whatTxt}>What you get:</Text>
      <Text style={styles.content}>
        With Premium Plan you can easily change your location and use travel
        zone
      </Text>
      <SimpleButton
        onPress={() => navigation.navigate('Payment')}
        style={styles.Upgrade}
        title="Upgrade"
      />
    </View>
  );
};
export default UpgradePlan;
