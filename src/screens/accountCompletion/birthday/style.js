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
    paddingHorizontal: wp(20),
  },
  gendertxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font5),
    paddingHorizontal: wp(20),
    marginTop: hp(30),
  },
  choosetxt: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
    paddingHorizontal: wp(20),
    marginTop: hp(13),
  },

  txtInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(251),
    marginLeft: hp(20),
    marginTop: hp(42),
  },
  txtinput: {
    width: wp(72),
    height: hp(51),
  },
  txtInputYear: {
    width: wp(95),
    height: hp(51),
  },
  continueBtn: {
    marginTop: hp(404),
  },
});
