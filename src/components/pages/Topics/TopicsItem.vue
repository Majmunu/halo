<template>
  <div class="root">
    <div class="Nav col-xl-6 clearfix">
      <Navigation/>

      <List item-layout="vertical" class="clearfix">
        <ListItem v-for="item in data" :key="item.title">
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
            <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
          </template>
        </ListItem>
      </List>

    </div>
  </div>

</template>

<script>
import Navigation from "@/components/pages/QuestionsAndAnswers/Navigation";
export default {
  name: "TopicsItem",
  components:{
    Navigation
  },
  data () {
    return {
  data:[
    {
      title: 'This is title 1',
      description: 'This is description, this is description, this is description.',
      avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
      content: 'This is the content, this is the content, this is the content, this is the content.'
    },
    {
      title: 'This is title 2',
      description: 'This is description, this is description, this is description.',
      avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
      content: 'This is the content, this is the content, this is the content, this is the content.'
    },
    {
      title: 'This is title 3',
      description: 'This is description, this is description, this is description.',
      avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
      content: 'This is the content, this is the content, this is the content, this is the content.'
    }
  ]
}}}
</script>

<style scoped>
.Nav{
  float: left;
  /*position: absolute;*/



}
</style>