<template>
<div class="col-xl-12 root ">

  <div class="box col-xl-9">
    <el-card class="box-card card">
    <div class="HighlightImage clearfix ">
      <div class="ContentTitle">
        <h3>精彩内容</h3>
      </div>
      <div class="table ">
        <HighlightImage/>
        <HighlightTable/>
      </div>

    </div>
      </el-card>
  </div>

</div>


</template>

<script>
import HighlightImage from "@/components/Home/Content/HighlightImage";
import HighlightTable from "@/components/Home/Content/HighlightTable";
export default {
  name: "HaloContent",
  components:{
    HighlightImage,
    HighlightTable
  }
}
</script>

<style scoped>

.ContentTitle{

}
.HighlightImage{
 /* width: 1140px;
  margin-left: 189px;
  margin-top: 80px;*/

  /*border: 3px solid khaki;*/
}
.box{
  margin-left: auto;
  margin-right: auto;
}
.root{
  /*border: 3px solid lightcoral;*/
}
</style>