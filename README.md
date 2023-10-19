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
npm create gluestack
```

说明：选择Mobile app(React Native+gluestack-ui

### 2.2 安装依赖

```
yarn
```

### 2.3 运行

```
yarn android
```

## 三 准备

* React Native Elements：UI 组件库
* NativeBase：UI 组件库
* gluestackui：UI 组件库
* React Navigation：导航
* Expo：开源跨平台工具

## 四 开发阶段

### 4.1 v1.0

* 开发环境搭建、准备阶段
* 项目创建
* .eslintrc.js配置rules规则
* 项目框架搭建(底部导航框架+切换)
* 使用了[React Navigation](https://reactnavigation.org/)导航库

### 4.2 V2.0

## 五 使用到的依赖库

### 5.1 安装依赖

```
yarn add @react-navigation/bottom-tabs(类库名)或
npm install @react-navigation/bottom-tabs
```

### 52 删除依赖

```
yarn remove @react-navigation/bottom-tabs(类库名)或
npm uninstall @react-navigation/bottom-tabs
```

### 5.3 依赖库

* [@react-navigation/bottom-tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs)
* [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native)
* [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)

### 5.4 图标库

* [Fontawesome中文网-V5版](https://fontawesome.com.cn/v5)
* [Fontawesome中文网-V4版](https://fontawesome.com.cn/v4/cheatsheet)

## 六 配置

### 6.1 .d.ts配置

* 项目根目录添加externals.d.ts
* tsconfig.json中配置externals.d.ts

## 七 项目预览

