<template>

    <div class="root col-xl-9 clearfix">
      <div class="bread">
        <Breadcrumb>
          <BreadcrumbItem to="/halohome">首页</BreadcrumbItem>
          <BreadcrumbItem to="/rebang/home">热榜</BreadcrumbItem>
          <BreadcrumbItem>帖子详情</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <el-card class="box-card card">
        <h2>{{article.name}}</h2>
        <div class="author">
          <div class="author"> <Avatar icon="ios-person" size="large" /></div>

          <div class="date"><strong>{{article.user}}</strong></div>
          <div class="date">
            <span>发布时间：</span>
            <Time :time="article.time"  type="datetime" hash="#hash" />
          </div>
        </div>
        <div style="margin-top: 80px;margin-bottom: 20px">
          <mavon-editor
              class="md"
              :value="article.content"
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
          <Tag color="success">帖子</Tag>
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
            <button
                class="btn btn-primary"
                type="button" data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
              回复
            </button>
            <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <Input v-model="commentForm.content" :border="false" placeholder="输入回复..." />
              <el-button type="primary" size="small" @click="saveComment">评论</el-button>
            </div>
          </div>

        </div>

      </el-card>


      <el-card class="box-card card">
        <div>
          <div>
            <Tabs type="card">
              <TabPane label="最热">

                <div style="border: 3px solid red" class="clearfix">
                  <div
                      v-for="item in comments"
                      :key="item.id"
                      style="border-bottom: 1px solid #cccccc;padding: 10px 0;display: flex">

                    <div style="width: 100px"><!--头像-->
                      <el-avatar :size="50" :src="item.avatarUrl"></el-avatar>

                    </div>

                    <div style="flex: 1;padding-top: 5px;font-size: 14px;line-height: 25px"><!--内容-->
                      <b>{{ item.nickname }}：</b>
                      <span>{{ item.content }}</span>

                      <div style="display: flex; line-height: 20px; margin-top: 5px">
                        <div style="width: 200px;">
                          <i class="el-icon-time"></i><span style="margin-left: 5px"> <Time :time="item.time" type="datetime" /></span>
                        </div>
                        <div style="text-align: right; flex: 1;border: 3px solid saddlebrown;padding-right: 20px">
                          <el-button style="margin-left: 5px" type="text" @click="handleReply(item.id)">回复</el-button>
                          <el-button type="text" style="color: red" @click="delComment(item.id)"   v-if="user.nickname === item.nickname">删除</el-button>
                        </div>
                      </div>


                    </div>

                  </div>


                </div>

<!--                <div class="i">
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
                </div>-->

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
      name: "TheArticleDetails",
      data () {
        return {
          time2: (new Date()).getTime(),

          article: {},

          multipleSelection: [],
          dialogFormVisible: false,
          user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
          content: '',
          viewDialogVis: false,
          commentContent:'',
          comments:[],
          commentForm:{},
          id: this.$route.query.id,


        }
      },
      created() {
        this.load()
        this.loadComment()
        console.log(this.user.id)
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

          this.request.get("/article/"+this.id).then(res => {
            this.article = res.data
          })
        },
        loadComment(){

          this.request.get("/comment/tree/"+this.id).then(res => {
            this.comments = res.data
          })
        },
        changeEnable(row) {
          this.request.post("/article/update", row).then(res => {
            if (res.code === '200') {
              this.$message.success("操作成功")
            }
          })
        },
        del(id) {
          this.request.delete("/article/" + id).then(res => {
            if (res.code === '200') {
              this.$message.success("删除成功")
              this.load()
            } else {
              this.$message.error("删除失败")
            }
          })
        },

        save() {
          this.request.post("/article", this.form).then(res => {
            if (res.code === '200') {
              this.$message.success("保存成功")
              this.dialogFormVisible = false
              this.load()
            } else {
              this.$message.error("保存失败")
            }
          })
        },

        saveComment() {
          if (!this.user.username) {
            this.$message.warning("请登录后操作")

            return
          }
          this.commentForm.articleId=this.id
          this.request.post("/comment", this.commentForm).then(res => {
            if (res.code === '200') {
              this.$message.success("评论成功")
              this.commentForm = {}  // 初始化评论对象内容
              this.loadComment()
            } else {
              this.$message.error(res.msg)
            }
          })
        },
        delComment(id) {
          this.request.delete("/comment/" + id).then(res => {
            if (res.code === '200') {
              this.$message.success("删除成功")
              this.loadComment()
            } else {
              this.$message.error("删除失败")
            }
          })
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

  </style>
