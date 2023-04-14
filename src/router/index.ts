import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import {start, close} from "@/utils/nprogress";
import {menuStore} from "@/stores/menuStore";
import menu from "@/utils/MenuUtils";

declare var require: any;
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/layout/index.vue"),
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

router.beforeEach(async (to, from, next) => {
        start();
        const store = menuStore();
        if (to.name == "login") {
            next({ name: 'login' });
        } else {

            if (flag) {
                const{generateRoutes}=menu()
                let rt = generateRoutes(store.menu)
                await rt.forEach(item => {
                    router.addRoute("home", item)
                });
                flag = false;
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
