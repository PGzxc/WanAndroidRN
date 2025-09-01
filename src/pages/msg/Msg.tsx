import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {commonStyles} from "../../styles/common";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
//import {NavigationContainer} from "@react-navigation/native";
import {MsgReadPage} from "./MsgReadPage";
import {MsgUnReadPage} from "./MsgUnReadPage";

/**
 * desc：消息
 * @constructor
 */
const Msg = ({navigation, route}) => {
    const tabs = [
        {title: '未读消息'},
        {title: '已读消息'},
    ]
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <Tab.Navigator  screenOptions={{tabBarLabelStyle: {fontSize: 16}}}>
                <Tab.Screen name="未读消息" component={MsgUnReadPage} initialParams={{navigation: navigation}}/>
                <Tab.Screen name="已读消息" component={MsgReadPage} initialParams={{navigation: navigation}}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
};

export default withSafeAreaInsets(Msg);
