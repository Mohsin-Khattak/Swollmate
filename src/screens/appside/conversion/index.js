import moment from 'moment';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors} from '../../../assets/colors';
import {Icons, Man1} from '../../../assets/images';
import {
  Active,
  Add,
  AddOne,
  BackScreen,
  Drawer,
  Notification,
  Send,
  Video,
} from '../../../assets/svgs';
import {SimpleTextinput} from '../../../components/textInputs';
import {hp, wp} from '../../../services/dimensions';

import {styles} from './style';
const Conversion = ({navigation}) => {
  const [send, setSend] = useState();
  let conversion = [
    {
      user_id: 0,
      message: 'Hello how are you  ',
      created_at: '2022-07-01 12:10',
      read_message: 'Read',
      read: ' . Read',
    },
    {
      user_id: 1,
      message: 'Hi i am fine ',
      created_at: '2022-07-01 12:10',
    },
    {
      user_id: 0,
      day: '2022-07-01 12:10',
      read: ' . Read',
    },
  ];
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <BackScreen />
        </TouchableOpacity>
        <View style={styles.imageview}>
          <View>
            <Image source={Man1} style={styles.image} />
            <Active style={styles.activesvg} />
          </View>
          <View style={styles.nameview}>
            <Text style={styles.name}>Ronald Richards</Text>
            <Text style={styles.active}>Active Now</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('VideoCalling')}>
          <Video style={styles.notifi} />
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{height: hp(13)}} />}
        data={conversion}
        renderItem={({item}) => (
          <View style={styles.innerflatlists}>
            <View style={styles.day}>
              <View style={styles.line}></View>
              <Text style={styles.daytxt}>Sat, 17/10</Text>
              <View style={styles.line}></View>
            </View>
            <View
              style={{
                ...styles.textwidth,
                alignSelf: item.user_id === 0 ? 'flex-end' : 'flex-start',
                backgroundColor:
                  item.user_id === 0 ? colors.colorButton : colors.colorwhite,
                paddingLeft: item.user_id === 0 ? wp(10) : wp(0),
              }}>
              <Text style={styles.txtforme}>{item.message}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...styles.formedate,
                    color:
                      item.user_id === 0 ? colors.colorwhite : colors.colorDot1,
                    paddingLeft: item.user_id === 0 ? wp(50) : wp(0),
                  }}>
                  {moment(item.created_at)?.format('HH:mm')}
                  <Text>{item.read}</Text>
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index + ''}
      />

      <View style={styles.footer}>
        <AddOne />
        <SimpleTextinput
          containerStyle={styles.txtInput}
          onChangeText={setSend}
          value={send}
          placeholder="Message"
        />
        <Send />
      </View>
    </View>
  );
};
export default Conversion;
