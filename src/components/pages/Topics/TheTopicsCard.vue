<template>
<div class="root col-xl-3">
  <el-button type="success" @click="handleAdd" >发动态</el-button>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>热门标签</span>
      <el-button style="float: right; padding: 3px 0" type="text">全部</el-button>
    </div>
    <div  class="text item">  <!--*v-for="o in 4" :key="o"-->
<!--      {{'列表内容 ' + o }}-->
      <a href="#" class="badge badge-primary">小米11 Ultro</a>
      <a href="#" class="badge badge-secondary">Redmi K40</a>
      <a href="#" class="badge badge-success">Redmi K50</a>
      <a href="#" class="badge badge-danger">iQOO Neo6</a>
      <a href="#" class="badge badge-warning">三星GalaxyS22 Ultra</a>
      <a href="#" class="badge badge-info">vivo Pad</a>
      <a href="#" class="badge badge-light">vivo X Note</a>
      <a href="#" class="badge badge-dark">华为Mate40 Pro</a>
      <a href="#" class="badge badge-primary">iPhone 13 Pro Max</a>
      <a href="#" class="badge badge-secondary">一加8T</a>
      <a href="#" class="badge badge-success">Moto Edge S30</a>
      <a href="#" class="badge badge-danger">一加9Pro</a>
      <a href="#" class="badge badge-warning">华为P50 Pro</a>
      <a href="#" class="badge badge-info">OPPO Find X2 Pro</a>
      <a href="#" class="badge badge-light">魅族19</a>
      <a href="#" class="badge badge-dark">一加7Pro</a>
    </div>
  </el-card>
  <div class="BottomCard clearfix">
      <div slot="header" class="clearfix">
        <span>热门问答</span>
      </div>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action " aria-current="true">
        <span class="badge badge-pill badge-danger">1</span> 有关电子产品的知名梗有那些？
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <span class="badge badge-pill badge-warning">2</span> 如果电池技术取得了突破,【折叠屏】会迎来大爆发吗？
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <span class="badge badge-pill badge-info">3</span>2022年了，你还觉得【屏下摄像头】是未来吗？
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <span class="badge badge-pill badge-secondary">4</span>你对多设备生态的理解和体会是怎样的？
      </a>
      <a class="list-group-item list-group-item-action disabled">
        <span class="badge badge-pill badge-secondary">5</span> 在各手机系统中有什么好用的创新之处？
      </a>
    </div>
  </div>
  <el-dialog title="文章信息" :visible.sync="dialogFormVisible" width="60%" >
    <el-form label-width="80px" size="small">
      <el-form-item label="文章标题">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <mavon-editor ref="md" v-model="form.content" :ishljs="true" @imgAdd="imgAdd"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="文章信息" :visible.sync="viewDialogVis" width="60%" >
    <el-card>
      <div>
        <mavon-editor
            class="md"
            :value="content"
            :subfield="false"
            :defaultOpen="'preview'"
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
        />
      </div>
    </el-card>
  </el-dialog>
</div>
</template>

<script>
import axios from "axios";
import {setRoutes} from "@/router";

export default {
  name: "TheTopicsCard",
  data(){
    return{
      form: {},
      tableData: [],
      name: '',
      multipleSelection: [],
      dialogFormVisible: false,
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      content: '',
      viewDialogVis: false
    }
  },
  created() {
    this.load()
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
          setRoutes()
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
  }
}
</script>

<style scoped>
.text {
  font-size: 20px;

}

.item {
  margin-bottom: 18px;

}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {

}
.badge{
  margin-left: 5px;
}
.BottomCard{
  margin-top: 20px;

}
/*.tableBox{
  align-items: flex-start;
  font-size: 13px;

  float: left;
  text-align: left;
  width: 100%;
  margin: 0;
  padding: 0;


}*/
.list-group{
  margin-top: 15px;
  text-align: left;
}
.root{
  float: right;
  margin-right: 300px;
  margin-top: 15px;
}
.box-card{
  margin-top: 15px;
}
</style>