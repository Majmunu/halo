<template>
  <div class="root">
    <div class="Nav col-xl-6 clearfix">


      <List item-layout="vertical" class="clearfix">

        <el-card class="box-card">
          <Tabs type="card">
            <TabPane label="今日热门">
              <ListItem
                  v-for="item in tableData"
                  :key="item.id"
                  class="test"
              >
                <div
                    style="border: 3px solid saddlebrown;text-align: left"
                    @click="$router.push('/rebang/tiezi?id=' + item.id)">
                  <ListItemMeta  :avatar="item.avatar" :title="item.name" shadow="hover"/>
              </div>

                <div
                    class="col-xl-12 text"
                    style="border: 3px solid saddlebrown;text-align: left"
                    @click="$router.push('/rebang/tiezi?id=' + item.id)">
                  {{ item.content }}

                </div>

                <template slot="action">

                  <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                  </li>
                  <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                  </li>
                </template>
                <template slot="extra">
                  <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px" alt=""
                       @click="showArticle">
                </template>
              </ListItem>
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
export default {
  name: "TopicsItem",
  components:{
    Navigation1
  },
  data () {
    return {
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

}},
  methods:{
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
          name: this.name,
        }
      }).then(res => {

        this.tableData = res.data.records
        this.total = res.data.total

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
  },created() {

      this.load()

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