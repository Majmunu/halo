<template>
  <div class="col-xl-3 root ">
<!--    <el-row class="tac">
      <el-col :span="12">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>热门</span>
            </template>
            
            <el-menu-item-group>
              <template slot="title">好物</template>
              <el-menu-item index="1-1">#什么手机值得买</el-menu-item>
              <el-menu-item index="1-2">#最好用的拓展坞</el-menu-item>
              <el-menu-item index="1-3">#千元性价比显示器</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="玩机">
              <el-menu-item index="1-4">Magisk模块</el-menu-item>
              <el-menu-item index="1-5">旧机博物馆</el-menu-item>
              <el-menu-item index="1-6">iOS越狱</el-menu-item>
              <el-menu-item index="1-7">Xposed</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">美化</template>
              <el-menu-item index="1-4-1">三星主题</el-menu-item>
              <el-menu-item index="1-4-2">MIUI主题</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">推荐</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">关注</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>-->
    <Menu active-name="1-2" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          推荐
        </template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
          <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
         🚀热门
        </template>
        <MenuItem name="2-1">Option 5</MenuItem>
        <MenuItem name="2-2">Option 6</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
         关注
        </template>
        <MenuItem name="4-1">Option 9</MenuItem>
        <MenuItem name="4-2">Option 10</MenuItem>
        <MenuItem name="4-3">Option 11</MenuItem>
        <MenuItem name="4-4">Option 12</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          好物
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
         玩机
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          安卓
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          游戏
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          苹果
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          微软
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          美化
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </Submenu>
    </Menu>

  </div>

</template>

<script>
export default {
  name: "theSidebarNavigation",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.root{
 float: left;
  background-color: white;



}
</style>