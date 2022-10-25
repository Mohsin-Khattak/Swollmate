import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen, CheckCircle, Circle} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';

import {SimpleTextinput} from '../../../components/textInputs';
import {styles} from './style';
const Payment = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [nameCard, setNameCard] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const onPayment = () => {
    if (!nameCard?.trim()) alert('Please enter Name');
    else if (!cardNumber?.trim()) alert('Please enter Card Number');
    else if (!cvv?.trim()) alert('Please enter Cvv');
    else navigation.navigate('PaymentDone');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('UpgradePlan')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Payment - Credit/Debit Card</Text>
      <View style={styles.input}>
        <SimpleTextinput
          onChangeText={setNameCard}
          value={nameCard}
          placeholder="Name on Card"
        />
        <SimpleTextinput
          onChangeText={setCardNumber}
          value={cardNumber}
          placeholder="Card Number"
        />
        <SimpleTextinput onChangeText={setCvv} value={cvv} placeholder="CVV" />
      </View>
      <View style={styles.checkView}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setCheck(!check)}>
          {check ? <CheckCircle /> : <Circle />}
        </TouchableOpacity>
        <Text style={styles.saveTxt}>Save for future payments</Text>
      </View>
      <SimpleButton
        onPress={() => onPayment()}
        title="Pay Now"
        style={styles.paybtn}
      />
    </View>
  );
};
export default Payment;
