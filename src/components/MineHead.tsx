/**
 * @desc：我的-头部
 */
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, {useEffect, useState} from "react";
import {Grid} from '@ant-design/react-native'
import {userInfUrlReq} from "../api/network";
import * as Utils from "../utils/Utils"

export default function (props) {
    const {navigation} = props;
    const [hasLogin, setHasLogin] = useState(true) //是否登录
    const [level, setLevel] = useState(0) //当前等级
    const [rank, setRank] = useState(0) //当前排名
    const [coinCount, setCoinCount] = useState(0) //积分
    const [total, setTotal] = useState(0) //收藏
    const [userName, setUserName] = useState("") //用户名

    const [userData, setUserData] = useState({
        coinInfo: {level: '', rank: '', coinCount: ''},
        collectArticleInfo: {},
        userInfo: {username: '', collectIds: []}
    }) //用户信息
    const gridData = [
        {
            name: "工具",
            backgroundColor: "blue"
        },
        {
            name: "问答",
            backgroundColor: "aqua"
        },
        {
            name: "消息",
            backgroundColor: "green"
        },
        {
            name: "课程",
            backgroundColor: "plum"
        },
        {
            name: "待办清单",
            backgroundColor: "gold"
        },
        {
            name: "分享文章",
            backgroundColor: "red"
        },
    ]
    useEffect(() => {
        userInfUrlReq().then((result) => {
            console.log("userInfo===>", JSON.stringify(result.data))
            setUserData(result.data)
        }).catch((err) => {
            setUserData(null)
            console.log("userInfo=error==>", err)
        })
    }, [])

    //grid-item-自定义
    const _renderItem = (item) => {
        console.log(JSON.stringify(item));
        return (
            <View style={{backgroundColor: item.backgroundColor, flex: 1}}>
                <TouchableOpacity activeOpacity={0.5}
                                  style={{justifyContent: 'center', alignItems: "center", display: "flex", flex: 1}}
                                  onPress={() => {
                                      console.log(JSON.stringify(item));
                                  }}>
                    <Text style={{textAlign: "center", color: "black", fontSize: 15}}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ScrollView>

            <View style={styles.mineHead}>
                {/* 1-用户信息 */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    if (Utils.isEmpty(userData)) {
                        navigation.push("Login")
                    }
                }}>
                    <View style={styles.mineHeadUser}>
                        <FontAwesome name="user-circle" style={styles.mineHeadUserIcon} size={50}/>
                        <Text
                            style={styles.mineHeadUserName}>{Utils.isEmpty(userData) ? "欢迎登陆" : userData.userInfo.username}</Text>
                        <FontAwesome name="angle-right" style={styles.mineHeadUserArrow} size={30}/>
                    </View>
                </TouchableOpacity>
                {/* 2-等级、排名、收藏、积分 */}
                <View style={styles.mineHeadInfo}>
                    <View style={styles.mineHeadInfoItem}>
                        <Text style={styles.mineHeadInfoItemTitle}>等级</Text>
                        <Text>{!Utils.isEmpty(userData) ? `${userData.coinInfo.level}` : "——"}</Text>
                    </View>
                    <View style={styles.mineHeadInfoItem}>
                        <Text style={styles.mineHeadInfoItemTitle}>排名</Text>
                        <Text>{!Utils.isEmpty(userData) ? `${userData.coinInfo.rank}` : "——"}</Text>
                    </View>
                    <View style={styles.mineHeadInfoItem}>
                        <Text style={styles.mineHeadInfoItemTitle}>收藏</Text>
                        <Text>{!Utils.isEmpty(userData) ? `${userData.userInfo.collectIds.length}` : "——"}</Text>
                    </View>
                    <View style={styles.mineHeadInfoItem}>
                        <Text style={styles.mineHeadInfoItemTitle}>积分</Text>
                        <Text>{!Utils.isEmpty(userData) ? `${userData.coinInfo.coinCount}` : "——"}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mineGrid}>
                <Text
                    style={{
                        textDecorationLine: "underline",
                        fontSize: 20,
                        marginBottom: 20,
                        fontWeight: "bold"
                    }}>常用功能</Text>
                <Grid
                    data={gridData}
                    renderItem={_renderItem}
                    columnNum={3}
                    hasLine={false}
                    itemStyle={{height: 150}}
                />

            </View>

        </ScrollView>
    )
}

/**
 * @desc：样式文件
 */
const styles = StyleSheet.create({

    //-mine-head
    mineHead: {
        display: "flex",
        flexDirection: "column",
        padding: 20
    },
    //用户信息-布局
    mineHeadUser: {
        display: "flex",
        height: 80,
        flexDirection: "row",
        alignItems: "center"
    },
    //用户信息-头像
    mineHeadUserIcon: {
        textAlign: "left"
    },
    //用户信息-名字
    mineHeadUserName: {
        flex: 1,
        marginLeft: 20,
        fontSize: 20
    },
    //用户信息-右箭头
    mineHeadUserArrow: {
        textAlign: "right"
    },
    //info-布局
    mineHeadInfo: {
        display: "flex",
        flexDirection: "row"
    },
    //info-item
    mineHeadInfoItem: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20
    },
    mineHeadInfoItemTitle: {
        fontStyle: "normal",
        fontSize: 20,
        textDecorationStyle: "solid",
        fontWeight: "bold"
    },
    //grid-布局
    mineGrid: {
        display: "flex",
        flexDirection: "column",
        margin: 10
    }

})
