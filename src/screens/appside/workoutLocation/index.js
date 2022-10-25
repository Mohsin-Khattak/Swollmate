import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {BackScreen, MapOne, Notification} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {hp} from '../../../services/dimensions';
import {styles} from './style';
const WorkoutLocation = ({navigation}) => {
  const [location, setLocation] = useState([{}, {}, {}, {}, {}]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScheduleClander')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.gendertxt}>Workout Location</Text>
      <Text style={styles.choosetxt}>Select your workout location</Text>
      <View style={styles.cartView}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: hp(24)}} />}
          contentContainerStyle={{paddingBottom: 10, paddingTop: 4}}
          data={location}
          numColumns={'2'}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.cart}>
              <View style={styles.locView}>
                <MapOne style={styles.map} />
                <Text style={styles.locationName}>Town, City, Country</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('ScheduleWorkoutDone')}
        title="Schedule"
        style={styles.btn}
      />
    </View>
  );
};
export default WorkoutLocation;
