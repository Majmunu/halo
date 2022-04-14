<template>
<div class="table clearfix col-xl-6">
  <h4>问答贡献</h4>
  <div class="item clearfix">
    <div class="id">
      <strong>1</strong>
    </div>
    <div class="avatar">
      <el-avatar :size="44" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div class="user">
      <h6>柚理子</h6>
      <span>个人介绍</span>
    </div>


  </div>
</div>
</template>

<script>
export default {
  name: "ContributorTable"
}
</script>

<style scoped>
.table{

  height: 375px;
  border: 3px solid hotpink;
  background-color: white;
  margin-top: 50px;
}
.item{
  width: 244px;
  height: 44px;
  border: 3px solid hotpink;
  text-align: center;
  align-content: center;
}
.avatar,.user,.id{
  float: left;
  margin-left: 15px;
  text-align: center;
  align-content: center;
}
</style>