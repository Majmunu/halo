<template>
  <div class="col-xl-9 row clearfix">
    <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">今日热门</el-menu-item>
      <el-menu-item index="3">周榜</el-menu-item>
      <el-menu-item index="4">月榜</el-menu-item>


    </el-menu>
    <div class="twt">
      <el-button type="success">发动态</el-button>
    </div>

  </div>

</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
.row{

  margin-left: auto;
  margin-right: auto;

}
.twt{
position: absolute;
  margin-top: 10px;
  margin-left: 300px;




}
</style>