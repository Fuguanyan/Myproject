// 封装AXIOS拦截请求
import axios from 'axios';
import {Message,Loading} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
/**创建新的axios实例 */
const service = axios.create({
  // 公共接口
  baseURL:"http://192.168.2.229:9080/",
  // baseURL:"window.location.origin",
})

/**请求前处理 */

var options = {
  text: '玩命加载中...',
  background: 'rgba(0, 0, 0, 0.1)'
};
  
service.interceptors.request.use(config => {

  let Loa =  Loading.service(options);
setTimeout(function () {
  Loa.close(); // 超时关闭loading层
}, 3000);
  const token = window.localStorage.getItem('token')
  if(token) {
    config.headers.token = token
  }
  config.data = JSON.stringify(config.data);//数据转化
  // config.headers = {
  //   'Content-Type':'application/x-www-form-urlencoded' //配置请求头
  // }
  
  return config;
}, error => {
  Promise.reject(error)
})

/**请求回来后处理 */
service.interceptors.response.use(response => {
  // 接受到响应的数据后做一些处理
  // loadingInstance.close();

  console.log(response.data,'我是data-------')
  
  let {data} = response
  switch(data.code) {
    case 1:
      Message.error(data.msg)
      break;
    case 2:
      Message.error(data.msg)
      break;
    case 10001:
      Message.error(data.msg)
      break;
  }
  return response;

})
export default service