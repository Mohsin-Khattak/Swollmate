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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    marginTop: hp(20),
  },
  cartView: {
    width: wp(336),
    height: hp(281),
    marginTop: hp(28),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 2,
    backgroundColor: colors.colorwhite,
    borderRadius: wp(20),
  },
  image: {
    width: wp(66),
    height: hp(66),
  },
  headercart: {
    flexDirection: 'row',
    paddingHorizontal: wp(23),
    justifyContent: 'space-between',
    marginTop: hp(17),
  },
  nameview: {
    marginRight: wp(45),
    width: wp(143),
  },
  txtname: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font10),
  },
  dateview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(12),
  },
  date: {
    color: colors.colorblack,
    fontFamily: fonts.medium,
    fontSize: totalSize(fontSizes.font7),
  },
  txtLocation: {
    color: colors.colorblack,
    marginLeft: wp(25),
    fontFamily: fonts.bold,
    marginTop: hp(39),
    fontSize: totalSize(fontSizes.font10),
  },
  mapview: {
    flexDirection: 'row',
    paddingHorizontal: wp(26),
    justifyContent: 'space-between',
    marginRight: wp(145),
    marginTop: hp(28.68),
  },
  txtcity: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
  },
  remainingtxt: {
    color: colors.colorButton,
    textAlign: 'center',
    marginTop: hp(42.32),
    fontSize: totalSize(fontSizes.font7),
    fontFamily: fonts.medium,
  },
  canclebtn: {
    marginTop: hp(154),
    backgroundColor: colors.colorMahron,
  },
  btnname: {
    color: colors.colorwhite,
  },
});
