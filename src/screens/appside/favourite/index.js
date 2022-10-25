import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Icons, Man1, Man2} from '../../../assets/images';
import {Clander, Drawer, Notification, Setting} from '../../../assets/svgs';
import {styles} from './style';
const FavMatches = ({navigation}) => {
  const [workout, setWorkOut] = useState([
    {
      image: Man1,
      name: 'Eleanor Pena',
      recent: 'Recent Matched',
    },
    {
      image: Man2,
      name: 'Eleanor Pena',
      recent: 'Recent Matched',
    },
  ]);
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Drawer />
        </TouchableOpacity>
        <Image style={styles.icon} source={Icons} />
        <TouchableOpacity
          style={styles.notify}
          onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.setting}
          onPress={() => navigation.navigate('ScheduleClander')}>
          <Clander />
        </TouchableOpacity>
      </View>

      <View style={styles.flatlistMainView}>
        <FlatList
          data={workout}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('FavouriteOne')}
              style={styles.notifiView}>
              <View style={styles.innerflatlist}>
                <View>
                  <Image source={item.image} style={styles.Man1} />
                </View>
                <View style={styles.nameview}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.recent}>{item.recent}</Text>
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
export default FavMatches;
