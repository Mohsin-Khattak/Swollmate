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
  recent: {
    color: colors.colorDot,
    fontFamily: fonts.semiBold,
    marginTop: hp(12),
    fontSize: totalSize(fontSizes.font7),
  },
  nameview: {
    width: wp(250),
    marginLeft: wp(14),
  },
  innerflatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(23),
    paddingRight: wp(130),
    marginTop: hp(19),
  },
});
