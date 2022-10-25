import React, {useState, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackScreen, DateTime, Notification, Watch} from '../../../assets/svgs';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../../assets/colors';
import {fonts} from '../../../assets/fontss';
import {SimpleButton} from '../../../components/buttons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
const ScheduleClander = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  const [selected, setSelected] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = time => {
    console.warn('A date has been picked: ', time);
    setWorkTime(moment(time).format('HH:MM'));
    hideDatePicker();
  };

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: colors.colorButton,
        selectedTextColor: colors.colorwhite,
      },
    };
  }, [selected]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScheduleWorkout')}>
          <BackScreen style={styles.backmove} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.gendertxt}>Schedule Workout</Text>
      <Text style={styles.choosetxt}>
        Schedule your workout with your partner
      </Text>
      <View style={styles.calendarView}>
        <Calendar
          style={styles.mainContainer}
          initialDate={new Date()}
          markedDates={marked}
          // minDate={new Date()}
          onDayPress={day => {
            setSelected(day?.dateString);
            let _day = day.day;
            let _month = day.month;
            let _year = day.year;
            setCurrentDate(`${_day}/${_month}/${_year}`);
          }}
          theme={{
            calendarBackground: 'transparent',
            textSectionTitleColor: '#767374',
            textSectionTitleDisabledColor: '#d9e1e8',
            // selectedDayBackgroundColor: '#242424',
            // selectedDayTextColor: colors.colorblack,
            // todayBackgroundColor: '#82EF00',
            todayTextColor: 'blue',
            dayTextColor: '#242424',
            textDisabledColor: '#7B7B7B',
            //   dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: colors.colorButton,
            // disabledArrowColor: '#d9e1e8',
            arrowColor: '#82EF00',
            monthTextColor: 'black',
            //   indicatorColor: 'blue',
            // textDayFontFamily: 'monospace',
            textMonthFontFamily: fonts.regular,
            textDayHeaderFontFamily: fonts.regular,
            textDayFontWeight: '500',
            textDayHeaderFontWeight: '500',
            textDayFontSize: 12,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 12,
          }}
        />
      </View>
      <View style={styles.datepickView}>
        <Text style={styles.work}>Workout Date</Text>
        <View style={styles.pickerView}>
          <Text style={styles.work}>{currentDate}</Text>
          <DateTime />
        </View>
      </View>
      <View style={styles.datepickView}>
        <Text style={styles.work}>Workout Time</Text>
        <TouchableOpacity
          onPress={() => showDatePicker(true)}
          style={styles.pickerView}>
          <Text style={styles.work}>{workTime}</Text>
          <Watch />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <SimpleButton
        onPress={() => navigation.navigate('WorkoutLocation')}
        title="Schedule"
        style={styles.schdulebtn}
      />
    </View>
  );
};
export default ScheduleClander;
