<template>
  <router-view></router-view>
</template>

<script>
import theSidebarNavigation1 from "@/components/pages/HotList/theSidebarNavigation1";
import TopicsItem from "@/components/pages/Topics/TopicsItem";
import TheTopicsCard from "@/components/pages/Topics/TheTopicsCard";
export default {
  name: "HotList",
  components:{
    theSidebarNavigation1,
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