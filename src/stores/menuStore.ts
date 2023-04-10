import {defineStore} from 'pinia'
import {HttpManager} from "@/api";
import menu from "@/utils/MenuUtils"
import type {RouteRecordRaw} from "vue-router";


export const menuStore = defineStore('sideMenu', {
    state: () => {
        return {
            menu: new Array<API.MenuItem>(),
            routes: [] as Array<RouteRecordRaw>,
        }
    },
    getters: {
        getRoute:state => state.routes
    },
    // 持久化
    persist: {
        key: "menu-store",
        storage: window.localStorage,
        beforeRestore: (context) => {
            console.log("load userStore data start");
        },
        afterRestore: (context) => {
            console.log("load userStore data end");
        },
    },
    actions: {
        async getMenu() {
            //获取菜单信息
            const res: any = await HttpManager.getMenu();
            const{processMenuItems}=menu()
            if (res?.code === 200 && res.data) {
                let menu = processMenuItems(res.data)
                // console.log(JSON.stringify(menu))
                this.menu = menu;
            } else {
                console.log("获取菜单信息失败")
            }
        }
    }
})


