"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3751],{4889:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(7378),n=a(8944),r=a(5846),c=a(1123),s=a(5484),m=a(8199),o=a(4672),u=a(505);function i(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(u.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},1478:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7378),n=a(8944),r=a(1884);const c="tag_otG2",s="tagRegular_s0E1",m="tagWithCount_PGyn";function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.default,{href:t,className:(0,n.Z)(c,o?m:s)},a,o&&l.createElement("span",null,o))}},4672:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7378),n=a(5846),r=a(1478);const c="tag_FHL6";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},5846:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(9213);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);