import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {styles} from './style';
import {slides} from '../../global/introData';
import * as SVGS from '../../assets/svgs';
import {hp, wp} from '../../services/dimensions';

const OnBoardingScreen = ({navigation}) => {
  const [data, setData] = useState(slides);
  const renderItem = ({item}) => {
    const Icon = SVGS[item?.image];
    return (
      <View style={styles.slide}>
        <Icon width={wp(315)} height={hp(216)} marginLeft={wp(20)} />
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideText}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppIntroSlider
        style={{paddingTop: hp(95)}}
        showSkipButton={true}
        dotStyle={styles.dotStyles}
        activeDotStyle={styles.sliderStyle}
        renderItem={renderItem}
        data={data}
        renderDoneButton={() => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('SocialLogin')}
              style={styles.nextButton}>
              <Text style={styles.txtButton}>Next</Text>
            </TouchableOpacity>
          );
        }}
        renderSkipButton={() => {
          return (
            <Text
              onPress={() => navigation.navigate('SocialLogin')}
              style={styles.skipText}>
              Skip
            </Text>
          );
        }}
        renderNextButton={() => {
          return (
            <View style={styles.nextButton}>
              <Text style={styles.txtButton}>Next</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default OnBoardingScreen;
