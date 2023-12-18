import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import React from "react";
import {SwiperFlatList} from 'react-native-swiper-flatlist';

/**
 * @desc:首页轮播图组件
 * @param banner
 */
export default function (props) {
    const {navigation, banner} = props;
    const {width: kW, height: kH} = Dimensions.get('window');
    return (
        <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={0}
            showPagination
            paginationActiveColor={'red'}
            data={banner}
            renderItem={({item}) => (
                <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
                    console.log('item>>>', JSON.stringify(item));
                    navigation.push('WebPage', item)
                }}>
                    <Image style={{width: kW, height: 1/2*kW}} source={{uri: item.imagePath ?? ''}}/>
                </TouchableOpacity>
            )}
        />
    )
}
