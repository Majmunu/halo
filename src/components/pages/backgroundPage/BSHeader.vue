<template>
  <div style="line-height: 60px;
       display: flex">

    <div style="flex: 1;font-size: 18px;text-align: left;">
            <span :class="collapseBtnclass" style="cursor: pointer;" @click="collapse">
            </span>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block;margin-left: 20px;">
        <el-breadcrumb-item :to="{ path: '/halohome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/houtai/user' }">{{currentPathName}}</el-breadcrumb-item>
      </el-breadcrumb>

    </div>
      <div>

    </div>
    <el-dropdown style="width: 170px;cursor: pointer;">
      <div style="display: inline-block">

          <el-avatar size="medium" :src="user.avatarUrl" style="position: relative;top: 10px;right: 5px"></el-avatar>

      <span>{{ user.nickname }}</span>
      <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
      </div>
      <el-dropdown-menu slot="dropdown" style="margin-right: 50px;width: 100px;text-align: center">
        <el-dropdown-item>
          <router-link to="/person">个人信息</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/password">修改密码</router-link>
        </el-dropdown-item>
        <el-dropdown-item to="/login"><span @click="logout"><router-link to="/login">退出</router-link></span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {resetRouter} from "@/router";

export default {
  name: "BSHeader",
  props:{
    collapseBtnclass:String,
    user:Object


  },
  data(){
    return{
      currentPathName:''
    }
  },
 /* computed: {
    currentPathName () {
      return this.$store.state.currentPathName;　　//需要监听的数据
    }
  },*/
  watch:{
    '$route':function () {
      this.currentPathName=localStorage.getItem("currentPathName")
    }
  },

  methods:{
    collapse(){
      this.$emit("asideCollapse")
    },
    logout(){
      localStorage.removeItem("user")
      localStorage.removeItem("menus")
      // 重置路由
      resetRouter()
      this.$router.push("/login")
      localStorage.removeItem("user")
      this.$message.success("退出成功")
    }

  }
}
</script>

<style scoped>

</style>