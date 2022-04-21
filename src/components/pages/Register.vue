<template>
<div class="root" >


  <el-card class="box-card sticky-top col-xl-4" :body-style="{ padding: '20px'}">
    <div>
      <div class="image">
        <img src="@/assets/logo.svg" width="108" height="24px" alt="">
        <div class="title">
          <strong>注册</strong>
        </div>
      </div>
      <div class="input">
        <Form :rules="ruleValidate"  ref="userForm" :model="user">
          <FormItem  prop="username" :border="false">
        <Input v-model="user.username" :border="false" placeholder="电子邮件或电话" />
          </FormItem>
          <Divider />
          <FormItem  prop="password" :border="false">
        <Input  v-model="user.password" type="password" :border="false" password placeholder="输入密码" />
          </FormItem>
          <Divider />
          <FormItem  prop="confirmPassword" :border="false">
            <Input  v-model="user.confirmPassword" type="password" :border="false" password placeholder="确认密码" />
          </FormItem>

            <Divider />
        </Form>
      </div>
      <div class="text">
        没有账户？<a href="">创建一个</a>
      </div>
      <div class="text">
        <a href="">无法访问您的账户？</a>
      </div>
      <div class="button">

        <button type="button" class="btn btn-secondary" @click="$router.push('/login')">返回登录</button>
        <button type="button" class="btn btn-success" @click="login">注册</button>


      </div>
    </div>

  </el-card>

</div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Register",
  data(){
    return{
      user:{
        username: '',
        password: '',
      },
      ruleValidate: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { type: 'string', min: 1,max: 20, message: '超出长度限制,请检查您的输入', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 1,max: 16, message: '超出长度限制,请检查您的输入', trigger: 'blur' },
        ],
        confirmPassword: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 1,max: 16, message: '超出长度限制,请检查您的输入', trigger: 'blur' },
        ],

      }
    }
  },
  methods:{
    login(){
      this.$refs['userForm'].validate((valid) => {
        if (valid) {  // 表单校验合法
          if(this.user.password!==this.user.confirmPassword){
            this.$message.error("两次密码不一致")
            return false
          }
          request.post("/user/register",this.user).then(res=>{
            if(res.code === '200'){

              this.$message.success("注册成功")
            }else{
              this.$message.error(res.msg)
            }
          })
        }
      });

    }
  }
}
</script>

<style scoped>
.root{
overflow: hidden;
  height: 100%;
  position : absolute;
  width : 100%;

  background: #DCE35B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #45B649, #DCE35B);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #45B649, #DCE35B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
.box-card{


  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
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