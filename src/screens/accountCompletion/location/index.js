import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen, LocationMark} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {hp} from '../../../services/dimensions';
import {colors} from '../../../assets/colors';
import {styles} from './style';
const Location = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <LocationMark style={styles.locationmark} />
      <Text style={styles.enableTxt}>Enable your Location</Text>
      <Text style={styles.titletxt}>
        We use your location to matches in your area
      </Text>
      <SimpleButton
        onPress={() => navigation.navigate('Gender')}
        style={styles.enableBtn}
        title="Enable Location"
      />
      <SimpleButton
        onPress={() => navigation.navigate('Gender')}
        style={styles.skipBtn}
        title="Skip for now"
      />
    </View>
  );
};
export default Location;
