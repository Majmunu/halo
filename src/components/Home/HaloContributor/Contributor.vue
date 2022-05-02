<template>
  <div class="box col-xl-12 ">
    <div class="Contributor col-xl-9">
      <el-card class="box-card card">
      <div class="RecommendTitle">
        <h3 style="float: left">社区贡献者</h3>
        <Icon style="float: left;size: 30px;color: #00965e" size="30" type="ios-arrow-forward" />

      </div>
      <ContributorTable/>
      </el-card>
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
  /*border: 3px solid green;*/
  background-color: #e9ecef;
}
.Contributor{
 /* border: 3px solid purple;*/
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
.RecommendTitle{
  float: left;

}
</style>