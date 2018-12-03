<template>
  <div class="co-f1 co-flex co-ver co-cl-1 rider">
    <header-com isBack :title="title"></header-com>
    <ScrollList>
      <div>
        <div style = "height: 2rem; background: #4889db">
        </div>
        <div class="co-mg-lr05 co-bg-0 co-br-a0" style="margin-top: -1.6rem">
          <div @click="addRider" class="co-flex co-ac co-jc co-pd-a08 co-bd-b" style = "color: #4889db">
            <i class="icon iconfont icon-tianjia co-fs-3 co-mg-r04"></i> 新增乘车人
          </div>
          <swipeout>
            <swipeout-item  v-for = "(item, index) in riderList" :key = "index" transition-mode="follow">
              <div slot="right-menu">
                <swipeout-button @click.native="deleteRider(index)" type="warn">删除</swipeout-button>
              </div>
              <div slot="content" class="demo-content vux-1px-t">
                <div class="co-flex co-ac co-bd-b co-pd-a06">
                  <div class="co-f1">
                    <div>{{item.name}}</div>
                    <div class="co-cl-2 co-fs-01 co-mg-t04">{{item.cardType}} {{item.cardNo}}</div>
                  </div>
                  <div>
                    {{ item.status ? '通过' : '未通过'}}
                  </div>
                </div>
              </div>
            </swipeout-item>
          </swipeout>
        </div>
      </div>
    </ScrollList>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import { mapState, mapActions, mapMutations } from 'vuex' 
export default {
  name: 'rider',
  components: {
		HeaderCom,
    ScrollList,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.path == '/') {
        vm.getRiderList();
      }
    })
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
      'getRiderList',
    ]),
    ...mapMutations('PERSON', [
      'delRider'
    ]),
    addRider () {
      this.$router.push('/addRider');
    },
    deleteRider(index) {
      let _self = this;
      this.$loading.confirm({
        content: '是否删除?',
        confirm () {
          _self.delRider(index);
        }
      })
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang = "less">
  .rider {
  }
</style>
