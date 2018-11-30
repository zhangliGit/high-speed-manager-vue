import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
const ticketList = (resolve) => { require(['../views/ticket/ticketList.vue'], resolve) }
const ticketDetail = (resolve) => { require(['../views/ticket/ticketDetail.vue'], resolve) }
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ticketList',
      name: 'ticketList',
      component: ticketList
    },
    {
      path: '/ticketDetail',
      name: 'ticketDetail',
      component: ticketDetail
    }
  ]
})
