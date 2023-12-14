import 'react-native-gesture-handler'; // 手势组件
import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NaviConfigs, TabConfigs} from "./config";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {createStackNavigator} from "@react-navigation/stack";


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
const Navi = createStackNavigator();


export function BottomTab() {
    const listeners = ({navigation}) => ({
        tabPress: async (e) => {
            console.log('\n', 'e=>', e.target);
        },
    })
    return (
        <Tab.Navigator>
            {
                TabConfigs.map((tabItem) => {
                    return (
                        <Tab.Screen key={tabItem.title} name={tabItem.title} component={tabItem.component} listeners={listeners} props={''} options={{
                            title: tabItem.title,
                            headerShown: tabItem.headerShown,
                            tabBarInactiveTintColor: '#8a8a8a',  // 非选中文字和图标的颜色
                            tabBarActiveTintColor: '#e91e63',   // 选中文字和图标的颜色
                            tabBarHideOnKeyboard: true,    // 打开键盘时，选项卡是否隐藏
                            tabBarIcon: (({color, size, focused}) => (
                                <FontAwesome name={focused ? tabItem.select : tabItem.normal} color={color}
                                             size={size}/>))
                        }}/>
                    );
                })
            }
        </Tab.Navigator>
    );
}


export function AppNavi() {
    return (
        <Stack.Navigator>
            {
                NaviConfigs.map((naviItem) => {
                    return <Stack.Screen key={naviItem.name} name={naviItem.name} component={naviItem.component}
                                         options={({route}) => ({
                                             headerTitle: naviItem.title,
                                             headerShown: naviItem.headerShown,
                                             headerLeftLabelVisible: false,
                                         })}/>
                })
            }
        </Stack.Navigator>
    )
}


