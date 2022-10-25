import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../../assets/colors';
import {fontSizes} from '../../../assets/fontSize';
import {fonts} from '../../../assets/fontss';
import {hp, wp} from '../../../services/dimensions';
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.colorwhite,
  },
  icon: {
    width: wp(78.8),
    height: hp(45),
  },
  header: {
    width: wp(375),
    flexDirection: 'row',
    marginTop: hp(10),
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerView: {
    marginTop: hp(41),
  },
});
