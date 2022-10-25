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
  },
  header: {
    width: wp(375),
    flexDirection: 'row',
    marginTop: hp(10),
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderimage: {
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    width: wp(335),
    height: hp(619),
    marginLeft: wp(20),
  },
  swiperview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalmainView: {
    backgroundColor: 'black',
    width: wp(335),
    borderTopRightRadius: wp(20),
    borderTopLeftRadius: wp(20),
    height: hp(80),
    position: 'absolute',
    bottom: hp(0),
    marginLeft: wp(20),
  },
  innerModalView: {
    alignSelf: 'center',
    // flex: 1,
    position: 'absolute',
    bottom: hp(0),
    minHeight: hp(719),
    width: wp(370),
    backgroundColor: 'black',
    marginHorizontal: wp(20),
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
  },

  titleAnnette: {
    color: colors.colorwhite,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font6),
    marginLeft: wp(26),
    marginTop: hp(23),
  },
});
