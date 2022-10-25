import {StyleSheet} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {colors} from '../../assets/colors';
import {fontSizes} from '../../assets/fontSize';
import {fonts} from '../../assets/fontss';
import {hp, wp} from '../../services/dimensions';

export const styles = StyleSheet.create({
  flatlist: {
    width: wp(335),
    flexDirection: 'row',
    paddingHorizontal: wp(10),
    height: hp(79),
    backgroundColor: colors.backgroundTxtInput,
    alignSelf: 'center',
    borderRadius: wp(15),

    justifyContent: 'space-between',
  },
  imageview: {
    flexDirection: 'row',
    width: wp(270),
  },
  image: {
    width: wp(50),
    height: hp(55),
    borderRadius: wp(55),
    marginTop: hp(12),
  },
  name: {
    marginTop: hp(20),
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font9),
  },
  active: {
    color: colors.colorDot1,
    fontSize: totalSize(fontSizes.font4),
    fontFamily: fonts.regular,
    marginTop: hp(2),
  },
  time: {
    color: colors.colorDot1,
    fontSize: totalSize(fontSizes.font4),
    fontFamily: fonts.regular,
    marginTop: hp(23),
  },
  nameview: {
    marginRight: wp(85),
    paddingLeft: wp(15),
  },
  activesvg: {
    position: 'absolute',
    marginLeft: wp(41),
    marginTop: hp(45),
  },
});
