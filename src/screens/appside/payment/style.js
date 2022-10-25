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
  input: {
    marginTop: hp(38),
  },

  Upgrade: {
    marginTop: hp(347),
  },
  saveTxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font9),
  },
  checkView: {
    flexDirection: 'row',
    paddingHorizontal: wp(20),
    marginTop: hp(37),
    justifyContent: 'space-between',
    marginRight: wp(131),
  },
  paybtn: {
    marginTop: hp(296),
  },
  checkbox: {
    height: hp(5),
    width: wp(5),
  },
});
