"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{3227:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7378),l=n(8944),r=n(1123),o=n(5484),i=n(412),c=n(5228),s=n(5532),m=n(5773),u=n(9213),d=n(4022);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:l,description:o,date:c,tags:s,authors:m,frontMatter:u}=n,{keywords:d}=u,g=null!=(e=t.image)?e:u.image;return a.createElement(r.d,{title:l,description:o,keywords:d,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var f=n(7061);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:v,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(f.default,{toc:r,minHeadingLevel:v,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(v,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},7061:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(5773),l=n(7378),r=n(8944),o=n(7148);const i="tableOfContents_XG6w";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7148:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),l=n(7378),r=n(624),o=n(6934),i=n(1344);function c(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const s=l.memo(c);function m(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:d,...g}=e;const v=(0,r.L)(),f=null!=u?u:v.tableOfContents.minHeadingLevel,p=null!=d?d:v.tableOfContents.maxHeadingLevel,h=(0,o.b)({toc:t,minHeadingLevel:f,maxHeadingLevel:p}),b=(0,l.useMemo)((()=>{if(c&&m)return{linkClassName:c,linkActiveClassName:m,minHeadingLevel:f,maxHeadingLevel:p}}),[c,m,f,p]);return(0,i.S)(b),l.createElement(s,(0,a.Z)({toc:h,className:n,linkClassName:c},g))}},1344:(e,t,n)=>{n.d(t,{S:()=>c});var a=n(7378),l=n(624);function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function o(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>r(e).top>=a));if(l){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(l))?l:null!=(o=e[e.indexOf(l)-1])?o:null}return null!=(n=e[e.length-1])?n:null}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,a.useRef)(void 0),n=i();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=o(c,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}},6934:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>i});var a=n(7378);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function r(e){return(0,a.useMemo)((()=>l(e)),[e])}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}},4022:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7378),l=n(8944),r=n(5268),o=n(8896),i=n(728);function c(e){let{permalink:t,title:n,isNext:c}=e;return a.createElement(i.Z,{className:(0,l.Z)("grow",c&&"text-right"),weight:"bold",to:t},!c&&a.createElement(o.Z,{className:"mr-1 icon-previous",icon:r.A35}),n,c&&a.createElement(o.Z,{className:"ml-1 icon-next",icon:r._tD}))}}}]);