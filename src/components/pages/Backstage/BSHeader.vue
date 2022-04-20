<template>
  <div style="line-height: 60px;
       display: flex">

    <div style="flex: 1;font-size: 18px;text-align: left;">
            <span :class="collapseBtnclass" style="cursor: pointer;" @click="collapse">
            </span>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block;margin-left: 20px;">
        <el-breadcrumb-item :to="{ path: '/houtai' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/houtai/user' }">用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
      <div>

    </div>
    <el-dropdown style="width: 170px;cursor: pointer;">
      <span>???{{  }}</span>
      <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
      <el-dropdown-menu slot="dropdown" style="margin-right: 50px;width: 100px;text-align: center">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "BSHeader",
  props:{
    collapseBtnclass:String,


  },
  data(){
    return{
      paths:[]
    }
  },
  methods:{
    collapse(){
      this.$emit("asideCollapse")
    }

  }
}
</script>

<style scoped>

</style>