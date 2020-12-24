import http from '../api/http.js'
/**请求API
 * URL请求地址
 * params请求参数
 */
// let URL = 'http://192.168.2.229:9080/'

export function getApi(params) {
    return http.get(`order/list`,params)
}
export function postApi(params) {
    return http.post(`login/`,params)
}