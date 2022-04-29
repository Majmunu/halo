<template>

    <div class="infinite-list-wrapper root col-xl-9" style="overflow:auto">
<!--      <div style="margin: 10px 0">
        <el-input style="width: 200px" placeholder="请输入名称" suffix-icon="el-icon-search" v-model="name"></el-input>
        <el-button class="ml-5" type="primary" @click="load">搜索</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </div>-->
      <div class="itemleft col-xl-9">
        <el-card class="box-card card">

          <Tabs type="card">
            <TabPane label="最新">

              <ul
                  class="list list-group list-group-flush"
                  v-infinite-scroll="loadPage"
                  infinite-scroll-immediate="false"
                  infinite-scroll-disabled="disabled">
<!--                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>-->
                <li
                    v-for="item in tableData"
                    class="list-item list-group-item"
                    @click="$router.push('/wenda/question?id=' + item.id)"
                    :key="item.id"
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
                    <div class="qaTitle bi-cursor-text bi bi-cursor">
                      <h6 class='bi-cursor-text'>{{ item.name }}</h6>
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
                          <a href="">{{ item.user }}</a>
                          <span>提问于</span>
                          <Time :time="item.time" type="datetime" />
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
import axios from "axios";
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
      time2: (new Date()).getTime(),
      form: {},
      tableData: [],
      name: '',
      multipleSelection: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      dialogFormVisible: false,
      teachers: [],
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      content: '',
      viewDialogVis: false
    }

  },
  created() {

      this.load()

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
    loadPage () {
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
    },
    view(content) {
      this.content = content
      this.viewDialogVis = true
    },
    // 绑定@imgAdd event
    imgAdd(pos, $file) {
      let $vm = this.$refs.md
      // 第一步.将图片上传到服务器.
      const formData = new FormData();
      formData.append('file', $file);
      axios({
        url: 'http://localhost:9090/file/upload',
        method: 'post',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      }).then((res) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        $vm.$img2Url(pos, res.data);
      })
    },
    load() {
      this.request.get("/question/page", {
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
    changeEnable(row) {
      this.request.post("/question/update", row).then(res => {
        if (res.code === '200') {
          this.$message.success("操作成功")
        }
      })
    },
    handleAdd() {
      this.dialogFormVisible = true
      this.form = {}
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogFormVisible = true
    },
    del(id) {
      this.request.delete("/question/" + id).then(res => {
        if (res.code === '200') {
          this.$message.success("删除成功")
          this.load()
        } else {
          this.$message.error("删除失败")
        }
      })
    },
    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val
    },
    delBatch() {
      let ids = this.multipleSelection.map(v => v.id)  // [{}, {}, {}] => [1,2,3]
      this.request.post("/question/del/batch", ids).then(res => {
        if (res.code === '200') {
          this.$message.success("批量删除成功")
          this.load()
        } else {
          this.$message.error("批量删除失败")
        }
      })
    },
    save() {
      this.request.post("/question", this.form).then(res => {
        if (res.code === '200') {
          this.$message.success("保存成功")
          this.dialogFormVisible = false
          this.load()
        } else {
          this.$message.error("保存失败")
        }
      })
    },
    reset() {
      this.name = ""
      this.load()
    },
    handleSizeChange(pageSize) {
      console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },
    download(url) {
      window.open(url)
    },
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
  text-align: left;
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