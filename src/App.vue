<template>
  <div id="app">
<!--    <HaloHeader v-if="$route.path!=='/houtai'"/>-->
    <router-view></router-view>
  </div>

</template>

<script>
//引入头部组件
import HaloHeader from "@/components/Home/Header/HaloHeader";


export default {
  name: 'App',
  components: {
    HaloHeader,

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
  height: 100%;



}
</style>
