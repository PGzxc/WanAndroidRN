import Qs from 'query-string';

// import Singleton from "../utils/singleton";
import {host} from './url';

type HttpMethods = 'POST' | "GET" | "PUT" | "DELETE" | "PATCH"
// type HttpResultItem = { code: number| null, msg: string, data: any }

export interface HttpResult {
    code: number | null,
    msg: string | null,
    data: any
}

export default class HTTP {
    static GET<Q>(url: string, query?: Q, header?: Object) {
        return handleFetch(url, 'GET', null, query, header)
    }
    static POSTForm<P, Q>(url: string, params?: P, query?: Q, header?: Object) {
        return handleFetch(url, 'POST', params, query, {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            ...header
        })
    }
    static POST<P, Q>(url: string, params?: P, query?: Q, header?: Object) {
        return handleFetch(url, 'POST', params, query, {
            'Content-Type': 'application/json;charset=UTF-8',
            ...header
        })
    }
    static PUT<P, Q>(url: string, params?: P, query?: Q, header?: Object) {
        return handleFetch(url, 'PUT', params, query, header)
    }
    static DELETE<P, Q>(url: string, params: P, query: Q, header?: Object) {
        return handleFetch(url, 'DELETE', params, query, header)
    }
    static PATCH<P, Q>(url: string, params: P, query: Q, header?: Object) {
        return handleFetch(url, 'PATCH', params, query, header)
    }
}

/**
 *
 * */
async function handleFetch<P, Q, H>(url: string, method: HttpMethods, params?: P, query?: Q, header?: H): Promise<any> {
    // @ts-ignore
    // let singleton = new Singleton()
    // let token = singleton.getToken()
    let option: any = {
        method: method,
        headers: {
            //'Cookie': "loginUserName_wanandroid_com=12345678; token_pass_wanandroid_com=08937b953a34ae42f65e461149b23129;", //使用option.cache代替
        }
    }
    if (query) {
        url = url + "?" + Qs.stringify(query)
    }
    console.log('url=>' + url)
    if (method !== 'GET' && params) {
        option.body = params
        option.cache = "force-cache" //自动携带token
        console.log('body=>'+ JSON.stringify(params))
    }
    if (header) {
        option.headers = { ...option.headers, ...header }
        console.log('headers=>'+ JSON.stringify(option.headers))
    }
    /// reject 用不上???
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url, { ...option })
            let result: any = null
            if (response.ok) {
                result = await response.json()
                console.log(result)
                // 如果匹配到特定域名开头, 校验errorCode
                if (url.startsWith(host)) {
                    if (result && result.errorCode === 0) {
                        resolve({ code: result.errorCode, msg: result.errorMsg, data: result.data })
                    } else {
                        //console.log(result.errorCode, result.errorMsg)
                        resolve({ code: result.errorCode, msg: result.errorMsg || '网络错误', data: result.data })
                    }
                } else {
                    if (result) {
                        resolve({ code: result.errorCode, msg: result.errorMsg || '外部接口请求成功', data: result.data })
                    } else {
                        resolve({ code: response.status || -1, msg: '网络错误', data: null })
                    }
                }
            } else {
                console.log('response.status>>>', response.status)
                resolve({ code: response.status || -1, msg: '网络错误', data: null })
                //reject({ code: response.status || -1, msg: '网络错误', data: null })
            }
        } catch (error) {
            console.log('error>>>', error)
             reject({ code: -1, msg: '网络错误', data: null })
            resolve({ code: -1, msg: '网络错误', data: null })
        }
    })
}
