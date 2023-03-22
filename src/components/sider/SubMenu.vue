<template>
  <a-sub-menu :key="menuInfo.menue_id" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined />
        <span>{{ menuInfo.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.menue_id">
      <template v-if="!item.hidden">
        <template v-if="!item.children">
          <a-menu-item :key="item.menue_id">
            <PieChartOutlined />
            <span>
              {{ item.title }}
            </span>
          </a-menu-item>
        </template>
        <template v-else> // 递归调用自身组件
          <sub-menu :menu-info="item" :key="item.menue_id" />
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