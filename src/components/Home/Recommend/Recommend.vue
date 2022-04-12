<template>
<div class="Recommend">
  <div class="RecommendTitle">
    <h3>推荐专区</h3>
    <RecommendCard></RecommendCard>

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
  border: 3px solid purple;
  margin-top: 380px;
  width: 1140px;
  margin-left: 189px;


}
.RecommendTitle{
  padding-right: 1020px;
}
</style>