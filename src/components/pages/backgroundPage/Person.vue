<template>
  <el-card style="width: 500px;margin-top: 30px;margin-left: auto;margin-right: auto">

    <el-form label-width="80px" size="small">


      <el-upload
          class="avatar-uploader"
          :action="'http://' + serverIp +':9090/file/upload'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
        <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-form-item label="用户名">
        <el-input v-model="form.username" autocomplete="off" disabled></el-input>
      </el-form-item>


      <el-form-item label="昵称">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  label="地址">
        <el-input type="textarea" v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="save" style="width: 70px;height: 30px">确 定</el-button>
      </el-form-item>


    </el-form>
  </el-card>
</template>

<script>
import request from "@/utils/request";
import {serverIp} from "../../../../public/config";

export default {
  name: "Person",
  data(){
    return{
      form:{},
      serverIp: serverIp,
      user:localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")) :{}
    }
  },
  created() {
    this.getUser().then(res => {
      this.form = res
    })

  },
  methods:{
    save(){
      request.post("/user",this.form).then(res=>{
        if(res.code==='200'){
          this.$message({
            message: '恭喜你，保存成功',
            type: 'success'
          });
          this.$emit("refreshUser")
        }else{
          this.$message({
            message: '抱歉，保存失败',
            type: 'warning'
          });
        }
      })
    },
    handleAvatarSuccess(res){
      this.form.avatarUrl=res

    },
    async getUser() {
      return (await this.request.get("/user/username/" + this.user.username)).data
    },
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>