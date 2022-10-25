import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Icons, ProfileUser} from '../../../assets/images';
import {BackScreen, Drawer, Notification} from '../../../assets/svgs';
import Swiper from 'react-native-swiper';
import {styles} from './style';
import {hp, wp} from '../../../services/dimensions';
const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Drawer />
        </TouchableOpacity>
        <Image style={styles.icon} source={Icons} />
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification style={styles.notifi} />
        </TouchableOpacity>
      </View>
      <View style={styles.swiperview}>
        <Swiper loop showsPagination={false}>
          <Image style={styles.sliderimage} source={ProfileUser} />
          <Image style={styles.sliderimage} source={ProfileUser} />
          <Image style={styles.sliderimage} source={ProfileUser} />
        </Swiper>
      </View>

      <TouchableOpacity
        style={styles.modalmainView}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.titleAnnette}>Annette Black</Text>
      </TouchableOpacity>

      <Modal
        backdropOpacity={0.1}
        style={{marginBottom: 50, alignItems: 'center'}}
        swipeDirection={'down'}
        onSwipeComplete={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}>
        <View style={styles.innerModalView}>
          <Text style={styles.titleAnnette}>Annette Black</Text>
        </View>
      </Modal>
    </View>
  );
};
export default Home;
