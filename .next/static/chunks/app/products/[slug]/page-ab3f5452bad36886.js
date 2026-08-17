(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{5833:function(e,t,r){Promise.resolve().then(r.bind(r,4942)),Promise.resolve().then(r.t.bind(r,231,23))},4942:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(7437),i=r(2265),a=r(3231),s=r(1976),l=r(6780);function o(e){let{product:t,productName:r}=e,[o,c]=(0,i.useState)("idle"),[u,d]=(0,i.useState)("");async function m(e){e.preventDefault(),c("loading"),d("");let r=e.currentTarget,n=Object.fromEntries(new FormData(r).entries());try{let e=await fetch("/api/waitlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,product:t})});if(422===e.status){c("error"),d("Enter a valid email address.");return}if(!e.ok)throw Error("Request failed");c("success"),r.reset()}catch(e){c("error"),d("Something went wrong. Please try again.")}}return"success"===o?(0,n.jsxs)("div",{className:"flex items-start gap-2.5 rounded-xl border border-wire/30 bg-wire/5 px-4 py-3.5",children:[(0,n.jsx)(a.Z,{size:16,className:"mt-0.5 shrink-0 text-wire"}),(0,n.jsxs)("p",{className:"text-[13.5px] leading-relaxed text-ink-secondary",children:["You’re on the list. We’ll email you the moment"," ",r," is ready to show."]})]}):(0,n.jsxs)("form",{onSubmit:m,noValidate:!0,className:"flex flex-col gap-3",children:[(0,n.jsx)("input",{type:"text",name:"website",tabIndex:-1,autoComplete:"off",className:"hidden","aria-hidden":"true"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 sm:flex-row",children:[(0,n.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"you@email.com",className:"field-input flex-1","aria-label":"Email address"}),(0,n.jsxs)("button",{type:"submit",disabled:"loading"===o,className:"btn-primary justify-center whitespace-nowrap disabled:opacity-60",children:["loading"===o?"Joining…":"Notify me","loading"!==o&&(0,n.jsx)(s.Z,{size:15})]})]}),"error"===o&&u&&(0,n.jsxs)("p",{className:"flex items-center gap-1.5 text-[12.5px] text-red-400",children:[(0,n.jsx)(l.Z,{size:12})," ",u]})]})}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2265);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:c="",children:u,iconNode:d,...m}=e;return(0,n.createElement)("svg",{ref:t,...s,width:i,height:i,stroke:r,strokeWidth:o?24*Number(l)/Number(i):l,className:a("lucide",c),...m},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),o=(e,t)=>{let r=(0,n.forwardRef)((r,s)=>{let{className:o,...c}=r;return(0,n.createElement)(l,{ref:s,iconNode:t,className:a("lucide-".concat(i(e)),o),...c})});return r.displayName="".concat(e),r}},1976:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},6780:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},3231:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=5833)}),_N_E=e.O()}]);