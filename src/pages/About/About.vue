<template>
  <section class="about-us">
    <div class="container flex flex-col px-6 py-16 mx-auto">
      <div class="order-1 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
        <img class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96" src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="">

        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3 class="font-serif text-3xl text-black md:text-black lg:text-white capitalize md:text-4xl lg:text-6xl text-center decoration-2 md:decoration-2 lg:decoration-4">
            关于我们
          </h3>
        </div>
      </div>

      <!--<img class="order-2 object-cover lg:order-1 w-ful h-72 lg:h-96 lg:mt-12" src="https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="">-->
      <div class="order-2 w-ful lg:mt-12">
        <h1 class="my-8 text-center font-serif text-2xl lg:text-4xl font-bold text-gray-700">企业简介</h1>
        <p class="mt-4 text-black-200 indent-8">
          上海申工液压有限公司，主要是做电动叉车研发、生产和销售。公司始终坚持诚信为本、顾客至上的服务宗旨：互惠互利、薄利多销的经营策略。本公司以良好的信誉愿与广大新老客户精诚合作，携手并谋发展、共创伟业。
        </p>
        <p class="mt-4 text-black-200 indent-8">
          公司一直秉承：以真诚的信念，来换取您对我们的信任；以优质的服务，来换取您对我们的满意；以优惠的价格，来换取客户和企业的双赢。在新的时代背景下，我们将不懈努力，以恪尽职守的敬业精神和专业素养，坚持以客户的利益为上，为客户营造良好的合作环境，共同发展，一起创造美好的未来。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-us {
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    height: 100%;
    background-color: #142580;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 55%);
  }
}
</style>