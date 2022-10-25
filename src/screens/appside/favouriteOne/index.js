import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Icons, Man1, Man2} from '../../../assets/images';
import {
  Arrow,
  Clander,
  Drawer,
  Notification,
  Setting,
} from '../../../assets/svgs';
import {SkillButton} from '../../../components/buttons';
import {hp, wp} from '../../../services/dimensions';
import {styles} from './style';

const FavouriteOne = ({navigation}) => {
  const [photos, setPhotos] = useState([{}, {}, {}]);
  const [skill, setSkill] = useState([{}, {}, {}]);
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
      <View style={styles.cart}>
        <View style={styles.cartheader}>
          <Image source={Man1} style={styles.img} />
          <View style={styles.name}>
            <Text style={styles.nametxt}>Eleanor Pena</Text>
            <Text style={styles.matchTxt}>Recent Matched</Text>
          </View>
          <Arrow />
        </View>
        <Text style={styles.photostxt}>Photos</Text>
        <View>
          <FlatList
            data={photos}
            numColumns={3}
            contentContainerStyle={{marginLeft: wp(20), marginTop: hp(13)}}
            renderItem={({item}) => (
              <View>
                <Image source={Man1} style={styles.flatlistImg} />
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
        <Text style={styles.photostxt}>SKills</Text>
        <View>
          <FlatList
            data={skill}
            numColumns={3}
            contentContainerStyle={{marginLeft: wp(20), marginTop: hp(23)}}
            renderItem={({item}) => (
              <View>
                <SkillButton title="skill 1" style={styles.skill} />
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
        <Text style={styles.photostxt}>Categories</Text>
        <View>
          <FlatList
            data={skill}
            numColumns={3}
            contentContainerStyle={{marginLeft: wp(20), marginTop: hp(23)}}
            renderItem={({item}) => (
              <View>
                <SkillButton title="Category 1" style={styles.skill} />
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
        <Text style={styles.photostxt}>Goals</Text>
        <View>
          <FlatList
            data={skill}
            numColumns={3}
            contentContainerStyle={{marginLeft: wp(20), marginTop: hp(23)}}
            renderItem={({item}) => (
              <View>
                <SkillButton title="Goal 1" style={styles.skill} />
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
      </View>
    </View>
  );
};
export default FavouriteOne;
