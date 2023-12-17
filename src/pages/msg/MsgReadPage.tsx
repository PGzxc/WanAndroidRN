import {FlatList, Text, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {articleListReq, articleTopReq, bannerReq, msgReadReq} from "../../api/network";
import * as Utils from "../../utils/Utils"
import EmptyComponent from "../../components/EmptyComponent";
import MsgItem from "../../components/MsgItem";

export function MsgReadPage({route}) {
     //console.error("routes===>",route)
    const {navigation} = route.params;
    const [messages, setMessage] = useState([]);
    const [page, setPage] = useState(0); //页码
    const [hasMoreData, setHasMoreData] = useState(true); //下滑有没有更多数据
    const [naviOpacity, setNaviOpacity] = useState(0);
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        getRefreshData()
    }, [])

    function getRefreshData() {
        setPage(0)
        setHasMoreData(true)
        setRefreshing(true)
        msgReadReq(page).then((result) => {
            console.log("MsgRead", JSON.stringify(result))
            setRefreshing(false)
            if (!Utils.isEmpty(result.data)) {
                console.log("MsgRead-datas", JSON.stringify(result.data.datas))
                setMessage(result.data.datas)
            }
        }).catch((err) => {
            console.log("MsgRead", err)
            setRefreshing(false)
        })
    }

    function getMoreData() {
        setPage(page + 1)
        msgReadReq(page).then((result) => {
            console.log("MsgRead", JSON.stringify(result))
            if (!Utils.isEmpty(result.data)) {
                if (!result.data.over) {
                    console.log("MsgRead-datas", JSON.stringify(result.data.datas))
                    let datas = [...messages, ...result.data.datas]
                    setMessage(datas)
                } else {
                    setHasMoreData(false)
                    console.log("没有更多数据")
                }
            }
        }).catch((err) => {
            console.log("MsgRead", err)
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
            onRefresh={() => getRefreshData()}
            onEndReachedThreshold={0.5}
            ListEmptyComponent={EmptyComponent()}
            onEndReached={() => {
                if (hasMoreData) {
                    getMoreData()
                }
            }}
            renderItem={renderItem}/>
    )
}
