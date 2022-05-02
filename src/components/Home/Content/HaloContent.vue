<template>
<div class="col-xl-12 root ">

  <div class="box col-xl-9">
    <el-card class="box-card card">
      <h3 style="float: left;margin-bottom: 10px">精彩内容</h3>
      <Icon style="float: left;size: 30px;color: #00965e" size="30" type="ios-arrow-forward" />
    <div class="HighlightImage clearfix ">

      <div class="ContentTitle" >

      </div>
      <div class="table" style="margin-top: 50px">
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
  margin-top: 50px;
}
.root{
  /*border: 3px solid lightcoral;*/
  margin-top: 30px;
}
</style>