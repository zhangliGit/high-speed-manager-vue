<template>
  <div class="co-f1 co-flex co-ver co-cl-1 add-rider">
    <header-com isBack :title="title"></header-com>
    <ScrollList>
      <div>
        <div class="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
          <div>姓名</div>
          <div class = "co-f1">
            <co-input v-model="riderForm.name" placeholder = "请输入姓名"></co-input>
          </div>
        </div>
        <div class="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
          <div>证件类型</div>
          <div class = "co-f1 co-tx-r co-cl-3" @click="selectShow = true">
            {{riderForm.cardType}}
          </div>
          <div class="co-mg-l04">
            <i class="icon iconfont icon-jiantou"></i>
          </div>
        </div>
        <div class="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
          <div>证件号码</div>
          <div class = "co-f1">
            <co-input v-model="riderForm.cardNo" placeholder = "请输入证件号码"></co-input>
          </div>
        </div>
      </div>
      <div @click="addRider" class="co-mg-a08 co-bg-6 co-pd-a06 co-br-a0 co-tx-c co-cl-0">添加</div>
      <div v-transfer-dom>
        <popup-picker :show='selectShow' v-model="selectValue"  @on-hide="selectShow = false" :data="selectList" @on-change="onChange"></popup-picker>
      </div>
    </ScrollList>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import coInput from '@c/Input'
import { PopupPicker } from 'vux'
import { mapMutations } from 'vuex'
import validateForm from '@a/js/validate-form'
export default {
  name: 'addRider',
  components: {
		HeaderCom,
    ScrollList,
    coInput,
    PopupPicker
  },
  data () {
    return {
      yzForm: {
        name: '请输入姓名',
        cardType: '请选择证件类型',
        cardNo: '请输入证件号码'
      },
      title: '添加乘车人',
      selectShow: false,
      selectList: [['身份证', '护照', '港澳台通行证']],
      selectValue: ['身份证'],
      riderForm: {
        name: '',
        cardType: '请选择',
        cardNo: ''
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations('PERSON', [
      'addRiderList'
    ]),
    onChange (val) {
      this.riderForm.cardType = val[0];
    },
    addRider () {
      validateForm(this.yzForm, this.riderForm, () => {
        this.addRiderList(this.riderForm);
        this.$loading.toast('新增成功', 1);
        setTimeout(() => {
          this.$router.goBack();
        }, 1200) 
      })
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang = "less">
  .add-rider {
  }
</style>
