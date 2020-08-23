(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{562:function(t,e,a){"use strict";a(178);var n={name:"CloudDownloadIcon",props:{title:{type:String,default:"Cloud Download icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},o=a(27),i=Object(o.a)(n,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon cloud-download-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M17,13L12,18L7,13H10V9H14V13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null);e.a=i.exports},583:function(t,e,a){},639:function(t,e,a){"use strict";var n=a(583);a.n(n).a},664:function(t,e,a){"use strict";a.r(e);a(305),a(303),a(77),a(184),a(304),a(116);var n=a(41),o=a(562),i=(a(178),{name:"BugIcon",props:{title:{type:String,default:"Bug icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),s=a(27),r=Object(s.a)(i,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon bug-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,l=a(196),d={components:{CloudDownloadIcon:o.a,BugIcon:r},data:function(){return{tagName:"",browserDownloadUrl:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("getStableReleaseData");case 3:a=e.sent,n=a.data,o=n.assets.find((function(t){return t.name.includes(".apk")})),t.$data.tagName=n.tag_name.slice(1),t.$data.browserDownloadUrl=o.browser_download_url,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},methods:{downloadStable:function(){this.$swal({title:"Downloading",html:"Started downloading <strong>Tachiyomi Stable</strong>",icon:"success",focusConfirm:!1,focusCancel:!1,timer:3e3,timerProgressBar:!0,showClass:{popup:"animate__animated animate__faster animate__pulse"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}),window.location.assign(this.$data.browserDownloadUrl||l.c),window.ga("send","event","Action","Download","Tachiyomi")},downloadPreview:function(){var t=this;this.$swal({icon:"warning",title:"Are you sure?",html:"<strong>Tachiyomi Preview</strong> is not recommended if you're not willing to test for – and endure – issues.",confirmButtonText:"I am sure.",showCloseButton:!0,showCancelButton:!1,showClass:{popup:"animate__animated animate__headShake"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}).then((function(e){e.value&&(t.$swal({icon:"success",title:"Downloading",html:"Started downloading <strong>Tachiyomi Preview</strong>",confirmButtonText:"Dismiss",showCloseButton:!1,showCancelButton:!1,timer:3e3,timerProgressBar:!0,showClass:{popup:"animate__animated animate__faster animate__pulse"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}),window.location.assign(l.d),window.ga("send","event","Action","Download","Tachiyomi Preview"))}))}}},c=(a(639),Object(s.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"DownloadButtons"}},[a("div",{staticClass:"downloadContainer"},[a("button",{attrs:{id:"downloadStable"},on:{click:t.downloadStable,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.downloadStable(e)}}},[a("CloudDownloadIcon"),t._v(" Stable\n\t\t")],1),t._v(" "),a("button",{attrs:{id:"downloadPreview"},on:{click:t.downloadPreview,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.downloadPreview(e)}}},[a("BugIcon"),t._v(" Preview\n\t\t")],1)]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"versionNotice"},[this._v("Requires "),e("strong",[this._v("Android 5.0")]),this._v(" or higher.")])}],!1,null,null,null));e.default=c.exports}}]);