<template>
  <div id="app">
    <HaloHeader/>

    <router-view></router-view>


  </div>

</template>

<script>
//引入头部组件
import HaloHeader from "@/components/Home/Header/HaloHeader";
/*import HaloBanner from "@/components/Home/Banner/HaloBanner";
import HaloContent from "@/components/Home/Content/HaloContent";
import Recommend from "@/components/Home/Recommend/Recommend";
import Contributor from "@/components/Home/HaloContributor/Contributor";*/
/*import HaloFooter from "@/components/Home/Footer/HaloFooter";*/

export default {
  name: 'App',
  components: {
    HaloHeader,
    /*HaloBanner,
    HaloContent,
    Recommend,
    Contributor,*/
    /*HaloFooter*/
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
</style>
