<template>
  <div class="chatroom mt-3">
    <div class="container-fluid">
      <div class="row">
<<<<<<< HEAD
        <div class="col-lg-3 card-m-order">
          <div class="card">
            <div v-if=" username==''" class="card-header">你的資料</div>
            <div v-if=" username!=''" class="card-header">你的姓名: {{username}} <button type="button" class="btn btn-primary float-right" @click="username = ''">更改姓名</button></div>
            <div style="overflow: hidden">
              <div class="card-block" :class="{ 'card-closed': username!='' }">
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
        <div class="col-lg-9 mt-lg-0 mt-md-3" style="position: relative">
=======
        <div class="col-lg-3">
          <div class="card">
            <div class="card-header">
              你的資料
            </div>
            <div class="card-block">
              <div class="form-group">
                <label v-if=" username=='' " for="username">姓名</label>
                <label v-if=" username!='' " for="username">你的姓名: {{username}}</label>
                <input type="text" class="form-control" v-model="tempUsername" id="username" placeholder="輸入姓名">
                <small class="form-text text-muted">請輸入個人姓名開始使用聊天室</small>
              </div>
              <button type="button" class="btn btn-primary" @click="updateUsername()">送出</button>
            </div>
          </div>
        </div>
        <div class="col-lg-9 mt-lg-0 mt-md-3">
>>>>>>> f13be4ce5e0c4fcafc202058fe671d62a44ba994
          <div class="card card-outline-primary">
            <div class="card-block">              
              <div class="input-group">
                <input type="text" class="form-control" placeholder="輸入對話內容" @keyup.enter="submitMessage" v-model="tempMessage" :disabled="!username.length">
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button" :disabled="!username.length" @click="submitMessage()">送出</button>
                </span>
              </div>
<<<<<<< HEAD
              <ul class="list-unstyled row pt-3" id="message-list">
=======
              <ul class="list-unstyled row">
>>>>>>> f13be4ce5e0c4fcafc202058fe671d62a44ba994
                <li class="media mt-3 col-12" v-for="(item, key) in messages" :class="{ 'text-success text-right': item.username == username }">
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
  methods: {
    updateUsername () {
      let vm = this;
      vm.username = vm.tempUsername;
      console.log(vm.username, vm.tempUsername)
    },
    submitMessage () {
      let vm = this;
      let timestamp = Math.floor(Date.now() / 1000);
      // vm.messages.unshift({
      //   username: vm.username,
      //   message: vm.tempMessage
      // });      

      // update data to firebase
      chatroomRef.child(timestamp).set({
        timestamp: timestamp,
        username: vm.username,
        message: vm.tempMessage
      });
      // clear message
      vm.tempMessage = ''
      // scroll to bottom of message block
      setTimeout(() => { vm.scrollToBottom() }, 500)
    },
    filterTimeStamp(value) {
      return value == vm.timestamp;
    },
    // count object number
    ObjectLength( object ) {
      var length = 0;
      for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
          ++length;
        }
      }
      return length;
    },
    scrollToBottom(){
      var ml = document.getElementById("message-list");
      // scrollHeight = scroll的全高
      // clientHeight = css所給的高
      // // scrollTop = 從上滑到底的，最上為0
      // var isScrolledToBottom = ml.scrollHeight-ml.clientHeight<ml.scrollTop+1
      // setTimeout(function(){ ml.scrollTop  = ml.scrollHeight }, 500);  
      ml.scrollTop  = ml.scrollHeight
    }
  },
  mounted() {
    let vm = this    
    setTimeout(() => { vm.scrollToBottom() }, 1000)
    let messages = []    
    // get window width
    var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth    
    chatroomRef.on('value', function(snapshot) {
      // 如果window大於992px，那陣列需要由上往下排
      if(x>992){
          snapshot.forEach(function(chatVal) {
          // console.log(chatVal.val())
          messages.unshift(chatVal.val())
        });
        vm.messages = messages.slice(0,vm.ObjectLength(snapshot.val()))        
      }
      // 反之不用
      else{ 
        vm.messages = snapshot.val()  
      }            
    });  

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@media (max-width: 992px) {
  .chatroom {
    position: absolute;
    bottom: 5vh;
  }
  .card-m-order {
    order: 2;
  }
  .name-closed {
    opacity: 0;
  }
  .card-header {
    font-size: 2.5rem;
  }
  .card-block {
    transition: 0.5s;
  }
  #message-list {
    height: 80vh;
    overflow: auto;
  }
  .card-closed {
    margin-bottom: -100%;
  }
  label {
    font-size: 2rem;
  }
  .form-control {
    padding: 1rem;
    font-size: 1.5rem;
  }
  .input-group {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: cornflowerblue;
    z-index: 2;
  }
  .btn {
    padding: 1rem 1.75rem;
  }
  h5 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
}
</style>
