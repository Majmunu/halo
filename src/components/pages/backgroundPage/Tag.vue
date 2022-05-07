<template>
  <div>
    <div style="margin: 10px 0;float: left">
      <el-input style="width: 200px" placeholder="请输入名称" suffix-icon="el-icon-search" v-model="name"></el-input>
      <el-button class="ml-5" type="primary" @click="load">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
    </div>
    <div style="margin: 10px 0;float: left">
      <button type="button" class="btn btn-info btn-new" @click="handleAdd">新增
        <i class="el-icon-circle-plus-outline"></i>
      </button>
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
      <el-table-column prop="name" label="标签名称"></el-table-column>

      <el-table-column label="启用">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ccc"
                     @change="changeEnable(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="400" align="center">


        <template slot-scope="scope">
          <button type="button"
                  class="btn btn-success btn-operate "
                  style="color: white"
                  @click="handleEdit(scope.row)">
            编辑 <i class="el-icon-edit"></i>
          </button>
          <el-popconfirm
              class="ml-5"
              confirm-button-text='确定'
              cancel-button-text='我再想想'
              icon="el-icon-info"
              icon-color="red"
              title="您确定删除吗？"
              @confirm="del(scope.row.id)"
          >
            <el-button type="danger" slot="reference">删除 <i class="el-icon-remove-outline"></i></el-button>
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

    <el-dialog title="标签信息" :visible.sync="dialogFormVisible" width="35%">
      <el-form label-width="80px" size="small">
        <el-form-item label="名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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
  name: "Tag",
  data(){
    return {
      form:{},
      serverIp: serverIp,
      tableData:[],
      name:'',
      multipleSelection:[],
      pageSize:10,
      pageNum:1,
      total:0,
      dialogFormVisible:false,
    }
  },
  created() {
    this.load()
  },
  methods:{
    save(){
      request.post("/tag",this.form).then(res=>{
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
    handleEdit(row){
      this.form=row
      this.dialogFormVisible=true
    },
    load(){

      request.get("/tag/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
           name: this.name,
        }
      }).then(res=>{
        this.tableData=res.data.records
        this.total=res.data.total
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
    del(id){
      request.delete("/tag/"+id).then(res=>{
        if(res.code === '200'){
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
    changeEnable(row) {
      this.request.post("/tag/update", row).then(res => {
        if (res.code === '200') {
          this.$message.success("操作成功")
        }
      })
    },
    handleSelectionChange(val){
      this.multipleSelection=val
    },
    delBatch(){
      let ids=this.multipleSelection.map(v=>v.id)
      request.post("/tag/del/batch",ids).then(res=> {
        if (res.code === '200') {
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

    handleAdd(){
      this.dialogFormVisible=true
      this.form={}
    },

  }
}
</script>

<style scoped>

</style>