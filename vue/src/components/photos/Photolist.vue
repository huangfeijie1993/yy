<template>
  <div class="search">
    <van-tabs @click="image">
      <van-tab
        v-for="index in catelist"
        :key="index.id"
        :title="index.title"
      >
        <router-link :to="'/home/photolist/photoinfo/' + img.id" v-for="img in imageslist" :key="img.id">
          <img
          
          v-lazy="img.img_url"
          
        >
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
      catelist:[],
      imageslist:[]
  }),
  created(){
    this.getimgcategory()
    this.image(0)
  },
methods: {
    async getimgcategory(){
      const {data:{status,message}} = await this.$http.get('api/getimgcategory')
      console.log(message)
      if(status === 0){
         message.unshift({id:0,title:'全部'})
         this.catelist = message
      }else {
        Toast('请求新闻列表数据失败')
      }
    },
     async image(index){
      const {data:{status,message}} = await this.$http.get('api/getimages/'+index)
         this.imageslist = message
     
      }
    }
}
</script>

<style  scoped>
</style>