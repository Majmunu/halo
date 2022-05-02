<template>
<div class="box col-xl-12 clearfix">
  <div class="HaloFooter col-xl-9 clearfix">
    <el-card class="box-card card">
  <div class="FooterLeft col-xl-6">
    <div>
      <h2>HALO</h2>
      <h2>发现科技新生活</h2>
    </div>
    <div>

      <div>
        <span>关于酷安</span>
        <el-divider direction="vertical"></el-divider>
        <span> 联系合作</span>
        <el-divider direction="vertical"></el-divider>
        <span> 加入我们</span>
        <el-divider direction="vertical"></el-divider>
        <span>  版权声明</span>
        <el-divider direction="vertical"></el-divider>
        <span> 开发者平台</span>
      </div>
    </div>
    <div>
      <p>Copyright © 2010-2021 酷安网, All Rights Reserved.</p>
      <p>粤ICP备15030494号-2 | 粤网文 [2016] 2468-477号 | 粤IAS备 201704260017 | 粤B2-20180425</p>
      <p> 粤公网安备44030502000719号</p>
    </div>
  </div>
    <div class="FooterRight col-xl-6 ">
      <div class="col-xl-6 FooterRightImage">
        <img src="https://coolapk.com/qr/image?data=base64:aHR0cHM6Ly93ZWliby5jb20vdS8xNzQ2NTIzOTc0&h=514f5cf8" alt="">
        <div>
          <span>微信公众号</span>
        </div>

      </div>
      <div class="col-xl-6 FooterLeftImage">
        <img src="https://coolapk.com/qr/image?data=base64:aHR0cDovL3dlaXhpbi5xcS5jb20vci9IQ2s4SlBMRWpLLXpyYlpIOTN3Tw~~&h=5aac8427" alt="">
        <<div>
        <span>微博</span>
      </div>
      </div>
    </div>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  name: "HaloFooter"
}
</script>

<style scoped>
.box{
  /*border:3px solid red;*/
  margin-top: 20px;
}
.HaloFooter{
  /*border: 3px solid chocolate;*/

  margin-left: auto;
  margin-right: auto;
}
ul{
  list-style-type: none;
}
.FooterLeft{
  float: left;
}
.FooterRight{
  float: right;
}

li{
 float: left;
  margin-left: 10px;
}
.FooterLeftImage{
  float: left;
  display: inline;
 /* border: 3px solid slateblue;*/
}
.FooterRight{
  float: right;
  display: inline;
  /*border: 3px solid green;*/
}
.FooterRightImage{
  float: left;
}
</style>