<template>
  <div class=" col-xl-12   wai">
    <div class="col-xl-9 box clearfix align-items-center justify-content-center">
      <ul>
        <li v-for="(card,id) in CardContent" :key="id">
          <div class="BannerCard col-xl-9  " >
            <i :class="`{{card.icon}}`"></i>
            <div class="BannerContent">
              <div class="BannerTitle" >
                <h2>{{card.title}}</h2>
              </div>
              <div class="BannerText">
                <P>{{card.text}}</P>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>



</template>

<script>
export default {
  name: "BannerCard",
  data(){
    return{
      CardContent:[
        {id:'001',icon:'el-icon-question',title:'问答',text:'提出问题并向他人学习'},
        {id:'002',icon:'el-icon-question',title:'热榜',text:'提出问题并向他人学习'},
        {id:'003',icon:'el-icon-question',title:'话题',text:'提出问题并向他人学习'},
        {id:'004',icon:'el-icon-question',title:'数码',text:'提出问题并向他人学习'}
      ]

    }
  }
}
</script>

<style scoped>
.box{

  float: none;
  margin-left: 189px;
  margin-right: auto;
  border: 3px solid khaki;
  display: flex;
  position: absolute;


}
.BannerCard{

  border: 2px solid skyblue;
  padding-left: 50px;
  background-color: white;
  border-radius:10px;
  text-align: left;


}
li{
  float: left;
  display: flex;
}
.wai{
  border: 2px solid skyblue;
  background-color: #2c3e50;
}
</style>