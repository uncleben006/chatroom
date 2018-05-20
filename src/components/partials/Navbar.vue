<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="mobile-nav" >
      <div class="navbar-nav">
        <li class="nav-item" data-url="/">
          <router-link class="nav-link" :to="{ path: '/' }">聊天室</router-link>
        </li>
        <li class="nav-item" data-url="/board-game">
          <router-link class="nav-link" :to="{ path: '/board-game' }">桌遊店家</router-link>
        </li>   
      </div>
    </div>
  </nav>
  
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    var vm = this;
    // 偵測 store 跟 chatroom id 是否存在
    // console.log($('#store')[0])
    // console.log($('#chatroom')[0])

    if($('#chatroom')[0] != undefined){
      $('[data-url="/"]').toggleClass('active')
    }
    else if($('#store')[0] != undefined){
      $('[data-url="/board-game"]').toggleClass('active')
    }
    // 這樣換按鍵才能更換 navbar class
    $('.nav-item').on('click',function () {
      $('.nav-item').removeClass('active')
      $(this).toggleClass('active')
    });    
  }
};
</script>

