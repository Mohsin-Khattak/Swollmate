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
  skillview: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: wp(3),
  },
  selectedTxt: {
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font1),
    fontFamily: fonts.semiBold,
    marginLeft: wp(20),
  },
  selectedBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(10),
    paddingLeft: wp(20),
    paddingHorizontal: wp(50),
  },
  skillMainView: {
    width: wp(300),
    height: hp(180),
    marginLeft: wp(20),
    marginTop: hp(13),
  },
  skilltxt: {
    marginTop: hp(30),
    color: colors.colorblack,
    marginLeft: wp(20),
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
  },
  slectedView: {
    marginTop: hp(31),
    width: wp(375),
    height: hp(502),
  },
  continueBtn: {
    marginTop: hp(27),
  },
  skillbtn: {
    backgroundColor: colors.skilbtn,
  },
  skillflatlist: {
    height: hp(32),
    marginTop: hp(13),
  },
  categoryview: {
    marginTop: hp(19),
    height: hp(80),
  },
  skillviewbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp(20),
  },
  goalview: {
    marginTop: hp(10),
    height: hp(80),
  },
  notselected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notselecttxt: {
    color: colors.colorDot,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
  },
});
