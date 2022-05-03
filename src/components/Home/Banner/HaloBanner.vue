<template>
  <div style="height: 320px" class="jumbotron jumbotron-fluid HomeBanner col-xl-12 justify-content-center" >


    <div class="container">
      <h1 class="display-4">{{BannerTitle}}</h1>
      <p class="lead" style="color: hsla(0,0%,100%,.5)!important;">{{BannerText}}</p>
      <router-link
          v-if="!user.username"
          to="/login"
          class="btn btn-success btn-lg"
          href="#" role="button"
      >{{BannerButton}}</router-link>
    </div>
<BannerCard style=" margin-top: 100px;"/>
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

      BannerTitle:'玩数码，上 HALO',
      BannerText:'科技资讯，新鲜评测，真实体验，玩机宝典，你想要的这里全都有。',
      BannerButton:'注册登录',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'public/HmoeBanner.png',
      user:localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")) :{}

    }

  },
  methods:{


  }
}
</script>

<style scoped>
.HomeBanner{
  float: none;
background-color: slateblue;
  margin-left: auto;
  margin-right: auto;
  background-image: url('~@/assets/HmoeBanner.png');

}
.container{
  color: #e9ecef;
}
</style>