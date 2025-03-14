/**
 * @desc：导航文件样式
 */
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    contentStyle: {
        display: "flex",
        flexDirection: "column"
    },
    navHead: {
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        lineHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        backgroundColor: '#999999',
        fontSize: 15
    },
    tagStyle: {
        // 使用 Flexbox 布局
        flexDirection: 'row',
        // 允许换行
        flexWrap: 'wrap',
        // 子元素之间添加间距
        gap: 8,
        padding: 8
    }
})
