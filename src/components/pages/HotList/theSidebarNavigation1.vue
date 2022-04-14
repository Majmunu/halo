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
    <Menu :theme="theme3" active-name="1">
      <MenuGroup title="热门榜单">
        <MenuItem name="1">
          <Icon type="md-document" />
          点赞榜
        </MenuItem>
        <MenuItem name="2">
          <Icon type="md-chatbubbles" />
          评论榜
        </MenuItem>
      </MenuGroup>
        <MenuItem name="3">
          <Icon type="md-heart" />
          收藏榜
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-leaf" />
          问答榜
        </MenuItem>

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