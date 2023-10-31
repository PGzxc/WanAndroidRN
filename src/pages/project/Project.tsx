import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {projectListReq, projectReq} from "../../api/network";
import {commonStyles} from "../../styles/common";
import {Tabs} from "@ant-design/react-native";
import TreeChildList from "../../components/TreeChildList";

const Project = (props) => {

    const [tabDatas, setTabDatas] = useState([]) //Tab标签
    const [activeId, setActiveId] = useState(null); //选中Tab-ID

    useEffect(() => {
        projectReq().then((res) => {
            console.log('res>>>', JSON.stringify(res));
            setTabDatas(res.data);
            setActiveId(res.data[0].id);
        })
    }, []) //加[]空数组，是为了产生死循环
    const _renderTab = ({id, name,}) => {
        // console.log('tab.name>>>', name);
        return (
            <Text style={{
                marginHorizontal: 10,
                fontSize: 15,
                fontWeight: '700',
                color: activeId === id ? 'blue' : '#333'
            }}>
                {name}
            </Text>
        );
    }
    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <Tabs style={{flex: 1, backgroundColor: '#eee', height: 45}}
                  tabBarUnderlineStyle={{backgroundColor: 'blue'}} tabs={tabDatas} renderTab={_renderTab}
                  onChange={(c) => {
                      setActiveId(c.id);
                  }}>
                {
                    tabDatas.map((tab) => {
                        return (
                            <View key={tab.id} style={{flex: 1}}>
                                <TreeChildList {...props} {...{tabId: tab.id, NetWorkApi: projectListReq}}/>
                            </View>
                        )
                    })
                }
            </Tabs>
        </SafeAreaView>
    );
}

export default withSafeAreaInsets(Project);
