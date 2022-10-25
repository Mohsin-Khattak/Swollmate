import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {Man1} from '../../../assets/images';
import {Arrow, BackScreen, MapOne, Notification} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {styles} from './style';
const Workout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScheduleWorkout')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.gendertxt}>Workout</Text>
      <Text style={styles.choosetxt}>
        This is scheduled workout with your partner
      </Text>
      <View style={styles.cartView}>
        <View style={styles.headercart}>
          <Image style={styles.image} source={Man1} />
          <View style={styles.nameview}>
            <Text style={styles.txtname}>Eleanor Pena</Text>
            <View style={styles.dateview}>
              <Text style={styles.date}>01-04-2022</Text>
              <Text style={styles.date}>14:00 pm</Text>
            </View>
          </View>
          <Arrow />
        </View>
        <Text style={styles.txtLocation}>Location</Text>
        <View style={styles.mapview}>
          <MapOne />
          <Text style={styles.txtcity}>Town, City, Country</Text>
        </View>
        <Text style={styles.remainingtxt}>2 day Remaining</Text>
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('ScheduleWorkout')}
        txtstyle={styles.btnname}
        title="Cancel Scheduled Workout"
        style={styles.canclebtn}
      />
    </View>
  );
};
export default Workout;
