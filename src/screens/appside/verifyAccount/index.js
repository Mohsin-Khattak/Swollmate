import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {BackScreen, CheckCircle, Circle} from '../../../assets/svgs';

import {SimpleButton, SimpleButtonicon} from '../../../components/buttons';
import {styles} from './style';
const VerifyAccount = ({navigation}) => {
  const [data, setData] = useState([
    {
      title: 'National ID',
      isSelected: true,
    },
    {
      title: 'Passport',
      isSelected: false,
    },
    {
      title: 'Driving Licence',
      isSelected: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Verify Account</Text>
      <Text style={styles.choosetxt}>
        With the help of your document your account can be verified
      </Text>
      <Text style={styles.checktxt}>Choose what you want to submit</Text>
      <View style={styles.flatlistGender}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.checkView}>
              <TouchableOpacity
                onPress={() => {
                  let arr = [...data];
                  arr = arr.map(e => ({...e, isSelected: false}));
                  arr[index].isSelected = true;
                  setData(arr);
                }}>
                {item?.isSelected ? <CheckCircle /> : <Circle />}
              </TouchableOpacity>
              <Text style={styles.saveTxt}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('VerifyAccountImage')}
        title="Continue"
        style={styles.continueBtn}
      />
    </View>
  );
};
export default VerifyAccount;
