import request from "./request";
import LoginParams=FasLB.LoginParams
import BaseResponse = FasLB.BaseResponse;
const HttpManager={

    //输出日志
    Console: (log:string) => {console.log("输出日志:"+log)},

    // 用户登录
  login(body: LoginParams): Promise<BaseResponse<Record<string, string>>>{
      return  request({
             url:"/admin/login",
             data:body,
             method:"post"
         })
    },

 async getMenu():Promise<BaseResponse<any>>{
        return  request({
            url:"/user/getAllMenu",
            method:"get"
        })
    }

}

export {HttpManager}