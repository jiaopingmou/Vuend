webpackJsonp([4],{203:function(t,e,n){t.exports=n(254)},218:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([a]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},219:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(220),i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),d=null,s=0,c=!1,l=function(){},v=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(b(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(b(n.parts[a]));i[n.id]={id:n.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function b(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var a=s++;r=d||(d=_()),e=m.bind(null,r,a,!1),n=m.bind(null,r,a,!0)}else r=_(),e=function(t,e){var n=e.css,r=e.media,a=e.sourceMap;r&&t.setAttribute("media",r);v.ssrId&&t.setAttribute(f,e.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,v=r||{};var o=a(t,e);return u(o),function(e){for(var n=[],r=0;r<o.length;r++){var d=o[r];(s=i[d.id]).refs--,n.push(s)}e?u(o=a(t,e)):o=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var h,g=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function m(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}},220:function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=i[0],d={id:t+":"+a,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(d):n.push(r[o]={id:o,parts:[d]})}return n}},254:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(257);var a=function(t){n(255)},i=n(0)(null,r.a,!1,a,"data-v-7b4cff64",null);e.default=i.exports},255:function(t,e,n){var r=n(256);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(219)("29b33784",r,!0,{})},256:function(t,e,n){(t.exports=n(218)(!1)).push([t.i,".end-popup[data-v-7b4cff64]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20181011;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .35s ease;transition:all .35s ease;opacity:0;background:rgba(0,0,0,.5)}.end-popup .popup[data-v-7b4cff64]{width:7.5rem;border-radius:.1875rem;-ms-border-radius:.1875rem;-webkit-transition:all .35s ease;transition:all .35s ease;-webkit-transform:scale(1.3);transform:scale(1.3);color:#666;background:#fff;overflow:hidden}.end-popup .popup .popup-body[data-v-7b4cff64],.end-popup .popup .pupup-buttons[data-v-7b4cff64]{padding:.3125rem}.end-popup .popup .popup-head[data-v-7b4cff64]{padding:.15625rem .3125rem;border-bottom:1px solid #f5f5f5;text-align:center;background:-webkit-gradient(linear,left top,left bottom,from(0),color-stop(#f5f5f5),color-stop(#fff),to(#fff));background:linear-gradient(0,#f5f5f5,#fff,#fff)}.end-popup.active[data-v-7b4cff64]{opacity:1}.end-popup.active .popup[data-v-7b4cff64]{-webkit-transform:scale(1);transform:scale(1)}h5[data-v-7b4cff64],h6[data-v-7b4cff64]{margin-bottom:.15625rem}h6[data-v-7b4cff64]{font-size:.375rem;font-weight:400}p[data-v-7b4cff64]{font-size:.3125rem}code[data-v-7b4cff64]{background:#f5f5f5;padding:.15625rem .3125rem;font-size:.3125rem}table[data-v-7b4cff64]{width:100%}table thead[data-v-7b4cff64]{background:#f5f5f5}table td[data-v-7b4cff64],table th[data-v-7b4cff64]{padding:.3125rem;border:1px solid #ccc;font-size:.3125rem;text-align:center!important}table td code[data-v-7b4cff64],table th code[data-v-7b4cff64]{background:#f5f5f5;padding:.07812rem;border-radius:.1875rem;-ms-border-radius:.1875rem;font-size:.3125rem}table tr[data-v-7b4cff64]:nth-child(2n){background:#f5f5f5}ul[data-v-7b4cff64]{padding-left:.78125rem}ul li[data-v-7b4cff64]{list-style:disc}",""])},257:function(t,e,n){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h5",[t._v("介绍")]),t._v(" "),n("h6",[t._v("什么是vuend？")]),t._v(" "),n("p",[t._v("一个基于vue.js的UI框架，用于快速构建移动端应用（初出茅庐，小试牛刀）"),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/SkinsTY/Vuend"}},[t._v("https://github.com/SkinsTY/Vuend")]),n("br"),t._v(" "),n("br")]),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("h4",[t._v("安装 Install")]),t._v(" "),n("p",[t._v("npm install vuend -D")]),t._v(" "),n("br"),t._v(" "),n("h4",[t._v("本项目采用了rem可伸缩布局方案 lib-flexible，所以得安装 lib-flexible")]),t._v(" "),n("p",[t._v("npm install lib-flexible -D")]),t._v(" "),n("br"),t._v(" "),n("h4",[t._v("main.js导入使用css")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-javascriptimport"}},[t._v("import vuend from 'vuend'\nimport 'vuend/dist/vuend.min.css'\nimport 'lib-flexible'\n\nVue.use(vuend)\n")])]),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("h4",[t._v("2018-10-12 更新1.0.1版本")]),t._v(" "),n("h5",[t._v("vuend 组件")]),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("组件名称")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("组件标签")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("EndButton")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-button></end-button>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("按钮")])]),t._v(" "),n("tr",[n("td",[t._v("EndRadio")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-radio></end-radio>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("单选框")])]),t._v(" "),n("tr",[n("td",[t._v("EndLayout")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-row></end-row>")]),n("br"),n("code",{pre:!0},[t._v("<end-col></end-col>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("flexbox弹性布局")])]),t._v(" "),n("tr",[n("td",[t._v("EndInput")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-input></end-input>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("文本框")])]),t._v(" "),n("tr",[n("td",[t._v("EndToggle")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-toggle></end-toggle>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("开关按钮")])]),t._v(" "),n("tr",[n("td",[t._v("EndCheckbox")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-checkbox></end-checkbox>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("复选框")])]),t._v(" "),n("tr",[n("td",[t._v("EndList")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-list></end-list>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("列表")])]),t._v(" "),n("tr",[n("td",[t._v("EndSearch")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-search></end-search>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("搜索")])]),t._v(" "),n("tr",[n("td",[t._v("EndTextarea")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-textarea></end-textarea>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("文本域")])]),t._v(" "),n("tr",[n("td",[t._v("EndTabs")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-tabs></end-tabs>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("选项卡")])]),t._v(" "),n("tr",[n("td",[t._v("EndSelect")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[t._v("<end-select></end-select>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("选择列表")])])])]),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("h5",[t._v("vuend 服务")]),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("服务名称（全局变量）")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("$toast")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("文字提示")])]),t._v(" "),n("tr",[n("td",[t._v("$dialog")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("对话框")])]),t._v(" "),n("tr",[n("td",[t._v("$loading")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("加载提示")])])])]),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("h4",[t._v("Thanks to")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/wangdahoo/vonic"}},[t._v("voinc")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/ElemeFE/element"}},[t._v("element")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/kitorv/vue-ui-docs"}},[t._v("vue-ui-docs")])])])])}]};e.a=r}});