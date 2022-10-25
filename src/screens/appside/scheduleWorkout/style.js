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
  flatlistMainView: {
    marginTop: hp(35),
    flex: 1,
  },
  notifiView: {
    width: wp(336),
    height: hp(99),
    marginTop: hp(10),
    backgroundColor: colors.colorwhite,
    alignSelf: 'center',
    borderRadius: wp(20),
    marginBottom: hp(8.46),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Man1: {
    width: wp(66),
    height: hp(66),
    borderRadius: wp(10),
  },
  name: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font6),
  },
  date: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    marginTop: hp(12),
    fontSize: totalSize(fontSizes.font7),
  },
  innerflatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(23),
    paddingRight: wp(130),
    marginTop: hp(19),
  },
});
