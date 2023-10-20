## 一 开发环境

* 操作系统：Windows 11 专业版 22H2
* Node：v18.18.2，node源：taobao
* Yarn：1.22.19
* jdk：openjdk 11.0.19 2023-04-18
* Android SDK Build-Tools：33.0.0
* react-native：0.72.6

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
yarn android
npm run android
npm run ios
npm run web
npx expo start
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

* 已安装Expo Go
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

### 6.4 图标库

* [Fontawesome中文网-V5版](https://fontawesome.com.cn/v5)
* [Fontawesome中文网-V4版](https://fontawesome.com.cn/v4/cheatsheet)

## 七 配置

### 7.1 .d.ts配置(npx)

* 项目根目录添加externals.d.ts
* tsconfig.json中配置externals.d.ts

### 7.2 .eslintrc.js配置rules规则

## 八 项目预览

