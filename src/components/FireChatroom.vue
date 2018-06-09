<template>
  <div id="chatroom" class="chatroom mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 mx-auto chatroom-height">
          <div class="card" style="height: 100%;">
            <div id="message-list" class="card-body" style="height: 0%; overflow: auto;">    
              <ul class="list-unstyled row flex-column-reverse">
                <li class="media mt-3 col-12" v-for="(item, key) in messages" :class="{ 'text-success text-right': item.username == username }">
                  <img class="d-flex mr-3" width="50" height="50" src="http://lorempixel.com/50/50/sports" alt="" v-if="item.username != username">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">{{ item.username }}</h5>
                    <p>{{ item.message }}</p>
                  </div>
                  <img class="d-flex ml-3" width="50" height="50" src="http://lorempixel.com/50/50/sports" alt="" v-if="item.username == username">
                </li>
              </ul>
              <div class="arrow-down"><i class="fas fa-arrow-down"></i></div>
            </div>
            <div class="card" style="position: sticky; bottom: 0">
              <div class="card-header bg-dark text-light" data-toggle="collapse" data-target="#name">
                <span v-if=" username=='' " for="username">輸入資料: </span>
                <span v-if=" username!='' " for="username">你的姓名: {{username}}</span>                
              </div>
              <div id="name" class="card-body collapse show">
                <div class="form-group">
                  <label for="username">姓名</label>           
                  <input type="text" class="form-control" v-model="tempUsername" id="username" placeholder="輸入姓名">
                  <small class="form-text text-muted">請輸入個人姓名開始使用聊天室</small>                  
                </div>
                <button type="button" class="btn btn-warning" @click="updateUsername()">送出</button>
              </div>
              <div class="input-group">
                <input type="text" class="form-control rounded-0" placeholder="輸入對話內容" @keyup.enter="submitMessage" v-model="tempMessage" :disabled="!username.length">
                <span class="input-group-btn">
                  <button class="btn btn-warning rounded-0" type="button" :disabled="!username.length" @click="submitMessage()">送出</button>
                </span>
              </div>
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
      messages: [],
    }
  },
  methods: {
    updateUsername () {
      let vm = this
      vm.username = vm.tempUsername
      if(vm.username == ''){return}
      $('#name').collapse('toggle')
      // console.log(vm.username)
    },
    submitMessage () {
      let vm = this
      let timestamp = Math.floor(Date.now() / 1000)
      if(vm.tempMessage == ''){return}

      // update data to firebase
      chatroomRef.child(timestamp).set({
        timestamp: timestamp,
        username: vm.username,
        message: vm.tempMessage
      });
      // clear message
      vm.tempMessage = ''
      // scroll to bottom of message block
      setTimeout(() => { vm.scrollToBottom() }, 50)
    },
    filterTimeStamp(value) {
      return value == vm.timestamp;
    },
    // count object number
    ObjectLength( object ) {
      let length = 0;
      for( let key in object ) {
        if( object.hasOwnProperty(key) ) {
          ++length;
        }
      }
      return length;
    },
    scrollToBottom(){
      let ml = document.getElementById("message-list");
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
    // setTimeout(() => { vm.scrollToBottom() }, 1000)
    let messages = []    
    // get window width
    let x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth    
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
    $('.arrow-down i').on('click',function () {
      vm.scrollToBottom()
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
