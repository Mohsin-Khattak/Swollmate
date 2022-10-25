import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Add, BackScreen, Notification} from '../../../assets/svgs';
import {styles} from './style';
const EditProfile = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <BackScreen />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.gendertxt}>Self Questions</Text>
      <Text style={styles.choosetxt}>Answers these questions</Text>
    </View>
  );
};
export default EditProfile;
