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
  icon: {
    width: wp(223),
    height: hp(225),
    marginTop: hp(60),
    alignSelf: 'center',
  },
  titletxt: {
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font3),
    color: colors.colorblack,
    paddingHorizontal: wp(29),
    marginTop: hp(49),
  },
  contentTxt: {
    fontSize: totalSize(fontSizes.font1),
    paddingHorizontal: wp(29),
    marginTop: hp(21),
    fontFamily: fonts.semiBold,
    color: colors.colorblack,
  },
  SignUp: {
    marginTop: hp(69),
  },
  GoogleIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(130),
    alignItems: 'center',
    marginTop: hp(15),
  },
  FacebookIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(120),
    alignItems: 'center',
    marginTop: hp(15),
  },
  footertxt: {
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font4),
    paddingHorizontal: wp(90),
    textAlign: 'center',
    fontFamily: fonts.semiBold,
    marginTop: hp(20),
  },
});
