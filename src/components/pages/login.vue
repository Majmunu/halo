<template>
<div class="root" >


  <el-card class="box-card sticky-top col-xl-4">
    <div>
      <div class="image">
        <img src="@/assets/logo.svg" width="108" height="24px" alt="">
        <div class="title">
          <strong>登录</strong>
        </div>
      </div>
      <Tabs v-show=" !dialogFormVisible">
        <TabPane label="账号登陆" icon="ios-contact-outline" size="30">
          <div class="input">
            <Form :rules="ruleValidate"  ref="userForm" :model="user">
              <FormItem  prop="username" :border="false">
                <Input v-model="user.username" :border="false" placeholder="用户名" />
              </FormItem>
              <Divider />
              <FormItem  prop="password" :border="false">
                <Input  v-model="user.password" type="password" :border="false" password placeholder="输入密码" />
              </FormItem>
              <Divider />
              <div style="display: flex">
                <el-input prefix-icon="el-icon-key" v-model="user.validCode" style="width: 50%" placeholder="请输入验证码"></el-input>
                <ValidCode style="margin-left: 20px" @input="createValidCode"/>
              </div>

            </Form>
            <div style="float: left">
              <div class="text" style="margin-top: 10px">
                没有账户？<router-link to="/register">创建一个</router-link>
              </div>
              <div class="text"  @click="handleRender">
                <span class="span-line">无法访问您的账户?</span>
              </div>
            </div>

            <div class="button" style="float: right;margin-top: 10px">

              <button type="button" class="btn btn-secondary" to="/home">后退</button>
              <button type="button" class="btn btn-success" @click="login">登录</button>


            </div>

          </div>
        </TabPane>
        <TabPane label="邮箱登录" icon="ios-mail-outline">
          <div class="input">
            <Form :rules="ruleValidate"  ref="userForm" :model="user">
              <FormItem  prop="email" :border="false">
                <Input v-model="user.email" :border="false" placeholder="请输入邮箱" />
              </FormItem>
              <Divider />
              <FormItem  prop="code" :border="false">
                <Input  v-model="user.code" type="number" style="width: 200px;float: left"  placeholder="输入验证码" />
              <el-button style="text-align: center; width: 120px" type="primary" @click="sendEmailCode(1)">获取验证码</el-button>
              </FormItem>
              <Divider />
<!--              <div style="display: flex">
                <el-input prefix-icon="el-icon-key" v-model="user.validCode" style="width: 50%" placeholder="请输入验证码"></el-input>
                <ValidCode @input="createValidCode"/>
              </div>-->

            </Form>
              <div style="float: left">
                <div class="text">
                  没有账户？<router-link to="/register">创建一个</router-link>
                </div>
                <div class="text"  @click="handleRender">
                  <span class="span-line">无法访问您的账户?</span>
                </div>

              </div>


            <div class="button" style="float: right">

              <button type="button" class="btn btn-secondary" to="/halohome">后退</button>
              <button type="button" class="btn btn-success" @click="loginEmail">登录</button>


            </div>

          </div>
        </TabPane>

      </Tabs>
<!--      <div class="input">
        <Form :rules="ruleValidate"  ref="userForm" :model="user">
          <FormItem  prop="username" :border="false">
        <Input v-model="user.username" :border="false" placeholder="电子邮件或电话" />
          </FormItem>
          <Divider />
          <FormItem  prop="password" :border="false">
        <Input  v-model="user.password" type="password" :border="false" password placeholder="输入密码" />
          </FormItem>
            <Divider />
          <div style="display: flex">
            <el-input prefix-icon="el-icon-key" v-model="user.validCode" style="width: 50%" placeholder="请输入验证码"></el-input>
           <ValidCode @input="createValidCode"/>
          </div>

        </Form>

      </div>-->

    </div>
    <transition-group appear
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__bounceInDown"
                      leave-active-class="animate__backOutUp">


      <el-dialog  title="重置密码" v-show="dialogFormVisible" width="34%" key="1">
<!--
        <div key="1" slot="footer">
&lt;!&ndash;          <transition-group appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__flip"
          leave-active-class="animate__backOutUp">&ndash;&gt;
            <el-form-item label="邮箱" >
              <el-input   size="medium" v-model="pass.email" autocomplete="off"></el-input>
            </el-form-item>
            <h1>1213123</h1>
          <Input  v-model="user.code" type="number" style="width: 200px;float: left"  placeholder="输入验证码" />
            <el-form-item label="验证码">
              <el-input size="medium"  style="width: 200px" v-model="pass.code"></el-input>
              <el-button type="primary" size="medium" class="ml-5" @click="sendEmailCode(2)">获取验证码</el-button>
            </el-form-item>
