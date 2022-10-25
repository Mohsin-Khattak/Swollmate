import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen, Done} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {styles} from './style';
const PaymentDone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Done style={styles.locationmark} />
      <Text style={styles.enableTxt}>Payment Done Successfully</Text>
      <Text style={styles.titletxt}>
        You have upgraded your plan free to premium gold
      </Text>
      <SimpleButton
        onPress={() => navigation.navigate('Home')}
        style={styles.enableBtn}
        title="Back to Home"
      />
    </View>
  );
};
export default PaymentDone;
