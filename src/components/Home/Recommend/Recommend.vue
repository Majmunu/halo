<template>
  <div class="col-xl-12 root">

    <div class="Recommend col-xl-9">
      <el-card class="box-card card">
        <h3 style="float: left">推荐专区</h3>
        <Icon style="float: left;size: 30px;color: #00965e" size="30" type="ios-arrow-forward" />
      <div class="RecommendTitle">
        <RecommendCard></RecommendCard>

      </div>
      </el-card>
  </div>

</div>
</template>

<script>
import RecommendCard from "@/components/Home/Recommend/RecommendCard";
export default {
  name: "Recommend",
  components:{
    RecommendCard
  }
}
</script>

<style scoped>
.Recommend{
 /* border: 3px solid purple;*/

  width: 1140px;
 margin-left: auto;
  margin-right: auto;


}
.RecommendTitle{
margin-top: 50px;
}
.root{
  margin-top: 10px;
}
</style>