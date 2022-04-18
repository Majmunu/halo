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
         <el-input style="width: 200px;"  suffix-icon="el-icon-search" placeholder="请输入名称"></el-input>
          <button type="button" class="btn btn-outline-success">搜索</button>
        </div>
        <div style="margin-left: 0" class="searchInput">
          <button type="button" class="btn btn-info btn-new">新增
            <i class="el-icon-circle-plus-outline"></i>
          </button>
          <button type="button" class="btn btn-danger btn-delete">批量删除
            <i class="el-icon-remove-outline"></i>
          </button>
          <button type="button" class="btn btn-primary btn-new">导入
            <i class="el-icon-bottom-left"></i>
          </button>
          <button type="button" class="btn btn-primary btn-new">导出
            <i class="el-icon-top-right"></i>
          </button>
        </div>

        <el-main>
          <el-table :data="tableData" border stripe style="margin-left: 20px;" >
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>

            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <button type="button" class="btn btn-success btn-operate btn-sm" style="color: white">
                  编辑 <i class="el-icon-edit"></i>
                </button>
                <button type="button" class="btn btn-danger btn-operate btn-sm">
                  删除 <i class="el-icon-remove-outline"></i>
                </button>

              </template>
            </el-table-column>
          </el-table>
          <!--分页-->
          <div style="padding: 10px 0">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Backstage",
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(10).fill(item),
      collapseBtnclass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,
      distance:1130
    }
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