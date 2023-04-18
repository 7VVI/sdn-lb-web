<template>
  <div class="context">
    <div class="login_container">
      <div class="app_name">
        <span class="project_name">{{ defaultSettings.APP_NAME }}</span>
      </div>
      <div class="login_form">
        <div class="login_from_context">
          <a-form
            id="formLogin"
            class="user-layout-login"
            :model="formState"
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="账号"
              name="username"
              :rules="[{ required: true, message: '请输入账号!' }]"
            >
              <a-input placeholder="账号" v-model:value="formState.username" />
            </a-form-item>

            <a-form-item
              label="密码"
              name="password"
              :rules="[{ required: true, message: '请输入密码!' }]"
            >
              <a-input-password
                placeholder="密码"
                v-model:value="formState.password"
              />
            </a-form-item>
            <a-form-item has-feedback label="验证码" name="verifyCode">
              <div class="verify_code_context">
              <a-input
                class="verifyCode"
                v-model:value="formState.verifyCode"
                type="verifyCode"
                autocomplete="off"
              />
              <a-image
                  style="margin-left: 20px;height:calc(100vh - 720px);"
                  :preview="false"
              :width="180"
                class="verifyImg"
                :src="imageUrl"
                fallback="data:image/png;base64,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"
              />
            </div>
            </a-form-item>
            <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit">登录</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import {  reactive ,onMounted,ref} from "vue";
import { useRouter } from "vue-router";
import {defaultSettings} from "@/constants";
import {HttpManager} from "@/api";
import {menuStore} from "@/stores/menuStore";
const route = useRouter();
const store=menuStore();

interface FormState {
  username: string;
  password: string;
  remember: boolean;
  verifyCode: string;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
  verifyCode: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
  route.push({ path: "/home/main", replace: true });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

let imageUrl=ref();
let verifyCodeUuid=ref();

onMounted(async ()=>{
  //获取验证码
  let verifyCodeUrl:API.BaseResponse<any> =await HttpManager.getVerifyCoe();
  imageUrl.value=verifyCodeUrl.data.imgBase64;
  verifyCodeUuid.value=verifyCodeUrl.data.uuid;
  //获取菜单
  await store.getMenu()
})
</script>
  
<style lang="css" scoped>
body {
  margin: 0;
  padding: 0;
}

.context {
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  /*background-image: url(@/assets/background/b3.jpg);*/
}

.login_container {
  position: relative;
  left: 10%;
  width: 30%;
  background-color: rgba(244, 245, 247, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.app_name {
  width: 100%;
  display: flex;
  flex: 1.2;
  justify-content: center;
}

.project_name {
  position: relative;
  top: 20%;
  font-weight: bold;
  font-size: xxx-large;
  color: #369abe;
}

.login_form {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  justify-content: center;
}

.login_from_context {
  width: 100%;
  padding-right: 50px;
  display: inline-block;
}

#formLogin {
  width: 90%;
}

.verifyCode {
  width: 50%;
  height:calc(100vh - 720px)
}

.verify_code_context{
  display: flex;
  justify-content: center;
  align-content: center;
}

.verifyImg{
  /*margin-left: 20px;*/
  /*height:calc(100vh - 720px);*/
}
</style>
    