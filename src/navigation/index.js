import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StatusBar} from 'react-native';

import {colors} from '../assets/colors';
import {AuthNavigator} from './authNavigation';
import {AppNav} from './appNavigation';

const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={colors.colorwhite}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          <Stack.Screen name="AppNav" component={AppNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
