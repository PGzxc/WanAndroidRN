/**
 * @desc：登录、注册页面样式
 */

import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
    },
    input: {
        margin: 15,
        height: 40,
        padding: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 5
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: "center"
    }
})
