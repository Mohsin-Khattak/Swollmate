import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {BirhtdayTextinput} from '../../../components/textInputs';
import {styles} from './style';
const Birthday = ({navigation}) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const onBirthday = () => {
    if (!day?.trim()) alert('Please enter Day');
    else if (!month?.trim()) alert('Please enter Month');
    else if (!year?.trim()) alert('Please enter Year');
    else navigation.navigate('PartnerGender');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AddYourPhoto')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Birthday</Text>
      <Text style={styles.choosetxt}>Add your birthday to continue</Text>
      <View>
        <View style={styles.txtInputView}>
          <BirhtdayTextinput
            lable="Day"
            onChangeText={setDay}
            value={day}
            maxLength={2}
            containerStyle={styles.txtinput}
            placeholder=""
          />
          <BirhtdayTextinput
            lable="Month"
            onChangeText={setMonth}
            value={month}
            maxLength={2}
            containerStyle={styles.txtinput}
            placeholder=""
          />
          <BirhtdayTextinput
            lable="Year"
            maxLength={4}
            onChangeText={setYear}
            value={year}
            containerStyle={styles.txtInputYear}
            placeholder=""
          />
        </View>
      </View>
      <SimpleButton
        onPress={() => onBirthday()}
        style={styles.continueBtn}
        title="Continue"
      />
    </View>
  );
};
export default Birthday;
