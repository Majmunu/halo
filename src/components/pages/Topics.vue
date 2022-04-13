<template>
  <div class="col-xl-9 root clearfix">
    <the-sidebar-navigation/>
    <Post/>
    <TheTopicsCard/>
  </div>
</template>

<script>
import theSidebarNavigation from "@/components/pages/Topics/theSidebarNavigation";

import TheTopicsCard from "@/components/pages/Topics/TheTopicsCard";
export default {
  name: "Topics",
  components:{
    theSidebarNavigation,

    TheTopicsCard
  }
}
</script>

<style scoped>
.root{
  border: 3px solid aqua;
  margin-left: auto;
  margin-right: auto;
}
</style>