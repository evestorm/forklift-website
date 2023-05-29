<template>
  <Info title="联系我们">
    <p class="leading-6 md:leading-8 lg:leading-8 mb-5" v-for="(item, idx) of content" :key="idx">
      {{ item }}
    </p>
  </Info>
</template>
<script setup>
import {ref} from "vue";
import Info from "@/components/info/info.vue";

const content = ref([
  "上海申工液压有限公司",
  "联系人：陈经理",
  "手机：173-2108-2303",
  "地址：上海市闵行区元江路3338号"]);
</script>

<style lang="scss" scoped>
</style>