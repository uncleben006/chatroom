<template>
  <div class="hello mt-3">
    <h1>{{ msg }}</h1>
    <h2>You can view more project through my <a href="https://codepen.io/uncleben006/">Codepen</a> or <a href="https://github.com/uncleben006">Github</a></h2>    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
