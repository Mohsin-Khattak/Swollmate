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
  cart: {
    width: wp(336),
    backgroundColor: colors.colorwhite,
    alignSelf: 'center',
    marginTop: hp(36),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingBottom: 20,
    elevation: 2,
    borderRadius: wp(20),
  },
  cartheader: {
    flexDirection: 'row',
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    marginTop: hp(17),
  },
  img: {
    width: wp(66),
    height: hp(66),
    borderRadius: wp(10),
  },
  name: {
    marginRight: wp(90),
  },
  nametxt: {
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font10),
    color: colors.colorblack,
  },
  matchTxt: {
    fontFamily: fonts.medium,
    fontSize: totalSize(fontSizes.font7),
    marginTop: hp(12),
  },
  photostxt: {
    marginLeft: wp(20),
    marginTop: hp(26.73),
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font7),
    fontFamily: fonts.bold,
  },
  flatlistImg: {
    width: wp(94),
    height: hp(100),
    borderRadius: wp(15),
    marginRight: wp(4.76),
  },
  skill: {
    marginRight: wp(14.76),
  },
});
