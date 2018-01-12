<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded sticky-top">
    <a class="navbar-brand" href="#">Navbar
      <button class="navbar-toggler" type="button" @click=" navValue = navValue ? false : true ">
        <span class="navbar-toggler-icon"></span>
      </button>
    </a>
    <!-- <a class="navbar-brand" href="/index/">Navbar
      <button class="navbar-toggler" type="button" @click=" navValue = navValue ? false : true ">
        <span class="navbar-toggler-icon"></span>
      </button>
    </a>    -->
  
    <div class="navbar-collapse" :class="{ open : navValue }" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" @click="navValue = false">
          <router-link class="nav-link" :to="{ path: '/index' }" >入口頁面</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/static' }">樣板頁面</router-link>
        </li> -->
        <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/chatroom' }">disconnect聊天室</router-link>
        </li> -->
        <li class="nav-item" @click="navValue = false">
          <router-link class="nav-link" :to="{ path: '/firechatroom' }" >聊天室</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/board-game' }" @click="navValue = false">桌遊店家</router-link>
        </li> -->
      </ul>
    </div>
  </nav>  
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      data: '',
      navValue: false,
    }
  },
  mounted() {
    var vm = this
    setInterval(console.log(vm.navValue),1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * {
  transition: 1s
} */
.navbar-toggler{
  float: right;
}
.navbar-collapse.open ul {
  /* margin-top: 0px; */
}
.navbar-collapse.open ul li {
  margin-top: 0px;
  height: 40px;
}
@media (max-width: 992px) {
  .navbar-collapse ul {
    /* margin-top: 0px; */
    overflow: hidden; 
    -moz-transition: margin-top 1s;
    -o-transition: margin-top 1s;
    -webkit-transition: margin-top 1s;
    transition: margin-top 1s;   
  }
  .navbar-collapse ul li {
    margin-top: -40px;
    height: 0px;
    vertical-align: top;
    overflow: hidden;
    cursor: pointer;    
    -moz-transition: margin-top 0.5s, height 0.5s;
    -o-transition: margin-top 0.5s, height 0.5s;
    -webkit-transition: margin-top 0.5s, height 0.5s;
    transition: margin-top 0.5s, height 0.5s;
  }
  .navbar-brand {
    font-size: 2rem
  }
  .navbar-toggler {
    padding: 0.5rem 1rem
  }
  .nav-link {
    font-size: 1.5rem
  }
  .navbar-collapse.open ul li {
    margin-top: 0px;
    height: 50px;
  }
}



/* div.dropdown.closed ul {
  margin-top: 0px;
}
div.dropdown.closed ul li {
  margin-top: -40px;
  height: 0px;
} */
</style>
