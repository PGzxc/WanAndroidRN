import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Home from "../pages/home/Home";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Project from '../pages/project/Project';
import Msg from '../pages/msg/Msg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navi from '../pages/navi/Navi';
import Mine from '../pages/mine/Mine';


const Tab = createBottomTabNavigator();
export const NaviTabs = () =>
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#e91e63'}}>
        <Tab.Screen name="首页" component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="home" color={color} size={size}/>
                        ),
                    }}
        />
        <Tab.Screen name="导航" component={Navi}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="list" color={color} size={size}/>
                        ),
                    }}
        />
        <Tab.Screen name="项目" component={Project}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="briefcase" color={color} size={size}/>
                        ),
                    }}
        />
        <Tab.Screen name="消息" component={Msg}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="envelope" color={color} size={size}/>
                        ),
                    }}
        />
        <Tab.Screen name="我的" component={Mine}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="user" color={color} size={size}/>
                        ),
                    }}
        />
    </Tab.Navigator>;


