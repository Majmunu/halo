<template>
  <div class="block col-xl-4">
    <el-carousel height="340px">
      <el-carousel-item v-for="item in item" :key="item">
        <div class="blockContent" >
          <img :src="item.url" alt="图片加载失败" width="330px" height="340px">
        </div>
      </el-carousel-item>
    </el-carousel>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HighlightImage",
  data(){
    return{
      item:[
        {url:require('@/assets/images/home/1.jpg')},
        {url:require('@/assets/images/home/2.jpg')},
        {url:require('@/assets/images/home/3.jpg')},

      ]
    }
  }
}
</script>

<style scoped>
.block{
  /*width: 355px;*/
  /*border: 3px solid red;*/
  float: left;
 /* height: 365px;*/

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>