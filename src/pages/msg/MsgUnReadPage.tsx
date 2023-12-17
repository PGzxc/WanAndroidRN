import {FlatList, Text, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {msgReadReq, msgUnreadReq} from "../../api/network";
import * as Utils from "../../utils/Utils"
import MsgItem from "../../components/MsgItem";
import EmptyComponent from "../../components/EmptyComponent";

export function MsgUnReadPage({route}) {
    //console.error("routes===>",route)
    const {navigation} = route.params;
    const [messages, setMessage] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true); //下滑有没有更多数据
    const [naviOpacity, setNaviOpacity] = useState(0);
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        setHasMoreData(true)
        setRefreshing(true)
        msgUnreadReq().then((result) => {
            console.log("MsgUnRead", JSON.stringify(result))
            setRefreshing(false)
            if (!Utils.isEmpty(result.data)) {
                console.log("MsgUnRead-datas", JSON.stringify(result.data.datas))
                setMessage(result.data.datas)
            }
        }).catch((err) => {
            console.log("MsgUnReadErr", err)
            setRefreshing(false)
        })
    }

    //使FlatList滚动
    const _onScroll = (e) => {
        let originY = e.nativeEvent.contentOffset.y;
        //console.log('originY>>', originY);
        if (originY <= 0) {
            naviOpacity && setNaviOpacity(0)
        } else if (originY <= 44) {
            setNaviOpacity(originY / 44)
        } else if (originY > 44) {
            naviOpacity < 1 && setNaviOpacity(1)
        }
    }
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
                console.log('item>>>', JSON.stringify(item));
                navigation.push('WebPage', item)
            }}>
                <MsgItem item={item}/>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            data={messages}
            onScroll={_onScroll}
            refreshing={refreshing}
            onRefresh={() => getData()}
            onEndReachedThreshold={0.5}
            ListEmptyComponent={EmptyComponent()}
            onEndReached={() => {
            }}
            renderItem={renderItem}/>
    )
}
