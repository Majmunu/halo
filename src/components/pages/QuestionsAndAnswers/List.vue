<template>

    <div class="infinite-list-wrapper root col-xl-9" style="overflow:auto">
      <div class="itemleft col-xl-9">
        <el-card class="box-card card">

          <Tabs type="card">
            <TabPane label="最新">

              <ul
                  class="list list-group list-group-flush"
                  v-infinite-scroll="load"
                  infinite-scroll-disabled="disabled"
              >
<!--                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>-->
                <li
                    v-for="i in count"
                    class="list-item list-group-item"
                    @click="showPush"
                >
                  <!--!问答消息提示-->
                  <div class="tip">
                    <button type="button" class="btn btn-primary">
                      回答 <span class="badge badge-light">9</span>
                      <span class="sr-only">回答</span>
                    </button>
                    <button type="button" class="btn btn-success">
                      阅读 <span class="badge badge-light">9</span>
                      <span class="sr-only">阅读</span>
                    </button>
                  </div>
                  <!--#问答简-->
                  <div class="qa">
                    <div class="qaTitle">
                      <h6>我是标题</h6>
                    </div>
                    <div>
                      <div class="tagPosition">
                        <div class="tagLeft">
                          <Tag checkable color="primary">我是</Tag>
                          <Tag checkable color="success">问题</Tag>
                          <Tag checkable color="error">类型</Tag>
                          <Tag checkable color="warning">标签</Tag>
                        </div>
                        <div class="quizzer">
                          <a href="">我是提问者</a>
                          <span>提问于</span>
                          <Time :time="time2" type="datetime" />
                        </div>

                      </div>

                    </div>
                  </div>

                </li>
              </ul>
              <p v-if="loading">加载中...</p>
              <p v-if="noMore">没有更多了</p>


            </TabPane>
            <TabPane label="待回答">标签二的内容</TabPane>
            <TabPane label="周榜">标签三的内容</TabPane>
            <TabPane label="月榜">标签三的内容</TabPane>
          </Tabs>
        </el-card>

      </div>

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
      ],
      time2: (new Date()).getTime()
    }

  },
  computed: {
    noMore () {
      return this.count >= 50
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
      }, 1000)
    },
    showPush(){
      this.$router.push({
        name:'question'
      })
    }
  },


}
</script>


<style scoped>
.root{
margin-right: auto;
  margin-left: auto;
  /*border: 3px solid skyblue;*/

}
ul{
  list-style-type: none;

}
li{
  /*border: 3px solid red;*/
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
  /*border: 3px solid hotpink;*/
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
  /*border: 3px solid khaki;*/
  float: right;
  vertical-align:top;
}
.items{
 /* border: 3px solid black;*/
  vertical-align:top;
  float: left;
}
.itemleft{
  /*border: 3px solid lawngreen;*/
  float: left;
}
.tip{
  float: left;
}
button{
  margin-left: 10px;
  margin-top: 14px;
}
.qa{
  float: left;
  margin-left: 30px;

}
.qaTitle{
  margin-bottom: 14px;
  line-height: 1.2;

  padding-right: 361px;
}
.quizzer{
  float: right;
  font-size: .875rem!important;
  margin-left: 60px;
}

.tagLeft{
  float: left;
}
a{
  color: #00965e;
}
</style>