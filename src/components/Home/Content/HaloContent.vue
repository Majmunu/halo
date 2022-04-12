<template>
  <div class="box">
    <div class="HighlightImage">
    <div class="ContentTitle">
      <h3>精彩内容</h3>
    </div>
    <div class="table">
      <HighlightImage/>
      <HighlightTable/>
    </div>

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
  padding-right: 1020px;
}
.HighlightImage{
  width: 1140px;
  margin-left: 189px;
  margin-top: 80px;
  background-color: #99a9bf;


}
</style>