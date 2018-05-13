<template>
  <div id="store" class="mt-3">
    <div class="center-column">
      <h1>全台桌遊店家</h1>
      <h3>資料來源 - 新天鵝堡與桌末狂歡</h3>
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{'disabled ': (currPage === 1)}" @click.prevent="setPage(currPage-1); reOrder()">
            <a class="page-link" href="#">Prev</a>
          </li>
          <li class="page-item" 
              v-bind:class="{'active': (currPage === (n))}"               
              @click.prevent="setPage(n); reOrder()"               
              v-for="n in totalPage">
            <a class="page-link" href="#">{{n}}</a>
          </li>
          <li class="page-item" :class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1); reOrder()">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      <div class="search">搜尋：
        <input type="text" v-model="filter_name" style="margin:0;" />
        <button @click="filter_name = ''; reOrder()">清除</button>
      </div>
      <div class="search">店家類型：
        <button @click="filter_name = '桌遊專門店'; reOrder(); currPage=1;">桌遊專門店</button>
        <button @click="filter_name = '桌遊販賣店'; reOrder(); currPage=1;">桌遊販賣店</button>
        <button @click="filter_name = '複合式餐飲桌遊店'; reOrder(); currPage=1;">複合式餐飲桌遊店</button>
        <button @click="filter_name = '其他'; reOrder(); currPage=1;">其他</button>
      </div>
      <div class="search">縣市：
        <button @click="filter_name = '臺北'; reOrder(); currPage=1;">臺北</button>
        <button @click="filter_name = '新北'; reOrder(); currPage=1;">新北</button>
        <button @click="filter_name = '桃園'; reOrder(); currPage=1;">桃園</button>
        <button @click="filter_name = '臺中'; reOrder(); currPage=1;">臺中</button>
        <button @click="filter_name = '高雄'; reOrder(); currPage=1;">高雄</button>
      </div>
    </div>
    <div class="store-column">
      <div class="inner-column">
        <div class="store" v-for="(data,id) in filteredRows.slice(pageStart,pageStart+countOfPage)">
          <!-- <div class="box" @click="showInfo(id)"> -->
          <div class="box" data-toggle="modal" data-target="#store-info" @click="showInfo(id)">
            <div class="title">{{data.storeName}}</div>
            <hr/>
            <img class="image" :src="'./static/image/' + data.storePhoto " alt=""></img>
            <div class="address">地址：{{data.storeAddress}}</div>
            <hr/>
            <div class="info">類型：{{data.storeType}}</div>
          </div>
        </div>
      </div>
    </div>

<!-- Modal 
<div class="modal fade" id="store-info">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{stores[2].data[stores_id].storeName}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>-->



    <div class="store-outclick" v-if="outclick_show" @click="closeInfo"></div>
    <div class="store-info">
      <div class="center-column">        
        <div class="info-column">
          <div class="store-title">
            <h1>{{stores[2].data[stores_id].storeName}}</h1>
            <strong class="exit" @click="closeInfo">X</strong>
          </div>
          <div class="bottom-info">
            <div class="left">
              <div class="left-column">
                <img :src="'./static/image/' + stores[2].data[stores_id].storePhoto" alt="" class="store-data store-img">
                <div class="bottom-column">
                  <div class="store-data store-type">類型: {{stores[2].data[stores_id].storeType}}</div>
                  <div class="store-data store-address">地址:
                    <br/>
                    <span>{{stores[2].data[stores_id].storeAddress}}</span>
                  </div>
                  <div class="store-data store-phone">電話: {{stores[2].data[stores_id].storeNumber}}</div>
                  <div class="store-data store-time">營業時間:
                    <br/>
                    <span v-html="stores[2].data[stores_id].storeTime"></span>
                  </div>
                  <div class="store-data store-spend">消費模式:
                    <br/>
                    <span v-html="stores[2].data[stores_id].storeSpend"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="right-column">
                <iframe v-if="outclick_show" v-bind:src="stores[2].data[stores_id].googleURL" frameborder="0" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'boardGame',
  data () {
    return {
      stores: [],
      stores_id: "1",
      outclick_show: false,
      page: 0,
      countOfPage: 16,
      currPage: 1,
      filter_name: '', 
    }
  },
  computed: { 
    filteredRows: function(){
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 filter_name 與 stores[n].name 通通轉小寫方便比對。
      var filter_name = this.filter_name.toLowerCase();

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 stores 回傳。
      return ( this.filter_name.trim() !== '' )?
        this.stores[2].data.filter(function(d){ return d.storeName.toLowerCase().indexOf(filter_name) > -1 
                                                || d.storeType.toLowerCase().indexOf(filter_name) > -1
                                                || d.storeAddress.toLowerCase().indexOf(filter_name) > -1
                                                || d.storePlace.toLowerCase().indexOf(filter_name) > -1
                                                || d.storeArea.toLowerCase().indexOf(filter_name) > -1
                                                || d.storeNumber.toLowerCase().indexOf(filter_name) > -1})
      :this.stores[2].data;
      // console.log("search");
    },
    pageStart: function(){
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function(){
      return Math.ceil(this.filteredRows.length / this.countOfPage);
    }
  },
  methods: {    
    setPage: function(idx){
      if( idx <= 0 || idx > this.totalPage ){
        return false;
      }
      this.currPage = idx;    
      return idx;
    },
    showInfo: function(id){
      console.log('now id = %d', id)
      this.stores_id = id,     
      this.outclick_show = true,      
      $(".store-info").css("transform","translate(-50%,-50%) scale(1)");      
    },  
    closeInfo: function(){
      this.outclick_show = false, 
      $(".store-info").css("transform","translate(-50%,-50%) scale(0)");
    },
    reOrder: function() {    
      let vm = this
      setTimeout(function(){ vm.grid.masonry('reloadItems'); }, 10); 
      setTimeout(function(){ vm.grid.masonry('layout'); }, 10); 
      // console.log('reloading...')
    },
  },
  created() {
    const store = require("./storeData/store")
    this.stores = store.store_array
  },
  mounted() {
    // masonry
    let vm = this
    vm.grid = $('.inner-column').masonry({
      itemSelector: '.store',
      columnWidth: 220,
      isFitWidth: true
    }); 
    // started
    setTimeout(function(){ vm.grid.masonry('reloadItems'); }, 50); 
    setTimeout(function(){ vm.grid.masonry(); }, 50); 
    // started
    setTimeout(function(){ vm.grid.masonry('reloadItems'); }, 1000); 
    setTimeout(function(){ vm.grid.masonry(); }, 1000); 

    // for searching 
    $( ".search" ).keydown(function(e) {  
      vm.reOrder()
      vm.currPage = 1
      console.log('searching...')
    });    
  }
}    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.modal.fade .modal-dialog {
  transform: translate(0, 0); 
}

