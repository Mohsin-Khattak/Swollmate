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
  upperPhotoView: {
    marginTop: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
  },
  uperphoto: {
    width: wp(154),
    height: hp(154),
    backgroundColor: colors.skipbtn,
    borderRadius: wp(25),
    justifyContent: 'center',
  },
  lowerPhotosView: {
    marginTop: hp(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
  },
  lowerphoto: {
    width: wp(99.93),
    height: hp(99.93),
    backgroundColor: colors.skipbtn,
    borderRadius: wp(25),
    justifyContent: 'center',
  },
  continueBtn: {
    marginTop: hp(73.07),
  },
  imageadd: {
    width: wp(154),
    height: hp(154),
    borderRadius: wp(25),
  },
  smallimageadd: {
    width: wp(99.93),
    height: hp(99.93),
    borderRadius: wp(25),
  },
  addsvg: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
  },
});
