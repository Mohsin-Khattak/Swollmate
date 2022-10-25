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
  upgrade: {
    marginTop: hp(28),
  },
  txt: {
    textDecorationLine: 'underline',
  },
  plane: {
    marginTop: hp(23),
  },
  txtlocation: {
    color: colors.colorChange,
    textDecorationLine: 'underline',
  },
  txtlogout: {
    color: colors.colorMahron,
  },
});
