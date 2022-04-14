<template>
  <div class="box col-xl-12 ">
    <div class="Contributor col-xl-9">
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
  margin-left: auto;
  margin-right: auto;
}
.RecommendTitle{
  float: left;

}
</style>