(self.wpJsonpPcmallFlashsale=self.wpJsonpPcmallFlashsale||[]).push([[270],{5270:function(e,a,t){"use strict";t.d(a,{Z:function(){return ce}});var l=t(3804),r=t.n(l),n=t(215),s=t.n(n),o=t(6775),i=t(6641),c=t(7868);function m(){return r().createElement("img",{className:s()("dVIDKE","iBSasf"),src:"./ic_warning_"+c.jC+"only@3x.png"})}var d=t(9709),u=t(7225),p=t(9006);function _(e){var a=function(e){switch(e){case"TW":return"pz3tXL";case"BR":return"cGZI9g";case"PL":return"_1R3ROO";default:return!1}}(e.locale);return l.createElement(u.Z,{color:d.gy,className:"IPrTCj"},l.createElement("div",{className:s()("qNGPFx",a)}))}_.defaultProps={locale:(0,p.Kd)()};var g=_;function h(e){var a=e.locale;return r().createElement(u.Z,{color:d.C8,className:"V7FOnb"},r().createElement("div",{className:"TW"===a?"KlJ5fN":"u5BLBh"}))}h.defaultProps={locale:(0,p.Kd)()};var f=h,E=t(1437),S=t(4174),N=t(4399),v=t(7705),C=t(9884),P=t(3317),w=t(6704),I=t(5462),b={image:"Ww4ck0",flag:"HT+eFy","flag--pc":"_9Lo--f","flag--rw":"A-AT5V",brandLogo:"swbHaS",brandLogoWrapper:"vm7IUd",promotionBadgeWrapper:"C+nQBU",flashSaleEntrance:"_43c7xw",pc:"uOQMgX",flashSaleLanding:"nQkyfK",smartFlashSaleLanding:"Dzik66",overlayImage:"ocUYNc",itemImage:"wP9-V9",itemImagePlaceholderWrapper:"nrjL3+"},L=w.I18n.t;function A(e){var a=(0,N.B)().accountInfo,t=(0,E.isFeatureEnabled)(S.FQ0),l=e.item,n=l.is_adult,o=l.promo_images,c=l.image,d=l.raw_discount,u=l.promo_overlay_image,_=l.brand_sale_brand_custom_logo,h=e.isBrandSale,w=void 0!==h&&h,A=e.isMart,O=void 0!==A&&A,T=e.isSoldOut,y=e.isOngoingSession,B=e.flashSalePage,W=e.platform,R=e.locale,k=e.PromotionBadge,D=e.SoldOutBadge,M=!!_,x=d||0,V=(0,v.getCountryConfig)(R).adultAge,G=(0,C.Eg)(a,V,R),H=(0,p.of)(),F=(0,P.Jn)(o&&o.length>0?o[0]:c,!0);return r().createElement("div",{className:b.image},T&&r().createElement(D,null),O&&B===I.Yv.SMART_FLASH_SALE_ENTRANCE&&t&&r().createElement("div",{className:s()(b.flag,b["flag--"+W])},r().createElement(f,null)),w&&(B===I.Yv.FLASH_SALE_ENTRANCE?r().createElement("div",{className:b.flag},r().createElement(g,null)):M&&W===I.iw.RW?r().createElement(i.p,{className:b.brandLogo,wrapperClassName:b.brandLogoWrapper,src:(0,P.Jn)(_),placeholderWrapperClassName:b.brandLogoPlaceholderWrapper,useImgTag:!0}):null),y&&!!x&&r().createElement("div",{className:s()(b.promotionBadgeWrapper,b[W],b[B])},W===I.iw.RW?r().createElement(k,{rawDiscount:x,key:"badge-promotion"}):r().createElement(k,{rawDiscount:x,language:H,key:"badge-promotion",offText:L("pr_badge_label_off")})),u&&r().createElement(i.p,{src:(0,P.Jn)(u,!0),className:b.overlayImage,wrapperClassName:b.overlayImage,hidePlaceholder:!0}),n&&!G?r().createElement(m,null):r().createElement(i.p,{className:b.itemImage,wrapperClassName:b.itemImage,placeholderWrapperClassName:b.itemImagePlaceholderWrapper,src:F}))}A.defaultProps={locale:(0,p.Kd)()};var O=t(1180),T={price:"S82jCy",lineThrough:"aYDuZr",alighWithBaseline:"hSM8kk",pcEntrance:"BnrHAR",sale_price:"jNH2Rc",hidden_price:"jM-GZB",frontSymbol:"_3DNk+W",endSymbol:"_3RP36G",original_price:"Eostwp",pcLanding:"PW9hJj",rwHorizontal:"Kx0s8F",rwVertical:"OQda0o",shopEntrance:"UUg6xh",shopCampaign:"wDjgeW"};function y(e){var a=e.locale,t=e.price,l=e.priceType,n=e.flashSalePage,o=e.platform,i=e.cardType,c=(0,O.getUtilsByCountry)(a).formatServerCurrency,m=(0,O.getCurrencySymbol)(a),d=I.gJ.has(a),u=I.O9.has(a),p=c(t,{symbol:""}),_=function(e,a){switch(e){case I.iw.PC:switch(a){case I.WK.PC_ENTRANCE_PAGE_ITEM_CARD:return T.pcEntrance;case I.WK.PC_LANDING_PAGE_ITEM_CARD:return T.pcLanding}break;case I.iw.RW:switch(a){case I.WK.RW_HORIZONTAL_ITEM_CARD:return T.rwHorizontal;case I.WK.RW_VERTICAL_ITEM_CARD:return T.rwVertical}}};return r().createElement("div",{className:s()(T.price,T[l],_(o,i),T[n],l===I.g8.ORIGINAL_PRICE&&T.lineThrough)},r().createElement("div",{className:T.alighWithBaseline},!d&&r().createElement("span",{className:s()(T.frontSymbol,T[l],_(o,i))},u?m[0]:m),l===I.g8.HIDDEN_PRICE?t:p,(d||u)&&r().createElement("span",{className:s()(T.endSymbol,T[l],_(o,i))},u?m[1]:m)))}y.defaultProps={locale:(0,p.Kd)()};var B=t(7928),W={progressBar:"rZzxlM",soldOutText:"ZSixwp",pc:"cI1UUu",fire:"RX2Jch",large:"RJ6Vpu",text:"eNmE7o","es-mx":"sVi092",soldBar:"d3m1Az",barBackground:"SqDxib"},R=w.I18n.t;function k(e){var a=e.stock,t=e.flashSaleStock,l=e.soldOutTime,n=void 0===l?0:l,o=e.startTime,i=void 0===o?0:o,c=e.height,m=e.flashSalePage,d=e.platform,u=e.language,p=t-a,_=t,g=(0,B.kN)(_,p,n,i),h=g.soldInPercentRounded,f=g.isSoldOut,E=g.soldOutHour,S=g.soldOutMinute;return f?r().createElement("div",{className:s()(W.soldOutText,W[d])},m===I.Yv.BRAND_SALE_ENTRANCE?R("label_flashsale_n_sold",{n:_}):S?1===S?R("label_amount_sold_out_in_1_min",{amount:_}):R("label_amount_sold_out_in_n_mins",{minutes:S,amount:_}):E?1===E?R("label_amount_sold_out_in_1_hour",{hours:1,amount:_}):R("label_amount_sold_out_in_n_hours",{hours:E,amount:_}):null):r().createElement("div",{className:W.progressBar,style:{height:c+"px"}},h>I.Gz&&r().createElement("div",{className:s()(W.fire,16===c&&W.large)}),r().createElement("div",{className:s()(W.text,16===c&&W.large,h>I.dz&&h<=85&&W[u.toLowerCase()])},function(e,a,t){return e<=I.dz?R("label_flashsale_selling_fast"):e<=85?R("label_flashsale_n_sold",{n:a}):t>=10?R("label_flashsale_selling_out"):R("label_flashsale_only_n_left",{n:t})}(h,p,a)),r().createElement("div",{className:W.soldBar,style:{height:c+"px",width:(h<=I.Sc?I.Sc:h)+"%",borderRadius:c/2+"px 0px 0px "+c/2+"px"}}),r().createElement("div",{className:W.barBackground,style:{borderRadius:c/2+"px"}}))}k.defaultProps={language:(0,p.of)()};var D=t(208),M={button:"nZq9yw",pc:"UW3hW6",view_details:"J-p9Os",smartFlashSaleEntrance:"KLn0vp",flashSaleLanding:"LnQWjz",smartFlashSaleLanding:"mNuZ1B",buy_now:"DNWhVt",rw:"_0ZSVKC",brandSaleLanding:"_85DFPQ",shopEntrance:"qHfT25",shopFlashSale:"y4myie",shopCampaign:"Yd9IhV"};function x(){return x=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},x.apply(this,arguments)}var V=w.I18n.t;function G(e){var a=e.flashSalePage,t=e.platform,l=e.buttonType,n=x({},e),o=(0,D.Z)(l===I.JB.BUY_NOW?"BuyNowButton":"ViewDetailsButton",n);return r().createElement("div",{className:s()(M.button,M[t],M[l],M[a]),onClick:o},function(e,a){switch(a){case I.JB.VIEW_DETAILS:return e===I.iw.RW?V("label_view_details"):V("label_btn_view_details");case I.JB.BUY_NOW:switch(e){case I.iw.PC:return V("label_buy_now_flash_sale");case I.iw.RW:return window.innerWidth>320?V("label_flash_sale_buy_long"):V("label_flash_sale_buy_short")}}}(t,l))}var H=t(961),F=t(6353),Z={restOldBar:"gwKQb6",itemInfo:"yCebL1",flashSaleEntrance:"QpXvtd",smartFlashSaleEntrance:"Gtk1Yo",isOngoing:"WNgAbL",priceSectionWrapper:"LYc+Cb",progressBarWrapper:"Nq-pih",viewDetailsButtonWrapper:"UzPLcu"};function K(e){var a=e.item,t=e.isOngoingSession,l=e.flashSalePage,n=e.positionId,o=e.layout,i=a.price,c=a.hidden_price_display,m=a.price_before_discount,d=a.stock,u=a.flash_sale_stock,p=a.start_time,_=a.end_time,g=(0,F.Qg)();return r().createElement("div",{className:s()(Z.itemInfo,Z[l],t&&Z.isOngoing)},r().createElement("div",{className:s()(Z.priceSectionWrapper,Z[l],t&&Z.isOngoing)},!t&&r().createElement(y,{price:m,priceType:I.g8.ORIGINAL_PRICE,flashSalePage:l,platform:I.iw.PC,cardType:I.WK.PC_ENTRANCE_PAGE_ITEM_CARD}),r().createElement(y,{price:t?i:c,platform:I.iw.PC,flashSalePage:l,priceType:t?I.g8.SALE_PRICE:I.g8.HIDDEN_PRICE,cardType:I.WK.PC_ENTRANCE_PAGE_ITEM_CARD})),t?r().createElement("div",{className:s()(Z.progressBarWrapper,Z[l])},g?r().createElement(k,{stock:d,flashSaleStock:u,startTime:p,soldOutTime:_,height:16,flashSalePage:l,platform:I.iw.PC}):r().createElement(H.Z,{sold:a.flash_sale_stock-a.stock,total:a.flash_sale_stock,soldOutTime:a.end_time,startTime:a.start_time,layout:o,className:Z.restOldBar})):r().createElement("div",{className:Z.viewDetailsButtonWrapper},r().createElement(G,{item:a,positionId:n,flashSalePage:l,platform:I.iw.PC,buttonType:I.JB.VIEW_DETAILS})))}var J=t(7152),U=t(603),j="UxAacW",z=function(e){var a=e.ratingStar,t=e.className,l=e.onClick;return r().createElement("div",{className:s()("-lAlT4","typo-r10",t||""),onClick:l},r().createElement("div",{className:"kPxy7V",onClick:l},I.uO.map((function(e){var t=Math.max(0,Math.min(100*(a-e),100));return 100===t?r().createElement(U.Z,{className:j,key:e}):0===t?r().createElement(J.Z,{className:j,key:e}):r().createElement("div",{className:j,key:e},r().createElement("div",{className:"km7e-t",style:{width:t+"%"}},r().createElement(U.Z,{className:"pzASgD"})),r().createElement(J.Z,{classNames:"_0ytJnW"}))}))))},Q=t(6977),Y={voucherLabel:"sJMN5b",pc:"_4z+iwp",rw:"_7ChCWf",text:"RUFY7c"};function q(e){var a=e.voucher,t=e.platform,l=(0,Q.RF)(a);return r().createElement("div",{className:s()(Y.voucherLabel,Y[t])},$,r().createElement("div",{className:Y.text},l),X)}var X=r().createElement("svg",{width:"2",height:"14",viewBox:"0 0 2 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M2 1.74846e-07L1.22392e-06 0L1.1365e-06 1L1 1V1.007L0.887356 1.09653C0.348616 1.56086 0.0181828 2.24957 0.0181828 3L0.0249962 3.18623C0.0747015 3.86366 0.39351 4.47784 0.887356 4.90347L1 4.993V5.008L0.887356 5.09653C0.348615 5.56086 0.0181825 6.24957 0.0181824 7L0.0249958 7.18623C0.0747011 7.86366 0.39351 8.47784 0.887355 8.90347L1 8.993V9.008L0.887355 9.09653C0.348615 9.56086 0.0181821 10.2496 0.0181821 11L0.0249955 11.1862C0.0747008 11.8637 0.39351 12.4778 0.887355 12.9035L1 12.994V13H8.74228e-08L0 14H2L2 12.4145C1.42776 12.2084 1.01818 11.6529 1.01818 11C1.01818 10.3471 1.42776 9.79159 2 9.58553V8.41447C1.42776 8.20841 1.01818 7.65292 1.01818 7C1.01818 6.34708 1.42776 5.79159 2 5.58553L2 4.41447C1.42776 4.20841 1.01818 3.65292 1.01818 3C1.01818 2.34708 1.42776 1.79159 2 1.58553V1.74846e-07Z",fill:"#EE4D2D"})),$=r().createElement("svg",{width:"2",height:"14",viewBox:"0 0 2 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M0 14H2V13H1V12.993L1.11265 12.9035C1.65139 12.4391 1.98182 11.7504 1.98182 11L1.975 10.8138C1.9253 10.1363 1.60649 9.52216 1.11265 9.09653L1 9.007V8.992L1.11265 8.90347C1.65139 8.43914 1.98182 7.75043 1.98182 7L1.975 6.81377C1.9253 6.13634 1.60649 5.52216 1.11265 5.09653L1 5.007V4.992L1.11265 4.90347C1.65139 4.43914 1.98182 3.75043 1.98182 3L1.975 2.81377C1.9253 2.13634 1.60649 1.52216 1.11265 1.09653L1 1.006V1H2V0H0V1.58553C0.572242 1.79159 0.981818 2.34708 0.981818 3C0.981818 3.65292 0.572242 4.20841 0 4.41447V5.58553C0.572242 5.79159 0.981818 6.34708 0.981818 7C0.981818 7.65292 0.572242 8.20841 0 8.41447V9.58553C0.572242 9.79159 0.981818 10.3471 0.981818 11C0.981818 11.6529 0.572242 12.2084 0 12.4145V14Z",fill:"#EE4D2D"})),ee={itemInfo:"vjR7po",name:"ne3HDa",specialTag:"djJhg6",ratingAndVoucher:"wmpqcA",hideRating:"Oq3uNl",extraDiscountLabel:"LV6Fvm",priceAndBarAndButton:"a+QrrG",priceAndBar:"rMJoYU",progressBarWrapper:"+GMta4",showSoldOutText:"Qzv3eb",buttonWrapper:"_3TIoOR",viewDetails:"QDVhcH",soldOutStamp:"wfKFeV",tw:"xzruYm",id:"W9cOD9",th:"cNKYQ4",vn:"VPrmnj",br:"_2qGNDo",es:"ki9xO0",ar:"e+Bbss",pl:"KKvNdt",fr:"_87kkcJ"},ae=w.I18n.t;function te(e){var a=e.item,t=e.flashSalePage,l=e.isOngoingSession,n=e.isSoldOut,o=e.locale,i=e.positionId,c=e.layout,m=a.promo_name,d=a.name,u=a.extra_discount_info,p=a.price_before_discount,_=a.price,g=a.hidden_price_display,h=a.stock,f=a.flash_sale_stock,E=a.start_time,S=a.end_time,N=a.voucher,v=a.item_rating,C=(0,Q.Zk)(u,ae),P=!(null==N||!N.voucher_code),w=(0,F.Qg)(),b=(0,F.C1)();return r().createElement("div",{className:s()(ee.itemInfo,n&&ee.soldOutStamp,ee[o.toLowerCase()])},r().createElement("div",{className:ee.name},m||d),r().createElement("div",{className:ee.specialTag},C?r().createElement("div",{className:ee.extraDiscountLabel},C):l&&!n&&r().createElement("div",{className:s()(ee.ratingAndVoucher,!b&&ee.hideRating)},b&&v&&r().createElement(z,{ratingStar:v.rating_star,onClick:function(){}}),P&&r().createElement(q,{voucher:N,platform:I.iw.PC}))),r().createElement("div",{className:ee.priceAndBarAndButton},r().createElement("div",{className:ee.priceAndBar},r().createElement("div",null,r().createElement(y,{price:p,priceType:I.g8.ORIGINAL_PRICE,flashSalePage:t,platform:I.iw.PC,cardType:I.WK.PC_LANDING_PAGE_ITEM_CARD})),r().createElement("div",null,r().createElement(y,{price:l?_:g,platform:I.iw.PC,flashSalePage:t,priceType:l?I.g8.SALE_PRICE:I.g8.HIDDEN_PRICE,cardType:I.WK.PC_LANDING_PAGE_ITEM_CARD})),l&&r().createElement("div",{className:s()(ee.progressBarWrapper,n&&ee.showSoldOutText)},w?r().createElement(k,{stock:h,flashSaleStock:f,startTime:E,soldOutTime:S,height:16,flashSalePage:t,platform:I.iw.PC}):r().createElement(H.Z,{sold:a.flash_sale_stock-a.stock,total:a.flash_sale_stock,soldOutTime:a.end_time,startTime:a.start_time,layout:c,className:ee.restOldBar}))),!n&&r().createElement("div",{className:s()(ee.buttonWrapper,!l&&ee.viewDetails)},r().createElement(G,{item:a,positionId:i,flashSalePage:t,platform:I.iw.PC,buttonType:l?I.JB.BUY_NOW:I.JB.VIEW_DETAILS}))))}var le=t(9924),re=(t(831),t(5325),t(5779),t(3262)),ne=t(8541),se={itemCard:"bDb3QO",smartFlashSaleEntrance:"_12qZ+j",upcoming:"q4n46w",flashSaleEntrance:"_2jVIc-",flashSaleLanding:"_864esQ",smartFlashSaleLanding:"H2kspG",imageWrapper:"EkjBMP",entranceItemInfoWrapper:"ML8D8p",landingItemInfoWrapper:"_33elEP"};function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},oe.apply(this,arguments)}function ie(e){var a=e.item,t=e.isOngoingSession,n=void 0!==t&&t,i=e.isMart,m=void 0!==i&&i,d=e.flashSalePage,u=e.locale,p=e.positionId,_=e.layout,g=a.stock,h=a.flash_sale_stock,f=a.promotionid,E=a.itemid,S=a.flash_sale_type,N=a.name,v=a.shopid,C=a.is_dp,P=d===I.Yv.FLASH_SALE_ENTRANCE||d===I.Yv.SMART_FLASH_SALE_ENTRANCE,w=n&&(0===g||0===h),b=w?re.xW.getUrl({seoName:a.name,shopId:a.shopid,itemId:a.itemid,from:(0,Q.TN)(S),promotionid:a.promotionid}):C?c.bp[u]:(0,Q.nu)(u,d,{promotionId:f,itemId:E,shopId:v,name:N}),L=(0,ne.Z)("FlashSaleItemCard",oe({},e)),O=(0,D.Z)("FlashSaleItemCard",oe({},e));return function(e,a){var t=a.flash_sale_stock,r=a.stock,n=a.recommendation_trace_id,s=a.promotionid,o=a.itemid;(0,l.useEffect)((function(){var a=t-r;e&&window.Sentry&&a<0&&window.Sentry.captureMessage("Flash Sale sold out count is negative \n        trace id: "+n+"\n        promotionid: "+s+"\n        itemid: "+o+"\n        flash_sale_stock:"+t+"\n        stock:"+r+"\n        sold(flash_sale_stock-stock): "+a+",","error")}),[e])}(n,a),r().createElement("div",{className:s()(se.itemCard,se[d],!n&&se.upcoming),ref:L,onClick:O},r().createElement(o.Link,{className:se.link,to:b},r().createElement("div",{className:s()(se.imageWrapper,se[d])},r().createElement(A,{item:a,isMart:m,isSoldOut:w,isOngoingSession:n,platform:I.iw.PC,flashSalePage:d,PromotionBadge:le.OO,SoldOutBadge:le.VL})),P?r().createElement("div",{className:se.entranceItemInfoWrapper},r().createElement(K,{item:a,isOngoingSession:n,flashSalePage:d,positionId:p,layout:_})):r().createElement("div",{className:se.landingItemInfoWrapper},r().createElement(te,{item:a,flashSalePage:d,isOngoingSession:n,isSoldOut:w,locale:u,positionId:p,layout:_}))))}ie.defaultProps={locale:(0,p.Kd)()};var ce=r().memo(ie,Q.NR)},961:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var l=t(3804),r=t(215),n=t.n(r),s=t(6704),o=t(9006),i=t(7928),c=t(21),m={"flashSaleProgressBarWrapper--mart-home-page":"pCdgZ8","flashSaleProgressBarWrapper--home-page":"wJPwdf","flashSaleProgressBarWrapper--landing-page":"MGZI1K","flashSaleProgressBarWrapper--microsite":"yI0UzQ",flashSaleProgressBar:"PWiXzz",flashSaleProgressBarFire:"MFL1x4",flashSaleProgressBarText:"k-QP6z","flashSaleProgressBarText--microsite":"MpTiwk","es-mx":"_3Fl7Jb",flashSaleProgressBarComplementWrapper:"+P9C6F",flashSaleProgressBarComplementSizer:"iucKJM",flashSaleProgressBarComplementColor:"_61H4TY",flashSaleSoldOut:"x61JMi","flashSaleSoldOut--mart-home-page":"nxnphQ","flashSaleSoldOut--home-page":"CqoU2F","flashSaleSoldOut--microsite":"_9VxC7v"},d=s.I18n.t,u=(0,s.I18n.withI18nCollections)([c.L,c.x7])((function(e){var a=e.sold,t=e.total,r=e.soldOutTime,s=void 0===r?0:r,c=e.startTime,u=void 0===c?0:c,p=e.layout,_=e.className,g=(0,i.kN)(t,a,s,u),h=g.remainingInPercent,f=g.remainingInPercentRounded,E=g.isSoldOut,S=g.soldOutHour,N=g.soldOutMinute;return E?l.createElement("div",{className:n()(m.flashSaleSoldOut,m["flashSaleSoldOut--"+p])},N?1===N?d("label_amount_sold_out_in_1_min",{amount:t}):d("label_amount_sold_out_in_n_mins",{minutes:N,amount:t}):S?1===S?d("label_amount_sold_out_in_1_hour",{hours:1,amount:t}):d("label_amount_sold_out_in_n_hours",{hours:S,amount:t}):null):l.createElement("div",{className:n()(m.flashSaleProgressBarWrapper,m["flashSaleProgressBarWrapper--"+p],_)},l.createElement("div",{className:m.flashSaleProgressBar},l.createElement("div",{className:n()(m.flashSaleProgressBarText,m["flashSaleProgressBarText--"+p],f>15&&m[(0,o.of)().toLowerCase()])},f>15?d("label_n_sold_flash_sale",{count:a>0?a:0}):d("label_selling_fast")),l.createElement("div",{className:m.flashSaleProgressBarComplementWrapper},l.createElement("div",{className:m.flashSaleProgressBarComplementSizer,style:{width:f+"%"}},l.createElement("div",{className:m.flashSaleProgressBarComplementColor}))),h<=50&&l.createElement("div",{className:m.flashSaleProgressBarFire})))}))},7868:function(e,a,t){"use strict";t.d(a,{jC:function(){return i},Vb:function(){return c},GR:function(){return m},HS:function(){return r},r3:function(){return d},bp:function(){return u}});var l,r,n,s=t(7705),o=(0,t(9006).Kd)(),i=(0,s.getCountryConfig)(o).adultAge||(0,s.getCountryConfig)("default").adultAge,c={default:"flash_sale",SG:"flash_deal",PH:"flash_deal",MY:"shocking_sale",ID:"flash_sale",TW:"flash_sale",VN:"flash_sale",TH:"flash_sale",BR:"flash_sale",MX:"flash_sale",CO:"flash_sale",CL:"flash_sale",AR:"flash_sale",FR:"flash_deal",PL:"flash_sale",ES:"flash_sale",IN:"hot_deals_page_title"},m="text_"+(c[o]||c.default)+"_ended";c[o]||c.default,function(e){e.HOME_PAGE="home-page",e.LANDING_PAGE="landing-page",e.FLASH_SALE_LANDING="flash-sale-landing",e.PRODUCT_BAND="product-band",e.MICROSITE="microsite",e.MALL_PAGE="mall-page",e.SHOP_PAGE="shop-page",e.MART_PAGE="mart-page"}(l||(l={})),function(e){e.HOME_PAGE="home-page",e.LANDING_PAGE="landing-page",e.MART_LANDING_PAGE="mart-landing-page",e.MART_HOME_PAGE="mart-home-page"}(r||(r={})),function(e){e[e.NEUTRAL=0]="NEUTRAL",e[e.CLOSE=1]="CLOSE",e[e.OPEN=-1]="OPEN"}(n||(n={}));var d=30,u={ID:"/produk-digital/lainnya",VN:"/digital-product/shop/others",PH:"/m/load-bills ",TH:"/web",MY:"/web",SG:"/m/sg-dp",TW:"/m/DPonWeb",BR:"/web",MX:"/web",CO:"/web",CL:"/web",AR:"/web",FR:"/web",PL:"/web",ES:"/web",IN:"/web"}},7928:function(e,a,t){"use strict";t.d(a,{Z5:function(){return m},wG:function(){return d},kN:function(){return u}});var l=t(7944),r=t(6594),n=t(9006),s=t(3398),o=(t(5779),(0,n.Kd)()),i=(0,s.R)((0,n.Kd)(),(0,n.of)()),c=l.timeLocales[i],m=((0,r.Zz)(o).getUrl,function(e){return(0,l.formatTime)(c,1e3*e,"hh:mm")}),d=function(e){return(0,l.formatTime)(c,1e3*e,{month:"short",day:"short"})};function u(e,a,t,l){var r=a/e*100,n=Math.ceil(Math.floor(2*r)/2),s=100*(e-a)/e,o=Math.ceil(Math.floor(2*s)/2),i=a===e,c=i?Math.floor((t-l)/3600):null;return{soldInPercentRounded:n,remainingInPercent:s,remainingInPercentRounded:o,isSoldOut:i,soldOutHour:c,soldOutMinute:i&&0===c?t-l<60?1:Math.floor((t-l)/60)%60:null}}}}]);
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-flashsale/_/270.85845f19969fcf653823.legacy.js.map