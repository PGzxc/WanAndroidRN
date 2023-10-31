
import http, { HttpResult } from './http'
import {
    bannerUrl,
    articleTopUrl,
    articleListUrl,
    projectUrl,
    projectListUrl,
    treeUrl,
    treeListUrl,
    toolUrl,
    chapterUrl,
    wxarticleUrl,
    wxarticleListUrl,
    wxarticleSearchUrl,
    chapterListUrl,
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

    toolReq,
    chapterReq,
    chapterListReq,

    wxarticleReq,
    wxarticleListReq,
    wxarticleSearchReq,
}
