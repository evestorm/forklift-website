<template>
  <div class="aside flex justify-end ml-auto my-[30px]">
    <div class="inline-flex border border-[#E1E3E5] shadow-[0px 1px 2px #E1E3E5] divide-[#E1E3E5] divide-x rounded-[5px]">
      <button
          v-for="item of data" :key="item.id"
          class="leading-[16px] text-[13px] font-semibold font-bold py-[15px] px-[25px] rounded-l"
          :class="item.active ? activeClass : inactiveClass"
          @click="handleActive(item.id)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const activeClass = 'bg-[#142580] text-[#FFFFFF]';
const inactiveClass = 'bg-white text-[#0E1823]';
defineProps({
  data: Array,
});
const emit = defineEmits(['handleActive']);

const handleActive = (id) => {
  emit('handleActive', id);
};
</script>