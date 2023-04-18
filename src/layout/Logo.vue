<!--<template>-->
<!--  <div class="layout-logo" v-if="!collapsed">-->
<!--    <router-link to="/home/main">-->
<!--      <img alt="Fas LB" :src="defaultSettings.LOGO"/>-->
<!--      <span>{{ defaultSettings.APP_NAME }}</span>-->
<!--    </router-link>-->
<!--  </div>-->
<!--  <div class="layout-logo-collapsed" v-else>-->
<!--    <router-link to="/home/main">-->
<!--      <img alt="Fas LB" :src="defaultSettings.LOGO"/>-->
<!--    </router-link>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {defaultSettings} from "@/constants";-->
<!--import {toRefs} from "vue";-->

<!--const isCollapsed = defineProps({-->
<!--  collapsed: {-->
<!--    type: Boolean,-->
<!--    default: () => {-->
<!--      return false;-->
<!--    }-->
<!--  }-->
<!--})-->

<!--const {collapsed}=toRefs(isCollapsed)-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--.layout-logo {-->
<!--  height: 48px;-->
<!--  line-height: 48px;-->
<!--  text-align: center;-->

<!--span {-->
<!--  color: #fff;-->
<!--  font-size: 18px;-->
<!--  font-weight: bold;-->
<!--  display: inline-block;-->
<!--  padding-left: 8px;-->
<!--  vertical-align: middle;-->
<!--}-->

<!--img {-->
<!--  height: 30px;-->
<!--  vertical-align: middle;-->
<!--}-->
<!--}-->

<!--.layout-logo-collapsed {-->
<!--  text-align: center;-->
<!--  line-height: 48px;-->

<!--  img {-->
<!--    height: 30px;-->
<!--  }-->
<!--}-->
<!--</style>-->