"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6990],{1999:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(5773),n=r(7378),s=r(8944),a=r(9213),l=r(624);const i="anchorWithStickyNavbar_JmGV",u="anchorWithHideOnScrollNavbar_pMLv";function c(e){let{as:t,id:r,...c}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();return"h1"!==t&&r?n.createElement(t,(0,o.Z)({},c,{className:(0,s.Z)("anchor",d?u:i),id:r}),c.children,n.createElement("a",{className:"hash-link",href:"#"+r,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,(0,o.Z)({},c,{id:void 0}))}},412:(e,t,r)=>{r.d(t,{C:()=>l,n:()=>a});var o=r(7378),n=r(1763);const s=o.createContext(null);function a(e){let{children:t,content:r,isBlogPostPage:n=!1}=e;const a=function(e){let{content:t,isBlogPostPage:r}=e;return(0,o.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:n});return o.createElement(s.Provider,{value:a},t)}function l(){const e=(0,o.useContext)(s);if(null===e)throw new n.i6("BlogPostProvider");return e}},9446:(e,t,r)=>{r.d(t,{b:()=>a,k:()=>l});var o=r(7378),n=r(1763);const s=o.createContext(null);function a(e){let{children:t,content:r}=e;const n=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return o.createElement(s.Provider,{value:n},t)}function l(){const e=(0,o.useContext)(s);if(null===e)throw new n.i6("DocProvider");return e}},6666:(e,t,r)=>{r.d(t,{D:()=>l,f:()=>i});var o=r(7378),n=r(1763);const s=Symbol("EmptyContext"),a=o.createContext(s);function l(e){let{children:t}=e;const[r,n]=(0,o.useState)(null),s=(0,o.useMemo)((()=>({expandedItem:r,setExpandedItem:n})),[r]);return o.createElement(a.Provider,{value:s},t)}function i(){const e=(0,o.useContext)(a);if(e===s)throw new n.i6("DocSidebarItemsExpandedStateProvider");return e}},9169:(e,t,r)=>{r.d(t,{a:()=>a});var o=r(7378),n=r(3457),s=r(4993);function a(e){let{threshold:t}=e;const[r,a]=(0,o.useState)(!1),l=(0,o.useRef)(!1),{startScroll:i,cancelScroll:u}=(0,n.Ct)();return(0,n.RF)(((e,r)=>{let{scrollY:o}=e;const n=null==r?void 0:r.scrollY;n&&(l.current?l.current=!1:o>=n?(u(),a(!1)):o<t?a(!1):o+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,s.S)((e=>{e.location.hash&&(l.current=!0,a(!1))})),{shown:r,scrollToTop:()=>i(0)}}},1344:(e,t,r)=>{r.d(t,{S:()=>i});var o=r(7378),n=r(624);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function a(e,t){var r;let{anchorTopOffset:o}=t;const n=e.find((e=>s(e).top>=o));if(n){var a;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:null!=(a=e[e.indexOf(n)-1])?a:null}return null!=(r=e[e.length-1])?r:null}function l(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,n.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,o.useRef)(void 0),r=l();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:n,minHeadingLevel:s,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e;const o=[];for(let n=t;n<=r;n+=1)o.push("h"+n+".anchor");return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),u=a(i,{anchorTopOffset:r.current}),c=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(n),e.classList.add(n),t.current=e):e.classList.remove(n)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}},4801:(e,t,r)=>{r.r(t),r.d(t,{Collapsible:()=>i.z,HtmlClassNameProvider:()=>d.FG,NavbarSecondaryMenuFiller:()=>g.Zo,PageMetadata:()=>d.d,ReactContextError:()=>c.i6,ThemeClassNames:()=>u.k,composeProviders:()=>c.Qc,createStorageSlot:()=>n.W,duplicates:()=>C.l,isMultiColumnFooterLinks:()=>v.a,isRegexpStringMatch:()=>p.F,listStorageKeys:()=>n._,listTagsByLetters:()=>h.P,translateTagsPageTitle:()=>h.M,uniq:()=>C.j,useCollapsible:()=>i.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>s._q,useCurrentSidebarCategory:()=>a.jA,useDocsPreferredVersion:()=>S.J,useEvent:()=>c.zX,useIsomorphicLayoutEffect:()=>c.LI,usePluralForm:()=>l.c,usePrevious:()=>c.D9,usePrismTheme:()=>P.p,useThemeConfig:()=>o.L,useWindowSize:()=>f.i});var o=r(624),n=r(1819),s=r(3149),a=r(5161),l=r(689),i=r(376),u=r(5484),c=r(1763),d=r(1123),m=r(5421),g=r(3471),f=r(8357),h=r(5846),v=r(3922),p=r(1503),C=r(784),P=r(6499),S=r(4453)},2700:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>c.pl,BlogPostProvider:()=>i.n,Collapsible:()=>o.Collapsible,ColorModeProvider:()=>f.S,DEFAULT_SEARCH_TAG:()=>p.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>n.D,DocsPreferredVersionContextProvider:()=>u.L5,DocsSidebarProvider:()=>a.b,DocsVersionProvider:()=>s.q,HtmlClassNameProvider:()=>o.HtmlClassNameProvider,NavbarProvider:()=>M.V,NavbarSecondaryMenuFiller:()=>o.NavbarSecondaryMenuFiller,PageMetadata:()=>o.PageMetadata,PluginHtmlClassNameProvider:()=>y.VC,ReactContextError:()=>o.ReactContextError,ScrollControllerProvider:()=>x.OC,TabGroupChoiceProvider:()=>d.z,ThemeClassNames:()=>o.ThemeClassNames,composeProviders:()=>o.composeProviders,containsLineNumbers:()=>v.nt,createStorageSlot:()=>o.createStorageSlot,docVersionSearchTag:()=>p.os,duplicates:()=>o.duplicates,findFirstCategoryLink:()=>C.Wl,findSidebarCategory:()=>C.em,getPrismCssVariables:()=>v.QC,isActiveSidebarItem:()=>C._F,isDocsPluginEnabled:()=>C.cE,isMultiColumnFooterLinks:()=>o.isMultiColumnFooterLinks,isRegexpStringMatch:()=>o.isRegexpStringMatch,isSamePath:()=>E.Mg,keyboardFocusedClassName:()=>N.h,listStorageKeys:()=>o.listStorageKeys,listTagsByLetters:()=>o.listTagsByLetters,parseCodeBlockTitle:()=>v.bc,parseLanguage:()=>v.Vo,parseLines:()=>v.nZ,splitNavbarItems:()=>M.A,translateTagsPageTitle:()=>o.translateTagsPageTitle,uniq:()=>o.uniq,useAlternatePageUtils:()=>h.l,useAnnouncementBar:()=>c.nT,useBackToTopButton:()=>B.a,useBlogPost:()=>i.C,useCodeWordWrap:()=>I.F,useCollapsible:()=>o.useCollapsible,useColorMode:()=>o.useColorMode,useContextualSearchFilters:()=>o.useContextualSearchFilters,useCurrentSidebarCategory:()=>o.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>C.xz,useDocRouteMetadata:()=>C.hI,useDocSidebarItemsExpandedState:()=>n.f,useDocsPreferredVersion:()=>o.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>u.Oh,useDocsSidebar:()=>a.V,useDocsVersion:()=>s.E,useDocsVersionCandidates:()=>C.lO,useEvent:()=>o.useEvent,useFilteredAndTreeifiedTOC:()=>T.b,useHideableNavbar:()=>H.c,useHistoryPopHandler:()=>L.R,useHomePageRoute:()=>E.Ns,useIsomorphicLayoutEffect:()=>o.useIsomorphicLayoutEffect,useKeyboardNavigation:()=>N.t,useLayoutDoc:()=>C.vY,useLayoutDocsSidebar:()=>C.oz,useLocalPathname:()=>b.b,useLocationChange:()=>S.S,useLockBodyScroll:()=>D.N,useNavbarMobileSidebar:()=>m.e,useNavbarSecondaryMenu:()=>g.Y,usePluralForm:()=>o.usePluralForm,usePrevious:()=>o.usePrevious,usePrismTheme:()=>o.usePrismTheme,useScrollController:()=>x.sG,useScrollPosition:()=>x.RF,useScrollPositionBlocker:()=>x.o5,useSearchPage:()=>k.O,useSidebarBreadcrumbs:()=>C.s1,useSkipToContent:()=>w.a,useSmoothScrollTo:()=>x.Ct,useTOCHighlight:()=>F.S,useTabGroupChoice:()=>d.U,useThemeConfig:()=>o.useThemeConfig,useTitleFormatter:()=>P.p,useTreeifiedTOC:()=>T.a,useWindowSize:()=>o.useWindowSize});var o=r(4801),n=r(6666),s=r(5611),a=r(2095),l=r(9446),i=r(412),u=r(4453),c=r(10),d=r(9947),m=r(5536),g=r(5530),f=r(5421),h=r(3714),v=r(433),p=r(3149),C=r(5161),P=r(9162),S=r(4993),b=r(3511),L=r(654),T=r(6934),x=r(3457),E=r(8862),y=r(1123),M=r(3211),F=r(1344),H=r(2561),N=r(174),D=r(7930),k=r(3584),I=r(6177),w=r(1801),B=r(9169)},5846:(e,t,r)=>{r.d(t,{M:()=>n,P:()=>s});var o=r(9213);const n=()=>(0,o.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function s(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);null!=t[r]||(t[r]=[]),t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[o]=t;return r.localeCompare(o)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},6934:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>l});var o=r(7378);function n(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const o=r.slice(2,e.level);e.parentIndex=Math.max(...o),r[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:r,...n}=e;r>=0?t[r].children.push(n):o.push(n)})),o}function s(e){return(0,o.useMemo)((()=>n(e)),[e])}function a(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:r,maxHeadingLevel:o});return function(e){return e.level>=r&&e.level<=o}(e)?[{...e,children:t}]:t}))}function l(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:s}=e;return(0,o.useMemo)((()=>a({toc:n(t),minHeadingLevel:r,maxHeadingLevel:s})),[t,r,s])}},689:(e,t,r)=>{r.d(t,{c:()=>u});var o=r(7378),n=r(353);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),l}}),[e])}function u(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+o.length+": "+e);const n=r.select(t),s=r.pluralForms.indexOf(n);return o[Math.min(s,o.length-1)]}(r,t,e)}}}}]);