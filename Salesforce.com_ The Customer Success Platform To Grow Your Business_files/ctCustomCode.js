/*browsers exclusion start*/function doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;

    if (--times < 0 && typeof failHandler === 'function') {
        failHandler();
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function () { doOnlyWhen(toDoHandler, toCheckHandler, interval, times); }, interval);
}
doOnlyWhen(function () {
    if (window.ClickTaleSettings.PTC.okToRunPCC) {
        (function () {
            window.ClickTaleSettings = window.ClickTaleSettings || {};
            window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
            window.ClickTaleSettings.PTC.originalPCCLocation = "Self_Hosted_Atlas_Code";
            var d = !0, i = !1, j = this; var k, l, m, n; function o() { return j.navigator ? j.navigator.userAgent : null } n = m = l = k = i; var p; if (p = o()) { var q = j.navigator; k = 0 == p.indexOf("Opera"); l = !k && -1 != p.indexOf("MSIE"); m = !k && -1 != p.indexOf("WebKit"); n = !k && !m && "Gecko" == q.product } var r = k, s = l, t = n, v = m, w;
            a: { var x = "", y; if (r && j.opera) var z = j.opera.version, x = "function" == typeof z ? z() : z; else if (t ? y = /rv\:([^\);]+)(\)|;)/ : s ? y = /MSIE\s+([^\);]+)(\)|;)/ : v && (y = /WebKit\/(\S+)/), y) var A = y.exec(o()), x = A ? A[1] : ""; if (s) { var B, C = j.document; B = C ? C.documentMode : void 0; if (B > parseFloat(x)) { w = "" + B; break a } } w = x } var D = {};
            function E(a) {
                var b; if (!(b = D[a])) {
                    b = 0; for (var c = ("" + w).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, e.length), u = 0; 0 == b && u < f; u++) {
                        var U = c[u] || "", V = e[u] || "", W = RegExp("(\\d*)(\\D*)", "g"), X = RegExp("(\\d*)(\\D*)", "g"); do {
                            var h = W.exec(U) || ["", "", ""], g = X.exec(V) || ["", "", ""]; if (0 == h[0].length && 0 == g[0].length) break; b = ((0 == h[1].length ? 0 : parseInt(h[1], 10)) < (0 == g[1].length ? 0 : parseInt(g[1], 10)) ? -1 : (0 == h[1].length ? 0 : parseInt(h[1], 10)) >
                            (0 == g[1].length ? 0 : parseInt(g[1], 10)) ? 1 : 0) || ((0 == h[2].length) < (0 == g[2].length) ? -1 : (0 == h[2].length) > (0 == g[2].length) ? 1 : 0) || (h[2] < g[2] ? -1 : h[2] > g[2] ? 1 : 0)
                        } while (0 == b)
                    } b = D[a] = 0 <= b
                } return b
            } var F = {}; function G() { F[9] || (F[9] = s && !!document.documentMode && 9 <= document.documentMode) }; !s || G(); !s || G(); s && E("8"); !v || E("528"); t && E("1.9b") || s && E("8") || r && E("9.5") || v && E("528"); !t || E("8"); function H(a, b, c, e, f) { a && b && ("undefined" == typeof c && (c = 1E3), "undefined" == typeof e && (e = 20), 0 > --e ? "function" === typeof f && f() : b() ? a() : setTimeout(function () { H(a, b, c, e, f) }, c)) }; function I(a, b) { var c = Element.prototype; I = function (a, b) { return I.b.call(a, b) }; I.b = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector; return I(a, b) } function J(a, b) { J = Element.prototype.closest ? function (a, b) { return Element.prototype.closest.call(a, b) } : function (a, b) { for (; a && !I(a, b) ;) a = a.parentElement; return a }; return J(a, b) }; function K(a) { function b() { c || (c = d, a()) } var c = i; "complete" === document.readyState || "interactive" === document.readyState ? b() : document.addEventListener && document.addEventListener("DOMContentLoaded", b, i) }
            function L(a, b, c, e, f) {
                "string" === typeof a ? (a = document.querySelectorAll(a), Array.prototype.forEach.call(a, function (a) { L(a, b, c, e, f) })) : a instanceof Array || a instanceof NodeList ? Array.prototype.forEach.call(a, function (a) { L(a, b, c, e, f) }) : a.addEventListener(b, function (a, b, c, e, f) { return function (h) { if ("function" === typeof c) c.apply(this, arguments), f && a.removeEventListener(b, arguments.callee, i); else { var g = J(h.target, c); g && (e.apply(g, arguments), f && a.removeEventListener(b, arguments.callee, i)) } } }(a, b, c, e, f),
                i)
            } function M(a, b) { document.addEventListener("mouseup", function (c) { a === c.target && b(); document.removeEventListener("mouseup", arguments.callee, i) }, i) } function aa(a, b) { function c(c) { document.removeEventListener("touchend", arguments.callee, i); a === c.target && b() } document.addEventListener("touchend", c, i); document.addEventListener("touchmove", function (a) { document.removeEventListener("touchmove", arguments.callee, i); document.removeEventListener("touchend", c, i) }, i) }
            function N(a, b) { var c = O(); c && (N = c.m ? aa : M, N(a, b)) }; function P(a) { if (window.CSS && "function" === typeof window.CSS.escape) P = function (a) { return window.CSS.escape.call(window.CSS, a) }; else { var b = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, c = function (a, b) { return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }; P = function (a) { return (a + "").replace(b, c) } } return P(a) }; function Q(a) { "function" === typeof window.ClickTaleRegisterElementAction && (ClickTaleRegisterElementAction("mouseover", a), ClickTaleRegisterElementAction("click", a)) } function ba(a, b) { var c = {}, e; for (e in a) c[e] = a[e]; c.target = b; c.srcElement = b; Q(c) } window.ClickTaleDetectAgent && window.ClickTaleDetectAgent() && window.ClickTaleDetectAgent();
            function ca(a, b) { "object" == typeof a && "string" == typeof b && (window.ClickTaleContext && -1 != document.referrer.indexOf(location.hostname) && window.parent.ct && window.parent.ct.ElementAddressing && "function" === typeof window.parent.ct.ElementAddressing.setCustomElementID ? window.parent.ct.ElementAddressing.setCustomElementID(a, b) : (window.ClickTaleSetCustomElementID = window.ClickTaleSetCustomElementID || function (a, b) { a.ClickTale = a.ClickTale || {}; a.ClickTale.CustomID = b }, window.ClickTaleSetCustomElementID(a, b))) }
            function da() { Array.prototype.forEach.call(document.querySelectorAll("[id]"), function (a) { if (!I(a, 'input[type="hidden"]')) { var b = a.getAttribute("id"); b.match(/(?:\r|\n)/) && "function" === typeof ClickTaleNote && ClickTaleNote("ctlib.api.SetCustomElementIdDuplicates: ids with line break found!"); var a = document.querySelectorAll('[id="' + P(b) + '"]'), c = ea; 1 < a.length && !c[b] && (c[b] = d, Array.prototype.forEach.call(a, function (a, c) { ca(a, b.replace(/(\r|\n|\r\n|\s+)+/g, "_").replace(/\W/g, "_") + "_" + c) })) } }) } var ea = {};
            function O() { if ("function" === typeof ClickTaleDetectAgent) { var a = ClickTaleDetectAgent(); if (a) return O = function () { return a }, O() } return null } function fa(a) { if ("function" === typeof ClickTaleRegisterTouchAction) { var b = a.getBoundingClientRect(); ClickTaleRegisterTouchAction(a, b.left + document.body.scrollLeft, b.top + document.body.scrollTop) } }
            function ga() {
                var a; if (!a) { a = "mousedown"; if ("boolean" != typeof R) { var b = O(); b && (R = b.m) } R && (a = "touchstart") } L(document, a, "img, a, button, textarea, input, select", function (a) {
                    var b = a.target, f = this; N(b, function (a, b) {
                        return function () {
                            if (I(this, "button,a,textarea") && this != a) R ? fa(this) : ba(b, this); else if (!R) {
                                var c = function () { }; document.addEventListener("click", function (a) { return c = function (b) { b.target === a && (S = d); document.removeEventListener("click", arguments.callee, i) } }(a), i); setTimeout(function () {
                                    S ||
                                    Q(b); document.removeEventListener("click", c, i); S = void 0
                                }, 200)
                            }
                        }.bind(f)
                    }(b, a))
                })
            } var R, S; function ha() { var a = T.toString(); "function" === typeof ClickTaleField && ClickTaleField("isMobile", a) } var ia = N; var T = i, Y = d, Z = "on"; function ja() { da(); if (Y) Y = i; else for (var a = window.ClickTaleSettings && window.ClickTaleSettings.PTC && window.ClickTaleSettings.PTC.InitFuncs ? window.ClickTaleSettings.PTC.InitFuncs : [], b = 0, c = a.length; b < c; b++) if ("function" === typeof a[b]) a[b]() }
            function ka() { if (!window.ClickTaleFirstPCCGo) { window.ClickTaleFirstPCCGo = d; var a = O(); a && (T = a.m, ha()); ja(); "function" != typeof jQuery.fn.on && (Z = "delegate"); a = T ? "touchstart" : "mousedown"; a = "on" === Z ? [a, "selectorHere"] : ["selectorHere", a]; jQuery(document)[Z](a[0], a[1], function (a) { var c = a.target; jQuery(c); var e = jQuery(this); ia(c, function (a) { return function () { }.bind(a[0]) }(e, c, a)) }) } }
            (function (a) { function b() { 2 == ++window.okToStartOn2 && a() } window.okToStartOn2 = 0; K(function () { b() }); if ("function" == typeof ClickTaleIsRecording && ClickTaleIsRecording() === d) b(); else { var c = window.ClickTaleOnRecording || function () { }; window.ClickTaleOnRecording = function () { b(); return c.apply(this, arguments) } } })(function () { ga(); H(ka, function () { return window.jQuery && ("function" === typeof jQuery.fn.on || "function" === typeof jQuery.fn.delegate) ? d : i }, 250, 40) });
        })();
    }
}, function () { return !!(window.ClickTaleSettings && window.ClickTaleSettings.PTC && typeof window.ClickTaleSettings.PTC.okToRunPCC != 'undefined'); }, 500, 20);