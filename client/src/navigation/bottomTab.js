import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import {appColor} from '../assets/colors';
import HomeScreen from '../screens/home';
import SettingScreen from '../screens/setting';
import NotificationScreen from '../screens/notification';
import TestScreen from '../screens/test/testPushNotification';

//icon
import DashboardIcon from '../assets/images/dashboard.svg';
import DashboardIconFocused from '../assets/images/dashboardFocused.svg';
import Discount from '../assets/images/discount.svg';
import DiscountFocused from '../assets/images/discountFocused.svg';
import Notify from '../assets/images/bell.svg';
import NotifyFocused from '../assets/images/bellFocused.svg';
import UserIcon from '../assets/images/user.svg';
import UserIconFocused from '../assets/images/userFocused.svg';
import {appFont} from '../assets/fonts';

const Bottom = () => {
  const Tab = createBottomTabNavigator();
  const {notificationNumber} = useSelector(s => s.notification);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return focused ? (
              <DashboardIconFocused width={25} height={25} />
            ) : (
              <DashboardIcon width={25} height={25} />
            );
          } else if (route.name === 'DiscountScreen') {
            return focused ? (
              <DiscountFocused width={25} height={25} />
            ) : (
              <Discount width={25} height={25} />
            );
          } else if (route.name === 'NotificationScreen') {
            return focused ? (
              <NotifyFocused width={25} height={25} />
            ) : (
              <Notify width={25} height={25} />
            );
          } else if (route.name === 'SettingScreen') {
            return focused ? (
              <UserIconFocused width={25} height={25} />
            ) : (
              <UserIcon width={25} height={25} />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: appColor.primary,
        inactiveTintColor: 'black',
        style: {
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DiscountScreen" component={TestScreen} />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarBadge: notificationNumber,
          tabBarBadgeStyle: {
            position: 'absolute',
            top: 10,
            left: 10,
            fontFamily: appFont.Medium,
            fontSize: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default Bottom;
