function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}let c,l=!1;function s(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function u(t,n){if(l){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const i=n[t].claim_order,a=(r>0&&n[e[r]].claim_order<=i?r+1:s(1,r,(t=>n[e[t]].claim_order),i))-1;o[t]=e[a]+1;const c=a+1;e[c]=t,r=Math.max(c,r)}const i=[],a=[];let c=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(i.push(n[t-1]);c>=t;c--)a.push(n[c]);c--}for(;c>=0;c--)a.push(n[c]);i.reverse(),a.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<a.length;n++){for(;e<i.length&&a[n].claim_order>=i[e].claim_order;)e++;const o=e<i.length?i[e]:null;t.insertBefore(a[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function f(t,n,e){l&&!e?u(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function _(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function $(){return p("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function w(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function k(t,n,e){return w(t,n,e,_)}function E(t,n,e){return w(t,n,e,m)}function N(t,n){return v(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>p(n)),!0)}function S(t){return N(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function M(t,n){t.value=null==n?"":n}function j(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function B(t,n,e){t.classList[e?"add":"remove"](n)}function C(t){c=t}function T(t){(function(){if(!c)throw new Error("Function called outside component initialization");return c})().$$.on_mount.push(t)}const I=[],L=[],O=[],P=[],q=Promise.resolve();let z=!1;function D(t){O.push(t)}const F=new Set;let H=0;function G(){const t=c;do{for(;H<I.length;){const t=I[H];H++,C(t),J(t.$$)}for(C(null),I.length=0,H=0;L.length;)L.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];F.has(n)||(F.add(n),n())}O.length=0}while(I.length);for(;P.length;)P.pop()();z=!1,F.clear(),C(t)}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const W=new Set;let K;function Q(){K={r:0,c:[],p:K}}function R(){K.r||o(K.c),K=K.p}function U(t,n){t&&t.i&&(W.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),K.c.push((()=>{W.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function X(t,n){V(t,1,1,(()=>{n.delete(t.key)}))}function Y(t,n,e,o,r,i,a,c,l,s,u,f){let d=t.length,h=i.length,_=d;const m={};for(;_--;)m[t[_].key]=_;const p=[],g=new Map,$=new Map;for(_=h;_--;){const t=f(r,i,_),c=e(t);let l=a.get(c);l?o&&l.p(t,n):(l=s(c,t),l.c()),g.set(c,p[_]=l),c in m&&$.set(c,Math.abs(_-m[c]))}const y=new Set,b=new Set;function x(t){U(t,1),t.m(c,u),a.set(t.key,t),u=t.first,h--}for(;d&&h;){const n=p[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(u=n.first,d--,h--):g.has(r)?!a.has(o)||y.has(o)?x(n):b.has(r)?d--:$.get(o)>$.get(r)?(b.add(o),x(n)):(y.add(r),d--):(l(e,a),d--)}for(;d--;){const n=t[d];g.has(n.key)||l(n,a)}for(;h;)x(p[h-1]);return p}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,e,i,a){const{fragment:c,on_mount:l,on_destroy:s,after_update:u}=t.$$;c&&c.m(e,i),a||D((()=>{const e=l.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(D)}function et(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(I.push(t),z||(z=!0,q.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,r,i,a,s,u,f,h=[-1]){const _=c;C(n);const m=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(_?_.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:r.target||_.$$.root};f&&f(m.root);let p=!1;if(m.ctx=i?i(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&ot(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),r.target){if(r.hydrate){l=!0;const t=x(r.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();r.intro&&U(n.$$.fragment),nt(n,r.target,r.anchor,r.customElement),l=!1,G()}C(_)}class it{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{B as A,u as B,A as C,h as D,m as E,E as F,T as G,y as H,o as I,M as J,it as S,x as a,b,k as c,d,_ as e,f,R as g,V as h,rt as i,$ as j,Z as k,tt as l,nt as m,et as n,Q as o,X as p,t as q,a as r,i as s,U as t,Y as u,p as v,g as w,N as x,S as y,j as z};
