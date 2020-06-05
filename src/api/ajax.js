import axios from 'axios'
// 将json类型转换成 stringfy类型
import qs from 'querystring'
import { Message } from 'element-ui'
// 创建axios实例
const instance = axios.create({
    baseURL:'/api'
})


// 创建请求拦截器
instance.interceptors.request.use(config => {
    // 将请求到的json类型转换成stringify类型
    config.data = qs.stringify(config.data)
    // 将token 放到请求头当中
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})

// 创建相应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        console.log(error)
        Message.error('网络开小差了~')
        return new Promise (() => {})
    }
)
export default instance