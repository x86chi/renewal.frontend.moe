import{S as s,i as t,s as e,E as r,e as a,F as l,k as o,f as n,l as c,b as i,C as f,B as h,z as y,G as m}from"../index-b5adf867.js";function u(s,t,e){const r=s.slice();return r[4]=t[e],r}function d(s,t,e){const r=s.slice();return r[7]=t[e],r}function v(s){let t,e;return{c(){t=r("line"),this.h()},l(s){t=l(s,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(t).forEach(n),this.h()},h(){c(t,"class","minor svelte-xt21sd"),c(t,"y1","42"),c(t,"y2","45"),c(t,"transform",e="rotate("+6*(s[4]+s[7])+")")},m(s,e){i(s,t,e)},d(s){s&&n(t)}}}function x(s){let t,e,y,m=[1,2,3,4],u=[];for(let t=0;t<4;t+=1)u[t]=v(d(s,m,t));return{c(){t=r("line");for(let s=0;s<4;s+=1)u[s].c();y=a(),this.h()},l(s){t=l(s,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(t).forEach(n);for(let t=0;t<4;t+=1)u[t].l(s);y=a(),this.h()},h(){c(t,"class","major svelte-xt21sd"),c(t,"y1","35"),c(t,"y2","45"),c(t,"transform",e="rotate("+30*s[4]+")")},m(s,e){i(s,t,e);for(let t=0;t<4;t+=1)u[t].m(s,e);i(s,y,e)},p:f,d(s){s&&n(t),h(u,s),s&&n(y)}}}function E(s){let t,e,a,m,d,v,E,g,$,p,w=[0,5,10,15,20,25,30,35,40,45,50,55],B=[];for(let t=0;t<12;t+=1)B[t]=x(u(s,w,t));return{c(){t=r("svg"),e=r("circle");for(let s=0;s<12;s+=1)B[s].c();a=r("line"),d=r("line"),E=r("g"),g=r("line"),$=r("line"),this.h()},l(s){t=l(s,"svg",{viewBox:!0,class:!0});var r=o(t);e=l(r,"circle",{class:!0,r:!0}),o(e).forEach(n);for(let s=0;s<12;s+=1)B[s].l(r);a=l(r,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(a).forEach(n),d=l(r,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(d).forEach(n),E=l(r,"g",{transform:!0});var c=o(E);g=l(c,"line",{class:!0,y1:!0,y2:!0}),o(g).forEach(n),$=l(c,"line",{class:!0,y1:!0,y2:!0}),o($).forEach(n),c.forEach(n),r.forEach(n),this.h()},h(){c(e,"class","clock-face svelte-xt21sd"),c(e,"r","48"),c(a,"class","hour svelte-xt21sd"),c(a,"y1","2"),c(a,"y2","-20"),c(a,"transform",m="rotate("+(30*s[2]+s[1]/2)+")"),c(d,"class","minute svelte-xt21sd"),c(d,"y1","4"),c(d,"y2","-30"),c(d,"transform",v="rotate("+(6*s[1]+s[0]/10)+")"),c(g,"class","second svelte-xt21sd"),c(g,"y1","10"),c(g,"y2","-38"),c($,"class","second-counterweight svelte-xt21sd"),c($,"y1","10"),c($,"y2","2"),c(E,"transform",p="rotate("+6*s[0]+")"),c(t,"viewBox","-50 -50 100 100"),c(t,"class","svelte-xt21sd")},m(s,r){i(s,t,r),y(t,e);for(let s=0;s<12;s+=1)B[s].m(t,null);y(t,a),y(t,d),y(t,E),y(E,g),y(E,$)},p(s,[t]){6&t&&m!==(m="rotate("+(30*s[2]+s[1]/2)+")")&&c(a,"transform",m),3&t&&v!==(v="rotate("+(6*s[1]+s[0]/10)+")")&&c(d,"transform",v),1&t&&p!==(p="rotate("+6*s[0]+")")&&c(E,"transform",p)},i:f,o:f,d(s){s&&n(t),h(B,s)}}}function g(s,t,e){let r,a,l,o=new Date;return m((()=>{const s=setInterval((()=>{e(3,o=new Date)}),1e3);return()=>{clearInterval(s)}})),s.$$.update=()=>{8&s.$$.dirty&&e(2,r=o.getHours()),8&s.$$.dirty&&e(1,a=o.getMinutes()),8&s.$$.dirty&&e(0,l=o.getSeconds())},[l,a,r,o]}class $ extends s{constructor(s){super(),t(this,s,g,E,e,{})}}export{$ as default};
