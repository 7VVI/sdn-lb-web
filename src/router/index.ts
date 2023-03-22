import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import { HttpManager } from "@/api";
import Menu=API.Menu;
import Router=API.Router;
import {menu} from "@/enum";

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

router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.\
  // const res: BaseResponse = await HttpManager.getMenu();
  // const newRoutes = generateRouter(res.data);
  // console.log("路由守卫", newRoutes);
  // let token:string="fhaksfhsd";
  // if(token!=null){
  //   let Menus=routerListFormat(menu);
  //   let newRoutes= generateRouter(Menus);
  //   console.log(newRoutes)
  //   newRoutes.map((item)=>{
  //     router.addRoute(item as any)
  //   })
  //   console.log(router.getRoutes())
  //   token="";
    // next({
    //
    //   ...to, // next({ ...to })的目的,是保证路由添加完了再进入页面 (可以理解为重进一次)
    //   replace: true, // 重进一次, 不保留重复历史
    // })
  // }else{
  //   if (to.name == null) {
  //     next("/404")
  //   }else{
  //     next()
    // }
  // }


  // newRoutes.map((item) => {
  //   router.addRoute(item);
  // });

  next(); //前往当前输入的链接所在的页面
});

//递归构建菜单
function routerListFormat(data:Menu[]) {
  let parents = data.filter((p) => p.pid === 0);
  let  children = data.filter((c) => c.pid != 0);

  dataTotree(parents, children);
  //递归函数
  function dataTotree(parents:Menu[], children:Menu[]) {
    parents.map((p) => {
      children.map((c, index) => {
        if (c.pid === p.menue_id) {
          //如果相同，拷贝children一个新的数组c1
          let c1 = Object.assign([], children);
          c1.splice(index, 1); //删除当前元素，获取除当前元素之外的所有子路由元素
          dataTotree([c], c1); //继续递归
          if (p.children) {
            //如果该结点已经存在孩子，则直接加入孩子
            p.children.push(c);
          } else {
            //如果该结点不存在孩子，则让该结点的孩子等于数组c
            p.children = [c];
          }
        }
      });
    });
  }
  return parents;
}


//转化为路由表格式
function generateRouter(UserRouter:Menu[]):Router[] {
  let newRouters = UserRouter.map((r) => {
    let routes:Router = {
      path: r.path,
      name: r.component,
      component: `()=>import(@/views/${r.component}/index.vue)`, //利用字符串模板拼接
      hidden:r.hidden
    };
    if (r.children) {
      //如果该结点有孩子，则继续递归
      routes.children = generateRouter(r.children);
    }
    return routes;
  });
  return newRouters;
}


export default router;
