<template>
  <el-menu
      :default-openeds="['1', '3']"
      style="min-height: 100%;
            overflow-x: hidden;"
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#2c3e50"
      :collapse-transition="false"
      :collapse="isCollapse"
      router
      @select="handleSelect"
  >
    <div style="height: 60px;line-height: 60px;text-align: center">
      <img src="@/assets/logo.svg" width="90px" alt="false" v-show="logoTextShow">
      <b style="color: white" v-show="logoTextShow">后台管理系统</b>
    </div>
    <el-menu-item index="/houtai/home">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </template>

    </el-menu-item>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item index="/houtai/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/houtai/file">
        <i class="el-icon-document"></i>
        <span slot="title">文件管理</span>
      </el-menu-item>
    </el-submenu>


  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:{
    isCollapse:Boolean,
    logoTextShow:Boolean
  },
  methods:{
    handleSelect(){
      this.$route
    }
  }
}
</script>

<style scoped>

</style>