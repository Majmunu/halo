<template>
  <router-view></router-view>
</template>

<script>

import List from "@/components/pages/QuestionsAndAnswers/List";
export default {
  name: "QuestionsAndAnswers",
  components:{

    List
  }
}
</script>

<style scoped>
.root{
  margin-top: 15px;
}
</style>