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
    <div v-for="item in menus" :key="item.id" >

      <div v-if="item.path">

        <el-menu-item :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>

        </el-menu-item>

      </div>

      <div v-else>
        <el-submenu :index="item.id+''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <div v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="subItem.path">
              <i :class="subItem.icon"></i>
              <span slot="title">{{subItem.name}}</span>
            </el-menu-item>
          </div>
        </el-submenu>

      </div>

    </div>



<!--    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item index="/houtai/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/houtai/role">
        <i class="el-icon-document"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="/houtai/menu">
        <i class="el-icon-document"></i>
        <span slot="title">菜单管理</span>
      </el-menu-item>
      <el-menu-item index="/houtai/file">
        <i class="el-icon-document"></i>
        <span slot="title">文件管理</span>
      </el-menu-item>

    </el-submenu>-->


  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:{
    isCollapse:Boolean,
    logoTextShow:Boolean,

  },
  data(){
    return{
      menus:localStorage.getItem("menus")?JSON.parse(localStorage.getItem("menus")):[],

    }
  },
  created() {

  },
  methods:{
    handleSelect(){
      this.$route
    }
  }
}
</script>

<style scoped>
.el-menu--collapse span{
  visibility: hidden;
}
</style>