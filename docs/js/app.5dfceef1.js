(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b1f":function(t,e,a){},"1d5f":function(t,e,a){},"4b11":function(t,e,a){"use strict";a("ec00")},"505b":function(t,e,a){"use strict";a("d044")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("loading",{attrs:{active:t.loading,color:"#fff",height:64,width:64,"background-color":"#000"}}),a("app-header",{attrs:{scrolled:t.scrolled,loading:t.loading}}),a("section",{staticClass:"body-content"},[a("router-view",{attrs:{courses:t.courses,departments:t.departments,tags:t.tags,keywords:t.keywords}})],1),a("app-footer")],1)},r=[],i=(a("96cf"),a("1da1")),o=(a("bcc3"),a("e40d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header",class:{"header-scrolled":t.scrolled}},[a("div",{staticClass:"header-content"},[a("div",{staticClass:"logo"},[a("div",{staticClass:"logo-drawing-container"},[a("div",{ref:"logo",staticClass:"logo-drawing"},[a("img",{staticClass:"logo-image",attrs:{src:"kaist_logo.png"}})])]),t._m(0)]),a("div",{staticClass:"header-menu"},[a("router-link",{staticClass:"header-menu-item",attrs:{to:"/"}},[t._v(" Home ")])],1)])])}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-text"},[t._v(" KAIST"),a("br"),a("small",[t._v("Artificial Intelligence")])])}],l={name:"AppHeader",props:{scrolled:Boolean},data:function(){return{}},mounted:function(){},watch:{scrolled:function(){}}},u=l,d=(a("de1f"),a("2877")),p=Object(d["a"])(u,o,c,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer-inner"},[a("div",{staticClass:"footer-item"},[a("div",{staticClass:"footer-text"},[t._v(" © Copyright "+t._s((new Date).getFullYear())+" | KAIST ")]),a("div",{staticClass:"footer-text"},[t._v(" KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea ")])]),t._m(0)])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-item"},[a("div",{staticClass:"footer-text"},[a("a",{attrs:{href:"https://github.com/kaist-ai-web/kaist-ai-web.github.io"}},[t._v(" Repository for this Website ")]),t._v(" | "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1gz4QcnYhpqOpFjQoOktKb_E9-hfBGdA45y-M6OIQnM4/edit?usp=sharing"}},[t._v(" Edit Content ")])])])}],h={name:"AppFooter",props:{scrolled:Boolean}},m=h,b=(a("7886"),Object(d["a"])(m,f,g,!1,null,null,null)),_=b.exports,y=a("9062"),C=a.n(y),w=(a("4de4"),a("d81d"),a("d3b7"),a("ac1f"),a("1276"),a("498a"),a("ddb0"),a("b85c")),k=(a("99af"),a("a15b"),a("d4ec")),O=a("bee2"),j="https://sheets.googleapis.com/v4/spreadsheets",x=function(){function t(){Object(k["a"])(this,t),this.key=null}return Object(O["a"])(t,[{key:"validateKey",value:function(){if(null===this.key)throw Error("Use setKey(key) method to set API key for using Google API first.")}},{key:"setKey",value:function(t){this.key=t}},{key:"getContent",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,s){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.validateKey(),n="".concat(j,"/").concat(e,"/values/").concat(a,"!").concat(s,"?key=").concat(this.key),t.next=4,fetch(n);case 4:return r=t.sent,t.abrupt("return",r.json());case 6:case"end":return t.stop()}}),t,this)})));function e(e,a,s){return t.apply(this,arguments)}return e}()},{key:"getRanges",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.validateKey(),s=a.map((function(t){return"ranges=".concat(encodeURI(t))})).join("&"),n="".concat(j,"/").concat(e,"/values:batchGet?").concat(s,"&key=").concat(this.key),t.next=5,fetch(n);case 5:return r=t.sent,t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()}]),t}(),T=new x,A="1gz4QcnYhpqOpFjQoOktKb_E9-hfBGdA45y-M6OIQnM4",S="AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs";function K(){return D.apply(this,arguments)}function D(){return D=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,s,n,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=["Courses!A2:L","Departments!A2:B","Tags!A2:D","Keywords!A2:C"],t.next=3,T.getRanges(A,e);case 3:return a=t.sent,s=a.valueRanges,n=E(s[0].values),r=I(s[1].values),i=R(s[2].values),o=$(s[3].values),t.abrupt("return",{courses:n,departments:r,tags:i,keywords:o});case 10:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}function E(t){var e,a=[],s=Object(w["a"])(t);try{for(s.s();!(e=s.n()).done;){var n=e.value;a.push({department:n[0],code:n[1],title:n[2],instructor:n[3],student:n[4],description:n[5],content:n[6],prerequisite:n[7],application:n[8],misc:n[9],studentTags:(n[10]||"").split(",").filter((function(t){return""!==t.trim()})),applicationTags:(n[11]||"").split(",").filter((function(t){return""!==t.trim()}))})}}catch(r){s.e(r)}finally{s.f()}return a}function I(t){var e,a={},s=Object(w["a"])(t);try{for(s.s();!(e=s.n()).done;){var n=e.value;a[n[0]]={title:n[0],color:n[1]}}}catch(r){s.e(r)}finally{s.f()}return a}function R(t){var e,a={},s=Object(w["a"])(t);try{for(s.s();!(e=s.n()).done;){var n=e.value,r=n[0];a[r]||(a[r]={}),a[r][n[1]]={title:n[1],color:n[2],description:n[3]}}}catch(i){s.e(i)}finally{s.f()}return a}function $(t){var e,a={},s=Object(w["a"])(t);try{for(s.s();!(e=s.n()).done;){var n=e.value;a[n[0]]={title:n[0],tokens:(n[1]||"").split(",").map((function(t){return t.trim()})).filter((function(t){return""!==t})),color:n[2]}}}catch(r){s.e(r)}finally{s.f()}return a}T.setKey(S);var P={name:"App",components:{AppHeader:v,AppFooter:_,Loading:C.a},data:function(){return{scrolled:!1,loading:!1,courses:[],departments:{},tags:{},keywords:{}}},created:function(){this.loadData()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{loadData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,K();case 3:a=e.sent,t.courses=a.courses,t.departments=a.departments,t.tags=a.tags,t.keywords=a.keywords,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},handleScroll:function(){var t=window.scrollY,e=30;!this.scrolled&&t>e?this.scrolled=!0:this.scrolled&&t<=e&&(this.scrolled=!1)}}},M=P,F=Object(d["a"])(M,n,r,!1,null,null,null),Q=F.exports,B=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"courses header-padded"},[a("div",{staticClass:"row"},[a("div",{staticClass:"container"},[a("div",{staticClass:"v-padded"},[a("h3",{staticClass:"row-title"},[t._v("AI Courses @ KAIST")]),a("filter-selector",{attrs:{title:"학과",tags:t.departments},model:{value:t.activeDepartment,callback:function(e){t.activeDepartment=e},expression:"activeDepartment"}}),a("filter-selector",{attrs:{title:"대상 학생",tags:t.tags.student},model:{value:t.activeStudentTag,callback:function(e){t.activeStudentTag=e},expression:"activeStudentTag"}}),a("filter-selector",{attrs:{title:"응용/이론",tags:t.tags.application},model:{value:t.activeApplicationTag,callback:function(e){t.activeApplicationTag=e},expression:"activeApplicationTag"}}),a("filter-selector",{attrs:{title:"키워드",tags:t.keywords},model:{value:t.activeKeyword,callback:function(e){t.activeKeyword=e},expression:"activeKeyword"}})],1),t._l(t.visibleCourses,(function(e,s){return a("course-card",{key:s,attrs:{course:e,departments:t.departments,tags:t.tags}})}))],2)])])},q=[],Y=(a("a4d3"),a("e01a"),a("caad"),a("13d5"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"course-card"},[a("div",{staticClass:"card-top"},[a("div",{staticClass:"department"},[a("div",{staticClass:"tag",style:t.departmentTagStyle},[t._v(" "+t._s(t.course.department)+" ")])]),a("div",{staticClass:"title"},[t._v(t._s(t.course.title))]),a("div",{staticClass:"code"},[t._v(t._s(t.course.code))])]),a("div",{staticClass:"card-bottom"},[a("div",{staticClass:"tags"},[t._l(t.course.studentTags,(function(e,s){return a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tags.student[e].description,expression:"tags.student[tag].description"}],key:s,staticClass:"tag small"},[t._v(" "+t._s(e)+" ")])})),t._l(t.course.applicationTags,(function(e,s){return a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tags.application[e].description,expression:"tags.application[tag].description"}],key:s,staticClass:"tag small"},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"instructor"},[t._v(t._s(t.course.instructor))]),a("a",{staticClass:"card-button small full-width",on:{click:t.showDetails}},[t._v(" 자세히 보기 ")])]),a("modal",{staticClass:"modal",attrs:{name:"modal-"+t.course.title}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"department"},[a("div",{staticClass:"tag",style:t.departmentTagStyle},[t._v(t._s(t.course.department))])]),a("div",{staticClass:"title"},[t._v(t._s(t.course.title))]),a("div",{staticClass:"code"},[t._v(t._s(t.course.code))]),a("div",{staticClass:"instructor"},[t._v(t._s(t.course.instructor))]),a("div",{staticClass:"contents"},[a("div",{staticClass:"label"},[t._v(" 대상 학생 ")]),a("div",{staticClass:"text"},[t._v(" "+t._s(t.course.student)+" ")]),a("div",{staticClass:"label"},[t._v(" 과목의 취지 ")]),a("div",{staticClass:"text"},[t._v(" "+t._s(t.course.description)+" ")]),a("div",{staticClass:"label"},[t._v(" 학습 내용 ")]),a("div",{staticClass:"text"},[t._v(" "+t._s(t.course.content)+" ")]),a("div",{staticClass:"label"},[t._v(" 권장 선수과목 ")]),a("div",{staticClass:"text"},[t._v(" "+t._s(t.course.prerequisite)+" ")]),a("div",{staticClass:"label"},[t._v(" 비고 ")]),a("div",{staticClass:"text"},[t._v(" "+t._s(t.course.misc)+" ")])])])])],1)}),G=[],z=a("1881"),H=a.n(z),J=a("e37d");a("096e");s["a"].use(J["a"]),s["a"].use(H.a);var X={name:"course-card",props:{course:Object,departments:Object,tags:Object},methods:{showDetails:function(){this.$modal.show("modal-".concat(this.course.title))}},computed:{departmentTagStyle:function(){return{backgroundColor:(this.departments[this.course.department]||{}).color||"#444"}}}},N=X,U=(a("4b11"),Object(d["a"])(N,Y,G,!1,null,"138b9bb7",null)),V=U.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-selector v-tiny-padded"},[a("h4",{staticClass:"row-label"},[t._v(t._s(t.title))]),a("div",{staticClass:"link-buttons link-buttons-large"},[a("a",{staticClass:"tag",class:{active:null===t.value},on:{click:function(){return t.$emit("input",null)}}},[t._v(" 모두 보기 ")]),t._l(Object.keys(t.tags),(function(e){return a("a",{key:e,staticClass:"tag",class:{active:t.value===e},style:{backgroundColor:t.tags[e].color},on:{click:function(){return t.$emit("input",e)}}},[t._v(" "+t._s(t.tags[e].title)+" ")])}))],2)])},Z=[],tt={name:"tag-selector",props:{title:String,tags:Object,value:String}},et=tt,at=(a("505b"),Object(d["a"])(et,W,Z,!1,null,"13ee9f24",null)),st=at.exports,nt={name:"courses",components:{CourseCard:V,FilterSelector:st},props:{courses:Array,departments:Object,tags:Object,keywords:Object},data:function(){return{activeDepartment:null,activeStudentTag:null,activeApplicationTag:null,activeKeyword:null}},computed:{visibleCourses:function(){var t=this,e=this.activeDepartment,a=this.activeStudentTag,s=this.activeApplicationTag,n=this.activeKeyword;return this.courses.filter((function(r){var i=!0;if(null!==e&&r.department!==e&&(i=!1),null!==a&&(r.studentTags.includes(a)||(i=!1)),null!==s&&(r.applicationTags.includes(s)||(i=!1)),null!==n){var o=t.keywords[n].tokens,c=r.description.toLowerCase()+r.content.toLowerCase();o.map((function(t){return c.includes(t)})).reduce((function(t,e){return e||t}),!1)||(i=!1)}return i}))}}},rt=nt,it=(a("7ea0"),Object(d["a"])(rt,L,q,!1,null,"58d8cc02",null)),ot=it.exports;s["a"].use(B["a"]);var ct=new B["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ot}]});s["a"].config.productionTip=!1,new s["a"]({router:ct,render:function(t){return t(Q)}}).$mount("#app-container")},7886:function(t,e,a){"use strict";a("0b1f")},"7ea0":function(t,e,a){"use strict";a("1d5f")},"915e":function(t,e,a){},bcc3:function(t,e,a){},d044:function(t,e,a){},de1f:function(t,e,a){"use strict";a("915e")},ec00:function(t,e,a){}});
//# sourceMappingURL=app.5dfceef1.js.map