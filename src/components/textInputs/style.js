import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../assets/colors';
import {fontSizes} from '../../assets/fontSize';
import {fonts} from '../../assets/fontss';
import {hp, wp} from '../../services/dimensions';
export const styles = StyleSheet.create({
  viewtxtInput: {
    width: wp(335),
    height: hp(51),
    backgroundColor: colors.backgroundTxtInput,
    borderRadius: wp(15),
    alignSelf: 'center',
    marginBottom: hp(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  txtinput: {
    fontSize: totalSize(fontSizes.font1),
    fontFamily: fonts.semiBold,
    color: colors.FontTxtInput,
    flex: 1,
    color: colors.colorblack,
  },
  containerstyle: {
    marginTop: hp(40),
  },
  txtdob: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font1),
  },
});
