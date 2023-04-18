<template>
  <div class="logo">
    <img :src="defaultSettings.LOGO" alt="" />
    <h2 v-show="!collapsed" class="title">{{defaultSettings.APP_NAME}}</h2>
  </div>
</template>

<script setup>
import {defaultSettings} from "@/constants";
defineProps({
  collapsed: {
    type: Boolean,
  },
});
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  height: 64px;
  padding-left: 24px;
  line-height: 64px;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
  @apply mb-0 text-xl;
    color: @primary-color;
  }
}
</style>
