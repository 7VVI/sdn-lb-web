<template>
  <div class="context">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="state.collapsed" collapsible>
        <div class="logo">{{ APP_NAME }}</div>
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
        >
          <template v-for="item in Menus" :key="item.menue_id">
            <template v-if="!item.children">
              <a-menu-item :key="item.menue_id">
                <template #icon>
                  <PieChartOutlined />
                </template>
                {{ item.title }}
              </a-menu-item>
            </template>
            <template v-else>
              <sub-menu :key="item.menue_id" :menu-info="item" />
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
            style="
            background: #fff;
            padding: 0;
            display: flex;
            align-items: center;
          "
        >
          <div class="header_context">
            <a-button
                type="primary"
                ghost="true"
                style="
                margin-bottom: 10px;
                margin-left: 15px;
                color: rgb(123, 23, 44, 0.6);
                border-color: darkgrey;
              "
                @click="toggleCollapsed"
            >
              <MenuUnfoldOutlined v-if="collapsed" />
              <MenuFoldOutlined v-else />
            </a-button>
            <div class="empty"></div>
            <div class="header_context_right">
              <div class="setting"></div>
              <a-avatar
                  class="avatar"
                  src="https://picgo-liziyuan.oss-cn-hangzhou.aliyuncs.com/img202303191543178.png"
              />
            </div>
          </div>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div
              :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
          >
            Bill is a cat.{{ APP_NAME }}
            <a-spin />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          ©2023 Created by zhangyh
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted,onBeforeMount } from "vue";
import { APP_NAME, menu } from "@/enum";
import Menu=API.Menu;
import {
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import SubMenu from "@/components/sider/SubMenu.vue";



const state = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});

watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    }
);

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

let Menus:any=ref(null);

onBeforeMount(() => {
  Menus=routerListFormat(menu);
});

onMounted(()=>{

})

//递归构建菜单
function routerListFormat(data:Menu[]) {
  let parents = data.filter((p) => p.pid === 0);
  let  children = data.filter((c) => c.pid != 0);

  dataTotree(parents, children);
  //递归函数
  function dataTotree(parents:Menu[], children:Menu[]) {
    parents.map((p) => {
      children.map((c, index) => {
        if (c.pid === p.menue_id) {
          //如果相同，拷贝children一个新的数组c1
          let c1 = Object.assign([], children);
          c1.splice(index, 1); //删除当前元素，获取除当前元素之外的所有子路由元素
          dataTotree([c], c1); //继续递归
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


</script>

<style lang="css">
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
  background-color: beige;
}

#components-layout-demo-side {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.logo {
  height: 32px;
  margin: 16px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(233, 239, 236, 0.5);
}

.site-layout {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.header_context {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}

.empty {
  flex: 1;
}

.header_context_right {
  position: relative;
  right: 1%;
}

.avatar {
  margin-left: 10px;
}

.setting {
  flex: 1;
}
</style>
      