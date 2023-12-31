import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {commonStyles} from "../../styles/common";
import MineHead from "../../components/MineHead";

/**
 * @desc：我的界面
 * @constructor
 */
const Mine = (props) => {
    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <MineHead  {...props}/>
        </SafeAreaView>
    )
};

export default withSafeAreaInsets(Mine);
