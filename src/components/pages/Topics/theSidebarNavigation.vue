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
    <Menu  :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          <button @click="green">推荐</button>
        </template>

      </Submenu>
      <Submenu name="2">
        <template slot="title">
         🚀热门
        </template>
        <MenuItem name="2-1"><button @click="red">今日热点</button></MenuItem>
        <MenuItem name="2-2"><button @click="phone">手机摄影</button></MenuItem>
        <MenuItem name="2-3"><button @click="co">电脑玩家</button></MenuItem>
        <MenuItem name="2-4"><button @click="an">安卓日常</button></MenuItem>
        <MenuItem name="2-5"><button @click="google">谷歌相机</button></MenuItem>
        <MenuItem name="2-6"><button @click="hua">
          花里胡哨又好看的手机</button></MenuItem>
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
      <Submenu name="4">
        <template slot="title">
          好物
        </template>
        <MenuItem name="5-1">Option 1</MenuItem>
        <MenuItem name="5-2">Option 2</MenuItem>
        <MenuItem name="5-3">Option 3</MenuItem>
        <MenuItem name="5-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="5">
        <template slot="title">
         玩机
        </template>
        <MenuItem name="6-1">Option 1</MenuItem>
        <MenuItem name="6-2">Option 2</MenuItem>
        <MenuItem name="6-3">Option 3</MenuItem>
        <MenuItem name="6-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="6">
        <template slot="title">
          安卓
        </template>
        <MenuItem name="7-1">Option 1</MenuItem>
        <MenuItem name="7-2">Option 2</MenuItem>
        <MenuItem name="7-3">Option 3</MenuItem>
        <MenuItem name="7-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="7">
        <template slot="title">
          游戏
        </template>
        <MenuItem name="8-1">Option 1</MenuItem>
        <MenuItem name="8-2">Option 2</MenuItem>
        <MenuItem name="8-3">Option 3</MenuItem>
        <MenuItem name="8-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="8">
        <template slot="title">
          苹果
        </template>
        <MenuItem name="9-1">Option 1</MenuItem>
        <MenuItem name="9-2">Option 2</MenuItem>
        <MenuItem name="9-3">Option 3</MenuItem>
        <MenuItem name="9-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="9">
        <template slot="title">
          微软
        </template>
        <MenuItem name="10-1">Option 1</MenuItem>
        <MenuItem name="10-2">Option 2</MenuItem>
        <MenuItem name="10-3">Option 3</MenuItem>
        <MenuItem name="10-4">Option 4</MenuItem>
      </Submenu>
      <Submenu name="10">
        <template slot="title">
          美化
        </template>
        <MenuItem name="11-1">Option 1</MenuItem>
        <MenuItem name="11-2">Option 2</MenuItem>
        <MenuItem name="11-3">Option 3</MenuItem>
        <MenuItem name="11-4">Option 4</MenuItem>
      </Submenu>
    </Menu>

  </div>

</template>

<script>
export default {
  name: "theSidebarNavigation",
  data(){
    return{
      typeid:''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    red(){
      this.typeid=2
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
    green(){
      this.typeid=''
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
    phone(){
      this.typeid='3'
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
   co(){
      this.typeid='4'
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
    an(){
      this.typeid='5'
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
    google(){
      this.typeid='6'
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
    hua(){
      this.typeid='7'
      this.$bus.$emit('hello',this.typeid)
      console.log("start",this.typeid)
    },
  }
}
</script>

<style scoped>
.root{
 float: left;
  background-color: white;

}
button{
  background:transparent;	/*按钮背景透明*/
  border-width:0;	/*边框透明*/
  outline:none;	/*点击后没边框*/
}
</style>