项目预览：

| ![][rn-waz-1] | ![][rn-waz-2] | ![][rn-waz-3] |
| ------------- | ------------- | ------------- |
| ![][rn-waz-4] | ![][rn-waz-5] | ![][rn-waz-6] |
| ![][rn-waz-7] | ![][rn-waz-8] | ![][rn-waz-9] |

2、扫码下载

![][code]

## 一 开发环境

* 操作系统：Windows 11 专业版 22H2
* Node：v22.14.0，NPM版本：10.9.2
* Yarn：1.22.22
* jdk：openjdk 11.0.19 2023-04-18
* Android SDK Build-Tools：33.0.0
* react-native：0.76.7
* Expo SDK: 52

## 二 项目创建

### 2.1 创建方式

```
npx create-expo-app WanAndroidRN
```

### 2.2 安装依赖

```
yarn
```

### 2.3 运行

```
npx expo start //运行到expo go
yarn android
npm run android
npm run ios
npm run web
```

## 三 如何使用

### 3.1 下载本项目

```
git clone https://githubfast.com/PGzxc/WanAndroidRN
```

### 3.2 进入本项目，安装依赖

```
cd WanAndroidRN
yarn
```

### 3.3 Expo Go中运行本项目

说明：

* 已安装[Expo Go](https://expo.dev/client)
* 在Expo Go中启动项目，不生成android和ios目录

* 执行`npx expo start`启动项目(可能出现Network response timed out现象)

### 3.4 生成android或ios文件夹目录(apk文件安装)

* 生成android文件夹：npx expo run:android
* 生成ios文件夹：npx expo run:ios

## 四 具备知识

* React Native Elements：UI 组件库
* NativeBase：UI 组件库
* gluestackui：UI 组件库
* React Navigation：导航
* Expo：开源跨平台工具

## 五 开发阶段

### 5.1 v1.0

* 开发环境搭建、准备阶段
* 项目创建
* 项目框架搭建(底部导航框架+切换)
* 使用了[React Navigation](https://reactnavigation.org/)导航库

### 5.2 V2.0

* 使用 Fetch进行网络请求，返回一个Promise，简化异步操作
* 使用async/await对Promise进行优化，catch捕获异常
* [官网—访问网络](https://reactnative.cn/docs/network)
* SafeAreaView上添加style，并设置flex:1，否则无法正常显示
* 使用@ant-design/react-native蚂蚁金服RN组件，需要导入@react-native-camera-roll/camera-roll、@react-native-community/segmented-control、@react-native-community/slider、@react-native-picker/picker等
* 使用useEffect更新组件的状态，要谨慎使用第二个参数为空的情形
* 使用yarn android生成android项目并运行，使用expo start无法启动(报错)
* 轮播图使用@ant-design/react-native蚂蚁金服RN组件Carousel
* 自定义组件Banner轮播图、文章Article-Item
* 复杂组件FlatList，Header头部设置为Banner轮播图、设置refreshing，控制下拉刷新，onEndReachd加载更多

### 5.3 v3.0

* 使用SectionList分组列表组件无法实现分组内容Tag显示，使用FlatList自定义Item实现
* Tags显示使用`react-native-tag-select`实现
* ViewPropTypes 将从 React Native 中移除-警告在App.js种添加LogBox

### 5.4 v4.0

* 基于@ant-design/react-native蚂蚁金服RN组件Tab展示Tab页面
* 自定义TreeChildList组件， 展示每个Tab的显示

### 5.5 v5.0

* 我的界面UI绘制
* 基于@ant-design/react-native蚂蚁金服RN组件Grid显示网络布局

### 5.6 v6.0

* 消息界面-ui
* tab切换显示：已读消息和未读消息

### 5.7 v7.0

* 配置React Navigation路由导航(Tab+Stack嵌套)
* 使用ets后缀时，name无法识别为RouteName，暂时使用js后缀

### 5.8 v8.0

* 添加`react-native-webview`网页显示依赖
* 首页轮播图、首页文章列表、项目点击跳转网页显示
* useEffect设置标题

### 5.9 v9.0

* Login登录、注册页面
* `react-native-toast-notifications`土司依赖
* `option.cache = "force-cache"`强制缓存

### 5.10 v10.0

* 已读、未读消息界面
* 消息Item跳转WebView显示，添加前缀(传递url)

### 5.11 v11.0(去除蚂蚁Ant Design依赖-expo错误)

1-依赖删除

* @ant-design/react-native
* @react-native-camera-roll/camera-roll
* @react-native-community/segmented-control
* @react-native-community/slider
* @react-native-picker/picker

2-现有项目解决方案

* 蚂蚁Ant Design-轮播图组件`Carousel `替换为`react-native-swiper-flatlist`
* 蚂蚁Ant Design-Tabs替换为`@react-navigation/material-top-tabs`（消息/项目-页面）
* 蚂蚁Ant Design-Tabs-Grid替换为`react-native-draggable-grid`(我的-界面)

3-删除

* android：项目文件夹(作为apk运行到手机上，替换为使用expo扫描显示，如需生成使用`npx expo run:android`)

### 5.12.0(expo版本升级)

1-Expo和react-native版本升级

```
1、Expo端
Expo:49.0.15—>52.0.38
react-native:0.72.6—>0.76.7

2、生成android端时
java: 17
gradle:gradle-8.13-bin.zip
```

2-功能新增

```
1、使用 EAS Build云打包和下载
```

## 六 使用到的依赖库

### 6.1 安装依赖

```
yarn add @react-navigation/bottom-tabs(类库名)或
npm install @react-navigation/bottom-tabs
```

### 6.2 删除依赖

```
yarn remove @react-navigation/bottom-tabs(类库名)或
npm uninstall @react-navigation/bottom-tabs
```

### 6.3 依赖库

* [@react-navigation/bottom-tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs)
* [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native)
* [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
* [@ant-design/react-native](https://github.com/ant-design/ant-design-mobile-rn)：Ant Design 移动端设计规范

### 6.4 图标库

* [Fontawesome中文网-V5版](https://fontawesome.com.cn/v5)
* [Fontawesome中文网-V4版](https://fontawesome.com.cn/v4/cheatsheet)

## 七 配置

### 7.1 .d.ts配置(npx)

* 项目根目录添加externals.d.ts
* tsconfig.json中配置externals.d.ts

### 7.2 .eslintrc.js配置rules规则



[rn-waz-1]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-1-home.png
[rn-waz-2]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-2-nav.png
[rn-waz-3]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-3-project.png
[rn-waz-4]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-4-msgunread.png
[rn-waz-5]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-5-msgread.png
[rn-waz-6]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-6-meunlogin.png
[rn-waz-7]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-7-melogin.png
[rn-waz-8]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-8-login.png
[rn-waz-9]:https://jsd.onmicrosoft.cn/gh/PGzxc/CDN/blog-resume/rn-waz-9-register.png

[code]:code.png
