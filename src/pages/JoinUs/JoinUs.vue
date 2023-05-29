<template>
  <Info title="加入我们">
    <p class="leading-6 md:leading-8 lg:leading-8 mb-5" v-for="(item, idx) of content" :key="idx">
      {{ item }}
    </p>
  </Info>
</template>
<script setup>
import {ref} from "vue";
import Info from "@/components/info/info.vue";

const content = ref([
  "如果您没有找到开心的工作，我们是您的选择！",
  "如果您没有赚到钱，我们是您的选择！",
  "如果您没有学到真本领，我们是您的选择！",
  "如果您没有展示才华的地方，我们是您的选择！",
  "为有梦想的人才，提供无限的发展空间。欢迎加入本公司！",
  "联系电话：17321082303 陈经理"]);
</script>

<style lang="scss" scoped>
</style>