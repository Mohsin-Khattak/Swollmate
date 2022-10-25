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
  mainContainer: {
    // height: hp(290),
    width: wp(336),
    alignSelf: 'center',
    // alignItems: 'center',
    marginTop: hp(28),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.colorwhite,
    borderRadius: wp(20),
  },
  datepickView: {
    marginTop: hp(34),
    flexDirection: 'row',
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
  },
  work: {
    color: colors.colorblack,
    fontSize: totalSize(fontSizes.font13),
    fontFamily: fonts.semiBold,
  },
  schdulebtn: {
    marginTop: hp(25),
  },
  calendarView: {
    height: hp(395),
  },
  pickerView: {
    borderBottomWidth: wp(1),
    borderBottomColor: colors.colorDot,
    width: wp(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
