<template>
  <div id="bottom">
    <div class="store-column">
      <div class="inner-column">
        <div class="store" v-for="(data,id) in filteredRows.slice(pageStart,pageStart+countOfPage)">
          <div class="box" @click="showInfo(id)">
            <div class="title">{{data.storeName}}</div>
            <hr/>
            <img class="image" :src="'../../static/image/' + data.storePhoto " alt=""></img>
            <!-- <img class="image" src="../assets/logo.png" alt=""></img> -->
            <!-- <img src="../assets/logo.png"> -->
            <div class="address">地址：{{data.storeAddress}}</div>
            <hr/>
            <div class="info">類型：{{data.storeType}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="store-outclick" v-if="outclick_show" @click="closeInfo"></div>
    <div class="store-info">
      <div class="center-column">
        <div class="store-title">
          <h1>{{stores[2].data[stores_id].storeName}}</h1>
          <strong class="exit" @click="closeInfo">X</strong>
        </div>
        <div class="info-column">
          <div class="left">
            <div class="left-column">
              <img :src="'./image/' + stores[2].data[stores_id].storePhoto" alt="" class="store-data store-img">
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
</template>
<script>
export default {
  name: 'bottom',
  data () {
    return {
      stores: [
        {
          "type": "header",
          "version": "4.7.3",
          "comment": "Export to JSON plugin for PHPMyAdmin"
        },
        {
          "type": "database",
          "name": "jomorcom_boardgame"
        },
        {
          "type": "table",
          "name": "store",
          "database": "jomorcom_boardgame",
          "data": [
            {
              "no": "1",
              "storePlace": "臺北市",
              "storeNo": "taipei1.jpg",
              "placeNo": "0",
              "storeName": "女巫店",
              "storeType": "複合式餐飲桌遊店",
              "storeArea": "臺北市大安區",
              "storeAddress": "臺北市大安區新生南路三段56巷7號",
              "storeNumber": "(02)2369-2528",
              "storeSpend": "一般時段每人最低消費150元",
              "storeTime": "週日：10:00-23:00<br> 週一：10:00-23:00<br> 週二：10:00-23:00<br> 週三：10:00-23:00<br> 週四：10:00-24:00<br> 週五：10:00-24:00<br> 週六：10:00-24:00",
              "storeHoliday": "無",
              "webURL": "http://www.witchhouse.org/",
              "fbURL": "https://zh-tw.facebook.com/%E5%A5%B3%E5%B7%AB%E5%BA%97-133362243371354/",
              "googleURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3999209044996!2d121.53147231500604!3d25.020498683978733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a988fc4f7b2d%3A0xae67410731144b1a!2zMTA25Y-w54Gj5Y-w5YyX5biC5aSn5a6J5Y2A5paw55Sf5Y2X6Lev5LiJ5q61NTblt7c36Jmf!5e0!3m2!1szh-TW!2s!4v1477656392496",
              "storePhoto": "taipei01.jpg"
            },
            {
              "no": "2",
              "storePlace": "臺北市",
              "storeNo": "taipei2.jpg",
              "placeNo": "0",
              "storeName": "Swan Cafe 天鵝桌遊館",
              "storeType": "複合式餐飲桌遊店",
              "storeArea": "臺北市文山區",
              "storeAddress": "臺北市文山區羅斯福路五段170巷37號",
              "storeNumber": "(02)2930-8983",
              "storeSpend": "每人每時段低消150元(早場10-14、午場14-18、晚場18-22)",
              "storeTime": "週一：10:00-22:00<br>週二：10:00-22:00<br>週三：10:00-22:00<br>週四：10:00-22:00<br>週五：10:00-22:00<br>週六：10:00-22:00<br>週日：10:00-22:00",
              "storeHoliday": "無",
              "webURL": "",
              "fbURL": "https://www.facebook.com/Swancafe-%E5%A4%A9%E9%B5%9D%E6%A1%8C%E9%81%8A%E9%A4%A8-1062378480487075/",
              "googleURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.865410283099!2d121.53441181500567!3d25.004688883986077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9f626a7f0b1%3A0xab8269ee9dfb4b34!2zMTE25Y-w5YyX5biC5paH5bGx5Y2A576F5pav56aP6Lev5LqU5q61MTcw5be3MzfomZ8!5e0!3m2!1szh-TW!2stw!4v1478457003631",
              "storePhoto": "taipei02.jpg"
            },
            {
              "no": "3",
              "storePlace": "臺北市",
              "storeNo": "taipei3.jpg",
              "placeNo": "0",
              "storeName": "萊思樂-桌上遊戲休閒空間",
              "storeType": "複合式餐飲桌遊店",
              "storeArea": "臺北市士林區",
              "storeAddress": "臺北市士林區士東路95號3樓",
              "storeNumber": "(02)2874-0262",
              "storeSpend": "平日：會員 : 1小時30元，包日120元。<br>非會員：1小時40元，包日160元。<br> 假日：會員 : 1小時40元，包日160元。<br>非會員：1小時50元，包日200元。",
              "storeTime": "週一：13:30-21:00<br>週二：13:30-21:00<br>週四：13:30-21:00<br>週五：13:30-21:00<br>週六：13:30-21:00<br>週日：13:30-21:00",
              "storeHoliday": "週三",
              "webURL": "",
              "fbURL": "https://www.facebook.com/LetsLearn.BGspace/",
              "googleURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.691390838903!2d121.52710461500786!3d25.112305983935684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae84451bc5e3%3A0x6a26497c560cd8a7!2zMTEx5Y-w54Gj5Y-w5YyX5biC5aOr5p6X5Y2A5aOr5p2x6LevOTXomZ8!5e0!3m2!1szh-TW!2s!4v1477656469033",
              "storePhoto": "taipei03.jpg"
            },
            {
              "no": "4",
              "storePlace": "臺北市",
              "storeNo": "taipei4.jpg",
              "placeNo": "0",
              "storeName": "Legend Fun 樂聚坊桌上遊戲",
              "storeType": "桌遊專門店",
              "storeArea": "臺北市士林區",
              "storeAddress": "臺北市士林區中山北路五段505巷44弄2號",
              "storeNumber": "(02)2883-0357",
              "storeSpend": "40元/hr 優惠100元/3hr",
              "storeTime": "週一：16:00-22:00<br> 週二：16:00-22:00<br> 週三：16:00-22:00<br> 週四：16:00-22:00<br> 週五：16:00-22:00<br> 週六：13:00-22:00<br> 週日：13:00-22:00",
              "storeHoliday": "無",
              "webURL": "",
              "fbURL": "https://www.facebook.com/LegendFun/",
              "googleURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2500387989385!2d121.5243613150074!3d25.093395983944585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aea4a6e90c67%3A0x9c2c1ec199322cc!2zMTEx5Y-w54Gj5Y-w5YyX5biC5aOr5p6X5Y2A5Lit5bGx5YyX6Lev5LqU5q61NTA15be3NDTlvIQy6Jmf!5e0!3m2!1szh-TW!2s!4v1477656489983",
              "storePhoto": "taipei04.jpg"
            },
          ]
        }
      ],
      
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
      console.log("search");
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
      vm.stores_id = id,     
      vm.outclick_show = true,      
      $(".store-info").css("transform","translate(-50%,-50%) scale(1)");      
    },  
    closeInfo: function(){
      vm.outclick_show = false, 
      $(".store-info").css("transform","translate(-50%,-50%) scale(0)");
    },
    reOrder: function() {    
      setTimeout(function(){ $grid.masonry('reloadItems'); }, 10); 
      setTimeout(function(){ $grid.masonry('layout'); }, 10); 
    },
  }
}
</script>
<style scoped>

</style>
