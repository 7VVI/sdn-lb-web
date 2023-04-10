import Menu = API.Menu;
import MenuItem = API.MenuItem;
import type {RouteRecordRaw} from "vue-router";

const menu=()=> {
//转换菜单
    function processMenuItems(menuItems: Menu[]): MenuItem[] {
        const menuMap = new Map<number, MenuItem>();
        const rootMenuItems: MenuItem[] = [];

        menuItems.forEach((item) => {
            const menuItem: MenuItem = {
                menuId: item.menuId,
                pid: item.pid,
                path: item.path,
                name: item.name,
                menuOrder: item.menuOrder,
                subCount: item.subCount,
                title: item.title,
                component: item.component,
                icon: item.icon,
                iconColor: item.iconColor,
                meta: {
                    hidden: item.hidden,
                    type: item.type
                },
            };
            menuMap.set(item.menuId, menuItem);
        });

        menuItems.forEach((item) => {
            const menuItem = menuMap.get(item.menuId);

            if (menuItem && item.pid !== 0) {
                const parentMenuItem = menuMap.get(item.pid);

                if (parentMenuItem && parentMenuItem.children) {
                    menuItem.path=parentMenuItem.path+menuItem.path
                    parentMenuItem.children.push(menuItem);
                } else if (parentMenuItem) {
                    menuItem.path=parentMenuItem.path+menuItem.path
                    parentMenuItem.children = [menuItem];
                }
            } else if (menuItem) {
                menuItem.path="/home"+menuItem.path
                rootMenuItems.push(menuItem);
            }
        });

        return rootMenuItems;
    }

    let modules = import.meta.glob("@/views/**/*.vue")

//路由转换
    function generateRoutes(menuItems: MenuItem[], parentPath = ""): RouteRecordRaw[] {
        const routes: RouteRecordRaw[] = [];

        menuItems.forEach((menuItem) => {

            const route: RouteRecordRaw = {
                path: menuItem.path,
                name: menuItem.title,
                meta: menuItem.meta,
                // component: () => import(`@/views${menuItem.path}/index.vue`),
                component: modules[`/src/views/${menuItem.name}/index.vue`],
            };
            if (menuItem.children && menuItem.children.length > 0) {
                const children = generateRoutes(menuItem.children);
                if (children.length > 0) {
                    // @ts-ignore
                    route.children = children;
                }
            }

            routes.push(route);
        });

        return routes;
    }
    return {
        processMenuItems,
        generateRoutes
    }
}

export default menu;