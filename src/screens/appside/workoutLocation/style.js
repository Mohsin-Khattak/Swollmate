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
    width: '100%',
    height: hp(513),
    marginTop: hp(24),
  },
  cart: {
    width: wp(140),
    height: hp(140),
    backgroundColor: colors.colorwhite,
    marginLeft: hp(34),
    borderRadius: wp(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  locationName: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
    marginTop: hp(14.85),
  },
  locView: {
    alignItems: 'center',
  },
  map: {
    marginTop: hp(44),
  },
});
