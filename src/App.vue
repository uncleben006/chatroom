<template>
  <div id="app">
    <Navbar></Navbar>  
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
// @import 'bootstrap/'
@import './stylesheets/all';
// @import '~bootstrap/scss/bootstrap';
// @import './stylesheets/all';

</style>
