/*
 * @file: navigation.js
 * @description: Navigation for react-native
 * @date: 1st Jan 2020
 * @author: Ramakrishna
 */
import React from 'react';
import {Dimensions, Image} from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
    StackViewTransitionConfigs,
} from 'react-navigation';

import {fonts} from '../utils';
//import AndroidSplash from '../screens/AndroidSplash'
import SplashScreen from '../SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';

import Home_Activity from '../screens/tabs/Home_Activity.js';
import Calendar_Activity from '../screens/tabs/Calendar_Activity.js';
import MyClients_Activity from '../screens/tabs/MyClients_Activity';
import Profile_Activity from '../screens/tabs/Profile_Activity';
import colors from '../utils/colors';

// authentication stack for navigation
const AuthStack = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        // AnswerScreen: AnswerScreen,
        // ResetPassword: ResetPassword,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2696d6',
            },
            headerTitleStyle: {
                fontFamily: fonts.LatoRegular,
            },
            headerBackTitle: null,
            headerTintColor: '#FFFFFF',
        },
    },
);

const DashboardTab = createStackNavigator(
    {
        Dashboard: Home_Activity,

    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2696d6',
            },
            headerTintColor: '#fff',
            headerBackTitle: null,
        },
    },
);

const CalendarTab = createStackNavigator(
    {
        Calendar: Calendar_Activity,
        //Detail: JobDetail,

    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2696d6',
            },
            headerTintColor: '#fff',
            headerBackTitle: null,
        },
    },
);

const MyClientTab = createStackNavigator(
    {
        MyClients: MyClients_Activity,
        //ClientDetail: ClientDetail,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.appColor,
            },
            headerTintColor: '#FFFFFF',
            title: 'My Clients',
        },
    },
);

const ProfileTab = createStackNavigator(
    {
        Profile: Profile_Activity,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.appColor,
            },
            headerTintColor: '#FFFFFF',
            title: 'Profile',
        },
        header: null,
        headerMode: 'none',
        cardStyle: {
            backgroundColor: '#E6E5EB',
        },
    },
);

const MainApp = createBottomTabNavigator(
    {
        Dashboard: DashboardTab,
        Calendar: CalendarTab,
        MyClients: MyClientTab,
        Profile: ProfileTab,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (focused) {
                    if (routeName === 'Dashboard') {
                        return (
                            <Image
                                source={require('../assets/images/dashboardtab/dashboard_blue.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    } else if (routeName === 'Calendar') {
                        return (
                            <Image
                                source={require('../assets/images/calendartab/calendar_blue.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    } else if (routeName === 'MyClients') {
                        return (
                            <Image
                                source={require('../assets/images/myclientstab/myclients_blue.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require('../assets/images/profiletab/profile_blue.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    }
                } else {
                    if (routeName === 'Dashboard') {
                        return (
                            <Image
                                source={require('../assets/images/dashboardtab/dashboard_gray.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    } else if (routeName === 'Calendar') {
                        return (
                            <Image
                                source={require('../assets/images/calendartab/calendar_gray.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    } else if (routeName === 'MyClients') {
                        return (
                            <Image
                                source={require('../assets/images/myclientstab/myclients_gray.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require('../assets/images/profiletab/profile_gray.png')}
                                style={{width: 20, height: 20}}
                            />
                        );
                    }
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#2696d6',
            inactiveTintColor: '#040507',
        },
    },
);

export default createAppContainer(
    createSwitchNavigator(
        {
            //App: Drawer,
            SplashScreen: SplashScreen,
            Auth: AuthStack,
            Home: MainApp,
        },
        {
            //TODO: Change Home -> SplashScreen
            initialRouteName: 'SplashScreen',
        },
    ),
);
