<template>
  <section class="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
    <div class="lg:w-1/2">
      <h1 class="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#343D33] capitalize md:text-6xl ">上海申工液压有限公司</h1>

      <p class="max-w-lg mt-4 text-gray-500">上海申工液压有限公司是一家集销售、配件供应、技术支持、售后服务于一体，能够为客户提供高效物流装卸搬运设备的专业叉车设备服务提供商。</p>

      <div class="mt-6 sm:flex sm:items-center">
        <a href="#" class="bg-[#475F45] hover:bg-[#475F45]/80 hover:text-[#ffffff] duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white ">
          去购买
        </a>

        <a href="#productList" class="border-2 text-sm duration-300 transition-colors hover:bg-[#475F45] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#475F45] sm:mx-4 border-[#475F45] px-6 block text-center py-3 uppercase">
          更多产品
        </a>
      </div>
    </div>

    <div class="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#475F45]/40">
      <img class="object-cover w-full h-full rounded-t-full " :src="state.bannerSrc" alt="main page" />
    </div>
  </section>

  <section class="bg-[#142580] mt-12">
    <div class="container flex flex-col px-6 py-16 mx-auto mt-12">
      <div class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
        <img class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96" src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="">

        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3 class="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl">
            新能源电动叉车
          </h3>

          <p class="mt-4 text-gray-200 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi fugiat dicta impedit sed quisquam quas veritatis consectetur neque saepe, autem facilis dolore officiis minima explicabo perferendis ab porro magnam!
          </p>

          <a class="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-[#ffffff] hover:text-[#142580] duration-300 transition-colors" href="#">
            跳转详情
          </a>
        </div>
      </div>

      <img class="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12" src="https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="">
    </div>
  </section>

  <section class="container px-6 py-12 mx-auto lg:py-16" id="productList">
    <h3 class="font-serif text-3xl text-[#343D33] capitalize md:text-4xl lg:text-5xl">
      产品列表
    </h3>

    <div class="mt-8 xl:-mx-6 xl:flex">
      <div class="xl:w-1/2 xl:mx-6">
        <img class="object-cover w-full h-96" src="https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">

        <h2 class="mt-6 font-serif text-3xl font-medium text-gray-700">无腿电动叉车</h2>

        <p class="mt-2 text-gray-500">上海电动叉车无腿短轴前移堆高车2吨自动液压升降1吨小型可看货...</p>

        <p class="mt-4 italic text-gray-600">December 23, 2021</p>
      </div>

      <div class="mt-8 space-y-8 xl:w-1/2 xl:mx-6 xl:mt-0">
        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">全电动堆高车</h2>

            <p class="mt-2 text-gray-500">中力全电动堆高车升降叉车液压装卸车堆高机升高车小型1吨铲车...</p>

            <p class="mt-4 italic text-gray-600">December 16, 2021</p>
          </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">越野叉车</h2>

            <p class="mt-2 text-gray-500">越野叉车四驱多功能液压搬运一体机3吨4吨6吨升降车起重装卸叉车...</p>

            <p class="mt-4 italic text-gray-600">November 11, 2021</p>
          </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1638790491374-a2affccd8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">手动叉车</h2>

            <p class="mt-2 text-gray-500">越野叉车四驱多功能液压搬运一体机3吨4吨6吨升降车起重装卸叉车...</p>

            <p class="mt-4 italic text-gray-600">November 3, 2021</p>
          </div>
        </div>

        <a class="inline-flex px-6 py-3 mt-6 text-[#000000] border-2 border-[#000000] hover:bg-[#000000] hover:text-[#ffffff] duration-300 transition-colors" href="#">
          更多产品
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerSrc from "@/assets/imgs/banner.jpg";
import {reactive} from "vue";

const state = reactive({
  bannerSrc
})
</script>