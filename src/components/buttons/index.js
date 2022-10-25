import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as SVGS from '../../assets/svgs';
import {styles} from './style';
export const SimpleButton = ({
  title = 'Sign Up with Email',
  icon,
  style,
  onPress,
  txtstyle,
}) => {
  const Icon = SVGS[icon];
  return (
    <TouchableOpacity onPress={onPress} style={[styles.ButtonStyle, style]}>
      {icon && <Icon />}
      <Text style={[styles.ButtonTxt, txtstyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export const SimpleButtonicon = ({
  title = 'Sign Up with Email',
  icon,
  style,
  onPress,
  FontStyle,
}) => {
  const Icon = SVGS[icon];
  return (
    <TouchableOpacity onPress={onPress} style={[styles.ButtonStyle, style]}>
      <Text style={[styles.ButtonTxt, FontStyle]}>{title}</Text>
      {icon && <Icon />}
    </TouchableOpacity>
  );
};
export const SkillButton = ({title = 'Sign Up with Email', style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.SkillButton, style]}>
      <Text style={styles.skillButtonTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({
  Viewstyle,
  style,
  title = 'Remaining Swipes',
  title1 = '30',
  title2 = 'Upgrade',
  onPress,
  onPressTxt,
  styletitle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.SecondaryButton, Viewstyle]}>
      <Text style={[styles.nametxt, styletitle]}>
        {title} <Text style={styles.nametxt1}>{title1}</Text>{' '}
      </Text>
      <TouchableOpacity onPress={onPressTxt}>
        <Text style={[styles.upgradeTxt, style]}>{title2}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
