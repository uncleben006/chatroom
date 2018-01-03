<template>
  <div class="chatroom mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
          <div class="card card-outline-primary">
            <div class="card-block">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="輸入對話內容" @keyup.enter="submitMessage" v-model="tempMessage" :disabled="!username.length">
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button" :disabled="!username.length" @click="submitMessage()">送出</button>
                </span>
              </div>
              <ul class="list-unstyled row">
                <li class="media mt-3 col-9" v-for="(item, key) in messages" :class="{ 'text-success offset-3': item.username == username }">
                  <img class="d-flex mr-3" width="50" height="50" src="http://lorempixel.com/50/50/sports" alt="" v-if="item.username != username">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">{{ item.username }}</h5>
                    <p>{{ item.message }}</p>
                  </div>
                  <img class="d-flex ml-3" width="50" height="50" src="http://lorempixel.com/50/50/sports" alt="" v-if="item.username == username">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              你的資料
            </div>
            <div class="card-block">
              <div class="form-group">
                <label for="username">姓名</label>
                <input type="text" class="form-control" v-model="tempUsername" id="username" placeholder="輸入姓名">
                <small class="form-text text-muted">請輸入個人姓名開始使用聊天室</small>
              </div>
              <button type="button" class="btn btn-primary" @click="updateUsername()">送出</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
// connect to firebase's chatroom
var chatroomRef = firebase.database().ref('/chatroom/')

export default {  
  name: 'hello',
  data() {
    return {
      tempUsername: '',
      tempMessage: '',
      username: '',
      messagesLength: '',
      messages: [
        // {
        //   username: 'Casper2',
        //   message: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
        // },
        // {
        //   username: 'Pon Pon',
        //   message: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
        // }
      ]
    }
  },  
  computed: {
    timestamp: function () {
      return Math.floor(Date.now() / 1000)
    },
  },
  methods: {
    updateUsername () {
      let vm = this;
      vm.username = vm.tempUsername;
      console.log(vm.username, vm.tempUsername)
    },
    submitMessage () {
      let vm = this;
      // vm.messages.unshift({
      //   username: vm.username,
      //   message: vm.tempMessage
      // });      

      // update data to firebase
      chatroomRef.child(this.timestamp).set({
        timestamp: vm.timestamp,
        username: vm.username,
        message: vm.tempMessage
      });
    },
    filterTimeStamp(value) {
      return value == vm.timestamp;
    },
    ObjectLength( object ) {
      var length = 0;
      for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
          ++length;
        }
      }
      return length;
    },
  },
  mounted() {
    let vm = this    
    let messages = []
    chatroomRef.on('value', function(snapshot) {
      snapshot.forEach(function(chatVal) {
        // console.log(chatVal.val())
        messages.unshift(chatVal.val())
      });
      // console.log('on-messagesLength')
      // console.log(vm.messagesLength)
      vm.messages = messages.slice(0,vm.ObjectLength(snapshot.val()))
    });  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
