import {StyleSheet} from 'react-native';
import {totalSize, width} from 'react-native-dimension';
import {colors} from '../../assets/colors';
import {fontSizes} from '../../assets/fontSize';
import {fonts} from '../../assets/fontss';
import {hp, wp} from '../../services/dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorwhite,
  },
  slide: {
    // width: wp(375),
    // height: hp(300),
  },
  slideImage: {
    alignSelf: 'center',
    marginTop: hp(94),
    width: wp(94),
    resizeMode: 'contain',
    // height: '40%',
  },
  slideTitle: {
    fontSize: totalSize(fontSizes.font3),
    paddingHorizontal: wp(20),
    marginTop: hp(55),
    color: colors.colorblack,
    fontFamily: fonts.extraBold,
  },
  slideText: {
    paddingHorizontal: wp(22),
    marginTop: hp(20),
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
  },
  nextButton: {
    width: wp(144),
    height: hp(51),
    backgroundColor: colors.colorButton,
    borderRadius: wp(15),
  },
  txtButton: {
    textAlign: 'center',
    fontFamily: fonts.semiBold,
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font2),
    marginTop: hp(15),
  },
  sliderStyle: {
    backgroundColor: colors.colorButton,
    marginBottom: wp(169),
    width: wp(39),
    height: hp(6),
  },
  dotStyles: {
    marginBottom: hp(187),
    backgroundColor: colors.colorDot,
    width: wp(18),
    height: hp(6),
  },
  skipText: {
    fontFamily: fonts.bold,
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font2),
    marginTop: hp(20),
    marginLeft: wp(14),
  },
});
