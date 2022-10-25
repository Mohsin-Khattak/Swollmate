import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../assets/colors';
import {fontSizes} from '../../assets/fontSize';
import {fonts} from '../../assets/fontss';
import {hp, wp} from '../../services/dimensions';

export const styles = StyleSheet.create({
  ButtonStyle: {
    width: wp(335),
    height: hp(51),
    backgroundColor: colors.colorButton,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  ButtonTxt: {
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font2),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  SkillButton: {
    width: wp(89.94),
    height: hp(32.63),
    backgroundColor: colors.colorButton,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  skillButtonTxt: {
    color: colors.colorwhite,
    fontSize: totalSize(fontSizes.font4),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  SecondaryButton: {
    width: wp(336),
    height: hp(65),
    backgroundColor: colors.colorwhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
    borderRadius: wp(20),
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: hp(17),
    justifyContent: 'space-between',
  },
  nametxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font10),
    marginTop: hp(21),
  },
  nametxt1: {
    color: colors.colorButton,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font10),
  },
  upgradeTxt: {
    color: colors.colorButton,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font10),
    marginTop: hp(21),
  },
});
