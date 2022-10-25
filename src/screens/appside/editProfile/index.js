import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Add, BackScreen, Notification} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {SimpleTextinput} from '../../../components/textInputs';
import {IMAGE_SERVICE} from '../../../services/image-service';
import {styles} from './style';
const EditProfile = ({navigation}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [facebook, setFacebook] = useState();
  const [instagram, setInstagram] = useState();
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
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <BackScreen />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.gendertxt}>Edit Profile</Text>
      <Text style={styles.choosetxt}>Edit profile picture and name</Text>
      <View style={styles.uperphoto}>
        <Add style={styles.addsvg} />
        <Image style={styles.imageadd} source={{uri: save[0]?.uri}} />
      </View>
      <TouchableOpacity onPress={() => openCamera(0)}>
        <Text style={styles.chnageImageTxt}>Change Image</Text>
      </TouchableOpacity>
      <View style={styles.txtinputview}>
        <SimpleTextinput
          onChangeText={setFirstName}
          value={firstName}
          //   containerStyle={styles.txtinput}
          placeholder="First Name"
        />
        <SimpleTextinput
          onChangeText={setLastName}
          value={lastName}
          //   containerStyle={styles.txtinput}
          placeholder="Last Name"
        />
        <SimpleTextinput
          onChangeText={setFacebook}
          value={facebook}
          //   containerStyle={styles.txtinput}
          placeholder="Facebook Link"
        />
        <SimpleTextinput
          onChangeText={setInstagram}
          value={instagram}
          //   containerStyle={styles.txtinput}
          placeholder="Instagram Link"
        />
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('Profile')}
        title="Update"
        style={styles.Updatebtn}
      />
    </View>
  );
};
export default EditProfile;
