<template>
  <div class="co-f1 co-flex co-ver co-cl-1 index-cls">
    <header-com v-if = "current !== 3" :title="titleList[current]"></header-com>
    <!--pullDownRefresh pullUpLoad 这两个属性表示有上拉加载和 下拉刷新-->
    <div class="co-f1 co-flex">
      <keep-alive>
        <component :is = "currentIndex"></component>
      </keep-alive>
    </div>
    <div id="co-footer" class="co-bg-0 co-bd-t co-flex co-ac co-fs-01 co-cl-1" style = "color: rgb(131, 131, 131)">
      <div @click="changeMenu(index)" v-for="(item, index) in footer" :key="index" :class="['co-f1 co-flex co-ver co-ac co-jc',{'current-active menu-scale': current == index}]">
        <i :class="`icon iconfont ${item.icon} co-fs-3`"></i>
        <div class="co-fs-01">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import Ticket from './ticket/ticket.vue'
import Trip from './ticket/Trip.vue'
import Service from './ticket/Service.vue'
import Person from './ticket/person.vue'
export default {
  name: 'index',
  components: {
		HeaderCom,
		ScrollList
  },
  data () {
    return {
      titleList: ['车牌预定', '我的行程', '旅行服务', '个人中心'],
      comList: [Ticket, Trip, Service, Person],
      currentIndex: Ticket,
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
    changeMenu(index) {
      this.current = index;
      this.currentIndex = this.comList[index];
    },
    goDetail () {
      this.$router.push({name: 'detail'})
    }
  },
}
</script>

<style scoped lang = "less">
  .index-cls {
    .current-active {
      color: #4889db
    }
    .menu-scale {
      animation: mymove .3s linear;
    }
    @keyframes mymove
      {
      0% {
        transform: scale(1)
      }
      50% {
        transform: scale(.8)
      }
      100% {
        transform: scale(1)
      }
    }
  }
</style>
