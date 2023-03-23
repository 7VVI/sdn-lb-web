// @ts-ignore
import Menu=API.Menu;
import Router=API.Router;
//递归构建菜单
function routerListFormat(data:Menu[]) {
    let parents = data.filter((p) => p.pid === 0);
    let  children = data.filter((c) => c.pid != 0);

    dataToTree(parents, children);
    //递归函数
    function dataToTree(parents:Menu[], children:Menu[]) {
        parents.map((p) => {
            children.map((c, index) => {
                if (c.pid === p.menue_id) {
                    //如果相同，拷贝children一个新的数组c1
                    let c1 = Object.assign([], children);
                    c1.splice(index, 1); //删除当前元素，获取除当前元素之外的所有子路由元素
                    dataToTree([c], c1); //继续递归
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
            component: ()=>import(`@/views/${r.name}/index.vue`), //利用字符串模板拼接
            meta:{
                hidden: r.hidden
            }
        };
        if (r.children) {
            //如果该结点有孩子，则继续递归
            routes.children = generateRouter(r.children);
        }
        return routes;
    });
    return newRouters;
}

export {generateRouter,routerListFormat}
//菜单转换路由