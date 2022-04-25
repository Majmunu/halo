<template>
<div>
  <el-row>
    <el-col span="12">
      <el-card style="width: 438px;height:448px">
        <div id="main" style="width: 374px;height: 400px">
        </div>
      </el-card>
    </el-col>

  </el-row>




</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "BSHome",
  data(){
    return{

    }
  },
  mounted() {

    var option;

    option = {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [],
          type: 'line'
        }
      ]
    };
    var chartDom = document.getElementById('main');
    this.request.get("/echarts/example").then(res=>{
      option.xAxis.data=res.data.x
      option.series[0].data=res.data.y
      myChart.setOption(option)
    })
    var myChart = echarts.init(chartDom);
    myChart.setOption(option)


  }
}
</script>

<style scoped>

</style>