import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {Man1, Man2} from '../../../assets/images';
import {BackScreen, Notification} from '../../../assets/svgs';
import {styles} from './style';
const ScheduleWorkout = ({navigation}) => {
  const [workout, setWorkOut] = useState([
    {
      image: Man1,
      name: 'Eleanor Pena',
      date: '01-04-2022',
    },
    {
      image: Man2,
      name: 'Eleanor Pena',
      date: '01-04-2022',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScheduleWorkoutDone')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.gendertxt}>Scheduled Workouts</Text>
      <Text style={styles.choosetxt}>
        These are your scheduled workout with your partners
      </Text>

      <View style={styles.flatlistMainView}>
        <FlatList
          data={workout}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Workout')}
              style={styles.notifiView}>
              <View style={styles.innerflatlist}>
                <View>
                  <Image source={item.image} style={styles.Man1} />
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
    </View>
  );
};
export default ScheduleWorkout;
