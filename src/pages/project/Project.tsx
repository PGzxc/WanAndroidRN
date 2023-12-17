import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {projectListReq, projectReq} from "../../api/network";
import {commonStyles} from "../../styles/common";
import {TreeChildList} from "../../components/TreeChildList";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Project = ({navigation, route}) => {

    const [tabDatas, setTabDatas] = useState([]) //Tab标签
    const [activeId, setActiveId] = useState(null); //选中Tab-ID
    const Tab = createMaterialTopTabNavigator();

    useEffect(() => {
        projectReq().then((res) => {
            console.log('res>>>', JSON.stringify(res));
            setTabDatas(res.data);
            setActiveId(res.data[0].id);
        })
    }, []) //加[]空数组，是为了产生死循环
    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <NavigationContainer independent={true}>
                {
                    tabDatas != null && tabDatas.length > 0 && <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: {fontSize: 12},
                        tabBarActiveTintColor: 'blue',
                        tabBarInactiveTintColor: 'gray',
                        tabBarItemStyle: {width: 100},
                        tabBarScrollEnabled: true,
                        lazy: true,
                        lazyPreloadDistance: 0
                    }}>
                        {
                            tabDatas.map((tabItem, index) => {
                                return (
                                    <Tab.Screen key={tabItem.id} name={tabItem.name} component={TreeChildList}
                                                initialParams={{
                                                    tabId: tabItem.id,
                                                    NetWorkApi: projectListReq,
                                                    navigation: navigation
                                                }}/>
                                )
                            })
                        }
                    </Tab.Navigator>
                }
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default withSafeAreaInsets(Project);
