import Vue from 'vue'
import Router from 'vue-router'
import FireChatroom from '@/components/FireChatroom'
import boardGame from '@/components/boardGame'



Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FireChatroom',
      component: FireChatroom
    },
    {
      path: '/board-game',
      name: 'boardGame',
      component: boardGame
    }
  ]
})