&lt;!&ndash;          </transition-group>&ndash;&gt;
        </div>-->
        <Form :rules="ruleValidate"  ref="userForm" :model="user" key="1" slot="footer">
          <FormItem  prop="email" :border="false">
            <Input v-model="pass.email"  placeholder="请输入邮箱" />
          </FormItem>
          <Divider />
          <FormItem  prop="code" >
            <Input  v-model="user.code" type="text" style="width: 200px;float: left"  placeholder="输入验证码" />
            <el-button style="text-align: center; width: 120px" type="primary" @click="sendEmailCode(2)">获取验证码</el-button>
          </FormItem>

          <!--              <div style="display: flex">
                          <el-input prefix-icon="el-icon-key" v-model="user.validCode" style="width: 50%" placeholder="请输入验证码"></el-input>
                          <ValidCode @input="createValidCode"/>
                        </div>-->

        </Form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="passwordBack">重置密码</el-button>
        </div>
      </el-dialog>

    </transition-group>

  </el-card>



</div>
</template>

<script>
import request from "@/utils/request";
import {setRoutes} from "@/router";
import ValidCode from "@/components/pages/ValidCode";
import 'animate.css';
export default {
  name: "login",
  components: {ValidCode},

  data(){
    return{

      pass: {},
      dialogFormVisible: false,
      validCode:'',
      value: '',
      user:{},
      code:'',

      ruleValidate: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { type: 'string', min: 1,max: 32, message: '超出长度限制,请检查您的输入', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6,max: 32, message: '密码的长度必须是 6-32 位', trigger: 'blur' },
        ],



      },

    }
  },
  methods:{
    handleRender () {
      this.dialogFormVisible = true
      this.pass = {}
    },
    sendEmailCode(type){
      let email;
      if (type === 1) {
        email = this.user.email
      } else if(type === 2) {
        email = this.pass.email
      }
      if(!email) {
        this.$message.warning("请输入邮箱账号")
        return
      }
      /*if(!this.user.email){
        this.$message.warning("请输入邮箱账号")
        return
      }*/
      if(!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(email)) {
        this.$message.warning("请输入正确的邮箱账号")
        return
      }
      this.request.get("/user/email/" + email + "/" + type).then(res => {
        if (res.code === '200') {
          this.$message.success("发送成功")
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    createValidCode(data){
      this.validCode=data
    },
    login(){
      this.$refs['userForm'].validate((valid) => {
        if (valid) {  // 表单校验合法
          if (!this.user.validCode) {
            this.$message.error("请填写验证码")
            return
          }
          if(this.user.validCode.toLowerCase() !== this.validCode.toLowerCase()) {
            this.$message.error("验证码错误")
            console.log(this.validCode)

            return
          }

          request.post("/user/login",this.user).then(res=>{
            if(res.code === '200'){
              localStorage.setItem("user",JSON.stringify(res.data))//存储用户信息到浏览器
              localStorage.setItem("menus",JSON.stringify(res.data.menus))
              localStorage.setItem("userId",JSON.stringify(res.data))

              //动态设置当前用户的路由
              setRoutes()
              // 重置路由


              this.$router.push("/halohome")
              this.$message.success("登陆成功")
            }else{
              this.$message.error(res.msg)
            }
          })
        }
      });

    },
    loginEmail(){
      if (!this.user.email) {
        this.$message.warning("请输入邮箱")
        return
      }
      if (!this.user.code) {
        this.$message.warning("请输入验证码")
        return
      }
      this.$refs['userForm'].validate((valid) => {
        if (valid) {  // 表单校验合法


          request.post("/user/loginEmail",this.user).then(res=>{
            if(res.code === '200'){
              localStorage.setItem("user",JSON.stringify(res.data))//存储用户信息到浏览器
              localStorage.setItem("menus",JSON.stringify(res.data.menus))
              localStorage.setItem("userId",JSON.stringify(res.data))

              //动态设置当前用户的路由
              setRoutes()
              // 重置路由


              this.$router.push("/halohome")
              this.$message.success("登陆成功")
            }else{
              this.$message.error(res.msg)
            }
          })
        }
      });

    },
    passwordBack() {
      this.request.put("/user/reset", this.pass).then(res => {
        if (res.code === '200') {
          this.$message.success("重置密码成功，新密码为：123456，请尽快修改密码")
          this.dialogFormVisible = false
        } else {
          this.$message.error(res.msg)
        }
      })
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


  margin-top: 130px;
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

}
button{
  margin-left: 10px;
  width: 100px;
}
.span-line:hover{
  text-decoration:underline;

}
.span-line{
  color: #2b85e4;
}
</style>