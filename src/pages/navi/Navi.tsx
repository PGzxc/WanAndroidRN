import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {withSafeAreaInsets} from "react-native-safe-area-context";
import {commonStyles} from "../../styles/common";
import {treeReq} from "../../api/network";
//import {TagSelect} from 'react-native-tag-select';
import { Chip } from 'react-native-paper';
import {styles} from "./styles";


/**
 * @desc：导航页面。使用SectionList时，标签页面只能使用List无法显示流线布局，使用FlatList自定义布局
 * @constructor
 */

const Navi = () => {

    const [treeData, setTreeData] = useState([])

    useEffect(() => {
        treeReq().then((res) => {
            //console.log('treeReq>>>', JSON.stringify(res.data[0]));
            let treeDatas = res.data.map((item, index) => {
                let tmpDict = {title: "", data: []}
                tmpDict.title = item.name;
                tmpDict.data = item.children
                return tmpDict
            })
            setTreeData(treeDatas)
        })

    }, [])

    const _renderSectionHeader = ({section}) => {
        // console.log(JSON.stringify(section));
        const {title, data} = section;
        return (<Text style={{
            paddingLeft: 15,
            height: 40,
            lineHeight: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f7f7f7'
        }}>{title}</Text>)
    }

    const _renderItem = ({item}) => {
        const {name, data} = item;
        //console.log(JSON.stringify(item));
        return (
            <TouchableOpacity activeOpacity={0.7} style={{
                height: 44,
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderBottomColor: '#eee',
                borderBottomWidth: 1
            }} onPress={() => {
                //console.log(JSON.stringify(item));
            }}>
                <Text style={{marginLeft: 15, height: 25, lineHeight: 25}}>{name}</Text>
            </TouchableOpacity>
        )
    }

    const _renderListItem = ({item}) => {
        //console.log("item==" + JSON.stringify(item));
        let tags = item.data.map((tag, index) => {
            return tag.name
        })

        return (
            <View style={styles.contentStyle}>
                <Text style={styles.navHead}>{item.title}</Text>

                <View style={styles.tagStyle}>
                    {tags.map((tag, index) => (
                         <Chip
                            mode="outlined"
                            key={index}
                            onPress={() => console.log(`点击了 ${tag}`)}>
                        {tag}
                        </Chip>
                    ))}
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={[commonStyles.safeAreaContainer]}>
            <FlatList  data={treeData} renderItem={_renderListItem}/>
            {/*<SectionList sections={treeData} renderSectionHeader={_renderSectionHeader} renderItem={_renderItem}/>*/}

        </SafeAreaView>
    )
};

export default withSafeAreaInsets(Navi);
