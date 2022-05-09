<template>
  <div class="root">
    <div class="Nav col-xl-6 clearfix">


      <List item-layout="vertical" class="clearfix">
        <el-card class="box-card">
          <Tabs type="card">
            <TabPane label="今日热门"
                     class="list"
                     v-infinite-scroll="loadpage"
                     infinite-scroll-disabled="disabled">

              <ListItem
                  v-for="item in tableData"
                  :key="item.id"
                  class="test infinite-list-item"
              >
                <div
                    style="font-size: 1.25rem;text-align: left;margin-left: 13px;padding-bottom: 1rem;font-weight: 500;color: rgba(33,37,41)!important;"
                    @click="$router.push('/rebang/tiezi?id=' + item.id)"
                ><!--文章标题-->
                  {{item.name}}

                </div>

                <div
                    class="col-xl-12 text"
                    style="text-align: left;"
                    @click="$router.push('/rebang/tiezi?id=' + item.id)">
                  <el-avatar style="float: left" :size="30" :src="item.avatarUrl"></el-avatar>
                  <div style="float: left;margin-top: 5px;margin-left: 5px;color: #00965e;">
                    <!--发布人-->
                    {{ item.user }}
                  </div>
                  <div style="float: left;margin-top: 5px;margin-left: 5px">
                    <!--发布时间-->
                    <Time :time="item.time"  type="date" hash="#hash" />
                  </div>
                 <div style="float: right;">
                   <template>
                     <li style="float: left;margin-top: 3px">
                       <Icon type="ios-thumbs-up-outline" /> 234
                     </li>
                     <li style="float: left;margin-left: 10px;margin-top: 3px">
                       <Icon type="ios-chatbubbles-outline" /> 345
                     </li>

                   </template>
                 </div>


                </div>


<!--                <template slot="extra">
                  <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px" alt=""
                       @click="showArticle">
                </template>-->
              </ListItem>
              <p v-if="loading">加载中...</p>
              <p v-if="noMore">没有更多了</p>
            </TabPane>
            <TabPane label="最新发布">最新发布</TabPane>
            <TabPane label="最高热度">最高热度</TabPane>
          </Tabs>

        </el-card>
      </List>

    </div>
  </div>

</template>

<script>
import Navigation1 from "@/components/pages/HotList/Navigation1";
import axios from "axios";
import {serverIp} from "../../../../public/config";
import {resetRouter, setRoutes} from "@/router";
export default {
  name: "TopicsItem",
  components:{
    Navigation1
  },
  data () {
    return {
      count: 10,
      loading: false,
      form: {},
      tableData: [],
      name: '',
      multipleSelection: [],
      pageNum: 1,
      pageSize: 20,
      total: 0,
      dialogFormVisible: false,
      teachers: [],
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      content: '',
      viewDialogVis: false,
      article: {},
      comments:[],
      typeid:''

    }},
  created() {

    this.load()
    this.loadArticle()
    this.loadComment()

  },mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("我是School组件，收到了数据"+data);
      this.typeid=data
      this.load()
    });


  },
  computed: {
    noMore () {
      return this.tableData >= 10
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods:{

    loadpage () {
      this.loading = true
      setTimeout(() => {
        this.tableData += 2
        this.loading = false
      }, 2000)
    },

    showArticle(){
      this.$router.push({
        name:'tiezi'
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
        /*url: "http://" + serverIp + ":9090/file/upload",*/
        method: 'post',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      }).then((res) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        $vm.$img2Url(pos, res.data);
      })
    },
    load() {

      this.request.get("/article/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          typeid: this.typeid,
          name: this.name,
        }
      }).then(res => {

        this.tableData = res.data.records
        this.total = res.data.total

      })

    },
    loadArticle() {

      this.request.get("/article/"+id).then(res => {
        this.article = res.data
        console.log( "111"+this.article)
      })
    },

    changeEnable(row) {
      this.request.post("/article/update", row).then(res => {
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
      this.request.delete("/article/" + id).then(res => {
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
      this.request.post("/article/del/batch", ids).then(res => {
        if (res.code === '200') {
          this.$message.success("批量删除成功")
          this.load()
        } else {
          this.$message.error("批量删除失败")
        }
      })
    },
    save() {
      this.request.post("/article", this.form).then(res => {
        if (res.code === '200') {
          this.$message.success("保存成功")
          this.dialogFormVisible = false
          this.load()
          this.loadArticle()

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
.Nav{
  float: left;
  /*position: absolute;*/

}
.test{

}
.root{
  margin-top: 15px;
}
.text{
  display:-webkit-box;
  overflow: hidden;

  white-space: normal !important;

  text-overflow: ellipsis;

  word-wrap: break-word;-webkit-line-clamp: 3;-webkit-box-orient: vertical

}
</style>