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
  signuptxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font5),
    marginLeft: wp(20),
    marginTop: hp(30),
  },
  logintxt: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font2),
    marginLeft: wp(20),
    marginTop: hp(13),
  },
  txtinput: {
    marginTop: hp(40),
  },
  errors: {
    fontSize: totalSize(fontSizes.font1),
    color: colors.red,
    paddingHorizontal: wp(20),
    marginBottom: hp(10),
  },
  forgottxt: {
    color: colors.colorButton,
    alignSelf: 'flex-end',
    marginRight: wp(20),
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
    marginTop: hp(47),
  },
  loginbtn: {
    marginTop: hp(47),
  },
  OrmainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(66),
    paddingHorizontal: wp(41),
    alignItems: 'center',
  },

  linearGradient: {
    height: hp(3),
    width: wp(125),
  },
  orText: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font2),
  },
  googlebtn: {
    marginTop: hp(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(130),
    alignItems: 'center',
  },
  facebookbtn: {
    marginTop: hp(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(120),
    alignItems: 'center',
  },
});
