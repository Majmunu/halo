<template>
  <div class="box">
    <div class="Contributor">
      <div class="RecommendTitle">
        <h3>社区贡献者</h3>
      </div>
      <ContributorTable/>

    </div>


  </div>

</template>

<script>
import ContributorTable from "@/components/Home/HaloContributor/ContributorTable";
export default {
  name: "Contributor",
  components:{
    ContributorTable
  }
}
</script>

<style scoped>
.box{
  border: 3px solid green;
  background-color: #e9ecef;
}
.Contributor{
  border: 3px solid purple;
  margin-top: 10px;
  width: 1140px;
  margin-left: 189px;
}
.RecommendTitle{
  padding-right: 1000px;
}
</style>