/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

// 创建一个axios实例
// 通过实例去发请求
const request = axios.create({
  baseURL: 'http://127.0.0.1/' // 请求的基础路径
})

// 导出
export default request
