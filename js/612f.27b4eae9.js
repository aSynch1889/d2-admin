(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["612f"],{"612f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("el-alert",{attrs:{type:"success",closable:!1,title:"私有路由存储指当前路由的存储区域，\n        并且同时还根据用户区分，\n        相当于结合了 “路由存储” 和 “私有存储”，\n        不同路由以及不同用户之间存储不会相互干扰，\n        使用 await this.$store.dispatch('d2admin/db/databasePage', { vm: this, user: true }) 获得存储实例进行操作，\n        不同路由和用户条件下获取的存储实例指向位置不同，\n        可以指定路由区分依据 name | path | fullPath，\n        默认根据路由的 name 区分不同的路由"}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("p",{staticClass:"d2-mt-0"},[e._v("增加不重复字段")]),a("el-button",{on:{click:e.handleSetRandom}},[e._v("增加")]),a("p",[e._v("增加自定义字段")]),a("el-input",{staticClass:"d2-mr-5",staticStyle:{width:"100px"},attrs:{placeholder:"字段名"},model:{value:e.keyNameToSet,callback:function(t){e.keyNameToSet=t},expression:"keyNameToSet"}}),a("el-input",{staticClass:"d2-mr-5",staticStyle:{width:"100px"},attrs:{placeholder:"值"},model:{value:e.valueToSet,callback:function(t){e.valueToSet=t},expression:"valueToSet"}}),a("el-button",{on:{click:e.handleSet}},[e._v("增加")]),a("p",[e._v("删除字段")]),a("el-select",{attrs:{placeholder:"请选择要删除的 key"},model:{value:e.keyNameToDelete,callback:function(t){e.keyNameToDelete=t},expression:"keyNameToDelete"}},e._l(e.keyNameList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),a("p",[e._v("清空当前用户数据")]),a("el-button",{on:{click:e.handleClear}},[e._v("清空")])],1),a("el-col",{attrs:{span:12}},[a("d2-highlight",{attrs:{code:e.dataDisplay}})],1)],1)],2)},r=[],s=(a("ac6a"),a("456d"),a("96cf"),a("3040")),i=a("c93e"),l=a("2ef0"),u=a("2f62"),c={data:function(){return{dataDisplay:"",keyNameToSet:"",valueToSet:"",keyNameList:[],keyNameToDelete:""}},watch:{keyNameToDelete:function(e){e&&this.handleDelete(e)}},mounted:function(){this.load()},methods:Object(i["a"])({},Object(u["b"])("d2admin/db",["databasePage","databasePageClear"]),{load:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.databasePage({vm:this,user:!0});case 2:t=e.sent,this.dataDisplay=JSON.stringify(t.value(),null,2),this.keyNameList=Object.keys(t.value()).map(function(e){return{value:e,label:e}});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleDelete:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.databasePage({vm:this,user:!0});case 2:a=e.sent,a.unset(t).write(),this.load(),this.keyNameToDelete="";case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleClear:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.databasePageClear({vm:this,user:!0});case 2:this.load();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleSet:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.keyNameToSet){e.next=3;break}return this.$message.error("字段名不能为空"),e.abrupt("return");case 3:return e.next=5,this.databasePage({vm:this,user:!0});case 5:t=e.sent,t.set(this.keyNameToSet,this.valueToSet).write(),this.load();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleSetRandom:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(l["uniqueId"])(),e.next=3,this.databasePage({vm:this,user:!0});case 3:a=e.sent,a.set("uniqueKey".concat(t),"value".concat(t)).write(),this.load();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},o=c,h=a("2877"),d=Object(h["a"])(o,n,r,!1,null,null,null);d.options.__file="index.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=612f.27b4eae9.js.map