<template>
  <div style="min-height: 100vh;background-color: white;">
    <el-container style="height:100%;"  size="mini">

      <el-aside
          :width="sideWidth+'px'"
          style="background-color: rgb(238, 241, 246);
          min-height: 100vh;
          box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
      ">
        <el-menu
            :default-openeds="['1', '3']"
            style="min-height: 100%;
            overflow-x: hidden;"
            text-color="#fff"
            active-text-color="#ffd04b"
            background-color="#2c3e50"
            :collapse-transition="false"
            :collapse="isCollapse"
        >
          <div style="height: 60px;line-height: 60px;text-align: center">
            <img src="@/assets/logo.svg" width="90px" alt="false" v-show="logoTextShow">
            <b style="color: white" v-show="logoTextShow">后台管理系统</b>
          </div>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header
            style="font-size: 12px;
            border-bottom: 1px solid #cccccc;
            line-height: 60px;
            display: flex"
        >
          <!--          收缩按钮-->
          <div style="flex: 1;font-size: 30px;text-align: left">
            <span :class="collapseBtnclass" style="cursor: pointer;" @click="collapse">
            </span>
          </div>
          <el-dropdown style="width: 170px;cursor: pointer">
            <span>王小虎</span>
            <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
            <el-dropdown-menu slot="dropdown" style="margin-right: 50px">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>

        </el-header>
        <div>
          <Breadcrumb class="bread">
            <BreadcrumbItem to="/">
              <Icon type="ios-home-outline"></Icon> Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
              <Icon type="logo-buffer"></Icon> 用户管理
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
          <!--搜索框-->
        <div class="searchInput" style="padding: 10px 0">
         <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入名称" v-model="username">
         </el-input>
          <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入邮箱" v-model="email">
          </el-input>
          <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入地址" v-model="address">

          </el-input>
          <button type="button" class="btn btn-outline-success" @click="load">搜索</button>
          <button type="button" class="btn btn-outline-warning" @click="reset">重置</button>
        </div>
        <div style="margin-left: 0" class="searchInput">
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
          <button type="button" class="btn btn-primary btn-new">导入
            <i class="el-icon-bottom-left"></i>
          </button>
          <button type="button" class="btn btn-primary btn-new">导出
            <i class="el-icon-top-right"></i>
          </button>
        </div>



        <el-main>
          <el-table :data="tableData" border stripe style="margin-left: 20px;"  @selection-change="handleSelectionChange">
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
          <el-card class="box-card">
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
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import 'animate.css'
import request from "@/utils/requset";
export default {
  name: "Backstage",
  data() {

    return {
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
      distance:1130
    }
  },
  created() {
    //请求分页查询数据
    this.load()

  },
  methods:{
    collapse(){ //点击收缩按钮触发
      this.isCollapse=!this.isCollapse
      if(this.isCollapse){ //收缩
        this.sideWidth=64
        this.collapseBtnclass='el-icon-s-unfold'
        this.logoTextShow=false
      }else { //展开
        this.sideWidth=200
        this.collapseBtnclass='el-icon-s-fold'
        this.logoTextShow=true
      }
    },
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
        this.tableData=res.records
        this.total=res.total
      })

    },
    save(){
      request.post("/user",this.form).then(res=>{
        if(res){
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
        if(res){
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
        if (res) {
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
    }


  }
}
</script>

<style scoped>
div{
  margin: 0;
  padding: 0;

}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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