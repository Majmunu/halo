<template>
<!--  <el-card class="box-card sticky-top" :body-style="{ padding: '0px' }">-->
      <nav class="navbar navbar-expand-lg navbar-light bg-light haloheader sticky-top font">
        <a class="navbar-brand" href="#">
          <img src="../../../assets/logo.svg" width="100" height="50" alt="" >
        </a>


        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li
                v-for="(courseContent,id) of TheHeadContent"
                :key="id"
                class="nav-item ">
              <router-link
                  :to="courseContent.address"
                  class="nav-link"
                  active-class="active"

              >{{courseContent.name}} <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item dropdown">

              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                发现
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                    v-for="(findContent,id) of findOutMore"
                    :key="id"
                    class="dropdown-item"

                    :to="findContent.address"
                >{{findContent.name}}</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">广告投放</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">注册登录</button>
          </form>
        </div>
      </nav>

<!--  </el-card>-->

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  name: "HaloHeader",
  data(){
    return{
      TheHeadContent:[
        {id:'001',name:'首页',address:'/home'},
        {id:'002',name:'问答',address:'/wenda'},
        {id:'003',name:'热榜',address:'/rebang'},
        {id:'004',name:'话题',address:'/huati'},
        {id:'005',name:'数码',address:'/shuma'},
      ],
      findOutMore:[
        {id:'001',name:'教程',address:'/jiaocheng'},
        {id:'002',name:'直播',address:'/zhibo'},
        {id:'003',name:'众测',address:'/zhongce'},
        {id:'004',name:'排行榜',address:'/paihangbang'},

      ],

    }
  }
}

</script>

<style scoped>
.haloheader{
 padding-left: 100px;
}
.font{
  font-size: 1rem;
  font-weight: 700!important;
}
.root{
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}
.box{
  background-color: white;
}
.nav-link:visited{
  color: #049861;
}

</style>