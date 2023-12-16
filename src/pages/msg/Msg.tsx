import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {commonStyles} from "../../styles/common";
import {Tabs} from "@ant-design/react-native";
import {styles} from "./styles";
import MsgReadList from "./MsgReadPage";
import MsgUnReadList from "./MsgUnReadPage";
import MsgReadPage from "./MsgReadPage";
import MsgUnReadPage from "./MsgUnReadPage";

/**
 * desc：消息
 * @constructor
 */
const Msg = (props) => {
    const tabs = [
        {title: '未读消息'},
        {title: '已读消息'},
    ]

    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <Tabs tabs={tabs}>
                <View style={styles.msgContent}>
                    <MsgUnReadPage {...props}/>
                </View>
                <View style={styles.msgContent}>
                    <MsgReadPage {...props}/>
                </View>
            </Tabs>
        </SafeAreaView>
    )
};

export default withSafeAreaInsets(Msg);
