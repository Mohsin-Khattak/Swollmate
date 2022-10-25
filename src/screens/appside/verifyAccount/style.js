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
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
    paddingHorizontal: wp(20),
    marginTop: hp(13),
  },
  flatlistGender: {
    width: wp(375),
  },

  continueBtn: {
    marginTop: hp(309),
  },
  saveTxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font10),
    marginLeft: wp(9),
  },
  checkView: {
    flexDirection: 'row',
    paddingHorizontal: wp(20),
    marginTop: hp(30),
  },
  checktxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
    paddingHorizontal: wp(20),
    marginTop: hp(34),
  },
});
