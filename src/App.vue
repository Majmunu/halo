<template>
  <div id="app">
    <HaloHeader></HaloHeader>

  </div>

</template>

<script>
//引入头部组件
import HaloHeader from "@/components/Header/HaloHeader";


export default {
  name: 'App',
  components: {
    HaloHeader
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
