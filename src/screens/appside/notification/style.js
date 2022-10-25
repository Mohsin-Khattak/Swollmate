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
  flatlistMainView: {
    marginTop: hp(35),
    flex: 1,
  },
  notifiView: {
    width: wp(335),
    height: hp(101.54),
    backgroundColor: colors.skipbtn,
    alignSelf: 'center',
    borderRadius: wp(15.53),
    marginBottom: hp(8.46),
  },
  title: {
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font7),
    fontFamily: fonts.regular,
  },
  date: {
    color: colors.colorDot1,
    fontFamily: fonts.regular,
    fontSize: totalSize(fontSizes.font8),
  },
  headerflatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(10),
    marginTop: hp(8.4),
  },
  content: {
    color: colors.colorDot1,
    fontFamily: fonts.regular,
    fontSize: totalSize(fontSizes.font1),
    paddingHorizontal: wp(20),
  },
});
