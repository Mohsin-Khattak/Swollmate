import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../../screens/appside/home';
import Profile from '../../screens/appside/profile';
import FavMatches from '../../screens/appside/favourite';
import Messages from '../../screens/appside/messages';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../drawer';
import {
  TermAndCondation,
  PrivacyPolicy,
  Notification,
  Matched,
  ScheduleWorkout,
  SettingScreen,
  EditProfile,
  Workout,
  SwipesUpgrade,
  UpgradePlan,
  Payment,
  PaymentDone,
  VerifyAccount,
  VerifyAccountImage,
  DocumentDone,
  Conversion,
  ScheduleWorkoutDone,
  WorkoutLocation,
  ScheduleClander,
  VideoCalling,
  FavouriteOne,
} from '../../screens/appside';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="home"
              size={20}
              color={focused ? 'black' : '#C4C4C4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="user"
              size={20}
              color={focused ? 'black' : '#C4C4C4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={FavMatches}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="favorite-border"
              size={20}
              color={focused ? 'black' : '#C4C4C4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="message-circle"
              size={20}
              color={focused ? 'black' : '#C4C4C4'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export const AppNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerStyle: {width: '100%'}}}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
      <Drawer.Screen name="ScheduleWorkout" component={ScheduleWorkout} />
      <Drawer.Screen name="TermAndCondation" component={TermAndCondation} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Matched" component={Matched} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Workout" component={Workout} />
      <Drawer.Screen name="SwipesUpgrade" component={SwipesUpgrade} />
      <Drawer.Screen name="UpgradePlan" component={UpgradePlan} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="PaymentDone" component={PaymentDone} />
      <Drawer.Screen name="VerifyAccount" component={VerifyAccount} />
      <Drawer.Screen name="VerifyAccountImage" component={VerifyAccountImage} />
      <Drawer.Screen name="DocumentDone" component={DocumentDone} />
      <Drawer.Screen name="Conversion" component={Conversion} />
      <Drawer.Screen
        name="ScheduleWorkoutDone"
        component={ScheduleWorkoutDone}
      />
      <Drawer.Screen name="WorkoutLocation" component={WorkoutLocation} />
      <Drawer.Screen name="ScheduleClander" component={ScheduleClander} />
      <Drawer.Screen name="VideoCalling" component={VideoCalling} />
      <Drawer.Screen name="FavouriteOne" component={FavouriteOne} />
    </Drawer.Navigator>
  );
};
