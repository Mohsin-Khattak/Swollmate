import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../../assets/colors';
import {fontSizes} from '../../../assets/fontSize';
import {fonts} from '../../../assets/fontss';
import {hp, wp} from '../../../services/dimensions';
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.colorwhite,
  },
  icon: {
    width: wp(78.8),
    height: hp(45),
  },
  header: {
    width: wp(375),
    flexDirection: 'row',
    marginTop: hp(19),
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: wp(40),
    height: hp(44),
    borderRadius: wp(44),
  },
  imageview: {
    flexDirection: 'row',
    width: wp(270),
  },
  name: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font13),
  },
  active: {
    color: colors.colorDot1,
    fontSize: totalSize(fontSizes.font4),
    fontFamily: fonts.regular,
    marginTop: hp(1.45),
  },
  activesvg: {
    position: 'absolute',
    marginLeft: wp(30),
    marginTop: hp(24),
  },
  nameview: {
    marginRight: wp(85),
    paddingLeft: wp(12),
  },

  footer: {
    width: wp(375),
    height: hp(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(17),
    alignItems: 'center',
    borderTopWidth: wp(0.5),
    borderTopColor: colors.colorbrown,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.colorwhite,
  },
  txtInput: {
    marginTop: hp(10),
    width: wp(279),
    height: hp(36),
    borderRadius: wp(4),
    backgroundColor: colors.colormessage,
  },
  innerflatlists: {
    borderRadius: wp(4),
    // backgroundColor: 'red',
    // paddingHorizontal: wp(10),
    paddingBottom: hp(7),
  },

  txtforme: {
    fontFamily: fonts.regular,
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font7),
    marginTop: hp(10),
  },
  formedate: {
    fontFamily: fonts.regular,
    color: colors.colorDot1,
    fontSize: totalSize(fontSizes.font4),
    marginBottom: 8,
    marginTop: hp(4),
  },
  container: {
    paddingTop: hp(13),
    paddingBottom: hp(65),
    paddingHorizontal: wp(16),
  },
  textwidth: {
    alignSelf: 'flex-start',
    // backgroundColor: 'red',
    paddingRight: wp(10),
    borderRadius: wp(4),
    maxWidth: wp(300),
    backgroundColor: colors.colorbrown,
  },
  day: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(12),
  },
  line: {
    width: wp(126),
    height: hp(1),
    backgroundColor: colors.colorbrown,
  },
  daytxt: {
    fontFamily: fonts.regular,
    fontSize: totalSize(fontSizes.font1),
    color: colors.colorline,
  },
});
