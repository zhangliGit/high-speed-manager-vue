<template>
  <div class="co-f1 co-flex co-ver co-cl-1 rider">
    <header-com isBack :title="title"></header-com>
    <ScrollList>
      <div>
      </div>
    </ScrollList>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import { mapState, mapActions, mapMutations } from 'vuex' 
export default {
  name: 'rider',
  components: {
		HeaderCom,
    ScrollList
  },
  data () {
    return {
      title: '乘车人'
    }
  },
  computed: {
    ...mapState('PERSON', [
      'riderList'
    ])
  },
  methods: {
    ...mapActions('PERSON', [
      'getTicketList'
    ]),
    tabCurrent (index) {
    },
    goDetail (id) {
      this.$router.push(`/ticketDetail/100`);
    }
  },
  mounted() {
    this.getTicketList();
  },
}
</script>

<style scoped lang = "less">
  .rider {
  }
</style>
