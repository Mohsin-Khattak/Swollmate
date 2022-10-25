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
  choosetxt: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
    marginLeft: wp(20),
    marginTop: hp(13),
  },
  flatlistGender: {
    width: wp(375),
    height: hp(200),
    marginTop: hp(38),
  },
  men: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.colorButton,
    paddingHorizontal: wp(20),
    alignItems: 'center',
    marginTop: hp(13),
  },
  men1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.skipbtn,
    paddingHorizontal: wp(20),
    alignItems: 'center',
    marginTop: hp(13),
  },
  mentxt: {
    color: colors.colorwhite,
  },
  mentxt1: {
    color: colors.colorblack,
  },
  continueBtn: {
    marginTop: hp(292),
  },
});
