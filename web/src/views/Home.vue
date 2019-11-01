<template>
  <div class="home">
    <swiper :options="swiperOption">
        <swiper-slide>
          <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg" alt="">
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>  
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card icon="menu1" title="英雄列表" :categories="newCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category.newList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>  
      </template>
     
    </m-list-card>  
    <m-card icon="menu1" title="英雄列表"></m-card>
    <m-card icon="menu1" title="精彩视频"></m-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
      return {
        swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newCats:[
        {
          name:"热门",
          newList:[
            {categoryName:"热门",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"热门",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"热门",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"热门",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"热门",title:"10月30日全服不停机修复公告", date:"06/01"},
          ]
        },
        {
          name:"新闻",
          newList:[
            {categoryName:"新闻",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"新闻",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"新闻",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"新闻",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"新闻",title:"10月30日全服不停机修复公告", date:"06/01"},
          ]
        },
        {
          name:"公告",
          newList:[
            {categoryName:"公告",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"公告",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"公告",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"公告",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"公告",title:"10月30日全服不停机修复公告", date:"06/01"},
          ]
        },
        {
          name:"活动",
          newList:[
            {categoryName:"活动",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"活动",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"活动",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"活动",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"活动",title:"10月30日全服不停机修复公告", date:"06/01"},
          ]
        },
        {
          name:"赛事",
          newList:[
            {categoryName:"赛事",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"赛事",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"赛事",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"赛事",title:"10月30日全服不停机修复公告", date:"06/01"},
            {categoryName:"赛事",title:"10月30日全服不停机修复公告", date:"06/01"},
          ]
        }
      ]
    }
  },
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>