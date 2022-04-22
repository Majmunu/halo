<template>
<div style="margin-top: 15px">

  <!--搜索框-->
  <div style="margin:10px 0;display: flex;
    flex-direction: row; " class="clearfix col-xl-12">
  <div class="searchInput" style="float: left">
    <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入名称" v-model="username">
    </el-input>
    <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入邮箱" v-model="email">
    </el-input>
    <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入地址" v-model="address">

    </el-input>
    <button type="button" class="btn btn-outline-success" @click="load">搜索</button>
    <button type="button" class="btn btn-outline-warning" @click="reset">重置</button>
  </div>
  <div style="margin-top: 50px;position: absolute" class="searchInput ">
    <button type="button" class="btn btn-info btn-new" @click="handleAdd">新增
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

    <el-upload
        style="display: inline-block"
        action="http://localhost:9090/user/import"
        :show-file-list="false"
        accept="xlsx"
        :on-success="handleExcelImportSuccess"

        >
    <button type="button" class="btn btn-primary btn-new">导入
      <i class="el-icon-bottom-left"></i>
    </button>
    </el-upload>

    <button type="button" class="btn btn-primary btn-new" @click="exp">导出
      <i class="el-icon-top-right"></i>
    </button>
  </div>
  </div>

  <el-table
      :data="tableData"
      border stripe style="margin-left: 20px;margin-top: 60px"
      @selection-change="handleSelectionChange"
      :header-cell-class-name="headerBg"

  >
    <el-table-column
        type="selection"

        width="55">
    </el-table-column>
    <el-table-column prop="id" label="id" width="60">
    </el-table-column>
    <el-table-column prop="username" label="用户名" width="140">
    </el-table-column>
    <el-table-column prop="nickname" label="昵称" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column prop="phone" label="电话">
    </el-table-column>
    <el-table-column prop="email" label="邮箱">
    </el-table-column>

    <el-table-column prop="operate" label="操作">
      <template slot-scope="scope">
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
  <!--分页-->
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

  <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="35%">
    <el-form label-width="80px" size="small">
      <el-form-item label="用户名">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>


      <el-form-item label="昵称">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address" autocomplete="off"></el-input>
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

export default {
  name: "UserInterface",
  data(){
    return{
      tableData: [],
      total:0,
      pageSize:10,
      pageNum:1,
      username: "",
      email:"",
      address:"",
      dialogFormVisible:false,
      form:{},
      multipleSelection:[],
      collapseBtnclass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,
      distance:1130,
      headerBg:'headerBg'
    }
  },
  created() {
    //请求分页查询数据
    this.load()

  },
  methods:{
    load(){

      request.get("/user/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          username: this.username,
          email:this.email,
          address:this.address
        }
      }).then(res=>{
        this.tableData=res.data.records
        this.total=res.data.total
      })

    },
    save(){
      request.post("/user",this.form).then(res=>{
        if(res.data){
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
      this.username=""
      this.email=""
      this.address=""
      this.load()
    },
    handleAdd(){
      this.dialogFormVisible=true
      this.form={}
    },
    handleEdit(row){
      this.form=row
      this.dialogFormVisible=true
    },
    del(id){
      request.delete("/user/"+id).then(res=>{
        if(res.data){
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
      request.post("/user/del/batch",ids).then(res=> {
        if (res.data) {
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
      window.open("http://localhost:9090/user/export")
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

</style>