<template>
<div>
  <el-row  type="flex" style="margin-bottom: 30px;margin-top: 20px;" justify="space-around">
    <el-col :span="5">
      <el-card style="text-align: center">
        <div style="float: left;text-align: center;color: #409EFF">
          <Icon type="ios-contact" size="70"/>
        </div>
        <div class="clearfix textBox">
          <div style="color: #409EFF"  class="CardTitle">
            用户总数
          </div>
          <div class="CardNum">
            {{ this.Usertotal }}
          </div>
        </div>

      </el-card>
    </el-col>

    <el-col :span="5">
      <el-card style="text-align: center">
        <div style="float: left">
          <Icon type="md-planet" size="70" color="#67C23A"/>
        </div>
        <div class="clearfix textBox">
          <div style="color: #67C23A"  class="CardTitle">
            文件总数
          </div>
          <div class="CardNum">
            {{ this.Filetotal }}
          </div>
        </div>

      </el-card>
    </el-col>

    <el-col :span="5">
      <el-card>
        <div style="float: left">
          <Icon type="ios-create" size="70" color="#E6A23C"/>
        </div>
        <div class="clearfix textBox">
          <div style="color:#E6A23C" class="CardTitle">
            问答数
          </div>
          <div class="CardNum">
            {{ Quetotal }}
          </div>
        </div>

      </el-card>
    </el-col>

    <el-col :span="5">
      <el-card>
        <div style="float: left">
          <Icon type="ios-document" size="70" color="#F56C6C"/>
        </div>
        <div class="clearfix textBox">
          <div style="color: #F56C6C"  class="CardTitle">
            文章数
          </div>
          <div class="CardNum" >
           {{this.total}}
          </div>
        </div>

      </el-card>
    </el-col>

  </el-row>
  <el-row>
    <el-col span="12">
      <el-card style="width: 438px;height:448px">
        <div id="main" style="width: 374px;height: 400px">
        </div>
      </el-card>
    </el-col>
    <el-col span="12">
      <el-card style="width: 438px;height:448px">
        <div id="rose" style="width: 374px;height: 400px">
        </div>
      </el-card>
    </el-col>

  </el-row>




</div>
</template>

<script>
import * as echarts from 'echarts';
import request from "@/utils/request";
export default {
  name: "BSHome",
  data(){
    return{
      num:[],
      Filetotal:'',
      Usertotal:'',
      Quetotal:'',
      form: {},
      tableData: [],
      name: '',
      multipleSelection: [],
      pageNum: 1,
      pageSize: 10,
      total: '',
      dialogFormVisible: false,
      teachers: [],
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      content: '',
      viewDialogVis: false,
      article: {},
      AComments:[]

    }
  },
  mounted() {

    var option;

    option = {
      title: {
        text: '各季度会员数量统计',
        subtext: '趋势图',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ["第一季度","第二季度","第三季度","第四季度",]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [],
          type: 'line'
        },
        {
          data: [],
          type: 'bar'
        }
      ]
    };
    var chartDom = document.getElementById('main');
    this.request.get("/echarts/members").then(res=>{
      //option.xAxis.data=res.data.x
      option.series[0].data=res.data
      option.series[1].data=res.data
      myChart.setOption(option)
    })
    var myChart = echarts.init(chartDom);
    myChart.setOption(option)

    //玫瑰

    RoseOption = {
      legend: {
        top: 'bottom'
      },
      title: {
        text: '各季度会员数量统计',
        subtext: '比例图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {

          type: 'pie',
          radius: [20, 110],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [] //填空
        }
      ]
    };
    var RoseChartDom = document.getElementById('rose');
    var myRoseChart = echarts.init(RoseChartDom);
    var RoseOption;


    this.request.get("/echarts/members").then(res=> {
      RoseOption.series[0].data = [
        {name: "第一季度", value: res.data[0]},
        {name: "第二季度", value: res.data[1]},
        {name: "第三季度", value: res.data[2]},
        {name: "第四季度", value: res.data[3]},

      ]
      myRoseChart.setOption(RoseOption);
    })


  },
  created() {
    this.load()
    this.loadUser()
    this.loadFile()
    this.loadQuestion()
  },
  methods:{
    load() {
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

    },
    loadUser(){

      request.get("/user/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          username: this.username,
          email:this.email,
          address:this.address
        }
      }).then(res=>{
        this.tableData=res.data.records
        this.Usertotal=res.data.total
      })
      this.request.get("/role").then(res => {
        this.roles = res.data
      })

    },
    loadFile(){

      request.get("/file/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
        }
      }).then(res=>{
        this.tableData=res.data.records
        this.Filetotal=res.data.total
      })

    },
    loadQuestion() {
      this.request.get("/question/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
        }
      }).then(res => {

        this.tableData = res.data.records
        this.Quetotal = res.data.total

      })

    },
  }
}
</script>

<style scoped>
.CardTitle{
  line-height: 18px;
  color: rgba(0,0,0,.45);
  font-size: 16px;
  margin-bottom: 12px;

}
.CardNum{

  padding: 10px 0;
  font-weight: bold
}
.textBox{
  text-align: left;
  margin-left: 100px
}
</style>