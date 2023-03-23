import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import {HttpManager} from "@/api";
import Menu = API.Menu;
import Router = API.Router;
import {menu} from "@/enum";
import {start, close} from "@/utils/nprogress";
import {generateRouter, routerListFormat} from "@/utils/MenuToRouter";
import {menuStore} from "@/stores/menuStore";

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
        component: (resolve) => import('@/views/features/404.vue')
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


const whiteList = ['/login'] // no redirect whitelist


router.beforeEach(async (to, from, next) => {
    start()
    const store = menuStore()
    // const res: BaseResponse = await HttpManager.getMenu();
    // const newRoutes = generateRouter(res.data);
    // let token:string="fhaksfhsd";
    // if(token!=null){
    let Menus = routerListFormat(menu);
    let newRoutes = generateRouter(Menus);
    store.$patch(state => {
        state.menu = Menus
    });
    //
    //         newRoutes.map((item) => {
    //             router.addRoute(item as any)
    //         })
    //         console.log(router.getRoutes())
    //         // next({path:to.path})//前往当前输入的链接所在的页面
    //
    // next({
    //     ...to, // next({ ...to })的目的,是保证路由添加完了再进入页面 (可以理解为重进一次)
    //     replace: true, // 重进一次, 不保留重复历史
    // })

    next(); //前往当前输入的链接所在的页面
});

router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    close();
})

export default router;
