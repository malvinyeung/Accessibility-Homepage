var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.navigation=SfdcWwwBase.navigation||{};
(function(b){var a,c=0;
SfdcWwwBase.navigation.trialButtonVisibility=function(d){if(d){b(".navbar_free_trial").parents(".expandableNavigationBarComponent").addClass("isc")
}else{b(".navbar_free_trial").parents(".expandableNavigationBarComponent").addClass("isp")
}};
SfdcWwwBase.navigation.handleTrialButton=function(){if(c>100){SfdcWwwBase.navigation.trialButtonVisibility(false)
}else{clearTimeout(c);
if(typeof vp==="object"&&typeof vp.isCustomer==="function"){SfdcWwwBase.navigation.trialButtonVisibility(vp.isCustomer())
}else{c=setTimeout(SfdcWwwBase.navigation.handleTrialButton,25)
}}};
SfdcWwwBase.navigation.handleSearchLayout=function(){b(".navbar .icon-sfdc-icon-magnifying-glass").delay(600).fadeIn().addClass("gsc-globalSearhIsVisible");
if(SfdcWwwBase.searchResults){SfdcWwwBase.searchResults.init()
}b(".gsc-input").on("keypress",_.throttle(SfdcWwwBase.navigation.onSearchKeyChanged,500));
b(window).on("rezise",_.throttle(SfdcWwwBase.navigation.onSearchKeyChanged,500))
};
SfdcWwwBase.navigation.checkGoogleSearchInput=function(){if(b("#___gcse_0").length>0){SfdcWwwBase.navigation.handleSearchLayout();
clearTimeout(a)
}else{a=setTimeout(SfdcWwwBase.navigation.checkGoogleSearchInput,200)
}};
SfdcWwwBase.navigation.onSearchKeyChanged=function(){b(".gssb_c").css("min-width",b(".gsc-search-box").width()+"px")
};
SfdcWwwBase.navigation.init=function(){SfdcWwwBase.navigation.handleTrialButton();
SfdcWwwBase.navigation.checkGoogleSearchInput()
};
b(document).ready(function(){SfdcWwwBase.navigation.init()
})
}(jQuery));
(function(a){if(!a("body").hasClass("cq-wcm-edit")){a(document).ready(function(){var b=a(".leftnav");
if(b.length){var d=a(".leftnav-header-affix"),e=a(".leftnav-page-list"),f=a(".leftnav-footer-affix"),h=(parseInt(b.data("offset-top"))>0)?b.data("offset-top"):b.height(),c=a("header.header-container").outerHeight(true);
b.data("offset-top",h+c);
b.on("affix.bs.affix",function(){b.hide().removeClass("padding-top-no-affix").addClass("padding-top-affix");
d.show();
e.hide();
f.show()
});
b.on("affixed.bs.affix",function(){b.slideDown(250)
});
b.on("affix-top.bs.affix",function(){if(!e.is(":visible")){b.removeClass("padding-top-affix").addClass("padding-top-no-affix");
d.hide();
e.show();
f.hide()
}});
a(".leftnav-back-to-top").on("click",function(j){j.preventDefault();
a("html, body").animate({scrollTop:0},"slow")
})
}g(".contentHeight",".sidebar");
var i=_.throttle(function(){g(".contentHeight",".sidebar")
},200);
function g(k,j){a(j).height(a(k).height())
}})
}a.each(a(".manual_items a"),function(){if(a(this).attr("href")===window.location.pathname){a(this).addClass("active")
}});
a("select#leftnav-select").change(function(){window.location=a(this).children(":selected")[0].value
});
(function(){var b=a(".leftnav-select-container");
var c=a(".leftnav-heading .header-text").text();
b.find(".leftnav-select-head").text(c);
a(".content-container").prepend(b)
})();
(function(){a("#leftnav-select").find("option").each(function(b){var c=this.className.split(/\s+/);
if(c.indexOf("active")!==-1&&c.indexOf("active-child")===-1){a(this).attr("selected","selected")
}})
}())
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.searchResults=SfdcWwwBase.searchResults||{};
SfdcWwwBase.searchResults.isRendered=SfdcWwwBase.searchResults.isRendered||false;
(function(c){var a=SfdcWwwBase.searchResults;
var b={sm:768,md:1024,lg:1200};
a.placePromo=function(){var d=c(".search-result-item").size(),e=d>2?2:d;
c(".results-promo .columnContainer > .columns-wrapper > .container").removeClass("container");
c(".results-promo").insertAfter(c(".search-result-item:eq("+e+")")).removeClass("hidden")
};
a.processData=function(e){var g=Math.ceil(e.searchInformation.totalResults/10);
g=(g>10)?10:g;
e.searchInformation.pages=g;
var h=(e.queries.request[0]["startIndex"]+9)/10;
e.searchInformation.currentpage=h;
var d=c("#search-results_template").html();
var f=_.template(d);
c(".search-results-container").html(f(e));
a.placePromo();
a.bindPaginationClicks()
};
a.bindPaginationClicks=function(){c(".search-results-container .pagination div").on("click",function(){var d=c(this).data("result-index");
var e=(d*10)-9;
a.getResults(e);
c("html, body").animate({scrollTop:0},"fast")
})
};
a.getResults=function(e){var d="https://www.googleapis.com/customsearch/v1",g=c(".search-results-container"),f=SfdcWwwBase.utils.getQueryParameterByName("q"),h=isNaN(e)?"":"&start="+e;
if(g.size()>0&&f!==""){d+="?key="+g.data("guid")+"&cx="+g.data("cx")+"&q="+f+h;
SfdcWwwBase.utils.getJSONP(d,this.processData,false)
}};
a.bindClick=function(){c(".expandableNavigationBarComponent .icon-sfdc-icon-magnifying-glass").on("click",function(){if(c(window).width()>=b.md){c(".search-form").toggleClass("active");
c("form.gsc-search-box").toggleClass("active");
c(".phone-number").toggleClass("search-active")
}})
};
a.init=function(){if(SfdcWwwBase.searchResults.isRendered===false){SfdcWwwBase.searchResults.isRendered=true;
this.getResults();
this.bindClick()
}}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.pricingComponent=SfdcWwwBase.pricingComponent||{};
(function(a){SfdcWwwBase.pricingComponent.adjustHeights=function(){if(a(".pricingComponent .horizontal-layout").length>0){SfdcWwwBase.utils.equalizeHeights(".pricingComponent .horizontal-layout .left-pricing-column, .pricingComponent .horizontal-layout .right-pricing-column")
}if(a(".pricingComponent .vertical-layout").length>0){SfdcWwwBase.utils.equalizeHeights(".pricingComponent .pricing-container.vertical-layout .title-editions-container",SfdcWwwBase.pricingComponent.dockElement);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .edition-container",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .feature-bar",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .price-body-description",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .pre-text",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .pricing-number",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .pricing-tagline",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .included-message",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .edition-head",["xs"])
}};
SfdcWwwBase.pricingComponent.dockElement=function(){a(".pricingComponent .pricing-container .title-editions-container .funky").addClass("docked")
};
SfdcWwwBase.pricingComponent.init=function(){SfdcWwwBase.pricingComponent.showFeatures();
SfdcWwwBase.pricingComponent.adjustHeights()
};
SfdcWwwBase.pricingComponent.showFeatures=function(){a(".pricingComponent .features a").on("click",function(){var b=a(this).find(".feature-text");
if(b.text()===b.data("text-swap")){b.text(b.data("text-original"))
}else{b.data("text-original",b.text());
b.text(b.data("text-swap"))
}var d=a(this).find(".feature-caret");
d.toggleClass("icon-sfdc-icon-down-arrow icon-sfdc-icon-up-arrow");
var c=a(this).parent().next();
if(c.hasClass("hidden-xs")){c.removeClass("hidden-xs")
}else{c.addClass("hidden-xs")
}})
};
a(document).ready(function(){if(a(".pricingComponent").length>0){SfdcWwwBase.pricingComponent.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.drawerNavigation=SfdcWwwBase.drawerNavigation||{};
(function(b){var a=b("body"),d=b(".content-container"),c=b(".mobile-footer-phone-number");
a.prepend(b(".side-drawers"));
SfdcWwwBase.drawerNavigation.bindUI=function(){b(".free-trial-mobile .btn-nav").on("click",function(){event.preventDefault();
if(!a.hasClass("freetrial-drawer-active")){a.addClass("nav-active freetrial-drawer-active");
b(this).attr("sfdc:generic-linktrack-suffix","SFDC:us:mobileglobalnav:open");
if(!a.hasClass("loaded")){a.addClass("loaded");
SfdcWwwBase.drawerNavigation.openForm(b("#freeTrialForm"),b("#formSelect option:selected").data())
}SfdcWwwBase.drawerNavigation.footerSectionPhoneHandler("hide")
}else{if(this.id==="nav-open-btn"){b(this).attr("sfdc:generic-linktrack-suffix","SFDC:us:mobileglobalnav:close")
}SfdcWwwBase.drawerNavigation.closeNav()
}d.on("click touchstart",function(e){if(a.hasClass("freetrial-drawer-active")){SfdcWwwBase.drawerNavigation.closeNav()
}})
});
b(".contact-header").on("click",function(){var e=b(".contactForm-container");
b(this).toggleClass("active");
if(!e.hasClass("loaded")){SfdcWwwBase.drawerNavigation.openForm(b("#contactForm"),e.find("iframe").data())
}d.on("click touchstart",function(f){if(a.hasClass("nav-active")){SfdcWwwBase.drawerNavigation.closeNav()
}});
e.addClass("loaded");
e.slideToggle("fast");
b(".freeTrial-container").slideToggle("fast")
});
b("#formSelect").change(function(){SfdcWwwBase.drawerNavigation.openForm(b("#freeTrialForm"),b("#formSelect option:selected").data())
});
window.addEventListener("resize",function(){if(window.innerWidth>=1024&&b("body").hasClass("nav-active")){SfdcWwwBase.drawerNavigation.closeNav()
}});
window.addEventListener("orientationchange",SfdcWwwBase.drawerNavigation.doOnOrientationChange,false)
};
SfdcWwwBase.drawerNavigation.footerSectionPhoneHandler=function(e){if(c.length>0){if(e==="show"){setTimeout(function(){c.show()
},150)
}else{if(e==="hide"){c.hide()
}}}};
SfdcWwwBase.drawerNavigation.closeNav=function(){a.removeClass("nav-active");
setTimeout(function(){a.removeClass("freetrial-drawer-active");
b(".content-container").css("-webkit-overflow-scrolling","touch");
SfdcWwwBase.drawerNavigation.footerSectionPhoneHandler("show")
},200);
setTimeout(function(){d.off("click touchstart");
b("body").trigger("resize")
},300)
};
SfdcWwwBase.drawerNavigation.openForm=function(e,g){e.fadeOut(200);
e.attr("src",g.formUrl).css("height",g.formHeight);
e.load(function(){e.fadeIn(500)
})
};
SfdcWwwBase.drawerNavigation.doOnOrientationChange=function(){switch(window.orientation){case -90:case 90:SfdcWwwBase.drawerNavigation.closeNav();
break;
default:SfdcWwwBase.drawerNavigation.closeNav();
break
}};
SfdcWwwBase.drawerNavigation.init=function(){SfdcWwwBase.drawerNavigation.bindUI()
};
b(document).ready(function(){SfdcWwwBase.drawerNavigation.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.modalOverlay=SfdcWwwBase.modalOverlay||{};
(function(b){SfdcWwwBase.modalOverlay.mainPayloads={};
SfdcWwwBase.modalOverlay.getProps=function(d,c){var e=b(d.relatedTarget);
var f=e.data(c)||"";
var g=e.data("modal-title")||"";
return{path:f,title:g}
};
SfdcWwwBase.modalOverlay.loadModalContent=function(c){b("#mainModal .modal-body").html(c).find(".columnContainer > .columns-wrapper > .container").removeClass("container").addClass("container-fluid")
};
SfdcWwwBase.modalOverlay.bindUI=function(){b(".image-modal").on("show.bs.modal",function(e){var d=SfdcWwwBase.modalOverlay.getProps(e,"modal-path");
if(!a(d.path)){d.path+=".html"
}var c=b(this);
c.find(".modal-title").html(d.title);
c.find(".modal-body-container").load(d.path)
});
b("#mainModal").on("show.bs.modal",function(d){var c=SfdcWwwBase.modalOverlay.getProps(d,"modal-src");
if(typeof SfdcWwwBase.modalOverlay.mainPayloads[c.path]!=="undefined"){SfdcWwwBase.modalOverlay.loadModalContent(SfdcWwwBase.modalOverlay.mainPayloads[c.path])
}else{b.get(c.path,function(e){SfdcWwwBase.modalOverlay.mainPayloads[c.path]=e;
SfdcWwwBase.modalOverlay.loadModalContent(e)
})
}}).on("hidden.bs.modal",function(){b(this).find(".modal-body").html("")
})
};
function a(c){return !c||c.trim()===""||c.indexOf("?")>=0||c.indexOf("#")>=0||c.indexOf(".html")>=0||c.indexOf("http://")===0||c.indexOf("https://")===0||c.lastIndexOf("/")===c.length-"/".length
}SfdcWwwBase.modalOverlay.init=function(){SfdcWwwBase.modalOverlay.bindUI()
};
b(document).ready(function(){SfdcWwwBase.modalOverlay.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.loadMore=SfdcWwwBase.loadMore||{};
(function(b){SfdcWwwBase.loadMore.bindUI=function(){var d=b(".btn-load-more");
for(var c=0;
c<d.length;
c++){a(b(d[c]))
}};
function a(d){var e=d.parent().siblings().children(".columnContainer.parbase.section");
if(e.length<=2){d.hide()
}for(var c=2;
c<e.length;
c++){b(e[c]).hide()
}d.on("click",function(h){h.preventDefault();
var f,g=0;
for(f=0;
f<e.length;
f++){if(f<e.length&&g<2&&b(e[f]).is(":hidden")){b(e[f]).show();
g++;
if(f===e.length-1){b(this).hide()
}}else{if(g>=2){break
}}}})
}SfdcWwwBase.loadMore.init=function(){SfdcWwwBase.loadMore.bindUI()
};
b(document).ready(function(){SfdcWwwBase.loadMore.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.comparisonComponent=SfdcWwwBase.comparisonComponent||{};
(function(a){SfdcWwwBase.comparisonComponent.adjustWidths=function(){a(".comparisonRowComponent").each(function(){var b=a(this).find(">.comparisonCells");
if(a(window).width()>=1024){var c=Math.floor(80/(b.size()-1));
b.first().width("20%");
b.not(":first()").width(c+"%")
}else{b.width("100%")
}})
};
SfdcWwwBase.comparisonComponent.redrawDOM=function(){var f=a(".comparisonRowComponent").size();
var c=a(".comparisonRowComponent").first().find(">.comparisonCells").size();
var e=[];
for(var b=1;
b<c;
b++){e[b]=[]
}a(".comparisonRowComponent").each(function(g,h){a(this).find(">.comparisonCells").each(function(i,j){if(i!==0){e[i].push(a(this).html())
}})
});
var d="";
a.each(e,function(g,h){if(g!==0){a.each(e[g],function(i,j){d+="<div class='comparisonCells'>"+j+"</div>"
})
}});
d="<div class='comparisonComponent'><div class='comparisonRowComponent'>"+d+"</div></div>";
a(".comparisonComponent").replaceWith(d)
};
SfdcWwwBase.comparisonComponent.equalizeHeight=function(){SfdcWwwBase.utils.equalizeHeightsResponsive(".comparisonComponent .comparisonCells.comparison-cell-data .columns-wrapper",["xs","sm"])
};
SfdcWwwBase.comparisonComponent.init=function(){SfdcWwwBase.comparisonComponent.adjustWidths();
SfdcWwwBase.comparisonComponent.equalizeHeight();
if(a(window).width()<1024){SfdcWwwBase.comparisonComponent.redrawDOM()
}};
a(document).ready(function(){if(a(".comparisonComponent").length>0){SfdcWwwBase.comparisonComponent.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.moduleContentReplacement=SfdcWwwBase.moduleContentReplacement||{};
(function(e){var d="content-replacement-source",a="content-replacement-id",c="module-content",b="content-close";
SfdcWwwBase.moduleContentReplacement.ogHeight={};
SfdcWwwBase.moduleContentReplacement.hideModuleContent=function(){var f=this;
e(".btn-content-replace-close").on("click",function(){var j=e(this).data(a),g=f.getOgColumnContainer(j),i=c+"-"+j,h=e("#"+i)[0];
e(h).fadeOut("slow",function(){e(h).remove();
f.adjustHotSwapHeight(j,f.ogHeight[i]);
e(g).fadeIn("slow","linear")
})
})
};
SfdcWwwBase.moduleContentReplacement.adjustHotSwapHeight=function(g,f){var h=this;
e(h.getOgColumnContainer(g)).closest(".hot-swap").css({height:f})
};
SfdcWwwBase.moduleContentReplacement.windowResizeHandler=function(){e(".columnContainer.hot-swap").each(function(){var g=e(this).find(".content-replacement-overlay"),i,f,h=e(this).find(">.columns-wrapper").height();
if(g.size()>0){i=g.attr("id");
f=g.height();
SfdcWwwBase.moduleContentReplacement.ogHeight[i]=h;
e(this).height(f)
}else{e(this).height(h)
}})
};
SfdcWwwBase.moduleContentReplacement.showModuleContent=function(){var f=this;
e(".btn-content-replace").on("click",function(){var i=e(this).data(a),g=f.getOgColumnContainer(i),h=c+"-"+i,j=e(this).data(d)+".html";
e(g).closest(".columnContainer").addClass("hot-swap");
if(e("#"+h).size()===0){e.get(j,function(p){var m=e.parseHTML(p,true),l=e("<div/>",{id:h,"class":"content-replacement-overlay"}).append(m),n=b+"-"+i,k=e(g).children("#"+n).clone(),o=e(m).find(".columns-wrapper.lazy");
f.ogHeight[h]=e(g).height();
f.setColumnsBgImage(o);
e(k).removeClass("hidden");
e(l).prepend(k);
e(g).before(l);
f.adjustHotSwapHeight(i,f.ogHeight[h]);
e(g).fadeOut("fast",function(){var q=l.height();
f.adjustHotSwapHeight(i,q);
e("#"+h+".content-replacement-overlay").fadeIn("fast")
});
f.hideModuleContent()
})
}})
};
SfdcWwwBase.moduleContentReplacement.setColumnsBgImage=function(f){f.map(function(h,g){var i=e(g).data("src");
e(g).css("background-image",'url("'+i+'")')
})
};
SfdcWwwBase.moduleContentReplacement.getOgColumnContainer=function(f){return e("div.columnContainer div[data-content-replacement-id="+f+"]")[0]
};
SfdcWwwBase.moduleContentReplacement.init=function(){var f=this;
f.showModuleContent();
e(window).on("resize",_.throttle(f.windowResizeHandler,500))
};
SfdcWwwBase.moduleContentReplacement.init()
}(jQuery));