@media (max-width: 780px) {
  .info-column .bottom-info {
    flex-direction: column ;
    height: 75vh;
  }
  .store-info .info-column .left {
    order: 2;
    width: 100% !important;
  }
  .store-info .info-column .right {
    order: 1;
    width: 100% !important;
    position: initial !important;
    overflow: initial !important;
    height: 50vh !important;
  }
  .store-info .right .right-column {
    width: 100%;
    transform: translate(0);
    position: relative;
  }
  .store-info .right .right-column iframe {
    width: 100%;
  }
}


.store-column {
  display: block;
}

.store-info {
  display: block;
}

* {
  box-sizing: border-box;
  font-family: 微軟正黑體;
  vertical-align: top;
  backface-visibility: hidden;
}

hr {
  border-color: #D8572A;
  margin: 5px 0;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #eee;
}

.center-column {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.search {
  margin: 10px auto;
}

.store-column {
  width: 90%;
  margin: 0 auto;
}

.inner-column {
  margin: 0 auto;
}

.inner-column:after {
  content: '';
  display: block;
  clear: both;
}

.store {
  /* transition: background-color 0.5s, transform 0.1s; */
  display: inline-block;
  float: left;
  width: 200px;
  min-width: 200px;
  margin: 0.5rem;
  cursor: pointer;
  border: outset 2px #DB7C26;
  background-color: #fff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

.store:hover {
  background-color: beige;  
}

.store:active {
  transform: translate(5px, 5px);
  border: inset 2px #DB7C26;
}

.store .box {
  padding: 2%;
}

.store .image {
  width: 100%;
}

.store-close {
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #ccc;
}

.store-outclick {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 208, 111, 0.45);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.store-info {
  width: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.2s;
}

.store-info .center-column {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  width: 60%;
}

.store-info .store-title {
  padding: 10px 0px;
  background-color: #F4D06F;
  position: relative;
  width: 100%;
  border-left: solid 1px #C32F27;
  border-right: solid 1px #C32F27;
  border-top: solid 1px #C32F27;
}

.store-info .exit {
  display: inline-block;
  font-size: 0.5em;
  border: outset 2px #C32F27;
  padding: 2px 7px;
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 0px;
  transition: 0.1s;
}

.store-info .exit:hover {
  border: inset 2px #C32F27;
  transform: translate(2px, 2px);
}

.store-info .color-lighten {
  background-color: #e6e6e6;
}

.store-info .info-column {
  max-width: 620px;
  margin: 0 auto;
  height: 60vh;
  overflow: auto;
  border-radius: 0px 0px 10px 10px;
}
.bottom-info {
  display: flex;
}

.store-info .info-column::-webkit-scrollbar {
  width: 14px;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
  background-color: #CCCCCC;
}

.store-info .info-column::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5f0111;
  background-image: -webkit-linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4) 50%, transparent, transparent);
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
}

.store-info .info-column .left {
  width: 220px;
  background-color: #DB7C26;
}

.store-info .info-column .left-column {
  background-color: #DB7C26;
}

.store-info .info-column .right {
  width: 440px;
  height: auto;
  right: 12px;
}

.store-info .info-column .right-column {
  width: 100%;
  height: 100%;
}

.store-info .info-column .right-column iframe {
  border: inset 5px #C32F27;
  width: 100%;
  height: 100%;
  background-color: #f0f8ff;
}

.store-info .info-column .store-img {
  width: 100%;
  padding: 0;
}

.store-info .info-column .bottom-column {
  display: flex;
  flex-direction: column;
}

.store-info .info-column .store-data {
  padding: 5px;
  border: solid 1px #780116;
}
</style>
