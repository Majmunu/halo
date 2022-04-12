<template>
  <div class="box">
  <ul>
    <li v-for="(card,id) in CardContent" :key="id">
 <div class="BannerCard">
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
  width: 1140px;
  margin-left: 190px;
}
.BannerCard{

  border: 2px solid skyblue;
  display: flex;
  width: 261px;
  margin-top: 30px;
  margin-left: 12px;
  padding-left: 50px;
  background-color: white;
  border-radius:10px;
  text-align: left;
}
li{
  float: left;
  display: flex;
}
</style>