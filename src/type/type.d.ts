declare namespace API {
  /**
   * 通用返回类
   */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  };

  /**
   * 登录参数
   */
  interface LoginParams {
    userAccount: string;
    password: string;
  }

  /**
   *  登录返回数据类型
   */
  type LoginResult = {
    token?: string;
    tokenHead?: string;
    ip?: string;
  };

  type device={
    deviceName:String,
    deviceNum:number,
    deviceImgSrc:any
  }


  /**
   * 菜单类型
   */
  interface Menu {
    //菜单唯一id
    menuId:number,
    //菜单顺序
    menuOrder:number,
    //子菜单数目
    subCount:number,
    //菜单类型 0无子菜单  1有子菜单
    type:number,
    //菜单标题
    title:string,
    //上级菜单ID
    pid:number,
    //路由
    path:string,
    //组件
    component:string,
    //组件名称
    name:string,
    // 菜单图标
    icon?: string;
    // 图标颜色
    iconColor?: string;
    //是否隐藏
    hidden:boolean,
    //创建者
    createBy?:string,
    //更新者
    updateBy?:string,
    //创建时间
    createTime?:string,
    //更新时间
    updateTime?:string,
    //子菜单
    children?:Menu[]
  }

  interface Router{
    path:string,
    name:string,
    component:any,
    meta?:any,
    children?:Router[]
  }

}
