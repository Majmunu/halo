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
import UserInterface from "@/components/pages/Backstage/UserInterface";
import BSHome from "@/components/pages/Backstage/BSHome";
import Register from "@/components/pages/Register";
import Person from "@/components/pages/Person";
import file from "@/components/pages/File";
import RoleInterface from "@/components/pages/Backstage/RoleInterface";
import MenuInterface from "@/components/pages/Backstage/MenuInterface";

			// 引入VueRouter
Vue.use(VueRouter)

// 创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes:[
        {
            path:"/wenda",
            component:QuestionsAndAnswers,
            meta:{keepAlive:true},
            redirect:"/wenda/home",
            children:[
                {
                    name:"question",
                    path: "/wenda/question",
                    component: questionAndAnswerPage,
                    meta:{keepAlive:true},
                },
                {
                    name:'qahome',
                    path:"/wenda/home",
                    component:QASubpage,
                    meta:{keepAlive:true},
                },


            ]
        },
        {
            path:"/rebang",
            component:HotList,
            meta:{keepAlive:true},
            redirect:'/rebang/home',
            children:[
                {
                    name:'tiezi',
                    path: '/rebang/tiezi',
                    component: TheArticleDetails,
                    meta:{keepAlive:true},
                },
                {
                    name:'rbhome',
                    path:'/rebang/home',
                    component: hotListPage,
                    meta:{keepAlive:true},
                },

            ]

        },
        {
            path:"/huati",
            component:Topics,
            meta:{keepAlive:true},
        },
        {
            path:"/shuma",
            component:Digital,
            meta:{keepAlive:true},
        },
        {
            path:"/home",
            component:HaloHome,
            meta:{keepAlive:true},
        },
        {
            path:"/jiaocheng",
            component:Course,
            meta:{keepAlive:true},
            children:[
                {
                    name:'jchome',
                    path:'/jiaocheng/jchome',
                    component:CourseHome,
                    meta:{keepAlive:true},
                },
                {
                    path:'/jiaocheng',
                    redirect:"/jiaocheng/jchome",
                    meta:{keepAlive:true},
                }

            ]
        },
        {
            path:"/zhibo",
            component:LIVE,
            meta:{keepAlive:true},
        },
        {
            path:"/zhongce",
            component:publicTest,
            meta:{keepAlive:true},
        },
        {
            path:"/paihangbang",
            component:RankingList,
            meta:{keepAlive:true},
        },
        {
            path:'/login',
            name:'login',
            component:login,
            meta:{keepAlive:false},

        },
        {
            path:'/register',
            component:Register,
            meta:{keepAlive:false}
        },

        {
            path:'/houtai',
            component:Backstage,
            redirect:'/houtai/home',
            meta:{keepAlive:false},
            children:[
                {
                path: 'user',
                name: 'user',
                    meta: { title: '首页' },
                component: UserInterface
                },
                {
                    path: 'home',
                    name: 'home',
                    meta: { title: '首页' },
                    component:BSHome
                },
                {
                    path:'person',
                    name:'个人信息',
                    component:Person
                },
                {
                    path:'file',
                    name:"文件管理",
                    component: file
                },
                {
                    path:'role',
                    name:'角色管理',
                    component: RoleInterface
                },
                {
                    path: 'menu',
                    name: '菜单管理',
                    component: MenuInterface
                }
            ]

        },
        {
            path:'*',
            redirect:"/home"
        }
    ]
})

//暴露router
