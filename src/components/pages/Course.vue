<template>
  <div class="col-xl-12">
    <router-view></router-view>

  </div>

</template>

<script>
import CourseHome from "@/components/pages/Course/CourseHome";
export default {
  name: "Course",
  components:{
    CourseHome
  }
}
</script>

<style scoped>

</style>