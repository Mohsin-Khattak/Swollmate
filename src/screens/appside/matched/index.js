import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DoneImage, Man1, Man2, Matchgif} from '../../../assets/images';
import {BackScreen, Match} from '../../../assets/svgs';
import {styles} from './style';
const Matched = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Matched</Text>
      <View style={styles.matchview}>
        <Image style={styles.Man1img} source={Man1} />
        <Image style={styles.matchsvg} source={Matchgif} />
        <Image style={styles.Man2img} source={Man2} />
      </View>
    </View>
  );
};
export default Matched;
