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
    marginLeft: wp(106.5),
  },
  header: {
    width: wp(375),
    flexDirection: 'row',
    marginTop: hp(10),
    paddingHorizontal: wp(20),
    alignItems: 'center',
  },
  notify: {
    marginLeft: wp(72),
  },
  setting: {
    marginLeft: wp(10),
  },
  profileview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    marginTop: hp(35),
  },
  editTxt: {
    color: colors.colorButton,
    fontSize: totalSize(fontSizes.font1),
    fontFamily: fonts.semiBold,
  },
  nameTxt: {
    color: colors.colorblack,
    fontFamily: fonts.medium,
    fontSize: totalSize(fontSizes.font9),
    marginLeft: wp(20),
    marginTop: hp(16),
  },
  socialview: {
    marginTop: wp(10.62),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    marginRight: wp(260),
  },
  photosTxt: {
    marginTop: hp(36),
    marginLeft: wp(20),
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font9),
    color: colors.colorblack,
  },
  imageView: {
    width: wp(375),
    height: hp(251),
    paddingHorizontal: wp(20),
  },
  uperphoto: {
    width: wp(108),
    height: hp(108),
    backgroundColor: colors.skipbtn,
    borderRadius: wp(25),
    justifyContent: 'center',
  },
  addsvg: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  imageadd: {
    width: wp(108),
    height: hp(108),
    borderRadius: wp(25),
  },
  flatlistcolumnstyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: hp(1),
  },
  skillTxt: {
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font9),
    color: colors.colorblack,
  },
  EditTxt: {
    color: colors.colorButton,
    fontSize: totalSize(fontSizes.font1),
    fontFamily: fonts.semiBold,
  },
  skilltxtview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    marginTop: hp(10),
  },
});
