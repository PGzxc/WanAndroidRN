import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {commonStyles} from "../../styles/common";
import {Tabs} from "@ant-design/react-native";
import {styles} from "./styles";

/**
 * desc：消息
 * @constructor
 */
const Msg = () => {
    const tabs = [
        {title: '未读消息'},
        {title: '已读消息'},
    ]

    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <Tabs tabs={tabs}>
                <View style={styles.msgContent}>
                    <Text>没有未读消息</Text>
                </View>
                <View style={styles.msgContent}>
                    <Text>已读消息</Text>
                </View>
            </Tabs>
        </SafeAreaView>
    )
};

export default withSafeAreaInsets(Msg);
