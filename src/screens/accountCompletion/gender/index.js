import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {BackScreen, Check} from '../../../assets/svgs';
import {SimpleButton, SimpleButtonicon} from '../../../components/buttons';
import {styles} from './style';
const Gender = ({navigation}) => {
  const [data, setData] = useState([
    {
      title: 'Men',
      isSelected: true,
    },
    {
      title: 'Women',
      isSelected: false,
    },
    {
      title: 'Non Specified',
      isSelected: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Gender</Text>
      <Text style={styles.choosetxt}>Choose your gender to continue</Text>
      <View style={styles.flatlistGender}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View>
              <SimpleButtonicon
                title={item.title}
                icon={item.isSelected ? 'Check' : null}
                FontStyle={item.isSelected ? styles.mentxt : styles.mentxt1}
                style={item.isSelected ? styles.men : styles.men1}
                onPress={() => {
                  let arr = [...data];
                  arr.forEach(val => {
                    val.isSelected = false;
                    arr[index].isSelected = true;
                    setData(arr);
                  });
                }}
              />
            </View>
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('AddYourPhoto')}
        title="Continue"
        style={styles.continueBtn}
      />
    </View>
  );
};
export default Gender;
