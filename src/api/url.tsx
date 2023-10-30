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

// 项目
const projectUrl = host + '/project/tree/json';
const projectListUrl = host + '/project/list'; // /1/json?cid=294

// 体系
const treeUrl = host + '/tree/json';
const treeListUrl = host + '/article/list'; // /0/json?cid=60

// 公众号
const wxarticleUrl = host + '/wxarticle/chapters/json';
const wxarticleListUrl = host + '/wxarticle/list'; // /408/1/json
// 搜索
const wxarticleSearchUrl = host + 'wxarticle/list'; // /405/1/json?k=Java


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

    toolUrl,
    chapterUrl,
    chapterListUrl,

    wxarticleUrl,
    wxarticleListUrl,
    wxarticleSearchUrl,
};
