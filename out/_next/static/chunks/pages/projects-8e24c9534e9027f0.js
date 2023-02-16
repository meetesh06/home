(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{78672:function(e,t,i){"use strict";i.d(t,{ZP:function(){return N}});var o=i(63366),n=i(87462),a=i(94780),r=i(73935),s=i(90948),d=i(71657),c=i(95408),l=i(98700),u=i(59766),h=i(30067),m=i(86010),f=i(67294),p=i(34867);function g(e){return(0,p.Z)("MuiMasonry",e)}(0,i(1588).Z)("MuiMasonry",["root"]);var v=i(85893);const x=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],b=e=>Number(e.replace("px","")),y={flexBasis:"100%",width:0,margin:0,padding:0},w=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(e.isSSR){const a={},r=b(t.spacing(e.defaultSpacing));for(let t=1;t<=e.defaultColumns;t+=1)a[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return o.height=e.defaultHeight,o.margin=-r/2,o["& > *"]=(0,n.Z)({},i["& > *"],a,{margin:r/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${r}px)`}),(0,n.Z)({},i,o)}const a=(0,c.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),r=(0,l.hB)(t);i=(0,u.Z)(i,(0,c.k9)({theme:t},a,(t=>{let i;if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t){const e=Number(t);i=(0,l.NA)(r,e)}else i=t;return(0,n.Z)({margin:`calc(0px - (${i} / 2))`,"& > *":{margin:`calc(${i} / 2)`}},e.maxColumnHeight&&{height:"number"===typeof i?Math.ceil(e.maxColumnHeight+b(i)):`calc(${e.maxColumnHeight}px + ${i})`})})));const s=(0,c.P$)({values:e.columns,breakpoints:t.breakpoints.values});return i=(0,u.Z)(i,(0,c.k9)({theme:t},s,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"string"===typeof a&&!Number.isNaN(Number(a))||"number"===typeof a?(0,l.NA)(r,Number(a)):"0px"})`}})))),"object"===typeof a&&(i=(0,u.Z)(i,(0,c.k9)({theme:t},a,((e,t)=>{if(t){const i=Number(e),o=Object.keys(s).pop(),n=(0,l.NA)(r,i);return{"& > *":{width:`calc(${`${(100/("object"===typeof s?s[t]||s[o]:s)).toFixed(2)}%`} - ${n})`}}}return null})))),i}));var N=f.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiMasonry"}),{children:s,className:c,component:l="div",columns:u=4,spacing:p=1,defaultColumns:N,defaultHeight:k,defaultSpacing:S}=i,M=(0,o.Z)(i,x),C=f.useRef(),[I,T]=f.useState(),Z=!I&&k&&void 0!==N&&void 0!==S,[L,_]=f.useState(Z?N-1:0),j=(0,n.Z)({},i,{spacing:p,columns:u,maxColumnHeight:I,defaultColumns:N,defaultHeight:k,defaultSpacing:S,isSSR:Z}),E=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},g,t)})(j),R=f.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((e=>{if(!C.current||!e||0===e.length)return;const t=C.current,i=C.current.firstChild,o=t.clientWidth,n=i.clientWidth;if(0===o||0===n)return;const a=window.getComputedStyle(i),s=b(a.marginLeft),d=b(a.marginRight),c=Math.round(o/(n+s+d)),l=new Array(c).fill(0);let u=!1;t.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||u)return;const t=window.getComputedStyle(e),i=b(t.marginTop),o=b(t.marginBottom),n=b(t.height)?Math.ceil(b(t.height))+i+o:0;if(0!==n){for(let t=0;t<e.childNodes.length;t+=1){const i=e.childNodes[t];if("IMG"===i.tagName&&0===i.clientHeight){u=!0;break}}if(!u){const t=l.indexOf(Math.min(...l));l[t]+=n;const i=t+1;e.style.order=i}}else u=!0})),u||(0,r.flushSync)((()=>{T(Math.max(...l)),_(c>0?c-1:0)}))})));f.useEffect((()=>{const e=R.current;if(void 0!==e)return C.current&&C.current.childNodes.forEach((t=>{e.observe(t)})),()=>e?e.disconnect():{}}),[u,p,s]);const $=(0,h.Z)(t,C),A=new Array(L).fill("").map(((e,t)=>(0,v.jsx)("span",{"data-class":"line-break",style:(0,n.Z)({},y,{order:t+1})},t)));return(0,v.jsxs)(w,(0,n.Z)({as:l,className:(0,m.Z)(E.root,c),ref:$,ownerState:j},M,{children:[s,A]}))}))},9182:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(81042)}])},54496:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var o=i(85893),n=i(9008),a=i.n(n),r=i(78672),s=i(10443),d=i(21121);function c(e){var t=e.title,i=e.description,n=e.gridInfo,c=e.content;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"description",content:i})]}),(0,o.jsx)(r.ZP,{component:d.E.div,initial:"hidden",animate:"show",exit:"out",variants:{hidden:{opacity:0,scale:.9},show:{opacity:1,scale:1,transition:{duration:.3}},out:{opacity:0,scale:.9,transition:{duration:.3}}},columns:n,spacing:0,children:c.map((function(e,t){return(0,o.jsx)(s.Z,{title:e.title,links:e.links,index:e.index,imageUri:e.imageUri,href:e.href,id:e.id,text:e.text,textList:e.textList,created:e.created},"home-".concat(t))}))})]})}},81042:function(e,t,i){"use strict";i.r(t),i.d(t,{config:function(){return a},default:function(){return d}});var o=i(85893),n=i(54496),a={disable:!1},r={xs:1,sm:1,md:3,lg:3},s=[{title:"This Site Generator",links:[["https://github.com/meetesh06/easyNextBlog","easyNextBlog"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I was tired of plain looking slow websites/blogs, so decided to make something that is fast and modern.",textList:[["React",""],["NextJS",""]],created:void 0},{title:"The XOPE Programming Language",links:[["https://github.com/meetesh06/xope_4.2","xope"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"This was part of my final year B. Tech project where the aim was to create a simple easy to use language. The entire parser/code generator is written 100% in C and produces x86_64 compatible assembly code.",textList:[["C",""],["X86_64 Assemble",""],["NASM",""]],created:void 0},{title:"MoodleMan",links:[["https://github.com/meetesh06/MoodleMan","MoodleMan"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Simple utility written in python to manage moodle submissions, made it when I was a TA for the CS 502 (Compiler Design) course at IIT Mandi.",textList:[["Python",""]],created:void 0},{title:"Vasco points to debugger",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Made a debugger for the vasco framework to visualize the points to graph generation in Java programs, this was made as a mini project for the CS 611 (Program Analysis) course. The link is currently private, but should be able to share if interested.",textList:[["Java, Jimple",""],["React",""]],created:void 0},{title:"React Native projects",links:[["https://github.com/meetesh06/Ecommerce-React-Native-Sample-Application","ecommerce"],["https://github.com/meetesh06/CampusStory","CampusStory"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"Have made a lot of React Native apps. The interesting one is Campus Story which was made as an effort to improve the communication channel between institutions students.",textList:[["React Native",""],["ffmpeg",""]],created:void 0},{title:"LLVM offline analysis framework",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"This is part of my research tenure at IIT Mandi, I should update it and make it open source after all the formalities are completed. This is a framework that allows for offline analysis and processing of contextually specialized JIT binaries. This is all that can be put here currently ;)",textList:[["C++",""],["LLVM",""]],created:void 0},{title:"Hackintosh",links:[["https://github.com/meetesh06/Avita-Liber-v14-EFI","avita"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I love the idea of hacking software to run in places where its not supposed to :) I dabble in hackintosh from time to time and have some EFI configs for some laptops that I have handy.",textList:[["ACPI (iASL)",""]],created:void 0},{title:"ElasticSearch",links:[["https://github.com/meetesh06/starter_project_es_node_react_mongodb","starter"]],index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I was a intern for a short time for JPTokyo during my B Tech and made this starter template for a elastic search based project.",textList:[["Elasticsearch",""],["node",""],["mongodb",""],["React",""]],created:void 0},{title:"A Lot more",links:void 0,index:void 0,imageUri:void 0,href:void 0,id:void 0,text:"I usually do a lot more things, especially in electronics that I don't put here. I am not really a electronics engineer but I like to get to the hardware whenever I get a chance.",textList:void 0,created:void 0}];function d(){return(0,o.jsx)(n.Z,{title:"Interesting Projects \ud83c\udff4\u200d\u2620\ufe0f \ud83c\udff4\u200d\u2620\ufe0f \ud83c\udff4\u200d\u2620\ufe0f",description:"Hey there! I'm a research scholar @IIT Mandi working in the area of compilers.",gridInfo:r,content:s})}}},function(e){e.O(0,[774,888,179],(function(){return t=9182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);