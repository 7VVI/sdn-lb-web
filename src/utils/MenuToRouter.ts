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
                if (c.pid === p.menuId) {
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
                name: r.name,
                component: ()=>import(`@/views/${r.name}/index.vue`), //利用字符串模板拼接
                meta:{
                    hidden: r.hidden,
                    type:r.type
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

function processArray(arr:Router[]):Router[] {
    let result:Router[] = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        if (obj.meta && obj.meta.type === 0) {
            result.push(obj);
        } else if (obj.meta && obj.meta.type === 1) {
            if (obj.children && obj.children.length > 0) {
                let childrenResult = processArray(obj.children);
                result = result.concat(childrenResult);
            } else {
                delete obj.meta.type;
                result.push(obj);
            }
        }
    }
    return result;
}

function filterType(arr:Router[]):Router[] {
    let result:Router[] = [];

    function traverse(currentArr:Router[]) {
        for (let i = 0; i < currentArr.length; i++) {
            if (currentArr[i].meta.type === 0) {
                let newItem = { ...currentArr[i] };
                if (currentArr[i].children) {
                    newItem.children = traverse(currentArr[i].children);
                }
                result.push(newItem);
            } else if (currentArr[i].meta.type === 1 && currentArr[i].children) {
                traverse(currentArr[i].children);
            }
        }
    }

    traverse(arr);
    return result;
}


export {generateRouter,routerListFormat,processArray,filterType}
//菜单转换路由