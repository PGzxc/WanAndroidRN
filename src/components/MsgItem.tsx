/**
 * @desc：消息Item
 * @constructor
 */
import {StyleSheet, Text, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function MsgItem({item}) {
    console.log('MsgItem>>>', JSON.stringify(item));
    return (
        <View style={styles.container}>
            {/*第一行*/}
            <View style={styles.containerHead}>
                <View style={styles.containerHeadAuthor}>
                    <FontAwesome name="user" size={20}/>
                    <Text style={{marginLeft: 5}}>{item.fromUser}</Text>
                </View>

                <Text numberOfLines={1} style={[styles.containerHeadTag]}>{item.tag}</Text>

                <View style={styles.containerHeadAuthor}>
                    <FontAwesome name="calendar" size={20}/>
                    <Text style={{marginLeft: 5}}>{item.niceDate}</Text>
                </View>
            </View>
            {/*第2行*/}
            <Text numberOfLines={1} style={styles.containerTitle}>{item.title}</Text>
            {/*第3行*/}
            <Text numberOfLines={2} style={styles.containerMsg}>{item.message}</Text>
        </View>
    )

}
const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: "#F5F5F5",
        borderWidth: 5,
        borderColor: "#D3D3D3"
    },
    containerHead: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    containerHeadAuthor: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 5,
        marginRight: 5
    },
    containerHeadTag: {
        fontSize: 12,
        textAlign: "center",
        overflow: "scroll",
        borderRadius: 3,
        color: "white",
        backgroundColor: "#B22222",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8
    },
    containerTitle: {
        height: 30,
        fontSize: 12,
        textAlign: "left",
        borderRadius: 3,
        color: "white",
        overflow: "scroll",
        width: "100%",
        backgroundColor: "#4169E1",
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    containerMsg: {
        textAlign: "left",
        width: '100%',
        marginTop: 10
    }


})
