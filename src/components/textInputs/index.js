import React, {useState} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import * as SVGS from '../../assets/svgs';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
export const SimpleTextinput = ({
  placeholder = 'name',
  icon,
  style,
  onChangeText,
  value,
  secureTextEntry,
  containerStyle,
  onBlur,
}) => {
  const Icon = SVGS[icon];
  const [secure, setSecure] = useState(false);
  return (
    <View style={[styles.viewtxtInput, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={e => onChangeText(e)}
        style={[styles.txtinput, style]}
        placeholder={placeholder}
        secureTextEntry={secure}
        placeholderTextColor={colors.FontTxtInput}
        onBlur={onBlur}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Feather
            size={25}
            name={secure ? 'eye' : 'eye-off'}
            color={'#BCBCBC'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export const BirhtdayTextinput = ({
  placeholder = 'name',
  style,
  onChangeText,
  value,
  containerStyle,
  lable = 'good',
}) => {
  return (
    <View>
      <Text style={[styles.txtdob, style]}>{lable}</Text>
      <View style={[styles.viewtxtInput, containerStyle]}>
        <TextInput
          value={value}
          keyboardType="number-pad"
          onChangeText={e => onChangeText(e)}
          style={[styles.txtinput, style]}
          placeholder={placeholder}
          placeholderTextColor={colors.FontTxtInput}
        />
      </View>
    </View>
  );
};
