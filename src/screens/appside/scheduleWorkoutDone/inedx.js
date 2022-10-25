import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen, Done} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {styles} from './style';
const ScheduleWorkoutDone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('WorkoutLocation')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Done style={styles.locationmark} />
      <Text style={styles.enableTxt}>Workout Schedule Successfully</Text>
      <Text style={styles.titletxt}>
        Your workout date and time schedule successfully with your partner
      </Text>
      <SimpleButton
        onPress={() => navigation.navigate('Home')}
        style={styles.enableBtn}
        title="Back to Home"
      />
    </View>
  );
};
export default ScheduleWorkoutDone;
