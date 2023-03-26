import request from "./request";
import LoginParams=API.LoginParams
import BaseResponse = API.BaseResponse;
const HttpManager={

    // 用户登录
  login(body: LoginParams): Promise<BaseResponse<Record<string, string>>>{
      return  request({
             url:"/admin/login",
             data:body,
             method:"post"
         })
    },

    getMenu():Promise<BaseResponse<any>>{
        return  request({
            url:"/user/getAllMenu",
            method:"get"
        })
    }

}

export {HttpManager}