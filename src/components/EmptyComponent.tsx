import {Dimensions, Text, View} from "react-native";
import React from "react";

const {width: kW, height: kH} = Dimensions.get('window');
/**
 * @desc：没有数据时显示
 */
export default function () {
    return <View style={{
        width: kW,
        height: kH,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Text style={{fontSize: 16}}>暂无数据下拉刷新</Text>
    </View>
}
