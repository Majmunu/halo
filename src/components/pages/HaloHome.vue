<template>
  <div>
    <HaloBanner/>
    <HaloContent/>
    <Recommend/>
    <contributor/>
    <HaloFooter/>

  </div>

</template>

<script>
import HaloBanner from "@/components/Home/Banner/HaloBanner";
import HaloContent from "@/components/Home/Content/HaloContent";
import Contributor from "@/components/Home/HaloContributor/Contributor";
import HaloFooter from "@/components/Home/Footer/HaloFooter";
import Recommend from "@/components/Home/Recommend/Recommend";
export default {
  name: "HaloHome",
  components: {

    HaloBanner,
    HaloContent,
    Recommend,
    Contributor,
    HaloFooter
  }
}
</script>

<style scoped>

</style>