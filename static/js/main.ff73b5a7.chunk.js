(this["webpackJsonpReact Porfolio"]=this["webpackJsonpReact Porfolio"]||[]).push([[0],{23:function(e,t,a){e.exports=a(46)},34:function(e,t,a){e.exports=a.p+"static/media/logo.36b144f5.png"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.29bee180.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},42:function(e,t,a){e.exports=a.p+"static/media/ss_techblog.27d0ecfd.png"},43:function(e,t,a){e.exports=a.p+"static/media/ss_therecipeforsuccess.23222a3e.png"},44:function(e,t,a){e.exports=a.p+"static/media/ss_quickmovielookup.61baa2dd.png"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(20),s=a.n(l),o=a(11),n=a(6),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(o.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},u=a(10),v=a(4),h=a.n(v),p=a(16),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(u.a)(a,2),s=l[0],o=l[1],n=Object(i.useState)([]),c=Object(u.a)(n,2),m=c[0],d=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=s-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){b(),h()}),30),E=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),h()}),[s]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:h.a.func.isRequired};var f=b,E=a(9),g=a(1),N=a.n(g),O=["className","src","width","height","alt"],w=function(e){var t=e.className,a=e.src,l=e.width,s=e.height,o=e.alt,n=Object(c.a)(e,O),m=Object(i.useState)(!1),d=Object(u.a)(m,2),v=d[0],h=d[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},n,{ref:p,className:t,src:a,width:l,height:s,alt:o,onLoad:function(){h(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=w,I=["className"],j=function(e){var t=e.className,i=Object(c.a)(e,I),l=N()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(E.b,{to:"/"},r.a.createElement(y,{src:a(34),alt:"Open",width:64,height:64}))))},D=["className","tag","color","size","loading","wide","wideMobile","disabled"],k=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,s=e.loading,o=e.wide,n=e.wideMobile,m=e.disabled,d=Object(c.a)(e,D),u=N()("button",i&&"button-".concat(i),l&&"button-".concat(l),s&&"is-loading",o&&"button-block",n&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};k.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var x=k,L=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,s=e.hideSignin,o=e.bottomOuterDivider,n=e.bottomDivider,m=Object(c.a)(e,L),d=Object(i.useState)(!1),v=Object(u.a)(d,2),h=v[0],p=v[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&E(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",w),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},O=function(e){h&&27===e.keyCode&&g()},w=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&g()},y=N()("site-header",o&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:y}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-header-inner",n&&"has-bottom-divider")},r.a.createElement(j,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?g:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:N()("header-nav",h&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement(x,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/IIMacGyverII"},"Github"),r.a.createElement(x,{tag:"a",color:"primary",wideMobile:!0,href:"https://www.linkedin.com/in/joshua-christianson-843b45a/"},"Linkedin"),r.a.createElement(x,{tag:"a",color:"primary",wideMobile:!0,href:"https://raw.githubusercontent.com/IIMacGyverII/ReactPortfolio/main/src/assets/img/Resume-Joshua.pdf"},"Resume"),r.a.createElement("li",null)),!s&&r.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var M=C,S=["className"],B=function(e){var t=e.className,a=Object(c.a)(e,S),i=N()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)))},F=["className","topOuterDivider","topDivider"],T=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(c.a)(e,F),s=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:s}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"}),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(B,null)))))};T.defaultProps={topOuterDivider:!1,topDivider:!1};var P=T,A=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(P,null))},G=a(3),R={types:{topOuterDivider:h.a.bool,bottomOuterDivider:h.a.bool,topDivider:h.a.bool,bottomDivider:h.a.bool,hasBgColor:h.a.bool,invertColor:h.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},q={types:Object(G.a)({},R.types),defaults:Object(G.a)({},R.defaults)},H={types:Object(G.a)(Object(G.a)({},R.types),{},{invertMobile:h.a.bool,invertDesktop:h.a.bool,alignTop:h.a.bool,imageFill:h.a.bool}),defaults:Object(G.a)(Object(G.a)({},R.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},J={types:Object(G.a)(Object(G.a)({},R.types),{},{pushLeft:h.a.bool}),defaults:Object(G.a)(Object(G.a)({},R.defaults),{},{pushLeft:!1})},_=["className"],Q=function(e){var t=e.className,a=Object(c.a)(e,_),i=N()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},z=["className","children","handleClose","show","closeHidden","video","videoTag"],W=function(e){var t=e.className,a=e.children,l=e.handleClose,s=e.show,o=e.closeHidden,n=e.video,m=e.videoTag,d=Object(c.a)(e,z);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},h=function(e){e.stopPropagation()},p=N()("modal",s&&"is-active",n&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement("div",Object.assign({},d,{className:p,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:h},n?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:n,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:n})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};W.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var U=W,$=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],K=Object(G.a)({},q.defaults),V=function(e){var t=e.className,l=e.topOuterDivider,s=e.bottomOuterDivider,o=e.topDivider,n=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,v=Object(c.a)(e,$),h=Object(i.useState)(!1),p=Object(u.a)(h,2),b=p[0],f=p[1],E=N()("hero section center-content",l&&"has-top-divider",s&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),g=N()("hero-inner section-inner",o&&"has-top-divider",n&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:E}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:g},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Hello! ",r.a.createElement("span",{className:"text-color-primary"},"I'm Joshua")),r.a.createElement("div",{className:"container-s"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"As of June 2022, I am currently attending Northwestern University. I am learning full stack development including, html, CSS, JavaScript, SQL and more. I will be completeing school in June and will be a certified full stack developer. The profile page you see here was made as a project to learn and demonstrate React. It will likely not be my full professional portfolio. If you would like to contact me, please do so via linked in."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(Q,null)))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},r.a.createElement(y,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))),r.a.createElement(U,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};V.defaultProps=K;var X=V,Y=["className","data","children","tag"],Z=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,s=Object(c.a)(e,Y),o=N()("section-header",t),n=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},s,{className:o}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(n,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};Z.defaultProps={children:null,tag:"h2"};var ee=Z,te=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ae=Object(G.a)({},J.defaults),ie=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,n=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,te),v=N()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",n&&"has-bg-color",m&&"invert-color",t),h=N()("features-tiles-inner section-inner pt-0",s&&"has-top-divider",o&&"has-bottom-divider"),p=N()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("a",{id:"featuresSection"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:h},r.a.createElement(ee,{data:{title:"Services",paragraph:"I am currently not offering any services but will soon and this list will be populated then. For now, lorem will suffice."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Service 1"),r.a.createElement("p",{className:"m-0 text-sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Service 2"),r.a.createElement("p",{className:"m-0 text-sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Service 3"),r.a.createElement("p",{className:"m-0 text-sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Service 4"),r.a.createElement("p",{className:"m-0 text-sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(40),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Service 5"),r.a.createElement("p",{className:"m-0 text-sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(41),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Service 6"),r.a.createElement("p",{className:"m-0 text-sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"))))))))};ie.defaultProps=ae;var re=ie,le=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],se=Object(G.a)({},H.defaults),oe=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,n=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(c.a)(e,le),b=N()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",n&&"has-bg-color",m&&"invert-color",t),f=N()("features-split-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},p,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(ee,{data:{title:"Checkout some of my work",paragraph:"Most of this I have done as homework while attending Northwestern University"},id:"myWork",className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item",onClick:!0,href:"https://github.com/IIMacGyverII/Tech_Blog"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/Tech_Blog"},"Tech Blog")),r.a.createElement("h3",{className:"mt-0 mb-12"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/Tech_Blog"},"A simple blog using mySQL and user authentication")),r.a.createElement("p",{href:"https://github.com/IIMacGyverII/Tech_Blog",className:"m-0"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/Tech_Blog"},"Make an account, create posts, view posts and make comments on posts all managed within a mySQL database. Pretty straight forward."))),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/Tech_Blog"},r.a.createElement(y,{src:a(42),alt:"Tech Blog",width:528,href:"https://github.com/IIMacGyverII/Tech_Blog",height:396})))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/therecipeforsuccess"},"The Recipe for Success")),r.a.createElement("h3",{className:"mt-0 mb-12"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/therecipeforsuccess"},"Discover your food here")),r.a.createElement("p",{className:"m-0"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/therecipeforsuccess"},"A group project we made to create, view and sort recipes based on common food alergies and perferences."))),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/therecipeforsuccess"},r.a.createElement(y,{src:a(43),alt:"The Recipe for Success",width:528,height:396})))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/QuickMovieLookup"},"Quick Movie Lookup")),r.a.createElement("h3",{className:"mt-0 mb-12"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/QuickMovieLookup"},"Find your favorite movies")),r.a.createElement("p",{className:"m-0"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/QuickMovieLookup"},"Another group project utilizing, IMDB API and linking it with youtube API to quickly get the movie info and a trailer for the movie"))),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement("a",{href:"https://github.com/IIMacGyverII/QuickMovieLookup"},r.a.createElement(y,{src:a(44),alt:"Quick Movie Lookup",width:528,height:396}))))))))};oe.defaultProps=se;var ne=oe,ce=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],me=Object(G.a)({},J.defaults),de=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,n=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,ce),u=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",n&&"invert-color",t),v=N()("testimonial-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),h=N()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(ee,{data:{title:"Customer testimonials",paragraph:"I have not had any customers yet but I'm sure if I had they would tell you some great things.  For now, lorem will suffice"},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Lorem Jos certe magnus est! Eum amamus!")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Reniel C"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Full Stack Developer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Lorem Jos facit mirabilia! Tam terribilis est!")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Reycel C"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Full Stack Developer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Lorem Jos incredibile est ac volet! O mirabilem hominem!")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Jason T"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Full Stack Developer")))))))))};de.defaultProps=me;var ue=de,ve=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],he=Object(G.a)(Object(G.a)({},q.defaults),{},{split:!1}),pe=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=(e.topDivider,e.bottomDivider,e.hasBgColor),s=e.invertColor,o=(e.split,Object(c.a)(e,ve)),n=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t);return r.a.createElement("section",Object.assign({},o,{className:n}))};pe.defaultProps=he;var be=pe,fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{className:"illustration-section-01"}),r.a.createElement(re,null),r.a.createElement(ne,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(ue,{topDivider:!0}),r.a.createElement(be,{split:!0}))},Ee=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){document.body.classList.add("is-loaded"),e.current.init()}),[t]),r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(E.a,{basename:"/"},r.a.createElement(o.c,null,r.a.createElement(d,{exact:!0,path:"/",component:fe,layout:A})))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var ge=Object(n.a)();s.a.render(r.a.createElement(o.b,{history:ge},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ff73b5a7.chunk.js.map