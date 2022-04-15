<template>
<div class="root">

  <img src="https://aadcdn.msftauth.net/shared/1.0/content/images/backgrounds/2_bc3d32a696895f78c19df6c717586a5d.svg" alt="">
  <el-card class="box-card sticky-top col-xl-4">
    <div>
      <div class="image">
        <img src="@/assets/logo.svg" width="108" height="24px" alt="">
        <div class="title">
          <strong>登录</strong>
        </div>
      </div>
      <div class="input">
        <Input v-model="value19" :border="false"placeholder="电子邮件或电话" />
        <Divider />
        <Input v-model="value19" type="password" :border="false" password placeholder="输入密码" />
        <Divider />
      </div>
      <div class="text">
        没有账户？<a href="">创建一个</a>
      </div>
      <div class="text">
        <a href="">无法访问您的账户？</a>
      </div>
      <div class="button">
        <button type="button" class="btn btn-secondary">后退</button>
        <button type="button" class="btn btn-success">登录</button>
      </div>
    </div>

  </el-card>

</div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
.root{


}
.box-card{
  position: absolute;


  margin-top: 200px;
  margin-left: 548px;
  margin-right: 548px;
}
.image{
  text-align: left;
  vertical-align: middle;
  margin-top: 20px;
}
strong{
  line-height: 1.75rem;
  color: rgb(27, 27, 27);
  font-size: 1.5rem;
  font-weight: 600;

}
.title{
  margin-top: 15px;
}
.input{
  margin-top: 20px;
}
divider{
  position: absolute;

}
.text{
  font-size: 0.8125rem;
  text-align: left;
  line-height: 1.25rem;
  font-weight: 400;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
a:hover{
  text-decoration:underline ;
}
.button{
  text-align: center;
  padding-left: 150px;
}
button{
  margin-left: 10px;
  width: 100px;
}

</style>