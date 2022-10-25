import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  VirtualizedList,
  ScrollView,
} from 'react-native';
import {Icons, Man1} from '../../../assets/images';
import {IMAGE_SERVICE} from '../../../services/image-service';
import {
  Add,
  Drawer,
  Facebook1,
  Instagram,
  Notification,
  Setting,
} from '../../../assets/svgs';
import {styles} from './style';
import {hp} from '../../../services/dimensions';
const Profile = ({navigation}) => {
  const [save, setSave] = React.useState([]);
  const [images, setImages] = useState([{}]);
  const openCamera = async index => {
    let tm = [...save];
    try {
      const res = await IMAGE_SERVICE._returnImageCamera();

      tm[index] = res;
      let arr = [...images];
      arr.unshift({uri: res.uri});
      setImages(arr);
      // console.log('imagge ', res);
    } catch (error) {}
    setSave(tm);
  };
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
          onPress={() => navigation.navigate('SettingScreen')}>
          <Setting />
        </TouchableOpacity>
      </View>
      <View style={styles.profileview}>
        <Image source={Man1} />
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editTxt}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nameTxt}>Ralph Edwards</Text>
      <View style={styles.socialview}>
        <Facebook1 />
        <Instagram />
      </View>
      <Text style={styles.photosTxt}>Photos</Text>
      <View style={styles.imageView}>
        <FlatList
          data={images}
          numColumns={3}
          columnWrapperStyle={styles.flatlistcolumnstyle}
          ItemSeparatorComponent={() => <View style={{height: hp(15)}} />}
          // keyExtractor={(item, index) => index + ''}
          renderItem={({item, index}) => {
            if (index == images.length - 1) {
              return (
                <TouchableOpacity
                  onPress={() => openCamera(0)}
                  style={styles.uperphoto}>
                  <Add style={styles.addsvg} />
                </TouchableOpacity>
              );
            } else {
              return (
                <View style={styles.uperphoto}>
                  <Image style={styles.imageadd} source={{uri: item.uri}} />
                </View>
              );
            }
          }}
        />
      </View>
      <View style={styles.skillView}>
        <View style={styles.skilltxtview}>
          <Text style={styles.skillTxt}>Skills</Text>
          <Text style={styles.EditTxt}>Edit</Text>
        </View>
      </View>
    </View>
  );
};
export default Profile;
