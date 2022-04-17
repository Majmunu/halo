<template>
  <!--!搜索框-->
  <div class="col-xl-9 root clearfix">
    <div class="header clearfix">
      <div class="search">
        <SearchBox/>
      </div>
    </div>
    <!--@数码分类-->
    <el-card class="box-card">
      <div class="category">
        <div class="kind">
          <button type="button" class="btn btn-primary">手机</button>
          <button type="button" class="btn btn-secondary">平板</button>
          <button type="button" class="btn btn-success">耳机</button>
          <button type="button" class="btn btn-danger">电脑外设</button>
          <button type="button" class="btn btn-warning">智能家居</button>
          <button type="button" class="btn btn-info">穿戴设备</button>
          <button type="button" class="btn btn-light">数码配件</button>
          <button type="button" class="btn btn-dark">游戏影音</button>
          <button type="button" class="btn btn-success">网络设备</button>
          <button type="button" class="btn btn-link">全部</button>
        </div>
      </div>
    </el-card>


    <!--  <div class="tag">
        <div class="tag1">
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
      </div>-->
    <!--?新品发布轮播图-->
    <el-card class="box-card">
      <h3>🎉新品发布</h3>
      <el-carousel :interval="4000" type="card" height="200px" class="new">
        <el-carousel-item v-for="(image,index) in item" :key="index">
          <img :src="image.url" alt="图片加载失败" width="537px" height="200px">
          <h3 class="medium">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <!--!今日热门-->
    <el-card class="box-card">
      <h3>📅今日热门</h3>
      <div>
        <div class="new">
          <el-row class="col-xl-12 xiaomi ">
            <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0" class="col-xl-3 ">
              <el-card :body-style="{ padding: '0px' }" >
                <img src="@/assets/images/digital/section1-1.jpg" class="image" width="250" height="118">
                <div style="padding: 14px;">
                  <span>小米11 Ultra</span>
                  <div class="bottom clearfix">
                    <time class="time" time>{{ currentDate }}</time>
                    <el-button type="text" class="button">🥇71.1万热度</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

      </div>
    </el-card>
<!--@时间线-->
    <el-card class="box-card">
      <h3>📅发布日历</h3>
    <div class="block timeline col-xl-2">
      <el-timeline>
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
      <div class="col-xl-10 date">
        <el-calendar :range="['2019-03-04', '2030-03-24']">
        </el-calendar>
      </div>
    </el-card>
  </div>
</template>

<script>
import SearchBox from "@/components/pages/Digital/SearchBox";

export default {
  name: "Digital",
  components:{
    SearchBox
//~@/assets/images/digital/1.jpg
  },
  data(){
    return{
      item:[
        {url:require('@/assets/images/digital/1.png')},
        {url:require('@/assets/images/digital/2.jpg')},
        {url:require('@/assets/images/digital/3.jpg')},
        {url:require('@/assets/images/digital/4.jpg')},
        {url:require('@/assets/images/digital/5.jpg')},
        {url:require('@/assets/images/digital/6.jpg')},
      ],
      activities: [{
        content: '真我Q5',
        timestamp: '2022-04-20',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-date'
      }, {
        content: '一加ACE',
        timestamp: '2022-04-21',
        type: 'success',
        size: 'large',
        icon: 'el-icon-date'

      }, {
        content: 'realme Pad',
        timestamp: '2022 上半年',
        type: ' warning',
        size: 'large',
        icon: 'el-icon-date'
      }, {
        content: '一加10',
        timestamp: '2022 上半年',
        type: 'danger',
        size: 'large',
        icon: 'el-icon-date'
      }]
    }
  }
}

</script>

<style scoped>
.root{
  margin-left: auto;
  margin-right: auto;
  border: 3px solid #e9ecef;
}
.search{
  float: left;
  display: flex;
  flex-direction: column;
  background-color: #e9ecef;
}
.header{
  border: 3px solid #e9ecef;
}
.tag{
  border: 3px solid #e9ecef;
  padding: 10px;

}
.tag1{

  padding-left: 20px;

}
.box-card{
  margin-top: 20px;
}
.kind{

}
.btn{
  margin-left: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.block{

}
.xiaomi{
margin-top: 50px;
}
.timeline{
  float: left;
  margin-top: 100px;
}
.date{
  float: right;
}
h3{
  float: left;
  position: absolute;
}
.new{
  margin-top: 25px;
}
</style>