(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{573:function(t,e,a){},574:function(t,e,a){},575:function(t,e,a){"use strict";var i=a(588),s=a(124),l=(a(12),a(15),a(23),a(186),a(585),a(76),a(56),{name:"AlgoliaSearchBox",props:{options:{type:Object,default:function(){}}},data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var l=this;Promise.all([Promise.all([a.e(0),a.e(4)]).then(a.t.bind(null,683,7)),Promise.all([a.e(0),a.e(4)]).then(a.t.bind(null,684,7))]).then((function(a){var r=Object(s.a)(a,1)[0];r=r.default;var o=t.algoliaOptions,n=void 0===o?{}:o;r(Object(i.a)(Object(i.a)({},t),{},{inputSelector:"#algolia-search-input",algoliaOptions:Object(i.a)({facetFilters:["lang:".concat(e)].concat(n.facetFilters||[])},n),handleSelected:function(t,e,a){var i=new URL(a.url),s=i.pathname,r=i.hash,o=s.replace(l.$site.base,"/");l.$router.push("".concat(o).concat(r))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),r=(a(577),a(30)),o=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.a=o.exports},577:function(t,e,a){"use strict";a(573)},578:function(t,e,a){"use strict";a(574)},580:function(t,e,a){"use strict";a(582);var i=a(586),s=a(587),l=a(579),r=a(575);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var n={name:"Navbar",components:{SidebarButton:s.a,NavLinks:l.a,SearchBox:i.a,AlgoliaSearchBox:r.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},c=(a(578),a(30)),p=Object(c.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n\t\t\t"+t._s(t.$siteTitle)+"\n\t\t")]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.$page.frontmatter.hideSearch?a("div"):t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=p.exports},613:function(t,e,a){},668:function(t,e,a){"use strict";a(613)},685:function(t,e,a){"use strict";a.r(e);var i=a(580),s=a(575),l=(a(185),{name:"ClipboardListIcon",props:{title:{type:String,default:"Clipboard List icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),r=a(30),o=Object(r.a)(l,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon clipboard-list-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,n={name:"SourceForkIcon",props:{title:{type:String,default:"Source Fork icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},c=Object(r.a)(n,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon source-fork-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,p={name:"DiscordIcon",props:{title:{type:String,default:"Discord icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},d=Object(r.a)(p,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon discord-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,C={name:"RedditIcon",props:{title:{type:String,default:"Reddit icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},u=Object(r.a)(C,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon reddit-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14.5 15.41C14.58 15.5 14.58 15.69 14.5 15.8C13.77 16.5 12.41 16.56 12 16.56C11.61 16.56 10.25 16.5 9.54 15.8C9.44 15.69 9.44 15.5 9.54 15.41C9.65 15.31 9.82 15.31 9.92 15.41C10.38 15.87 11.33 16 12 16C12.69 16 13.66 15.87 14.1 15.41C14.21 15.31 14.38 15.31 14.5 15.41M10.75 13.04C10.75 12.47 10.28 12 9.71 12C9.14 12 8.67 12.47 8.67 13.04C8.67 13.61 9.14 14.09 9.71 14.08C10.28 14.08 10.75 13.61 10.75 13.04M14.29 12C13.72 12 13.25 12.5 13.25 13.05S13.72 14.09 14.29 14.09C14.86 14.09 15.33 13.61 15.33 13.05C15.33 12.5 14.86 12 14.29 12M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12C2 6.5 6.5 2 12 2S22 6.5 22 12M18.67 12C18.67 11.19 18 10.54 17.22 10.54C16.82 10.54 16.46 10.7 16.2 10.95C15.2 10.23 13.83 9.77 12.3 9.71L12.97 6.58L15.14 7.05C15.16 7.6 15.62 8.04 16.18 8.04C16.75 8.04 17.22 7.57 17.22 7C17.22 6.43 16.75 5.96 16.18 5.96C15.77 5.96 15.41 6.2 15.25 6.55L12.82 6.03C12.75 6 12.68 6.03 12.63 6.07C12.57 6.11 12.54 6.17 12.53 6.24L11.79 9.72C10.24 9.77 8.84 10.23 7.82 10.96C7.56 10.71 7.2 10.56 6.81 10.56C6 10.56 5.35 11.21 5.35 12C5.35 12.61 5.71 13.11 6.21 13.34C6.19 13.5 6.18 13.62 6.18 13.78C6.18 16 8.79 17.85 12 17.85C15.23 17.85 17.85 16.03 17.85 13.78C17.85 13.64 17.84 13.5 17.81 13.34C18.31 13.11 18.67 12.6 18.67 12Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,h={name:"GithubIcon",props:{title:{type:String,default:"Github icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},f=Object(r.a)(h,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon github-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,g={name:"LifebuoyIcon",props:{title:{type:String,default:"Lifebuoy icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},_=Object(r.a)(g,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon lifebuoy-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19.79,15.41C20.74,13.24 20.74,10.75 19.79,8.59L17.05,9.83C17.65,11.21 17.65,12.78 17.06,14.17L19.79,15.41M15.42,4.21C13.25,3.26 10.76,3.26 8.59,4.21L9.83,6.94C11.22,6.35 12.79,6.35 14.18,6.95L15.42,4.21M4.21,8.58C3.26,10.76 3.26,13.24 4.21,15.42L6.95,14.17C6.35,12.79 6.35,11.21 6.95,9.82L4.21,8.58M8.59,19.79C10.76,20.74 13.25,20.74 15.42,19.78L14.18,17.05C12.8,17.65 11.22,17.65 9.84,17.06L8.59,19.79M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,v={name:"ClipboardSearchIcon",props:{title:{type:String,default:"Clipboard Search icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},m=Object(r.a)(v,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon clipboard-search-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.9 10.9C14.41 8.4 18.45 8.37 21 10.82V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.06C12.65 20.74 12.26 20.45 11.9 20.1C9.37 17.56 9.37 13.44 11.9 10.9M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M20.31 17.9C20.75 17.21 21 16.38 21 15.5C21 13 19 11 16.5 11S12 13 12 15.5 14 20 16.5 20C17.37 20 18.19 19.75 18.88 19.32L22 22.39L23.39 21L20.31 17.9M16.5 18C15.12 18 14 16.88 14 15.5S15.12 13 16.5 13 19 14.12 19 15.5 17.88 18 16.5 18Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,b={name:"FrequentlyAskedQuestionsIcon",props:{title:{type:String,default:"Frequently Asked Questions icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=Object(r.a)(b,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon frequently-asked-questions-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M18,15H6L2,19V3A1,1 0 0,1 3,2H18A1,1 0 0,1 19,3V14A1,1 0 0,1 18,15M23,9V23L19,19H8A1,1 0 0,1 7,18V17H21V8H22A1,1 0 0,1 23,9M8.19,4C7.32,4 6.62,4.2 6.08,4.59C5.56,5 5.3,5.57 5.31,6.36L5.32,6.39H7.25C7.26,6.09 7.35,5.86 7.53,5.7C7.71,5.55 7.93,5.47 8.19,5.47C8.5,5.47 8.76,5.57 8.94,5.75C9.12,5.94 9.2,6.2 9.2,6.5C9.2,6.82 9.13,7.09 8.97,7.32C8.83,7.55 8.62,7.75 8.36,7.91C7.85,8.25 7.5,8.55 7.31,8.82C7.11,9.08 7,9.5 7,10H9C9,9.69 9.04,9.44 9.13,9.26C9.22,9.08 9.39,8.9 9.64,8.74C10.09,8.5 10.46,8.21 10.75,7.81C11.04,7.41 11.19,7 11.19,6.5C11.19,5.74 10.92,5.13 10.38,4.68C9.85,4.23 9.12,4 8.19,4M7,11V13H9V11H7M13,13H15V11H13V13M13,4V10H15V4H13Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,S={components:{Navbar:i.a,AlgoliaSearchBox:s.a,ClipboardListIcon:o,SourceForkIcon:c,DiscordIcon:d,RedditIcon:u,GithubIcon:f,LifebuoyIcon:_,ClipboardSearchIcon:m,FaqIcon:y},computed:{data:function(){return this.$page.frontmatter},algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},A=(a(668),Object(r.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container help-page"},[a("Navbar"),t._v(" "),a("main",{staticClass:"page"},[a("div",{staticClass:"theme-custom-content content__default"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-custom-content"}),t._v(" "),a("Content",{attrs:{"slot-key":"center"}}),t._v(" "),a("AlgoliaSearchBox",{attrs:{options:t.algolia}}),t._v(" "),t.data.help&&t.data.help.length?a("div",{staticClass:"row help"},t._l(t.data.help,(function(e,i){return a("div",{key:i,staticClass:"column helpItem"},[e.link?a("a",{attrs:{href:e.link,tabindex:"1"}},[a("div",{staticClass:"card",class:"card__"+e.title},[e.faq?a("header",[a("FaqIcon"),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):e.fixProblems?a("header",[a("ClipboardSearchIcon"),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):e.guides?a("header",[a("ClipboardListIcon"),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):e.forks?a("header",[a("SourceForkIcon"),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):e.contribution?a("header",[a("LifebuoyIcon"),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):e.icon?a("header",[a("MaterialIcon",{attrs:{icon:e.icon,"icon-only":""}}),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):t._e(),t._v(" "),a("p",[t._v(t._s(e.description))])])]):e.linkExt?a("a",{attrs:{href:e.linkExt,target:"_blank",rel:"noreferrer",tabindex:"1"}},[a("div",{staticClass:"card",class:"card__"+e.title},[e.discord?a("header",[a("DiscordIcon"),t._v(" "),a("span",[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("OutboundLink")],1)],1):e.reddit?a("header",[a("RedditIcon"),t._v(" "),a("span",[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("OutboundLink")],1)],1):e.github?a("header",[a("GithubIcon"),t._v(" "),a("span",[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("OutboundLink")],1)],1):e.icon?a("header",[a("MaterialIcon",{attrs:{icon:e.icon,"icon-only":""}}),t._v(" "),a("h3",[t._v(t._s(e.title))])],1):t._e(),t._v(" "),a("p",[t._v(t._s(e.description))])])]):t._e()])})),0):t._e(),t._v(" "),t._t("bottom")],2)])],1)}),[],!1,null,null,null));e.default=A.exports}}]);