import{S as t,i as e,s as l,e as r,t as n,a as s,c as a,b as c,d as h,g as o,f,h as i,v as u,j as d,k as g,l as v,p as m,n as p}from"../index-197a2835.js";function E(t,e,l){const r=t.slice();return r[1]=e[l],r}function x(t,e,l){const r=t.slice();return r[4]=e[l],r}function y(t){let e,l=t[1].children,n=[];for(let e=0;e<l.length;e+=1)n[e]=A(x(t,l,e));return{c(){e=r("ol");for(let t=0;t<n.length;t+=1)n[t].c()},l(t){e=a(t,"OL",{});var l=c(e);for(let t=0;t<n.length;t+=1)n[t].l(l);l.forEach(f)},m(t,l){d(t,e,l);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,r){if(1&r){let s;for(l=t[1].children,s=0;s<l.length;s+=1){const a=x(t,l,s);n[s]?n[s].p(a,r):(n[s]=A(a),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=l.length}},d(t){t&&f(e),m(n,t)}}}function A(t){let e,l,s,o,m=t[4].text+"";return{c(){e=r("li"),l=r("a"),s=n(m),this.h()},l(t){e=a(t,"LI",{style:!0});var r=c(e);l=a(r,"A",{href:!0,class:!0});var n=c(l);s=h(n,m),n.forEach(f),r.forEach(f),this.h()},h(){i(l,"href",o="#"+t[4].id),i(l,"class","svelte-au67cy"),u(e,"font-size","1rem")},m(t,r){d(t,e,r),g(e,l),g(l,s)},p(t,e){1&e&&m!==(m=t[4].text+"")&&v(s,m),1&e&&o!==(o="#"+t[4].id)&&i(l,"href",o)},d(t){t&&f(e)}}}function L(t){let e,l,m,p,E,x,A=t[1].text+"",L=t[1].children&&y(t);return{c(){e=r("li"),l=r("a"),m=n(A),p=s(),L&&L.c(),x=s(),this.h()},l(t){e=a(t,"LI",{style:!0});var r=c(e);l=a(r,"A",{href:!0,class:!0});var n=c(l);m=h(n,A),p=o(n),L&&L.l(n),n.forEach(f),x=o(r),r.forEach(f),this.h()},h(){i(l,"href",E="#"+t[1].id),i(l,"class","svelte-au67cy"),u(e,"font-size","1.25rem")},m(t,r){d(t,e,r),g(e,l),g(l,m),g(l,p),L&&L.m(l,null),g(e,x)},p(t,e){1&e&&A!==(A=t[1].text+"")&&v(m,A),t[1].children?L?L.p(t,e):(L=y(t),L.c(),L.m(l,null)):L&&(L.d(1),L=null),1&e&&E!==(E="#"+t[1].id)&&i(l,"href",E)},d(t){t&&f(e),L&&L.d()}}}function T(t){let e,l,u,v,x,y,A=t[0],T=[];for(let e=0;e<A.length;e+=1)T[e]=L(E(t,A,e));return{c(){e=r("nav"),l=r("div"),u=r("span"),v=n("목차"),x=s(),y=r("ol");for(let t=0;t<T.length;t+=1)T[t].c();this.h()},l(t){e=a(t,"NAV",{class:!0});var r=c(e);l=a(r,"DIV",{});var n=c(l);u=a(n,"SPAN",{});var s=c(u);v=h(s,"목차"),s.forEach(f),x=o(n),y=a(n,"OL",{});var i=c(y);for(let t=0;t<T.length;t+=1)T[t].l(i);i.forEach(f),n.forEach(f),r.forEach(f),this.h()},h(){i(e,"class","svelte-au67cy")},m(t,r){d(t,e,r),g(e,l),g(l,u),g(u,v),g(l,x),g(l,y);for(let t=0;t<T.length;t+=1)T[t].m(y,null)},p(t,[e]){if(1&e){let l;for(A=t[0],l=0;l<A.length;l+=1){const r=E(t,A,l);T[l]?T[l].p(r,e):(T[l]=L(r),T[l].c(),T[l].m(y,null))}for(;l<T.length;l+=1)T[l].d(1);T.length=A.length}},i:p,o:p,d(t){t&&f(e),m(T,t)}}}function I(t,e,l){let{tocTree:r}=e;return t.$$set=t=>{"tocTree"in t&&l(0,r=t.tocTree)},[r]}export default class extends t{constructor(t){super(),e(this,t,I,T,l,{tocTree:0})}}