(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[279],{3416:function(e,t,n){"use strict";var l=n(6540),o=n(2568),a=n(1612),i=n(7008),r=n(1960);const c=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),s="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":r.siteUrl,m=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.png);background-size:cover;background-position:center;"],s),d=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),p=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(e=>e.theme.colors.secondaryText)),u=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(e=>e.theme.colors.icon),(e=>e.theme.colors.text)),g=e=>{let{link:t,children:n}=e;return t?l.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.A=()=>{const{github:e,kaggle:t,instagram:n,facebook:o,twitter:s,x:f,blogger:h,medium:E,linkedIn:x,email:k,resume:v,link:w}=r.links;return l.createElement(c,{id:"bio"},l.createElement(m,null),l.createElement("div",null,l.createElement(d,null,"@",r.author),l.createElement(p,null,r.description),l.createElement(u,null,l.createElement(g,{link:e},l.createElement(a.hL4,null)),l.createElement(g,{link:t},l.createElement(a.jJF,null)),l.createElement(g,{link:n},l.createElement(a.ao$,null)),l.createElement(g,{link:o},l.createElement(a.iYk,null)),l.createElement(g,{link:s},l.createElement(a.feZ,null)),l.createElement(g,{link:f},l.createElement(i.TCj,null)),l.createElement(g,{link:E},l.createElement(i.DC0,null)),l.createElement(g,{link:h},l.createElement(i.KRq,null)),l.createElement(g,{link:x},l.createElement(a.QEs,null)),l.createElement(g,{link:k},l.createElement(i.Wjb,null)),l.createElement(g,{link:v},l.createElement(i.HkI,null)),l.createElement(g,{link:w},l.createElement(i.AnD,null)))))}},5608:function(e,t,n){"use strict";var l=n(7350),o=n.n(l),a=n(6540),i=n(2568),r=n(4794),c=n(2912),s=n(3173),m=n(786);const d=i.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=i.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),u=i.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),g=i.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.A=e=>{let{postList:t}=e;const{0:n,1:l}=(0,a.useState)(10),i=o()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>l(n+10)),300)}),250);return(0,a.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[n,t]),(0,a.useEffect)((()=>{l(10)}),[t]),a.createElement(d,null,t.slice(0,n).map(((e,l)=>{const{title:o,description:i,date:d,tags:f}=e.frontmatter,{excerpt:h}=e,{slug:E}=e.fields;return a.createElement(a.Fragment,null,a.createElement(p,null,a.createElement(c.A,{size:"bg"},a.createElement(r.Link,{to:E},o)),a.createElement(u,null,d),i?a.createElement(g,null,i):a.createElement(g,null,h),a.createElement(m.A,{tagList:f})),n-1!==l&&t.length-1!==l&&a.createElement(s.A,{mt:"48px",mb:"32px"}))})))}},786:function(e,t,n){"use strict";var l=n(6540),o=n(2568),a=n(4794);const i=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),r=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:n,selected:o}=e;return t?n?l.createElement(i,null,t.map(((e,t)=>l.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},l.createElement(r,{selected:e.fieldValue===o},c(e.fieldValue)," (",e.totalCount,")"))))):l.createElement(i,null,t.map(((e,t)=>l.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},l.createElement(r,null,c(e)))))):null}},7352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var l=n(3031),o=n.n(l),a=n(6540),i=n(6288),r=n(5482),c=n(3416),s=n(5608),m=n(5378),d=n.n(m),p=n(2568),u=n(4794);const g=p.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-11pn9fc-0"})(["position:relative;"]),f=p.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-11pn9fc-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),h=p.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-11pn9fc-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(e=>e.theme.colors.secondaryText)),E=p.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-11pn9fc-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(e=>e.theme.colors.tertiaryText),(e=>e.theme.colors.text));var x=e=>{let{tags:t,postCount:n}=e;return a.createElement(g,null,a.createElement(f,null,a.createElement(h,null,"TAG LIST"),a.createElement("ul",null,a.createElement(E,null,a.createElement(u.Link,{to:"/tags"},"all (",n,")")),d()(t,(e=>a.createElement(E,null,a.createElement(u.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")")))))))},k=n(3173),v=n(698),w=n(1960);var b=e=>{let{data:t}=e;const n=t.allMarkdownRemark.nodes,l=o()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):a.createElement(i.A,null,a.createElement(r.A,{title:w.title,description:w.description,url:w.siteUrl}),a.createElement(v.A,{size:48}),a.createElement(c.A,null),a.createElement(k.A,null),a.createElement(x,{tags:l,postCount:n.length}),a.createElement(s.A,{postList:n}))}},5378:function(e,t,n){var l=n(4932),o=n(5389),a=n(5128),i=n(6449);e.exports=function(e,t){return(i(e)?l:a)(e,o(t,3))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-b69526fe6dad5d8ef96f.js.map