import Vue from "vue";
import VueRouter from 'vue-router'
import Digital from "@/components/pages/Digital";
import HotList from "@/components/pages/HotList";
import QuestionsAndAnswers from "@/components/pages/QuestionsAndAnswers";
import Topics from "@/components/pages/Topics";
import HaloHome from "@/components/pages/HaloHome";
			// 引入VueRouter
Vue.use(VueRouter)

// 创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes:[
        {
            path:"/wenda",
            component:QuestionsAndAnswers
        },
        {
            path:"/rebang",
            component:HotList
        },
        {
            path:"/huati",
            component:Topics
        },
        {
            path:"/shuma",
            component:Digital
        },
        {
            path:"/home",
            component:HaloHome
        },
        {
            path:'*',
            redirect:"/home"
        }
    ]
})

//暴露router
