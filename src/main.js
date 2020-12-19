/**
 * 项目启动入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 按需引入element组件
import { Button, Select, Form, FormItem, Input, Checkbox, Message, Container, Header, Aside, Main } from 'element-ui'

// 加载全局样式文件
import './styles/index.less'

// 全局注册element组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.prototype.$message = Message

Vue.config.productionTip = false

// 创建Vue根实例
// 把router配置到根实例中
// 通过render方法把App根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
