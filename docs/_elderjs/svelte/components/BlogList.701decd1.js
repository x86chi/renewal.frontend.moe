import{S as t,i as s,s as e,e as l,c as a,a as n,b as r,m as o,t as i,d as f,f as h,g,h as c,j as u,k as m,l as p,u as $,n as d,o as b,p as j}from"../index-b5adf867.js";import _ from"./BlogTeaser.0353c14a.js";import"../tag-18524ea2.js";function x(t,s,e){const l=t.slice();return l[1]=s[e],l}function k(t,s){let e,c,u;return c=new _({props:{blog:s[1]}}),{key:t,first:null,c(){e=l(),a(c.$$.fragment),this.h()},l(t){e=l(),n(c.$$.fragment,t),this.h()},h(){this.first=e},m(t,s){r(t,e,s),o(c,t,s),u=!0},p(t,e){s=t;const l={};1&e&&(l.blog=s[1]),c.$set(l)},i(t){u||(i(c.$$.fragment,t),u=!0)},o(t){f(c.$$.fragment,t),u=!1},d(t){t&&h(e),g(c,t)}}}function v(t){let s,e,l=[],a=new Map,n=t[0];const o=t=>t[1].frontmatter.title;for(let s=0;s<n.length;s+=1){let e=x(t,n,s),r=o(e);a.set(r,l[s]=k(r,e))}return{c(){s=c("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){s=u(t,"UL",{class:!0});var e=m(s);for(let t=0;t<l.length;t+=1)l[t].l(e);e.forEach(h),this.h()},h(){p(s,"class","entries svelte-3diyp8")},m(t,a){r(t,s,a);for(let t=0;t<l.length;t+=1)l[t].m(s,null);e=!0},p(t,[e]){1&e&&(n=t[0],b(),l=$(l,e,o,1,t,n,a,s,j,k,null,x),d())},i(t){if(!e){for(let t=0;t<n.length;t+=1)i(l[t]);e=!0}},o(t){for(let t=0;t<l.length;t+=1)f(l[t]);e=!1},d(t){t&&h(s);for(let t=0;t<l.length;t+=1)l[t].d()}}}function w(t,s,e){let{blog_list:l}=s;return t.$$set=t=>{"blog_list"in t&&e(0,l=t.blog_list)},[l]}class y extends t{constructor(t){super(),s(this,t,w,v,e,{blog_list:0})}}export{y as default};
