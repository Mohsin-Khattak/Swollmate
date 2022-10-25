import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen, Done} from '../../../assets/svgs';
import {SimpleButton} from '../../../components/buttons';
import {styles} from './style';
const DocumentDone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('VerifyAccount')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Done style={styles.locationmark} />
      <Text style={styles.enableTxt}>Document Submited</Text>
      <Text style={styles.titletxt}>
        Swollmate team manually see your documents and get back to you with
        update in 3 business days
      </Text>
      <SimpleButton
        onPress={() => navigation.navigate('Home')}
        style={styles.enableBtn}
        title="Back to Home"
      />
    </View>
  );
};
export default DocumentDone;
