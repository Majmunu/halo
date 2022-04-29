<template>
  <div class="root col-xl-9 clearfix">
    <div class="bread">
      <Breadcrumb>
        <BreadcrumbItem to="/home">首页</BreadcrumbItem>
        <BreadcrumbItem to="/wenda/home">问答</BreadcrumbItem>
        <BreadcrumbItem>问答详情</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <el-card class="box-card card">
      <h2>{{question.name}}</h2>
      <div class="author">
        <div class="author"> <Avatar icon="ios-person" size="large" /></div>

        <div class="date"><strong>{{question.user}}</strong></div>
        <div class="date">
          <span>发布时间：</span>
          <Time :time="question.time"  type="datetime" hash="#hash" />
        </div>
      </div>
      <div style="margin-top: 80px;margin-bottom: 20px">
<!--        <el-empty description="我是问题详情"></el-empty>-->
        <mavon-editor
            class="md"
            :value="question.content"
            :subfield="false"
            :defaultOpen="'preview'"
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
        />
      </div>
      <div>
        <Tag color="success">我是</Tag>
        <Tag color="success">问题</Tag>
        <Tag color="success">标签</Tag>
      </div>
      <div class="buttonitems">
        <Tooltip content="关注后获得更新提醒" placement="top-start">
          <Button type="success">关注</Button>
        </Tooltip>
        <button type="button" class="btn btn-light btn-sm shoucang">🏷️收藏</button>
      </div>
      <div class="i">
        <p>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
           回复
          </button>
          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <Input v-model="value19" :border="false" placeholder="输入回复..." />
          </div>
        </div>

      </div>

    </el-card>

    <el-card class="box-card card">
      <div>
        <div>
          <Tabs type="card">
            <TabPane label="最热">
              <div class="author">
                <div class="author"> <Avatar icon="ios-person" size="large" /></div>

                <div class="date"><strong>1</strong></div>
                <div class="date">
                  <span>发布时间：</span>
                  <Time :time="time2" hash="#hash" />
                </div>
              </div>

              <div class="empty">
                <el-empty description="我是问题详情"></el-empty>
              </div>

              <div class="i">
                <p>
                  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    回复
                  </button>
                  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                </p>
                <div class="collapse" id="collapseExample1">
                  <div class="card card-body">
                    <Input v-model="value19" :border="false" placeholder="输入回复..." />
                  </div>
                </div>
              </div>

            </TabPane>
            <TabPane label="最新">
              最新
            </TabPane>

          </Tabs>

        </div>

      </div>

    </el-card>


  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "questionAndAnswerPage",
  created() {
    this.load()
  },
 data () {
  return {
    time2: (new Date()).getTime(),
    form: {},
    question: {},

    multipleSelection: [],

    dialogFormVisible: false,

    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
    content: '',
    viewDialogVis: false
  }
},
  methods: {
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
      const id=this.$route.query.id
      this.request.get("/question/"+id).then(res => {
        this.question = res.data

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

    download(url) {
      window.open(url)
    },
  }
}
</script>

<style scoped>
.root{
  border: 3px solid #e9ecef;
  margin-left: auto;
  margin-right: auto;
}
.bread{
  float: left;
  border: 2px solid #e9ecef;
}
.card{
  margin-top: 40px;
  text-align: left;
}
.author{
  margin-top: 10px;
  float: left;

}
.date{
  float: left;
margin-top: 18px;
  margin-left: 10px;
}
.empty{
  border: 3px solid #e9ecef;
  margin-top: 80px;
}
.shoucang{
  margin-left: 20px;
  text-align: center;
  margin-top: 2px;
}
.buttonitems{
  margin-top: 10px;
}
.i{
  margin-top: 12px;

}
.share-button{
  margin-top: 2px;
  margin-left: 30px;
}
.answer{
  float: right;
}
</style>