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
  verifyTxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font3),
    marginTop: hp(34),
    marginLeft: wp(20),
  },
  enterTxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
    marginTop: hp(13),
    marginLeft: wp(20),
  },
  codeverify: {
    backgroundColor: colors.colorbrown,
    borderRadius: wp(15),
    width: wp(51),
    height: hp(51),
    marginTop: hp(24),
  },
  resendTxt: {
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font1),
    fontFamily: fonts.semiBold,
    marginBottom: wp(48),
    textAlign: 'center',
  },
  verifyBtn: {
    marginBottom: hp(69),
  },
});
