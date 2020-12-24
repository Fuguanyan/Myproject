
/**
 * methods:请求
 * @param url 请求地址
 * @param params 请求参数
 */
import request from '../http/request'
const http = {
    // GET请求
    get(url,params) {
        const config = {
            methods:'get',
            url:url
        }
        if(params) config.params = params
        return request(config)
    },
    // POST请求
    post(url,params) {
        const config = {
            method:'post',
            url:url
        }
        if(params) config.params = params
        return request(config)
    },
    
    put(url,params) {
        const config = {
            method:'put',
            url:url
        }
        if(params) config.params = params
        return request(config)
    },
    delete(url,params) {
        const config = {
            method:'delete',
            url:url
        }
        if(params) config.params = params
        return request(config)
    }


}
export default http