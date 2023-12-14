import {Carousel} from "@ant-design/react-native";
import {Dimensions, Image, TouchableOpacity} from "react-native";
import React from "react";

const {width: kW, height: kH} = Dimensions.get('window');

/**
 * @desc:首页轮播图组件
 * @param banner
 */
export default function (props) {
    const {navigation, banner} = props;
    return (
        <Carousel autoplay infinite style={{width: kW, height: 230}}>
            {banner != null && banner.length > 0 &&
                banner.map(item => {
                    return (
                        <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
                            console.log('item>>>', JSON.stringify(item));
                            navigation.push('WebPage', item)
                        }}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: item.imagePath ?? ''}}/>
                        </TouchableOpacity>
                    )
                })
            }
        </Carousel>
    );
}
