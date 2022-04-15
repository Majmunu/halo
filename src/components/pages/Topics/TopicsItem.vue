<template>
  <div class="root">
    <div class="Nav col-xl-6 clearfix">


      <List item-layout="vertical" class="clearfix">

        <el-card class="box-card">
          <Tabs type="card">
            <TabPane label="今日热门">

              <ListItem
                  v-for="item in data"
                  :key="item.title"
                  class="test"
              >
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" shadow="hover"/>
                {{ item.content }}
                <template slot="action">

                  <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                  </li>
                  <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                  </li>
                </template>
                <template slot="extra">
                  <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px" alt=""
                       @click="showArticle">
                </template>
              </ListItem>
            </TabPane>
            <TabPane label="最新发布">最新发布</TabPane>
            <TabPane label="最高热度">最高热度</TabPane>
          </Tabs>

        </el-card>
      </List>

    </div>
  </div>

</template>

<script>
import Navigation1 from "@/components/pages/HotList/Navigation1";
export default {
  name: "TopicsItem",
  components:{
    Navigation1
  },
  data () {
    return {
  data:[
    {
      title: '我是标题',
      description: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      avatar:require('@/assets/2022.jpg')

    },
    {
      title: '我是标题',
      description: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      avatar: require('@/assets/2022.jpg')


    },
    {
      title: '我是标题',
      description: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      avatar: require('@/assets/2022.jpg')

    }
  ],

}},
  methods:{
    showArticle(){
      this.$router.push({
        name:'tiezi'
      })
    }
  }
}
</script>

<style scoped>
.Nav{
  float: left;
  /*position: absolute;*/

}
.test{

}
.root{
  margin-top: 15px;
}
</style>