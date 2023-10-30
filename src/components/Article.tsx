/**
 * @desc：文章Item布局
 */
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Utils from "../utils/Utils";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";


export default function ({item}) {
    console.log('item>>>', JSON.stringify(item));
    //是否有图片
    const hasPic = (item) => {
        return !Utils.isEmpty(item.envelopePic)
    }
    //是否有刷新Tag
    const hasRefreshTag = (item) => {
        return item.fresh === true
    }
    //刷新Tag
    const reFreshTag = (item) => {
        return hasRefreshTag(item) ? "新" : ""

    }
    //是否有Tag
    const hasTag = (item) => {
        return !Utils.isEmpty(item.tags)
    }
    const tag = (item) => {
        return item.tags[0].name
    }
    const author = (item) => {
        return Utils.isEmpty(item.author) ? Utils.isEmpty(item.shareUser) ? "" : item.shareUser : item.author
    }
    const title = (item) => {
        return Utils.formatHtml(item.title)
    }
    const desc = (item) => {
        return Utils.formatHtml(item.desc)
    }
    const isTop = (item) => {
        return item.isTop === true
    }
    const top = (item) => {
        return "置顶"
    }
    const hasSuperChapterName = (item) => {
        return !Utils.isEmpty(item.superChapterName)
    }
    const superChapterName = (item) => {
        return Utils.isEmpty(item.superChapterName) ? '' : Utils.formatHtml(item.superChapterName)
    }
    const hasChapterName = (item) => {
        return !Utils.isEmpty(item.chapterName)
    }
    const chapterName = (item) => {
        return Utils.isEmpty(item.chapterName) ? '' : Utils.formatHtml(item.chapterName)
    }


    if (item != null) return (
        <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
            console.log('item>>>', JSON.stringify(item));
        }}>
            <View style={styles.articleItemContainer}>
                {/*第1行*/}
                <View style={[styles.articleItemHeader]}>
                    {/*第1行-标签*/}
                    {hasRefreshTag(item) && <Text style={styles.articleItemHeadTag}>{reFreshTag(item)}</Text>}
                    {hasTag(item) && <Text style={styles.articleItemHeadTag}>{tag(item)}</Text>}
                    {/*第1行-用户*/}
                    <View style={styles.articleItemUser}>
                        <FontAwesome name="user" size={20}/>
                        <Text style={{marginLeft:5}}>{author(item)}</Text>
                    </View>
                    {/*第1行-时间*/}
                    <View style={styles.articleItemHeaderRight}>
                        <FontAwesome name="calendar" size={20}/>
                        <Text style={{marginLeft:5}}>{item.niceDate}</Text>
                    </View>
                </View>
                {/*第2行*/}
                <View style={styles.articleItemMiddle}>
                    <View style={styles.articleItemMiddleInfo}>
                        <Text numberOfLines={1} ellipsizeMode={"tail"} style={[styles.articleItemMiddleTitle]}>{title(item)}</Text>
                        <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.articleItemMiddleDesc}>{desc(item)}</Text>
                    </View>
                    {hasPic(item) && <Image style={styles.articleItemMiddlePic} source={{uri: item.envelopePic}}/>}
                </View>
                {/*第3行*/}
                <View style={styles.articleItemEnd}>
                    {isTop(item) && <Text style={styles.articleItemEndTag1}>{top(item)}</Text>}
                    {hasSuperChapterName(item) &&
                        <Text style={styles.articleItemEndTag2}>{superChapterName(item)}</Text>}
                    {hasChapterName(item) && <Text style={styles.articleItemEndTag2}>{chapterName(item)}</Text>}
                </View>

            </View>
        </TouchableOpacity>
    )
}


/**
 * @desc：文章Item样式
 */

const styles = StyleSheet.create({

    //1-容器布局
    articleItemContainer: {
        display: "flex",
        flexDirection: "column",
        borderBlockColor: '#fff',
        borderBottomWidth: 2,
        minHeight: 150,
        maxHeight: 180,
        padding: 10
    },
    //2-第一行-容器
    articleItemHeader: {
        display: "flex",
        flexDirection: "row",
        minHeight: 30

    },
    //3-第一行-tag标签
    articleItemHeadTag: {
        color: "white",
        height: 25,
        fontSize: 12,
        borderRadius: 3,
        backgroundColor: 'red',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        marginRight: 5,
        paddingBottom: 5,

    },
    //4-第一行-右侧时间标签
    articleItemHeaderRight: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    //5-第一行-用户信息
    articleItemUser: {
        display: "flex",
        flexDirection: "row"
    },
    //6-第2行
    articleItemMiddle: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    //7-第2行-文字信息布局
    articleItemMiddleInfo: {
        display: "flex",
        flex: 1,
        flexDirection: "column"
    },
    articleItemMiddleTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    articleItemMiddleDesc: {
        color: "gray",
    },
    //8-第2行-图片显示
    articleItemMiddlePic: {
        width: 120,
        height: 180,
        marginLeft: 20
    },
    //9-第3行-布局
    articleItemEnd: {
        display: "flex",
        flexDirection: "row"
    },
    articleItemEndTag1: {
        color: "white",
        height: 25,
        fontSize: 12,
        borderRadius: 3,
        backgroundColor: 'orange',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        marginRight: 5,
        paddingBottom: 5,
    },
    articleItemEndTag2: {
        color: "white",
        height: 25,
        fontSize: 12,
        borderRadius: 3,
        backgroundColor: 'darkcyan',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        marginRight: 5,
        paddingBottom: 5,
    }
})




