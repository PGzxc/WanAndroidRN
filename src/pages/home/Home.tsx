import {Dimensions, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {articleListReq, articleTopReq, bannerReq} from "../../api/network";
import {commonStyles} from "../../styles/common";
import Banner from "../../components/Banner";
import Article from "../../components/Article";
import EmptyComponent from "../../components/EmptyComponent";

/**
 * @desc：首页-必须使用<SafeAreaView>包括试图，否则出现异常
 * @constructor
 * @
 */


const Home = (props) => {
        const {navigation} = props;
        const [banner, setBanner] = useState([]) //轮播图
        const [articles, setArticles] = useState([]); //置顶+文章
        const [page, setPage] = useState(0); //页码
        const [hasMoreData, setHasMoreData] = useState(true); //下滑有没有更多数据
        const [naviOpacity, setNaviOpacity] = useState(0);
        const [refreshing, setRefreshing] = useState(false)
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
                    console.log('item>>>', JSON.stringify(item));
                    navigation.push('WebPage', item)}}>
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
            Promise.all([bannerReq(), articleTopReq(), articleListReq(0)]).then(result => {
                //console.log("banner", result[0].data)
                setBanner(result[0].data)
                //console.log("topArticle", result[1].data)
                result[1].data.forEach(item => {
                    item.isTop = true
                })//添加置顶属性
                setArticles([...result[1].data, ...result[2].data.datas])
                setRefreshing(false)
            }).catch(error => {
                setRefreshing(false)
                console.log(error)
            })
        }

        //下拉加载更多
        useEffect(() => {
            if (page === 0) return
            articleListReq(page).then(res => {
                console.log('page>>>', page);
                let curPage = res.data.curPage ?? 0 //当前页码
                let pageCount = res.data.pageCount ?? 0 //总页码
                if (curPage >= pageCount) {
                    setHasMoreData(false)
                }
                let datas = [...articles, ...res.data.datas]
                setArticles(datas);
            }).catch(error => {
                console.log(error);
            })
        }, [page])  //加[]空数组，是为了产生死循环

        return (
            <SafeAreaView style={[commonStyles.safeAreaContainer]}>
                <FlatList
                    ListHeaderComponent={<Banner {...props} {...{banner: banner}} />}
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
            </SafeAreaView>
        )
    }
;

export default withSafeAreaInsets(Home);
