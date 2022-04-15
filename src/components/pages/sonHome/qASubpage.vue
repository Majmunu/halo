<template>
  <div class="root">

    <List/>
  </div>
</template>

<script>

import List from "@/components/pages/QuestionsAndAnswers/List";
export default {
  name: "qASubpage",
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