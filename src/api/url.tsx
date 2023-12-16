const PATH = {
    dev: {
        url: 'https://www.wanandroid.com',
    },
    test: {
        url: ''
    },
    prd: {
        url: '',
    }
}

let host = PATH.dev.url

// 首页
const bannerUrl = host + '/banner/json';  //-轮播图
const articleTopUrl = host + '/article/top/json'; //-置顶
const articleListUrl = host + '/article/list/'; // /0/json-文章

// 导航
const treeUrl = host + '/tree/json';
const treeListUrl = host + '/article/list'; // /0/json?cid=60

// 项目
const projectUrl = host + '/project/tree/json';
const projectListUrl = host + '/project/list'; // /1/json?cid=294

// 公众号
const wxarticleUrl = host + '/wxarticle/chapters/json';
const wxarticleListUrl = host + '/wxarticle/list'; // /408/1/json
// 搜索
const wxarticleSearchUrl = host + 'wxarticle/list'; // /405/1/json?k=Java

//登录、注册

const loginUrl = host + '/user/login' //用户登录
const registerUrl = host + '/user/register' //用户注册
const loginOutUrl = host + '/user/logout/json' //退出登录

//我的
const userInfUrl = host + '/user/lg/userinfo/json';

// 工具
const toolUrl = host + '/tools/list/json';

// 教程,  chapterListUrl 查询教程列表
const chapterUrl = host + '/chapter/547/sublist/json';
const chapterListUrl = host + '/article/list'; // /0/json?cid=60&order_type=1

export {
    host,
    bannerUrl,
    articleTopUrl,
    articleListUrl,

    projectUrl,
    projectListUrl,

    treeUrl,
    treeListUrl,

    loginUrl,
    registerUrl,
    loginOutUrl,

    userInfUrl,

    toolUrl,
    chapterUrl,
    chapterListUrl,

    wxarticleUrl,
    wxarticleListUrl,
    wxarticleSearchUrl,
};
