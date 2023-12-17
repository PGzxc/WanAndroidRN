import {FlatList, TouchableOpacity} from "react-native";
import EmptyComponent from "./EmptyComponent";
import React, {useEffect, useState} from "react";
import Article from "./Article";

/**
 * @desc：项目——每个Tab对应的列表
 */
export function TreeChildList({route}) {
    const {tabId, NetWorkApi, navigation} = route.params;
    const [articles, setArticles] = useState([]); //置顶+文章
    const [page, setPage] = useState(0); //页码
    const [hasMoreData, setHasMoreData] = useState(true); //下滑有没有更多数据
    const [naviOpacity, setNaviOpacity] = useState(0);
    const [refreshing, setRefreshing] = useState(false)
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
                console.log('item>>>', JSON.stringify(item));
                navigation.push('WebPage', item)
            }}>
                <Article item={item}/>
            </TouchableOpacity>
        )
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
    //全部接口
    useEffect(() => {
        getData()
    }, [])  //加[]空数组，是为了产生死循环

    //请求-首页数据
    function getData() {
        setArticles([])
        setPage(0)
        setHasMoreData(true)
        setRefreshing(true)
        NetWorkApi(page, tabId).then((res) => {
            console.log('tabId>>>', tabId, '>>>', page);
            let curPage = res.data.curPage ?? 0
            let pageCount = res.data.pageCount ?? 0
            if (curPage >= pageCount) {
                setHasMoreData(false)
            }
            let datas = [...articles, ...res.data.datas]
            setArticles(datas);
            setRefreshing(false);
        })
    }

    return (
        <FlatList
            data={articles}
            onScroll={_onScroll}
            refreshing={refreshing}
            onRefresh={() => getData()}
            onEndReachedThreshold={0.5}
            ListEmptyComponent={EmptyComponent()}
            onEndReached={() => {
                if (hasMoreData) {
                    setPage(page + 1)
                }
            }}
            renderItem={renderItem}/>
    )

}
