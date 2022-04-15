<template>
  <div class="col-xl-12 root">

    <div class="Recommend col-xl-9">
      <el-card class="box-card card">
      <div class="RecommendTitle">
        <h3>推荐专区</h3>
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

}
.root{
  margin-top: 40px;
}
</style>