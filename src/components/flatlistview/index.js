import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Man1} from '../../assets/images';
import {Active} from '../../assets/svgs';

import {styles} from './style';

export const MessageList = ({
  style,
  title = 'Ronald Richards',
  title1 = 'Active Now',
  title2 = '04:22PM',
  onPress,
  uri,
  onPressTxt,
  styletitle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.flatlist, style]}>
      <View style={styles.imageview}>
        <View>
          <Image source={uri} style={styles.image} />
          <Active style={styles.activesvg} />
        </View>
        <View style={styles.nameview}>
          <Text style={[styles.name, styletitle]}>{title}</Text>
          <Text style={styles.active}>{title1}</Text>
        </View>
      </View>
      <Text style={styles.time}>{title2}</Text>
    </TouchableOpacity>
  );
};
