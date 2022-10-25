import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {colors} from '../../../assets/colors';
import {Icons, Man1, Man2} from '../../../assets/images';
import {Active, Drawer, Notification} from '../../../assets/svgs';
import {MessageList} from '../../../components/flatlistview';
import {styles} from './style';
const Messages = ({navigation}) => {
  const [message, setMessage] = useState([
    {
      Image: Man1,
      title: 'Haider ali khan ',
      title1: 'Active Now',
      title2: '04:22PM',
    },
    {
      Image: Man2,
      title: 'Mohsin khan ',
      title1: 'You: Okay',
      title2: '04:22PM',
    },
    {
      Image: Man2,
      title: 'Annette Black ',
      title1: 'Active Now',
      title2: '04:22PM',
    },
    {
      Image: Man2,
      title: 'Jerome Bell',
      title1: 'This is amazing',
      title2: '04:22PM',
    },
  ]);
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Drawer />
        </TouchableOpacity>
        <Image style={styles.icon} source={Icons} />
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification style={styles.notifi} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.innerView}>
          <FlatList
            data={message}
            renderItem={({item, index}) => (
              <View>
                <MessageList
                  onPress={() => navigation.navigate('Conversion')}
                  style={{
                    backgroundColor:
                      index == 0 ? colors.colorbrown : colors.colorwhite,
                  }}
                  uri={item.Image}
                  title={item.title}
                  title1={item.title1}
                  title2={item.title2}
                />
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
      </View>
    </View>
  );
};
export default Messages;
