var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.fixIE8css=SfdcWwwBase.fixIE8css||{};
(function(){SfdcWwwBase.fixIE8css.init=function(){if(/MSIE 8\.0/.test(navigator.appVersion)){var b=document.getElementsByTagName("link"),a=b.length,g,d,c=false,f,e;
for(d=0;
d<a;
d+=1){f=b[d].href;
if(typeof f!=="undefined"&&/^(http)?(s)?(:)?\/\/[\w\d\.\/-]*\.css$/.test(f)){e=f.replace(/^[\w:]*[\/]{2}/,"");
e=e.substr(e.indexOf("/"),e.length);
b[d].href=e;
c=true
}}if(c===true){g=document.createElement("script");
g.type="text/javascript";
g.src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js";
document.body.appendChild(g)
}}};
SfdcWwwBase.fixIE8css.init()
}());
+function(b){function a(){var e=document.createElement("bootstrap");
var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}
}}return false
}b.fn.emulateTransitionEnd=function(e){var d=false;
var c=this;
b(this).one("bsTransitionEnd",function(){d=true
});
var f=function(){if(!d){b(c).trigger(b.support.transition.end)
}};
setTimeout(f,e);
return this
};
b(function(){b.support.transition=a();
if(!b.support.transition){return
}b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(c){if(b(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
+function(e){var d='[data-dismiss="alert"]';
var b=function(f){e(f).on("click",d,this.close)
};
b.VERSION="3.3.2";
b.TRANSITION_DURATION=150;
b.prototype.close=function(k){var j=e(this);
var g=j.attr("data-target");
if(!g){g=j.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}var h=e(g);
if(k){k.preventDefault()
}if(!h.length){h=j.closest(".alert")
}h.trigger(k=e.Event("close.bs.alert"));
if(k.isDefaultPrevented()){return
}h.removeClass("in");
function f(){h.detach().trigger("closed.bs.alert").remove()
}e.support.transition&&h.hasClass("fade")?h.one("bsTransitionEnd",f).emulateTransitionEnd(b.TRANSITION_DURATION):f()
};
function c(f){return this.each(function(){var h=e(this);
var g=h.data("bs.alert");
if(!g){h.data("bs.alert",(g=new b(this)))
}if(typeof f=="string"){g[f].call(h)
}})
}var a=e.fn.alert;
e.fn.alert=c;
e.fn.alert.Constructor=b;
e.fn.alert.noConflict=function(){e.fn.alert=a;
return this
};
e(document).on("click.bs.alert.data-api",d,b.prototype.close)
}(jQuery);
+function(d){var b=function(f,e){this.$element=d(f);
this.options=d.extend({},b.DEFAULTS,e);
this.isLoading=false
};
b.VERSION="3.3.2";
b.DEFAULTS={loadingText:"loading..."};
b.prototype.setState=function(g){var j="disabled";
var e=this.$element;
var h=e.is("input")?"val":"html";
var f=e.data();
g=g+"Text";
if(f.resetText==null){e.data("resetText",e[h]())
}setTimeout(d.proxy(function(){e[h](f[g]==null?this.options[g]:f[g]);
if(g=="loadingText"){this.isLoading=true;
e.addClass(j).attr(j,j)
}else{if(this.isLoading){this.isLoading=false;
e.removeClass(j).removeAttr(j)
}}},this),0)
};
b.prototype.toggle=function(){var f=true;
var e=this.$element.closest('[data-toggle="buttons"]');
if(e.length){var g=this.$element.find("input");
if(g.prop("type")=="radio"){if(g.prop("checked")&&this.$element.hasClass("active")){f=false
}else{e.find(".active").removeClass("active")
}}if(f){g.prop("checked",!this.$element.hasClass("active")).trigger("change")
}}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
}if(f){this.$element.toggleClass("active")
}};
function c(e){return this.each(function(){var h=d(this);
var g=h.data("bs.button");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.button",(g=new b(this,f)))
}if(e=="toggle"){g.toggle()
}else{if(e){g.setState(e)
}}})
}var a=d.fn.button;
d.fn.button=c;
d.fn.button.Constructor=b;
d.fn.button.noConflict=function(){d.fn.button=a;
return this
};
d(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(g){var f=d(g.target);
if(!f.hasClass("btn")){f=f.closest(".btn")
}c.call(f,"toggle");
g.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){d(f.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(f.type))
})
}(jQuery);
+function(d){var e=function(g,f){this.$element=d(g);
this.options=d.extend({},e.DEFAULTS,f);
this.$trigger=d(this.options.trigger).filter('[href="#'+g.id+'"], [data-target="#'+g.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
e.VERSION="3.3.2";
e.TRANSITION_DURATION=350;
e.DEFAULTS={toggle:true,trigger:'[data-toggle="collapse"]'};
e.prototype.dimension=function(){var f=this.$element.hasClass("width");
return f?"width":"height"
};
e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var h;
var k=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(k&&k.length){h=k.data("bs.collapse");
if(h&&h.transitioning){return
}}var g=d.Event("show.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}if(k&&k.length){b.call(k,"hide");
h||k.data("bs.collapse",null)
}var l=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}var j=d.camelCase(["scroll",l].join("-"));
this.$element.one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[l](this.$element[0][j])
};
e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var g=d.Event("hide.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}var h=this.dimension();
this.$element[h](this.$element[h]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var f=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}this.$element[h](0).one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)
};
e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
e.prototype.getParent=function(){return d(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(d.proxy(function(h,g){var f=d(g);
this.addAriaAndCollapsedClass(c(f),f)
},this)).end()
};
e.prototype.addAriaAndCollapsedClass=function(g,f){var h=g.hasClass("in");
g.attr("aria-expanded",h);
f.toggleClass("collapsed",!h).attr("aria-expanded",h)
};
function c(f){var g;
var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return d(h)
}function b(f){return this.each(function(){var j=d(this);
var h=j.data("bs.collapse");
var g=d.extend({},e.DEFAULTS,j.data(),typeof f=="object"&&f);
if(!h&&g.toggle&&f=="show"){g.toggle=false
}if(!h){j.data("bs.collapse",(h=new e(this,g)))
}if(typeof f=="string"){h[f]()
}})
}var a=d.fn.collapse;
d.fn.collapse=b;
d.fn.collapse.Constructor=e;
d.fn.collapse.noConflict=function(){d.fn.collapse=a;
return this
};
d(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(k){var j=d(this);
if(!j.attr("data-target")){k.preventDefault()
}var f=c(j);
var h=f.data("bs.collapse");
var g=h?"toggle":d.extend({},j.data(),{trigger:this});
b.call(f,g)
})
}(jQuery);
+function(h){var e=".dropdown-backdrop";
var b='[data-toggle="dropdown"]';
var a=function(j){h(j).on("click.bs.dropdown",this.toggle)
};
a.VERSION="3.3.2";
a.prototype.toggle=function(n){var m=h(this);
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
d();
if(!k){if("ontouchstart" in document.documentElement&&!l.closest(".navbar-nav").length){h('<div class="dropdown-backdrop"/>').insertAfter(h(this)).on("click",d)
}var j={relatedTarget:this};
l.trigger(n=h.Event("show.bs.dropdown",j));
if(n.isDefaultPrevented()){return
}m.trigger("focus").attr("aria-expanded","true");
l.toggleClass("open").trigger("shown.bs.dropdown",j)
}return false
};
a.prototype.keydown=function(n){if(!/(38|40|27|32)/.test(n.which)||/input|textarea/i.test(n.target.tagName)){return
}var m=h(this);
n.preventDefault();
n.stopPropagation();
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
if((!k&&n.which!=27)||(k&&n.which==27)){if(n.which==27){l.find(b).trigger("focus")
}return m.trigger("click")
}var o=" li:not(.divider):visible a";
var p=l.find('[role="menu"]'+o+', [role="listbox"]'+o);
if(!p.length){return
}var j=p.index(n.target);
if(n.which==38&&j>0){j--
}if(n.which==40&&j<p.length-1){j++
}if(!~j){j=0
}p.eq(j).trigger("focus")
};
function d(j){if(j&&j.which===3){return
}h(e).remove();
h(b).each(function(){var m=h(this);
var l=f(m);
var k={relatedTarget:this};
if(!l.hasClass("open")){return
}l.trigger(j=h.Event("hide.bs.dropdown",k));
if(j.isDefaultPrevented()){return
}m.attr("aria-expanded","false");
l.removeClass("open").trigger("hidden.bs.dropdown",k)
})
}function f(l){var j=l.attr("data-target");
if(!j){j=l.attr("href");
j=j&&/#[A-Za-z]/.test(j)&&j.replace(/.*(?=#[^\s]*$)/,"")
}var k=j&&h(j);
return k&&k.length?k:l.parent()
}function g(j){return this.each(function(){var l=h(this);
var k=l.data("bs.dropdown");
if(!k){l.data("bs.dropdown",(k=new a(this)))
}if(typeof j=="string"){k[j].call(l)
}})
}var c=h.fn.dropdown;
h.fn.dropdown=g;
h.fn.dropdown.Constructor=a;
h.fn.dropdown.noConflict=function(){h.fn.dropdown=c;
return this
};
h(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(j){j.stopPropagation()
}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)
}(jQuery);
+function(d){var b=function(f,e){this.options=e;
this.$body=d(document.body);
this.$element=d(f);
this.$backdrop=this.isShown=null;
this.scrollbarWidth=0;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.VERSION="3.3.2";
b.TRANSITION_DURATION=300;
b.BACKDROP_TRANSITION_DURATION=150;
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
};
b.prototype.show=function(h){var f=this;
var g=d.Event("show.bs.modal",{relatedTarget:h});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.backdrop(function(){var k=d.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
if(f.options.backdrop){f.adjustBackdrop()
}f.adjustDialog();
if(k){f.$element[0].offsetWidth
}f.$element.addClass("in").attr("aria-hidden",false);
f.enforceFocus();
var j=d.Event("shown.bs.modal",{relatedTarget:h});
k?f.$element.find(".modal-dialog").one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(j)
}).emulateTransitionEnd(b.TRANSITION_DURATION):f.$element.trigger("focus").trigger(j)
})
};
b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
d(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()
};
b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
b.prototype.resize=function(){if(this.isShown){d(window).on("resize.bs.modal",d.proxy(this.handleUpdate,this))
}else{d(window).off("resize.bs.modal")
}};
b.prototype.hideModal=function(){var e=this;
this.$element.hide();
this.backdrop(function(){e.$body.removeClass("modal-open");
e.resetAdjustments();
e.resetScrollbar();
e.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(j){var h=this;
var f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d('<div class="modal-backdrop '+f+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",d.proxy(function(k){if(k.target!==k.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(e){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!j){return
}e?this.$backdrop.one("bsTransitionEnd",j).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):j()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){h.removeBackdrop();
j&&j()
};
d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()
}else{if(j){j()
}}}};
b.prototype.handleUpdate=function(){if(this.options.backdrop){this.adjustBackdrop()
}this.adjustDialog()
};
b.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)
};
b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})
};
b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
b.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight;
this.scrollbarWidth=this.measureScrollbar()
};
b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);
if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)
}};
b.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
};
b.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure";
this.$body.append(f);
var e=f.offsetWidth-f.clientWidth;
this.$body[0].removeChild(f);
return e
};
function c(e,f){return this.each(function(){var j=d(this);
var h=j.data("bs.modal");
var g=d.extend({},b.DEFAULTS,j.data(),typeof e=="object"&&e);
if(!h){j.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)
}else{if(g.show){h.show(f)
}}})
}var a=d.fn.modal;
d.fn.modal=c;
d.fn.modal.Constructor=b;
d.fn.modal.noConflict=function(){d.fn.modal=a;
return this
};
d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=d(this);
var g=j.attr("href");
var f=d(j.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),j.data());
if(j.is("a")){k.preventDefault()
}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
});
c.call(f,h,this)
})
}(jQuery);
+function(d){var c=function(f,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",f,e)
};
c.VERSION="3.3.2";
c.TRANSITION_DURATION=150;
c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};
c.prototype.init=function(l,j,g){this.enabled=true;
this.type=l;
this.$element=d(j);
this.options=this.getOptions(g);
this.$viewport=this.options.viewport&&d(this.options.viewport.selector||this.options.viewport);
var k=this.options.trigger.split(" ");
for(var h=k.length;
h--;
){var f=k[h];
if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))
}else{if(f!="manual"){var m=f=="hover"?"mouseenter":"focusin";
var e=f=="hover"?"mouseleave":"focusout";
this.$element.on(m+"."+this.type,this.options.selector,d.proxy(this.enter,this));
this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))
}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);
if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}
}return e
};
c.prototype.getDelegateOptions=function(){var e={};
var f=this.getDefaults();
this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h
}});
return e
};
c.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(e&&e.$tip&&e.$tip.is(":visible")){e.hoverState="in";
return
}if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}clearTimeout(e.timeout);
e.hoverState="in";
if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()
}},e.options.delay.show)
};
c.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}clearTimeout(e.timeout);
e.hoverState="out";
if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()
}},e.options.delay.hide)
};
c.prototype.show=function(){var q=d.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(q);
var r=d.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(q.isDefaultPrevented()||!r){return
}var p=this;
var n=this.tip();
var j=this.getUID(this.type);
this.setContent();
n.attr("id",j);
this.$element.attr("aria-describedby",j);
if(this.options.animation){n.addClass("fade")
}var m=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement;
var v=/\s?auto?\s?/i;
var w=v.test(m);
if(w){m=m.replace(v,"")||"top"
}n.detach().css({top:0,left:0,display:"block"}).addClass(m).data("bs."+this.type,this);
this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);
var t=this.getPosition();
var f=n[0].offsetWidth;
var o=n[0].offsetHeight;
if(w){var l=m;
var u=this.options.container?d(this.options.container):this.$element.parent();
var h=this.getPosition(u);
m=m=="bottom"&&t.bottom+o>h.bottom?"top":m=="top"&&t.top-o<h.top?"bottom":m=="right"&&t.right+f>h.width?"left":m=="left"&&t.left-f<h.left?"right":m;
n.removeClass(l).addClass(m)
}var k=this.getCalculatedOffset(m,t,f,o);
this.applyPlacement(k,m);
var g=function(){var e=p.hoverState;
p.$element.trigger("shown.bs."+p.type);
p.hoverState=null;
if(e=="out"){p.leave(p)
}};
d.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g()
}};
c.prototype.applyPlacement=function(k,l){var m=this.tip();
var g=m[0].offsetWidth;
var r=m[0].offsetHeight;
var f=parseInt(m.css("margin-top"),10);
var j=parseInt(m.css("margin-left"),10);
if(isNaN(f)){f=0
}if(isNaN(j)){j=0
}k.top=k.top+f;
k.left=k.left+j;
d.offset.setOffset(m[0],d.extend({using:function(t){m.css({top:Math.round(t.top),left:Math.round(t.left)})
}},k),0);
m.addClass("in");
var e=m[0].offsetWidth;
var n=m[0].offsetHeight;
if(l=="top"&&n!=r){k.top=k.top+r-n
}var q=this.getViewportAdjustedDelta(l,k,e,n);
if(q.left){k.left+=q.left
}else{k.top+=q.top
}var o=/top|bottom/.test(l);
var h=o?q.left*2-g+e:q.top*2-r+n;
var p=o?"offsetWidth":"offsetHeight";
m.offset(k);
this.replaceArrow(h,m[0][p],o)
};
c.prototype.replaceArrow=function(g,e,f){this.arrow().css(f?"left":"top",50*(1-g/e)+"%").css(f?"top":"left","")
};
c.prototype.setContent=function(){var f=this.tip();
var e=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](e);
f.removeClass("fade in top bottom left right")
};
c.prototype.hide=function(k){var g=this;
var j=this.tip();
var h=d.Event("hide.bs."+this.type);
function f(){if(g.hoverState!="in"){j.detach()
}g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type);
k&&k()
}this.$element.trigger(h);
if(h.isDefaultPrevented()){return
}j.removeClass("in");
d.support.transition&&this.$tip.hasClass("fade")?j.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f();
this.hoverState=null;
return this
};
c.prototype.fixTitle=function(){var e=this.$element;
if(e.attr("title")||typeof(e.attr("data-original-title"))!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")
}};
c.prototype.hasContent=function(){return this.getTitle()
};
c.prototype.getPosition=function(g){g=g||this.$element;
var j=g[0];
var f=j.tagName=="BODY";
var h=j.getBoundingClientRect();
if(h.width==null){h=d.extend({},h,{width:h.right-h.left,height:h.bottom-h.top})
}var l=f?{top:0,left:0}:g.offset();
var e={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:g.scrollTop()};
var k=f?{width:d(window).width(),height:d(window).height()}:null;
return d.extend({},h,e,k,l)
};
c.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}
};
c.prototype.getViewportAdjustedDelta=function(h,l,e,k){var n={top:0,left:0};
if(!this.$viewport){return n
}var g=this.options.viewport&&this.options.viewport.padding||0;
var m=this.getPosition(this.$viewport);
if(/right|left/.test(h)){var o=l.top-g-m.scroll;
var j=l.top+g-m.scroll+k;
if(o<m.top){n.top=m.top-o
}else{if(j>m.top+m.height){n.top=m.top+m.height-j
}}}else{var p=l.left-g;
var f=l.left+g+e;
if(p<m.left){n.left=m.left-p
}else{if(f>m.width){n.left=m.left+m.width-f
}}}return n
};
c.prototype.getTitle=function(){var g;
var e=this.$element;
var f=this.options;
g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);
return g
};
c.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)
}while(document.getElementById(e));
return e
};
c.prototype.tip=function(){return(this.$tip=this.$tip||d(this.options.template))
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))
};
c.prototype.enable=function(){this.enabled=true
};
c.prototype.disable=function(){this.enabled=false
};
c.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
c.prototype.toggle=function(g){var f=this;
if(g){f=d(g.currentTarget).data("bs."+this.type);
if(!f){f=new this.constructor(g.currentTarget,this.getDelegateOptions());
d(g.currentTarget).data("bs."+this.type,f)
}}f.tip().hasClass("in")?f.leave(f):f.enter(f)
};
c.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout);
this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type)
})
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.tooltip");
var f=typeof e=="object"&&e;
if(!g&&e=="destroy"){return
}if(!g){h.data("bs.tooltip",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.tooltip;
d.fn.tooltip=b;
d.fn.tooltip.Constructor=c;
d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;
return this
}
}(jQuery);
+function(d){var c=function(f,e){this.init("popover",f,e)
};
if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}c.VERSION="3.3.2";
c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);
c.prototype.constructor=c;
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.setContent=function(){var g=this.tip();
var f=this.getTitle();
var e=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](f);
g.find(".popover-content").children().detach().end()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);
g.removeClass("fade top bottom left right in");
if(!g.find(".popover-title").html()){g.find(".popover-title").hide()
}};
c.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
c.prototype.getContent=function(){var e=this.$element;
var f=this.options;
return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))
};
c.prototype.tip=function(){if(!this.$tip){this.$tip=d(this.options.template)
}return this.$tip
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.popover");
var f=typeof e=="object"&&e;
if(!g&&e=="destroy"){return
}if(!g){h.data("bs.popover",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.popover;
d.fn.popover=b;
d.fn.popover.Constructor=c;
d.fn.popover.noConflict=function(){d.fn.popover=a;
return this
}
}(jQuery);
+function(d){function c(f,e){var g=d.proxy(this.process,this);
this.$body=d("body");
this.$scrollElement=d(f).is("body")?d(window):d(f);
this.options=d.extend({},c.DEFAULTS,e);
this.selector=(this.options.target||"")+" .nav li > a";
this.offsets=[];
this.targets=[];
this.activeTarget=null;
this.scrollHeight=0;
this.$scrollElement.on("scroll.bs.scrollspy",g);
this.refresh();
this.process()
}c.VERSION="3.3.2";
c.DEFAULTS={offset:10};
c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
};
c.prototype.refresh=function(){var e="offset";
var g=0;
if(!d.isWindow(this.$scrollElement[0])){e="position";
g=this.$scrollElement.scrollTop()
}this.offsets=[];
this.targets=[];
this.scrollHeight=this.getScrollHeight();
var f=this;
this.$body.find(this.selector).map(function(){var j=d(this);
var h=j.data("target")||j.attr("href");
var k=/^#./.test(h)&&d(h);
return(k&&k.length&&k.is(":visible")&&[[k[e]().top+g,h]])||null
}).sort(function(j,h){return j[0]-h[0]
}).each(function(){f.offsets.push(this[0]);
f.targets.push(this[1])
})
};
c.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;
var g=this.getScrollHeight();
var j=this.options.offset+g-this.$scrollElement.height();
var h=this.offsets;
var e=this.targets;
var l=this.activeTarget;
var f;
if(this.scrollHeight!=g){this.refresh()
}if(k>=j){return l!=(f=e[e.length-1])&&this.activate(f)
}if(l&&k<h[0]){this.activeTarget=null;
return this.clear()
}for(f=h.length;
f--;
){l!=e[f]&&k>=h[f]&&(!h[f+1]||k<=h[f+1])&&this.activate(e[f])
}};
c.prototype.activate=function(g){this.activeTarget=g;
this.clear();
var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';
var f=d(e).parents("li").addClass("active");
if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")
}f.trigger("activate.bs.scrollspy")
};
c.prototype.clear=function(){d(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.scrollspy");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.scrollspy",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.scrollspy;
d.fn.scrollspy=b;
d.fn.scrollspy.Constructor=c;
d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;
return this
};
d(window).on("load.bs.scrollspy.data-api",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);
b.call(e,e.data())
})
})
}(jQuery);
+function(d){var b=function(f){this.element=d(f)
};
b.VERSION="3.3.2";
b.TRANSITION_DURATION=150;
b.prototype.show=function(){var m=this.element;
var h=m.closest("ul:not(.dropdown-menu)");
var g=m.data("target");
if(!g){g=m.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(m.parent("li").hasClass("active")){return
}var k=h.find(".active:last a");
var l=d.Event("hide.bs.tab",{relatedTarget:m[0]});
var j=d.Event("show.bs.tab",{relatedTarget:k[0]});
k.trigger(l);
m.trigger(j);
if(j.isDefaultPrevented()||l.isDefaultPrevented()){return
}var f=d(g);
this.activate(m.closest("li"),h);
this.activate(f,f.parent(),function(){k.trigger({type:"hidden.bs.tab",relatedTarget:m[0]});
m.trigger({type:"shown.bs.tab",relatedTarget:k[0]})
})
};
b.prototype.activate=function(h,g,l){var f=g.find("> .active");
var k=l&&d.support.transition&&((f.length&&f.hasClass("fade"))||!!g.find("> .fade").length);
function j(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);
h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);
if(k){h[0].offsetWidth;
h.addClass("in")
}else{h.removeClass("fade")
}if(h.parent(".dropdown-menu")){h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)
}l&&l()
}f.length&&k?f.one("bsTransitionEnd",j).emulateTransitionEnd(b.TRANSITION_DURATION):j();
f.removeClass("in")
};
function c(f){return this.each(function(){var h=d(this);
var g=h.data("bs.tab");
if(!g){h.data("bs.tab",(g=new b(this)))
}if(typeof f=="string"){g[f]()
}})
}var a=d.fn.tab;
d.fn.tab=c;
d.fn.tab.Constructor=b;
d.fn.tab.noConflict=function(){d.fn.tab=a;
return this
};
var e=function(f){f.preventDefault();
c.call(d(this),"show")
};
d(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery);
+function(d){var c=function(f,e){this.options=d.extend({},c.DEFAULTS,e);
this.$target=d(this.options.target).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));
this.$element=d(f);
this.affixed=this.unpin=this.pinnedOffset=null;
this.checkPosition()
};
c.VERSION="3.3.2";
c.RESET="affix affix-top affix-bottom";
c.DEFAULTS={offset:0,target:window};
c.prototype.getState=function(o,n,f,g){var e=this.$target.scrollTop();
var j=this.$element.offset();
var k=this.$target.height();
if(f!=null&&this.affixed=="top"){return e<f?"top":false
}if(this.affixed=="bottom"){if(f!=null){return(e+this.unpin<=j.top)?false:"bottom"
}return(e+k<=o-g)?false:"bottom"
}var h=this.affixed==null;
var m=h?e:j.top;
var l=h?k:n;
if(f!=null&&e<=f){return"top"
}if(g!=null&&(m+l>=o-g)){return"bottom"
}return false
};
c.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(c.RESET).addClass("affix");
var f=this.$target.scrollTop();
var e=this.$element.offset();
return(this.pinnedOffset=e.top-f)
};
c.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)
};
c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var f=this.$element.height();
var m=this.options.offset;
var k=m.top;
var h=m.bottom;
var j=d("body").height();
if(typeof m!="object"){h=k=m
}if(typeof k=="function"){k=m.top(this.$element)
}if(typeof h=="function"){h=m.bottom(this.$element)
}var g=this.getState(j,f,k,h);
if(this.affixed!=g){if(this.unpin!=null){this.$element.css("top","")
}var n="affix"+(g?"-"+g:"");
var l=d.Event(n+".bs.affix");
this.$element.trigger(l);
if(l.isDefaultPrevented()){return
}this.affixed=g;
this.unpin=g=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(c.RESET).addClass(n).trigger(n.replace("affix","affixed")+".bs.affix")
}if(g=="bottom"){this.$element.offset({top:j-f-h})
}};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.affix");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.affix",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.affix;
d.fn.affix=b;
d.fn.affix.Constructor=c;
d.fn.affix.noConflict=function(){d.fn.affix=a;
return this
};
d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);
var e=f.data();
e.offset=e.offset||{};
if(e.offsetBottom!=null){e.offset.bottom=e.offsetBottom
}if(e.offsetTop!=null){e.offset.top=e.offsetTop
}b.call(f,e)
})
})
}(jQuery);
(function(a){a.extend({tmpl:function(d,e){var b,c;
d=d||"";
e=e||{};
b=/#\{([^{}]*)}/g;
c=function(g,f){return typeof e[f]==="string"||typeof e[f]==="number"?e[f]:g
};
return d.replace(b,c)
}})
})(jQuery);
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"undefined"!==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)
})(function(b){function d(e){return !e.nodeName||-1!==b.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])
}function a(e){return b.isFunction(e)||b.isPlainObject(e)?e:{top:e,left:e}
}var c=b.scrollTo=function(f,g,e){return b(window).scrollTo(f,g,e)
};
c.defaults={axis:"xy",duration:0,limit:!0};
b.fn.scrollTo=function(f,h,e){"object"===typeof h&&(e=h,h=0);
"function"===typeof e&&(e={onAfter:e});
"max"===f&&(f=9000000000);
e=b.extend({},c.defaults,e);
h=h||e.duration;
var g=e.queue&&1<e.axis.length;
g&&(h/=2);
e.offset=a(e.offset);
e.over=a(e.over);
return this.each(function(){function n(l){var q=b.extend({},e,{queue:!0,duration:h,complete:l&&function(){l.call(w,x,e)
}});
p.animate(u,q)
}if(null!==f){var j=d(this),w=j?this.contentWindow||window:this,p=b(w),x=f,u={},o;
switch(typeof x){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(x)){x=a(x);
break
}x=j?b(x):b(x,w);
if(!x.length){return
}case"object":if(x.is||x.style){o=(x=b(x)).offset()
}}var m=b.isFunction(e.offset)&&e.offset(w,x)||e.offset;
b.each(e.axis.split(""),function(l,y){var t="x"===y?"Left":"Top",k=t.toLowerCase(),r="scroll"+t,q=p[r](),v=c.max(w,y);
o?(u[r]=o[k]+(j?0:q-p.offset()[k]),e.margin&&(u[r]-=parseInt(x.css("margin"+t),10)||0,u[r]-=parseInt(x.css("border"+t+"Width"),10)||0),u[r]+=m[k]||0,e.over[k]&&(u[r]+=x["x"===y?"width":"height"]()*e.over[k])):(t=x[k],u[r]=t.slice&&"%"===t.slice(-1)?parseFloat(t)/100*v:t);
e.limit&&/^\d+$/.test(u[r])&&(u[r]=0>=u[r]?0:Math.min(u[r],v));
!l&&1<e.axis.length&&(q===u[r]?u={}:g&&(n(e.onAfterFirst),u={}))
});
n(e.onAfter)
}})
};
c.max=function(g,n){var e="x"===n?"Width":"Height",m="scroll"+e;
if(!d(g)){return g[m]-b(g)[e.toLowerCase()]()
}var e="client"+e,j=g.ownerDocument||g.document,f=j.documentElement,j=j.body;
return Math.max(f[m],j[m])-Math.min(f[e],j[e])
};
b.Tween.propHooks.scrollLeft=b.Tween.propHooks.scrollTop={get:function(e){return b(e.elem)[e.prop]()
},set:function(f){var g=this.get(f);
if(f.options.interrupt&&f._last&&f._last!==g){return b(f.elem).stop()
}var e=Math.round(f.now);
g!==e&&(b(f.elem)[f.prop](e),f._last=this.get(f))
}};
return c
});
if(typeof(com)=="undefined"){com={}
}if(typeof(com.salesforce)=="undefined"){com.salesforce={}
}if(typeof(com.salesforce.thirdparty)=="undefined"){com.salesforce.thirdparty={}
}com.salesforce.thirdparty.OpinionLab=(function($){var _sp="%3A\\/\\/",_rp="%3A//",_poE=0,_poX=0,_sH=screen.height,_d=document,_w=window,_ht=escape(_w.location.href),_hr=_d.referrer,_tm=(new Date()).getTime(),_kp=0,_sW=screen.width;
function _fC(_u){_aT=_sp+",\\/,\\.,-,_,"+_rp+",%2F,%2E,%2D,%5F";
_aA=_aT.split(",");
for(i=0;
i<5;
i++){eval("_u=_u.replace(/"+_aA[i]+"/g,_aA[i+5])")
}return _u
}function O_LC(){_w.open("https://secure.opinionlab.com/ccc01/comment_card.asp?time1="+_tm+"&time2="+(new Date()).getTime()+"&prev="+_fC(escape(_hr))+"&referer="+_fC(_ht)+"&height="+_sH+"&width="+_sW+"&custom_var="+(typeof(custom_var)=="undefined"?"":custom_var),"comments","width=535,height=192,screenX="+((_sW-535)/2)+",screenY="+((_sH-192)/2)+",top="+((_sH-192)/2)+",left="+((_sW-535)/2)+",resizable=yes,copyhistory=yes,scrollbars=no")
}function _fPe(){if(Math.random()>=1-_poE){O_LC();
_poX=0
}}function _fPx(){if(Math.random()>=1-_poX){O_LC()
}}window.onunload=_fPx;
function O_GoT(_p){_d.write("<a href='javascript:O_LC()'>"+_p+"</a>");
_fPe()
}return{init:function(){$("#opinionlab-trigger, #yt-feedback, .opinionlab-trigger").removeClass("disguised").bind("click",function(){O_LC()
})
},launchCard:function(){O_LC()
}}
})(jQuery);
com.salesforce.thirdparty.OpinionLab.init();
(function(){function ya(a){switch(a){case"'":return"\x26#39;";
case"\x26":return"\x26amp;";
case"\x3c":return"\x26lt;";
case"\x3e":return"\x26gt;";
case'"':return"\x26quot;";
case"\u00a9":return"\x26copy;";
case"\u2028":return"\x3cbr\x3e";
case"\u2029":return"\x3cp\x3e";
default:return a
}}function l(){}function s(){}function ia(a){l.prototype.init.call(this,a,l.TYPE.STANDARD)
}function ja(a){k[a]||(k[a]=new ia(a));
return k[a]
}function R(a,b){l.prototype.init.call(this,b+"_"+a,l.TYPE.AGENT)
}function K(a,b){var c=b+"_"+a;
if(!k[c]){var e=new R(a,b),d;
k[a]&&(d=k[a],d.endpoint&&e.setEndpoint(d.endpoint),d.prechat&&e.setPrechat(d.prechat),d.language&&e.setLanguage(d.language),e.setOnlineState(d.onlineState));
k[c]=e
}return k[c]
}function S(a,b){s.prototype.init.call(this,a,b)
}function T(a,b){s.prototype.init.call(this,a,b)
}function n(a){l.prototype.init.call(this,a,l.TYPE.INVITE);
this.active=!1;
this.filterLogic=null;
this.rules={};
this.autoRejectTimeout=this.inviteTimeout=this.inviteDelay=this.ruleTree=null
}function t(a){k[a]||(k[a]=new n(a));
return k[a]
}function z(a,b,c,e,d,g,B,x){s.prototype.init.call(this,a,b);
this.hasInviteAfterAccept=g;
this.hasInviteAfterReject=B;
this.rejectTime=x;
null!==f.getCssAnimation(b)||"Custom"==c?this.renderer=new n.RENDERER[c].renderClass(a,b,n.START_POSITION[e],n.END_POSITION[d]):this.renderer=new n.RENDERER.Appear.renderClass(a,b,n.START_POSITION[e],n.END_POSITION[d])
}function C(a){return t(a)?t(a).getTracker():null
}function r(){}function I(a,b,c,e){r.prototype.init.call(this,a,b,c,e)
}function J(a,b,c,e){r.prototype.init.call(this,a,b,null,e)
}function L(a,b,c,e){r.prototype.init.call(this,a,b,null,e)
}function D(a,b,c,e){D.prototype.init.call(this,a,b,null,null)
}function h(){}function M(a,b,c,e,d){h.prototype.init.call(this,a,b,c,e,d)
}function N(a,b,c,e,d){h.prototype.init.call(this,a,b,c,e,d)
}function U(a,b,c,e,d){h.prototype.init.call(this,a,b,c,e,d)
}function E(a){ka++;
if(1000<ka){throw Error("Error processing rule filter logic, preventing recursion")
}for(var b=0,c=0,e=0;
e<a.length;
e++){"("==a.charAt(e)?c++:")"==a.charAt(e)&&c--,","==a.charAt(e)&&1==c&&(b=e)
}if(0==a.indexOf("AND(")){return c=E(a.substring(4,b)),a=E(a.substring(b+1,a.length-1)),new V(c,a)
}if(0==a.indexOf("OR(")){return c=E(a.substring(3,b)),a=E(a.substring(b+1,a.length-1)),new W(c,a)
}if(0==a.indexOf("NOT(")){return c=E(a.substring(4,a.length-1)),new X(c)
}if(!isNaN(parseInt(a,10))){return new Y(parseInt(a,10))
}throw Error("Encountered unexpected character in filter logic")
}function y(){}function Y(a){this.ruleId=a;
y.prototype.init.call(this,null,null)
}function V(a,b){y.prototype.init.call(this,a,b)
}function W(a,b){y.prototype.init.call(this,a,b)
}function X(a){y.prototype.init.call(this,a,null)
}function za(a,b,c,e){var d=document.createElement("div");
d.id="liveagent_invite_button_"+a;
var g=document.createElement("img");
g.style.cursor="pointer";
g.style.position="absolute";
g.style.right="-20px";
g.style.top="-20px";
g.src=f.addPrefixToURL(m.contentServerUrl,m.urlPrefix,!0)+"/images/x.png";
f.addEventListener(g,"click",function(){p.rejectChat(a)
});
d.appendChild(g);
g=document.createElement("img");
g.style.cursor="pointer";
g.style.clear="right";
g.src=b;
g.width=c;
g.height=e;
f.addEventListener(g,"click",function(){p.startChat(a)
});
d.appendChild(g);
document.body.appendChild(d);
return d
}function la(a,b,c){"undefined"==typeof c&&(c=!0);
this.getLabel=function(){return a
};
this.getValue=function(){return b
};
this.getDisplayToAgent=function(){return c
};
var e=new Z;
this.getMapper=function(){return e
};
this.doKnowledgeSearch=!1;
this.getDoKnowledgeSearch=function(){return this.doKnowledgeSearch
};
this.setDoKnowledgeSearch=function(){this.doKnowledgeSearch=!0
}
}function Z(){var a=[],b=[];
this.getEntityMaps=function(){return a
};
this.getTranscriptFields=function(){return b
}
}function ma(a,b,c,e,d){this.getEntityName=function(){return a
};
this.getFieldName=function(){return b
};
this.getFastFill=function(){return c
};
this.getAutoQuery=function(){return e
};
this.getExactMatch=function(){return d
}
}function na(a){this.saveToTranscript="";
this.showOnCreate=!1;
this.linkToEntityField=this.linkToEntityName="";
var b=new oa;
this.getEntityName=function(){return a
};
this.getSaveTranscript=function(){return this.saveTranscript
};
this.getShowOnCreate=function(){return this.showOnCreate
};
this.getLinkToEntityName=function(){return this.linkToEntityName
};
this.getLinkToEntityField=function(){return this.linkToEntityField
};
this.getEntityMapper=function(){return b
};
this.setSaveTranscript=function(a){this.saveTranscript=a
};
this.setShowOnCreate=function(a){this.showOnCreate=a
};
this.setLinkToEntityName=function(a){this.linkToEntityName=a
};
this.setLinkToEntityField=function(a){this.linkToEntityField=a
}
}function oa(){var a=[];
this.getEntityFieldsMaps=function(){return a
}
}function pa(a,b,c,e,d){this.getFieldName=function(){return a
};
this.getLabel=function(){return b
};
this.getDoFind=function(){return c
};
this.getIsExactMatch=function(){return e
};
this.getDoCreate=function(){return d
}
}function O(){if(!qa){qa=!0;
f.log("DOM is ready. Setting up environment.");
null==u.getOref()&&u.setOref(document.referrer);
null==u.getVisitCount()&&u.setVisitCount(1);
if(window._laq){for(var a=0;
a<window._laq.length;
a++){window._laq[a].call(window)
}}q.connection.setCallback("liveagent._.handlePing");
ra()
}}function ra(){var a=[],b={};
$&&(b.chatted=1);
v?(b.sid=v,f.log("Reusing existing session.")):(a.push(new q.Noun("VisitorId")),f.log("Requesting new session."));
a.push(new q.Noun("Settings",{buttonIds:"["+sa()+"]",updateBreadcrumb:1,urlPrefix:m.urlPrefix}));
q.connection.send(a,b)
}function ta(a,b){b.endpointUrl&&a.setEndpoint(b.endpointUrl);
b.prechatUrl&&a.setPrechat(b.prechatUrl);
b.language&&a.setLanguage(b.language);
a.setOnlineState(b.isAvailable)
}function Aa(){if(q.connection.isRunning()){if(null==v){ra()
}else{f.log("Pinging server to keep presence");
P=null;
var a={};
a.sid=v;
$&&(a.chatted=1);
a.r=(new Date).getMilliseconds();
var b=[new q.Noun("Availability",{ids:"["+sa()+"]"})];
q.connection.send(b,a)
}}}function aa(){f.log("Disconnecting from Live Agent");
q.connection.setIsRunning(!1);
for(var a in k){k.hasOwnProperty(a)&&k[a].setOnlineState(!1)
}}function sa(){var a=[],b={},c;
for(c in k){k.hasOwnProperty(c)&&k[c].getType()==l.TYPE.STANDARD&&(b[c]=k[c])
}for(var e in b){a.push(e)
}var b={},d;
for(d in k){k.hasOwnProperty(d)&&k[d].getType()==l.TYPE.AGENT&&(b[d]=k[d])
}for(e in b){a.push(e)
}d={};
for(var g in k){k.hasOwnProperty(g)&&k[g].getType()==l.TYPE.INVITE&&(d[g]=k[g])
}for(e in d){a.push(e)
}e="";
for(g=0;
g<a.length;
g++){e+=a[g],g<a.length-1&&(e+=",")
}return e
}function ua(a,b,c,e){document.cookie="liveagent_chatted\x3d1;path\x3d/;";
$=!0;
var d;
d="deployment_id\x3d"+m.deploymentId;
d=d+"\x26org_id\x3d"+m.orgId;
d+="\x26button_id\x3d";
d+=a;
c&&(d+="\x26agent_id\x3d",d+=c);
e&&(d+="\x26do_fallback\x3d1");
d+="\x26session_id\x3d";
d+=v;
a=c?k[c+"_"+a].getEndpoint(d):k[a].getEndpoint(d);
c="height\x3d"+m.chatWindowHeight;
c=c+",width\x3d"+m.chatWindowWidth;
c+=",menubar\x3dno";
c+=",toolbar\x3dno";
c+=",location\x3dno";
c+=",personalbar\x3dno";
window.open("",b,c);
Ba(b,a)
}function Ba(a,b){function c(a,b,c){var d=document.createElement("input");
d.name=b;
d.value=c;
a.appendChild(d)
}var e=u.getVisitCount();
null==e&&(e="0");
var d=document.createElement("form");
d.style.display="none";
c(d,"deploymentId",m.deploymentId);
c(d,"orgId",m.orgId);
c(d,"vc",e);
c(d,"sid",v);
c(d,"ptid",u.getPermanentId());
c(d,"det",f.jsonEncode(va));
c(d,"oref",u.getOref());
c(d,"pages",f.jsonEncode(A.getPages()));
c(d,"sessionStart",(new Date).getTime()-A.getSessionStart());
c(d,"ent",f.jsonEncode(wa));
ba&&c(d,"visitorName",ba);
d.method="POST";
d.action=b;
d.target=a;
document.body.appendChild(d);
d.submit()
}function ca(a){a?f.log("Server Warning: "+a):f.log("Server sent an anoymous warning.")
}function xa(a){a?f.log("Server Error: "+a):f.log("Server responded with an error.");
aa()
}if(!window.liveAgentDeployment){window.liveAgentDeployment=!0;
var p={};
window.liveagent&&(p=window.liveagent);
window.liveagent=p;
var f={getCookie:function(a){var b=document.cookie,c=b.indexOf(a+"\x3d");
if(-1==c){return null
}c+=(a+"\x3d").length;
a=b.indexOf(";",c);
-1==a&&(a=b.length);
return b.substring(c,a)
},setCookie:function(a,b,c){a=a+"\x3d"+b+";";
c&&(c=new Date,c.setFullYear(c.getFullYear()+10),a+="expires\x3d"+c.toGMTString()+";");
document.cookie=a+"path\x3d/;"
},addEventListener:function(a,b,c){if(a.addEventListener){a.addEventListener(b,c,!1)
}else{if(a.attachEvent){a.attachEvent("on"+b,c,!1)
}else{throw Error("Could not add event listener")
}}},log:function(a){Q&&window.console&&window.console.log&&window.console.log("LIVE AGENT: "+a)
},logGroupStart:function(a){Q&&window.console&&(window.console.group?window.console.groupCollapsed("LIVE AGENT: "+a):f.log(a))
},logGroupEnd:function(){Q&&window.console&&window.console.group&&window.console.groupEnd()
},getLanguage:function(){return"undefined"!=typeof window.navigator.language?window.navigator.language:"undefined"!=typeof window.navigator.userLanguage?window.navigator.userLanguage:""
},arrayHasItem:function(a,b){if(Array.prototype.indexOf){return -1<a.indexOf(b)
}for(var c=0;
c<a.length;
c++){if(a[c]==b){return !0
}}},jsonEncode:function(a,b,c){function e(a){g.lastIndex=0;
return g.test(a)?'"'+a.replace(g,function(a){var b=f[a];
return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+a+'"'
}function d(a,b){var c,g,f,B,x=w,k,h=b[a];
h&&("object"===typeof h&&"function"===typeof h.toJSON)&&(h=h.toJSON(a));
"function"===typeof m&&(h=m.call(b,a,h));
switch(typeof h){case"string":return e(h);
case"number":return isFinite(h)?String(h):"null";
case"boolean":case"null":return String(h);
case"object":if(!h){return"null"
}w+=l;
k=[];
if("[object Array]"===Object.prototype.toString.apply(h)){B=h.length;
for(c=0;
c<B;
c+=1){k[c]=d(c,h)||"null"
}f=0===k.length?"[]":w?"[\n"+w+k.join(",\n"+w)+"\n"+x+"]":"["+k.join(",")+"]";
w=x;
return f
}if(m&&"object"===typeof m){B=m.length;
for(c=0;
c<B;
c+=1){"string"===typeof m[c]&&(g=m[c],(f=d(g,h))&&k.push(e(g)+(w?": ":":")+f))
}}else{for(g in h){Object.prototype.hasOwnProperty.call(Object(h),g)&&(f=d(g,h))&&k.push(e(g)+(w?": ":":")+f)
}}f=0===k.length?"{}":w?"{\n"+w+k.join(",\n"+w)+"\n"+x+"}":"{"+k.join(",")+"}";
w=x;
return f
}}if("undefined"!==typeof window.JSON){return window.JSON.stringify(a,b,c)
}if(void 0===a||null===a){return"null"
}var g=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},x,w="",l="",m=b;
if("number"===typeof c){for(x=0;
x<c;
x+=1){l+=" "
}}else{"string"===typeof c&&(l=c)
}if(b&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length)){throw Error("Error during JSON.stringify")
}return d("",{"":a})
},jsonDecode:function(a){a=String(a);
if("undefined"!==typeof window.JSON){return window.JSON.parse(a)
}var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
b.lastIndex=0;
b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+a+")")
}throw Error("Error during JSON.parse")
},getCssAnimation:function(a){var b=["Webkit","Moz","O","ms","Khtml"];
if(void 0!==a.style.animationName){return""
}for(var c=0;
c<b.length;
c++){if(void 0!==a.style[b[c]+"AnimationName"]){return b[c].toLowerCase()
}}return null
},addPrefixToURL:function(a,b,c){if(!f.isEmpty(a)&&!f.isEmpty(b)&&0!==a.indexOf(b)){c&&(b=f.escapeToHtml(b));
var e=/(https?:\/\/)(.*)/i;
c=a.replace(e,"$1");
a=a.replace(e,"$2");
b=b.replace(e,"$2");
a=c+b+"/"+a
}return a
},getDomainFromUrl:function(a){if(f.isEmpty(a)){return""
}var b;
da||(da=document.createElement("a"));
b=da;
b.href=a;
a=a.match(/:(\d+)/g);
b=b.protocol+"//"+b.hostname||window.location.protocol+"//"+window.location.hostname;
return a?b+a[0]:b
},isEmpty:function(a){return null===a||void 0===a||""===a
},escapeToHtml:function(a){return null===a||void 0===a||""===a?"":a=a.replace(/[&<>"'\u00a9\u2028\u2029]/g,ya)
},isValidEntityId:function(a){return a&&"string"===typeof a&&(18===a.length||15===a.length)
},getKeyPrefix:function(a){return this.isValidEntityId(a)?a.substr(0,3):null
},isOrganizationId:function(a){return"00D"===this.getKeyPrefix(a)
},isDeploymentId:function(a){return"572"===this.getKeyPrefix(a)
}},da,u={getVisitCount:function(){var a=parseInt(f.getCookie("liveagent_vc"),10);
return isNaN(a)?null:a
},getOref:function(){return f.getCookie("liveagent_oref")
},getPermanentId:function(){var a=f.getCookie("liveagent_ptid");
return null!=a?a:""
},setVisitCount:function(a){f.setCookie("liveagent_vc",a,!0)
},setOref:function(a){return f.setCookie("liveagent_oref",a,!0)
},setPermanentId:function(a){f.setCookie("liveagent_ptid",a,!0)
}},A=new function(){function a(){return window.localStorage?window.localStorage:window.sessionStorage
}function b(){var a=document.createElement("div");
a.style.display="none";
document.body.appendChild(a);
a.id="liveagent_userdata_provider";
a.addBehavior("#default#userData");
a.load("liveagent");
return{getItem:function(b){return a.getAttribute(b)
},setItem:function(b,c){a.setAttribute(b,c);
a.save("liveagent")
},removeItem:function(b){a.removeAttribute(b);
a.save("liveagent")
}}
}function c(){var a={};
return{getItem:function(b){return a[b]
},setItem:function(b,c){a[b]=c
},removeItem:function(b){delete a[b]
}}
}function e(){g.setItem(d.SESSION_ID,v);
g.setItem(d.PAGE_COUNT,"0");
g.setItem(d.SESSION_START,(new Date).getTime().toString())
}var d={SESSION_ID:"liveAgentSid",PAGE_COUNT:"liveAgentPc",SESSION_START:"liveAgentStart",PAGE:"liveAgentPage_",PAGE_TIME:"liveAgentPageTime_"};
a.isSupported=function(){try{if(window.localStorage||window.sessionStorage){var a=window.localStorage?window.localStorage:window.sessionStorage;
a.setItem("liveAgentTestKey","1");
a.removeItem("liveAgentTestKey");
return !0
}return !1
}catch(b){return !1
}};
b.isSupported=function(){return document.createElement("div").addBehavior
};
var g;
g=a.isSupported()?a():b.isSupported()?b():c();
this.init=function(){if(g.getItem(d.SESSION_ID)){if(g.getItem(d.SESSION_ID)!=v){g.removeItem(d.SESSION_START);
for(var a=g.getItem(d.PAGE_COUNT),b=25>a?0:a-25;
b<a;
b++){g.removeItem(d.PAGE+b),g.removeItem(d.PAGE_TIME+b)
}e()
}}else{e()
}a=parseInt(g.getItem(d.PAGE_COUNT),10);
25<=a&&(g.removeItem(d.PAGE+(a-25)),g.removeItem(d.PAGE_TIME+(a-25)));
g.setItem(d.PAGE_COUNT,(a+1).toString());
g.setItem(d.PAGE+a.toString(),window.location.href);
g.setItem(d.PAGE_TIME+a.toString(),(new Date).getTime())
};
this.getPageCount=function(){return parseInt(g.getItem(d.PAGE_COUNT),10)
};
this.getSessionStart=function(){return g.getItem(d.SESSION_START)
};
this.getPages=function(){for(var a=[],b=this.getPageCount(),c=25>b?0:b-25;
c<b;
c++){a.unshift({location:g.getItem(d.PAGE+c.toString()),time:((new Date).getTime()-parseInt(g.getItem(d.PAGE_TIME+c.toString()),10)).toString()})
}return a
};
this.getCurrentPage=function(){return g.getItem(d.PAGE+(this.getPageCount()-1).toString())
};
this.clear=function(){g.clear()
}
};
l.TYPE={STANDARD:"STANDARD",INVITE:"INVITE",AGENT:"AGENT"};
l.EVENT={BUTTON_AVAILABLE:"BUTTON_AVAILABLE",BUTTON_UNAVAILABLE:"BUTTON_UNAVAILABLE",BUTTON_ACCEPTED:"BUTTON_ACCEPTED",BUTTON_REJECTED:"BUTTON_REJECTED"};
l.prototype.init=function(a,b){this.buttonId=a;
this.type=b;
this.onlineState=null;
this.trackers=[];
this.language=this.prechat=this.endpoint=null
};
l.prototype.getType=function(){return this.type
};
l.prototype.getOnlineState=function(){return this.onlineState
};
l.prototype.setOnlineState=function(a){this.onlineState=a;
for(var b=0;
b<this.trackers.length;
b++){this.trackers[b].setState(a)
}};
l.prototype.addTracker=function(a){this.trackers.push(a)
};
l.prototype.setPrechat=function(a){this.prechat=a
};
l.prototype.setEndpoint=function(a){this.endpoint=a
};
l.prototype.getEndpoint=function(a){function b(){var b=m.contentServerUrl,c=m.urlPrefix;
if(null==b){throw Error("You cannot call liveagent.startChat until the asynchronous call to liveagent.init has completed!")
}m.contentServerUrl=f.addPrefixToURL(b,c,!0);
b=this.endpoint;
b=!f.isEmpty(b)&&-1<f.getDomainFromUrl(b).indexOf("force")?f.addPrefixToURL(b,c,!0):b;
this.endpoint=b;
b=(null!=this.endpoint?this.endpoint:m.contentServerUrl+m.chatPage)+"?language\x3d"+(this.language?this.language:"");
f.isEmpty(c)||(b+="\x26proxy\x3d"+c+"\x26proxyKey\x3d"+m.prefixKey+"\x26org_id\x3d"+m.orgId+"\x26deployment_id\x3d"+m.deploymentId);
return b+="#"+a
}var c=null,c=null==this.prechat?b.call(this):this.prechat+"?endpoint\x3d"+encodeURIComponent(b.call(this));
return m.contentServerUrl+m.prechatHandler+"?endpoint\x3d"+encodeURIComponent(c)
};
l.prototype.setLanguage=function(a){this.language=a
};
l.prototype.startChat=function(a){return this.dispatchEvent(l.EVENT.BUTTON_ACCEPTED)?(ua(this.buttonId,a),!0):!1
};
l.prototype.rejectChat=function(){return this.dispatchEvent(l.EVENT.BUTTON_REJECTED)?!0:!1
};
l.prototype.dispatchEvent=function(a){return ea.hasOwnProperty(this.buttonId)?!1===ea[this.buttonId].call(this,a)?!1:!0:!0
};
s.prototype.init=function(a,b){this.buttonId=a;
this.element=b
};
s.prototype.getId=function(){return this.buttonId
};
s.prototype.setState=function(a){f.log("Setting state for button "+this.buttonId+" to "+(a?"online":"offline"));
return k[this.buttonId].dispatchEvent(a?l.EVENT.BUTTON_AVAILABLE:l.EVENT.BUTTON_UNAVAILABLE)?!0:!1
};
ia.prototype=new l;
R.prototype=new l;
R.prototype.startChat=function(a,b){if(this.dispatchEvent(l.EVENT.BUTTON_ACCEPTED)){var c=this.buttonId.split("_");
ua(c[1],a,c[0],b);
return !0
}return !1
};
S.prototype=new s;
S.prototype.setState=function(a){s.prototype.setState.call(this,a)&&(this.element.style.display=a?"":"none")
};
T.prototype=new s;
T.prototype.setState=function(a){s.prototype.setState.call(this,a)&&(this.element.style.display=a?"none":"")
};
var fa=!1,F=null,ga={},G={};
n.prototype=new l;
n.RENDERER={Slide:{renderClass:I},Fade:{renderClass:J},Appear:{renderClass:L},Custom:{renderClass:D}};
n.START_POSITION={TopLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:0,yPosition:-1,yOffset:-1},TopLeftTop:{xPercent:0,xPosition:0,xOffset:1,yPercent:0,yPosition:-1,yOffset:-1},Top:{xPercent:0.5,xPosition:-0.5,xOffset:0,yPercent:0,yPosition:-1,yOffset:-1},TopRightTop:{xPercent:1,xPosition:-1,xOffset:-1,yPercent:0,yPosition:-1,yOffset:-1},TopRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:0,yPosition:-1,yOffset:-1},TopRightRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:0,yPosition:0,yOffset:1},Right:{xPercent:1,xPosition:0,xOffset:1,yPercent:0.5,yPosition:-0.5,yOffset:0},BottomRightRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:1,yPosition:-1,yOffset:-1},BottomRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:1,yPosition:0,yOffset:1},BottomRightBottom:{xPercent:1,xPosition:-1,xOffset:-1,yPercent:1,yPosition:0,yOffset:1},Bottom:{xPercent:0.5,xPosition:-0.5,xOffset:0,yPercent:1,yPosition:0,yOffset:1},BottomLeftBottom:{xPercent:0,xPosition:0,xOffset:1,yPercent:1,yPosition:0,yOffset:1},BottomLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:1,yPosition:0,yOffset:1},BottomLeftLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:1,yPosition:-1,yOffset:-1},Left:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:0.5,yPosition:-0.5,yOffset:0},TopLeftLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:0,yPosition:0,yOffset:1}};
n.END_POSITION={TopLeft:{xPercent:0,xOffset:1,yPercent:0,yOffset:1},Top:{xPercent:0.5,xOffset:0,yPercent:0,yOffset:1},TopRight:{xPercent:1,xOffset:-1,yPercent:0,yOffset:1},Left:{xPercent:0,xOffset:1,yPercent:0.5,yOffset:0},Center:{xPercent:0.5,xOffset:0,yPercent:0.5,yOffset:0},Right:{xPercent:1,xOffset:-1,yPercent:0.5,yOffset:0},BottomLeft:{xPercent:0,xOffset:1,yPercent:1,yOffset:-1},Bottom:{xPercent:0.5,xOffset:0,yPercent:1,yOffset:-1},BottomRight:{xPercent:1,xOffset:-1,yPercent:1,yOffset:-1}};
n.prototype.setRules=function(a,b){if(a&&b){for(var c in a){var e=a[c],d=null;
switch(e.type){case h.TYPE.NUMBER_OF_PAGE_VIEWS:d=new M(e.order,this.buttonId,A.getPageCount(),e.operator,parseInt(e.value,10));
break;
case h.TYPE.URL_MATCH:d=new M(e.order,this.buttonId,A.getCurrentPage(),e.operator,e.value);
break;
case h.TYPE.SECONDS_ON_PAGE:d=new N(e.order,this.buttonId,(new Date).getTime(),e.operator,1000*parseInt(e.value,10));
break;
case h.TYPE.SECONDS_ON_SITE:d=new N(e.order,this.buttonId,parseInt(A.getSessionStart(),10),e.operator,1000*parseInt(e.value,10));
break;
case h.TYPE.CUSTOM_VARIABLE:d=new U(e.order,this.buttonId,e.name,e.operator,e.value),G.hasOwnProperty(e.name)||(G[e.name]=[]),G[e.name].push(this.buttonId)
}null!=d&&this.addRule(d)
}this.filterLogic=b;
this.ruleTree=E(b)
}};
n.prototype.setOnlineState=function(a){!a&&null!==this.inviteTimeout&&(clearTimeout(this.inviteTimeout),this.inviteTimeout=null);
!a&&null!==this.autoRejectTimeout&&(clearTimeout(this.autoRejectTimeout),this.autoRejectTimeout=null);
l.prototype.setOnlineState.call(this,a)
};
n.prototype.isActive=function(){return this.active
};
n.prototype.setActive=function(a){this.active=a
};
n.prototype.addTracker=function(a){this.trackers=[];
l.prototype.addTracker.call(this,a)
};
n.prototype.getTracker=function(){if(1!=this.trackers.length){throw Error("InviteButtons should have exactly 1 tracker")
}return this.trackers[0]
};
n.prototype.startChat=function(a){return this.active&&l.prototype.startChat.call(this,a)?(this.getTracker().accept(),!0):!1
};
n.prototype.rejectChat=function(){return this.active&&l.prototype.rejectChat.call(this)?(this.getTracker().reject(),!0):!1
};
n.prototype.trigger=function(){if(f.getCookie("liveagent_invite_rejected_"+this.buttonId)){return !1
}var a=!0;
null!=this.ruleTree&&(f.logGroupStart("Invite "+this.buttonId+" Rule Evaluation"),f.log("Filter Logic: "+this.filterLogic),a=this.ruleTree.evaluate(this),f.logGroupEnd());
if(!a&&null!=this.inviteDelay){var b=this;
this.inviteTimeout=window.setTimeout(function(){b.setOnlineState(!0)
},this.inviteDelay);
this.inviteDelay=null
}return a
};
n.prototype.addRule=function(a){this.rules[a.getId()]=a
};
n.prototype.getRule=function(a){return this.rules[a]
};
n.prototype.getInviteDelay=function(){return this.inviteDelay
};
n.prototype.setInviteDelay=function(a){f.log("Setting invite delay to: "+a);
this.inviteDelay=a
};
n.prototype.setAutoRejectTimeout=function(a){this.autoRejectTimeout=a
};
z.prototype=new s;
z.prototype.setState=function(a){a&&!fa&&t(this.buttonId).trigger()&&s.prototype.setState.call(this,!0)?(fa=!0,F=this.buttonId,this.renderer.render()):!a&&(t(this.buttonId).isActive()&&s.prototype.setState.call(this,!1))&&(fa=!1,this.remove(!0))
};
z.prototype.renderFinish=function(){t(this.buttonId).setActive(!0);
if(-1!=this.rejectTime){var a=this.buttonId;
t(this.buttonId).setAutoRejectTimeout(window.setTimeout(function(){t(a).rejectChat()
},1000*this.rejectTime))
}this.renderer.renderFinish()
};
z.prototype.accept=function(){this.hasInviteAfterAccept||f.setCookie("liveagent_invite_rejected_"+this.buttonId,!0,!1);
this.remove(!1)
};
z.prototype.reject=function(){this.hasInviteAfterReject||f.setCookie("liveagent_invite_rejected_"+this.buttonId,!0,!1);
this.remove(!0)
};
z.prototype.remove=function(a){t(this.buttonId).setActive(!1);
this.renderer.remove(a)
};
z.prototype.removeFinish=function(){this.renderer.remove(!1)
};
r.prototype.init=function(a,b,c,e){window.innerWidth?this.realWidth=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?this.realWidth=document.documentElement.clientWidth:document.body&&(this.realWidth=document.body.clientWidth);
window.innerHeight?this.realHeight=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?this.realHeight=document.documentElement.clientHeight:document.body&&(this.realHeight=document.body.clientHeight);
this.offset=25;
this.buttonId=a;
this.animationPrefix=f.getCssAnimation(b);
this.element=b;
this.element.style.position=null!==this.animationPrefix?"fixed":"absolute";
this.element.style.left="-1000px";
this.element.style.top="-1000px";
this.element.style.zIndex="10000";
this.element.style.display="";
this.width=this.element.offsetWidth;
this.height=this.element.offsetHeight;
this.startPosition=c;
this.endPosition=e
};
r.prototype.render=function(){this.element.style.display=""
};
r.prototype.renderFinish=function(){};
r.prototype.remove=function(a){this.element.style.left="-1000px";
this.element.style.top="-1000px"
};
r.prototype.addRenderListeners=function(){var a=this.buttonId,b="AnimationIteration",c="AnimationEnd";
""==this.animationPrefix?(b=b.toLowerCase(),c=c.toLowerCase()):(b=this.animationPrefix+b,c=this.animationPrefix+c);
f.addEventListener(this.element,b,function(){C(a).renderFinish()
});
f.addEventListener(this.element,c,function(){C(a).removeFinish()
})
};
I.prototype=new r;
I.prototype.render=function(){r.prototype.addRenderListeners.call(this);
var a=this.width*this.startPosition.xPosition+this.offset*this.startPosition.xOffset,b=this.height*this.startPosition.yPosition+this.offset*this.startPosition.yOffset,c=-1*this.width*this.endPosition.xPercent+this.offset*this.endPosition.xOffset,e=-1*this.height*this.endPosition.yPercent+this.offset*this.endPosition.yOffset,d="";
""!==this.animationPrefix&&(d="-"+this.animationPrefix+"-");
var g=document.createElement("style");
g.innerHTML="@"+d+"keyframes slide"+this.buttonId+"{from { margin-left: "+a+"px; margin-top: "+b+"px; left: "+100*this.startPosition.xPercent+"%; top: "+100*this.startPosition.yPercent+"%; }to { margin-left: "+c+"px; margin-top: "+e+"px; left: "+100*this.endPosition.xPercent+"%; top: "+100*this.endPosition.yPercent+"%; }}";
document.getElementsByTagName("head")[0].appendChild(g);
this.element.style[d+"animation-name"]="slide"+this.buttonId;
this.element.style[d+"animation-duration"]="1s";
this.element.style[d+"animation-iteration-count"]="2";
this.element.style[d+"animation-direction"]="alternate";
this.element.style[d+"animation-timing-function"]="ease-in-out";
this.element.style.setProperty(d+"animation-name","slide"+this.buttonId,"");
this.element.style.setProperty(d+"animation-duration","1s","");
this.element.style.setProperty(d+"animation-iteration-count","2","");
this.element.style.setProperty(d+"animation-direction","alternate","");
this.element.style.setProperty(d+"animation-timing-function","ease-in-out","");
r.prototype.render.call(this)
};
I.prototype.renderFinish=function(){var a="";
""!==this.animationPrefix&&(a="-"+this.animationPrefix+"-");
this.element.style[a+"animation-play-state"]="paused";
this.element.style.setProperty(a+"animation-play-state","paused","")
};
I.prototype.remove=function(a){var b="";
""!==this.animationPrefix&&(b="-"+this.animationPrefix+"-");
a?(this.element.style[b+"animation-play-state"]="running",this.element.style.setProperty(b+"animation-play-state","running","")):(this.element.style[b+"animation-name"]="",this.element.style.setProperty(b+"animation-name","",""),r.prototype.remove.call(this,a))
};
J.prototype=new r;
J.prototype.render=function(){r.prototype.addRenderListeners.call(this);
var a="";
""!==this.animationPrefix&&(a="-"+this.animationPrefix+"-");
var b=document.createElement("style");
b.innerHTML="@"+a+"keyframes fade"+this.buttonId+"{from { opacity: 0; }to { opacity: 1; }}";
document.getElementsByTagName("head")[0].appendChild(b);
this.element.style[a+"animation-name"]="fade"+this.buttonId;
this.element.style[a+"animation-duration"]="1s";
this.element.style[a+"animation-iteration-count"]="2";
this.element.style[a+"animation-direction"]="alternate";
this.element.style[a+"animation-timing-function"]="ease-in-out";
this.element.style.setProperty(a+"animation-name","fade"+this.buttonId,"");
this.element.style.setProperty(a+"animation-duration","1s","");
this.element.style.setProperty(a+"animation-iteration-count","2","");
this.element.style.setProperty(a+"animation-direction","alternate","");
this.element.style.setProperty(a+"animation-timing-function","ease-in-out","");
this.element.style.marginLeft=-1*this.width*this.endPosition.xPercent+this.offset*this.endPosition.xOffset+"px";
this.element.style.left=100*this.endPosition.xPercent+"%";
this.element.style.marginTop=-1*this.height*this.endPosition.yPercent+this.offset*this.endPosition.yOffset+"px";
this.element.style.top=100*this.endPosition.yPercent+"%";
r.prototype.render.call(this)
};
J.prototype.renderFinish=function(){var a="";
""!==this.animationPrefix&&(a="-"+this.animationPrefix+"-");
this.element.style[a+"animation-play-state"]="paused";
this.element.style.setProperty(a+"animation-play-state","paused","")
};
J.prototype.remove=function(a){var b="";
""!==this.animationPrefix&&(b="-"+this.animationPrefix+"-");
a?(this.element.style[b+"animation-play-state"]="running",this.element.style.setProperty(b+"animation-play-state","running",""),this.element.style.opacity=0):(this.element.style[b+"animation-name"]="",this.element.style.setProperty(b+"animation-name","",""),r.prototype.remove.call(this,a))
};
L.prototype=new r;
L.prototype.render=function(){this.element.style.marginLeft=-1*this.width*this.endPosition.xPercent+this.offset*this.endPosition.xOffset+"px";
this.element.style.left=100*this.endPosition.xPercent+"%";
this.element.style.marginTop=-1*this.height*this.endPosition.yPercent+this.offset*this.endPosition.yOffset+"px";
this.element.style.top=100*this.endPosition.yPercent+"%";
r.prototype.render.call(this);
C(this.buttonId).renderFinish()
};
L.prototype.remove=function(a){a?C(this.buttonId).removeFinish():r.prototype.remove.call(this,a)
};
D.prototype=new r;
D.prototype.render=function(){C(this.buttonId).renderFinish()
};
D.prototype.renderFinish=function(){};
D.prototype.remove=function(a){a&&C(this.buttonId).removeFinish()
};
h.TYPE={NUMBER_OF_PAGE_VIEWS:"NUMBER_OF_PAGE_VIEWS",URL_MATCH:"URL_MATCH",SECONDS_ON_PAGE:"SECONDS_ON_PAGE",SECONDS_ON_SITE:"SECONDS_ON_SITE",CUSTOM_VARIABLE:"CUSTOM_VARIABLE"};
h.OPERATOR={EQUALS:"EQUALS",NOT_EQUAL:"NOT_EQUAL",START_WITH:"START_WITH",CONTAINS:"CONTAINS",NOT_CONTAIN:"NOT_CONTAIN",LESS_THAN:"LESS_THAN",GREATER_THAN:"GREATER_THAN",LESS_OR_EQUAL:"LESS_OR_EQUAL",GREATER_OR_EQUAL:"GREATER_OR_EQUAL"};
h.prototype.init=function(a,b,c,e,d){this.ruleId=a;
this.buttonId=b;
this.compareFrom=c;
this.operator=e;
this.compareTo=d
};
h.prototype.getId=function(){return this.ruleId
};
h.prototype.evaluate=function(a,b){switch(this.operator){case h.OPERATOR.EQUALS:return f.log("Evaluate: "+a+" \x3d\x3d "+b),a==b;
case h.OPERATOR.NOT_EQUAL:return f.log("Evaluate: "+a+" !\x3d "+b),a!=b;
case h.OPERATOR.START_WITH:return f.log("Evaluate: "+a+" indexOf "+b+" \x3d\x3d 0"),0==a.indexOf(b);
case h.OPERATOR.CONTAINS:return f.log("Evaluate: "+a+" indexOf "+b+" !\x3d -1"),-1!=a.indexOf(b);
case h.OPERATOR.NOT_CONTAIN:return f.log("Evaluate: "+a+" indexOf "+b+" \x3d\x3d -1"),-1==a.indexOf(b);
case h.OPERATOR.LESS_THAN:return f.log("Evaluate: "+parseFloat(a)+" \x3c "+parseFloat(b)),parseFloat(a)<parseFloat(b);
case h.OPERATOR.GREATER_THAN:return f.log("Evaluate: "+parseFloat(a)+" \x3e "+parseFloat(b)),parseFloat(a)>parseFloat(b);
case h.OPERATOR.LESS_OR_EQUAL:return f.log("Evaluate: "+parseFloat(a)+" \x3c\x3d "+parseFloat(b)),parseFloat(a)<=parseFloat(b);
case h.OPERATOR.GREATER_OR_EQUAL:return f.log("Evaluate: "+parseFloat(a)+" \x3e\x3d "+parseFloat(b)),parseFloat(a)>=parseFloat(b)
}};
M.prototype=new h;
M.prototype.evaluate=function(){f.log("Evaluating StandardInviteRule");
return h.prototype.evaluate.call(this,this.compareFrom,this.compareTo)
};
N.prototype=new h;
N.prototype.evaluate=function(){f.log("Evaluating TimerInviteRule");
var a=(new Date).getTime()-this.compareFrom,b=h.prototype.evaluate.call(this,a,this.compareTo);
!b&&a<=this.compareTo&&(a=this.compareTo-a,(null==t(this.buttonId).getInviteDelay()||a<t(this.buttonId).getInviteDelay())&&t(this.buttonId).setInviteDelay(a));
return b
};
U.prototype=new h;
U.prototype.evaluate=function(){if(ga.hasOwnProperty(this.compareFrom)){return f.log("Evaluating CustomInviteRule"),h.prototype.evaluate.call(this,ga[this.compareFrom].toString(),this.compareTo)
}f.log("CustomInviteRule evaluation failed due to missing custom variable");
return !1
};
var ka=0;
y.prototype.init=function(a,b){this.left=a;
this.right=b
};
y.prototype.evaluate=function(a){return !1
};
Y.prototype=new y;
Y.prototype.evaluate=function(a){f.log("Evaluating Atom Node: "+this.ruleId);
return a.getRule(this.ruleId).evaluate()
};
V.prototype=new y;
V.prototype.evaluate=function(a){f.logGroupStart("Evaluating And Node");
a=this.left.evaluate(a)&&this.right.evaluate(a);
f.logGroupEnd();
return a
};
W.prototype=new y;
W.prototype.evaluate=function(a){f.logGroupStart("Evaluating Or Node");
a=this.left.evaluate(a)||this.right.evaluate(a);
f.logGroupEnd();
return a
};
X.prototype=new y;
X.prototype.evaluate=function(a){f.logGroupStart("Evaluating Not Node");
a=!this.left.evaluate(a);
f.logGroupEnd();
return a
};
la.prototype.toJSON=function(){return{label:this.getLabel(),value:this.getValue(),displayToAgent:this.getDisplayToAgent(),entityMaps:this.getMapper().getEntityMaps(),transcriptFields:this.getMapper().getTranscriptFields(),doKnowledgeSearch:this.getDoKnowledgeSearch()}
};
Z.prototype.map=function(a,b,c,e,d){"undefined"==typeof c&&(c=!0);
"undefined"==typeof e&&(e=!0);
"undefined"==typeof d&&(d=!0);
this.getEntityMaps().push(new ma(a,b,c,e,d))
};
Z.prototype.saveToTranscript=function(a){this.getTranscriptFields().push(a)
};
ma.prototype.toJSON=function(){return{entityName:this.getEntityName(),fieldName:this.getFieldName(),fastFill:this.getFastFill(),autoQuery:this.getAutoQuery(),exactMatch:this.getExactMatch()}
};
var H={};
p._=H;
H.handlePing=function(a){q.connection.handlePing(a)
};
H.error=function(a){a?f.log("Server Error: "+a):f.log("Server responded with an error.");
aa()
};
H.warning=function(a){a?f.log("Server Warning: "+a):f.log("Server sent an anoymous warning.")
};
H.setNewPtid=function(a){u.setPermanentId(a)
};
H.clearStorage=function(){A.clear()
};
p.init=function(a,b,c){if("string"!=typeof a){throw Error("The url to init must be strings")
}if(!f.isOrganizationId(c)){throw Error("Invalid OrganizationId Parameter Value: "+c)
}if(!f.isDeploymentId(b)){throw Error("Invalid DeploymentId Parameter Value: "+b)
}m.url=a;
m.deploymentId=b;
m.orgId=c;
f.log("System Initialized. Waiting for the DOM to be ready");
"complete"===document.readyState?setTimeout(O,1):document.addEventListener?(document.addEventListener("DOMContentLoaded",O,!1),window.addEventListener("load",O,!1)):window.attachEvent?window.attachEvent("onload",O):f.log("No available event model. Exiting.")
};
p.getSid=function(){return v
};
p.enableLogging=function(){Q=!0
};
p.setLocation=function(a){};
p.setChatWindowWidth=function(a){m.chatWindowWidth=a
};
p.setChatWindowHeight=function(a){m.chatWindowHeight=a
};
p.disconnect=function(){aa()
};
p.startChat=function(a,b,c){(b?K(a,b):k[a]).startChat("liveagent"+Math.round(100000*Math.random())+(new Date).getTime(),c)
};
p.startChatWithWindow=function(a,b,c,e){(c?K(a,c):k[a]).startChat(b,e)
};
p.rejectChat=function(a){k[a].rejectChat()
};
p.showWhenOnline=function(a,b,c){if(q.connection.isRunning()){throw Error("You cannot add a button after page initialization.")
}a=c?K(a,c):ja(a);
a.addTracker(new S(a.buttonId,b))
};
p.showWhenOffline=function(a,b,c){if(q.connection.isRunning()){throw Error("You cannot add a button after page initialization.")
}a=c?K(a,c):ja(a);
a.addTracker(new T(a.buttonId,b))
};
p.addCustomDetail=function(a,b,c){if(q.connection.isRunning()){throw Error("You cannot add a detail after page initialization.")
}if("undefined"==typeof a||"undefined"==typeof b||null===a||null===b){throw Error("CustomDetail contains null value")
}var e=new la(a,b,c);
va.push(e);
var d={map:function(a,b,c,f,h){if("undefined"==typeof a||null===a||"undefined"==typeof b||null===b||null===c||null===f||null===h){throw Error("CustomDetail.map contains null value")
}e.getMapper().map(a,b,c,f,h);
return d
},saveToTranscript:function(a){if("undefined"==typeof a||null===a){throw Error("CustomDetail.saveToTranscript contains null value")
}e.getMapper().saveToTranscript(a);
return d
},doKnowledgeSearch:function(){e.setDoKnowledgeSearch();
return d
}};
return d
};
p.setName=function(a){if(q.connection.isRunning()){throw Error("You cannot set the name after page initialization.")
}ba=a
};
p.addButtonEventHandler=function(a,b){"function"==typeof b&&(ea[a]=b)
};
p.BUTTON_EVENT=l.EVENT;
p.setCustomVariable=function(a,b){ga[a]=b;
if(G.hasOwnProperty(a)){for(var c=0;
c<G[a].length;
c++){var e=t(G[a][c]);
e.getOnlineState()&&e.setOnlineState(!0)
}}};
p.findOrCreate=function(a){if(q.connection.isRunning()){throw Error("You cannot find or create after page initialization.")
}var b=new na(a);
wa.push(b);
var c={map:function(a,d,g,f,h){b.getEntityMapper().map(a,d,g,f,h);
return c
},saveToTranscript:function(a){b.setSaveTranscript(a);
return c
},showOnCreate:function(){b.setShowOnCreate(!0);
return c
},linkToEntity:function(a,d){if(ha.hasOwnProperty(a)&&ha[a]==b.getEntityName()){return ca("Warning: Recursive links detected, skip link "+b.getEntityName()+" to "+a),c
}b.setLinkToEntityName(a);
b.setLinkToEntityField(d);
ha[b.getEntityName()]=a;
return c
}};
return c
};
p.addURLPrefix=function(a){if(q.connection.isRunning()){throw Error("You cannot set a URL Prefix after page initialization.")
}if("string"!=typeof a){throw Error("The parameter to addURLPrefix must be a string")
}m.url=f.addPrefixToURL(m.url,a,!0);
m.urlPrefix=a
};
var q={VisitorMessage:{ERROR:"Error",WARNING:"Warning"},SystemMessage:{ASYNC_RESULT:"AsyncResult",SWITCH_SERVER:"SwitchServer"}};
(function(){var a=null,b=!1,c=null,e=null,d={};
(function(){d.send=function(b,f){if(null!==c){d.onError.call(window,"Did not handle response before sending another message")
}else{"undefined"==typeof f&&(f={});
var h="Visitor",k="",l=!1;
1<b.length?(h="System",k="MultiNoun",f.nouns="",l=!0):k=b[0].getName();
h=m.url+"/rest/"+h+"/"+k+".jsonp?";
for(k=0;
k<b.length;
k++){l&&(f.nouns+=b[k].getName()+",");
f[b[k].getName()+".prefix"]="Visitor";
for(var n in b[k].getData()){b[k].getData().hasOwnProperty(n)&&(f[b[k].getName()+"."+n]=b[k].getData()[n])
}}l&&(f.nouns=f.nouns.substr(0,f.nouns.length-1));
for(var p in f){f.hasOwnProperty(p)&&(h+=p+"\x3d"+f[p]+"\x26")
}h+="callback\x3d"+a;
h+="\x26deployment_id\x3d"+m.deploymentId;
h+="\x26org_id\x3d"+m.orgId;
h+="\x26version\x3d36";
l=document.createElement("script");
l.type="text/javascript";
l.src=h;
c=document.body.appendChild(l);
e=window.setTimeout(function(){d.onError.call(window,"Server failed to respond.")
},m.pingTimeout)
}};
d.handlePing=function(a){e&&(clearTimeout(e),e=null);
b=!0;
a=a.messages;
for(var f=0;
f<a.length;
f++){d.messageHandler.call(window,a[f].type,a[f].message)
}d.onSuccess.call(window);
null!==c&&(document.body.removeChild(c),c=null)
};
d.messageHandler=function(a,b){};
d.onSuccess=function(){};
d.onError=function(a){};
d.isRunning=function(){return b
};
d.setIsRunning=function(a){b=a
};
d.setCallback=function(b){a=b
}
})();
q.connection=d;
q.Noun=function(a,b){this.getName=function(){return a
};
this.getData=function(){return b
}
}
})();
na.prototype.toJSON=function(){return{entityName:this.getEntityName(),saveToTranscript:this.getSaveTranscript(),showOnCreate:this.getShowOnCreate(),linkToEntityName:this.getLinkToEntityName(),linkToEntityField:this.getLinkToEntityField(),entityFieldsMaps:this.getEntityMapper().getEntityFieldsMaps()}
};
oa.prototype.map=function(a,b,c,e,d){"undefined"==typeof c&&(c=!0);
"undefined"==typeof e&&(e=!0);
"undefined"==typeof d&&(d=!0);
this.getEntityFieldsMaps().push(new pa(a,b,c,e,d))
};
pa.prototype.toJSON=function(){return{fieldName:this.getFieldName(),label:this.getLabel(),doFind:this.getDoFind(),isExactMatch:this.getIsExactMatch(),doCreate:this.getDoCreate()}
};
var v=f.getCookie("liveagent_sid"),$=f.getCookie("liveagent_chatted"),qa=!1,Q=!1,k={},va=[],wa=[],ba=null,ea={},P=null,ha={},m={url:null,deploymentId:null,orgId:null,pingRate:null,pingTimeout:5000,chatWindowWidth:482,chatWindowHeight:450,contentServerUrl:null,chatPage:"/s/chat",prechatHandler:"/s/prechatVisitor"};
q.connection.messageHandler=function(a,b){switch(a){case"VisitorId":b.sessionId&&(f.log("Received new session ID"),v=b.sessionId,document.cookie="liveagent_sid\x3d"+encodeURIComponent(v)+";path\x3d/;",null!=u.getVisitCount()&&u.setVisitCount(u.getVisitCount()+1),u.getPermanentId()||u.setPermanentId(v));
break;
case"Settings":A.init();
f.log("Ping rate set to "+b.pingRate+"ms");
m.pingRate=b.pingRate;
m.contentServerUrl=b.contentServerUrl;
m.prefixKey=b.prefixKey;
for(var c=0;
c<b.buttons.length;
c++){switch(b.buttons[c].type){case"ToAgent":case"Standard":var e=b.buttons[c],d=k[e.id];
d&&ta(d,e);
break;
case"Invite":var e=b.buttons[c],g=null,g=e.inviteImageUrl?za(e.id,e.inviteImageUrl,e.inviteImageWidth,e.inviteImageHeight):document.getElementById("liveagent_invite_button_"+e.id);
null==g?ca("Warning: Button "+e.id+" disabled because HTML element was not found"):(d=t(e.id),d.addTracker(new z(e.id,g,e.inviteRenderer,e.inviteStartPosition,e.inviteEndPosition,e.hasInviteAfterAccept,e.hasInviteAfterReject,e.inviteRejectTime)),g=f.jsonDecode(e.inviteRules),d.setRules(g.rules,g.filter),ta(d,e))
}}break;
case"Availability":c={};
for(e=0;
e<b.results.length;
e++){(d=k[b.results[e].id])&&(c[b.results[e].id]={button:d,isAvailable:b.results[e].isAvailable})
}null!=F&&c.hasOwnProperty(F)&&(c[F].button.setOnlineState(c[F].isAvailable),delete c[F]);
for(g in c){c.hasOwnProperty(g)&&c[g].button.setOnlineState(c[g].isAvailable)
}break;
case q.VisitorMessage.WARNING:ca(b.text);
break;
case q.VisitorMessage.ERROR:xa(b.text);
break;
case q.SystemMessage.SWITCH_SERVER:c=b.newUrl;
if("string"===typeof c){m.url=c,f.log("Received updated LiveAgent server url: "+c+"! Consider updating this site's deployment code.")
}else{throw Error("Trying to set invalid LiveAgent server url: "+c)
}v=null
}};
q.connection.onSuccess=function(){null!==P&&clearTimeout(P);
P=window.setTimeout(Aa,m.pingRate)
};
q.connection.onError=function(a){xa(a)
}
}})();
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.search=SfdcWwwBase.search||{};
(function(a){SfdcWwwBase.search.bindClick=function(){a(".search-form .glyphicon-search").on("click",function(){a(".search-form").toggleClass("active")
})
};
SfdcWwwBase.search.init=function(){this.bindClick()
};
a(document).ready(function(){SfdcWwwBase.search.init()
})
}(jQuery));
(function(a){a("#region-selector").on("click",function(){a(this).toggleClass("active");
a(".footer-bottom-section").slideToggle(function(){a("html, body").animate({scrollTop:a(document).height()},1000)
})
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.tileSystem=SfdcWwwBase.tileSystem||{};
(function(a){SfdcWwwBase.tileSystem.resizeTimer=0;
SfdcWwwBase.tileSystem.setHeight=function(){if(this.tiles&&this.tiles.size()>0){this.tiles.each(function(){var b=0;
a(this).find(".tile-item").each(function(){a(this).children(".columns-wrapper").css("height","100%");
if(a(this).height()>b){b=a(this).height()
}});
a(this).find(".tile-item").each(function(){var c=b;
if(a(this).height()!==b&&SfdcWwwBase.utils.isEditMode()){c+=80
}a(this).children(".columns-wrapper").css("height",c+"px")
})
})
}};
SfdcWwwBase.tileSystem.init=function(){this.tiles=a(".tile-system");
this.setHeight()
};
a(document).ready(function(){SfdcWwwBase.tileSystem.init()
});
a(window).resize(function(){this.tiles=a(".tile-system");
clearTimeout(SfdcWwwBase.tileSystem.resizeTimer);
SfdcWwwBase.tileSystem.resizeTimer=setTimeout(SfdcWwwBase.tileSystem.setHeight,100)
})
}(jQuery));
VidyardPlayer=(function(){ITEM_TEMPLATE='<li class="media-item">				<div class="">					<div class="media-count">						<span><a href="#">#{count}</a></span>					</div>					<div class="media-action">						<a href="#"><span>&nbsp;</span></a>					</div>					<div class="media-title">						<div class="thumb-title"><a href="#">#{name}</a></div>					</div>					<div class="media-duration">						<span class="mduration">#{duration}</span>					</div>				</div>			</li>';
function a(c){return c.replace(/\\n/g,"\n").replace(/\\(.)/g,"$1")
}function b(c,d){return c.substring(0,d)+(c.length>d?"...":"")
}return{init:function(d){var k=new Vidyard.player(d.playerID);
var l=$(".video-playlist"),g=$(".vidyard_player > span"),e=$(".video-title"),j=$(".video-description");
g.css("width","100%");
function c(){var m=g.parents(".video-frame");
g.css({height:m.innerHeight(),width:m.innerWidth()});
g.find(".vidyard_iframe").css({height:m.innerHeight(),width:m.innerWidth()})
}c();
$(window).on("resize",_.throttle(c,250));
function h(){$vidyard_playlist_items.find(".video-toggle img").attr("src",PAUSE_IMAGE)
}var f=setInterval(function(){if(k.status!==null){var u=k.metadata||k.metadata();
if(u){var r,n,t=$.map(u.chapters_attributes,function(w){return w.video_attributes
});
l.empty();
function v(){$.each(t,function(x,w){$(w.playlist_item).find(".media-action").addClass("paused")
})
}function q(w){$(".video-title").text(w.name);
$(".video-description").text(w.description);
$(".video-time").text(w.duration);
v();
$(w.playlist_item).find(".media-action").addClass("playing");
p()
}function p(){var y=$(".min-scr4 .conf-right-container");
if(y.size()){var z=y.outerHeight(),A=parseInt(y.css("padding-bottom").split("px")[0]),x=$("#layout > .grid-row-first > .cell-first").outerHeight(),w=x-A;
y.css("height",w)
}else{}}k.on("play",function(){var w=t[k.getCurrentChapter()],y;
q(w);
if(k.lastVidPlayed!==w.name){if(k.lastVidPlayed){s.Media.close(k.lastVidPlayed)
}s.Media.open(w.name,w.length_in_seconds-1,s.Media.playerName)
}k.lastVidPlayed=w.name;
try{y=Math.round(parseFloat(k.currentTime()))
}catch(x){y=0
}s.Media.play(w.name,y)
});
k.on("pause",function(){var w=t[k.getCurrentChapter()],y;
try{y=Math.round(parseFloat(k.currentTime()))
}catch(x){y=0
}s.Media.stop(w.name,y)
});
k.on("playerComplete",function(){n=k.status.chapterIndex;
q(t[n]);
var w=$(".media-item").outerHeight()*n;
$(".video-playlist").animate({scrollTop:w},function(){p()
});
s.Media.close(t[n].name)
});
if(t.length>1){$('<div class="playlist-items slides">').append(r=$("<ul>")).appendTo(l);
$.each(t,function(y,x){var w=new Date(x.length_in_seconds*1000);
x.idx=y;
x.duration=w.getMinutes()+":"+(w.getSeconds()<10?"0":"")+w.getSeconds();
x.count=y+1;
x.name=a(x.name);
x.description=a(b(x.description,400));
x.playlist_item=$($.tmpl(ITEM_TEMPLATE,x));
r.append(x.playlist_item);
x.playlist_item.on("click",function(){if(k.getCurrentChapter()!==x.idx){k.playChapter(x.idx);
q(x);
$(".media-action img").hide(0,function(){$(".media-action img").show(0)
})
}})
})
}else{l.hide()
}n=k.status.chapterIndex;
q(t[n]);
var m=0;
for(var o=0;
o<n;
o++){m+=$(".media-item").eq(o).outerHeight()
}$(".video-playlist").animate({scrollTop:m},function(){p()
});
$(".video-playlist").scrollTop(m)
}clearInterval(f)
}},1)
}}
})();
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.carousel=SfdcWwwBase.carousel||{};
(function(a){SfdcWwwBase.carousel.setOptions=function(b){return{namespace:"carousel_",selector:".carousel_slides > .carousel_slide",animation:b.animation||"slide",slideshow:b.slideshow||false,slideshowSpeed:b.slideshowSpeed||7000,animationSpeed:b.animationSpeed||600,controlNav:b.controlNav||false,directionNav:b.directionNav||false,prevText:"<",nextText:">"}
};
SfdcWwwBase.carousel.init=function(b){var c=this;
a(b).each(function(){var g=this;
var e=a(g),f,d;
if(e.size()>0){f=e.data();
d=c.setOptions(f);
e.flexslider(d)
}});
a(".carousel_collapsed_laucher").on("click",function(f){f.preventDefault();
var g=a(".carousel_collapsed_laucher").siblings(".carousel"),d=a(".carousel_collapsed_laucher").siblings(".carousel_collapsed_layer");
if(a(g).hasClass("collapsed_layout")){a(g).removeClass("collapsed_layout");
a(d).addClass("bg-gradient-override");
a(this).removeClass("collapsed_launcher").addClass("open_launcher")
}else{a(g).addClass("collapsed_layout");
a(d).removeClass("bg-gradient-override");
a(this).removeClass("open_launcher").addClass("collapsed_launcher")
}})
};
SfdcWwwBase.carousel.init(".carousel")
}(jQuery));
(function(a){a.fn.equalizeChildren=function(f){if(typeof f==="undefined"){return this
}var c=f.defaultRwd,e=f.screenMap||[{name:"scr4",minWidth:990},{name:"scr3",minWidth:768},{name:"scr2",minWidth:480},{name:"scr1",minWidth:0}],d=this,h=[];
d.each(function(){var n=a(this),l=b(n.attr("class"),"equalize-children-groupprefix-")||"";
if(l.length!==0){l+="-"
}var k=n.find("[class^='equalize-group-"+l+"'],[class*=' equalize-group-"+l+"']");
var m={};
k.each(function(){var o=b(a(this).attr("class"),"equalize-group-");
if(m[o]===null){m[o]=a()
}m[o]=m[o].add(a(this))
});
h.push({rwdBehavior:(b(n.attr("class"),"equalize-children-rwd-")||c),childrenByTag:m})
});
function b(l,m){var n=new RegExp(m+"([^\\s]*)"),k=n.exec(l);
return(k&&k.length>0?k[1]:null)
}function j(){var k=a(window).width();
a.each(h,function(l,p){var m=p.rwdBehavior,q=p.childrenByTag,n=!m;
if(m){for(var o=0;
o<e.length;
o++){var t=e[o];
if(k>=t.minWidth){if(m.indexOf(t.name)!==-1){n=true
}break
}}}for(var u in q){var r=q[u];
r.css("height","auto");
if(n){r.innerHeight(Math.max.apply(null,r.map(function(v,w){return a(w).innerHeight()
}).toArray()))
}}})
}j();
if(_&&_.throttle){var g=_.throttle(j,1000);
a(window).resize(g)
}return this
};
a(window).load(function(){a("div.equalize-children").equalizeChildren()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.card=SfdcWwwBase.card||{};
(function(c){var a=[];
var b={sm:768,md:1024,lg:1200};
SfdcWwwBase.card.getCardGroupNames=function(d,e){if(c.inArray(c(e).attr("data-equalize"),a)===-1){a.push(c(this).attr("data-equalize"))
}};
SfdcWwwBase.card.bindCardClick=function(){c("body").on("click",".thumbnail-content.thumbnail-linked",function(f){var e=c(f.target).closest("a");
if(!e||!c(e).attr("href")){var d=c(this).data("href");
var g=c(this).data("new-window");
if(typeof d==="string"){if(g){window.open(d);
return false
}else{window.location=d
}}}})
};
SfdcWwwBase.card.adjustHeights=function(){c(".cardComponent [data-equalize]").each(SfdcWwwBase.card.getCardGroupNames);
c(".cardComponent[data-equalize]").each(SfdcWwwBase.card.getCardGroupNames);
c.each(a,function(d,e){var f="."+e;
SfdcWwwBase.card.equalizeElement(f)
})
};
SfdcWwwBase.card.equalizeElement=function(d){if(c(d).length>0){SfdcWwwBase.utils.equalizeHeightsResponsive(d,["xs","sm"])
}};
SfdcWwwBase.card.animateElement=function(){var d=0;
c(".animate-card").each(function(e){var f=this;
if(SfdcWwwBase.card.isElementVisible(this,100)&&c(window).width()>=b.sm){d+=100;
setTimeout(function(){c(f).animate({marginTop:"0px",opacity:"1"},200)
},d)
}})
};
SfdcWwwBase.card.isElementVisible=function(f,j){var h=c(window).scrollTop();
var e=h+c(window).height();
var g=c(f).offset().top-j;
var d=g+c(f).height();
return((g<e&&g>h)||(d<e&&d>h))
};
SfdcWwwBase.card.init=function(){var d=this;
d.adjustHeights();
d.bindCardClick();
c(window).on("resize",_.throttle(function(){d.adjustHeights()
},200));
c(window).on("scroll load resize",d.animateElement);
d.animateElement()
};
c(document).ready(function(){SfdcWwwBase.card.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.privacyBar=SfdcWwwBase.privacyBar||{};
(function(a){SfdcWwwBase.privacyBar.getCookie=function(b){if(!b){return null
}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(b).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null
};
SfdcWwwBase.privacyBar.loadPrivacyBar=function(){var b=a(".privacy-bar");
SfdcWwwBase.privacyBar.validatePrivaceBar(b,SfdcWwwBase.privacyBar.getCookie("privacy_bar"))
};
SfdcWwwBase.privacyBar.validatePrivaceBar=function(c,b){if(c&&b!=="hidden"){c.show();
a("#privacy-bar-close").click(function(){c.hide();
SfdcWwwBase.privacyBar.setCookie()
})
}};
SfdcWwwBase.privacyBar.setCookie=function(){var b=new Date();
b.setDate(b.getDate()+30);
document.cookie="privacy_bar=hidden; expires="+b.toUTCString()+"; path=/"
};
a(document).ready(function(){SfdcWwwBase.privacyBar.loadPrivacyBar()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.scrollableTabs=SfdcWwwBase.scrollableTabs||{};
(function(a){SfdcWwwBase.scrollableTabs.tabs=null;
SfdcWwwBase.scrollableTabs.offset=null;
SfdcWwwBase.scrollableTabs.bindEvents=function(){var b=this;
b.tabs.each(function(){a(this).on("click",function(e){e.preventDefault();
var d=a(this).attr("href");
a("body").scrollTo(d,"slow",{offset:-(b.offset)})
})
});
a(".scrollable-nav > .nav").on("affixed-top.bs.affix",function(){a(this).removeAttr("style");
b.forceTabsWidth()
});
var c=_.throttle(b.forceTabsWidth,200);
a(window).on("resize",c)
};
SfdcWwwBase.scrollableTabs.scrollspy=function(){var b=this;
if(a("#Scrollspy").size()>0){a("body").scrollspy({target:"#Scrollspy",offset:b.offset})
}};
SfdcWwwBase.scrollableTabs.forceTabsWidth=function(){var b=a(".scrollable-nav").width();
a(".scrollable-nav > ul.nav-pills").width(b)
};
SfdcWwwBase.scrollableTabs.init=function(){this.tabs=a(".scrollable-nav li.scrollable a");
this.offset=a(".scrollable-nav ul.nav").height()+70;
this.forceTabsWidth();
this.scrollspy();
this.bindEvents()
};
a(document).ready(function(){SfdcWwwBase.scrollableTabs.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.sideAnchorNavbar=SfdcWwwBase.sideAnchorNavbar||{};
(function(a){SfdcWwwBase.sideAnchorNavbar.scrollspy=function(){if(a(".sideAnchorNavbar .side-anchorbar").size()>0){a("body").scrollspy({target:".sideAnchorNavbar .side-anchorbar"})
}};
SfdcWwwBase.sideAnchorNavbar.init=function(){this.scrollspy()
};
a(document).ready(function(){SfdcWwwBase.sideAnchorNavbar.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.Nav=SfdcWwwBase.Nav||{};
(function(a){SfdcWwwBase.Nav.minHeight=0;
SfdcWwwBase.Nav.drawerHeight=0;
SfdcWwwBase.Nav.equalizeHeight=function(){a(".navbar-expandable-container > div.tab-pane").each(function(){var b=a(this).find("div.container.tab-wrap").outerHeight(),d=a(this).find("div.tab-closer").outerHeight(),e=a(this).find("footer").outerHeight(),c=b+d+e+8;
SfdcWwwBase.Nav.minHeight=b>SfdcWwwBase.Nav.minHeight?b:SfdcWwwBase.Nav.minHeight;
SfdcWwwBase.Nav.drawerHeight=c>SfdcWwwBase.Nav.drawerHeight?c:SfdcWwwBase.Nav.drawerHeight
});
a(".navbar-expandable-container").children("div.tab-pane").each(function(){a(this).find("div.container").first().css("min-height",SfdcWwwBase.Nav.minHeight)
})
};
SfdcWwwBase.Nav.setMenuElementsRightPosition=function(){var c=a(".free-trial-mobile").find(".btn").outerWidth()||0;
var d=a(".navbar-toggle").outerWidth()||0;
var b=c+d;
a(".navbar-toggle").css("right",c);
a(".main-menu").css("right",b)
};
SfdcWwwBase.Nav.closeDrawer=function(){a("div.navbar-expandable-container").removeClass("nav-expanded").removeAttr("style");
a(".primary-menu-item, .secondary-menu-item").removeClass("active-menu")
};
SfdcWwwBase.Nav.setDrawerHeight=function(){a("div.navbar-expandable-container").css("height",SfdcWwwBase.Nav.drawerHeight)
};
SfdcWwwBase.Nav.bindClick=function(){a(".nav-container ul.main-menu .navbar-expander").on("click",function(){if(a(this).parents("li").hasClass("active-menu")){SfdcWwwBase.Nav.closeDrawer()
}else{a(".primary-menu-item, .secondary-menu-item").removeClass("active-menu");
a(this).parents("li").addClass("active-menu");
a("#expandablenavigation").removeClass("in");
a("div.navbar-expandable-container").addClass("nav-expanded");
SfdcWwwBase.Nav.setDrawerHeight();
if(a(".navbar .collapse").hasClass("in")&&a(window).width()<=1024){a(".navbar .collapse").removeClass("in")
}}});
a("button[data-target=#expandablenavigation]").on("click",function(){SfdcWwwBase.Nav.closeDrawer(SfdcWwwBase.Nav.drawerHeight)
});
a("span.footer-closer-tab").on("click",function(){SfdcWwwBase.Nav.closeDrawer()
});
a(window).on("click",function(b){if(!a(b.target).closest("header").length){SfdcWwwBase.Nav.closeDrawer()
}});
a(".navbar-expandable-container").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){if(!a(this).hasClass("nav-expanded")){a(".primary-menu-item, .secondary-menu-item").removeClass("active-menu")
}})
};
SfdcWwwBase.Nav.init=function(){var e=a(".primaryMenuOverlayEffectTypeLevel").length>0;
if(!e){var b=this;
var c=200;
var d=_.throttle(function(){b.equalizeHeight();
if(a(".navbar-expandable-container").height()){b.setDrawerHeight()
}},c);
this.equalizeHeight();
b.bindClick();
a(window).on("resize",d)
}this.setMenuElementsRightPosition();
var f=_.throttle(function(){this.setMenuElementsRightPosition()
},200);
a(window).on("resize",f.bind(this))
};
a(document).ready(function(){SfdcWwwBase.Nav.init()
})
}(jQuery));
(function(b){var c=".region-selector_button";
var a=".region-selector_dialog";
b(function(){b("body").on("click",c,function(){b(a).toggle()
}).on("click",function(e){var d=b(e.target);
if(!(d.is(a)||d.is(c)||d.closest(a).size()||d.closest(c).size())){b(a).hide()
}})
})
})(jQuery);
var SfdcWwwBase=window.SfdcWwwBase||{};
SfdcWwwBase.utils=SfdcWwwBase.utils||{};
(function(){var f={sm:768,md:1024,lg:1200},b={xs:{min:0,max:f.sm-1},sm:{min:f.sm,max:f.md-1},md:{min:f.md,max:f.lg-1},lg:{min:f.lg,max:Infinity}};
var g=function(h){return $(h).height()
};
var d=function(j){var h=_.max(j,g);
return typeof h==="object"?$(h):$([])
};
var c=function(h){return d(h).height()||0
};
var e=function(){var k=$(window).width(),j;
for(j in b){var h=b[j];
if(k>=h.min&&k<=h.max){return j
}}};
var a=function(h,j){return function(){return $(this).data(h)===j
}
};
SfdcWwwBase.data=SfdcWwwBase.data||{};
SfdcWwwBase.utils.equalizeHeights=function(k,l){var j,h;
if(typeof k==="string"){j=$(k)
}else{if(typeof k==="object"){j=k
}}j.height("");
h=c(j);
j.height(h);
if(l){l()
}return h
};
SfdcWwwBase.utils.equalizeHeightsResponsive=function(h,j,m,q){var o=this,l=200,k,p,n;
m=m||l;
k=function(r){return _.indexOf(r,e())!==-1
};
p=function(){if(k(j)){$(h).height("")
}else{o.equalizeHeights(h,q)
}};
n=_.throttle(p,m);
$(window).on("load",p).on("resize",n);
p()
};
SfdcWwwBase.utils.equalizeElementsByClass=function(){var k=".equalize-height",j="equalize-group-id",n="exclude-screens",h=",",m=$(k),l={};
var o=function(p){return !!l[p.data(j)]
};
m.each(function(){var r=$(this);
if(o(r)){return
}var u=r.data(j),t=a(j,u),q=m.filter(t),w;
var p=function(x,y){return $(x).data(y)
};
var v=function(y){var x=p(y,n);
return x?x.split(h):[]
};
w=_.chain(q).map(v).flatten().uniq().value();
SfdcWwwBase.utils.equalizeHeightsResponsive(q,w);
l[u]=q
})
};
SfdcWwwBase.utils.equalizeElementsByClass();
SfdcWwwBase.utils.secondsToHHmm=function(p){var o=p;
if(!isNaN(p)){var k=Number(p);
var n=Math.floor(k/3600);
var j=Math.floor(k%3600/60);
var l=Math.floor(k%3600%60);
o=((n>0?n+":"+(j<10?"0":""):"")+j+":"+(l<10?"0":"")+l)
}return o
};
SfdcWwwBase.utils.isEditMode=function(){if(typeof CQ!=="undefined"&&typeof CQ.WCM!=="undefined"){return CQ.WCM.isEditMode(true)
}else{return false
}};
SfdcWwwBase.utils.getJSONP=function(j,l,k){if(!k&&SfdcWwwBase.data.hasOwnProperty(j)){l.call(this,SfdcWwwBase.data[j])
}else{var h=j+(j.indexOf("?")!==-1?"&":"?")+"callback=?";
$.getJSON(h,function(m){SfdcWwwBase.data[j]=m;
l.call(this,SfdcWwwBase.data[j])
})
}};
SfdcWwwBase.utils.getQueryParameterByName=function(h){h=h.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var k=new RegExp("[\\?&]"+h+"=([^&#]*)"),j=k.exec(location.search);
return j===null?"":decodeURIComponent(j[1].replace(/\+/g," "))
};
SfdcWwwBase.utils.adjacentImages=function(){$(".imageComponent").filter(function(){return $(this).prev().is(".imageComponent")||$(this).next().is(".imageComponent")
}).addClass("adjacent")
};
window.SfdcWwwBase=SfdcWwwBase;
$(".fixBlank").parent().css("display","block");
$(window).on("load resize",function(){SfdcWwwBase.utils.adjacentImages()
})
}());
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.promoBanner=SfdcWwwBase.promoBanner||{};
(function(a){SfdcWwwBase.promoBanner.init=function(){a("body").on("click",".banner-close",function(b){a(b.target).closest(".promo-banner-container").fadeOut(800).remove();
return false
});
if(!SfdcWwwBase.utils.isEditMode()){SfdcWwwBase.promoBanner.bindPromoClick()
}};
SfdcWwwBase.promoBanner.bindPromoClick=function(){a(".promo-banner-container").on("click",function(b){if(a(b.target).is(".banner-close, .banner-close *")){b.preventDefault();
return
}if(a(this).data("target")){window.open(a(this).data("href"))
}else{window.location=a(this).data("href")
}})
};
a(document).ready(function(){SfdcWwwBase.promoBanner.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.genericLinkListComponent=SfdcWwwBase.genericLinkListComponent||{};
(function(a){SfdcWwwBase.genericLinkListComponent.init=function(){var b=a(".generic-links .tooltip-enabled");
if(b.size()>0){b.each(function(){a(this).parents("li.tipped .li-wrap").on("mouseenter focusin",function(){a(this).find(".tooltip-enabled").popover("show")
}).on("mouseleave focusout",function(){a(this).find(".tooltip-enabled").popover("hide")
})
}).popover({trigger:"hover",viewport:{selector:"body",padding:10}})
}};
SfdcWwwBase.genericLinkListComponent.init()
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.liveagent=SfdcWwwBase.liveagent||{};
(function(a){SfdcWwwBase.liveagent.tryLiveAgentInit=function(){if(window.liveagent){var h=a(".liveagent-data");
var d=SfdcWwwBase.config.liveAgentButtonId;
var f=SfdcWwwBase.config.liveAgentOrganizationId;
var c=SfdcWwwBase.config.liveAgentDeploymentId;
var b=SfdcWwwBase.config.liveAgentEndpointUrl;
if(!(b&&c&&f)){return
}if(!(SfdcWwwBase.modal&&SfdcWwwBase.modal.shouldDoWaterfall())){try{liveagent.init(b,c,f)
}catch(e){}}var g=function(){if(!window._laq){window._laq=[]
}window._laq.push(function(){if(a("#liveagent_button_online_"+d).length){liveagent.showWhenOnline(d,document.getElementById("liveagent_button_online_"+d));
liveagent.showWhenOffline(d,document.getElementById("liveagent_button_offline_"+d))
}liveagent.setChatWindowHeight(368)
})
};
g()
}else{window.setTimeout(SfdcWwwBase.liveagent.tryLiveAgentInit,500)
}if(!SfdcWwwBase.utils.isEditMode()){a("body").on("click","a.chat-trigger",function(){liveagent.startChat(d)
})
}if(SfdcWwwBase.utils.isEditMode()){a("body").on("click","a.chat-trigger-contact",function(j){j.preventDefault()
})
}};
SfdcWwwBase.liveagent.initSecondButton=function(){var b=SfdcWwwBase.config.liveAgentButtonId;
if(a("#liveagent_button_online_"+b+"1").length){if(!window._laq){window._laq=[]
}window._laq.push(function(){liveagent.showWhenOnline(b,a("#liveagent_button_online_"+b+"1")[0]);
liveagent.showWhenOffline(b,a("#liveagent_button_offline_"+b+"1")[0])
})
}try{liveagent.init(SfdcWwwBase.config.liveAgentEndpointUrl,SfdcWwwBase.config.liveAgentDeploymentId,SfdcWwwBase.config.liveAgentOrganizationId)
}catch(c){}};
a(document).ready(function(){SfdcWwwBase.liveagent.tryLiveAgentInit()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.modal=(function(){var g=1000,u=30,l=u*g,r=1.5,f=r*g,n="slide",c="fade",t;
var p=function(){var v;
if(!$("#modal").length){v=$('<div id="modal" class="live-chat-modal"></div>');
$("body").append(v)
}else{v=$("#modal")
}return v
};
var o=function(){return p().is(":visible")
};
var e=function(w){var v=p();
switch(w){case n:v.slideDown(f);
break;
case c:v.fadeIn();
break;
default:v.show();
break
}};
var h=function(w){var v=p();
switch(w){case n:v.slideUp(f);
break;
case c:v.fadeOut();
break;
default:v.hide();
break
}};
var m=function(w,x){var v=w+".html"+location.search;
$.get(v).done(function(y){p().html(y)
}).done(x)
};
var d=function(w,v,x){m(w,x||function(){e(v)
})
};
var j=function(){$("body").on("click","a.open-modal",function(){d($(this).attr("href"))
})
};
var b=function(){$("body").on("click","a.close-modal, a.chat-trigger",function(){h($(this).data("animation"))
})
};
var a=function(){var v=SfdcWwwBase.config.liveChatModalPath;
if(v){d(v,n,function(){SfdcWwwBase.liveagent.initSecondButton();
setTimeout(function(){e(n);
vp.activityData.chat=1;
vp.saveActivityData();
digitalData.util.trackActivity("chat-fall",{events:["event34"],properties:{prop22:"prop 22 value",eVar32:Page.getName()+"|chat-fall"}})
},l)
})
}else{SfdcWwwBase.liveagent.initSecondButton()
}};
var k=function(){return !!SfdcWwwBase.config&&!SfdcWwwBase.config.liveChatWaterfallDisabled&&typeof vp!=="undefined"&&!vp.activityData.chat
};
var q=function(){p();
j();
b();
if(k()){a()
}};
t={showModal:e,hideModal:h,triggerModal:d,isActive:o,shouldDoWaterfall:k,init:q};
if(!SfdcWwwBase.utils.isEditMode()){t.init()
}return t
}());
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.highlight=SfdcWwwBase.highlight||{};
(function(a){SfdcWwwBase.highlight.init=function(){if(!SfdcWwwBase.utils.isEditMode()){SfdcWwwBase.highlight.bindHighlightClick()
}};
SfdcWwwBase.highlight.bindHighlightClick=function(){a(".highlight-container").each(function(){a(this).on("click",function(c){var b=a(this).find(".buttonCTAItemComponent a")[0];
b.click()
})
})
};
a(document).ready(function(){SfdcWwwBase.highlight.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.tallHighlight=SfdcWwwBase.tallHighlight||{};
(function(a){var c=a(window);
var b=false;
SfdcWwwBase.tallHighlight.init=function(){SfdcWwwBase.tallHighlight.bindHighlightClick();
SfdcWwwBase.tallHighlight.checkWidth();
a(window).resize(function(){var d=c.width();
if(d<769&&!b){SfdcWwwBase.tallHighlight.insertCaret();
b=true
}else{if(d>768&&b){SfdcWwwBase.tallHighlight.removeCaret();
b=false
}}})
};
SfdcWwwBase.tallHighlight.checkWidth=function(){var d=c.width();
if(d<769){SfdcWwwBase.tallHighlight.insertCaret();
b=true
}else{if(d>768){SfdcWwwBase.tallHighlight.removeCaret();
b=false
}}};
SfdcWwwBase.tallHighlight.insertCaret=function(){a(".outer-btn-container.cta-at-mobile .btn-container .btn").each(function(){a(this).append('<span class="salesforce-icon icon-sfdc-icon-right-arrow" id="tall-highlight-caret"></span>')
})
};
SfdcWwwBase.tallHighlight.removeCaret=function(){a(".outer-btn-container.cta-at-mobile .btn-container .btn").each(function(){a("#tall-highlight-caret").remove()
})
};
SfdcWwwBase.tallHighlight.bindHighlightClick=function(){a(".outer-tall-highlight").each(function(){a(this).on("click",function(g){var f=a(this).parent();
var d=a(f).find(".outer-btn-container .btn-container .btn")[0];
d.click()
})
})
};
a(document).ready(function(){SfdcWwwBase.tallHighlight.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.pageAssetFilterComponent=SfdcWwwBase.pageAssetFilterComponent||{};
(function(b){SfdcWwwBase.pageAssetFilterComponent.executeTriggerRefreshOfWebinars=function a(g){var f="/bin/ETLFeedImportTrigger";
var j="feedImporterClass="+g;
var e='<div class="alerts">';
e+='<div id="error_alert" class="alert" role="alert" style="display:none;"></div>';
e+="</div>";
var d=b("#TrigerDataButton");
var h='<p class="response-message">Loading ...</p>';
var c="";
if(d){b("#TrigerDataButton").before(e)
}d.hide();
b(".response-message").remove();
b(".alert").append(h);
b("#error_alert").show();
b.ajax({url:f,type:"GET",data:j,success:function(k){d.show();
b(".response-message").remove();
b(".alert").hide();
var l=k.Error;
if(l){c='<p class="response-message">Error making a request to the www.on24.com</p>';
b(".alert").append(c);
b("#error_alert").show()
}else{c='<p class="response-message">Generating nodes successfully!</p>';
b(".alert").append(c);
b("#error_alert").show()
}},error:function(){d.show();
c='<p class="response-message">Please check "TriggerWebinarsRestService" service!</p>';
b(".alert").append(c);
b("#error_alert").show()
}})
}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.pageAssetFilter=SfdcWwwBase.pageAssetFilter||{};
(function(a){SfdcWwwBase.pageAssetFilter.init=function(){setTimeout(function(){if(a(".partialPageItem")){SfdcWwwBase.pageAssetFilter.alignCardGrid()
}},500)
};
SfdcWwwBase.pageAssetFilter.alignCardGrid=function(){a(".partialPageItem").each(function(){if(((a(this).attr("itemindex")+1)%3)===0){a(this).append('<div class="partialPagesGridCleaner" style="clear: both; width: 100%;"></div>')
}})
};
a(document).ready(function(){SfdcWwwBase.pageAssetFilter.init()
})
})(jQuery);