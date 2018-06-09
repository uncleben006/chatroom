import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FireChatroom from '@/components/FireChatroom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FireChatroom',
      component: FireChatroom
    }
  ]
})
