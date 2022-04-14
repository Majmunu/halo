<template>
  <div class="col-xl-9 row">
    <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">最新</el-menu-item>
      <el-menu-item index="2">待回答</el-menu-item>
      <el-menu-item index="3">周榜</el-menu-item>
      <el-menu-item index="4">月榜</el-menu-item>

    </el-menu>
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
</style>