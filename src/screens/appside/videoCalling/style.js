import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../../assets/colors';
import {fontSizes} from '../../../assets/fontSize';
import {fonts} from '../../../assets/fontss';
import {hp, wp} from '../../../services/dimensions';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorwhite,
    flex: 1,
  },
  incomingImg: {
    width: wp(375),
    height: hp(751),
  },
  headerCamera: {
    flexDirection: 'row',
    marginTop: hp(30),
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    marginRight: wp(5),
  },
  backnavigate: {
    marginTop: hp(25),
  },
  myImage: {
    width: wp(100),
    height: hp(140),
    borderRadius: wp(24),
  },
  cameramove: {
    marginTop: hp(50),
  },
  linearGradient: {
    marginTop: hp(272),
    // opacity: 1,
    height: hp(283),
    width: wp(375),
  },
  name: {
    color: colors.colorwhite,
    fontSize: totalSize(fontSizes.font3),
    fontFamily: fonts.bold,
    marginLeft: wp(20),
    position: 'absolute',
    marginTop: hp(380),
  },
  Calltime: {
    position: 'absolute',
    color: colors.colorwhite,
    marginTop: hp(425),
    marginLeft: wp(20),
    fontFamily: fonts.regular,
  },
  gradientView: {
    height: hp(283),
    width: wp(375),
  },
  footer: {
    height: hp(120),
    width: wp(375),
    marginTop: hp(215),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(50),
  },
  camera: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp(45),
  },
  Message: {
    marginTop: hp(45),
  },
  securetxt: {
    color: colors.colorwhite,
    fontSize: totalSize(fontSizes.font1),
    marginTop: hp(70),
  },
  Daile: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp(638),
  },
});
