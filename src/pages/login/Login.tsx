import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, Text} from "react-native";
import {commonStyles} from "../../styles/common";

import {withSafeAreaInsets} from "react-native-safe-area-context";

const Login = () => {

        //全部接口
        useEffect(() => {

        }, [])  //加[]空数组，是为了产生死循环

        return (
            <SafeAreaView style={[commonStyles.safeAreaContainer]}>
                <Text>Login</Text>
            </SafeAreaView>
        )
    }
;

export default withSafeAreaInsets(Login);