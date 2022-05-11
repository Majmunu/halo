<template>
  <div>
    <div style="float: left;margin: 10px 0">
      <el-input style="width: 200px" placeholder="请输入名称" suffix-icon="el-icon-search" v-model="name"></el-input>
      <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入分类名称" v-model="typeid">
      </el-input>
      <el-button class="ml-5" type="primary" @click="load">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-button type="primary" @click="handleAdd" v-if="user.role === 'ROLE_ADMIN'">新增 <i class="el-icon-circle-plus-outline"></i></el-button>
      <el-popconfirm
          class="ml-5"
          confirm-button-text='确定'
          cancel-button-text='我再想想'
          icon="el-icon-info"
          icon-color="red"
          title="您确定批量删除这些数据吗？"
          @confirm="delBatch"
      >
        <el-button type="danger" slot="reference">批量删除 <i class="el-icon-remove-outline"></i></el-button>
      </el-popconfirm>

    </div>
    <el-table :data="tableData" border stripe :header-cell-class-name="'headerBg'"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" label="文章标题"></el-table-column>
      <el-table-column prop="content" label="文章内容">
        <template slot-scope="scope">
          <el-button @click="view(scope.row.content)" type="primary">查看内容</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="发布人"></el-table-column>
      <el-table-column prop="type" label="文章所属分类"></el-table-column>
<!--      <el-table-column prop="typeid" label="文章所属分类"></el-table-column>-->
      <el-table-column prop="time" label="发布时间"></el-table-column>
      <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button type="success" @click="handleEdit(scope.row)" v-if="user.role === 'ROLE_ADMIN'">编辑 <i class="el-icon-edit"></i></el-button>
          <el-popconfirm
              class="ml-5"
              confirm-button-text='确定'
              cancel-button-text='我再想想'
              icon="el-icon-info"
              icon-color="red"
              title="您确定删除吗？"
              @confirm="del(scope.row.id)"
          >
            <el-button type="danger" slot="reference" v-if="user.role === 'ROLE_ADMIN'">删除 <i class="el-icon-remove-outline"></i></el-button>

          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="padding: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[2, 5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <el-dialog title="文章信息" :visible.sync="dialogFormVisible" width="60%" >
      <el-form label-width="80px" size="small">
        <el-form-item label="文章标题">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="文章分类">
          <el-select clearable v-model="form.typeid" placeholder="请选择" style="width: 100%">
            <el-option v-for="item in TypeData" :key="item.typename" :label="item.typename" :value="item.id">
              {{ item.typename }}
            </el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="文章标签">
          <template slot-scope="scope">
          <el-select clearable v-model="tagId" placeholder="请选择" style="width: 100%">
            <el-option v-for="item in TagData" :key="item.name" :label="item.name" :value="item.id">
              {{ item.name }}


            </el-option>
          </el-select>
          </template>
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
import {serverIp} from "../../../../public/config";
import request from "@/utils/request";

export default {
  name: "Article",
  data() {
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
      viewDialogVis: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      TypeData:[],
      typeId:'',
      type:'',
      typeid:'',
      TagData:[],
      tagtotal:[],
      tagId:''
    }
  },
  created() {
    this.load()
    this.loadType()
    this.loadTag()
  },
  methods: {
    selectTag(tagId){
      request.post("/tag/articleTag" +this.article.id+ "/"+tagId).then(res=>{
        if (res.code === '200') {
          this.$message.success("添加成功")
        }else{
          this.$message.error(res.msg)
        }
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
    loadType() {
      this.request.get("/type").then(res => {
        this.TypeData = res.data
        console.log("type"+this.TypeData)

      })

    },
    loadTag() {
      this.request.get("/tag").then(res => {
        this.TagData = res.data
        console.log("tag"+this.TagData)

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
          console.log(this.tagId)
          console.log(this.tableData[0].id)


          this.load()
        } else {
          this.$message.error("保存失败")
        }
      })
      request.post("/tag/articleTag/" +this.tagId+ "/"+this.tableData[0].id).then(res=>{
        if (res.code === '200') {
          this.$message.success("添加成功")

          console.log("wyou")

        }else{
          this.$message.error(res.msg)
        }
      })
    },
    reset() {
      this.name = ""
      this.typeid=""
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
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
