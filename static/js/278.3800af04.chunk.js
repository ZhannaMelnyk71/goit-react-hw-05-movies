"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{639:function(e,t,n){n.d(t,{Z:function(){return c}});n(791);var r=n(691),a="Loader_loader-wrapper__rDDXm",u=n(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})}},247:function(e,t,n){n.d(t,{DD:function(){return s},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="9428e4664dfc8e546cca40174948a810",s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},278:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(87),o=n(689),p=n(247),f=n(639),l=n(184);t.default=function(){var e,t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],v=n[1],d=(0,i.useState)(!1),h=(0,a.Z)(d,2),g=h[0],w=h[1],x=(0,s.lr)(),m=(0,a.Z)(x,2),y=m[0],k=m[1],Z=null!==(e=y.get("query"))&&void 0!==e?e:"",b=(0,o.TH)();return(0,i.useEffect)((function(){if(Z){w(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Ph)(Z);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),w(!1)}}),[y,Z]),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"text",value:Z,onChange:function(e){var t=e.target.value;if(""===t)return k({});k({query:t})}}),g&&(0,l.jsx)(f.Z,{}),(0,l.jsx)("ul",{children:u.map((function(e){var t=e.id,n=e.original_title;return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"".concat(t),state:{from:b},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=278.3800af04.chunk.js.map