import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import * as Utils from '../../utils/Utils'
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {styles} from "./styles";
import * as ToastUtils from '../../utils/ToastUtils'
import {loginReq, registerReq} from "../../api/network";

const Login = ({navigation, route, insets}) => {

        //全部接口
        useEffect(() => {

        }, [])  //加[]空数组，是为了产生死循环

        const [userName, onChangeUserName] = React.useState('');
        const [password, onChangePassword] = React.useState('');
        const [repassword, onChangeRepassword] = React.useState('');
        const [isRegister, onChangeRegister] = React.useState(false);

        const login = (userName: string, password: string) => {
            if (Utils.isEmpty(userName) || Utils.isEmpty(password)) {
                ToastUtils.failToast("用户名或密码为空")
                return
            }
            console.log("login===>", userName, password)
            loginReq(userName, password).then((result) => {
                console.log("登录结果===>", result)
                if (!Utils.isEmpty(result.data)) {
                    navigation.replace("BottomTab")
                    //navigation.back() //直接back出错
                } else {
                    ToastUtils.failToast(`登录出错：${result.msg}`)
                }
            }).catch((err) => {
                console.log("login error", err)
                ToastUtils.failToast(`登录出错：${err.data}`)
            })
        }
        const register = (userName: string, password: string, repassword) => {
            if (Utils.isEmpty(userName) || Utils.isEmpty(password) || Utils.isEmpty(repassword)) {
                ToastUtils.failToast("用户名、密码或确认密码为空")
                return
            }
            console.log("register===>", userName, password, repassword)
            registerReq(userName, password, repassword).then((result) => {
                console.log("注册结果===>", result)
                if (!Utils.isEmpty(result.data)) {
                    navigation.replace("BottomTab")
                    //navigation.back() //直接back出错
                } else {
                    ToastUtils.failToast(`注册出错：${result.msg}`)
                }
            }).catch((err) => {
                console.log("login error", err)
                ToastUtils.failToast(`注册出错：${err.data}`)
            })
        }

        return (
            <View style={styles.container}>

                <View style={{alignItems: "center", justifyContent: "center", marginBottom: 50}}>
                    <Image
                        style={{width: 50, height: 50, alignItems: "center", justifyContent: "center"}}
                        source={require('../../../assets/ic_logo.png.png')}/>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>{!isRegister ? "登录界面" : "注册界面"}</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "normal",
                        color: 'gray'
                    }}>{!isRegister ? "登录账号以使用更多功能" : "注册账号以使用更多功能"}</Text>
                </View>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="用户名"
                           placeholderTextColor="#9a73ef"
                           autoCapitalize="none"
                           value={userName}
                           onChangeText={text => onChangeUserName(text)}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="密码"
                           placeholderTextColor="#9a73ef"
                           autoCapitalize="none"
                           value={password}
                           secureTextEntry={true}
                           onChangeText={text => onChangePassword(text)}/>

                {
                    isRegister && <TextInput style={styles.input}
                                             underlineColorAndroid="transparent"
                                             placeholder="确认密码"
                                             placeholderTextColor="#9a73ef"
                                             autoCapitalize="none"
                                             value={repassword}
                                             secureTextEntry={true}
                                             onChangeText={text => onChangeRepassword(text)}/>
                }
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => !isRegister ? login(userName, password) : register(userName, password, repassword)}>
                    <Text style={styles.submitButtonText}> {!isRegister ? "登录" : "注册"} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{alignItems: "center", justifyContent: "center", marginBottom: 50}}
                    onPress={() => {
                        onChangeRegister(!isRegister)
                        onChangeUserName("")
                        onChangePassword("")
                        onChangeRepassword("")
                    }}>
                    <Text style={{
                        color: "blue",
                        justifyContent: "center",
                        alignItems: "center"
                    }}> {!isRegister ? "没有账号，去注册" : "已有账号，去登陆"} </Text>
                </TouchableOpacity>
            </View>
        )
    }
;

export default withSafeAreaInsets(Login);
