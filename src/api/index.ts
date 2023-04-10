import request from "./request";
import LoginParams = API.LoginParams
import BaseResponse = API.BaseResponse;

const HttpManager = {

    // 用户登录
    login(body: LoginParams): Promise<BaseResponse<Record<string, string>>> {
        return request({
            url: "/admin/login",
            data: body,
            method: "post"
        })
    },

    /**
     * 获取菜单信息
     */
    getMenu(): Promise<BaseResponse<any>> {
        return request({
            url: "/user/getAllMenu",
            method: "get"
        })
    },

    getVerifyCoe(): Promise<BaseResponse<any>>{
        return request({
            url: "/user/verifyCode",
            method: "get"
        })
    },

    getFileContent(){
        return request({
            url:"/file",
            responseType: 'blob' // 指定响应类型为二进制数据
        })
    }

}

export {HttpManager}