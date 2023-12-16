import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, SafeAreaView, Text, View} from "react-native";
import {commonStyles} from "../../styles/common";
import {withSafeAreaInsets} from "react-native-safe-area-context";
import WebView from "react-native-webview";
import * as Utils from "../../utils/Utils"

/**
 * @desc：网页详情
 * @param navigation
 * @param route
 * @param insets
 * @constructor
 */
const WebPage = ({navigation, route, insets}) => {
        const {width: kW, height: kH} = Dimensions.get('window');
        const [progress, setProgress] = useState(0);
        let {link, url, title} = route.params;
        if (!Utils.isEmpty(link)) {  //用于处理msg消息中link不完整
            link = link.startsWith("https") ? link : "https://wanandroid.com" + link
        }
        const _renderProgressView = (
            progress < 1 && (
                <View style={{position: 'absolute', zIndex: 1000, width: kW, height: 2, backgroundColor: '#fff'}}>
                    <View style={{width: kW * progress, height: 2, backgroundColor: 'blue'}}/>
                </View>
            )
        );
        useEffect(() => {
            navigation.setOptions({headerTitle: title}) //设置标题
        }, [])

        return (
            <SafeAreaView style={[commonStyles.safeAreaContainer, {marginBottom: -insets.bottom}]}>
                {_renderProgressView}
                <WebView style={{flex: 1}} source={{uri: link || url}} onLoadProgress={(e) => {
                    //console.log('>>>', e.nativeEvent.progress);
                    const progress = e.nativeEvent.progress;
                    setProgress(progress)
                }}/>
            </SafeAreaView>
        );
    }
;

export default withSafeAreaInsets(WebPage);
