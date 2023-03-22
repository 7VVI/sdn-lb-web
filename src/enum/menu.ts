// 系统左侧菜单栏
export const menu: API.Menu[] = [
  {
    menue_id: 1,
    //菜单顺序
    menu_order: 1,
    //子菜单数目
    sub_count: 0,
    //菜单类型 0无子菜单  1有子菜单
    type: 0,
    //菜单标题
    title: "首页",
    //上级菜单ID
    pid: 0,
    //路由
    path: "/main",
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
    create_by: "zhangyh",
    //更新者
    update_by: "zhangyh",
    //创建时间
    create_time: "",
    //更新时间
    update_time: "",
  },
  {
    menue_id: 2,
    //菜单顺序
    menu_order: 2,
    //子菜单数目
    sub_count: 1,
    //菜单类型 0无子菜单  1有子菜单
    type: 1,
    //菜单标题
    title: "系统监控",
    //上级菜单ID
    pid: 0,
    //路由
    path: "/status",
    //图标
    icon: "",
    // 图标颜色
    iconColor: "",
    //是否隐藏
    hidden: false,
    //组件
    component: "status.vue",
    name:"status",
    //创建者
    create_by: "zhangyh",
    //更新者
    update_by: "zhangyh",
    //创建时间
    create_time: "",
    //更新时间
    update_time: "",
  },
  {
    menue_id: 3,
    //菜单顺序
    menu_order: 3,
    //子菜单数目
    sub_count: 0,
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
    create_by: "zhangyh",
    //更新者
    update_by: "zhangyh",
    //创建时间
    create_time: "",
    //更新时间
    update_time: "",
  },
  {
    menue_id: 4,
    //菜单顺序
    menu_order: 4,
    //子菜单数目
    sub_count: 0,
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
    create_by: "zhangyh",
    //更新者
    update_by: "zhangyh",
    //创建时间
    create_time: "",
    //更新时间
    update_time: "",
  },
];
