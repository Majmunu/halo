<template>
  <div class="col-xl-9 root clearfix">

    <the-sidebar-navigation/>


    <TopicsItem/>


    <TheTopicsCard/>



  </div>
</template>

<script>
import theSidebarNavigation from "@/components/pages/Topics/theSidebarNavigation";
import TopicsItem from "@/components/pages/Topics/TopicsItem";
import TheTopicsCard from "@/components/pages/Topics/TheTopicsCard";
export default {
  name: "HotList",
  components:{
    theSidebarNavigation,
    TheTopicsCard,
    TopicsItem
  }
}
</script>

<style scoped>
.root{

  margin-left: auto;
  margin-right: auto;
}
</style>