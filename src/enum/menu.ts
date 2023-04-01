// 系统左侧菜单栏
export const menu: API.Menu[] = [
  {
    menuId: 1,
    //菜单顺序
    menuOrder: 1,
    //子菜单数目
    subCount: 0,
    //菜单类型 0无子菜单  1有子菜单
    type: 0,
    //菜单标题
    title: "首页",
    //上级菜单ID
    pid: 0,
    //路由
    path: "/home/main",
    //图标
    icon: "",
    // 图标颜色
    iconColor: "",
    //是否隐藏
    hidden: false,
    //组件
    component: "main.vue",
    name:"main",
    //创建者
    createBy: "zhangyh",
    //更新者
    updateBy: "zhangyh",
    //创建时间
    createTime: "",
    //更新时间
    updateTime: "",
  },
  {
    menuId: 2,
    //菜单顺序
    menuOrder: 2,
    //子菜单数目
    subCount: 1,
    //菜单类型 0无子菜单  1有子菜单
    type: 1,
    //菜单标题
    title: "系统监控",
    //上级菜单ID
    pid: 0,
    //路由
    path: "/ovswitch",
    //图标
    icon: "",
    // 图标颜色
    iconColor: "",
    //是否隐藏
    hidden: false,
    //组件
    component: "ovswitch.vue",
    name:"status",
    //创建者
    createBy: "zhangyh",
    //更新者
    updateBy: "zhangyh",
    //创建时间
    createTime: "",
    //更新时间
    updateTime: "",
  },
  {
    menuId: 3,
    //菜单顺序
    menuOrder: 3,
    //子菜单数目
    subCount: 0,
    //菜单类型 0无子菜单  1有子菜单
    type: 0,
    //菜单标题
    title: "主机",
    //上级菜单ID
    pid: 2,
    //路由
    path: "/host",
    //图标
    icon: "",
    // 图标颜色
    iconColor: "",
    //是否隐藏
    hidden: false,
    //组件
    component: "host.vue",
    name:"host",
    //创建者
    createBy: "zhangyh",
    //更新者
    updateBy: "zhangyh",
    //创建时间
    createTime: "",
    //更新时间
    updateTime: "",
  },
  {
    menuId: 4,
    //菜单顺序
    menuOrder: 4,
    //子菜单数目
    subCount: 0,
    //菜单类型 0无子菜单  1有子菜单
    type: 0,
    //菜单标题
    title: "交换机",
    //上级菜单ID
    pid: 2,
    //路由
    path: "/switch",
    //图标
    icon: "",
    // 图标颜色
    iconColor: "",
    //是否隐藏
    hidden: false,
    //组件
    component: "switch.vue",
    name:"switch",
    //创建者
    createBy: "zhangyh",
    //更新者
    updateBy: "zhangyh",
    //创建时间
    createTime: "",
    //更新时间
    updateTime: "",
  },
];
