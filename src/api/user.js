/**
 * 用户请求相关接口
 */
// 引入request
import request from '@/utils/request'
// 用户登录
export const userLogin = data => {
  return request({
    method: 'POST',
    url: '',
    data
  })
}
// 获取用户信息
export const getuserInfo = () => {

}
// 修改用户信息
export const updateUserInfo = () => {

}
