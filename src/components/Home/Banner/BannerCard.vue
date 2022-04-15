<template>
  <div class="clearfix col-xl-12 wai">
    <div class="col-xl-9 box clearfix align-items-center justify-content-center">

      <!--        <ul>
                <li v-for="(card,id) in CardContent" :key="id">

                  <div class="BannerCard col-xl-12   " >
                    <div class="icon">
                      <svg class="bi" width="32" height="32" fill="currentColor">
                        <use xlink:href="bootstrap-icons.svg#heart-fill"/>
                      </svg>
                      <i class="el-icon-loading"></i>
                    </div>

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
              </ul>-->
      <div class="col-xl-3" v-for="(card,id) in CardContent" :key="id">
        <el-row >
          <el-col >
            <el-card shadow="always">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="50" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                </svg>

              </div>

              <div class="BannerContent">
                <div class="BannerTitle" >
                  <h2>{{card.title}}</h2>
                </div>
                <div class="BannerText">
                  <P>{{card.text}}</P>
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
  display: flex;
  position: absolute;
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

  background-color: #2c3e50;
  margin-left: auto;
  margin-right:auto;
  margin-top: 15px;
 /* border: 3px solid skyblue;*/


}
.icon{
  float: left;
  /*border: 3px solid red;*/
  display: inline;
}
.BannerContent{
  float: left;
  /*border: 3px solid lightcoral;*/
  display: inline;
}
.ul{

}
</style>