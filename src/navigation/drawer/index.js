import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Cross} from '../../assets/svgs';
import {styles} from './style';
const CustomDrawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Cross style={styles.cross} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.textprofit}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ScheduleWorkout')}>
        <Text style={styles.textSchedule}>Schedule Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TermAndCondation')}>
        <Text style={styles.textSchedule}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={styles.textSchedule}>Privacy Policy</Text>
      </TouchableOpacity>
      <Text style={styles.textSchedule}>Logout</Text>
    </View>
  );
};
export default CustomDrawer;
