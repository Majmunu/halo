<template>
<div class="col-xl-9 root">
  <h2>数码</h2>
  <SearchBox/>

</div>
</template>

<script>
import SearchBox from "@/components/pages/Digital/SearchBox";
export default {
  name: "Digital",
  components:{
    SearchBox
  }
}
</script>

<style scoped>
.root{
  margin-left: auto;
  margin-right: auto;
  border: 3px solid salmon;
}
</style>