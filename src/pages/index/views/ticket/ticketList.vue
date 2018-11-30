<template>
  <div class="co-f1 co-flex co-ver co-cl-1 ticket-list">
    <header-com isBack :title="title"></header-com>
    <tab-menu @tab-current = "tabCurrent" :tab-menu = "tabMenu"></tab-menu>
    <ScrollList>
      <div>
        <div class = "co-bg-0 co-pd-a04 co-mg-b02" v-for = "(item, index) in ticketList"  :key = "index" @click="goDetail(item.id)">
          <div class = "co-flex co-pd-tb04 co-ac">
            <div class = "co-f1 co-fs-2 co-cl-7">{{ item.sTime.substring(0, 5) }}</div>
            <div class = "co-f1 co-tx-c co-cl-1 co-fs-01">-- {{ item.needHour }}时{{ item.needMin }}分 --</div>
            <div class = "co-f1 co-fs-2 co-tx-r co-cl-7">{{ item.eTime.substring(0, 5) }}</div>
            <div class="slideRit">￥{{ item.money }}</div>
          </div>
          <div class = "co-flex co-pd-tb04 co-cl-2 co-fs-01">
            <div class = "co-f1">{{ item.sCity }}</div>
            <div class = "co-f1 co-tx-r">{{ item.eCity }}</div>
            <div class="slideRit">{{ item.level }}</div>
          </div>
          <div class = "co-flex co-pd-tb04 co-jsb">
            <div>{{ item.gCode }}</div>
            <div class="slideRit">可抢票</div>
          </div>
        </div>
      </div>
    </ScrollList>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import TabMenu from '@c/TabMenu'
import { mapState, mapActions, mapMutations } from 'vuex' 
export default {
  name: 'ticketList',
  components: {
		HeaderCom,
    ScrollList,
    TabMenu
  },
  data () {
    return {
      title: '火车票',
      tabMenu: [
        {
          id: 0,
          name: '火车票',
          tip: 0
        },
        {
          id: 1,
          name: '飞机票',
          tip: 0
        },
      ]
    }
  },
  computed: {
    ...mapState('TICKET', [
      'ticketList'
    ])
  },
  methods: {
    ...mapActions('TICKET', [
      'getTicketList'
    ]),
    tabCurrent (index) {
    },
    goDetail (id) {
      this.$router.push(`/ticketDetail`);
      this.$router.push({
        path: '/ticketDetail',
        query: {
          id: id
        }
      })
    }
  },
  mounted() {
    this.getTicketList();
  },
}
</script>

<style scoped lang = "less">
  .ticket-list {
    /deep/ .vux-tab .vux-tab-item.vux-tab-selected {
      color: #4889db !important;
    }
    /deep/ .vux-tab-ink-bar{
      background-color:#4889db !important
    }
    .slideRit {
      width: 5rem;
      text-align: right
    }
  }
</style>
