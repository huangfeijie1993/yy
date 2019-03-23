<template>
  <div class="photoinfo">
    <!-- this is 照片描述区域 -->
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | datefmt}}</span>
      <span>点击：{{ photoinfo.click}}次</span>
    </p>
    <hr>
  </div>
</template>

<script>

export default {
  data: () => ({
    id:'',
    photoinfo:[],
    list:[]
  }),
  created(){
    this.getphotoinfo();
  },
  methods:{
    async getphotoinfo(){
      const{data:{status,mesage}}=await this.$http.get(`api/getimageInfo/${this.id}`);
      if(status===0){
        this.photoinfo=message
      }
    },
  }
};
</script>

<style lang="less">
.photoinfo {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>