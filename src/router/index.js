import Vue from "vue";
import VueRouter from 'vue-router'
import Digital from "@/components/pages/Digital";
import HotList from "@/components/pages/HotList";
import QuestionsAndAnswers from "@/components/pages/QuestionsAndAnswers";
import Topics from "@/components/pages/Topics";
import HaloHome from "@/components/pages/HaloHome";
import Course from "@/components/pages/Course";
import LIVE from "@/components/pages/LIVE";
import publicTest from "@/components/pages/publicTest";
import RankingList from "@/components/pages/RankingList";
import CourseHome from "@/components/pages/Course/CourseHome";
import questionAndAnswerPage from "@/components/pages/level3Page/questionAndAnswerPage";
import QASubpage from "@/components/pages/sonHome/qASubpage";
import TheArticleDetails from "@/components/pages/level3Page/TheArticleDetails";
import hotListPage from "@/components/pages/sonHome/hotListPage";
import login from "@/components/pages/login";
import Backstage from "@/components/pages/Backstage";

			// 引入VueRouter
Vue.use(VueRouter)

// 创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes:[
        {
            path:"/wenda",
            component:QuestionsAndAnswers,
            redirect:"/wenda/home",
            children:[
                {
                    name:"question",
                    path: "/wenda/question",
                    component: questionAndAnswerPage
                },
                {
                    name:'qahome',
                    path:"/wenda/home",
                    component:QASubpage
                },


            ]
        },
        {
            path:"/rebang",
            component:HotList,
            redirect:'/rebang/home',
            children:[
                {
                    name:'tiezi',
                    path: '/rebang/tiezi',
                    component: TheArticleDetails
                },
                {
                    name:'rbhome',
                    path:'/rebang/home',
                    component: hotListPage
                },

            ]

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
            path:"/jiaocheng",
            component:Course,
            children:[
                {
                    name:'jchome',
                    path:'/jiaocheng/jchome',
                    component:CourseHome
                },
                {
                    path:'/jiaocheng',
                    redirect:"/jiaocheng/jchome"
                }

            ]
        },
        {
            path:"/zhibo",
            component:LIVE
        },
        {
            path:"/zhongce",
            component:publicTest
        },
        {
            path:"/paihangbang",
            component:RankingList
        },
        {
            path:'/login',
            component:login

        },
        {
            path:'/houtai',
            component:Backstage
        },
        {
            path:'*',
            redirect:"/home"
        }
    ]
})

//暴露router
