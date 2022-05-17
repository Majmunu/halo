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
          <el-col :span="8" v-for="item in tableData" :key="item.id" v-on.native="ctype=11" class="kc-card">
            <el-card :body-style="{ padding: '0px' }"
                     class="el-card1"
                     @click="$router.push('/jiaocheng/tcourse?id=' + item.id)"
            >
              <img :src="item.img" class="image" width="231px" height="130px" @click="$router.push('/jiaocheng/course?id=' + item.id)">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>

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
          <el-col :span="8" v-for="item in tableData1" :key="item.id"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img :src="item.img" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            @size-change="handleSizeChange1"
            @current-change="handleCurrentChange1"
            class="fenye"
            :current-page="pageNum1"
            background
            :page-size="pageSize1"
            layout="prev, pager, next"
            :total="total1">
        </el-pagination>
      </div>
      <!--!PC卡片-->
      <div class="ppsj">
        <h5>💻PC玩家💻</h5>
        <el-row>
          <el-col :span="8" v-for="item in tableData2" :key="item.id"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img :src="item.img" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange2"
            class="fenye"
            :current-page="pageNum2"
            background
            :page-size="pageSize2"
            layout="prev, pager, next"
            :total="total2">
        </el-pagination>
      </div>
      <!--!数码卡片-->
      <div class="ppsj">
        <h5>📸数码生活📸</h5>
        <el-row>
          <el-col :span="8" v-for="item in tableData3" :key="item.id"  class="kc-card">
            <el-card :body-style="{ padding: '0px' }" class="el-card1">
              <img :src="item.img" class="image" width="231px" height="130px">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>

              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-pagination
            @size-change="handleSizeChange3"
            @current-change="handleCurrentChange3"
            class="fenye"
            :current-page="pageNum3"
            background
            :page-size="pageSize3"
            layout="prev, pager, next"
            :total="total3">
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
            <div class="media" v-for="item in tableData.slice(1,4)">
              <img :src="item.img" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">{{ item.name }}</h6>
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
            <div class="media" v-for="item in tableData1.slice(0,3)">
              <img :src="item.img" class="mr-3" alt="..." width="112px" height="63px">
              <div class="media-body text-nowrap box">
                <h6 class="mt-0">{{item.name}}</h6>
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

        <el-form-item label="文章分类">
          <el-select clearable v-model="form.ctype" placeholder="请选择" style="width: 100%">
            <el-option v-for="item in TypeData" :key="item.typename" :label="item.typename" :value="item.id">
              {{ item.typename }}
            </el-option>
          </el-select>
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
      tableData1: [],
      tableData2: [],
      tableData3: [],
      total: 0,
      total1: 0,
      total2: 0,
      total3: 0,
      pageNum: 1,
      pageSize: 6,
      pageNum1: 1,
      pageSize1: 6,
      pageNum2: 1,
      pageSize2: 6,
      pageNum3: 1,
      pageSize3: 6,
      name: "",
      form: {},
      ctype:'',
      TypeDate:[],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      content: '',
      multipleSelection: [],
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}


    }
  },created() {
    this.load()
    this.load1()
    this.load2()
    this.load3()
    this.loadType()
  },
  methods:{
    loadType() {
      this.request.get("/type").then(res => {
        this.TypeData = res.data
        console.log("type"+this.TypeData)

      })

    },
    load() {
      this.request.get("/course/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
          ctype:11,
          type: 2
        }
      }).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
        console.log(this.tableData)
      })
    },
    load1() {
      this.request.get("/course/page", {
        params: {
          pageNum: this.pageNum1,
          pageSize: this.pageSize1,
          name: this.name,
          ctype:12,
          type: 2
        }
      }).then(res => {
        this.tableData1 = res.data.records
        this.total1 = res.data.total

      })
    },
    load2() {
      this.request.get("/course/page", {
        params: {
          pageNum: this.pageNum2,
          pageSize: this.pageSize2,
          name: this.name,
          ctype:13,
          type: 2
        }
      }).then(res => {
        this.tableData2 = res.data.records
        this.total2 = res.data.total

      })
    },
    load3() {
      this.request.get("/course/page", {
        params: {
          pageNum: this.pageNum3,
          pageSize: this.pageSize3,
          name: this.name,
          ctype:14,
          type: 2
        }
      }).then(res => {
        this.tableData3 = res.data.records
        this.total3 = res.data.total

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
    handleSizeChange1(pageSize) {
      console.log(pageSize)
      this.pageSize1 = pageSize
      this.load1()
    },
    handleCurrentChange1(pageNum) {
      console.log(pageNum)
      this.pageNum1 = pageNum
      this.load1()
    },
    handleSizeChange2(pageSize) {
      console.log(pageSize)
      this.pageSize2 = pageSize
      this.load2()
    },
    handleCurrentChange2(pageNum) {
      console.log(pageNum)
      this.pageNum2 = pageNum
      this.load2()
    }, handleSizeChange3(pageSize) {
      console.log(pageSize)
      this.pageSize3 = pageSize
      this.load3()
    },
    handleCurrentChange3(pageNum) {
      console.log(pageNum)
      this.pageNum3 = pageNum
      this.load3()
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