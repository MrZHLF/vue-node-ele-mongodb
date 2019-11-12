<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-05-19
      </div>
    </div>
    <div v-html="model.body" class="px-2 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-felx ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link 
        class="py-1 fs-lg"
          tag="div" 
          v-for="item in model.related" 
          :key="item.key"
          :to="`/articles/${item._id}`"
        >
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    id:{required:true}
  },
  data() {
    return {
      model:null
    }
  },
  watch: {
    id:'fetch',
    
    // id(){  //第二种写法
    //   this.fetch()
    // }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.fetch()
  }
}
</script>
<style lang="scss">
.page-article{
  .icon-Back{
    font-size: 1.6923rem;
  }
  .body{
    p{
      img{
        width: 100% !important;
        height: auto;
      }
    }
  }
}
</style>