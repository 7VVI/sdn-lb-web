import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import {HttpManager} from "@/api";
import Menu = API.Menu;
import Router = API.Router;
import {menu} from "@/enum";
import {start, close} from "@/utils/nprogress";
import {filterType, generateRouter, processArray, routerListFormat} from "@/utils/MenuToRouter";
import {menuStore} from "@/stores/menuStore";
import BaseResponse = API.BaseResponse;
// declare var require :any;
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
    },
    {
        path: '/404',
        name: "404",
        component: (resolve) => import('@/views/features/404.vue')
    },
    // {
    //     path: "/:catchAll(.*)",
    //     redirect: "/404",
    // }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

let flag = true;
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
        start();
        const store = menuStore();
        if (to.name == "login") {
            next()
        } else {
            if (store.menu.length < 0 || flag) {
                let menus = localStorage.getItem("menu");
                store.menu = JSON.parse(menus as any);
                let newRoutes = generateRouter(JSON.parse(menus as any));
               let rt= filterType(newRoutes)
                console.log(JSON.stringify(rt))
                rt.forEach(item => {
                    router.addRoute("home", item as any)
                });
                flag = false;
                store.routes = [];
                next({
                    ...to, // next({ ...to })的目的,是保证路由添加完了再进入页面 (可以理解为重进一次)
                    replace: true, // 重进一次, 不保留重复历史
                })
            } else {
                next();
            }
        }
    }
)
;

router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    close();
})

export default router;
