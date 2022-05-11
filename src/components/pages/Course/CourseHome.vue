<template>
  <div class="root col-xl-9">

    <!--!教程左侧-->
    <div class="course-left col-xl-7">
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <div class="img clearfix">
          <img src="@/assets/images/course/course.jpg" alt="" width="100%" height="160px" class="img">
        </div>
        <!--?导航-->
        <div class="daohang">
          <span> <el-link href="https://element.eleme.io" target="_blank">🪄品牌刷机</el-link></span>
          <el-divider direction="vertical"></el-divider>
          <span> <el-link href="https://element.eleme.io" target="_blank">📱手机进阶</el-link></span>
          <el-divider direction="vertical"></el-divider>
          <span> <el-link href="https://element.eleme.io" target="_blank">💻PC玩家</el-link></span>
          <el-divider direction="vertical"></el-divider>
          <span> <el-link href="https://element.eleme.io" target="_blank">📸数码生活</el-link></span>
        </div>
      </el-card>
      <!--!教程卡片-->
      <div class="ppsj">
        <h5>🪄品牌刷机🪄</h5>
        <el-row>
          <el-col :span="8" v-for="item in tableData" :key="item.id"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img :src="item.img" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>OPPO教程{{item.name}}</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            class="fenye"
            :current-page="pageNum"
            background
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>

      </div>
      <!--!美化卡片-->
      <div class="ppsj">
        <h5>📱手机进阶📱</h5>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 6" :key="o"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img src="@/assets/images/course/kwgt.jpg" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>美化教程</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            class="fenye"
            background
            layout="prev, pager, next"
            :total="60">
        </el-pagination>
      </div>
      <!--!PC卡片-->
      <div class="ppsj">
        <h5>💻PC玩家💻</h5>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 6" :key="o"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img src="@/assets/images/course/pc.jpg" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>美化教程</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            class="fenye"
            background
            layout="prev, pager, next"
            :total="60">
        </el-pagination>
      </div>
      <!--!数码卡片-->
      <div class="ppsj">
        <h5>📸数码生活📸</h5>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 6" :key="o"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img src="@/assets/images/course/smsh.jpg" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>美化教程</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            class="fenye"
            background
            layout="prev, pager, next"
            :total="60">
        </el-pagination>
      </div>

      <el-col class="gd">
        <el-card shadow="hover">
         浏览更多教程
        </el-card>
      </el-col>
    </div>
    <!--!教程右侧-->
    <div class="course-right col-xl-5">
      <el-button type="success" @click="handleAdd">发布教程</el-button>
      <!--!今日教程-->
      <el-card class="box-card" :body-style="{ padding: '0px' }">

        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            今日·教程
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="media">
              <img src="@/assets/images/course/shizuku.jpg" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">小白大众使用shikuzu方法（基于直连）</h6>
                <div class="tag">
                  <Tag color="primary"> 玩机技巧</Tag>
                  <Tag color="success">大佬们&日常</Tag>
                  <Tag color="warning">Android那些事</Tag>
                </div>

              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="media">
              <img src="@/assets/images/course/shizuku.jpg" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">小白大众使用shikuzu方法（基于直连）</h6>
                <div class="tag">
                  <Tag color="primary"> 玩机技巧</Tag>
                  <Tag color="success">大佬们&日常</Tag>
                  <Tag color="warning">Android那些事</Tag>
                </div>

              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="media">
              <img src="@/assets/images/course/shizuku.jpg" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">小白大众使用shikuzu方法（基于直连）</h6>
                <div class="tag">
                  <Tag color="primary"> 玩机技巧</Tag>
                  <Tag color="success">大佬们&日常</Tag>
                  <Tag color="warning">Android那些事</Tag>
                </div>

              </div>
            </div>
          </a>
        </div>

      </el-card>
      <!--!热门教程-->
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            热门·教程
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="media">
              <img src="@/assets/images/course/13.jpg" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">硬核沉浸MIUI小白条？</h6>
                <div class="tag">
                  <Tag color="primary"> MIUI13</Tag>
                  <Tag color="success">大佬们&日常</Tag>
                  <Tag color="warning">全站精选教程</Tag>
                </div>

              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="media">
              <img src="@/assets/images/course/13.jpg" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">硬核沉浸MIUI小白条？</h6>
                <div class="tag">
                  <Tag color="primary"> MIUI13</Tag>
                  <Tag color="success">大佬们&日常</Tag>
                  <Tag color="warning">全站精选教程</Tag>
                </div>

              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="media">
              <img src="@/assets/images/course/13.jpg" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">硬核沉浸MIUI小白条？</h6>
                <div class="tag">
                  <Tag color="primary"> MIUI13</Tag>
                  <Tag color="success">大佬们&日常</Tag>
                  <Tag color="warning">全站精选教程</Tag>
                </div>
              </div>
            </div>
          </a>
        </div>
      </el-card>
      <!--@大佬-->
      <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          玩机·大神
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="media">
            <div class="block"><el-avatar :size="60">
              <img src="@/assets/images/course/chen.jpg" alt="">
            </el-avatar></div>
            <div class="media-body text-nowrap box">
              <h6 class="mt-0">晨钟酱</h6>
              <div class="tag">
                玩机达人、PC端免ROOT玩机工具开发者
              </div>

            </div>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="media">
            <div class="block"><el-avatar :size="60">
              <img src="@/assets/images/course/chen.jpg" alt="">
            </el-avatar></div>
            <div class="media-body text-nowrap box">
              <h6 class="mt-0">晨钟酱</h6>
              <div class="tag">
                玩机达人、PC端免ROOT玩机工具开发者
              </div>

            </div>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="media">
            <div class="block"><el-avatar :size="60">
              <img src="@/assets/images/course/chen.jpg" alt="">
            </el-avatar></div>
            <div class="media-body text-nowrap box">
              <h6 class="mt-0">晨钟酱</h6>
              <div class="tag">
                玩机达人、PC端免ROOT玩机工具开发者
              </div>

            </div>
          </div>
        </a>
      </div>

      </el-card>
    </div>

    <el-dialog title="信息" :visible.sync="dialogFormVisible" width="60%" :close-on-click-modal="false">
      <el-form label-width="100px" size="small" style="width: 90%">
        <el-form-item label="标题">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
              class="avatar-uploader"
              action="http://localhost:9090/file/upload"
              ref="img"
              :show-file-list="false"
              :on-success="handleImgUploadSuccess">
            <img v-if="form.img" :src="form.img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容">
          <div id="richText"></div>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
