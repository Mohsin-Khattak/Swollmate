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
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
  },
  gendertxt: {
    color: colors.colorblack,
    fontFamily: fonts.semiBold,
    fontSize: totalSize(fontSizes.font5),
    marginLeft: wp(20),
    marginTop: hp(34),
  },
  choosetxt: {
    color: colors.colorblack,
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
    marginLeft: wp(20),
    marginTop: hp(13),
  },
  uperphoto: {
    width: wp(154),
    height: hp(154),
    backgroundColor: colors.skipbtn,
    borderRadius: wp(25),
    marginLeft: wp(20),
    marginTop: hp(21),
  },
  imageadd: {
    width: wp(154),
    height: hp(154),
    borderRadius: wp(25),
  },
  chnageImageTxt: {
    color: 'green',
    fontFamily: fonts.bold,
    fontSize: totalSize(fontSizes.font1),
    textDecorationLine: 'underline',
    marginLeft: wp(20),
    marginTop: hp(3),
  },
  addsvg: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: hp(70),
  },
  txtinputview: {
    marginTop: hp(45),
  },
  Updatebtn: {
    marginTop: hp(59),
  },
});
