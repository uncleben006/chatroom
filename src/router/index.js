import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Static from '@/components/Static'
import Chatroom from '@/components/Chatroom'
import FireChatroom from '@/components/FireChatroom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/static',
      name: 'Static',
      component: Static
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom
    },
    {
      path: '/firechatroom',
      name: 'FireChatroom',
      component: FireChatroom
    },
  ]
})
