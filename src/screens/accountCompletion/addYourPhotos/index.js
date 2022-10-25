import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Add, BackScreen} from '../../../assets/svgs';
import {styles} from './style';
import {SimpleButton} from '../../../components/buttons';
import {IMAGE_SERVICE} from '../../../services/image-service';
const AddYourPhoto = ({navigation}) => {
  // const [img, setImage] = React.useState(null);
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
      <TouchableOpacity onPress={() => navigation.navigate('Gender')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Add your Photos</Text>
      <Text style={styles.choosetxt}>
        Add your minimum 2 photos or maximum 8 for continue. You can change
        these later
      </Text>
      <View style={styles.upperPhotoView}>
        <TouchableOpacity
          onPress={() => openCamera(0)}
          style={styles.uperphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.imageadd} source={{uri: save[0]?.uri}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openCamera(1)}
          style={styles.uperphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.imageadd} source={{uri: save[1]?.uri}} />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerPhotosView}>
        <TouchableOpacity
          onPress={() => openCamera(2)}
          style={styles.lowerphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.smallimageadd} source={{uri: save[2]?.uri}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openCamera(3)}
          style={styles.lowerphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.smallimageadd} source={{uri: save[3]?.uri}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openCamera(4)}
          style={styles.lowerphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.smallimageadd} source={{uri: save[4]?.uri}} />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerPhotosView}>
        <TouchableOpacity
          onPress={() => openCamera(5)}
          style={styles.lowerphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.smallimageadd} source={{uri: save[5]?.uri}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openCamera(6)}
          style={styles.lowerphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.smallimageadd} source={{uri: save[6]?.uri}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openCamera(7)}
          style={styles.lowerphoto}>
          <Add style={styles.addsvg} />
          <Image style={styles.smallimageadd} source={{uri: save[7]?.uri}} />
        </TouchableOpacity>
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('Birthday')}
        title="Continue"
        style={styles.continueBtn}
      />
    </View>
  );
};
export default AddYourPhoto;
