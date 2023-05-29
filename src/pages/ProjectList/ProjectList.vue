<template>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-8">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-bold font-medium title-font mb-2 text-gray-900">产品列表</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <aside-view :data="projectNav" @handle-active="handleActive" />
    <div class="flex flex-wrap -m-4">
      <div
          v-for="item of activeList" :key="item.id"
          class="lg:w-1/4 p-4 w-1/2 card">
        <a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="item.src">
        </a>
        <div class="mt-4">
<!--          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>-->
          <h2 class="text-gray-900 title-font text-lg font-medium">{{ item.name }}</h2>
<!--          <p class="mt-1">$16.00</p>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue';
import AsideView from "@/components/aside/asideView.vue";
const projectNav = reactive([
  {
    id: 1,
    name: '堆高车',
    active: false,
  },
  {
    id: 2,
    name: '搬运车',
    active: false,
  },
  {
    id: 3,
    name: '升降平台',
    active: false,
  },
  {
    id: 4,
    name: '专业配件',
    active: false,
  },
]);
const projectList = reactive({
  1: [
    {
      id: 1,
      name: '站驾式全电动堆高车',
      src: 'http://shddcc.com/static/picture/20200413125349544954.jpg',
    },
    {
      id: 2,
      name: '步行式全电动堆高车',
      src: 'http://shddcc.com/static/picture/20200413125478217821.jpg',
    },
    {
      id: 3,
      name: '半电动堆高车',
      src: 'http://shddcc.com/static/picture/20200413125483868386.jpg',
    },
    {
      id: 4,
      name: '前移式无腿堆高车',
      src: 'http://shddcc.com/static/picture/20200413125611371137.jpg',
    },
    {
      id: 5,
      name: '配重式无腿堆高车',
      src: 'http://shddcc.com/static/picture/20200413125628462846.jpg'
    }
  ],
  2: [
    {
      id: 6,
      name: '全电动搬运车',
      src: 'http://shddcc.com/static/picture/20200413125632003200.jpg',
    },
    {
      id: 7,
      name: '手动搬运车',
      src: 'http://shddcc.com/static/picture/20200427161691309130.jpg',
    },
    {
      id: 8,
      name: '小金刚锂电搬运车',
      src: 'http://shddcc.com/static/picture/20200427162576327632.jpg',
    },
  ],
  3: [
    {
      id: 9,
      name: '移动升降机',
      src: 'http://shddcc.com/static/picture/20200413125632003200.jpg',
    },
  ],
  4: [
    {
      id: 10,
      name: '移动升降机',
      src: 'http://shddcc.com/static/picture/20200413125632003200.jpg',
    },
  ],
});
const activeList = computed(() => {
  const activeNav = projectNav.find(v => v.active);
  return activeNav ? projectList[activeNav.id] : Object.values(projectList).reduce((pre, cur) => {
    return pre.concat(...cur);
  }, []);
});
const handleActive = (id) => {
  projectNav.forEach((item) => {
    if (item.active) {
      item.active = false;
      return;
    }
    item.active = item.id === id;
  });
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
}
</style>