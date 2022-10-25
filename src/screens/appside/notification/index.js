import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {fonts} from '../../../assets/fontss';
import {BackScreen} from '../../../assets/svgs';
import {notifimes} from '../../../global/introData';
import {styles} from './style';
const Notification = ({navigation}) => {
  const [notification, setNotification] = useState(notifimes);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Notification</Text>
      <View style={styles.flatlistMainView}>
        <FlatList
          data={notification}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Matched')}
              style={styles.notifiView}>
              <View style={styles.headerflatlist}>
                <Text style={styles.title}>
                  You got matched with{' '}
                  <Text style={{fontFamily: fonts.bold}}>{item.title}</Text>{' '}
                </Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.content}>{item.content}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
    </View>
  );
};
export default Notification;
