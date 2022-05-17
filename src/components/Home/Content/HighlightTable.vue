<template>
<div class="HighlightTable col-xl-8">
  <ul class="col-xl-12" >
    <li v-for="item in tableData.slice(0,8)" :key="item.id" style="margin-top: 10px">
      <div class="item col-xl-12"   @click="$router.push('/jiaocheng/course?id=' + item.id)">
        <div class="image" >
          <img :src="item.img" alt="" width="80" height="67">
        </div>
        <el-row class="content">
          <el-col span="24" style="float: left;text-align: left;margin-left: 10px;height: 38px;">
            <h6 >{{item.name}}</h6>
          </el-col>

          <el-col span="24" style="float: left;text-align: left;margin-left: 10px">
            <a href="">{{ item.user }}</a>
            <span style="margin-left: 10px"><Time :time="item.time"  type="date" hash="#hash" /></span>
          </el-col>

        </el-row>
      </div>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: "HighlightTable",
  created() {
     /* this.load()*/
      /*this.loadArticle()*/
    this.loadCourse()
  },
  data(){
    return{
      form: {},
      tableData: [],
      name: '',
      multipleSelection: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},

    }
  },
  methods:{
    /*load() {
      this.request.get("/article/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
        }
      }).then(res => {

        this.tableData = res.data.records
        this.total = res.data.total


      })

    },*/
   /* loadArticle() {

      this.request.get("/article/"+id).then(res => {
        this.article = res.data
      })
    },
    changeEnable(row) {
      this.request.post("/article/update", row).then(res => {
        if (res.code === '200') {
          this.$message.success("操作成功")
        }
      })
    },*/
    loadCourse() {
      this.request.get("/course/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
        }
      }).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
        console.log("hahah"+this.tableData)
      })
    },
  }
}
</script>

<style scoped>
.HighlightTable{
  /*width: 778px;*/
  /*border: 3px solid slateblue;*/
  float: right;


}
ul{
  list-style-type: none;
}
.item{
 /* border: 3px solid gold;*/
 /* width: 356px;
  height: 76px;*/


}
.image{

  width: 80px;
  height: 67px;
  float: left;
}
.content{
  width: 190px;
  height: 67px;
  float: left;
}
li{
  display: flex;
  float: left;
  margin-bottom: 14px;
  padding-left: 5px;
  margin-left: 5px;

}
a{
  color: #00965e;
}
</style>