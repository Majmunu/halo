<template>
<div style="margin-top: 15px">

  <!--搜索框-->
  <div style="margin:10px 0;display: flex;
    flex-direction: row; " class="clearfix col-xl-12">
  <div class="searchInput" style="float: left">
    <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入名称" v-model="name">
    </el-input>
    <button type="button" class="btn btn-outline-success" @click="load">搜索</button>
    <button type="button" class="btn btn-outline-warning" @click="reset">重置</button>
  </div>
  <div style="margin-top: 50px;position: absolute" class="searchInput ">
    <button type="button" class="btn btn-info btn-new" @click="handleAdd(null)">新增
      <i class="el-icon-circle-plus-outline"></i>
    </button>
    <el-popconfirm
        confirm-button-text='确定'
        cancel-button-text='不用了'
        icon="el-icon-info"
        icon-color="red"
        title="确定删除吗？"
        @confirm="delBatch"
    >
      <button type="button" class="btn btn-danger btn-delete"  slot="reference">批量删除
        <i class="el-icon-remove-outline"></i>
      </button>
    </el-popconfirm>
<!--    action="http://localhost:9090/user/import"-->
    <el-upload
        style="display: inline-block"
        accept="xlsx"
        :action="'http://' + serverIp +':9090/user/import'"
        :show-file-list="false"

        :on-success="handleExcelImportSuccess">
    </el-upload>
  </div>
  </div>

  <el-table
      :data="tableData"
      border stripe style="margin-left: 20px;margin-top: 60px"
      @selection-change="handleSelectionChange"
      :header-cell-class-name="headerBg"
      row-key="id"
      default-expand-all
  >
    <el-table-column
        type="selection"

        width="55">
    </el-table-column>
    <el-table-column prop="id" label="id" width="80px">
    </el-table-column>
    <el-table-column prop="name" label="名称" >
    </el-table-column>
    <el-table-column prop="path" label="路径">
    </el-table-column>
    <el-table-column prop="pagePath" label="页面路径">
    </el-table-column>
    <el-table-column  label="图标" class-name="fontSize18" align="center" label-class-name="fontSize12">

      <template v-slot="scope">
        <span :class="scope.row.icon"/>
      </template>

    </el-table-column>
    <el-table-column prop="description" label="描述">
    </el-table-column>


    <el-table-column prop="operate" label="操作" width="300px">
      <template slot-scope="scope">
        <button type="button"
                v-if="!scope.row.pid&&!scope.row.path"
                class="btn btn-primary btn-operate btn-sm"
                style="color: white;width: 100px"
                @click="handleAdd(scope.row.id)">
          新增子菜单 <i class="el-icon-plus"></i>
        </button>
        <button type="button"
                class="btn btn-success btn-operate btn-sm"
                style="color: white"
                @click="handleEdit(scope.row)">
          编辑 <i class="el-icon-edit"></i>
        </button>

        <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
            @confirm="del(scope.row.id)"
        >
          <button type="button"
                  slot="reference"
                  class="btn btn-danger btn-operate btn-sm">
            删除 <i class="el-icon-remove-outline"></i>
          </button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>


  <el-dialog title="菜单信息" :visible.sync="dialogFormVisible" width="35%">
    <el-form label-width="80px" size="small">
      <el-form-item label="名称">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>


      <el-form-item label="路径">
        <el-input v-model="form.path" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="页面路径">
        <el-input v-model="form.pagePath" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="图标">
<!--        <el-input v-model="form.icon" autocomplete="off"></el-input>-->

        <el-select clearable v-model="form.icon" placeholder="请选择" style="width: 100%">
          <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.value">
            <i :class="item.value" /> {{ item.name }}
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item label="描述">
        <el-input v-model="form.description" autocomplete="off"></el-input>
      </el-form-item>


    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false" style="width: 70px;height: 30px;float: left">取 消</el-button>
      <el-button type="primary" @click="save" style="width: 70px;height: 30px">确 定</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
import request from "@/utils/request";
import {serverIp} from "../../../../public/config";

export default {
  name: "MenuInterface",
  data(){
    return{
      serverIp: serverIp,
      tableData: [],
      total:0,
      pageSize:10,
      pageNum:1,
      name: "",
      dialogFormVisible:false,
      form:{},
      multipleSelection:[],
      collapseBtnclass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,
      distance:1130,
      headerBg:'headerBg',
      options:[]
    }
  },
  created() {
    //请求分页查询数据
    this.load()
    this.handleEdit(row)

  },
  methods:{
    load(){

      request.get("/menu", {
        params: {

          name: this.name,

        }
      }).then(res=>{
        this.tableData=res.data

      })

    },
    save(){
      request.post("/menu",this.form).then(res=>{
        if(res.code==='200'){
          this.$message({
            message: '恭喜你，保存成功',
            type: 'success'
          });
          this.dialogFormVisible=false
          this.load()
        }else{
          this.$message({
            message: '抱歉，保存失败',
            type: 'warning'
          });
        }
      })
    },
    handleSizeChange(pageSize){
      this.pageSize=pageSize
      this.load()

    },
    handleCurrentChange(pageNum){
      this.pageNum=pageNum
      this.load()

    },
    reset(){
      this.name=""
      this.load()
    },
    handleAdd(pid){
      this.dialogFormVisible=true
      this.form={}
      if(pid){
        this.form.pid=pid
      }

    },
    handleEdit(row){
      this.form=row
      this.dialogFormVisible=true
      //请求图标数据
      request.get("/menu/icons").then(res=>{
        this.options=res.data;
      })
    },
    del(id){
      request.delete("/menu/"+id).then(res=>{
        if(res.code==='200'){
          this.$message({
            message: '恭喜你，删除成功',
            type: 'success'
          });
          this.load()
        }else{
          this.$message({
            message: '抱歉，删除失败',
            type: 'warning'
          });
        }
      })
    },
    handleSelectionChange(val){
      this.multipleSelection=val
    },
    delBatch(){
      let ids=this.multipleSelection.map(v=>v.id)
      request.post("/menu/del/batch",ids).then(res=> {
        if (res.code==='200') {
          this.$message({
            message: '恭喜你，批量删除成功',
            type: 'success'
          });
          this.load()
        } else {
          this.$message({
            message: '抱歉，批量删除失败',
            type: 'warning'
          });
        }
      })
    },
    exp(){
      window.open(`http://${serverIp}:9090/role/export`)
    },
    handleExcelImportSuccess() {
      this.$message.success("导入成功")
      this.load()
    }
  }
}
</script>

<style scoped>
.btn{
  margin-left: 5px;
  width: 70px;
  height: 35px;
}
.searchInput{
  float: left;
  text-align: left;
  margin-left: 20px;
}
.btn-new{
  margin-left: 20px;
  width: 70px;
  margin-bottom: 10px;
  height: 35px;
}
.btn-delete{
  margin-left: 20px;
  width: 90px;
  margin-bottom: 10px;
  height: 35px;
}
.btn-operate{
  margin-left: 3px;
  width: 70px;
  height: 30px;
}
.bread{
  float: left;
  margin-left: 20px;
  font-size: 15px;
  line-height: 23px;
}
.headerBg {
  background: #eee!important;
}
.fontSize18{
  font-size: 28px;
}
.fontSize12{
  font-size: 12px;
}
</style>