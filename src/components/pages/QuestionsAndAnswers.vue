<template>
  <div class="root">

    <Navigation/>
    <List/>
  </div>
</template>

<script>
import Navigation from "@/components/pages/QuestionsAndAnswers/Navigation";
import List from "@/components/pages/QuestionsAndAnswers/List";
export default {
  name: "QuestionsAndAnswers",
  components:{
    Navigation,
    List
  }
}
</script>

<style scoped>
.root{
  margin-top: 15px;
}
</style>