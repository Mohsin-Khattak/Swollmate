import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/colors';
import {BackScreen, Done} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {styles} from './style';
const StartedWithSwollmate = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AddHere')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Done style={styles.locationmark} />
      <Text style={styles.enableTxt}>
        Get started with{' '}
        <Text style={{color: colors.colorButton}}>Swollmate</Text>
      </Text>
      <Text style={styles.titletxt}>Profile completion done</Text>
      <SimpleButton
        onPress={() => navigation.navigate('AppNav')}
        style={styles.enableBtn}
        title="Get Started"
      />
    </View>
  );
};
export default StartedWithSwollmate;
