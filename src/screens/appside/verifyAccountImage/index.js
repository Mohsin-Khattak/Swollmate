import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {Add, BackScreen, CheckCircle, Circle} from '../../../assets/svgs';
import {styles} from './style';
import {IMAGE_SERVICE} from '../../../services/image-service';
import {SimpleButton, SimpleButtonicon} from '../../../components/buttons';

const VerifyAccountImage = ({navigation}) => {
  const [save, setSave] = React.useState([]);

  const openCamera = async index => {
    let tm = [...save];
    try {
      const res = await IMAGE_SERVICE._returnImageCamera();

      tm[index] = res;
      // console.log('imagge ', res);
    } catch (error) {}
    setSave(tm);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('VerifyAccount')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Verify Account</Text>
      <Text style={styles.choosetxt}>
        Add the clear pictures of your national id’s both sides here and click
        to verify
      </Text>
      <Text style={styles.checktxt}>Front Side</Text>
      <View style={styles.upperPhotoView}>
        <TouchableOpacity
          onPress={() => openCamera(0)}
          style={styles.uperphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.imageadd} source={{uri: save[0]?.uri}} />
        </TouchableOpacity>
        <Text style={styles.backtxt}>Back Side</Text>
        <TouchableOpacity
          onPress={() => openCamera(1)}
          style={styles.backphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.imageadd} source={{uri: save[1]?.uri}} />
        </TouchableOpacity>
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('DocumentDone')}
        title="Continue"
        style={styles.continueBtn}
      />
    </View>
  );
};
export default VerifyAccountImage;