import E from "wangeditor";

let editor;
export default {
  name: "CourseHome",
  data() {
    return {
      id:'',
      currentDate: new Date(),
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 6,
      name: "",
      form: {},
      dialogFormVisible: false,
      dialogFormVisible1: false,
      content: '',
      multipleSelection: [],
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}


    }
  },created() {
    this.load()
  },
  methods:{
    load() {
      this.request.get("/course/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
          type: 2
        }
      }).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
        console.log(this.tableData)
      })
    },
    save() {
      const content = editor.txt.html()
      console.log(content)
      // 注意：这个地方需要手动赋值
      this.form.content = content
      this.form.type = 2
      this.request.post("/course", this.form).then(res => {
        if (res.code === '200') {
          this.$message.success("保存成功")
          this.dialogFormVisible = false
          this.load()
        } else {
          this.$message.error("保存失败")
        }
      })
    },
    handleAdd() {
      this.dialogFormVisible = true
      this.form = {img: ''}
      this.$nextTick(() => {
        if(!editor) {
          editor = new E("#richText")
          editor.config.uploadImgServer = 'http://localhost:9090/file/uploadImg'
          editor.config.uploadFileName = 'file'
          editor.create()
        }
        editor.txt.html('')  // 清除内容

        if(this.$refs.img) {
          this.$refs.img.clearFiles();
        }
        if(this.$refs.file) {
          this.$refs.file.clearFiles();
        }
      })
    },

    handleSizeChange(pageSize) {
      console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },
    handleFileUploadSuccess(res) {
      this.form.file = res
    },
    handleImgUploadSuccess(res) {
      this.form.img = res
    },
  }
}
</script>

<style scoped>
.root{
  margin-left: auto;
  margin-right: auto;
}
.course-left{
  float: left;
}
.course-right{
  float: right;
  margin-top: 20px;

}
.img{

  /*border: 3px solid lightcoral;*/


}
.daohang{
  padding-top: 5px;
}




.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.kc-card{
  margin-top: 10px;
}
.el-card1{


  margin-left: 14px;
}
.ppsj
{
  margin-top: 15px;
}
.fenye{
  margin-top: 10px;
}
.gd{
  margin-top: 15px;
  margin-bottom: 55px;
}
.tag{
  float: bottom;
  margin-top: 20px;
}
.box{

  float: left;
}
.box-card{
  margin-top: 30px;
}
</style>