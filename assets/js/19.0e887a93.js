(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{591:function(a,t,e){},653:function(a,t,e){"use strict";var n=e(591);e.n(n).a},675:function(a,t,e){"use strict";e.r(t);e(77),e(116);var n=e(41),s={props:{fileName:{type:Boolean}},data:function(){return{tagName:"0.0.0"}},mounted:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.$store.dispatch("getStableReleaseData");case 3:e=t.sent,n=e.data,a.$data.tagName=n.tag_name.slice(1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},r=(e(653),e(27)),i=Object(r.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.fileName?e("span",{staticClass:"fileNameContainer",attrs:{title:"File name"}},[e("MaterialIcon",{staticClass:"fileNameIcon",attrs:{"icon-name":"get_app"}}),a._v(" "),e("span",{staticClass:"fileName"},[a._v("tachiyomi-v"+a._s(this.$data.tagName)+".apk")]),a._v(" "),a._t("default")],2):e("span",{staticClass:"downloadTag"},[a._v(a._s(this.$data.tagName))])}),[],!1,null,"25d691ba",null);t.default=i.exports}}]);