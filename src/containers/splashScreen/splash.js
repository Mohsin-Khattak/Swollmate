import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Icons} from '../../assets/images';
import {styles} from './style';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoardingScreen');
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={Icons} />
    </View>
  );
};
export default Splash;
