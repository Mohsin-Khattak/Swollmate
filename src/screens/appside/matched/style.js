import {StyleSheet} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
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
  matchview: {
    marginTop: hp(70),
    alignItems: 'center',
  },
  Man1img: {
    width: wp(119),
    height: hp(119),
    borderRadius: wp(20),
  },

  matchsvg: {
    marginTop: hp(51),
    width: wp(119),
    height: hp(119),
  },
  Man2img: {
    marginTop: hp(51),
    width: wp(119),
    height: hp(119),
    borderRadius: wp(20),
  },
});
