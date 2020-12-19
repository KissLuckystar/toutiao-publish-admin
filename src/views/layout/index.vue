<template>
  <el-container class="layout-container">
    <el-aside width="200px" class="aside">Aside</el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <!-- 子路由页面 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layoutIndex'
}
</script>

<style lang="less" scoped>
.layout-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.aside {
  background-color: #D3DCE6;
}
.header {
  background-color: #B3C0D1;
}
.main {
  background-color: #E9EEF3;
}
</style>
