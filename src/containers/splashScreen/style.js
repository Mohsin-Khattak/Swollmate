import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {hp, wp} from '../../services/dimensions';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorwhite,
    flex: 1,
  },
  icon: {
    width: wp(270),
    height: hp(272.18),
    alignSelf: 'center',
    marginTop: hp(270),
  },
});
