<template>

    <div class="infinite-list-wrapper root col-xl-9" style="overflow:auto">
      <ul
          class="list col-xl-9 clearfix items"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item">
          <div class="icon clearfix col-xl-3">
            <el-badge :value="200" :max="99" class="item">
              <el-button size="small">回答</el-button>
            </el-badge>
            <el-badge :value="100" :max="10" class="item">
              <el-button size="small">阅读</el-button>
            </el-badge>
          </div>
          <div class="itemContent col-xl">
            <h6>Pe和Pe plus有什么区别呢</h6>
            <span class="badge badge-success">一加8T</span>
            <span class="badge badge-info">手机</span>
            <span class="author">那片梧桐那片语</span>
            <span class="date">今天11：15提问</span>

          </div>

          <div class="line"></div>
        </li>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </ul>
      <div class="LabelCard col-xl-3 clearfix">

        <TheLabelCard/>
      </div>


    </div>





</template>


<script>
import TheLabelCard from "@/components/pages/QuestionsAndAnswers/TheLabelCard";
export default {
  name:'List',
  components:{TheLabelCard },
  data () {
    return {
      count: 10,
      loading: false,
      question:[
        {}
      ]
    }

  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>


<style scoped>
.root{
margin-right: auto;
  margin-left: auto;
  border: 3px solid skyblue;

}
ul{
  list-style-type: none;

}
li{
  border: 3px solid red;
}
.icon{
  padding: 10px;
  float: left;
}
.item{
 margin-left: 25px;
  float: left;

}
.itemContent{
  border: 3px solid hotpink;
  text-align: start;
}
.author{
  margin-left:250px;

  font-size: .875rem!important;

}
.date{
  margin-left: 10px;
  font-size: .875rem!important;
}
.badge{
  margin-left: 5px;
}
.LabelCard{
  border: 3px solid khaki;
  float: right;
  vertical-align:top;
}
.items{
  border: 3px solid black;
  vertical-align:top;
  float: left;
}
</style>