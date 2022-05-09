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
        <div style="float: right"  v-if="user.nickname === article.user">

          <el-button type="success" @click="handleEdit(article)">编辑 <i class="el-icon-edit"></i></el-button>
          <el-popconfirm
              class="ml-5"
              confirm-button-text='确定'
              cancel-button-text='我再想想'
              icon="el-icon-info"
              icon-color="red"
              title="您确定删除吗？"
              @confirm="del(article.id)"
          >
            <el-button type="danger" slot="reference" >删除 <i class="el-icon-remove-outline"></i></el-button>
          </el-popconfirm>


        </div>
        <div class="author">



          <div class="author">  <el-avatar    :size="40" :src="article.avatarUrl"></el-avatar> </div>

          <div class="date"><strong>{{article.user}}</strong></div>
          <div class="date">
            <span>发布于：</span>
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

            <button
                class="btn btn-primary"
                type="button" data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
              回复
            </button>
            <el-tooltip  placement="top-start" effect="light" >
          <div slot="content"><share :config="config"></share></div>
              <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>

             </el-tooltip>

          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <Input v-model="commentForm.content" :border="false" placeholder="输入回复..." />
              <el-button type="primary" size="small" @click="saveComment" style="width: 60px">评论</el-button>
            </div>
          </div>

        </div>

      </el-card>


      <el-card class="box-card card">
        <div>
          <div>
            <Tabs type="card">
              <TabPane label="最热评论">

                <div style="border: 3px solid white" class="clearfix">
                  <div
                      v-for="item in comments"
                      :key="item.id"
                      style="padding: 10px 0;display: flex;border-bottom: 1px solid #cccccc;">

                    <div style="width: 100px"><!--头像-->

                      <el-avatar :size="50" :src="item.avatarUrl"></el-avatar>

                    </div>

                    <div style="flex: 1;padding-top: 5px;font-size: 14px;line-height: 25px"><!--内容-->
                      <b>{{ item.nickname }}：</b>
                      <span>{{ item.content }}</span>

                      <div style="display: flex; line-height: 20px; margin-top: 5px;border: 3px solid white" class="col-xl-12">
                        <div style="width: 160px;">
                          <i class="el-icon-time"></i><span style="margin-left: 5px"> <Time :time="item.time" type="datetime" /></span>
                        </div>
                        <div style="text-align: right; flex: 1;padding-right: 20px">
<!--                          <el-button style="margin-left: 5px" type="text" @click="handleReply(item.id)">回复</el-button>-->
                          <button
                              class="btn btn-primary btn-sm"
                              type="button"
                              data-toggle="collapse"
                              :data-target="`#`+`_`+item.id"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                              @click="handleReply(item.id)"
                          >
                            回复
                          </button>
                          <!--                        <el-button type="text" style="color: red" @click="delComment(item.id)"   v-if="user.nickname === item.nickname">删除</el-button>-->
                          <button
                              type="text"
                              class="btn btn-danger btn-sm"
                              @click="delComment(item.id)"
                              style="margin-left: 8px"
                              v-if="user.id === item.userId">删除</button>

                          <div class="collapse value" :id="`_`+item.id">
                            <div class="card card-body">
                              <Input v-model="commentForm.contentReplay" :border="false" placeholder="输入回复..." />
                              <el-button type="primary" size="small" @click="saveComment" style="width: 60px">评论</el-button>
                            </div>
                          </div>
                          <div  class="replay clearfix " v-if="item.children.length" style="text-align: left;vertical-align: top" >
                            <!--回复列表-->
                            <div v-for="subItem in item.children" :key="subItem.id"  style=" padding: 5px 20px;border-bottom: 1px solid #cccccc;">
                              <!--          回复列表-->
                              <div style="font-size: 14px; padding: 5px 0; line-height: 25px">
                                <div>
                                  <b style="color: #3a8ee6" v-if="subItem.pnickname">@{{ subItem.pnickname }}</b>
                                </div>
                                <div style="padding-left: 5px">
                                  <el-avatar :size="30" :src="subItem.avatarUrl" style="margin-right: 5px"></el-avatar>
                                  <b >{{ subItem.nickname }}：</b>
                                  <span>{{ subItem.content }}</span>
                                </div>

                                <div style="display: flex; line-height: 20px; margin-top: 5px; padding-left: 5px">
                                  <div style="width: 500px;">
                                    <i class="el-icon-time"></i><span style="margin-left: 5px">{{ subItem.time }}</span>
                                    <div class="collapse card card-body" :id="`_`+subItem.id">
                                      <Input v-model="commentForm.content" :border="false" placeholder="输入回复..." />
                                      <el-button type="primary" size="small" @click="saveComment">评论</el-button>
                                    </div>
                                  </div>

                                  <div style="text-align: right; flex: 1">
                                    <button
                                        class="btn btn-outline-primary btn-sm"
                                        type="button"
                                        data-toggle="collapse"
                                        :data-target="`#`+`_`+subItem.id"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                        @click="handleReply(subItem.id)"
                                    >
                                      回复
                                    </button>
                                    <button type="text"  class="btn btn-outline-danger btn-sm" style="margin-left: 5px"  @click="delComment(subItem.id)" v-if="user.id === subItem.userId">删除</button>

                                  </div>

                                </div>
                              </div>   <!--  内容-->
                            </div>
                          </div>
                        </div>

                      </div>



                    </div>


                  </div>
                </div>

              </TabPane>
              <TabPane label="最新评论">
                最新评论
              </TabPane>

            </Tabs>

          </div>

        </div>

      </el-card>

      <el-dialog title="文章信息" :visible.sync="dialogFormVisible" width="60%" >
        <el-form label-width="80px" size="small">
          <el-form-item label="文章标题">
            <el-input v-model="article.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="文章内容">
            <mavon-editor ref="md" v-model="article.content" :ishljs="true" @imgAdd="imgAdd"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </div>
      </el-dialog>


    </div>

  </template>

  <script>
    import axios from "axios";
    import {serverIp} from "../../../../public/config";


    export default {
      name: "TheArticleDetails",
      data () {
        return {
          time2: (new Date()).getTime(),
          form: {},
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

      },beforeCreate() {
        this.loadComment()
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
            url: "http://" + serverIp + ":9090/file/upload",
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
            console.log(this.comments)
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
              this.$router.push("/huati")
            } else {
              this.$message.error("删除失败")
            }
          })
        },

        save() {
          this.request.post("/article", this.article).then(res => {
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
          if (!this.user.id) {
            this.$message.warning("请登录后操作")

            return
          }
          this.commentForm.articleId=this.id
          if(this.commentForm.contentReplay){
            this.commentForm.content=this.commentForm.contentReplay
          }
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
        handleReply(pid){
          this.commentForm={pid:pid}
        },
        handleEdit(row) {
          this.article = JSON.parse(JSON.stringify(row))
          this.dialogFormVisible = true
        },
        handleAdd() {
          this.dialogFormVisible = true
          this.article = {}
        },

      },
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
.replay{
  background-color: #e9ecef!important;
}
  </style>
