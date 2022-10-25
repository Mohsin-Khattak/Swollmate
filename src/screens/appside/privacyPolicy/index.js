import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackScreen} from '../../../assets/svgs';
import {styles} from './style';
const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Privacy Policy</Text>
      <Text style={styles.choosetxt}>
        These are the privacy policy of Swollmate
      </Text>
      <Text style={styles.firstpargraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet
        consequat luctus ac. Nullam egestas urna, natoque imperdiet. Neque sed
        malesuada at iaculis in egestas malesuada. Amet gravida et ornare eget
        pulvinar cras morbi. In vitae tincidunt sodales praesent sit commodo
        molestie lacus, sit. Faucibus nulla amet, eu, quis nunc suspendisse
        quis.{'\n\n'} Quam ultrices amet, vitae arcu cras amet ac lectus. Varius
        bibendum mus dolor eget gravida eget. Vitae in neque, pulvinar et
        quisque. Facilisis morbi pellentesque diam sapien turpis et. Tempor
        massa ut senectus pharetra nulla aliquam integer et. Sit mauris
        consectetur blandit neque amet diam dolor. Ac at fames leo at sem
        commodo.{'\n\n'} Aliquet ornare elementum sit eget bibendum. Congue
        cursus sed massa a tristique viverra sed. Bibendum pharetra eget at cum
        feugiat. Lobortis tortor nibh duis pellentesque cursus ultrices euismod.
        Venenatis, nunc suspendisse sagittis aliquet sit nisi neque nibh
        viverra. Massa viverra nulla gravida enim vulputate aenean diam non
        dignissim.
      </Text>
    </View>
  );
};
export default PrivacyPolicy;
