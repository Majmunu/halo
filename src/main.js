//引入vue
import Vue from 'vue';
//引入App
import App from './App.vue';
import 'bootstrap';
import $ from 'jquery';
//引入饿了么组件库
import ElementUI from 'element-ui';

//引入样式
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//VueRouter
import VueRouter from "vue-router"
//引入路由器
import router from "@/router"
import request from "@/utils/requset";


//关闭生产提示
Vue.config.productionTip = false
Vue.prototype.request=request
//应用插件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(ViewUI);


new Vue({
  render: h => h(App),
  router:router


}).$mount('#app')
