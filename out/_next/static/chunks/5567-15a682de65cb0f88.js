"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5567],{90591:function(t,e,o){o.r(e),o.d(e,{default:function(){return g}});var n=o(57437),r=o(2265),a=o(36953),i=o(56314),l=o(46776),s=o(27680),c=o(79321),h=o(35843),d=o(89975);let p=(0,h.ZP)(a.pk)(t=>{let{theme:e}=t,o="light"===e.palette.mode;return{"& #notistack-snackbar":{...e.typography.subtitle2,padding:0,flexGrow:1},"&.notistack-MuiContent":{color:e.palette.text.primary,boxShadow:e.customShadows.z8,borderRadius:e.shape.borderRadius,padding:e.spacing(.5,2,.5,.5),backgroundColor:e.palette.background.paper},"&.notistack-MuiContent-default":{padding:e.spacing(1,2,1,1),color:o?e.palette.common.white:e.palette.grey[800],backgroundColor:o?e.palette.grey[800]:e.palette.common.white}}}),u=(0,h.ZP)("span")(t=>{let{color:e,theme:o}=t;return{width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",marginRight:o.spacing(1.5),color:o.palette[e].main,borderRadius:o.shape.borderRadius,backgroundColor:(0,d.Fq)(o.palette[e].main,.16)}});function g(t){let{children:e}=t,o="rtl"===(0,c.K$)().themeDirection,h=(0,r.useRef)(null);return(0,n.jsx)(a.wT,{ref:h,maxSnack:5,preventDuplicate:!0,autoHideDuration:3e3,TransitionComponent:o?i.Z:void 0,variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},iconVariant:{info:(0,n.jsx)(u,{color:"info",children:(0,n.jsx)(s.Z,{icon:"eva:info-fill",width:24})}),success:(0,n.jsx)(u,{color:"success",children:(0,n.jsx)(s.Z,{icon:"eva:checkmark-circle-2-fill",width:24})}),warning:(0,n.jsx)(u,{color:"warning",children:(0,n.jsx)(s.Z,{icon:"eva:alert-triangle-fill",width:24})}),error:(0,n.jsx)(u,{color:"error",children:(0,n.jsx)(s.Z,{icon:"solar:danger-bold",width:24})})},Components:{default:p,info:p,success:p,warning:p,error:p},action:t=>(0,n.jsx)(l.Z,{size:"small",onClick:()=>(0,a.sy)(t),sx:{p:.5},children:(0,n.jsx)(s.Z,{width:16,icon:"mingcute:close-line"})}),children:e})}},63854:function(t,e,o){o.d(e,{F:function(){return a}});var n=o(22135),r=o(41101);function a(t,e,o){let a=(0,r.Z)(),i=(0,n.Z)(a.breakpoints.up(e)),l=(0,n.Z)(a.breakpoints.down(e)),s=(0,n.Z)(a.breakpoints.between(e,o)),c=(0,n.Z)(a.breakpoints.only(e));return"up"===t?i:"down"===t?l:"between"===t?s:c}},35567:function(t,e,o){o.d(e,{Z:function(){return t5}});var n=o(57437),r=o(79245),a=o(27707),i=o(63854),l=o(79321),s=o(55963),c=o(12582);function h(t){let{children:e,sx:o,...a}=t,h=(0,l.K$)(),d=(0,i.F)("up","lg"),p="horizontal"===h.themeLayout,u="mini"===h.themeLayout;return p?(0,n.jsx)(r.Z,{component:"main",sx:{minHeight:1,display:"flex",flexDirection:"column"},children:e}):(0,n.jsx)(r.Z,{component:"main",sx:{flexGrow:1,minHeight:1,display:"flex",flexDirection:"column",...d&&{width:"calc(100% - ".concat(c.w.W_VERTICAL,"px)"),...u&&{width:"calc(100% - ".concat(c.w.W_MINI,"px)")}},...o},...a,children:(0,n.jsx)(s.Z,{children:e})})}var d=o(15133),p=o(13457),u=o(76500),g=o(41101),m=o(46776),x=o(45490),f=o(32305),b=o(44019),v=o(98114),y=o.n(v),j=o(53879),w=o.n(j),Z=o(2265),k=o(80565),C=o(98599),P=o(81679),H=o(22079),T=o(45525),S=o(35998);let z=Z.useLayoutEffect;var O=o(35843),R=o(89975);let L=(0,O.ZP)(r.Z)(t=>{let{theme:e,ownerState:o}=t,n="light"===e.palette.mode,r="filled"===o.variant,a="outlined"===o.variant,i="soft"===o.variant,l={..."default"===o.color&&{...r&&{color:n?e.palette.common.white:e.palette.grey[800],backgroundColor:e.palette.text.primary},...a&&{backgroundColor:"transparent",color:e.palette.text.primary,border:"2px solid ".concat(e.palette.text.primary)},...i&&{color:e.palette.text.secondary,backgroundColor:(0,R.Fq)(e.palette.grey[500],.16)}}},s={..."default"!==o.color&&{...r&&{color:e.palette[o.color].contrastText,backgroundColor:e.palette[o.color].main},...a&&{backgroundColor:"transparent",color:e.palette[o.color].main,border:"2px solid ".concat(e.palette[o.color].main)},...i&&{color:e.palette[o.color][n?"dark":"light"],backgroundColor:(0,R.Fq)(e.palette[o.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:e.spacing(0,.75),fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightBold,transition:e.transitions.create("all",{duration:e.transitions.duration.shorter}),...l,...s}}),F=(0,Z.forwardRef)((t,e)=>{let{children:o,color:a="default",variant:i="soft",startIcon:l,endIcon:s,sx:c,...h}=t,d=(0,g.Z)(),p={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,n.jsxs)(L,{ref:e,component:"span",ownerState:{color:a,variant:i},sx:{...l&&{pl:.75},...s&&{pr:.75},...c},theme:d,...h,children:[l&&(0,n.jsxs)(r.Z,{sx:{mr:.75,...p},children:[" ",l," "]}),o,s&&(0,n.jsxs)(r.Z,{sx:{ml:.75,...p},children:[" ",s," "]})]})});var W=o(27680),I=o(85269),M=o(18687);function E(t){let{query:e,sx:o,...r}=t;return e?(0,n.jsxs)(M.Z,{sx:{bgcolor:"unset",textAlign:"center",...o},...r,children:[(0,n.jsx)(I.Z,{variant:"h6",gutterBottom:!0,children:"Kh\xf4ng t\xecm thấy"}),(0,n.jsxs)(I.Z,{variant:"body2",children:["Kh\xf4ng t\xecm thấy kết quả của \xa0",(0,n.jsxs)("strong",{children:['"',e,'"']}),".",(0,n.jsx)("br",{})," Vui l\xf2ng kiểm tra lại."]})]}):(0,n.jsx)(I.Z,{variant:"body2",sx:o,children:"Nhập từ kho\xe1 t\xecm kiếm..."})}var N=o(38212),_=o(72502);function q(t){let{title:e,path:o,groupLabel:a,onClickItem:i}=t;return(0,n.jsxs)(_.Z,{onClick:i,sx:{borderWidth:1,borderStyle:"dashed",borderColor:"transparent",borderBottomColor:t=>t.palette.divider,"&:hover":{borderRadius:1,borderColor:t=>t.palette.primary.main,backgroundColor:t=>(0,R.Fq)(t.palette.primary.main,t.palette.action.hoverOpacity)}},children:[(0,n.jsx)(N.Z,{primaryTypographyProps:{typography:"subtitle2",sx:{textTransform:"capitalize"}},secondaryTypographyProps:{typography:"caption"},primary:e.map((t,e)=>(0,n.jsx)(r.Z,{component:"span",sx:{color:t.highlight?"primary.main":"text.primary"},children:t.text},e)),secondary:o.map((t,e)=>(0,n.jsx)(r.Z,{component:"span",sx:{color:t.highlight?"primary.main":"text.secondary"},children:t.text},e))}),a&&(0,n.jsx)(F,{color:"info",children:a})]})}var D=o(74941),B=o(19677);let A={sale:(0,n.jsx)(b.Z,{src:"/assets/icons/navbar/".concat("ic_log",".svg"),sx:{width:1,height:1}})};function K(){let{t}=(0,B.qM)();return(0,Z.useMemo)(()=>[{subheader:"TRUNG HỌC PHỔ TH\xd4NG",items:[{title:"M\xf4n Ho\xe1 học",path:D.H.dashboard.thpt.hoahoc.root,icon:A.sale,children:[{title:"Phản ứng nitro ho\xe1 benzene",path:D.H.dashboard.thpt.hoahoc.phanungnitrohoabezenne},{title:"Phản ứng thuỷ ph\xe2n tinh bột",path:D.H.dashboard.thpt.hoahoc.phanungthuyphantinhbot},{title:"Phản ứng thuỷ ph\xe2n Celulose",path:D.H.dashboard.thpt.hoahoc.phanungthuyphancelulose},{title:"X\xe0 ph\xf2ng ho\xe1 chất b\xe9o",path:D.H.dashboard.thpt.hoahoc.xaphonghoachatbeo},{title:"Điều chế Ethy Acetate",path:D.H.dashboard.thpt.hoahoc.dieucheethyacetate},{title:"Thuỷ ph\xe2n Ethy Bromide",path:D.H.dashboard.thpt.hoahoc.thuyphanethybromide}]},{title:"M\xf4n Vật l\xfd",path:D.H.dashboard.thpt.vatly.root,icon:A.sale,children:[{title:"M\xf4 phỏng l\xf2 luyện gang",path:D.H.dashboard.thpt.vatly.mophongloluyengang},{title:"M\xf4 phỏng l\xf2 xi măng",path:D.H.dashboard.thpt.vatly.mophongloximang},{title:"T\xe1n sắc \xe1nh s\xe1ng",path:D.H.dashboard.thpt.vatly.tansacanhsang},{title:"\xc2m thanh trong c\xe1c m\xf4i trường",path:D.H.dashboard.thpt.vatly.anthanhtrongcacmoitruong},{title:"Sự phản xạ \xe1nh s\xe1ng",path:D.H.dashboard.thpt.vatly.suphanxaanhsang},{title:"Sự kh\xfac xạ \xe1nh s\xe1ng",path:D.H.dashboard.thpt.vatly.sukhucxaanhsang},{title:"Đường sức từ nam ch\xe2m",path:D.H.dashboard.thpt.vatly.duongsuctunamcham},{title:"Thế năng hấp dẫn",path:D.H.dashboard.thpt.vatly.thenanghapdan},{title:"Cấu tr\xfac hạt nh\xe2n",path:D.H.dashboard.thpt.vatly.cautruchatnhan},{title:"Qu\xe1 tr\xecnh chụp X Quang",path:D.H.dashboard.thpt.vatly.quatrinhchupxquang},{title:"Cấu tạo mạch điện",path:D.H.dashboard.thpt.vatly.cautaomachdien},{title:"M\xf4 h\xecnh tụ điện",path:D.H.dashboard.thpt.vatly.mohinhtudien},{title:"M\xf4 phỏng giao động",path:D.H.dashboard.thpt.vatly.mophonggiaodong},{title:"Nhật thực nguyệt thực thuỷ triều",path:D.H.dashboard.thpt.vatly.nhatthucnguyetthucthuytrieu},{title:"Tr\xe1i Đất Mặt Trời Mặt Trăng",path:D.H.dashboard.thpt.vatly.traidatmattroimattrang},{title:"M\xf4 phỏng bản đồ sao",path:D.H.dashboard.thpt.vatly.mophongbandosao},{title:"M\xf4 phỏng hệ Mặt Trời",path:D.H.dashboard.thpt.vatly.mophonghemattroi}]},{title:"M\xf4n Sinh học",path:D.H.dashboard.thpt.sinhhoc.root,icon:A.sale,children:[{title:"Trao đổi nước ở thực vật",path:D.H.dashboard.thpt.sinhhoc.traodoinuocothucvat}]}]},{subheader:"TRUNG HỌC CƠ SỞ",items:[{title:"M\xf4n Vật l\xfd",path:D.H.dashboard.thcs.vatly.root,icon:A.sale,children:[{title:"\xc2m thanh trong c\xe1c m\xf4i trường",path:D.H.dashboard.thcs.vatly.anthanhtrongcacmoitruong},{title:"Sự phản xạ \xe1nh s\xe1ng",path:D.H.dashboard.thcs.vatly.suphanxaanhsang},{title:"Sự kh\xfac xạ \xe1nh s\xe1ng",path:D.H.dashboard.thcs.vatly.sukhucxaanhsang},{title:"Đường sức từ nam ch\xe2m",path:D.H.dashboard.thcs.vatly.duongsuctunamcham}]},{title:"M\xf4n Sinh học",path:D.H.dashboard.thcs.sinhhoc.root,icon:A.sale,children:[{title:"Trao đổi nước ở thực vật",path:D.H.dashboard.thcs.sinhhoc.traodoinuocothucvat}]}]}],[t])}var G=(0,Z.memo)(function(){let t=(0,g.Z)(),e=(0,S.tv)(),o=(0,a.k)(),[i,l]=(0,Z.useState)(""),c=K(),h=(0,Z.useCallback)(()=>{o.onFalse(),l("")},[o]);!function(t,e,o,n){let r=(0,Z.useRef)(e);z(()=>{r.current=e},[e]),(0,Z.useEffect)(()=>{let e=(null==o?void 0:o.current)||window;if(!(e&&e.addEventListener))return;let a=t=>r.current(t);return e.addEventListener(t,a,n),()=>{e.removeEventListener(t,a)}},[t,o,n])}("keydown",t=>{"k"===t.key&&t.metaKey&&(o.onToggle(),l(""))});let d=(0,Z.useCallback)(t=>{t.includes("http")?window.open(t):e.push(t),h()},[h,e]),p=(0,Z.useCallback)(t=>{l(t.target.value)},[]),u=function(t){let{inputData:e,query:o}=t;return o&&(e=e.filter(t=>-1!==t.title.toLowerCase().indexOf(o.toLowerCase())||-1!==t.path.toLowerCase().indexOf(o.toLowerCase()))),e}({inputData:function(t){let{data:e}=t,o=e.map(t=>(function t(e,o){return null==e?void 0:e.map(e=>({subheader:o,...e,...e.children&&{children:t(e.children,o)}}))})(t.items,t.subheader)).flat();return(function t(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",n=[],r=null==e?void 0:e.map(t=>(t[o]&&t[o].length&&(n=[...n,...t[o]]),t));return null==r?void 0:r.concat(n.length?t(n,o):n)})(o).map(t=>{let e=function(t,e){let o=t.map(t=>({path:[t.title],currItem:t}));for(;o.length;){var n;let{path:t,currItem:r}=o.pop();if(r.path===e)return t;(null===(n=r.children)||void 0===n?void 0:n.length)&&(o=o.concat(r.children.map(e=>({path:t.concat(e.title),currItem:e}))))}return null}(o,t.path);return{group:e&&e.length>1?e[0]:t.subheader,title:t.title,path:t.path}})}({data:c}),query:i}),x=i&&!u.length,f=(0,n.jsx)(m.Z,{onClick:o.onTrue,children:(0,n.jsx)(W.Z,{icon:"eva:search-fill"})});return(0,n.jsxs)(n.Fragment,{children:[f,(0,n.jsxs)(H.Z,{fullWidth:!0,maxWidth:"sm",open:o.value,onClose:h,transitionDuration:{enter:t.transitions.duration.shortest,exit:0},PaperProps:{sx:{mt:15,overflow:"unset"}},sx:{["& .".concat(T.Z.container)]:{alignItems:"flex-start"}},children:[(0,n.jsx)(r.Z,{sx:{p:3,borderBottom:"solid 1px ".concat(t.palette.divider)},children:(0,n.jsx)(C.ZP,{fullWidth:!0,autoFocus:!0,placeholder:"T\xecm kiếm...",value:i,onChange:p,startAdornment:(0,n.jsx)(P.Z,{position:"start",children:(0,n.jsx)(W.Z,{icon:"eva:search-fill",width:24,sx:{color:"text.disabled"}})}),endAdornment:(0,n.jsx)(F,{sx:{letterSpacing:1,color:"text.secondary"},children:"esc"}),inputProps:{sx:{typography:"h6"}}})}),(0,n.jsx)(s.Z,{sx:{p:3,pt:2,height:400},children:x?(0,n.jsx)(E,{query:i,sx:{py:10}}):(()=>{let t=u.reduce((t,e)=>(t[e.group]=t[e.group]||[],t[e.group].push(e),t),{});return Object.keys(t).sort((t,e)=>-e.localeCompare(t)).map((e,o)=>(0,n.jsx)(k.Z,{disablePadding:!0,children:t[e].map(t=>{let{title:o,path:r}=t,a=y()(o,w()(o,i)),l=y()(r,w()(r,i));return(0,n.jsx)(q,{path:l,title:a,groupLabel:i&&e,onClickItem:()=>d(r)},"".concat(o).concat(r))})},e||o))})()})]})]})}),V=o(74821),U=o(21135),X=o(64494),$=o(9699),Q=o(60443),J=o(59500),Y=o(69112);let tt=(0,O.ZP)("span")(t=>{let{arrow:e,theme:o}=t,n={top:-6.5,transform:"rotate(135deg)"},r={bottom:-6.5,transform:"rotate(-45deg)"},a={left:-6.5,transform:"rotate(45deg)"},i={right:-6.5,transform:"rotate(-135deg)"};return{width:14,height:14,position:"absolute",borderBottomLeftRadius:3.5,clipPath:"polygon(0% 0%, 100% 100%, 0% 100%)",border:"solid 1px ".concat((0,R.Fq)("light"===o.palette.mode?o.palette.grey[500]:o.palette.common.black,.12)),...(0,Y.Ls)({color:o.palette.background.paper}),..."top-left"===e&&{...n,left:20},..."top-center"===e&&{...n,left:0,right:0,margin:"auto"},..."top-right"===e&&{...n,right:20},..."bottom-left"===e&&{...r,left:20},..."bottom-center"===e&&{...r,left:0,right:0,margin:"auto"},..."bottom-right"===e&&{...r,right:20},..."left-top"===e&&{...a,top:20},..."left-center"===e&&{...a,top:0,bottom:0,margin:"auto"},..."left-bottom"===e&&{...a,bottom:20},..."right-top"===e&&{...i,top:20},..."right-center"===e&&{...i,top:0,bottom:0,margin:"auto"},..."right-bottom"===e&&{...i,bottom:20}}});function te(t){let{open:e,children:o,arrow:r="top-right",hiddenArrow:a,sx:i,...l}=t,{style:s,anchorOrigin:c,transformOrigin:h}=function(t){let e;switch(t){case"top-left":e={style:{ml:-.75},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}};break;case"top-center":e={style:{},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}};break;case"top-right":default:e={style:{ml:.75},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}};break;case"bottom-left":e={style:{ml:-.75},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"}};break;case"bottom-center":e={style:{},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}};break;case"bottom-right":e={style:{ml:.75},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"}};break;case"left-top":e={style:{mt:-.75},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"}};break;case"left-center":e={anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"}};break;case"left-bottom":e={style:{mt:.75},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"}};break;case"right-top":e={style:{mt:-.75},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}};break;case"right-center":e={anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"right"}};break;case"right-bottom":e={style:{mt:.75},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"}}}return e}(r);return(0,n.jsxs)(J.ZP,{open:!!e,anchorEl:e,anchorOrigin:c,transformOrigin:h,slotProps:{paper:{sx:{width:"auto",overflow:"inherit",...s,["& .".concat(Q.Z.root)]:{"& svg":{mr:2,flexShrink:0}},...i}}},...l,children:[!a&&(0,n.jsx)(tt,{arrow:r}),o]})}function to(){let[t,e]=(0,Z.useState)(null);return{open:t,onOpen:(0,Z.useCallback)(t=>{e(t.currentTarget)},[]),onClose:(0,Z.useCallback)(()=>{e(null)},[]),setOpen:e}}function tn(){let t=to(),{onChangeLang:e}=(0,B.qM)(),{allLangs:o,currentLang:r}=(0,B.nt)(),a=(0,Z.useCallback)(o=>{e(o),t.onClose()},[e,t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.Z,{component:U.m.button,whileTap:"tap",whileHover:"hover",variants:(0,$.U6)(1.05),onClick:t.onOpen,sx:{width:40,height:40,...t.open&&{bgcolor:"action.selected"}},children:(0,n.jsx)(W.Z,{icon:r.icon,sx:{borderRadius:.65,width:28}})}),(0,n.jsx)(te,{open:t.open,onClose:t.onClose,sx:{width:160},children:o.map(t=>(0,n.jsxs)(X.Z,{selected:t.value===r.value,onClick:()=>a(t.value),children:[(0,n.jsx)(W.Z,{icon:t.icon,sx:{borderRadius:.65,width:28}}),t.label]},t.value))})]})}function tr(t){let{onOpenNav:e}=t,o=(0,g.Z)(),r=(0,l.K$)(),a="horizontal"===r.themeLayout,s="mini"===r.themeLayout,h=(0,i.F)("up","lg"),v=(0,x.y)(c.y.H_DESKTOP)&&!a,y=(0,n.jsxs)(d.Z,{component:p.Z,direction:"row",alignItems:"center",sx:{px:2,width:"100%",height:"100%",borderRadius:0},children:[h&&a&&(0,n.jsx)(f.Z,{sx:{mr:2.5}}),!h&&(0,n.jsx)(m.Z,{onClick:e,children:(0,n.jsx)(b.Z,{src:"/assets/icons/navbar/ic_menu_item.svg"})}),(0,n.jsx)(f.Z,{}),(0,n.jsxs)(p.Z,{flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:{xs:.5,sm:1},children:[(0,n.jsx)(G,{}),(0,n.jsx)(tn,{}),(0,n.jsx)(V.Z,{})]})]});return(0,n.jsx)(u.Z,{sx:{height:c.y.H_MOBILE,zIndex:o.zIndex.appBar+1,transition:o.transitions.create(["height"],{duration:o.transitions.duration.shorter}),...h&&{width:"calc(100% - ".concat(c.w.W_VERTICAL+1,"px)"),height:c.y.H_DESKTOP,...v&&{height:c.y.H_DESKTOP_OFFSET},...a&&{width:1,bgcolor:"background.default",height:c.y.H_DESKTOP_OFFSET,borderBottom:"dashed 1px ".concat(o.palette.divider)},...s&&{width:"calc(100% - ".concat(c.w.W_MINI+1,"px)")}}},children:y})}var ta=o(67100),ti=o(25210),tl=o(80682),ts=o(64720);let tc=(0,Z.forwardRef)((t,e)=>{let{title:o,path:a,icon:i,info:l,disabled:s,caption:c,roles:h,open:d,depth:p,active:u,hasChild:g,externalLink:m,currentRole:x="admin",...f}=t,b=(0,n.jsxs)(th,{disableGutters:!0,ref:e,open:d,depth:p,active:u,disabled:s,...f,children:[i&&(0,n.jsx)(r.Z,{component:"span",className:"icon",children:i}),o&&(0,n.jsx)(r.Z,{component:"span",className:"label",children:o}),c&&(0,n.jsx)(tl.Z,{title:c,arrow:!0,placement:"right",children:(0,n.jsx)(W.Z,{width:16,icon:"eva:info-outline",className:"caption"})}),l&&1!==p&&(0,n.jsx)(r.Z,{component:"span",className:"info",children:l}),g&&(0,n.jsx)(W.Z,{width:16,className:"arrow",icon:"eva:arrow-ios-forward-fill"})]});return h&&!h.includes("".concat(x))?null:m?(0,n.jsx)(ti.Z,{href:a,target:"_blank",rel:"noopener",color:"inherit",underline:"none",sx:{width:1,...s&&{cursor:"default"}},children:b}):(0,n.jsx)(ti.Z,{component:ts.r,href:a,color:"inherit",underline:"none",sx:{width:1,...s&&{cursor:"default"}},children:b})}),th=(0,O.ZP)(_.Z,{shouldForwardProp:t=>"active"!==t})(t=>{let{active:e,open:o,depth:n,theme:r}=t,a=1!==n,i=o&&!e,l="light"===r.palette.mode,s={item:{borderRadius:6,color:r.palette.text.secondary},icon:{width:22,height:22,flexShrink:0},label:{textTransform:"capitalize"},caption:{color:r.palette.text.disabled}};return{...!a&&{...s.item,fontSize:10,minHeight:56,lineHeight:"16px",textAlign:"center",flexDirection:"column",justifyContent:"center",padding:r.spacing(.5),margin:r.spacing(0,.5),fontWeight:r.typography.fontWeightSemiBold,"& .icon":{...s.icon},"& .label":{width:"100%",maxWidth:"100%",display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",...s.label,marginTop:r.spacing(.5)},"& .caption":{...s.caption,top:11,left:6,position:"absolute"},"& .arrow":{top:11,right:6,position:"absolute"},...e&&{fontWeight:r.typography.fontWeightBold,backgroundColor:(0,R.Fq)(r.palette.primary.main,.08),color:l?r.palette.primary.main:r.palette.primary.light,"&:hover":{backgroundColor:(0,R.Fq)(r.palette.primary.main,.16)}},...i&&{color:r.palette.text.primary,backgroundColor:r.palette.action.hover}},...a&&{...s.item,...r.typography.body2,minHeight:34,padding:r.spacing(0,1),fontWeight:r.typography.fontWeightMedium,"& .icon":{...s.icon,marginRight:r.spacing(1)},"& .label":{...s.label,flexGrow:1},"& .caption":{...s.caption,marginLeft:r.spacing(.75)},"& .info":{display:"inline-flex",marginLeft:r.spacing(.75)},"& .arrow":{marginLeft:r.spacing(.75),marginRight:r.spacing(-.5)},...e&&{color:r.palette.text.primary,backgroundColor:r.palette.action.selected,fontWeight:r.typography.fontWeightSemiBold},...i&&{color:r.palette.text.primary,backgroundColor:r.palette.action.hover}}}});function td(t){let{data:e,depth:o,slotProps:r}=t,a=(0,Z.useRef)(null),i=(0,S.jD)(),l=(0,ta.X)(e.path,!!e.children),[s,c]=(0,Z.useState)(!1);(0,Z.useEffect)(()=>{s&&d()},[i]);let h=(0,Z.useCallback)(()=>{e.children&&c(!0)},[e.children]),d=(0,Z.useCallback)(()=>{c(!1)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tc,{ref:a,open:s,onMouseEnter:h,onMouseLeave:d,title:e.title,path:e.path,icon:e.icon,info:e.info,roles:e.roles,caption:e.caption,disabled:e.disabled,depth:o,hasChild:!!e.children,externalLink:e.path.includes("http"),currentRole:null==r?void 0:r.currentRole,active:l,className:l?"active":"",sx:1===o?null==r?void 0:r.rootItem:null==r?void 0:r.subItem}),!!e.children&&(0,n.jsx)(J.ZP,{disableScrollLock:!0,open:s,anchorEl:a.current,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},slotProps:{paper:{onMouseEnter:h,onMouseLeave:d,sx:{mt:.5,minWidth:160,...s&&{pointerEvents:"auto"}}}},sx:{pointerEvents:"none"},children:(0,n.jsx)(tp,{data:e.children,depth:o,slotProps:r})})]})}function tp(t){let{data:e,depth:o,slotProps:r}=t;return(0,n.jsx)(p.Z,{spacing:.5,children:e.map(t=>(0,n.jsx)(td,{data:t,depth:o+1,slotProps:r},t.title))})}var tu=(0,Z.memo)(function(t){let{data:e,slotProps:o,...r}=t;return(0,n.jsx)(p.Z,{component:"nav",id:"nav-section-mini",spacing:"".concat((null==o?void 0:o.gap)||4,"px"),...r,children:e.map((t,e)=>(0,n.jsx)(tg,{items:t.items,slotProps:o},t.subheader||e))})});function tg(t){let{items:e,slotProps:o}=t;return(0,n.jsx)(n.Fragment,{children:e.map(t=>(0,n.jsx)(td,{data:t,depth:1,slotProps:o},t.title))})}var tm=o(56314),tx=o(23341);let tf=(0,Z.forwardRef)((t,e)=>{let{title:o,path:a,icon:i,info:l,disabled:s,caption:c,roles:h,open:d,depth:p,active:u,hasChild:g,externalLink:m,currentRole:x,...f}=t,b=1!==p,v=(0,n.jsxs)(tb,{ref:e,disableGutters:!0,open:d,depth:p,active:u,disabled:s,...f,children:[!b&&i&&(0,n.jsx)(r.Z,{component:"span",className:"icon",children:i}),b&&i?(0,n.jsx)(r.Z,{component:"span",className:"icon",children:i}):(0,n.jsx)(r.Z,{component:"span",className:"sub-icon"}),o&&(0,n.jsxs)(r.Z,{component:"span",sx:{flex:"1 1 auto",minWidth:0},children:[(0,n.jsx)(r.Z,{component:"span",className:"label",children:o}),c&&(0,n.jsx)(tl.Z,{title:c,placement:"top-start",children:(0,n.jsx)(r.Z,{component:"span",className:"caption",children:c})})]}),l&&(0,n.jsx)(r.Z,{component:"span",className:"info",children:l}),g&&(0,n.jsx)(W.Z,{width:16,className:"arrow",icon:d?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]});return h&&!h.includes("".concat(x))?null:g?v:m?(0,n.jsx)(ti.Z,{href:a,target:"_blank",rel:"noopener",color:"inherit",underline:"none",sx:{...s&&{cursor:"default"}},children:v}):(0,n.jsx)(ti.Z,{component:ts.r,href:a,color:"inherit",underline:"none",sx:{...s&&{cursor:"default"}},children:v})}),tb=(0,O.ZP)(_.Z,{shouldForwardProp:t=>"active"!==t})(t=>{let{active:e,open:o,depth:n,theme:r}=t,a=1!==n,i=Number(n)>2,l={width:"100%",maxWidth:"100%",display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},s={item:{marginBottom:4,borderRadius:3,color:r.palette.text.secondary,padding:r.spacing(.5,1,.5,1.5)},icon:{width:24,height:24,flexShrink:0,marginRight:r.spacing(2)},label:{...l,...r.typography.body2,fontWeight:r.typography[e?"fontWeightSemiBold":"fontWeightMedium"]},caption:{...l,...r.typography.caption,color:r.palette.text.disabled},info:{display:"inline-flex",marginLeft:r.spacing(.75)},arrow:{flexShrink:0,marginLeft:r.spacing(.75)}};return{...!a&&{...s.item,minHeight:44,"& .icon":{...s.icon},"& .sub-icon":{display:"none"},"& .label":{...s.label},"& .caption":{...s.caption},"& .info":{...s.info},"& .arrow":{...s.arrow},...e&&{color:r.palette.grey[100],backgroundColor:(0,R.Fq)(r.palette.primary.main,"light"===r.palette.mode?1:.76),"&:hover":{backgroundColor:(0,R.Fq)(r.palette.primary.main,"light"===r.palette.mode?.86:.76)}},...o&&!e&&{color:r.palette.text.primary,backgroundColor:r.palette.action.hover}},...a&&{...s.item,minHeight:36,...e&&{backgroundColor:(0,R.Fq)(r.palette.primary.main,"light"===r.palette.mode?.18:.14),"&:hover":{backgroundColor:(0,R.Fq)(r.palette.primary.main,"light"===r.palette.mode?.18:.14)}},"& .icon":{...s.icon},"& .sub-icon":{...s.icon,display:"flex",alignItems:"center",justifyContent:"center","&:before":{content:'""',width:4,height:4,borderRadius:"50%",backgroundColor:r.palette.text.disabled,transition:r.transitions.create(["transform"],{duration:r.transitions.duration.shorter}),...e&&{transform:"scale(2)",backgroundColor:r.palette.primary.main}}},"& .label":{...s.label},"& .caption":{...s.caption},"& .info":{...s.info},"& .arrow":{...s.arrow},...e&&{color:r.palette.text.primary}},...i&&{paddingLeft:"".concat(r.spacing(Number(n))," !important")}}});function tv(t){let{data:e,depth:o,slotProps:r}=t,a=(0,S.jD)(),i=(0,ta.X)(e.path,!!e.children),[l,s]=(0,Z.useState)(i);(0,Z.useEffect)(()=>{i||h()},[a]);let c=(0,Z.useCallback)(()=>{e.children&&s(t=>!t)},[e.children]),h=(0,Z.useCallback)(()=>{s(!1)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tf,{open:l,onClick:c,title:e.title,path:e.path,icon:e.icon,info:e.info,roles:e.roles,caption:e.caption,disabled:e.disabled,depth:o,hasChild:!!e.children,externalLink:e.path.includes("http"),currentRole:null==r?void 0:r.currentRole,active:i,className:i?"active":"",sx:{mb:"".concat(null==r?void 0:r.gap,"px"),...1===o?null==r?void 0:r.rootItem:null==r?void 0:r.subItem}}),!!e.children&&(0,n.jsx)(tm.Z,{in:l,unmountOnExit:!0,children:(0,n.jsx)(ty,{data:e.children,depth:o,slotProps:r})})]})}function ty(t){let{data:e,depth:o,slotProps:r}=t;return(0,n.jsx)(n.Fragment,{children:e.map(t=>(0,n.jsx)(tv,{data:t,depth:o+1,slotProps:r},t.title))})}var tj=(0,Z.memo)(function(t){let{data:e,slotProps:o,...r}=t;return(0,n.jsx)(p.Z,{component:"nav",id:"nav-section-vertical",...r,children:e.map((t,e)=>(0,n.jsx)(tw,{subheader:t.subheader,items:t.items,slotProps:o},t.subheader||e))})});function tw(t){let{subheader:e,items:o,slotProps:r}=t,[a,i]=(0,Z.useState)(!0),l=(0,Z.useCallback)(()=>{i(t=>!t)},[]),s=o.map(t=>(0,n.jsx)(tv,{data:t,depth:1,slotProps:r},t.title));return(0,n.jsx)(p.Z,{sx:{px:2},children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tx.Z,{disableGutters:!0,disableSticky:!0,onClick:l,sx:{fontSize:11,cursor:"pointer",typography:"overline",display:"inline-flex",color:"text.disabled",mb:"".concat((null==r?void 0:r.gap)||4,"px"),p:t=>t.spacing(2,1,1,1.5),transition:t=>t.transitions.create(["color"],{duration:t.transitions.duration.shortest}),"&:hover":{color:"text.primary"},...null==r?void 0:r.subheader},children:e}),(0,n.jsx)(tm.Z,{in:a,children:s})]}):s})}let tZ=(0,Z.forwardRef)((t,e)=>{let{title:o,path:a,icon:i,info:l,disabled:s,caption:c,roles:h,open:d,depth:p,active:u,hasChild:g,externalLink:m,currentRole:x="admin",...f}=t,b=1!==p,v=(0,n.jsxs)(tk,{ref:e,open:d,depth:p,active:u,disabled:s,...f,children:[i&&(0,n.jsx)(r.Z,{component:"span",className:"icon",children:i}),o&&(0,n.jsx)(r.Z,{component:"span",className:"label",children:o}),c&&(0,n.jsx)(tl.Z,{title:c,arrow:!0,children:(0,n.jsx)(W.Z,{width:16,icon:"eva:info-outline",className:"caption"})}),l&&(0,n.jsx)(r.Z,{component:"span",className:"info",children:l}),g&&(0,n.jsx)(W.Z,{width:16,className:"arrow",icon:b?"eva:arrow-ios-forward-fill":"eva:arrow-ios-downward-fill"})]});return h&&!h.includes("".concat(x))?null:m?(0,n.jsx)(ti.Z,{href:a,target:"_blank",rel:"noopener",color:"inherit",underline:"none",sx:{...s&&{cursor:"default"}},children:v}):(0,n.jsx)(ti.Z,{component:ts.r,href:a,color:"inherit",underline:"none",sx:{...s&&{cursor:"default"}},children:v})}),tk=(0,O.ZP)(_.Z,{shouldForwardProp:t=>"active"!==t})(t=>{let{active:e,open:o,depth:n,theme:r}=t,a=1!==n,i=o&&!e,l={item:{...r.typography.body2,borderRadius:6,color:r.palette.text.secondary,fontWeight:r.typography.fontWeightMedium},icon:{width:22,height:22,flexShrink:0,marginRight:r.spacing(1)},label:{textTransform:"capitalize"},caption:{marginLeft:r.spacing(.75),color:r.palette.text.disabled},info:{display:"inline-flex",marginLeft:r.spacing(.75)},arrow:{marginLeft:r.spacing(.75)}};return{...!a&&{...l.item,minHeight:32,flexShrink:0,padding:r.spacing(0,.75),"& .icon":{...l.icon},"& .label":{...l.label,whiteSpace:"nowrap"},"& .caption":{...l.caption},"& .info":{...l.info},"& .arrow":{...l.arrow},...e&&{color:r.palette.text.primary,backgroundColor:r.palette.action.selected,fontWeight:r.typography.fontWeightSemiBold},...i&&{color:r.palette.text.primary,backgroundColor:r.palette.action.hover}},...a&&{...l.item,minHeight:34,padding:r.spacing(0,1),"& .icon":{...l.icon},"& .label":{...l.label,flexGrow:1},"& .caption":{...l.caption},"& .info":{...l.info},"& .arrow":{...l.arrow,marginRight:r.spacing(-.5)},...e&&{color:r.palette.text.primary,backgroundColor:r.palette.action.selected,fontWeight:r.typography.fontWeightSemiBold},...i&&{color:r.palette.text.primary,backgroundColor:r.palette.action.hover}}}});function tC(t){let{data:e,depth:o,slotProps:r}=t,a=(0,Z.useRef)(null),i=(0,S.jD)(),l=(0,ta.X)(e.path,!!e.children),[s,c]=(0,Z.useState)(!1);(0,Z.useEffect)(()=>{s&&d()},[i]);let h=(0,Z.useCallback)(()=>{e.children&&c(!0)},[e.children]),d=(0,Z.useCallback)(()=>{c(!1)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tZ,{ref:a,open:s,onMouseEnter:h,onMouseLeave:d,title:e.title,path:e.path,icon:e.icon,info:e.info,roles:e.roles,caption:e.caption,disabled:e.disabled,depth:o,hasChild:!!e.children,externalLink:e.path.includes("http"),currentRole:null==r?void 0:r.currentRole,active:l,className:l?"active":"",sx:1===o?null==r?void 0:r.rootItem:null==r?void 0:r.subItem}),!!e.children&&(0,n.jsx)(J.ZP,{disableScrollLock:!0,open:s,anchorEl:a.current,anchorOrigin:1===o?{vertical:"bottom",horizontal:"left"}:{vertical:"center",horizontal:"right"},transformOrigin:1===o?{vertical:"top",horizontal:"left"}:{vertical:"center",horizontal:"left"},slotProps:{paper:{onMouseEnter:h,onMouseLeave:d,sx:{minWidth:160,...s&&{pointerEvents:"auto"}}}},sx:{pointerEvents:"none"},children:(0,n.jsx)(tP,{data:e.children,depth:o,slotProps:r})})]})}function tP(t){let{data:e,depth:o,slotProps:r}=t;return(0,n.jsx)(p.Z,{spacing:.5,children:e.map(t=>(0,n.jsx)(tC,{data:t,depth:o+1,slotProps:r},t.title))})}var tH=(0,Z.memo)(function(t){let{data:e,slotProps:o,sx:r,...a}=t;return(0,n.jsx)(p.Z,{component:"nav",id:"nav-section-horizontal",direction:"row",alignItems:"center",spacing:"".concat((null==o?void 0:o.gap)||6,"px"),sx:{mx:"auto",...r},...a,children:e.map((t,e)=>(0,n.jsx)(tT,{items:t.items,slotProps:o},t.subheader||e))})});function tT(t){let{items:e,slotProps:o}=t;return(0,n.jsx)(n.Fragment,{children:e.map(t=>(0,n.jsx)(tC,{data:t,depth:1,slotProps:o},t.title))})}function tS(t){let{sx:e,...o}=t,r=(0,g.Z)(),a=(0,l.K$)();return(0,i.F)("up","lg")?(0,n.jsx)(m.Z,{size:"small",onClick:()=>a.onUpdate("themeLayout","vertical"===a.themeLayout?"mini":"vertical"),sx:{p:.5,top:32,position:"fixed",left:c.w.W_VERTICAL-12,zIndex:r.zIndex.appBar+1,border:"dashed 1px ".concat(r.palette.divider),...(0,Y.Ls)({opacity:.48,color:r.palette.background.default}),"&:hover":{bgcolor:"background.default"},...e},...o,children:(0,n.jsx)(W.Z,{width:16,icon:"vertical"===a.themeLayout?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill"})}):null}function tz(){let t=K();return(0,n.jsxs)(r.Z,{sx:{flexShrink:{lg:0},width:{lg:c.w.W_MINI}},children:[(0,n.jsx)(tS,{sx:{top:22,left:c.w.W_MINI-12}}),(0,n.jsxs)(p.Z,{sx:{pb:2,height:1,position:"fixed",width:c.w.W_MINI,borderRight:t=>"dashed 1px ".concat(t.palette.divider),...Y.O1.x},children:[(0,n.jsx)(f.Z,{sx:{mx:"auto",my:2}}),(0,n.jsx)(tu,{data:t,slotProps:{currentRole:"teacher"}})]})]})}var tO=o(22734),tR=o(35691),tL=o(61865),tF=o(89701),tW=o(28084),tI=o(3283),tM=o(76623),tE=o(54986),tN=o(69299),t_=o(95743),tq=o(91797),tD=o(42834),tB=o(26337),tA=o(2589),tK=o(73393),tG=o(92580),tV=o(39255),tU=o(36953);o(90591);var tX=o(27558);let t$=[{label:"Trang chủ",linkTo:"/"},{label:"Cập nhật th\xf4ng tin",linkTo:"/"}];function tQ(){var t;let e=(0,S.tv)(),{user:o,logout:r}=(0,tV.E)(),{enqueueSnackbar:i}=(0,tU.Ds)(),l=to(),s=async()=>{try{await r(),l.onClose(),e.replace("/")}catch(t){console.error(t),i("Unable to logout!",{variant:"error"})}},c=t=>{l.onClose(),e.push(t)},h=(0,a.k)(),u=(0,a.k)(),g=tR.Ry().shape({password:tR.Z_().required("Bạn chưa chọn loại t\xe0i khoản !"),newPassword:tR.Z_().required("T\xean đăng nhập l\xe0 bắt buộc !"),rePassword:tR.Z_().required("Mật khẩu l\xe0 bắt buộc !")}),x=(0,tL.cI)({resolver:(0,tF.X)(g),defaultValues:{password:"",newPassword:"",rePassword:""}}),{reset:f,handleSubmit:b,formState:{isSubmitting:v}}=x,y=b(async t=>{try{t.newPassword===t.rePassword?(await tG.ZP.patch(tG.Hv.auth.password,t),h.onFalse(),l.onClose(),f(),i("Đ\xe3 cập nhật mật khẩu th\xe0nh c\xf4ng !")):i("Mật khẩu nhập lại kh\xf4ng đ\xfang !",{variant:"error"})}catch(t){i("Mật khẩu sai, vui l\xf2ng thử lại !",{variant:"error"})}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{sx:{borderRadius:0},children:(0,n.jsx)(tA.Z,{children:(0,n.jsxs)(tN.ZP,{children:[(0,n.jsx)(tK.Z,{children:(0,n.jsx)(tW.Z,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,n.jsx)(tI.Z,{src:"/assets/images/default_avatar.png",alt:null==o?void 0:o.displayName,sx:{width:40,height:40,border:t=>"solid 1px ".concat(t.palette.primary.light)}})})}),(0,n.jsx)(N.Z,{primary:(null==o?void 0:null===(t=o.profile)||void 0===t?void 0:t.name)||"Quản l\xfd IIT",secondary:(null==o?void 0:o.username)||"Quản trị vi\xean",primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{typography:"caption"}})]})})}),(0,n.jsxs)(te,{arrow:"left-top",open:l.open,onClose:l.onClose,sx:{width:200,p:0},children:[(0,n.jsx)(p.Z,{sx:{p:1},children:t$.map(t=>(0,n.jsx)(X.Z,{onClick:()=>c(t.linkTo),children:t.label},t.label))}),(0,n.jsx)(tE.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsx)(X.Z,{onClick:h.onTrue,sx:{m:1},children:"Đổi mật khẩu"}),(0,n.jsx)(X.Z,{onClick:s,sx:{m:1,fontWeight:"fontWeightBold",color:"error.main"},children:"Đăng xuất"})]}),(0,n.jsx)(H.Z,{open:h.value,onClose:h.onFalse,children:(0,n.jsxs)(tX.ZP,{methods:x,onSubmit:y,children:[(0,n.jsx)(tq.Z,{children:"Thay đổi mật khẩu"}),(0,n.jsxs)(tB.Z,{children:[(0,n.jsxs)(I.Z,{variant:"caption",children:["Mật khẩu phải tr\xean ",(0,n.jsx)("strong",{children:"8 k\xed tự"}),", c\xf3 \xedt nhất"," ",(0,n.jsx)("strong",{children:"1 chữ viết hoa"})," v\xe0 ",(0,n.jsx)("strong",{children:"1 k\xed tự đặc biệt."})," Mật khẩu kh\xf4ng được chứa t\xean đăng nhập, họ t\xean, số điện thoại, email... người d\xf9ng."]}),(0,n.jsxs)(p.Z,{spacing:2,sx:{mt:2},children:[(0,n.jsx)(tX.au,{variant:"filled",fullWidth:!0,name:"password",label:"Mật khẩu cũ...",type:u.value?"text":"password",InputProps:{endAdornment:(0,n.jsx)(P.Z,{position:"end",children:(0,n.jsx)(m.Z,{onClick:u.onToggle,edge:"end",children:(0,n.jsx)(W.Z,{icon:u.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,n.jsx)(tX.au,{variant:"filled",fullWidth:!0,name:"newPassword",label:"Mật khẩu mới...",type:u.value?"text":"password",InputProps:{endAdornment:(0,n.jsx)(P.Z,{position:"end",children:(0,n.jsx)(m.Z,{onClick:u.onToggle,edge:"end",children:(0,n.jsx)(W.Z,{icon:u.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,n.jsx)(tX.au,{variant:"filled",fullWidth:!0,name:"rePassword",label:"Nhập lại mật khẩu mới...",type:u.value?"text":"password",InputProps:{endAdornment:(0,n.jsx)(P.Z,{position:"end",children:(0,n.jsx)(m.Z,{onClick:u.onToggle,edge:"end",children:(0,n.jsx)(W.Z,{icon:u.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]})]}),(0,n.jsxs)(tD.Z,{children:[(0,n.jsx)(tM.Z,{onClick:h.onFalse,variant:"outlined",color:"inherit",children:"Đ\xf3ng"}),(0,n.jsx)(t_.Z,{type:"submit",variant:"contained",loading:v,color:"primary",children:"Thay đổi mật khẩu"})]})]})})]})}function tJ(t){let{openNav:e,onCloseNav:o}=t,r=(0,S.jD)(),a=(0,i.F)("up","lg"),l=K();(0,Z.useEffect)(()=>{e&&o()},[r]);let h=(0,n.jsxs)(s.Z,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:[(0,n.jsx)(tQ,{}),(0,n.jsx)(tj,{data:l,slotProps:{currentRole:""}})]});return(0,n.jsx)(d.Z,{sx:{flexShrink:{lg:0},width:{lg:c.w.W_VERTICAL}},children:a?(0,n.jsx)(p.Z,{sx:{height:1,position:"fixed",width:c.w.W_VERTICAL,borderRight:t=>"dashed 1px ".concat(t.palette.divider)},children:h}):(0,n.jsx)(tO.ZP,{open:e,onClose:o,PaperProps:{sx:{width:c.w.W_VERTICAL}},children:h})})}var tY=o(34989),t0=o(52157),t1=(0,Z.memo)(function(){let t=(0,g.Z)(),e=K();return(0,n.jsxs)(u.Z,{component:"div",sx:{top:c.y.H_DESKTOP_OFFSET},children:[(0,n.jsx)(tY.Z,{sx:{...(0,Y.Ls)({color:t.palette.background.default})},children:(0,n.jsx)(s.Z,{sx:{"& .simplebar-content":{display:"flex"}},children:(0,n.jsx)(tH,{data:e,slotProps:{currentRole:"teacher"},sx:{...t.mixins.toolbar}})})}),(0,n.jsx)(t0.Z,{})]})});function t5(t){let{children:e}=t,o=(0,l.K$)(),s=(0,i.F)("up","lg"),c=(0,a.k)(),d="horizontal"===o.themeLayout,p="mini"===o.themeLayout,u=(0,n.jsx)(tz,{}),g=(0,n.jsx)(t1,{}),m=(0,n.jsx)(tJ,{openNav:c.value,onCloseNav:c.onFalse});return d?(0,n.jsxs)(n.Fragment,{children:[s?g:m,(0,n.jsx)(h,{children:e})]}):p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tr,{onOpenNav:c.onTrue}),(0,n.jsxs)(r.Z,{sx:{minHeight:1,display:"flex",flexDirection:{xs:"column",lg:"row"}},children:[s?u:m,(0,n.jsx)(h,{children:e})]})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.Z,{sx:{minHeight:1,display:"flex",flexDirection:{xs:"column",lg:"row"}},children:[m,(0,n.jsx)(h,{children:e})]})})}},92580:function(t,e,o){o.d(e,{Hv:function(){return i}});var n=o(92173),r=o(86648);let a=n.Z.create({baseURL:r.E0});a.interceptors.response.use(t=>t,t=>Promise.reject(t.response&&t.response.data||"Đ\xe3 c\xf3 lỗi xảy ra !")),e.ZP=a;let i={chat:"/api/chat",kanban:"/api/kanban",calendar:"/api/calendar",auth:{me:"/users/me",password:"/users/password",login:"/auth/login",register:"/auth/register",refreshToken:"auth/refresh-token"},user:{root:"/users"},permission:{root:"/permissions"},role:{root:"/roles"},category:{root:"/categories"},product:{root:"/products"},voucher:{root:"/vouchers"},customer:{root:"/customers"},room:{root:"/rooms"},bill:{root:"/bills"},student:{root:"/students"},class:{root:"/classes"},question:{root:"/questions"},exam:{root:"/exams"},submission:{root:"/submissions"},store:{root:"/stores"}}}}]);