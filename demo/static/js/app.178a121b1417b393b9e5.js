webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("K3J8");var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},n,!1,function(t){s("gxx3")},null,null).exports,i=s("/ocq"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){s("Ugm9")},"data-v-694cd902",null).exports;var l=firebase.database().ref("/chatroom/"),m={name:"hello",data:function(){return{tempUsername:"",tempMessage:"",username:"",messagesLength:"",messages:[]}},methods:{updateUsername:function(){this.username=this.tempUsername,""!=this.username&&$("#name").collapse("toggle")},submitMessage:function(){var t=this,e=Math.floor(Date.now()/1e3);""!=t.tempMessage&&(l.child(e).set({timestamp:e,username:t.username,message:t.tempMessage}),t.tempMessage="",setTimeout(function(){t.scrollToBottom()},50))},filterTimeStamp:function(t){return t==vm.timestamp},ObjectLength:function(t){var e=0;for(var s in t)t.hasOwnProperty(s)&&++e;return e},scrollToBottom:function(){var t=document.getElementById("message-list");t.scrollTop=t.scrollHeight}},mounted:function(){var t=this,e=[],s=window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth;l.on("value",function(a){s>992?(a.forEach(function(t){e.unshift(t.val())}),t.messages=e.slice(0,t.ObjectLength(a.val()))):t.messages=a.val()}),$(".arrow-down i").on("click",function(){t.scrollToBottom()})}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatroom mt-3",attrs:{id:"chatroom"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 mx-auto chatroom-height"},[s("div",{staticClass:"card",staticStyle:{height:"100%"}},[s("div",{staticClass:"card-body",staticStyle:{height:"0%",overflow:"auto"},attrs:{id:"message-list"}},[s("ul",{staticClass:"list-unstyled row flex-column-reverse"},t._l(t.messages,function(e,a){return s("li",{staticClass:"media mt-3 col-12",class:{"text-success text-right":e.username==t.username}},[e.username!=t.username?s("img",{staticClass:"d-flex mr-3",attrs:{width:"50",height:"50",src:"http://lorempixel.com/50/50/sports",alt:""}}):t._e(),t._v(" "),s("div",{staticClass:"media-body"},[s("h5",{staticClass:"mt-0 mb-1"},[t._v(t._s(e.username))]),t._v(" "),s("p",[t._v(t._s(e.message))])]),t._v(" "),e.username==t.username?s("img",{staticClass:"d-flex ml-3",attrs:{width:"50",height:"50",src:"http://lorempixel.com/50/50/sports",alt:""}}):t._e()])})),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"card",staticStyle:{position:"sticky",bottom:"0"}},[s("div",{staticClass:"card-header bg-dark text-light",attrs:{"data-toggle":"collapse","data-target":"#name"}},[""==t.username?s("span",{attrs:{for:"username"}},[t._v("輸入資料: ")]):t._e(),t._v(" "),""!=t.username?s("span",{attrs:{for:"username"}},[t._v("你的姓名: "+t._s(t.username))]):t._e()]),t._v(" "),s("div",{staticClass:"card-body collapse show",attrs:{id:"name"}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempUsername,expression:"tempUsername"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"輸入姓名"},domProps:{value:t.tempUsername},on:{input:function(e){e.target.composing||(t.tempUsername=e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted"},[t._v("請輸入個人姓名開始使用聊天室")])]),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){t.updateUsername()}}},[t._v("送出")])]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempMessage,expression:"tempMessage"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"輸入對話內容",disabled:!t.username.length},domProps:{value:t.tempMessage},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitMessage(e):null},input:function(e){e.target.composing||(t.tempMessage=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-warning rounded-0",attrs:{type:"button",disabled:!t.username.length},on:{click:function(e){t.submitMessage()}}},[t._v("送出")])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arrow-down"},[e("i",{staticClass:"fas fa-arrow-down"})])}]};var c=s("VU/8")(m,u,!1,function(t){s("f63U")},"data-v-428d5fe0",null).exports;a.a.use(i.a);var v=new i.a({routes:[{path:"/",name:"FireChatroom",component:c}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:v,components:{App:r},template:"<App/>"})},Ugm9:function(t,e){},f63U:function(t,e){},gxx3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.178a121b1417b393b9e5.js.map