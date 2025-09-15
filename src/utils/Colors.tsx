/***
 * @desc：StatusBar 是否是isDarkMode
 * 之前通过import {Colors} from 'react-native/Libraries/NewAppScreen';导入
 * 现在采用自定义
 */

const Colors = {
    // 基础颜色
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#f5f5f5',
    surface: '#ffffff',
    error: '#b00020',
    onPrimary: '#ffffff',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#ffffff',

    // 更深的颜色变体（通常用于按压/激活状态）
    darker: {
        primary: '#3700b3',    // 比 primary 更深的紫色
        secondary: '#018786',  // 比 secondary 更深的青色
        background: '#e0e0e0', // 比 background 更深的灰色
        surface: '#eaeaea',    // 比 surface 更深的白色
        error: '#7f0000',      // 比 error 更深的红色
    },

    // 更浅的颜色变体（通常用于高亮/悬停状态）
    lighter: {
        primary: '#bb86fc',    // 比 primary 更浅的紫色
        secondary: '#80e2dc',  // 比 secondary 更浅的青色
        background: '#ffffff', // 比 background 更浅的灰色（接近白色）
        surface: '#fafafa',    // 比 surface 更浅的白色（带点灰调）
        error: '#cf6679',      // 比 error 更浅的红色
    }
};

export default Colors;