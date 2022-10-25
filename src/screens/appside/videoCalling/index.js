import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Footer, IncomingImg, MyImg} from '../../../assets/images';
import {
  BackScreen,
  Camera,
  Dail,
  Daile,
  Message,
  Threedot,
} from '../../../assets/svgs';
import {styles} from './style';
const VideoCalling = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={IncomingImg} style={styles.incomingImg}>
        <View style={styles.headerCamera}>
          <TouchableOpacity onPress={() => navigation.navigate('Conversion')}>
            <BackScreen style={styles.backnavigate} />
          </TouchableOpacity>
          <View style={{width: 100, height: 140}}>
            <Image style={styles.myImage} source={MyImg} />
            <Camera style={styles.camera} />
          </View>
        </View>
        <View style={styles.gradientView}>
          <LinearGradient
            colors={['#08080800', '#08080810', '#08080824', '#191B1A']}
            // start={{x: 0, y: 0}}
            // end={{x: 1, y: 1}}
            style={styles.linearGradient}
          />
          <Text style={styles.name}>Kathryn Cooper</Text>
          <Text style={styles.Calltime}>00:21:45</Text>
        </View>
        <ImageBackground style={styles.footer} source={Footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Conversion')}>
            <Message style={styles.Message} />
          </TouchableOpacity>
          <Text style={styles.securetxt}>Your call is secure</Text>
          <Threedot style={styles.Message} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.Daile}
          onPress={() => navigation.navigate('Conversion')}>
          <Daile />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default VideoCalling;
