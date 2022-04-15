<template>
<div class="root col-xl-3">
  <el-button type="success">发动态</el-button>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>热门标签</span>
      <el-button style="float: right; padding: 3px 0" type="text">全部</el-button>
    </div>
    <div  class="text item">  <!--*v-for="o in 4" :key="o"-->
<!--      {{'列表内容 ' + o }}-->
      <a href="#" class="badge badge-primary">小米11 Ultro</a>
      <a href="#" class="badge badge-secondary">Redmi K40</a>
      <a href="#" class="badge badge-success">Redmi K50</a>
      <a href="#" class="badge badge-danger">iQOO Neo6</a>
      <a href="#" class="badge badge-warning">三星GalaxyS22 Ultra</a>
      <a href="#" class="badge badge-info">vivo Pad</a>
      <a href="#" class="badge badge-light">vivo X Note</a>
      <a href="#" class="badge badge-dark">华为Mate40 Pro</a>
      <a href="#" class="badge badge-primary">iPhone 13 Pro Max</a>
      <a href="#" class="badge badge-secondary">一加8T</a>
      <a href="#" class="badge badge-success">Moto Edge S30</a>
      <a href="#" class="badge badge-danger">一加9Pro</a>
      <a href="#" class="badge badge-warning">华为P50 Pro</a>
      <a href="#" class="badge badge-info">OPPO Find X2 Pro</a>
      <a href="#" class="badge badge-light">魅族19</a>
      <a href="#" class="badge badge-dark">一加7Pro</a>
    </div>
  </el-card>
  <div class="BottomCard clearfix">
      <div slot="header" class="clearfix">
        <span>热门问答</span>
      </div>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action " aria-current="true">
        <span class="badge badge-pill badge-danger">1</span> 有关电子产品的知名梗有那些？
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <span class="badge badge-pill badge-warning">2</span> 如果电池技术取得了突破,【折叠屏】会迎来大爆发吗？
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <span class="badge badge-pill badge-info">3</span>2022年了，你还觉得【屏下摄像头】是未来吗？
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <span class="badge badge-pill badge-secondary">4</span>你对多设备生态的理解和体会是怎样的？
      </a>
      <a class="list-group-item list-group-item-action disabled">
        <span class="badge badge-pill badge-secondary">5</span> 在各手机系统中有什么好用的创新之处？
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "TheTopicsCard",
 /*data(){
    return{
      QuestionCard:[
        {text1:"如果电池技术取得了突破,【折叠屏】会迎来大爆发吗？"},
        {text2:"2022年了，你还觉得【屏下摄像头】是未来吗？"},
        {text2:"2022年了，你还觉得【屏下摄像头】是未来吗？"}
      ]
    }
 },*/
}
</script>

<style scoped>
.text {
  font-size: 20px;

}

.item {
  margin-bottom: 18px;

}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {

}
.badge{
  margin-left: 5px;
}
.BottomCard{
  margin-top: 20px;

}
/*.tableBox{
  align-items: flex-start;
  font-size: 13px;

  float: left;
  text-align: left;
  width: 100%;
  margin: 0;
  padding: 0;


}*/
.list-group{
  margin-top: 15px;
  text-align: left;
}
.root{
  float: right;
  margin-right: 300px;
  margin-top: 15px;
}
.box-card{
  margin-top: 15px;
}
</style>