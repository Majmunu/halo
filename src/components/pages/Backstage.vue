<template>
  <div style="min-height: 100vh;background-color: white;" >
    <el-container style="height:100%;"  size="mini">

      <el-aside
          :width="sideWidth+'px'"
          style="background-color: rgb(238, 241, 246);
          min-height: 100vh;
          box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
      ">
          <Aside :isCollapse="isCollapse" :logoTextShow="logoTextShow"/>
      </el-aside>

      <el-container>
        <el-header style="font-size: 12px;
            border-bottom: 1px solid #cccccc;">
          <!--          收缩按钮-->
          <BSHeader :collapseBtnclass="collapseBtnclass" @asideCollapse="collapse" :user="user"/>


        </el-header>


        <el-main>
          <router-view @refreshUser="getUser"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import 'animate.css'
import request from "@/utils/request";
import Aside from "@/components/pages/Backstage/Aside"
import BSHeader from "@/components/pages/Backstage/BSHeader";
export default {
  name: "Backstage",
  components: {
    Aside,
    BSHeader
  },

  data() {

    return {
      tableData: [],
      total:0,
      pageSize:10,
      pageNum:1,
      username: "",
      email:"",
      address:"",
      dialogFormVisible:false,
      form:{},
      multipleSelection:[],
      collapseBtnclass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,
      distance:1130,
      user:{}
    }
  },
  created() {
    this.getUser()
  },
  methods:{
    collapse(){ //点击收缩按钮触发
      this.isCollapse=!this.isCollapse
      if(this.isCollapse){ //收缩
        this.sideWidth=64
        this.collapseBtnclass='el-icon-s-unfold'
        this.logoTextShow=false
      }else { //展开
        this.sideWidth=200
        this.collapseBtnclass='el-icon-s-fold'
        this.logoTextShow=true
      }
    },
    getUser(){
      let username=localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).username:""
      this.request.get("/user/username/" + username).then(res=>{
        this.user=res.data
      })

    }

  }
}
</script>

<style scoped>
div{
  margin: 0;
  padding: 0;

}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>