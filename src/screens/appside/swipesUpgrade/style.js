import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../../assets/colors';
import {fontSizes} from '../../../assets/fontSize';
import {fonts} from '../../../assets/fontss';
import {hp, wp} from '../../../services/dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorwhite,
  },
  backmove: {
    marginTop: hp(20),
    marginLeft: wp(20),
  },
  gendertxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font5),
    marginLeft: wp(20),
    marginTop: hp(30),
  },
  upgrade: {
    marginTop: hp(28),
  },
  whatTxt: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font10),
    marginLeft: wp(20),
    marginTop: hp(37),
  },
  content: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    paddingHorizontal: wp(20),
    marginTop: hp(20),
    fontSize: totalSize(fontSizes.font1),
  },
  Upgrade: {
    marginTop: hp(347),
  },
});
