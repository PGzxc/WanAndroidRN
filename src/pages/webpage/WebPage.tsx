import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, SafeAreaView, Text, View} from "react-native";
import {commonStyles} from "../../styles/common";
import {withSafeAreaInsets} from "react-native-safe-area-context";
import WebView from "react-native-webview";


const WebPage = ({navigation, route, insets}) => {
        const {width: kW, height: kH} = Dimensions.get('window');
        const [progress, setProgress] = useState(0);
        const {link, url, title} = route.params;
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
