<template>
  <div class="jumbotron jumbotron-fluid HomeBanner col-xl justify-content-center" style="background-color: skyblue">

    <el-image
        style=""
        :src="url"
        ></el-image>
    <div class="container">
      <h1 class="display-4">{{BannerTitle}}</h1>
      <p class="lead">{{BannerText}}</p>
      <a class="btn btn-success btn-lg" href="#" role="button">{{BannerButton}}</a>
    </div>
<BannerCard/>
  </div>

</template>

<script>
import BannerCard from "@/components/Home/Banner/BannerCard";

export default {
  name: "HaloBanner",
  components: {
    BannerCard
  },
  data(){
    return{
      BannerTitle:'玩数码，上？？？？',
      BannerText:'科技资讯，新鲜评测，真实体验，玩机宝典，你想要的这里全都有。',
      BannerButton:'注册登录',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'public/HmoeBanner.png'
    }

  }
}
</script>

<style scoped>
.HomeBanner{
  float: none;

  margin-left: auto;
  margin-right: auto;
}
</style>