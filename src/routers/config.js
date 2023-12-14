// MARK: - Constants
import {BottomTab} from "./router";
import Home from "../pages/home/Home";
import Navi from "../pages/navi/Navi";
import Project from "../pages/project/Project";
import Msg from "../pages/msg/Msg";
import Mine from "../pages/mine/Mine";
import Login from "../pages/login/Login";
import WebPage from "../pages/webpage/WebPage";

export const TabConfigs = [

    {
        title: "首页",
        component: Home,
        normal: "home",
        select: "home",
        headerShown: false,
    },
    {
        title: "导航",
        component: Navi,
        normal: "list",
        select: "list",
        headerShown: false,
    },
    {
        title: "项目",
        component: Project,
        normal: "briefcase",
        select: "briefcase",
        headerShown: false,
    },
    {
        title: "消息",
        component: Msg,
        normal: "envelope",
        select: "envelope",
        headerShown: false,
    },
    {
        title: "我的",
        component: Mine,
        normal: "user",
        select: "user",
        headerShown: false,
    },
];


export const NaviConfigs = [
    {
        title: "BottomTab",
        name: "BottomTab",
        component: BottomTab,
        headerShown: false,
    },
    {
        title: "Login",
        name: "Login",
        component: Login,
        headerShown: true,
    },
    {
        title: "WebPage",
        name: "WebPage",
        component: WebPage,
        headerShown: true,
    },
];

