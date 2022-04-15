<template>

    <div class="root col-xl-9 clearfix">
      <div class="bread">
        <Breadcrumb>
          <BreadcrumbItem to="/home">首页</BreadcrumbItem>
          <BreadcrumbItem to="/wenda/home">问答</BreadcrumbItem>
          <BreadcrumbItem>帖子详情</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <el-card class="box-card card">
        <h2>我是标题</h2>
        <div class="author">
          <div class="author"> <Avatar icon="ios-person" size="large" /></div>

          <div class="date"><strong>我是作者</strong></div>
          <div class="date">
            <span>发布时间：</span>
            <Time :time="time2"  type="datetime" hash="#hash" />
          </div>
        </div>
        <div class="empty">
          <el-empty description="我是问题详情"></el-empty>
        </div>
        <div>
          <Tag color="success">我是</Tag>
          <Tag color="success">帖子</Tag>
          <Tag color="success">标签</Tag>
        </div>
        <div class="buttonitems">
          <Tooltip content="关注后获得更新提醒" placement="top-start">
            <Button type="success">关注</Button>
          </Tooltip>
          <button type="button" class="btn btn-light btn-sm shoucang">🏷️收藏</button>
        </div>
        <div class="i">
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              回复
            </button>
            <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <Input v-model="value19" :border="false" placeholder="输入回复..." />
            </div>
          </div>

        </div>

      </el-card>

      <el-card class="box-card card">
        <div>
          <div>
            <Tabs type="card">
              <TabPane label="最热">
                <div class="author">
                  <div class="author"> <Avatar icon="ios-person" size="large" /></div>

                  <div class="date"><strong>我是作者</strong></div>
                  <div class="date">
                    <span>发布时间：</span>
                    <Time :time="time2" hash="#hash" />
                  </div>
                </div>

                <div class="empty">
                  <el-empty description="我是回复详情"></el-empty>
                </div>

                <div class="i">
                  <p>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                      回复
                    </button>
                    <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                  </p>
                  <div class="collapse" id="collapseExample1">
                    <div class="card card-body">
                      <Input v-model="value19" :border="false" placeholder="输入回复..." />
                    </div>
                  </div>
                </div>

              </TabPane>
              <TabPane label="最新">
                最新
              </TabPane>

            </Tabs>

          </div>

        </div>

      </el-card>

    </div>

  </template>

  <script>
    export default {
      name: "TheArticleDetails",
      data () {
        return {
          time2: (new Date()).getTime()
        }
      }
    }
  </script>

  <style scoped>
    .root{
      border: 3px solid #e9ecef;
      margin-left: auto;
      margin-right: auto;
    }
    .bread{
      float: left;
      border: 2px solid #e9ecef;
    }
    .card{
      margin-top: 40px;
      text-align: left;
    }
    .author{
      margin-top: 10px;
      float: left;

    }
    .date{
      float: left;
      margin-top: 18px;
      margin-left: 10px;
    }
    .empty{
      border: 3px solid #e9ecef;
      margin-top: 80px;
    }
    .shoucang{
      margin-left: 20px;
      text-align: center;
      margin-top: 2px;
    }
    .buttonitems{
      margin-top: 10px;
    }
    .i{
      margin-top: 12px;

    }
    .share-button{
      margin-top: 2px;
      margin-left: 30px;
    }
    .answer{
      float: right;
    }
  </style>
