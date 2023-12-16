
import http, { HttpResult } from './http'
import {
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

    toolUrl,
    chapterUrl,
    wxarticleUrl,
    wxarticleListUrl,
    wxarticleSearchUrl,
    chapterListUrl, userInfUrl,
} from './url'


// home
const bannerReq = () => http.GET(bannerUrl);
const articleTopReq = () => http.GET(articleTopUrl);
const articleListReq = (page: number) => http.GET(articleListUrl+`${page}/json`);


// tree  /1/json?cid=294
const treeReq = () => http.GET(treeUrl);
const treeListReq = (page: number, cid: number) => http.GET(treeListUrl + '/' + page + '/json?' + 'cid=' + cid);

// project  /1/json?cid=294
const projectReq = () => http.GET(projectUrl);
const projectListReq = (page: number, cid: number) => http.GET(projectListUrl + '/' + page + '/json?' + 'cid=' + cid);

//Register、Login、Logout

const loginReq = (username:string , password: string) => http.POST(loginUrl+`?username=${username}&password=${password}`)
const registerReq = (username:string , password: string,repassword:string) => http.POST(loginUrl+`?username=${username}&password=${password}&repassword=${repassword}`)
const logoutReq = () => http.GET(loginUrl);

//我的
const userInfUrlReq = ()=>http.GET(userInfUrl)

// wxarticle
const wxarticleReq = () => http.GET(wxarticleUrl);
//  /408/1/json
const wxarticleListReq = (page: number, cid: number) => http.GET(wxarticleListUrl + '/' + cid + '/' + page + '/json');
//  /405/1/json?k=Java
const wxarticleSearchReq = (page: number, cid: number, keyword: string) => http.GET(wxarticleSearchUrl + '/' + cid + '/' + page + '/json?' + 'k=' + keyword);

// chapter
const chapterReq = () => http.GET(chapterUrl);
// const chapterListReq = (page: number, cid: number) => http.GET(chapterListUrl + '/' + page + '/json?' + 'cid=' + cid + '&order_type=1');
const chapterListReq = (page: number, cid: number) => http.GET(`${chapterListUrl}/${page}/json?cid=${cid}&order_type=1`);

// tool
const toolReq = () => http.GET(toolUrl);

export {
    bannerReq,
    articleTopReq,
    articleListReq,

    projectReq,
    projectListReq,

    treeReq,
    treeListReq,

    loginReq,
    registerReq,
    logoutReq,

    userInfUrlReq,

    toolReq,
    chapterReq,
    chapterListReq,

    wxarticleReq,
    wxarticleListReq,
    wxarticleSearchReq,
}
