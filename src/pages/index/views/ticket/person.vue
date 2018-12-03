<template>
  <scroll-list ref="scroll">
    <div class="person">
      <div class="co-bg-0">
        <div class = "co-flex co-ac co-pd-a06" style = "padding: 1rem .6rem">
          <div class="personIcon">
            <img :src = "personIcon" style = "width: 3rem; height: 3rem; display: block"  alt = "" />
          </div>
          <div class = "co-f1 co-cl-1 co-mg-l1">
            <div class = "co-fs-1">火火兔</div>
            <div class = "co-fs-01 co-cl-2 co-mg-t04">
              <span>晨曦</span>
              <span>证件尾号9449</span>
            </div>
          </div>
          <div class = "co-tx-c vip">
            <div>白银会员</div>
            <div class = "co-fs-01 co-mg-t02">经验值 8767</div>
          </div>
        </div>
        <div class = "co-flex co-ac co-cl-0 co-mg-lr06 co-br-tl1 co-br-tr1" style = "background: #f1c760; padding: .6rem">
          <div class = "co-f1">
            <div class = "">免费光速抢票5次，优先出票</div>
            <div class = "co-fs-01 co-mg-t04">升级黄金 享5大出行福利</div>
          </div>
          <div class = "co-fs-01">
            升级黄金会员
          </div>
          <div class="co-mg-l04">
            <i class = "icon iconfont icon-jiantou co-fs-01"></i>
          </div>
        </div>
      </div>
      <div class = "co-flex co-ac co-pd-tb08 co-bg-0">
        <div @click="goMenu(item.path)" :key = "index" v-for = "(item, index) in menuList" class = "co-f1 co-flex co-ver co-ac co-jc">
          <div>
            <img :src = "item.icon" style = "width: 32px; height: 32px; display: block"  alt = "" />
          </div>
          <div class = "co-mg-t04 co-cl-1 co-fs-01">{{ item.title }}</div>
        </div>
      </div>
      <div>
        <img :src = "s1" alt = "" style = "width:100%; height: auto; display: block"  />
      </div>
      <div class = "co-bg-0 co-bd-t">
        <div class = "co-flex co-ac co-pd-a05">
          <div>
          <img :src = "ddIcon" style = "width: 18px; height: 18px; display: block"  alt = "" />
          </div>
          <div class = "co-f1 co-cl-1 co-mg-l04 co-flex co-jsb co-ac">
            <div class = "">我的订单</div>
            <div class = "co-cl-2 co-fs-01" style = "marginTop: .1rem">查看全部订单</div>
          </div>
          <div class = "co-mg-l02">
            <i class = "icon iconfont icon-jiantou co-fs-01 co-cl-2"></i>
          </div>
        </div>
        <div class = "co-flex co-pd-tb1">
          <div :key = "index" v-for = "(item, index) in orderList" class = "co-f1 co-flex co-ver co-ac co-jc">
            <div>
            <img :src = "item.icon" style = "width: 26px; height: 26px; display: block"  alt = "" />
            </div>
            <div class = "co-fs-01 co-mg-t04" style = "color: #333333">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class = "co-bd-t">
          <div :key = "index" v-for = "(item, index) in list" class = "co-flex co-ac co-pd-a06  co-jsb">
            <div class = "co-flex co-ac">
              <img :src = "item.icon" style = "width: 20px; height: 20px; display: block"  alt = "" />
              <span class = "co-pd-l04 co-fs-01" style = "color: #333333">
                {{ item.title }}
              </span> 
            </div>
            <div>
              <i class = "icon iconfont icon-jiantou co-fs-01 co-cl-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroll-list>
</template>

<script>
import ScrollList from '@c/ScrollList'
import s1 from '@a//images/s1.png';
import qbIcon from '@a//images/qbIcon.png';
import ccrIcon from '@a//images/ccrIcon.png';
import wddpIcon from '@a//images/wddpIcon.png';
import hyIcon from '@a//images/hyIcon.png';
import qpIcon from '@a//images/qpIcon.png';
import jpIcon from '@a//images/jpIcon.png';
import hlzcIcon from '@a//images/hlzcIcon.png';
import jdIcon from '@a//images/jdIcon.png';
import qcpIcon from '@a//images/qcpIcon.png';
import gtkfIcon from '@a//images/gtkfIcon.png';
import jpkfIcon from '@a//images/jpkfIcon.png';
import wxtzIcon from '@a//images/wxtzIcon.png';
import kfdhIcon from '@a//images/kfdhIcon.png';
import moreIcon from '@a//images/moreIcon.png';
import ddIcon from '@a//images/ddIcon.png';
import personIcon from '@a//images/personIcon.png';
export default {
  name: 'Person',
  components: {
		ScrollList
  },
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      title: '首页',
      ddIcon,
      personIcon,
      s1,
      menuList: [
        {
          title: '钱包',
          icon: qbIcon,
          path: '/riderList'
        },
        {
          title: '乘车人',
          icon: ccrIcon,
          path: '/riderList'
        },
        {
          title: '我的点评',
          icon: wddpIcon,
          path: '/riderList'
        },
        {
          title: '好友',
          icon: hyIcon,
          path: '/riderList'
        }
      ],
      orderList: [
        {
          title: '火车票/抢票',
          icon: qpIcon
        },
        {
          title: '机票',
          icon: jpIcon
        },
        {
          title: '火力专车',
          icon: hlzcIcon
        },
        {
          title: '酒店',
          icon: jdIcon
        },
        {
          title: '汽车票',
          icon: qcpIcon
        }
      ],
      list: [
        {
          title: '高铁客服中心',
          icon: gtkfIcon
        },
        {
          title: '机票客服中心',
          icon: jpkfIcon
        },
        {
          title: '微信通知服务',
          icon: wxtzIcon
        },
        {
          title: '客服电话-反欺诈',
          icon: kfdhIcon
        },
        {
          title: '更多',
          icon: moreIcon
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goMenu (path) {
      this.$router.push({path: path});
    }
  },
}
</script>

<style scoped lang = "less">
  .person {
    .person-icon {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 100%;
      background: #ccc
    }
    .vip {
      border-radius: 20px;
      background: #ACAFB4;
      padding: .3rem .8rem;
      color: #f5f5f5;
      transform: scale(.9);
    }
  }
</style>
