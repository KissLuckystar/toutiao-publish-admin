<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avater-logo">
        <img src="./logo_index.png" alt="logo">
      </div>
      <!-- 登录form表单 -->
      <!--
        配置form表单验证
        1、必须给el-form组件绑定model
        2、给el-form-item绑定prop属性
        3、给el-form绑定rules属性
        手动触发表单验证
        1、给el-form设置ref属性
        2、通过ref获取el-form组件，调用validate方法进行验证
      -->
      <el-form class="login-form" :model="user" :rules="rules" ref="user">
        <!-- 账号 -->
        <el-form-item prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="user.agree">用户协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="login-button" type="primary" :loading="loginLoading" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/api/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        name: '',
        password: '',
        agree: false
      },
      loginLoading: false,
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的账号格式', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '请输入6位密码', trigger: 'blur' }
        ],
        agree: [
          {
            // 自定义验证规则
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 表单验证
      this.$refs.user.validate(valid => {
        if (!valid) {
          return
        }
        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 获取表单数据
      const user = this.user
      // 发送请求
      this.loginLoading = true
      userLogin(user).then(res => {
        console.log(res)
        this.$message.success('提示')
        this.loginLoading = false
      }).catch(err => {
        console.log('登录失败', err)
        this.$message({
          message: '登录失败',
          type: 'error'
        })
        this.loginLoading = false
        this.$router.push('/') // 跳转到首页
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url(./login_bg.jpg) no-repeat;
  background-size: cover;
  .login-box {
    padding: 0 50px;
    min-width: 300px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avater-logo {
      width: 259px;
      height: 57px;
      padding: 20px;
    }
    .login-form {
      margin-bottom: 50px;
      .login-button {
        width: 100%;
      }
    }
  }
}
</style>
