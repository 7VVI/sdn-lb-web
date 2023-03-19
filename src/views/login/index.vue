<template>
  <div class="context">
    <div class="login_container">
      <div class="app_name">
        <span class="project_name">{{ APP_NAME }}</span>
      </div>
      <div class="login_form">
        <a-form
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
            :rules="[{ required: true ,message: '请输入账号!' }]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
          <a-form-item has-feedback label="验证码" name="verifyCode">
            <a-input
              v-model:value="formState.verifyCode"
              type="verifyCode"
              autocomplete="off"
            />
          </a-form-item>
          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { APP_NAME } from "@/enum";

const route = useRouter();

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
  route.push({ path: "/home", replace: true });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
  
<style lang="css">
body {
  margin: 0;
  padding: 0;
}

.context {
  display: flex;
  height: 100vh;
  width: 100wh;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(@/assets/background/b3.jpg);
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
}

.login_form {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
}
</style>
    