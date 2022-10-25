import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {hp, wp} from '../../services/dimensions';
import {colors} from '../../assets/colors';
import {fontSizes} from '../../assets/fontSize';
import {fonts} from '../../assets/fontss';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorwhite,
  },
  cross: {
    marginTop: hp(28),
    marginLeft: wp(20),
  },
  textprofit: {
    textAlign: 'center',
    fontSize: totalSize(fontSizes.font2),
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    marginTop: hp(19),
  },
  textSchedule: {
    textAlign: 'center',
    fontSize: totalSize(fontSizes.font2),
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    marginTop: hp(35),
  },
});
