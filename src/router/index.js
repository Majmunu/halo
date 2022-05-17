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

import Register from "@/components/pages/Register";
import NotFind from "@/components/pages/NotFind";
import Person from "@/components/pages/backgroundPage/Person";
import Password from "@/components/pages/backgroundPage/Password";
import CourseDetail from "@/components/pages/level3Page/CourseDetail";



// 引入VueRouter
Vue.use(VueRouter)

// 创建router实例对象，去管理一组一组的路由规则

const routes =[
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
        path:"/Halohome",
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
                meta:{
                    keepAlive:true

                },
            },
            {
                path:'course',
                meta:{keepAlive:true},
                component: CourseDetail
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
        path:'/',
        redirect:"/halohome"
    },
    {
        path: '*',
        component: NotFind
    }

]


const router=new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes
})

// 提供一个重置路由的方法
export const resetRouter = () => {
    router.matcher = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
}


export const setRoutes=()=>{
    const storeMenus=localStorage.getItem("menus")
    if(storeMenus){

        const currentRouteNames=router.getRoutes().map(v=>v.name)
        if(!currentRouteNames.includes('Manage'))
        {
            //// 拼装动态路由
            const manageRouter={
                name:'Manage',
                path:'/',
                component:Backstage,
                meta:{keepAlive:false},
                children:[
                    { path: 'person', name: '个人信息', component:Person},
                    { path: 'password', name: '修改密码', component:Password}
                ]
            }
            const menus=JSON.parse(storeMenus)
            menus.forEach(item=>{
                if(item.path){
                    let itemMenu={
                        path:item.path.replace("/",""),
                        component: () => import('@/components/pages/backgroundPage/' + item.pagePath + '.vue'),
                        name:item.name,

                        meta:{keepAlive:false},

                    }
                    manageRouter.children.push(itemMenu)
                }else if(item.children.length){
                    item.children.forEach(item=>{
                        if(item.path)
                        {
                            let itemMenu={
                                path:item.path.replace("/",""),
                                component: () => import('@/components/pages/backgroundPage/' + item.pagePath + '.vue'),
                                name:item.name,

                                meta:{keepAlive:false},

                            }
                            manageRouter.children.push(itemMenu)
                        }

                    })
                }



            })
            // 动态添加到现在的路由对象中去
            router.addRoute(manageRouter)
        }

    }
}
// 重置我就再set一次路由
setRoutes()
router.beforeEach((to,from,next)=>{
    //to()  进入目标路由
    //from()  离开的路由
    //next()  下一个路由
    //next({path:"/"})  跳转到某个路由
    localStorage.setItem("currentPathName",to.name)
    next();
});


export default router