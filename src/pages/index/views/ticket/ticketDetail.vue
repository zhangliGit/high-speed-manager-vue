<template>
  <div class="co-f1 co-flex co-ver co-cl-1 ticket-detail">
    <header-com isBack :title="title"></header-com>
    <ScrollList>
      <div>
        <div class = "co-flex co-ac co-pd-a08 co-cl-0" style = "background: rgb(72, 137, 219)">
          <div class = "co-f1">
            <div class = "co-fs-2">{{ ticketDetail.sCity }}</div>
            <div class = "co-pd-tb08">{{ (ticketDetail.sTime || '').substring(0, 5) }}</div>
            <div>高铁 {{ ticketDetail.speed }}km/h</div>
          </div>
          <div class = "co-f1 co-tx-c co-fs-01">
            <div>G410</div>
            <div class = "co-pd-t04">{{ ticketDetail.number }}站</div>
            <div class = "co-pd-t04">{{ ticketDetail.needHour }}小时{{ ticketDetail.needMin }}分</div>
            <div class = "co-pd-t04">准点率 {{ ticketDetail.percent }}</div>
          </div>
          <div class = "co-f1 co-tx-r">
            <div class = "co-fs-2">{{ ticketDetail.eCity }}</div>
            <div class = "co-pd-tb08">{{ (ticketDetail.eTime || '').substring(0, 5) }}</div>
            <div>{{ ticketDetail.type }}</div>
          </div>
        </div>
        <div v-for = "(item, index) in ticketDetail.ticket" :key = "index">
          <div  class = "co-flex co-ac co-pd-a06 co-bg-0 co-bd-b">
            <div style = "width: 6rem">{{ item.name }}</div>
            <div class = "co-f1">￥{{ item.money }}</div>
            <div class = "co-f1">{{ item.number }}</div>
            <div @click = "currentIndex = currentIndex === index ? -1: index" :class="['co-cl-0 co-fs-01 co-br-a0 co-bg-6', {'active-bg co-cl-7': index === currentIndex}]"  style = "padding: .3rem .6rem">
                预定
            </div>
          </div>
          <div class = "slide-in co-cl-2" v-show=" currentIndex === index">
            <div class = "co-flex co-pd-lr06 co-jsb co-ac co-bd-b" style = "height: 2.5rem">
              <div class = "co-fs-01">
                <div class = "co-cl-7">12306预定</div>
                <div class = "co-mg-t04">实时出票，在线退票，改签</div>
              </div>
              <div class = "co-bg-6 co-cl-0 co-fs-01 co-br-a0" style = "padding: .3rem .6rem">
                  预定
              </div>
            </div>
            <div class = "co-flex co-pd-lr06 co-jsb co-ac co-bd-b" style =  "height: 2.5rem">
              <div class = "co-fs-01">
                <div class = "co-cl-7">管家代购</div>
                <div class = "co-mg-t04">若多次服务异常或无账号，可尝试代购</div>
              </div>
              <div class = "co-bg-6 co-cl-0 co-fs-01 co-br-a0" style = "padding: .3rem .6rem">
                  预定
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollList>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import { mapState, mapActions, mapMutations } from 'vuex' 
export default {
  name: 'ticketDetail',
  components: {
		HeaderCom,
    ScrollList
  },
  data () {
    return {
      title: '火车票详情',
      currentIndex: ''
    }
  },
  computed: {
    ...mapState('TICKET', [
      'ticketDetail'
    ])
  },
  methods: {
    ...mapActions('TICKET', [
      'getTicketDetail'
    ]),
  },
  mounted() {
    console.log(this.$route);
    this.getTicketDetail(this.$route.params.id);
  },
}
</script>

<style scoped lang = "less">
  .ticket-detail {
    .active-bg {
      background: #ccc
    }
  }
</style>
