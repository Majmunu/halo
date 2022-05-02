<template>
<div class="table clearfix col-xl-12">

    <div style="border: 3px solid white;float: left" class="col-xl-6">
      <h4>问答贡献</h4>
      <div class="QA clearfix col-xl-12" style="border: 3px solid white;float: left;">
      <div style="float: left;border: 3px solid white;display: inline;width:490px;" class="col-xl-6">
        <ul style="float: left">
          <li v-for="item in users.slice(0,5)" style="margin-top: 30px;float: left">
            <div class="item">
              <div style="float: left">
                <el-avatar :size="50" :src="item.avatar_url"></el-avatar>
              </div>
              <div style="float: left;margin-top: 10px;line-height: 1.2;background-color: #fff;margin-left: 10px">
                {{item.login.slice(0,5)}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div style="float: right;border: 3px solid white;width:490px;display: inline" class="col-xl-6">
        <ul>
          <li v-for="item in users.slice(6,11)" style="margin-top: 30px;float: left">
            <div class="item">
              <div style="float: left">
                <el-avatar :size="50" :src="item.avatar_url"></el-avatar>
              </div>
              <div style="float: left;margin-top: 10px;line-height: 1.2;background-color: #fff;margin-left: 10px">
                {{item.login}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div style="border: 3px solid white;float: right" class="col-xl-6">
      <h4>话题贡献</h4>
      <div class="QA clearfix col-xl-12" style="border: 3px solid white;float: left;">
        <div style="float: left;border: 3px solid white;display: inline;" class="col-xl-6">
          <ul style="float: left">
            <li v-for="item in users.slice(14,19)" style="margin-top: 30px;float: left">
              <div class="item">
                <div style="float: left">
                  <el-avatar :size="50" :src="item.avatar_url"></el-avatar>
                </div>
                <div style="float: left;margin-top: 10px;line-height: 1.2;background-color: #fff;margin-left: 10px">
                  {{item.login}}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="float: right;border: 3px solid white;display: inline" class="col-xl-6">
          <ul>
            <li v-for="item in users.slice(19,24)" style="margin-top: 30px;float: left">
              <div class="item">
                <div style="float: left">
                  <el-avatar :size="50" :src="item.avatar_url"></el-avatar>
                </div>
                <div style="float: left;margin-top: 10px;line-height: 1.2;background-color: #fff;margin-left: 10px">
                  {{item.login}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>



</div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContributorTable",
  data(){
    return{
      keyWord:'halo',
      users:[]
    }
  },created() {
    axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了");
            this.users=response.data.items
          console.log(this.users)
        },
        (error) => {
          this.$bus.$emit("updateListData", {	//请求后更新List的数据
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
    );
  },
  methods: {

  },
}

</script>

<style scoped>
.table{

  height: 375px;
  /*border: 3px solid hotpink;*/
  background-color: white;
  margin-top: 50px;
}

.avatar,.user,.id{
  float: left;
  margin-left: 15px;
  text-align: center;
  align-content: center;
}
li{
  font-size: 20px;
  text-align: center!important;
  background-color: #fff;
  background-clip: border-box;


}
</style>