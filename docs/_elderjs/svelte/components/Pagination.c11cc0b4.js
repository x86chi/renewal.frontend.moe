import{S as s,i as e,s as a,e as r,v as l,w as t,c as h,a as n,x as i,y as c,d as u,b as o,f as p,B as f,C as g,q as m}from"../index-0aee59f4.js";function d(s){let e,a,t;return{c(){e=r("a"),a=l("‹"),this.h()},l(s){e=h(s,"A",{href:!0,class:!0});var r=n(e);a=i(r,"‹"),r.forEach(u),this.h()},h(){o(e,"href",t=s[1].permalinks.blog(s[0].previousPage)),o(e,"class","prev")},m(s,r){p(s,e,r),f(e,a)},p(s,a){3&a&&t!==(t=s[1].permalinks.blog(s[0].previousPage))&&o(e,"href",t)},d(s){s&&u(e)}}}function v(s){let e,a,t;return{c(){e=r("a"),a=l("›"),this.h()},l(s){e=h(s,"A",{href:!0,class:!0});var r=n(e);a=i(r,"›"),r.forEach(u),this.h()},h(){o(e,"href",t=s[1].permalinks.blog(s[0].nextPage)),o(e,"class","next")},m(s,r){p(s,e,r),f(e,a)},p(s,a){3&a&&t!==(t=s[1].permalinks.blog(s[0].nextPage))&&o(e,"href",t)},d(s){s&&u(e)}}}function P(s){let e,a,P,x,b,q,k=s[0].page+"",E=s[0].lastPage+"",A=s[0].hasPrevious&&d(s),N=s[0].hasNext&&v(s);return{c(){e=r("div"),A&&A.c(),a=l("\n  Page "),P=l(k),x=l(" / "),b=l(E),q=t(),N&&N.c(),this.h()},l(s){e=h(s,"DIV",{class:!0});var r=n(e);A&&A.l(r),a=i(r,"\n  Page "),P=i(r,k),x=i(r," / "),b=i(r,E),q=c(r),N&&N.l(r),r.forEach(u),this.h()},h(){o(e,"class","pagination")},m(s,r){p(s,e,r),A&&A.m(e,null),f(e,a),f(e,P),f(e,x),f(e,b),f(e,q),N&&N.m(e,null)},p(s,[r]){s[0].hasPrevious?A?A.p(s,r):(A=d(s),A.c(),A.m(e,a)):A&&(A.d(1),A=null),1&r&&k!==(k=s[0].page+"")&&g(P,k),1&r&&E!==(E=s[0].lastPage+"")&&g(b,E),s[0].hasNext?N?N.p(s,r):(N=v(s),N.c(),N.m(e,null)):N&&(N.d(1),N=null)},i:m,o:m,d(s){s&&u(e),A&&A.d(),N&&N.d()}}}function x(s,e,a){let{request:r,helpers:l}=e;return s.$$set=s=>{"request"in s&&a(0,r=s.request),"helpers"in s&&a(1,l=s.helpers)},[r,l]}class b extends s{constructor(s){super(),e(this,s,x,P,a,{request:0,helpers:1})}}export{b as default};
