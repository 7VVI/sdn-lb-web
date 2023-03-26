<template>
  <a-sub-menu :key="menuInfo.menuId" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined />
        {{menuInfo.title}}
<!--         <router-link :to="menuInfo.link || menuInfo.path" >{{menuInfo.title}}</router-link>-->
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.menuId">
      <template v-if="!item.hidden">
        <template v-if="!item.children">
          <a-menu-item :key="item.menuId">
            <PieChartOutlined />
            <router-link :to="item.link || item.path" >{{item.title}}</router-link>
          </a-menu-item>
        </template>
        <template v-else> // 递归调用自身组件
          <sub-menu :menu-info="item" :key="item.menuId" />
        </template>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu } from 'ant-design-vue';

import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "SubMenu",
  components: {
    PieChartOutlined,
    MailOutlined,
  },
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style lang="css" scoped></style>