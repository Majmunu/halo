<template>
  <div class="clearfix col-xl-12 wai" >
    <div class="col-xl-9 box clearfix align-items-center justify-content-center" >

      <div class="col-xl-3" v-for="(card,id) in CardContent" :key="id" >
        <el-row >
          <el-col style="margin-right: 30px">
            <el-card shadow="always">
              <div class="icon">
                <Icon :type="card.ViewIcon" size="50" style="color: #00965e"/>
              </div>

              <div class="BannerContent">
                <div class="BannerTitle" >
                  <h2><router-link :to="card.link">{{card.title}}</router-link></h2>
                </div>
                <div class="BannerText">
                  <P >{{card.text}}</P>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

    </div>

  </div>





</template>

<script>
export default {
  name: "BannerCard",
  data(){
    return{
      CardContent:[
        {id:'001',icon:'el-icon-question',title:'问答',text:'提出问题并向他人学习',ViewIcon:'md-help',link:'/wenda'},
        {id:'002',icon:'el-icon-question',title:'热榜',text:'热议榜|互动榜|点赞榜',ViewIcon:'ios-medal',link:'/rebang'},
        {id:'003',icon:'el-icon-question',title:'话题',text:'学习和分享技术知识',ViewIcon:'md-document',link:'/huati'},
        {id:'004',icon:'el-icon-question',title:'数码',text:'和数码面对面交流',ViewIcon:'md-phone-portrait',link:'/shuma'}
      ]

    }
  },
  methods:{

  }
}
</script>

<style scoped>
.box{


  margin-left: auto;
  margin-right: auto;
  display: flex;

  /*border: 3px solid purple;*/


}
.BannerCard{


  padding-left: 50px;
  background-color: white;
  border-radius:10px;
  text-align: left;
  /*border: 3px solid purple;*/


}
li{
  float: left;
  display: flex;
  list-style-type: none;
  margin:0; padding:0;


}
.wai{


  margin-left: auto;
  margin-right:auto;


 /* border: 3px solid skyblue;*/


}
.icon{
  float: left;
  /*border: 3px solid red;*/

}
.BannerContent{
  float: right;
  /*border: 3px solid lightcoral;*/
  margin-bottom: 5px;


}
a{
  text-decoration: none;
  color: black;
}

</style>