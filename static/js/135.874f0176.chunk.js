"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{247:function(e,n,t){t.d(n,{DD:function(){return u},Eb:function(){return d},Hu:function(){return v},Pg:function(){return l},Ph:function(){return o}});var r=t(861),a=t(757),c=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="9428e4664dfc8e546cca40174948a810",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),a=t(439),c=t(757),s=t.n(c),i=t(791),u=t(689),o=t(87),l=t(247),d="MovieDetails_btn_back__qiK4i",v="MovieDetails_movie_card__9W8gh",p="MovieDetails_movie_name__LCWdR",f="MovieDetails_movie_details__hOZzX",h="MovieDetails_movie_genres_item__-BVQb",m=t(184),_=function(){var e,n,t,c=(0,u.UO)().movieId,_=(0,i.useState)(""),x=(0,a.Z)(_,2),g=x[0],w=x[1],k=(0,u.TH)(),j=(0,i.useRef)(null!==(e=null===(n=k.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Pg)(c);case 3:n=e.sent,w(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),console.log(g),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.rU,{className:d,to:j.current,children:"Go back"}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+g.backdrop_path,alt:"movie_picture",width:"320"}),(0,m.jsx)("h1",{className:p,children:g.original_title}),(0,m.jsxs)("h2",{className:f,children:["Rating: ",Math.round(g.vote_average)]}),(0,m.jsx)("h2",{className:f,children:"Overview:"}),(0,m.jsx)("p",{children:g.overview}),(0,m.jsx)("h2",{className:f,children:"Genres"}),(0,m.jsx)("ul",{children:null===(t=g.genres)||void 0===t?void 0:t.map((function(e){return(0,m.jsx)("li",{className:h,children:e.name},e.id)}))}),(0,m.jsx)("h2",{className:f,children:"Additional"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=135.874f0176.chunk.js.map