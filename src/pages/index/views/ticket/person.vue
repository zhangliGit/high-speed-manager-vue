<template>
  <scroll-list ref="scroll">
    <div class="person">
      <div class="co-pd-a08 co-bd-b" @click="goDetail">
        我的应用列表
      </div>
      <div class="co-pd-a08 co-bd-b co-flex co-ac" @click="goDetail">
          我的应用列表
      </div>
    </div>
  </scroll-list>
</template>

<script>
import ScrollList from '@c/ScrollList'
export default {
  name: 'Person',
  components: {
		ScrollList
  },
  data () {
    return {
      title: '首页',
      current: 0,
      footer: [
        {
          icon: "icon-huoche",
          title: '车票预定'
        },
        {
          icon: "icon-lishihangcheng",
          title: '我的行程'
        },
        {
          icon: "icon-lvxingxiang",
          title: '旅行服务'
        },
        {
          icon: "icon-geren",
          title: '个人中心'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goDetail () {
      this.$router.push({name: 'detail'})
    }
  },
  
}
</script>

<style scoped lang = "less">
  .div-img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    background: red;
  }
</style>
