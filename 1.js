function FastClick(a) {
    "use strict";
    var b, c = this;
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.layer = a;
    if (!a || !a.nodeType)throw new TypeError("Layer must be a document node");
    this.onClick = function () {
        FastClick.prototype.onClick.apply(c, arguments)
    }, this.onTouchStart = function () {
        FastClick.prototype.onTouchStart.apply(c, arguments)
    }, this.onTouchMove = function () {
        FastClick.prototype.onTouchMove.apply(c, arguments)
    }, this.onTouchEnd = function () {
        FastClick.prototype.onTouchEnd.apply(c, arguments)
    }, this.onTouchCancel = function () {
        FastClick.prototype.onTouchCancel.apply(c, arguments)
    };
    if (typeof window.ontouchstart == "undefined")return;
    a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), typeof a.onclick == "function" && (b = a.onclick, a.addEventListener("click", function (a) {
        b(a)
    }, !1), a.onclick = null)
}
(function () {
    if (navigator.userAgent.match("Propane"))return;
    top != window && (alert("For security reasons, framing is not allowed."), top.location.replace(document.location))
}).call(this), function () {
    if (location.host !== "github.com")return;
    location.protocol !== "https:" && (alert("SSL is required to view this page."), location.protocol = "https:")
}.call(this), function () {
    (typeof Zepto == "undefined" || Zepto === null) && $.ajaxSetup({beforeSend: function (a, b) {
        var c, d;
        if (!b.global)return;
        return c = b.context || document, d = $.Event("ajaxBeforeSend"), $(c).trigger(d, [a, b]), d.isDefaultPrevented() ? !1 : d.result
    }})
}.call(this), function () {
    var a, b, c, d, e;
    typeof Zepto != "undefined" && Zepto !== null ? (a = function (a) {
        var b, c, d, e;
        c = document.createEvent("Events");
        for (d in a)e = a[d], c[d] = e;
        return c.initEvent("" + a.type + ":prepare", !0, !0), b = function (b, d) {
            return function () {
                return b.apply(a), d.apply(c)
            }
        }, c.preventDefault = b(a.preventDefault, c.preventDefault), c.stopPropagation = b(a.stopPropagation, c.stopPropagation), c.stopImmediatePropagation = b(a.stopImmediatePropagation, c.stopImmediatePropagation), a.target.dispatchEvent(c), c.result
    }, window.addEventListener("click", a, !0), window.addEventListener("submit", a, !0)) : (b = null, c = function (a) {
        var c;
        a.timeStamp !== b && (c = a.type, a.type = "" + c + ":prepare", $.event.trigger(a, [], a.target, !1), a.type = c, b = a.timeStamp)
    }, d = function (a) {
        return function () {
            $(this).on("" + a + ".prepare", function () {
            })
        }
    }, e = function (a) {
        return function () {
            $(this).off("" + a + ".prepare", function () {
            })
        }
    }, $.event.special.click = {preDispatch: c}, $.event.special.submit = {preDispatch: c}, $.event.special["click:prepare"] = {setup: d("click"), teardown: e("click")}, $.event.special["submit:prepare"] = {setup: d("submit"), teardown: e("submit")})
}.call(this), function () {
    $(document).on("ajaxBeforeSend", function (a, b, c) {
        if (!c.dataType)return b.setRequestHeader("Accept", "*/*;q=0.5, " + c.accepts.script)
    })
}.call(this), function () {
    $(document).on("click:prepare", "a[data-confirm], button[data-confirm]", function (a) {
        var b;
        if (b = $(this).attr("data-confirm"))confirm(b) || (a.stopImmediatePropagation(), a.preventDefault())
    })
}.call(this), function () {
    var a;
    $(document).on("ajaxBeforeSend", function (a, b, c) {
        var d;
        if (c.crossDomain)return;
        if (c.type === "GET")return;
        if (d = $('meta[name="csrf-token"]').attr("content"))return b.setRequestHeader("X-CSRF-Token", d)
    }), $(document).on("submit:prepare", "form", function () {
        var b, c, d, e;
        b = $(this);
        if (b.is("form[data-remote]"))return;
        if (!this.method || this.method.toUpperCase() === "GET")return;
        if (!a(b.attr("action")))return;
        d = $('meta[name="csrf-param"]').attr("content"), e = $('meta[name="csrf-token"]').attr("content"), d != null && e != null && (b.find("input[name=" + d + "]")[0] || (c = document.createElement("input"), c.setAttribute("type", "hidden"), c.setAttribute("name", d), c.setAttribute("value", e), b.prepend(c)))
    }), a = function (a) {
        var b, c;
        return b = document.createElement("a"), b.href = a, c = b.href.split("/", 3).join("/"), location.href.indexOf(c) === 0
    }
}.call(this), function () {
    var a;
    (a = navigator.userAgent.match(/MSIE ([\w]+)/)) && parseInt(a[1]) <= 8 && $(document).on("submit:prepare", "form", function () {
        $(this).find("input[name=utf8]").length === 0 && $(this).prepend("<input type=hidden name=utf8 value=✓>")
    })
}.call(this), function () {
    $(document).on("submit:prepare", "form", function () {
        var a, b, c, d, e, f, g, h, i;
        h = $(this).find("input[type=submit][data-disable-with]");
        for (d = 0, f = h.length; d < f; d++)b = h[d], b = $(b), b.attr("data-enable-with", b.val() || "Submit"), (c = b.attr("data-disable-with")) && b.val(c), b[0].disabled = !0;
        i = $(this).find("button[type=submit][data-disable-with]");
        for (e = 0, g = i.length; e < g; e++)a = i[e], a = $(a), a.attr("data-enable-with", a.html() || ""), (c = a.attr("data-disable-with")) && a.html(c), a[0].disabled = !0
    }), $(document).on("ajaxComplete", "form", function () {
        var a, b, c, d, e, f, g, h;
        g = $(this).find("input[type=submit][data-enable-with]");
        for (c = 0, e = g.length; c < e; c++)b = g[c], $(b).val($(b).attr("data-enable-with")), b.disabled = !1;
        h = $(this).find("button[type=submit][data-enable-with]");
        for (d = 0, f = h.length; d < f; d++)a = h[d], $(a).html($(a).attr("data-enable-with")), a.disabled = !1
    })
}.call(this), function () {
    $(document).on("click", "a[data-method]", function (a) {
        var b, c, d, e;
        b = $(this);
        if (b.is("a[data-remote]"))return;
        e = b.attr("data-method").toLowerCase();
        if (e === "get")return;
        return c = document.createElement("form"), c.method = "POST", c.action = b.attr("href"), c.style.display = "none", e !== "post" && (d = document.createElement("input"), d.setAttribute("type", "hidden"), d.setAttribute("name", "_method"), d.setAttribute("value", e), c.appendChild(d)), document.body.appendChild(c), $(c).submit(), a.preventDefault(), !1
    })
}.call(this), function () {
    $(document).on("click", "a[data-remote]", function (a) {
        var b, c, d, e, f;
        c = $(this), d = {}, d.context = this;
        if (e = c.attr("data-method"))d.type = e;
        if (f = this.href)d.url = f;
        if (b = c.attr("data-type"))d.dataType = b;
        return $.ajax(d), a.preventDefault(), !1
    }), $(document).on("submit", "form[data-remote]", function (a) {
        var b, c, d, e, f, g;
        d = $(this), e = {}, e.context = this;
        if (f = this.method)e.type = f;
        if (g = this.action)e.url = g;
        if (b = d.serializeArray())e.data = b;
        if (c = d.attr("data-type"))e.dataType = c;
        return $.ajax(e), a.preventDefault(), !1
    })
}.call(this), function () {
    var a;
    a = "form[data-remote] input[type=submit],\nform[data-remote] button[type=submit],\nform[data-remote] button:not([type]),\nform[data-remote-submit] input[type=submit],\nform[data-remote-submit] button[type=submit],\nform[data-remote-submit] button:not([type])", $(document).on("click", a, function () {
        var a, b, c, d, e, f;
        e = $(this), b = e.closest("form"), c = b.find(".js-submit-button-value"), (d = e.attr("name")) ? (a = e.is("input[type=submit]") ? "Submit" : "", f = e.val() || a, c[0] ? (c.attr("name", d), c.attr("value", f)) : (c = document.createElement("input"), c.setAttribute("type", "hidden"), c.setAttribute("name", d), c.setAttribute("value", f), c.setAttribute("class", "js-submit-button-value"), b.prepend(c))) : c.remove()
    })
}.call(this), function () {
    var a, b, c;
    $.fn.simulateClick = function () {
        var a, b, c;
        for (b = 0, c = this.length; b < c; b++)a = this[b], $.event.simulateClick(a);
        return this
    }, a = navigator.userAgent.match(/Macintosh/) ? "metaKey" : "ctrlKey", $.event.simulateClick = function (d, e) {
        var f;
        return f = c(e), $.extend(f, {currentTarget: null, target: d, srcElement: d, toElement: d, fromElement: null}), $.event.trigger(f, [], d, !f.bubbles), f.isDefaultPrevented() || b(d, f[a]), e && (e.result = f.result, f.isDefaultPrevented() && e.preventDefault(), f.isPropagationStopped() && e.stopPropagation()), f.result
    }, c = function (a) {
        var b, c, d, e;
        (a != null ? a.originalEvent : void 0) ? b = $.event.fix(a.originalEvent) : a ? b = $.extend(new $.Event, a) : b = $.Event("click"), (c = b.type) == null && (b.type = "click"), (d = b.bubbles) == null && (b.bubbles = !0), (e = b.cancelable) == null && (b.cancelable = !0);
        if (b.type !== "click")throw"only 'click' events can be simulated";
        return b.isSimulated = !0, b.result = null, b
    }, b = function (a, b) {
        var c, d;
        switch (a.nodeName.toUpperCase()) {
            case"A":
                b ? (window.open(a.href, "_blank"), window.focus()) : window.location.href = a.href;
                break;
            case"INPUT":
            case"TEXTAREA":
                a.focus();
                break;
            case"LABEL":
                c = (d = a.control) != null ? d : a.ownerDocument.getElementById(a.getAttribute("for")), c.focus()
        }
    }
}.call(this), function () {
    $(document).on("click", ".js-activate-link", function (a) {
        var b, c;
        b = $(a.target);
        if (b.is("a"))return;
        if (!(c = b.find("a:first")[0]))return;
        return $.event.simulateClick(c, a)
    })
}.call(this), function () {
    $(document).on("change", "form[data-autosubmit]", function () {
        return $(this).submit()
    })
}.call(this), function () {
    $.fn.fire = function (a) {
        var b, c, d, e, f, g, h, i;
        if (b = arguments[1])$.isPlainObject(b) ? f = b : $.isArray(b) ? c = b : $.isFunction(b) && (d = b);
        if (b = arguments[2])$.isArray(b) ? c = b : $.isFunction(b) && (d = b);
        (b = arguments[3]) && $.isFunction(b) && (d = b), e = this[0], f == null && (f = {}), (h = f.cancelable) == null && (f.cancelable = !!d), (i = f.bubbles) == null && (f.bubbles = !0), c == null && (c = []), g = function () {
            var b;
            return b = $.Event(a, f), $.event.trigger(b, c, e, !b.bubbles), d && !b.isDefaultPrevented() && d.call(e, b), b
        };
        if (!f.async)return g();
        delete f.async, setTimeout(g, 0)
    }
}.call(this), function () {
    var a, b;
    $.fuzzyScore = function (a, c) {
        var d;
        return d = b(a, c), d && !/\//.test(c) && (d += b(a.replace(/^.*\//, ""), c)), d
    }, $.fuzzySort = function (b, c) {
        var d, e, f, g, h, i;
        b = function () {
            var a, d, g;
            g = [];
            for (a = 0, d = b.length; a < d; a++)f = b[a], (e = $.fuzzyScore(f, c)) && g.push([f, e]);
            return g
        }(), b.sort(a), i = [];
        for (g = 0, h = b.length; g < h; g++)d = b[g], i.push(d[0]);
        return i
    }, a = function (a, b) {
        var c, d, e, f;
        return d = a[0], f = b[0], c = a[1], e = b[1], c > e ? -1 : c < e ? 1 : d < f ? -1 : d > f ? 1 : 0
    }, $.fuzzyRegexp = function (a) {
        var b, c, d;
        return d = a.toLowerCase(), b = "+.*?[]{}()^$|\\".replace(/(.)/g, "\\$1"), c = new RegExp("\\(([" + b + "])\\)", "g"), a = d.replace(/(.)/g, "($1)(.*?)").replace(c, "(\\$1)"), new RegExp("(.*)" + a + "$", "i")
    }, $.fuzzyHighlight = function (a, b, c) {
        var d, e, f, g, h, i, j, k;
        c == null && (c = null), e = $.trim(a.innerHTML);
        if (b) {
            c == null && (c = $.fuzzyRegexp(b));
            if (!(h = e.match(c)))return;
            i = !1, e = [];
            for (f = j = 1, k = h.length; 1 <= k ? j < k : j > k; f = 1 <= k ? ++j : --j) {
                g = h[f];
                if (!g)continue;
                f % 2 === 0 ? i || (e.push("<mark>"), i = !0) : i && (e.push("</mark>"), i = !1), e.push("" + g)
            }
            a.innerHTML = e.join("")
        } else d = e.replace(/<\/?mark>/g, ""), e !== d && (a.innerHTML = d)
    }, b = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
        if (a === b)return 1;
        n = a.length, o = 0, m = 0;
        for (h = p = 0, q = b.length; p < q; h = ++p) {
            e = b[h], i = a.indexOf(e.toLowerCase()), j = a.indexOf(e.toUpperCase()), l = Math.min(i, j), k = l > -1 ? l : Math.max(i, j);
            if (k === -1)return 0;
            f = .1, a[k] === e && (f += .1), k === 0 && (f += .8, h === 0 && (m = 1)), a.charAt(k - 1) === " " && (f += .8), a = a.substring(k + 1, n), o += f
        }
        return c = b.length, d = o / c, g = (d * (c / n) + d) / 2, m && g + .1 < 1 && (g += .1), g
    }
}.call(this), function () {
    var a, b, c, d;
    $.fn.fuzzyFilterSortList = function (e, f) {
        var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
        f == null && (f = {});
        if (!(n = this[0]))return;
        e = e.toLowerCase(), j = (D = f.content) != null ? D : a, s = (E = f.text) != null ? E : c, m = f.limit, f.mark === !0 ? o = b : ((F = f.mark) != null ? F.call : void 0) != null && (o = f.mark), (g = $(n).data("fuzzy-sort-items")) ? i = (G = f.items) != null ? G : $(n).children() : (i = g = (H = f.items) != null ? H : $(n).children(), $(n).data("fuzzy-sort-items", g.slice(0)));
        for (v = 0, z = i.length; v < z; v++)k = i[v], n.removeChild(k), k.style.display = "";
        q = document.createDocumentFragment(), t = 0, u = 0;
        if (!e)for (w = 0, A = g.length; w < A; w++) {
            k = g[w];
            if (!m || t < m)u++, o && o(j(k)), q.appendChild(k);
            t++
        } else {
            l = g.slice(0);
            for (x = 0, B = l.length; x < B; x++)k = l[x], (I = k.fuzzyFilterTextCache) == null && (k.fuzzyFilterTextCache = s(j(k))), r = $.fuzzyScore(k.fuzzyFilterTextCache, e), k.fuzzyFilterScoreCache = r;
            l.sort(d), p = $.fuzzyRegexp(e);
            for (y = 0, C = l.length; y < C; y++)k = l[y], (!m || t < m) && k.fuzzyFilterScoreCache > 0 && (u++, o && (h = j(k), o(h), o(h, e, p)), q.appendChild(k)), t++
        }
        return n.appendChild(q), u
    }, d = function (a, b) {
        var c, d, e, f;
        return c = a.fuzzyFilterScoreCache, e = b.fuzzyFilterScoreCache, d = a.fuzzyFilterTextCache, f = b.fuzzyFilterTextCache, c > e ? -1 : c < e ? 1 : d < f ? -1 : d > f ? 1 : 0
    }, a = function (a) {
        return a
    }, c = function (a) {
        return $.trim(a.textContent.toLowerCase())
    }, b = $.fuzzyHighlight
}.call(this), function () {
    var a, b;
    $.fn.prefixFilterList = function (c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p;
        d == null && (d = {});
        if (!(h = this[0]))return;
        c = c.toLowerCase(), j = (n = d.text) != null ? n : b, f = (o = d.items) != null ? o : $(h).children(), g = d.limit, d.mark === !0 ? i = a : ((p = d.mark) != null ? p.call : void 0) != null && (i = d.mark), k = 0;
        for (l = 0, m = f.length; l < m; l++)e = f[l], j(e).indexOf(c) === 0 ? g && k >= g ? e.style.display = "none" : (k++, e.style.display = "", i && (i(e), i(e, c))) : e.style.display = "none";
        return k
    }, b = function (a) {
        return $.trim(a.textContent.toLowerCase())
    }, a = function (a, b) {
        var c, d, e;
        d = a.innerHTML, b ? (e = new RegExp(b, "i"), a.innerHTML = d.replace(e, "<mark>$&</mark>")) : (c = d.replace(/<\/?mark>/g, ""), d !== c && (a.innerHTML = c))
    }
}.call(this), function () {
    var a, b;
    $.fn.substringFilterList = function (c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p;
        d == null && (d = {});
        if (!(h = this[0]))return;
        c = c.toLowerCase(), j = (n = d.text) != null ? n : b, f = (o = d.items) != null ? o : $(h).children(), g = d.limit, d.mark === !0 ? i = a : ((p = d.mark) != null ? p.call : void 0) != null && (i = d.mark), k = 0;
        for (l = 0, m = f.length; l < m; l++)e = f[l], j(e).indexOf(c) !== -1 ? g && k >= g ? e.style.display = "none" : (k++, e.style.display = "", i && (i(e), i(e, c))) : e.style.display = "none";
        return k
    }, b = function (a) {
        return $.trim(a.textContent.toLowerCase())
    }, a = function (a, b) {
        var c, d, e;
        d = a.innerHTML, b ? (e = new RegExp(b, "i"), a.innerHTML = d.replace(e, "<mark>$&</mark>")) : (c = d.replace(/<\/?mark>/g, ""), d !== c && (a.innerHTML = c))
    }
}.call(this), function () {
    var a, b;
    a = function () {
        var a, b, c, d, e, f = this;
        return c = !1, b = !1, e = null, a = 100, d = function () {
            e && clearTimeout(e), e = setTimeout(function () {
                e = null, $(f).trigger("throttled:input")
            }, a)
        }, $(this).on("keydown.throttledInput", function () {
            c = !0, b = !1, e && clearTimeout(e)
        }), $(this).on("keyup.throttledInput", function () {
            c = !1, b && d(), b = !1
        }), $(this).on("input.throttledInput", function () {
            b = !0, c || d()
        })
    }, b = function () {
        return $(this).off("keydown.throttledInput"), $(this).off("keyup.throttledInput"), $(this).off("input.throttledInput")
    }, $.event.special["throttled:input"] = {setup: a, teardown: b}
}.call(this), function () {
    var a;
    a = "oninput"in document.createElement("input"), !a && document.attachEvent != null && $(document).on("focus", "input, textarea", function (a) {
        var b, c, d;
        b = a.currentTarget, d = function () {
            $(b).trigger("input")
        }, c = function () {
            b.detachEvent("onpropertychange", d), b.detachEvent("onblur", c)
        }, b.attachEvent("onpropertychange", d), b.attachEvent("onblur", c)
    })
}.call(this), function () {
    var a;
    $(document).on("focusin", ".js-filterable-field", function () {
        var a;
        a = $(this).val(), $(this).on("throttled:input.filterable", function () {
            if (a === $(this).val())return;
            return a = $(this).val(), $(this).fire("filterable:change", {async: !0})
        }), $(this).on("blur.filterable", function () {
            return $(this).off(".filterable")
        }), $(this).fire("filterable:change", {async: !0})
    }), $(document).on("filterable:change", ".js-filterable-field", function () {
        var b, c, d, e, f, g;
        d = $.trim($(this).val().toLowerCase()), g = $("[data-filterable-for=" + this.id + "]");
        for (e = 0, f = g.length; e < f; e++)c = g[e], b = $(c), a(b, d), b.fire("filterable:change", {relatedTarget: this})
    }), a = function (a, b) {
        var c, d, e, f, g, h;
        e = function () {
            var b, c, e, f;
            e = a.children(), f = [];
            for (b = 0, c = e.length; b < c; b++)d = e[b], d.className.match(/js-not-filterable/) || f.push(d);
            return f
        }(), a.find(".js-filterable-text:first")[0] && (c = function (a) {
            return $(a).find(".js-filterable-text:first")[0]
        }), g = a.attr("data-filterable-highlight") !== void 0, f = a.attr("data-filterable-limit"), h = function () {
            switch (a.attr("data-filterable-type")) {
                case"fuzzy":
                    return a.fuzzyFilterSortList(b, {items: e, content: c, mark: g, limit: f});
                case"substring":
                    return a.substringFilterList(b, {items: e, content: c, mark: g, limit: f});
                default:
                    return a.prefixFilterList(b, {items: e, content: c, mark: g, limit: f})
            }
        }(), a.toggleClass("filterable-active", b.length > 0), a.toggleClass("filterable-empty", h === 0)
    }
}.call(this), function () {
    var a, b, c, d;
    c = {8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 91: "meta", 93: "meta", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"}, d = {48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"'}, a = function (a) {
        var b, e, f;
        return b = c[a.which], e = "", a.ctrlKey && b !== "ctrl" && (e += "ctrl+"), a.altKey && b !== "alt" && (e += "alt+"), a.metaKey && !a.ctrlKey && b !== "meta" && (e += "meta+"), a.shiftKey ? (f = d[a.which]) ? "" + e + f : b === "shift" ? "" + e + "shift" : b ? "" + e + "shift+" + b : null : b ? "" + e + b : null
    }, b = function (b) {
        var c;
        return(c = b.hotkey) == null && (b.hotkey = a(b)), b.handleObj.handler.apply(this, arguments)
    }, $.event.special.keydown = {handle: b}, $.event.special.keyup = {handle: b}
}.call(this), function () {
    $.pageUpdate = function (a) {
        return $(document).pageUpdate(a)
    }, $.fn.pageUpdate = function (a) {
        return a ? (this.on("pageUpdate", function (b) {
            return a.apply(b.target, arguments)
        }), this) : this.trigger("pageUpdate")
    }, $(document).ready(function () {
        return $(document.body).pageUpdate()
    }), $(document).on("pjax:complete", function (a) {
        return $(a.target).pageUpdate()
    })
}.call(this), function () {
    var a, b;
    a = {}, $(document).on("keydown", function (b) {
        var c;
        if ($(b.target).is(":input"))return;
        if (c = a[b.hotkey])$(c).fire("hotkey:activate", {originalEvent: b}, function () {
            $(this).simulateClick()
        }), b.preventDefault()
    }), $.pageUpdate(b = function () {
        var b, c, d, e, f;
        a = {}, f = $("[data-hotkey]");
        for (d = 0, e = f.length; d < e; d++)b = f[d], c = $(b).attr("data-hotkey"), a[c] = b
    })
}.call(this), function () {
    var a, b, c, d;
    $.fn.performTransition = function (c) {
        var e, f, g, h, i, j, k, l;
        if (!b) {
            c.apply(this);
            return
        }
        g = this.find(".js-transitionable"), g = g.add(this.filter(".js-transitionable"));
        for (i = 0, k = g.length; i < k; i++)f = g[i], e = $(f), h = a(f), e.one(b, function () {
            f.style.display = null, f.style.visibility = null;
            if (h)return d(f, function () {
                return f.style.height = null
            })
        }), f.style.display = "block", f.style.visibility = "visible", h && d(f, function () {
            return f.style.height = "" + e.height() + "px"
        }), f.offsetHeight;
        c.apply(this);
        for (j = 0, l = g.length; j < l; j++)f = g[j], a(f) && ($(f).height() === 0 ? f.style.height = "" + f.scrollHeight + "px" : f.style.height = "0px");
        return this
    }, c = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd", transition: "transitionend"}, b = c[Modernizr.prefixed("transition")], a = function (a) {
        var b;
        return b = Modernizr.prefixed("transitionProperty"), $(a).css(b) === "height"
    }, d = function (a, b) {
        a.style.webkitTransition = "none", b(a), a.offsetHeight, a.style.webkitTransition = null
    }
}.call(this), function () {
    var a, b, c = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, d = [].indexOf || function (a) {
        for (var b = 0, c = this.length; b < c; b++)if (b in this && this[b] === a)return b;
        return-1
    };
    a = function () {
        function a() {
            this.onClose = c(this.onClose, this), this.onContainerClick = c(this.onContainerClick, this), this.onKeyDown = c(this.onKeyDown, this), this.onClick = c(this.onClick, this), $(document).on("click", ".js-menu-container", this.onContainerClick)
        }

        return a.prototype.activate = function (a) {
            var b = this;
            this.activeContainer && this.deactivate(this.activeContainer), $(a).fire("menu:activate", function () {
                return $(document).on("keydown.menu", b.onKeyDown), $(document).on("click.menu", b.onClick), $(a).on("click.menu", ".js-menu-close", b.onClose), b.activeContainer = a, $(a).performTransition(function () {
                    return $(document.body).addClass("menu-active"), $(a).addClass("active")
                }), $(a).fire("menu:activated", {async: !0})
            })
        }, a.prototype.deactivate = function (a) {
            var b = this;
            $(a).fire("menu:deactivate", function () {
                return $(document).off("keydown.menu", b.onKeyDown), $(document).off("click.menu", b.onClick), $(a).off("click.menu", ".js-menu-close", b.onClose), b.activeContainer = null, $(a).performTransition(function () {
                    return $(document.body).removeClass("menu-active"), $(a).removeClass("active")
                }), $(a).fire("menu:deactivated", {async: !0})
            })
        }, a.prototype.onClick = function (a) {
            if (!this.activeContainer)return;
            $(a.target).closest(this.activeContainer)[0] || (a.preventDefault(), this.deactivate(this.activeContainer))
        }, a.prototype.onKeyDown = function (a) {
            var b;
            if (!this.activeContainer)return;
            a.keyCode === 27 && ((b = this.activeContainer, d.call($(document.activeElement).parents(), b) >= 0) && document.activeElement.blur(), a.preventDefault(), this.deactivate(this.activeContainer))
        }, a.prototype.onContainerClick = function (a) {
            var b, c, d;
            b = a.currentTarget, (d = $(a.target).closest(".js-menu-target")[0]) ? (a.preventDefault(), b === this.activeContainer ? this.deactivate(b) : this.activate(b)) : (c = $(a.target).closest(".js-menu-content")[0]) || (a.preventDefault(), this.deactivate(b))
        }, a.prototype.onClose = function (a) {
            this.deactivate($(a.target).closest(".js-menu-container")[0]), a.preventDefault()
        }, a
    }(), b = new a, $.fn.menu = function (a) {
        var c, d, e = this;
        return c = $(this).closest(".js-menu-container")[0], d = {activate: function () {
            return b.activate(c)
        }, deactivate: function () {
            return b.deactivate(c)
        }}, typeof d[a] == "function" ? d[a]() : void 0
    }
}.call(this), function () {
    var a;
    $.fn.positionedOffset = function (a) {
        var b, c, d, e, f, g, h, i, j;
        if (!(c = this[0]))return;
        if (a != null ? a.jquery : void 0)a = a[0];
        i = 0, e = 0, d = c.offsetHeight, j = c.offsetWidth;
        while (!!c && c !== a)i += c.offsetTop || 0, e += c.offsetLeft || 0, c = c.offsetParent;
        return!a || !a.offsetParent ? (g = $(document).height(), h = $(document).width()) : (g = a.scrollHeight, h = a.scrollWidth), b = g - (i + d), f = h - (e + j), {top: i, left: e, bottom: b, right: f}
    }, a = function (a) {
        var b;
        return $.isWindow(a) || a.nodeType === 9 || ((b = a.nodeName) != null ? b.match(/body|html/i) : void 0)
    }
}.call(this), function () {
    $.fn.overflowOffset = function (a) {
        var b, c, d, e, f, g, h, i, j;
        return a == null && (a = document.body), (c = this[0]) ? (f = $(c).positionedOffset(a), a.offsetParent ? h = {top: $(a).scrollTop(), left: $(a).scrollLeft()} : (h = {top: $(window).scrollTop(), left: $(window).scrollLeft()}, a = document.documentElement), i = f.top - h.top, e = f.left - h.left, d = a.clientHeight, j = a.clientWidth, b = d - (i + c.offsetHeight), g = j - (e + c.offsetWidth), {top: i, left: e, bottom: b, right: g, height: d, width: j}) : null
    }
}.call(this), function () {
    $.fn.overflowParent = function () {
        var a, b, c;
        if (!(a = this[0]))return this;
        while (a !== document.body) {
            c = $(a).css("overflow-y"), b = $(a).css("overflow-x");
            if (c === "auto" || b === "auto" || c === "scroll" || b === "scroll")break;
            a = a.parentElement
        }
        return $(a)
    }
}.call(this), function () {
    var a, b = [].slice;
    $.fn.scrollTo = function () {
        var c, d, e, f, g, h, i, j;
        return c = 1 <= arguments.length ? b.call(arguments, 0) : [], (d = this[0]) ? (f = {}, $.isPlainObject(c[0]) ? (f = c[0], $.isFunction(c[1]) && (h = f.complete) == null && (f.complete = c[1])) : c[0] != null && (f.target = c[0]), f.top == null && f.left == null && (f.target ? (i = $(f.target).positionedOffset(d), g = i.top, e = i.left, f.top = g, f.left = e) : (j = $(d).positionedOffset(), g = j.top, e = j.left, f.top = g, f.left = e, d = document)), d.offsetParent ? f.duration ? a(d, f) : (f.top != null && (d.scrollTop = f.top), f.left != null && (d.scrollLeft = f.left), typeof f.complete == "function" && f.complete()) : f.duration ? a("html, body", f) : (f.top != null && $(document).scrollTop(f.top), f.left != null && $(document).scrollLeft(f.left), typeof f.complete == "function" && f.complete()), this) : this
    }, a = function (a, b) {
        var c, d, e;
        return e = {}, b.top != null && (e.scrollTop = b.top), b.left != null && (e.scrollLeft = b.left), d = {duration: b.duration, queue: !1}, b.complete && (c = $(a).length, d.complete = function () {
            if (--c === 0)return setTimeout(b.complete, 0)
        }), $(a).animate(e, d)
    }
}.call(this), function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    c = navigator.userAgent.match(/Macintosh/), m = navigator.userAgent.match(/Macintosh/) ? "meta" : "ctrl", g = !1, n = {x: 0, y: 0}, $.pageUpdate(function () {
        var a, b, c, d, e;
        e = $(".js-navigation-container");
        for (c = 0, d = e.length; c < d; c++) {
            b = e[c], a = $(b);
            if (a.data("navigation-installed"))continue;
            a.attr("data-navigation-disable-mouse") === void 0 && (a.on("mousemove", o), a.on("mouseover", p)), a.data("navigation-installed", !0)
        }
    }), o = function (a) {
        if (n.x !== a.clientX || n.y !== a.clientY)g = !1;
        n = {x: a.clientX, y: a.clientY}
    }, p = function (a) {
        if (g)return;
        $(a.target).trigger("navigation:mouseover")
    }, $(document).on("keydown", function (a) {
        var b, c, d;
        if (!(b = j()))return;
        g = !0;
        if ($(a.target).is(":input") && !$(a.target).is(".js-navigation-enable"))return;
        return d = $(b).find(".js-navigation-item.navigation-focus")[0] || b, c = $(d).fire("navigation:keydown", {originalEvent: a, hotkey: a.hotkey, relatedTarget: b}), c.result
    }), $(document).on("navigation:keydown", ".js-active-navigation-container .js-navigation-item", function (a) {
        var b, f;
        f = a.currentTarget, b = a.relatedTarget;
        if ($(a.originalEvent.target).is(":input")) {
            if (c)switch (a.hotkey) {
                case"ctrl+n":
                    return d(f, b);
                case"ctrl+p":
                    return e(f, b)
            }
            switch (a.hotkey) {
                case"up":
                    return e(f, b);
                case"down":
                    return d(f, b);
                case"enter":
                    return q(f);
                case"" + m + "+enter":
                    return q(f, !0)
            }
        } else {
            if (c)switch (a.hotkey) {
                case"ctrl+n":
                    return d(f, b);
                case"ctrl+p":
                    return e(f, b);
                case"alt+v":
                    return s(f, b);
                case"ctrl+v":
                    return r(f, b)
            }
            switch (a.hotkey) {
                case"j":
                    return d(f, b);
                case"k":
                    return e(f, b);
                case"o":
                    return q(f);
                case"enter":
                    return q(f);
                case"" + m + "+enter":
                    return q(f, !0)
            }
        }
    }), $(document).on("navigation:keydown", ".js-active-navigation-container", function (a) {
        var b, d;
        b = a.currentTarget, d = k(b)[0];
        if ($(a.originalEvent.target).is(":input")) {
            if (c)switch (a.hotkey) {
                case"ctrl+n":
                    return i(d, b)
            }
            switch (a.hotkey) {
                case"down":
                    return i(d, b)
            }
        } else {
            if (c)switch (a.hotkey) {
                case"ctrl+n":
                    return i(d, b);
                case"ctrl+v":
                    return i(d, b)
            }
            switch (a.hotkey) {
                case"j":
                    return i(d, b)
            }
        }
    }), $(document).on("navigation:mouseover", ".js-active-navigation-container .js-navigation-item", function (a) {
        var b;
        b = $(a.currentTarget).closest(".js-navigation-container")[0], i(a.currentTarget, b)
    }), $(document).on("click", ".js-active-navigation-container .js-navigation-target", function (a) {
        if (a.altKey || a.ctrlKey || a.metaKey)return;
        if ($(a.target).is("a[href]"))return;
        return q(a.currentTarget)
    }), a = function (a) {
        var b, c = this;
        b = j();
        if (a !== b)return $(a).fire("navigation:activate", function () {
            return b && $(b).removeClass("js-active-navigation-container"), $(a).addClass("js-active-navigation-container"), $(a).fire("menu:activated", {async: !0})
        })
    }, f = function (a) {
        var b = this;
        return $(a).fire("navigation:deactivate", function () {
            return $(a).removeClass("js-active-navigation-container"), $(a).fire("navigation:deactivated", {async: !0})
        })
    }, b = [], u = function (c) {
        var d;
        (d = j()) && b.push(d), a(c)
    }, t = function (c) {
        var d;
        f(c), (d = b.pop()) && a(d)
    }, h = function (b, c) {
        var d, e, f;
        d = k(c)[0], f = $(b).closest(".js-navigation-item")[0] || d, a(c), e = i(f, c);
        if (e)return;
        f && w($(f).overflowParent()[0], f)
    }, q = function (a, b) {
        var c, d;
        return b == null && (b = !1), (c = $(a).find(".js-navigation-open")[0]) ? (d = $.Event("click"), d["" + m + "Key"] = b, $.event.simulateClick(c, d)) : $(a).fire("navigation:open", {modifierKey: b}), !1
    }, e = function (a, b) {
        var c, d, e, f;
        e = k(b), d = $.inArray(a, e);
        if (f = e[d - 1]) {
            c = i(f, b);
            if (c)return;
            b = $(f).overflowParent()[0], l(b) === "page" ? w(b, f) : v(b, f)
        }
        return!1
    }, d = function (a, b) {
        var c, d, e, f;
        e = k(b), d = $.inArray(a, e);
        if (f = e[d + 1]) {
            c = i(f, b);
            if (c)return;
            b = $(f).overflowParent()[0], l(b) === "page" ? w(b, f) : v(b, f)
        }
        return!1
    }, s = function (a, b) {
        var c, d, e, f;
        e = k(b), d = $.inArray(a, e), b = $(a).overflowParent()[0];
        while ((f = e[d - 1]) && $(f).overflowOffset(b).top >= 0)d--;
        if (f) {
            c = i(f, b);
            if (c)return;
            return w(b, f)
        }
    }, r = function (a, b) {
        var c, d, e, f;
        e = k(b), d = $.inArray(a, e), b = $(a).overflowParent()[0];
        while ((f = e[d + 1]) && $(f).overflowOffset(b).bottom >= 0)d++;
        if (f) {
            c = i(f, b);
            if (c)return;
            w(b, f)
        }
        return!1
    }, i = function (a, b) {
        var c;
        return c = $(a).fire("navigation:focus", function () {
            return $(b).find(".navigation-focus.js-navigation-item").removeClass("navigation-focus"), $(a).addClass("navigation-focus"), $(a).fire("navigation:focused", {async: !0})
        }), c.isDefaultPrevented()
    }, j = function () {
        return $(".js-active-navigation-container")[0]
    }, k = function (a) {
        return $(a).find(".js-navigation-item:visible")
    }, l = function (a) {
        var b;
        return(b = $(a).attr("data-navigation-scroll")) != null ? b : "item"
    }, w = function (a, b) {
        var c, d, e, f;
        d = $(b).positionedOffset(a), c = $(b).overflowOffset(a);
        if (c.bottom <= 0)return $(a).scrollTo({top: d.top - 30, duration: 200});
        if (c.top <= 0)return e = a.offsetParent != null ? a.scrollHeight : $(document).height(), f = e - (d.bottom + c.height), $(a).scrollTo({top: f + 30, duration: 200})
    }, v = function (a, b) {
        var c, d, e, f;
        d = $(b).positionedOffset(a), c = $(b).overflowOffset(a);
        if (c.bottom <= 0)return e = a.offsetParent != null ? a.scrollHeight : $(document).height(), f = e - (d.bottom + c.height), $(a).scrollTo({top: f});
        if (c.top <= 0)return $(a).scrollTo({top: d.top})
    }, $.fn.navigation = function (b) {
        var c, d, e = this;
        if (b === "active")return j();
        if (!(c = $(this).closest(".js-navigation-container")[0]))return;
        return d = {activate: function () {
            return a(c)
        }, deactivate: function () {
            return f(c)
        }, push: function () {
            return u(c)
        }, pop: function () {
            return t(c)
        }, focus: function () {
            return h(e, c)
        }}, typeof d[b] == "function" ? d[b]() : void 0
    }
}.call(this), function () {
    var a;
    if (window.getSelection == null)return;
    a = function (b, c) {
        var d, e, f, g;
        if (b === c)return!0;
        g = b.childNodes;
        for (e = 0, f = g.length; e < f; e++) {
            d = g[e];
            if (a(d, c))return!0
        }
        return!1
    }, $(document).on("click", ".js-selectable-text", function () {
        var b, c;
        c = window.getSelection(), c.rangeCount && (b = c.getRangeAt(0).commonAncestorContainer, a(this, b) || c.selectAllChildren(this))
    })
}.call(this), function () {
    var a, b;
    a = ["position:absolute;", "overflow:auto;", "white-space:pre-wrap;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"], b = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"], $.fn.textareaMirror = function (c) {
        var d, e, f, g, h, i, j, k, l, m, n;
        if (!(l = this[0]))return;
        if (l.nodeName.toLowerCase() !== "textarea")return;
        j = window.getComputedStyle(l), g = $(l).next()[0], g && $(g).is("div.js-textarea-mirror") ? g.innerHTML = "" : (g = document.createElement("div"), g.className = "js-textarea-mirror"), i = a.slice(0);
        for (m = 0, n = b.length; m < n; m++)h = b[m], i.push("" + h + ":" + j[h] + ";");
        g.style.cssText = i.join(" ");
        if (c != null) {
            if (k = l.value.substring(0, c))e = document.createTextNode(k);
            if (k = l.value.substring(c))d = document.createTextNode(k)
        } else if (k = l.value)e = document.createTextNode(k);
        return f = document.createElement("span"), f.className = "js-marker", f.innerHTML = "&nbsp;", e && g.appendChild(e), g.appendChild(f), d && g.appendChild(d), g.parentElement || $(l).after(g), g.scrollTop = l.scrollTop, g
    }
}.call(this), function () {
    $.fn.textareaContentsHeight = function () {
        var a, b, c;
        if (!(c = this[0]))return;
        if (!(b = $(c).textareaMirror()))return;
        return b.style.height = "", a = $(b).height(), setTimeout(function () {
            return $(b).remove()
        }, 5e3), a
    }
}.call(this), function () {
    var a;
    a = function (a) {
        var b, c, d, e, f, g;
        b = $(a);
        if (b.data("size-to-fit-installed"))return;
        return g = !1, c = b.height(), d = a.style.height, f = function (e) {
            b.height(e), c = b.height(), d = a.style.height
        }, e = function () {
            if (!b.is(":visible"))return;
            f(b.textareaContentsHeight())
        }, b.closest("form").on("reset", function () {
            return setTimeout(e, 100)
        }), b.on("focus", function () {
            return setTimeout(e, 0)
        }), b.on("input", function () {
            var e;
            if (g)return;
            if (d !== a.style.height) {
                g = !0;
                return
            }
            e = b.textareaContentsHeight();
            if (e > c && b.overflowOffset().bottom <= 100)return;
            f(e)
        }), e(), b.data("size-to-fit-installed", !0)
    }, $.pageUpdate(function () {
        var b, c, d, e;
        e = $(this).find(".js-size-to-fit");
        for (c = 0, d = e.length; c < d; c++)b = e[c], a(b)
    })
}.call(this), function () {
    $.fn.onFocusedInput = function (a, b) {
        return this.on("focusin", a, function (a) {
            var c, d;
            d = "focusInput" + Math.floor(Math.random() * 1e3), (c = b.call(this, a, d)) && $(this).on("input." + d, c), $(this).on("blur." + d, function () {
                $(this).off("." + d)
            })
        }), this
    }
}.call(this), function () {
    $.fn.preservingScrollPosition = function (a) {
        var b, c, d, e;
        return b = this.overflowParent(), b[0].offsetParent == null && (b = $(window)), d = this.positionedOffset(b), e = b.scrollTop() - d.top, c = b.scrollLeft() - d.left, a.call(this), d = this.positionedOffset(b), b.scrollTo({top: e + d.top, left: c + d.left}), this
    }
}.call(this), function () {
    $.fn.textareaSelectionPosition = function () {
        var a, b, c;
        if (!(c = this[0]))return;
        if (c.selectionEnd == null)return;
        if (!(a = $(c).textareaMirror(c.selectionEnd)))return;
        return b = $(a).find(".js-marker").position(), setTimeout(function () {
            return $(a).remove()
        }, 5e3), b
    }
}.call(this), function () {
    $.fn.touch = function (a) {
        var b, c, d, e, f;
        if (a)for (c = 0, e = this.length; c < e; c++)b = this[c], b.offsetHeight; else for (d = 0, f = this.length; d < f; d++)b = this[d], b.className = b.className;
        return this
    }
}.call(this), function () {
    $(document).on("focusin.delay", function (a) {
        var b;
        b = a.target, $.data(b, "focus-delay-active") || $(b).fire("focusin:delay", function () {
            $.data(b, "focus-delay-active", !0), $(b).trigger("focusin:delayed")
        })
    }), $(document).on("focusout.delay", function (a) {
        return setTimeout(function () {
            var b;
            b = a.target, b !== document.activeElement && $(b).fire("focusout:delay", function () {
                $.removeData(a.target, "focus-delay-active"), $(b).trigger("focusout:delayed")
            })
        }, 200)
    })
}.call(this), function () {
    var a, b;
    a = function (a) {
        var b, c, d;
        b = $(a), b.data("previousValue", b.val()), c = function () {
            var a, c;
            c = b.val(), a = b.data("previousValue"), a !== c && (b.data("previousValue", c), b.trigger("textchange", [c, a]))
        }, d = function () {
            b.off(".textchange"
            )
        }, b.on("input.textchange", c), b.on("change.textchange", c), b.on("blur.textchange", d)
    }, $(document).on("focusin", "input, textarea", function (b) {
        a(b.currentTarget)
    }), b = function (a, b) {
        var c, d;
        c = $(a), d = c.val(), d !== b && (c.data("previousValue", b), setTimeout(function () {
            return c.trigger("textchange", [b, d])
        }, 0))
    }, $.valHooks.input = {set: b}, $.valHooks.textarea = {set: b}
}.call(this), function () {
    var a, b;
    b = function (a) {
        var b, c, d, e, f, g;
        a == null && (a = document), g = $(a).find(".js-relative-date");
        for (e = 0, f = g.length; e < f; e++) {
            c = g[e];
            if (b = moment($(c).attr("datetime"), "YYYY-MM-DDTHH:mm:ssZ"))d = b.fromNow(), d === "a few seconds ago" && (d = "just now"), c.textContent = d
        }
    }, $.pageUpdate(a = function () {
        return b(this)
    }), setInterval(b, 6e4)
}.call(this), function () {
    var a;
    $.pageUpdate(a = function () {
        var a, b, c, d, e, f, g, h, i;
        i = $(this).find(".js-obfuscate-email");
        for (g = 0, h = i.length; g < h; g++) {
            b = i[g], a = $(b);
            if (a.data("obfuscate-email-setup"))continue;
            if (f = a.attr("data-email"))c = decodeURIComponent(f), e = a.text().replace(/{email}/, c), a.text(e), (d = a.attr("href")) && a.attr("href", d.replace(/{email}/, c)), a.data("obfuscate-email-setup", !0)
        }
    })
}.call(this), function () {
    var a;
    Modernizr.hashchange || (a = window.location.hash, setInterval(function () {
        if (window.location.hash !== a)return a = window.location.hash, $(window).trigger("hashchange")
    }, 50))
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    $.ajaxPoll = function (b) {
        return new a(b)
    }, $.ajaxPoll.version = "1", a = function () {
        function a(a) {
            this.onVisibilityChange = b(this.onVisibilityChange, this), this.onAjaxStop = b(this.onAjaxStop, this), this.onAjaxStart = b(this.onAjaxStart, this), this.onComplete = b(this.onComplete, this), this.onError = b(this.onError, this), this.onSuccess = b(this.onSuccess, this), this.onBeforeSend = b(this.onBeforeSend, this), this.poll = b(this.poll, this), this.pause = b(this.pause, this), this.resume = b(this.resume, this), this.stop = b(this.stop, this), this.start = b(this.start, this), this.original = $.extend({}, $.ajaxSettings, a), this.options = $.extend({}, a, {beforeSend: this.onBeforeSend, success: this.onSuccess, error: this.onError, complete: this.onComplete, cache: !1, poller: this}), a.interval != null && (this.interval = a.interval, delete a.interval), a.decay != null && (this.decay = a.decay, delete a.decay), a.timeout != null && (this.timeout = a.timeout, delete a.timeout), this.interval = this.interval * 1e3, this.timeout = this.timeout * 1e3, this.start()
        }

        return a.prototype.interval = 1, a.prototype.timeout = 600, a.prototype.decay = 1.1, a.prototype.start = function () {
            $(document).on("ajaxStart", this.onAjaxStart), $(document).on("ajaxStop", this.onAjaxStop), $(document).on("webkitvisibilitychange", this.onVisibilityChange), $(document).on("mozvisibilitychange", this.onVisibilityChange), this.started = new Date, this.count = 0, this.resume(!0)
        }, a.prototype.stop = function () {
            $(document).off("ajaxStart", this.onAjaxStart), $(document).off("ajaxStop", this.onAjaxStop), $(document).off("webkitvisibilitychange", this.onVisibilityChange), $(document).off("mozvisibilitychange", this.onVisibilityChange), this.pause(), this.started = null
        }, a.prototype.resume = function (a) {
            var b;
            a == null && (a = !1);
            if (!this.started)return;
            this.paused = !1;
            if (this.timer)return;
            if (((b = this.xhr) != null ? b.readyState : void 0) < 4)return;
            return a ? this.poll() : this.timer = setTimeout(this.poll, this.interval)
        }, a.prototype.pause = function () {
            var a;
            if (!this.started || this.paused)return;
            this.paused = !0, this.timer && clearTimeout(this.timer), ((a = this.xhr) != null ? a.readyState : void 0) < 4 && this.xhr.abort(), this.timer = this.xhr = null
        }, a.prototype.poll = function () {
            var a;
            if (!this.started || this.paused)return;
            a = new Date - this.started;
            if (a > this.timeout) {
                this.stop();
                return
            }
            if (this.ajaxStart) {
                this.timer = setTimeout(this.poll, this.interval);
                return
            }
            return this.timer = null, this.count++, this.xhr = $.ajax(this.options)
        }, a.prototype.onBeforeSend = function (a) {
            a.setRequestHeader("X-Poller-Version", $.ajaxPoll.version);
            if (this.original.beforeSend)return this.original.beforeSend.apply(this, arguments)
        }, a.prototype.onSuccess = function (a, b, c) {
            c.status === 202 ? (this.interval = this.interval * this.decay, this.resume()) : this.pause();
            if (this.original.success)return this.original.success.apply(this, arguments)
        }, a.prototype.onError = function () {
            this.pause();
            if (this.original.error)return this.original.error.apply(this, arguments)
        }, a.prototype.onComplete = function () {
            return this.original.complete && this.original.complete.apply(this, arguments), this.paused && this.stop(), this.xhr = null
        }, a.prototype.onAjaxStart = function () {
            this.ajaxStart = !0
        }, a.prototype.onAjaxStop = function () {
            this.ajaxStart = !1
        }, a.prototype.onVisibilityChange = function () {
            return document.hidden || document.webkitHidden || document.mozHidden ? this.pause() : this.resume(!0)
        }, a
    }()
}.call(this), function () {
    $.capitalize = function (a) {
        return a.replace(/\w+/g, function (a) {
            return"" + a[0].toUpperCase() + a.slice(1).toLowerCase()
        })
    }
}.call(this), function () {
    $.commafy = function (a) {
        return("" + a).replace(/(^|[^\w.])(\d{4,})/g, function (a, b, c) {
            return b + c.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,")
        })
    }
}.call(this), function () {
    $.pluralize = function (a, b) {
        return b + (a > 1 || a === 0 ? "s" : "")
    }
}.call(this), function () {
    if (Modernizr.csspositionsticky)return;
    $.pageUpdate(function () {
        var a, b, c, d, e;
        e = $(".sticky"), b = function (a) {
            var b, c, d;
            b = $(a);
            if (b.data("sticky-installed"))return;
            d = b.offset().top, c = !1, document.addEventListener("scroll", function () {
                window.scrollY >= d ? c || (b.addClass("stick"), c = !0) : c && (b.removeClass("stick"), c = !1)
            }), b.data("sticky-installed", !0)
        };
        for (c = 0, d = e.length; c < d; c++)a = e[c], b(a)
    })
}.call(this), function () {
    $(document).on("click:prepare", ".minibutton.disabled", function (a) {
        a.preventDefault(), a.stopPropagation()
    })
}.call(this), window.GitHub || (window.GitHub = {}), window.GitHub.debug = !1, FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.needsClick = function (a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case"label":
        case"video":
            return!0;
        default:
            return/\bneedsclick\b/.test(a.className)
    }
}, FastClick.prototype.needsFocus = function (a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case"textarea":
        case"select":
            return!0;
        case"input":
            switch (a.type) {
                case"button":
                case"checkbox":
                case"file":
                case"image":
                case"radio":
                case"submit":
                    return!1
            }
            return!0;
        default:
            return/\bneedsfocus\b/.test(a.className)
    }
}, FastClick.prototype.maybeSendClick = function (a, b) {
    "use strict";
    var c, d;
    return this.needsClick(a) ? !1 : (document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c), !0)
}, FastClick.prototype.onTouchStart = function (a) {
    "use strict";
    var b = a.targetTouches[0];
    return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = a.target, this.touchStartX = b.pageX, this.touchStartY = b.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function (a) {
    "use strict";
    var b = a.targetTouches[0];
    return Math.abs(b.pageX - this.touchStartX) > 10 || Math.abs(b.pageY - this.touchStartY) > 10 ? !0 : !1
}, FastClick.prototype.onTouchMove = function (a) {
    "use strict";
    if (!this.trackingClick)return!0;
    if (this.targetElement !== a.target || this.touchHasMoved(a))this.trackingClick = !1, this.targetElement = null;
    return!0
}, FastClick.prototype.findControl = function (a) {
    return"use strict", a.control !== undefined ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function (a) {
    "use strict";
    var b, c, d = this.targetElement;
    if (!this.trackingClick)return!0;
    if (a.timeStamp - this.lastClickTime < 200)return this.cancelNextClick = !0, !0;
    this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0;
    if (d.nodeName.toLowerCase() === "label") {
        b = this.findControl(d);
        if (b)return d.focus(), this.deviceIsAndroid ? !1 : (this.maybeSendClick(b, a) && a.preventDefault(), !1)
    } else if (this.needsFocus(d))return a.timeStamp - c > 100 ? (this.targetElement = null, !0) : (d.focus(), d.tagName.toLowerCase() !== "select" && a.preventDefault(), !1);
    return this.maybeSendClick(d, a) ? (a.preventDefault(), !1) : !1
}, FastClick.prototype.onTouchCancel = function () {
    "use strict", this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onClick = function (a) {
    "use strict";
    var b;
    return a.forwardedTouchEvent ? !0 : this.targetElement ? (b = this.targetElement, this.targetElement = null, a.cancelable ? a.target.type === "submit" && a.detail === 0 ? !0 : !this.needsClick(b) || this.cancelNextClick ? (this.cancelNextClick = !1, a.stopImmediatePropagation && a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault(), !1) : !0 : !0) : !0
}, FastClick.prototype.destroy = function () {
    "use strict";
    var a = this.layer;
    a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, typeof define == "function" && define.amd && define(function () {
    return"use strict", FastClick
}), typeof module != "undefined" && module.exports && (module.exports = function (a) {
    return"use strict", new FastClick(a)
}, module.exports.FastClick = FastClick), function (a) {
    a.fn.autocompleteField = function (b) {
        var c = a.extend({searchVar: "q", url: null, delay: 250, useCache: !1, extraParams: {}, autoClearResults: !0, dataType: "html", minLength: 1}, b);
        return a(this).each(function () {
            function h(e) {
                d && d.readyState < 4 && d.abort();
                if (c.useCache && g.hasOwnProperty(e))b.trigger("autocomplete:finish", g[e]); else {
                    var f = {};
                    f[c.searchVar] = e, f = a.extend(!0, c.extraParams, f), b.trigger("autocomplete:beforesend"), d = a.get(c.url, f, function (a) {
                        c.useCache && (g[e] = a), b.val() === e && b.trigger("autocomplete:finish", a)
                    }, c.dataType)
                }
            }

            function i(a) {
                a.length >= c.minLength ? f != a && (h(a), f = a) : b.trigger("autocomplete:clear")
            }

            var b = a(this), d, e, f, g = {};
            c.url != null && (b.attr("autocomplete", "off"), b.keyup(function (a) {
                a.preventDefault(), clearTimeout(e), e = setTimeout(function () {
                    clearTimeout(e), i(b.val())
                }, c.delay)
            }), b.blur(function () {
                f = null
            }))
        })
    }
}(jQuery), function (a) {
    a.fn.autosaveField = function (b) {
        var c = a.extend({}, a.fn.autosaveField.defaults, b);
        return this.each(function () {
            var b = a(this);
            if (b.data("autosaved-init"))return;
            var d = b.attr("data-field-type") || ":text", e = b.find(d), f = b.attr("data-action"), g = b.attr("data-name"), h = e.val(), i = function () {
                b.removeClass("errored"), b.removeClass("successful"), b.addClass("loading"), a.ajax({url: f, type: "POST", data: {_method: c.method, field: g, value: e.val()}, success: function () {
                    b.addClass("successful"), h = e.val()
                }, error: function () {
                    b.attr("data-reset-on-error") && e.val(h), b.addClass("errored")
                }, complete: function () {
                    b.removeClass("loading")
                }})
            };
            d == ":text" ? (e.blur(function () {
                a(this).val() != h && i()
            }), e.keyup(function () {
                b.removeClass("successful"), b.removeClass("errored")
            })) : d == "input[type=checkbox]" && e.change(function () {
                b.removeClass("successful"), b.removeClass("errored"), i()
            }), b.data("autosaved-init", !0)
        })
    }, a.fn.autosaveField.defaults = {method: "put"}
}(jQuery), function (a) {
    a.fn.caret = function (a) {
        return typeof a == "undefined" ? this[0].selectionStart : (this[0].focus(), this[0].setSelectionRange(a, a))
    }
}(jQuery), jQuery.cookie = function (a, b, c) {
    if (typeof b == "undefined") {
        var i = null;
        if (document.cookie && document.cookie != "") {
            var j = document.cookie.split(";");
            for (var k = 0; k < j.length; k++) {
                var l = jQuery.trim(j[k]);
                if (l.substring(0, a.length + 1) == a + "=") {
                    i = decodeURIComponent(l.substring(a.length + 1));
                    break
                }
            }
        }
        return i
    }
    c = c || {}, b === null && (b = "", c.expires = -1);
    var d = "";
    if (c.expires && (typeof c.expires == "number" || c.expires.toUTCString)) {
        var e;
        typeof c.expires == "number" ? (e = new Date, e.setTime(e.getTime() + c.expires * 24 * 60 * 60 * 1e3)) : e = c.expires, d = "; expires=" + e.toUTCString()
    }
    var f = c.path ? "; path=" + c.path : "", g = c.domain ? "; domain=" + c.domain : "", h = c.secure ? "; secure" : "";
    document.cookie = [a, "=", encodeURIComponent(b), d, f, g, h].join("")
}, DateInput = function (a) {
    function b(c, d) {
        typeof d != "object" && (d = {}), a.extend(this, b.DEFAULT_OPTS, d), this.input = a(c), this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate"), this.build(), this.selectDate(), this.hide(), this.input.data("datePicker", this)
    }

    return b.DEFAULT_OPTS = {month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], short_month_names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], short_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], start_of_week: 1}, b.prototype = {build: function () {
        var b = a('<p class="month_nav"><span class="button prev" title="[Page-Up]">&#171;</span> <span class="month_name"></span> <span class="button next" title="[Page-Down]">&#187;</span></p>');
        this.monthNameSpan = a(".month_name", b), a(".prev", b).click(this.bindToObj(function () {
            this.moveMonthBy(-1)
        })), a(".next", b).click(this.bindToObj(function () {
            this.moveMonthBy(1)
        }));
        var c = a('<p class="year_nav"><span class="button prev" title="[Ctrl+Page-Up]">&#171;</span> <span class="year_name"></span> <span class="button next" title="[Ctrl+Page-Down]">&#187;</span></p>');
        this.yearNameSpan = a(".year_name", c), a(".prev", c).click(this.bindToObj(function () {
            this.moveMonthBy(-12)
        })), a(".next", c).click(this.bindToObj(function () {
            this.moveMonthBy(12)
        }));
        var d = a('<div class="nav"></div>').append(b, c), e = "<table><thead><tr>";
        a(this.adjustDays(this.short_day_names)).each(function () {
            e += "<th>" + this + "</th>"
        }), e += "</tr></thead><tbody></tbody></table>", this.dateSelector = this.rootLayers = a('<div class="date_selector"></div>').append(d, e).insertAfter(this.input), a.browser.msie && a.browser.version < 7 && (this.ieframe = a('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector), this.rootLayers = this.rootLayers.add(this.ieframe), a(".button", d).mouseover(function () {
            a(this).addClass("hover")
        }), a(".button", d).mouseout(function () {
            a(this).removeClass("hover")
        })), this.tbody = a("tbody", this.dateSelector), this.input.change(this.bindToObj(function () {
            this.selectDate()
        })), this.selectDate()
    }, selectMonth: function (b) {
        var c = new Date(b.getFullYear(), b.getMonth(), 1);
        if (!this.currentMonth || this.currentMonth.getFullYear() != c.getFullYear() || this.currentMonth.getMonth() != c.getMonth()) {
            this.currentMonth = c;
            var d = this.rangeStart(b), e = this.rangeEnd(b), f = this.daysBetween(d, e), g = "";
            for (var h = 0; h <= f; h++) {
                var i = new Date(d.getFullYear(), d.getMonth(), d.getDate() + h, 12, 0);
                this.isFirstDayOfWeek(i) && (g += "<tr>"), i.getMonth() == b.getMonth() ? g += '<td class="selectable_day" date="' + this.dateToString(i) + '">' + i.getDate() + "</td>" : g += '<td class="unselected_month" date="' + this.dateToString(i) + '">' + i.getDate() + "</td>", this.isLastDayOfWeek(i) && (g += "</tr>")
            }
            this.tbody.empty().append(g), this.monthNameSpan.empty().append(this.monthName(b)), this.yearNameSpan.empty().append(this.currentMonth.getFullYear()), a(".selectable_day", this.tbody).click(this.bindToObj(function (b) {
                this.changeInput(a(b.target).attr("date"))
            })), a("td[date='" + this.dateToString(new Date) + "']", this.tbody).addClass("today"), a("td.selectable_day", this.tbody).mouseover(function () {
                a(this).addClass("hover")
            }), a("td.selectable_day", this.tbody).mouseout(function () {
                a(this).removeClass("hover")
            })
        }
        a(".selected", this.tbody).removeClass("selected"), a('td[date="' + this.selectedDateString + '"]', this.tbody).addClass("selected")
    }, selectDate: function (a) {
        typeof a == "undefined" && (a = this.stringToDate(this.input.val())), a || (a = new Date), this.selectedDate = a, this.selectedDateString = this.dateToString(this.selectedDate), this.selectMonth(this.selectedDate)
    }, changeInput: function (a) {
        this.input.val(a).change(), this.hide()
    }, show: function () {
        this.rootLayers.css("display", "block"), a([window, document.body]).click(this.hideIfClickOutside), this.input.unbind("focus", this.show), this.rootLayers.keydown(this.keydownHandler), this.setPosition()
    }, hide: function () {
        this.rootLayers.css("display", "none"), a([window, document.body]).unbind("click", this.hideIfClickOutside), this.input.focus(this.show), this.rootLayers.unbind("keydown", this.keydownHandler)
    }, hideIfClickOutside: function (a) {
        a.target != this.input[0] && !this.insideSelector(a) && this.hide()
    }, insideSelector: function (b) {
        $target = a(b.target);
        return $target.parents(".date_selector").length || $target.is(".date_selector");
        var c
    }, keydownHandler: function (a) {
        switch (a.keyCode) {
            case 9:
            case 27:
                this.hide();
                return;
            case 13:
                this.changeInput(this.selectedDateString);
                break;
            case 33:
                this.moveDateMonthBy(a.ctrlKey ? -12 : -1);
                break;
            case 34:
                this.moveDateMonthBy(a.ctrlKey ? 12 : 1);
                break;
            case 38:
                this.moveDateBy(-7);
                break;
            case 40:
                this.moveDateBy(7);
                break;
            case 37:
                this.moveDateBy(-1);
                break;
            case 39:
                this.moveDateBy(1);
                break;
            default:
                return
        }
        a.preventDefault()
    }, stringToDate: function (a) {
        var b;
        return(b = a.match(/^(\d{1,2}) ([^\s]+) (\d{4,4})$/)) ? new Date(b[3], this.shortMonthNum(b[2]), b[1], 12, 0) : null
    }, dateToString: function (a) {
        return a.getDate() + " " + this.short_month_names[a.getMonth()] + " " + a.getFullYear()
    }, setPosition: function () {
        var a = this.input.offset();
        this.rootLayers.css({top: a.top + this.input.outerHeight(), left: a.left}), this.ieframe && this.ieframe.css({width: this.dateSelector.outerWidth(), height: this.dateSelector.outerHeight()})
    }, moveDateBy: function (a) {
        var b = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate() + a);
        this.selectDate(b)
    }, moveDateMonthBy: function (a) {
        var b = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + a, this.selectedDate.getDate());
        b.getMonth() == this.selectedDate.getMonth() + a + 1 && b.setDate(0), this.selectDate(b)
    }, moveMonthBy: function (a) {
        var b = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + a, this.currentMonth.getDate());
        this.selectMonth(b)
    }, monthName: function (a) {
        return this.month_names[a.getMonth()]
    }, bindToObj: function (a) {
        var b = this;
        return function () {
            return a.apply(b, arguments)
        }
    }, bindMethodsToObj: function () {
        for (var a = 0; a < arguments.length; a++)this[arguments[a]] = this.bindToObj(this[arguments[a]])
    }, indexFor: function (a, b) {
        for (var c = 0; c < a.length; c++)if (b == a[c])return c
    }, monthNum: function (a) {
        return this.indexFor(this.month_names, a)
    }, shortMonthNum: function (a) {
        return this.indexFor(this.short_month_names, a)
    }, shortDayNum: function (a) {
        return this.indexFor(this.short_day_names, a)
    }, daysBetween: function (a, b) {
        return a = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()), b = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()), (b - a) / 864e5
    }, changeDayTo: function (a, b, c) {
        var d = c * (Math.abs(b.getDay() - a - c * 7) % 7);
        return new Date(b.getFullYear(), b.getMonth(), b.getDate() + d)
    }, rangeStart: function (a) {
        return this.changeDayTo(this.start_of_week, new Date(a.getFullYear(), a.getMonth()), -1)
    }, rangeEnd: function (a) {
        return this.changeDayTo((this.start_of_week - 1) % 7, new Date(a.getFullYear(), a.getMonth() + 1, 0), 1)
    }, isFirstDayOfWeek: function (a) {
        return a.getDay() == this.start_of_week
    }, isLastDayOfWeek: function (a) {
        return a.getDay() == (this.start_of_week - 1) % 7
    }, adjustDays: function (a) {
        var b = [];
        for (var c = 0; c < a.length; c++)b[c] = a[(c + this.start_of_week) % 7];
        return b
    }}, a.fn.date_input = function (a) {
        return this.each(function () {
            new b(this, a)
        })
    }, a.date_input = {initialize: function (b) {
        a("input.date_input").date_input(b)
    }}, b
}(jQuery), function (a) {
    function b(b) {
        if (a.facebox.settings.inited)return!0;
        a.facebox.settings.inited = !0, a(document).trigger("init.facebox"), e();
        var c = a.facebox.settings.imageTypes.join("|");
        a.facebox.settings.imageTypesRegexp = new RegExp(".(" + c + ")$", "i"), b && a.extend(a.facebox.settings, b), a("body").append(a.facebox.settings.faceboxHtml);
        var d = [new Image, new Image];
        d[0].src = a.facebox.settings.closeImage, d[1].src = a.facebox.settings.loadingImage, a("#facebox").find(".b:first, .bl").each(function () {
            d.push(new Image), d.slice(-1).src = a(this).css("background-image").replace(/url\((.+)\)/, "$1")
        }), a("#facebox .close").click(a.facebox.close).append(a.facebox.settings.closeHTML || '<img src="' + a.facebox.settings.closeImage + '" class="close_image" title="close">')
    }

    function c() {
        var a, b;
        return self.pageYOffset ? (b = self.pageYOffset, a = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft) : document.body && (b = document.body.scrollTop, a = document.body.scrollLeft), new Array(a, b)
    }

    function d() {
        var a;
        return self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight), a
    }

    function e() {
        var b = a.facebox.settings;
        b.loadingImage = b.loading_image || b.loadingImage, b.closeImage = b.close_image || b.closeImage, b.imageTypes = b.image_types || b.imageTypes, b.faceboxHtml = b.facebox_html || b.faceboxHtml
    }

    function f(b, c) {
        if (b.match(/#/)) {
            var d = window.location.href.split("#")[0], e = b.replace(d, "");
            if (e == "#")return;
            a.facebox.reveal(a(e).html(), c)
        } else b.match(a.facebox.settings.imageTypesRegexp) ? g(b, c) : h(b, c)
    }

    function g(b, c) {
        var d = new Image;
        d.onload = function () {
            a.facebox.reveal('<div class="image"><img src="' + d.src + '" /></div>', c)
        }, d.src = b
    }

    function h(b, c) {
        a.get(b, function (b) {
            a.facebox.reveal(b, c)
        })
    }

    function i() {
        return a.facebox.settings.overlay == 0 || a.facebox.settings.opacity === null
    }

    function j() {
        if (i())return;
        return a("#facebox_overlay").length == 0 && a("body").append('<div id="facebox_overlay" class="facebox_hide"></div>'), a("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity", a.facebox.settings.opacity).click(function () {
            a(document).trigger("close.facebox")
        }).fadeIn(200), !1
    }

    function k() {
        if (i())return;
        return a("#facebox_overlay").fadeOut(200, function () {
            a("#facebox_overlay").removeClass("facebox_overlayBG"), a("#facebox_overlay").addClass("facebox_hide"), a("#facebox_overlay").remove()
        }), !1
    }

    a.facebox = function (b, c) {
        a.facebox.loading(), b.ajax ? h(b.ajax, c) : b.image ? g(b.image, c) : b.div ? f(b.div, c) : a.isFunction(b) ? b.call(a) : a.facebox.reveal(b, c)
    }, a.extend(a.facebox, {settings: {opacity: .2, overlay: !0, loadingImage: "/facebox/loading.gif", closeImage: "/facebox/closelabel.png", imageTypes: ["png", "jpg", "jpeg", "gif"], faceboxHtml: '    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close"></a>       </div>     </div>'}, loading: function () {
        b();
        if (a("#facebox .loading").length == 1)return!0;
        j(), a("#facebox .content").empty().append('<div class="loading"><img src="' + a.facebox.settings.loadingImage + '"/></div>'), a("#facebox").show().css({top: c()[1] + d() / 10, left: a(window).width() / 2 - a("#facebox .popup").outerWidth() / 2}), a(document).bind("keydown.facebox", function (b) {
            return b.keyCode == 27 && a.facebox.close(), !0
        }), a(document).trigger("loading.facebox")
    }, reveal: function (b, c) {
        a(document).trigger("beforeReveal.facebox"), c && a("#facebox .content").addClass(c), a("#facebox .content").append(b), a("#facebox .loading").remove(), a("#facebox .popup").children().fadeIn("normal"), a("#facebox").css("left", a(window).width() / 2 - a("#facebox .popup").outerWidth() / 2), a(document).trigger("reveal.facebox").trigger("afterReveal.facebox")
    }, close: function () {
        return a(document).trigger("close.facebox"), !1
    }}), a.fn.facebox = function (c) {
        function d() {
            a.facebox.loading(!0);
            var b = this.rel.match(/facebox\[?\.(\w+)\]?/);
            return b && (b = b[1]), f(this.href, b), !1
        }

        if (a(this).length == 0)return;
        return b(c), this.bind("click.facebox", d)
    }, a(document).bind("close.facebox", function () {
        a(document).unbind("keydown.facebox"), a("#facebox").fadeOut(function () {
            a("#facebox .content").removeClass().addClass("content"), a("#facebox .loading").remove(), a(document).trigger("afterClose.facebox")
        }), k()
    })
}(jQuery), function (a) {
    a.fn.cardsSelect = function (b) {
        var c = a.extend({}, a.fn.cardsSelect.defaults, b);
        return this.each(function () {
            var b = a(this), d = b.next("dl.form").find("input[type=text]"), e = b.find(".card"), f = b.find("input[name='" + c.type_field + "']"), g = function (b) {
                e.each(function () {
                    var c = a(this);
                    c.attr("data-name") == b ? c.removeClass("disabled") : c.addClass("disabled"), f.val(b)
                })
            };
            d.bind("keyup blur",function () {
                var b = a(this).val();
                b.match(/^5[1-5]/) ? g("master") : b.match(/^4/) ? g("visa") : b.match(/^3(4|7)/) ? g("american_express") : b.match(/^6011/) ? g("discover") : b.match(/^(30[0-5]|36|38)/) ? g("diners_club") : b.match(/^(3|2131|1800)/) ? g("jcb") : (e.removeClass("disabled"), f.val(""))
            }).keyup()
        })
    }, a.fn.cardsSelect.defaults = {type_field: "billing[type]"}
}(jQuery), function (a) {
    a.fn.enticeToAction = function (b) {
        var c = a.extend({}, a.fn.enticeToAction.defaults, b);
        return this.each(function () {
            var b = a(this);
            b.addClass("entice"), b.attr("title", c.title);
            switch (c.direction) {
                case"downwards":
                    var d = "n";
                case"upwards":
                    var d = "s";
                case"rightwards":
                    var d = "w";
                case"leftwards":
                    var d = "e"
            }
            b.tipsy({gravity: d}), this.onclick = function () {
                return!1
            }, this.href = "#"
        })
    }, a.fn.enticeToAction.defaults = {title: "You must be signed in to use this feature", direction: "downwards"}
}(jQuery), function (a) {
    a.fn.errorify = function (b, c) {
        var d = a.extend({}, a.fn.errorify.defaults, c);
        return this.each(function () {
            var c = a(this);
            c.removeClass("warn"), c.addClass("errored"), c.find("p.note").hide(), c.find("dd.error").remove(), c.find("dd.warning").remove();
            var d = a("<dd>").addClass("error").text(b);
            c.append(d)
        })
    }, a.fn.errorify.defaults = {}, a.fn.unErrorify = function (b) {
        var c = a.extend({}, a.fn.unErrorify.defaults, b);
        return this.each(function () {
            var b = a(this);
            b.removeClass("errored warn"), b.find("p.note").show(), b.find("dd.error").remove(), b.find("dd.warning").remove()
        })
    }, a.fn.unErrorify.defaults = {}
}(jQuery), function (a) {
    a.fn.repoList = function (b) {
        var c = a.extend({}, a.fn.repoList.defaults, b);
        return this.each(function () {
            var b = a(this), d = b.find(".js-repo-list"), e = b.find(".show-more"), f = b.find(".filter_input").val(""), g = f.val(), h = e.length == 0 ? !0 : !1, i = null, j = !1;
            e.click(function () {
                if (j)return!1;
                var b = e.spin();
                return j = !0, a(c.selector).load(c.ajaxUrl, function () {
                    h = !0, b.parents(".repos").find(".filter_selected").click(), b.stopSpin()
                }), b.hide(), !1
            });
            var k = function () {
                var b = d.children("li");
                i ? (b.hide(), d.find("li." + i).show()) : b.show(), f.val() != "" && b.filter(function () {
                    return a(this).text().toLowerCase().indexOf(f.val().toLowerCase()) === -1
                }).hide()
            };
            b.find(".repo_filter").click(function () {
                var c = a(this);
                return b.find(".repo_filterer a").removeClass("filter_selected"), c.addClass("filter_selected"), i = c.attr("rel"), h ? k() : e.click(), !1
            });
            var l = "placeholder"in document.createElement("input"), m = function () {
                l || (f.val() == "" ? f.addClass("placeholder") : f.removeClass("placeholder"))
            };
            f.bind("keyup blur click", function () {
                if (this.value == g)return;
                g = this.value, h ? k() : e.click(), m()
            }), m()
        })
    }, a.fn.repoList.defaults = {selector: "#repo_listing", ajaxUrl: "/dashboard/ajax_your_repos"}
}(jQuery), $.fn.selectableList = function (a, b) {
    return $(this).each(function () {
        var c = $(this), d = $.extend({toggleClassName: "selected", wrapperSelector: "a", mutuallyExclusive: !1, itemParentSelector: "li", enableShiftSelect: !1, ignoreLinks: !1}, b);
        return c.delegate(a + " " + d.itemParentSelector + " " + d.wrapperSelector, "click", function (b) {
            if (b.which > 1 || b.metaKey || d.ignoreLinks && $(b.target).closest("a").length)return!0;
            var e = $(this), f = e.find(":checkbox, :radio"), g = c.find(a + " ." + d.toggleClassName), h = c.find(a + " *[data-last]");
            !e.is(":checkbox, :radio") && b.target != f[0] && (f.prop("checked") && !f.is(":radio") ? f.prop("checked", !1) : f.prop("checked", !0)), d.mutuallyExclusive && g.removeClass(d.toggleClassName), e.toggleClass(d.toggleClassName), f.change();
            if (d.enableShiftSelect && b.shiftKey && g.length > 0 && h.length > 0) {
                var i = h.offset().top, j = e.offset().top, k = "#" + e.attr("id"), l = $, m = $, n = $;
                i > j ? l = h.prevUntil(k) : i < j && (l = h.nextUntil(k)), m = l.find(":checkbox"), n = l.find(":checked"), n.length == m.length ? (l.removeClass(d.toggleClassName), m.prop("checked", !1)) : (l.addClass(d.toggleClassName), m.prop("checked", !0))
            }
            h.removeAttr("data-last"), e.attr("data-last", !0)
        }), c.delegate(a + " li :checkbox," + a + " li :radio", "change", function (b) {
            var e = $(this), f = e.closest(d.wrapperSelector);
            d.mutuallyExclusive && c.find(a + " ." + d.toggleClassName).removeClass(d.toggleClassName), $(this).prop("checked") ? f.addClass(d.toggleClassName) : f.removeClass(d.toggleClassName)
        }), c.find(a)
    })
}, function () {
    var a;
    a = {}, $(document).bind("keydown", function (b) {
        var c;
        if ($(b.target).is(":input"))return;
        if (c = a[b.hotkey])return c.apply(this, arguments)
    }), $.hotkeys = function (a) {
        var b, c;
        for (b in a)c = a[b], $.hotkey(b, c);
        return this
    }, $.hotkey = function (b, c) {
        return a[b] = c, this
    }
}.call(this), function (a, b, c) {
    function j(a) {
        var b = {}, d = /^jQuery\d+$/;
        return c.each(a.attributes, function (a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }), b
    }

    function k(a, d) {
        var e = this, f = c(e);
        if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))if (f.data("placeholder-password")) {
            f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id"));
            if (a === !0)return f[0].value = d;
            f.focus()
        } else e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select()
    }

    function l() {
        var a, b = this, d = c(b), e = d, f = this.id;
        if (b.value == "") {
            if (b.type == "password") {
                if (!d.data("placeholder-textinput")) {
                    try {
                        a = d.clone().attr({type: "text"})
                    } catch (g) {
                        a = c("<input>").attr(c.extend(j(this), {type: "text"}))
                    }
                    a.removeAttr("name").data({"placeholder-password": !0, "placeholder-id": f}).bind("focus.placeholder", k), d.data({"placeholder-textinput": a, "placeholder-id": f}).before(a)
                }
                d = d.removeAttr("id").hide().prev().attr("id", f).show()
            }
            d.addClass("placeholder"), d[0].value = d.attr("placeholder")
        } else d.removeClass("placeholder")
    }

    var d = "placeholder"in b.createElement("input"), e = "placeholder"in b.createElement("textarea"), f = c.fn, g = c.valHooks, h, i;
    d && e ? (i = f.placeholder = function () {
        return this
    }, i.input = i.textarea = !0) : (i = f.placeholder = function () {
        var a = this;
        return a.filter((d ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({"focus.placeholder": k, "blur.placeholder": l}).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
    }, i.input = d, i.textarea = e, h = {get: function (a) {
        var b = c(a);
        return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
    }, set: function (a, d) {
        var e = c(a);
        return e.data("placeholder-enabled") ? (d == "" ? (a.value = d, a != b.activeElement && l.call(a)) : e.hasClass("placeholder") ? k.call(a, !0, d) || (a.value = d) : a.value = d, e) : a.value = d
    }}, d || (g.input = h), e || (g.textarea = h), c(function () {
        c(b).delegate("form", "submit.placeholder", function () {
            var a = c(".placeholder", this).each(k);
            setTimeout(function () {
                a.each(l)
            }, 10)
        })
    }), c(a).bind("beforeunload.placeholder", function () {
        c(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery), function (a) {
    function b(a, b) {
        return typeof a == "function" ? a.call(b) : a
    }

    function c(a) {
        while (a = a.parentNode)if (a == document)return!0;
        return!1
    }

    function d(b, c) {
        this.$element = a(b), this.options = c, this.enabled = !0, this.fixTitle()
    }

    d.prototype = {show: function () {
        var c = this.getTitle();
        if (c && this.enabled) {
            var d = this.tip();
            d.find(".tipsy-inner")[this.options.html ? "html" : "text"](c), d[0].className = "tipsy", d.detach().css({top: 0, left: 0, visibility: "hidden", display: "block"}), this.options.className && d.addClass(b(this.options.className, this.$element[0])), this.options.inline ? d.insertAfter(this.$element[0]) : d.prependTo(document.body);
            var e = a.extend({}, this.$element.offset(), {width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight}), f = d[0].offsetWidth, g = d[0].offsetHeight, h = b(this.options.gravity, this.$element[0]), i;
            switch (h.charAt(0)) {
                case"n":
                    i = {top: e.top + e.height + this.options.offset, left: e.left + e.width / 2 - f / 2};
                    break;
                case"s":
                    i = {top: e.top - g - this.options.offset, left: e.left + e.width / 2 - f / 2};
                    break;
                case"e":
                    i = {top: e.top + e.height / 2 - g / 2, left: e.left - f - this.options.offset};
                    break;
                case"w":
                    i = {top: e.top + e.height / 2 - g / 2, left: e.left + e.width + this.options.offset}
            }
            h.length == 2 && (h.charAt(1) == "w" ? i.left = e.left + e.width / 2 - 15 : i.left = e.left + e.width / 2 - f + 15), d.offset(i).addClass("tipsy-" + h), d.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + h.charAt(0), this.options.fade ? d.stop().css({opacity: 0, display: "block", visibility: "visible"}).animate({opacity: this.options.opacity}) : d.css({visibility: "visible", opacity: this.options.opacity})
        }
    }, hide: function () {
        this.options.fade ? this.tip().stop().fadeOut(function () {
            a(this).remove()
        }) : this.tip().remove()
    }, fixTitle: function () {
        var a = this.$element;
        (a.attr("title") || typeof a.attr("original-title") != "string") && a.attr("original-title", a.attr("title") || "").removeAttr("title")
    }, getTitle: function () {
        var a, b = this.$element, c = this.options;
        return c.content ? c.content : (this.fixTitle(), typeof c.title == "string" ? a = b.attr(c.title == "title" ? "original-title" : c.title) : typeof c.title == "function" && (a = c.title.call(b[0])), a = ("" + a).replace(/(^\s*|\s*$)/, ""), a || c.fallback)
    }, tip: function () {
        return this.$tip || (this.$tip = a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
    }, validate: function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
        this.enabled = !0
    }, disable: function () {
        this.enabled = !1
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }}, a.fn.tipsy = function (b) {
        function e(c) {
            var e = a.data(c, "tipsy");
            return e || (e = new d(c, a.fn.tipsy.elementOptions(c, b)), a.data(c, "tipsy", e)), e
        }

        function f() {
            var a = e(this);
            a.hoverState = "in", b.delayIn == 0 ? a.show() : (a.fixTitle
                (), setTimeout(function () {
                a.hoverState == "in" && a.show()
            }, b.delayIn))
        }

        function g() {
            var a = e(this);
            a.hoverState = "out", b.delayOut == 0 ? a.hide() : setTimeout(function () {
                a.hoverState == "out" && a.hide()
            }, b.delayOut)
        }

        if (b === !0)return this.data("tipsy");
        if (typeof b == "string") {
            var c = this.data("tipsy");
            return c && c[b](), this
        }
        b = a.extend({}, a.fn.tipsy.defaults, b), b.live || this.each(function () {
            e(this)
        });
        if (b.trigger != "manual") {
            var h = b.live ? "live" : "bind", i = b.trigger == "hover" ? "mouseenter" : "focus", j = b.trigger == "hover" ? "mouseleave" : "blur";
            this[h](i, f)[h](j, g)
        }
        return this
    }, a.fn.tipsy.defaults = {className: null, delayIn: 0, delayOut: 0, fade: !1, fallback: "", gravity: "n", html: !1, inline: !1, live: !1, offset: 0, opacity: .8, title: "title", trigger: "hover"}, a.fn.tipsy.revalidate = function () {
        a(".tipsy").each(function () {
            var b = a.data(this, "tipsy-pointee");
            (!b || !c(b)) && a(this).remove()
        })
    }, a.fn.tipsy.elementOptions = function (b, c) {
        return a.metadata ? a.extend({}, c, a(b).metadata()) : c
    }, a.fn.tipsy.autoNS = function () {
        return a(this).offset().top > a(document).scrollTop() + a(window).height() / 2 ? "s" : "n"
    }, a.fn.tipsy.autoWE = function () {
        return a(this).offset().left > a(document).scrollLeft() + a(window).width() / 2 ? "e" : "w"
    }, a.fn.tipsy.autoBounds = function (b, c) {
        return function () {
            var d = {ns: c[0], ew: c.length > 1 ? c[1] : !1}, e = a(document).scrollTop() + b, f = a(document).scrollLeft() + b, g = a(this);
            return g.offset().top < e && (d.ns = "n"), g.offset().left < f && (d.ew = "w"), a(window).width() + a(document).scrollLeft() - g.offset().left < b && (d.ew = "e"), a(window).height() + a(document).scrollTop() - g.offset().top < b && (d.ns = "s"), d.ns + (d.ew ? d.ew : "")
        }
    }
}(jQuery), function (a) {
    a.fn.popover = function (a) {
        if (a == "destroy")this.tipsy("hide").data("tipsy", null); else if (a == "show")this.tipsy("show"); else if (a == "hide")this.tipsy("hide"); else {
            tipsyOptions = {inline: !0, trigger: "manual", opacity: 1, className: "popover", content: a.content, html: a.html};
            switch (a.placement) {
                case"left":
                    tipsyOptions.gravity = "e";
                    break;
                case"right":
                    tipsyOptions.gravity = "w";
                    break;
                case"up":
                    tipsyOptions.gravity = "s";
                    break;
                case"down":
                    tipsyOptions.gravity = "n"
            }
            this.tipsy("hide").data("tipsy", null), this.tipsy(tipsyOptions)
        }
        return this
    }
}(jQuery), function (a) {
    function b(a, b) {
        var c = a.find("a");
        if (c.length > 1) {
            var d = c.filter(".selected"), e = c.get().indexOf(d.get(0));
            return e += b, e >= c.length ? e = 0 : e < 0 && (e = c.length - 1), d.removeClass("selected"), c.eq(e).addClass("selected"), !0
        }
    }

    a.fn.quicksearch = function (c) {
        var d = a.extend({url: null, delay: 150, spinner: null, insertSpinner: null, loading: a(".quicksearch-loading")}, c);
        d.insertSpinner && !d.spinner && (d.spinner = a('<img src="' + GitHub.Ajax.spinner + '" alt="" class="spinner" width="16" />'));
        var e = function (a) {
            return d.results.html(a).show()
        };
        return d.results.delegate("a", "mouseover", function (b) {
            var c = a(this);
            c.hasClass("selected") || (d.results.find("a.selected").removeClass("selected"), c.addClass("selected"))
        }), this.each(function () {
            function f() {
                d.insertSpinner && (d.spinner.parent().length || d.insertSpinner.call(c, d.spinner), d.spinner.show()), c.trigger("quicksearch.loading"), d.loading && e(d.loading.html())
            }

            function g() {
                d.insertSpinner && d.spinner.hide(), c.trigger("quicksearch.loaded")
            }

            var c = a(this);
            c.autocompleteField({url: d.url || c.attr("data-url"), dataType: d.dataType, delay: d.delay, useCache: !0, minLength: 2}).bind("keyup",function (a) {
                a.which != 13 && c.val().length >= 2 && d.results.is(":empty") && f()
            }).bind("autocomplete:beforesend",function (a, b) {
                f()
            }).bind("autocomplete:finish",function (a, b) {
                e(b || {}), g()
            }).bind("autocomplete:clear",function (a) {
                d.results.html("").hide(), g()
            }).bind("focus",function (a) {
                c.val() && c.trigger("keyup")
            }).bind("blur",function (a) {
                setTimeout(function () {
                    c.trigger("autocomplete:clear")
                }, 150)
            }).bind("keydown", function (c) {
                switch (c.hotkey) {
                    case"up":
                        if (b(d.results, -1))return!1;
                        break;
                    case"down":
                        if (b(d.results, 1))return!1;
                        break;
                    case"esc":
                        return a(this).blur(), !1;
                    case"enter":
                        var e, f = d.results.find("a.selected");
                        if (f.length)return a(this).blur(), f.hasClass("initial") ? f.closest("form").submit() : window.location = f.attr("href"), !1;
                        a(this).trigger("autocomplete:clear")
                }
            })
        })
    }
}(jQuery), function (a) {
    function e(a) {
        return"tagName"in a ? a : a.parentNode
    }

    try {
        window.document.createEvent("TouchEvent")
    } catch (b) {
        return!1
    }
    var c = {}, d;
    a(document).ready(function () {
        a(document.body).bind("touchstart",function (a) {
            var b = Date.now(), f = b - (c.last || b);
            c.target = e(a.originalEvent.touches[0].target), d && clearTimeout(d), c.x1 = a.originalEvent.touches[0].pageX, f > 0 && f <= 250 && (c.isDoubleTap = !0), c.last = b
        }).bind("touchmove",function (a) {
            c.x2 = a.originalEvent.touches[0].pageX
        }).bind("touchend",function (b) {
            c.isDoubleTap ? (a(c.target).trigger("doubleTap"), c = {}) : c.x2 > 0 ? (Math.abs(c.x1 - c.x2) > 30 && a(c.target).trigger("swipe") && a(c.target).trigger("swipe" + (c.x1 - c.x2 > 0 ? "Left" : "Right")), c.x1 = c.x2 = c.last = 0) : "last"in c && (d = setTimeout(function () {
                d = null, a(c.target).trigger("tap"), c = {}
            }, 250))
        }).bind("touchcancel", function () {
            c = {}
        })
    }), ["swipe", "swipeLeft", "swipeRight", "doubleTap", "tap"].forEach(function (b) {
        a.fn[b] = function (a) {
            return this.bind(b, a)
        }
    })
}(jQuery), function (a) {
    function o() {
        return window.DeviceMotionEvent != undefined
    }

    function p(b) {
        if ((new Date).getTime() < d + c)return;
        if (o()) {
            var e = b.accelerationIncludingGravity, f = e.x, g = e.y;
            l.xArray.length >= 5 && l.xArray.shift(), l.yArray.length >= 5 && l.yArray.shift(), l.xArray.push(f), l.yArray.push(g), l.xMotion = Math.round((n(l.xArray) - m(l.xArray)) * 1e3) / 1e3, l.yMotion = Math.round((n(l.yArray) - m(l.yArray)) * 1e3) / 1e3, (l.xMotion > 1.5 || l.yMotion > 1.5) && i != 10 && (i = 10), l.xMotion > j || l.yMotion > j ? k++ : k = 0, k >= 5 ? (h = !0, a(document).unbind("mousemove.plax"), a(window).bind("devicemotion", q(b))) : (h = !1, a(window).unbind("devicemotion"), a(document).bind("mousemove.plax", function (a) {
                q(a)
            }))
        }
    }

    function q(a) {
        if ((new Date).getTime() < d + c)return;
        d = (new Date).getTime();
        var b = a.pageX, j = a.pageY;
        if (h == 1) {
            var k = window.orientation ? (window.orientation + 180) % 360 / 90 : 2, l = a.accelerationIncludingGravity, m = k % 2 == 0 ? -l.x : l.y, n = k % 2 == 0 ? l.y : l.x;
            b = k >= 2 ? m : -m, j = k >= 2 ? n : -n, b = (b + i) / 2, j = (j + i) / 2, b < 0 ? b = 0 : b > i && (b = i), j < 0 ? j = 0 : j > i && (j = i)
        }
        var o = b / (h == 1 ? i : f), p = j / (h == 1 ? i : g), q, k;
        for (k = e.length; k--;)q = e[k], q.invert != 1 ? q.obj.css("left", q.startX + q.xRange * o).css("top", q.startY + q.yRange * p) : q.obj.css("left", q.startX - q.xRange * o).css("top", q.startY - q.yRange * p)
    }

    var b = 25, c = 1 / b * 1e3, d = (new Date).getTime(), e = [], f = a(window).width(), g = a(window).height(), h = !1, i = 1, j = .05, k = 0, l = {xArray: [0, 0, 0, 0, 0], yArray: [0, 0, 0, 0, 0], xMotion: 0, yMotion: 0};
    a(window).resize(function () {
        f = a(window).width(), g = a(window).height()
    }), a.fn.plaxify = function (b) {
        return this.each(function () {
            var c = {xRange: 0, yRange: 0, invert: !1};
            for (var d in b)c[d] == 0 && (c[d] = b[d]);
            c.obj = a(this), c.startX = this.offsetLeft, c.startY = this.offsetTop, c.invert == 0 ? (c.startX -= Math.floor(c.xRange / 2), c.startY -= Math.floor(c.yRange / 2)) : (c.startX += Math.floor(c.xRange / 2), c.startY += Math.floor(c.yRange / 2)), e.push(c)
        })
    };
    var m = function (a) {
        return Math.min.apply({}, a)
    }, n = function (a) {
        return Math.max.apply({}, a)
    };
    a.plax = {enable: function () {
        a(document).bind("mousemove.plax", function (a) {
            q(a)
        }), o() && (window.ondevicemotion = function (a) {
            p(a)
        })
    }, disable: function () {
        a(document).unbind("mousemove.plax"), window.ondevicemotion = undefined
    }}, typeof ender != "undefined" && a.ender(a.fn, !0)
}(function () {
    return typeof jQuery != "undefined" ? jQuery : ender
}()), function () {
    $(document).on("ajaxError", "[data-remote]", function (a, b, c, d) {
        if (d === "abort")return;
        return setTimeout(function () {
            if (a.isDefaultPrevented())return;
            return debug("AJAX Error", d), $("#ajax-error-message").show(function () {
                return $(this).addClass("visible")
            })
        }, 0)
    }), $(document).on("ajaxBeforeSend", "[data-remote]", function (a, b, c) {
        return $("#ajax-error-message").hide().removeClass("visible")
    }), $(document).on("click", ".ajax-error-dismiss", function () {
        return $("#ajax-error-message").hide().removeClass("visible"), !1
    })
}.call(this), function () {
    $(document).on("ajaxSend", "[data-remote]", function (a) {
        if (a.isDefaultPrevented())return;
        return $(this).addClass("loading"), $(document.documentElement).addClass("ajax-loading")
    }), $(document).on("ajaxComplete", "[data-remote]", function () {
        return $(document.documentElement).removeClass("ajax-loading"), $(this).removeClass("loading")
    })
}.call(this), function () {
    $(document).on("focusout", "input[data-autocheck-url]", function () {
        var a, b, c;
        b = $(this), a = b.closest("dl.form"), c = b.val();
        if (!$.trim(c))return;
        return b.addClass("is-autocheck-loading"), b.removeClass("is-autocheck-successful is-autocheck-errored"), b.trigger("autocheck:send"), $.ajax({type: "POST", url: b.attr("data-autocheck-url"), data: {value: c}, context: this, complete: function () {
            return b.removeClass("is-autocheck-loading"), b.trigger("autocheck:complete", arguments)
        }, success: function () {
            return b.addClass("is-autocheck-successful"), a.unErrorify(), b.trigger("autocheck:success", arguments)
        }, error: function (c) {
            return b.addClass("is-autocheck-errored"), /<html/.test(c.responseText) ? a.errorify("Something went wrong.") : a.errorify(c.responseText), b.trigger("autocheck:error", arguments)
        }})
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a() {
            this.onNavigationOpen = b(this.onNavigationOpen, this), this.onNavigationKeyDown = b(this.onNavigationKeyDown, this), this.onClick = b(this.onClick, this), this.onResultsChange = b(this.onResultsChange, this), this.onInputChange = b(this.onInputChange, this), this.onResultsMouseDown = b(this.onResultsMouseDown, this), this.onInputBlur = b(this.onInputBlur, this), this.onInputFocus = b(this.onInputFocus, this), $(document).on("focusin", "input[data-autocomplete]", this.onInputFocus), $(document).on("textchange", "input[data-autocomplete]", this.onInputChange), this.focusedInput = this.focusedResults = null, this.mouseDown = !1
        }

        return a.prototype.bindEvents = function (a, b) {
            return $(a).on("blur", this.onInputBlur), $(b).on("mousedown", this.onResultsMouseDown), $(b).on("autocomplete:change", this.onResultsChange), $(b).on("click", "[data-autocomplete-value]", this.onClick), $(b).on("navigation:open", "[data-autocomplete-value]", this.onNavigationOpen), $(b).on("navigation:keydown", "[data-autocomplete-value]", this.onNavigationKeyDown)
        }, a.prototype.unbindEvents = function (a, b) {
            return $(a).off("blur", this.onInputBlur), $(b).off("mousedown", this.onResultsMouseDown), $(b).off("autocomplete:change", this.onResultsChange), $(b).off("click", "[data-autocomplete-value]", this.onClick), $(b).off("navigation:open", "[data-autocomplete-value]", this.onNavigationOpen), $(b).off("navigation:keydown", "[data-autocomplete-value]", this.onNavigationKeyDown)
        }, a.prototype.onInputFocus = function (a) {
            var b, c;
            b = a.currentTarget, c = document.getElementById($(b).attr("data-autocomplete")), this.focusedInput = b, this.focusedResults = c, this.bindEvents(b, c), $(b).trigger("autocomplete:focus"), $(b).trigger("autocomplete:search", [$(b).val()])
        }, a.prototype.onInputBlur = function (a) {
            var b, c;
            b = a.currentTarget, c = this.focusedResults, this.mouseDown || (this.hideResults(), this.inputValue = null, this.focusedInput = this.focusedResults = null, this.unbindEvents(b, c), $(b).trigger("autocomplete:blur"))
        }, a.prototype.onResultsMouseDown = function (a) {
            var b, c = this;
            this.mouseDown = !0, b = function () {
                return c.mouseDown = !1, $(document).off("mouseup", b)
            }, $(document).on("mouseup", b)
        }, a.prototype.onInputChange = function (a, b) {
            var c;
            c = a.currentTarget, this.inputValue !== b && ($(c).removeAttr("data-autocompleted"), $(c).trigger("autocomplete:autocompleted:changed")), $(c).trigger("autocomplete:change", [b]), $(c).trigger("autocomplete:search", [b])
        }, a.prototype.onResultsChange = function (a) {
            var b, c;
            c = $(this.focusedInput).val(), b = $(this.focusedResults).find("[data-autocomplete-value]"), b.length === 0 ? this.hideResults() : this.inputValue !== c && (this.inputValue = c, this.showResults(), $(this.focusedInput).is("[data-autocomplete-autofocus]") && $(this.focusedResults).find("ul").navigation("focus"))
        }, a.prototype.onClick = function (a) {
            return this.onNavigationOpen(a), !1
        }, a.prototype.onNavigationKeyDown = function (a) {
            switch (a.hotkey) {
                case"tab":
                    return this.onNavigationOpen(a), !1;
                case"esc":
                    return this.hideResults(), !1
            }
        }, a.prototype.onNavigationOpen = function (a) {
            var b, c;
            b = a.currentTarget, c = $(b).attr("data-autocomplete-value"), this.inputValue = c, $(this.focusedInput).val(c), $(this.focusedInput).attr("data-autocompleted", c), $(this.focusedInput).trigger("autocomplete:autocompleted:changed", [c]), $(this.focusedInput).trigger("autocomplete:result", [c]), $(b).removeClass("active"), this.hideResults()
        }, a.prototype.showResults = function (a, b) {
            var c, d, e, f, g;
            a == null && (a = this.focusedInput), b == null && (b = this.focusedResults);
            if ($(b).is(":visible"))return;
            return g = $(a).offset(), e = g.top, d = g.left, c = e + $(a).innerHeight(), f = $(a).innerWidth(), $(b).css({display: "block", position: "absolute", width: f + 2}), $(b).offset({top: c + 5, left: d + 1}), $(a).addClass("js-navigation-enable"), $(b).find("ul").navigation("push"), $(b).show()
        }, a.prototype.hideResults = function (a, b) {
            a == null && (a = this.focusedInput), b == null && (b = this.focusedResults);
            if (!$(b).is(":visible"))return;
            return $(a).removeClass("js-navigation-enable"), $(b).find("ul").navigation("pop"), $(b).hide()
        }, a
    }(), new a
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a(a) {
            this.container = a, this.hoverEnd = b(this.hoverEnd, this), this.hoverStart = b(this.hoverStart, this), this.items = this.container.find(".avatars li"), this.items.length > 1 && this.container.hover(this.hoverStart, this.hoverEnd)
        }

        return a.prototype.namespace = "avatarStack", a.prototype.hoverStart = function () {
            return this.container.addClass("avatar-stack-focus")
        }, a.prototype.hoverEnd = function () {
            return this.container.removeClass("avatar-stack-focus")
        }, a
    }(), $(function () {
        return $(".avatar-stack").each(function () {
            return new a($(this))
        })
    })
}.call(this), function () {
    $.pageUpdate(function () {
        var a;
        if ($(".js-zeroclipboard").length)return a = new ZeroClipboard($(".js-zeroclipboard")), a.on("load", function (a, b) {
            return $(a.htmlBridge).tipsy()
        }), a.on("complete", function (a, b) {
            var c;
            return c = $(a.htmlBridge), c.prop("title", $(this).attr("data-copied-hint")), c.tipsy("show")
        }), a.on("noflash wrongflash", function (a, b) {
            return $(".js-zeroclipboard").hide()
        })
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a(a) {
            this.container = a, this.onTabClick = b(this.onTabClick, this), this.onFilterChange = b(this.onFilterChange, this), this.onNavigationOpen = b(this.onNavigationOpen, this), this.onDeactivate = b(this.onDeactivate, this), this.onActivated = b(this.onActivated, this), this.pane = this.container.find(".pane-selector"), this.list = this.container.find(".js-navigation-container"), this.filter = this.container.find(".filterbar input"), this.items = this.list.find(".js-navigation-item"), this.container.on("menu:activated." + this.namespace, this.onActivated), this.container.on("menu:deactivate." + this.namespace, this.onDeactivate), this.container.on("filterable:change." + this.namespace, this.onFilterChange), this.container.on("navigation:open." + this.namespace, ".js-navigation-item", this.onNavigationOpen), this.container.on("click." + this.namespace, ".tabs > li > a", this.onTabClick), this.list.navigation("push")
        }

        return a.prototype.namespace = "contextMenu", a.prototype.onActivated = function () {
            return this.filter.focus()
        }, a.prototype.onDeactivate = function () {
            return this.list.navigation("pop"), this.items.removeClass("navigation-focus"), this.filter.val("").trigger("filterable:change"), this.container.off("." + this.namespace), this.container = this.pane = this.list = this.filter = this.items = null
        }, a.prototype.onNavigationOpen = function (a) {
            var b, c;
            b = $(a.currentTarget), this.items.filter(".selected").removeClass("selected"), b.addClass("selected"), b.find("input[type=radio]").prop("checked", !0).change(), c = b.find(".js-context-button-text"), c[0] && this.container.find(".js-context-button").html(c.html()), this.pane.menu("deactivate")
        }, a.prototype.onFilterChange = function () {
            this.reset()
        }, a.prototype.onTabClick = function (a) {
            var b;
            this.reset(), this.container.find(".tabs > li > a").removeClass("selected"), $(a.currentTarget).addClass("selected");
            if (b = $(a.currentTarget).attr("data-filter"))this.container.find(".js-filter-tab").hide(), this.container.find(".js-filter-" + b).show();
            return!1
        }, a.prototype.reset = function () {
            return this.items.removeClass("navigation-focus"), this.list.navigation("focus")
        }, a
    }(), $(document).on("menu:activate", ".js-context-menu", function () {
        return new a($(this))
    })
}.call(this), function () {
    GitHub.DangerousConfirmationBehavior = function () {
        function a(a) {
            var b = this;
            this.element = $(a);
            if (!this.element.length)return;
            this.input = this.element.find(".confirm-input"), this.button = this.element.find(".confirm-button").attr("disabled", "disabled"), this.confirmations = this.input.attr("data-confirm").toLowerCase().split(","), this.input.on("keyup", function () {
                return b.update()
            })
        }

        return a.prototype.update = function () {
            var a, b, c, d, e;
            this.button.attr("disabled", "disabled"), d = this.confirmations, e = [];
            for (b = 0, c = d.length; b < c; b++)a = d[b], this.input.val().toLowerCase() === a.toLowerCase() ? e.push(this.button.attr("disabled", !1)) : e.push(void 0);
            return e
        }, a
    }(), $.pageUpdate(function () {
        return $(this).find(".js-dangerous-confirmation").each(function () {
            return new GitHub.DangerousConfirmationBehavior(this)
        })
    })
}.call(this), function () {
    var a;
    a = function (a) {
        var b;
        b = $(a);
        if (b.data("deferred-content-loading"))return;
        $.ajaxPoll({url: b.attr("data-url"), success: function (a, c, d) {
            var e;
            if (d.status === 202)return;
            return e = $($.parseHTML(a)), b.replaceWith(e), e.pageUpdate(), e.trigger("deferredContent:loaded")
        }, error: function () {
            return b.addClass("error")
        }}), b.data("deferred-content-loading", !0)
    }, $.pageUpdate(function () {
        var b, c, d, e;
        e = $(this).find(".js-deferred-content");
        for (c = 0, d = e.length; c < d; c++)b = e[c], a(b)
    })
}.call(this), function () {
    $(document).on("click", ".js-details-container .js-details-target", function () {
        return $(this).closest(".js-details-container").performTransition(function () {
            return this.toggleClass("open")
        }), !1
    })
}.call(this), function () {
    var a, b, c, d, e, f;
    f = function () {
        var a, b, c;
        return Modernizr.canvastext ? (b = document.createElement("canvas"), a = b.getContext("2d"), a.textBaseline = "top", a.font = "32px Arial", c = String.fromCharCode(55357) + String.fromCharCode(56835), a.fillText(c, 0, 0), a.getImageData(16, 16, 1, 1).data[0] !== 0) : !1
    }();
    if (f)return;
    a = function (a, b) {
        return(a - 55296) * 1024 + (b - 56320) + 65536
    }, d = function (a) {
        return 127462 <= a && a <= 127487
    }, b = function (a) {
        return'<img height=20 width=20 align=absmiddle src="' + GitHub.assetHostUrl + "/images/icons/emoji/unicode/" + a + '.png">'
    }, e = function (c) {
        var e, f;
        if (c.data.match(/([\ud800-\udbff])([\udc00-\udfff])/g))return e = c.parentElement, f = null, e.innerHTML = e.innerHTML.replace(/([\ud800-\udbff])([\udc00-\udfff])/g, function (c, e, g) {
            var h, i;
            return h = a(e.charCodeAt(0), g.charCodeAt(0)), d(h) ? f ? (i = "" + f.toString(16) + "-" + h.toString(16), f = null, b(i)) : (f = h, "") : (f = null, b(h.toString(16)))
        })
    }, c = function (a, b) {
        if (!a)return;
        c(a.nextSibling, b), a.nodeType === 3 && b(a), c(a.firstChild, b)
    }, $.pageUpdate(function () {
        var a, b, d, f;
        f = $(this).find(".markdown-body");
        for (b = 0, d = f.length; b < d; b++)a = f[b], c(a, e)
    })
}.call(this), function () {
    var a, b, c, d, e;
    c = function (a) {
        var b, c, e, f, g, h;
        return c = document.getElementById(a), e = document.getElementById("fullscreen_overlay"), f = $(e).find(".js-fullscreen-contents"), Modernizr.localstorage && (g = "gh-fullscreen-theme", localStorage.getItem(g) === "dark" ? $(".js-fullscreen-overlay").addClass("dark-theme") : $(".js-fullscreen-overlay").removeClass("dark-theme")), h = $(c).val(), b = $(c).caret(), $(e).attr("data-return-scroll-position", window.pageYOffset), $("body").addClass("fullscreen-overlay-enabled"), $(document).on("keydown", d), $(f).attr("placeholder", $(c).attr("placeholder")), $(f).val(h), $(f).caret(b), f.focus()
    }, b = function (a) {
        var b, c, e, f, g, h;
        return c = document.getElementById(a), e = document.getElementById("fullscreen_overlay"), g = $(e).find(".js-fullscreen-contents"), h = $(g).val(), b = $(g).caret(), $("body").removeClass("fullscreen-overlay-enabled"), $(document).off("keydown", d), (f = $(e).attr("data-return-scroll-position")) && window.scrollTo(0, f), $(c).val(h), $(c).caret(b), $(c).trigger("validation:field:change"), window.editor != null && window.editor.setCode(g.val()), g.val("")
    }, e = !1, d = function (a) {
        if (a.keyCode === 27 || a.hotkey === "ctrl+L" || a.hotkey === "meta+L")return e ? history.back() : window.location.hash = "", a.preventDefault()
    }, $(document).on("click", ".js-exit-fullscreen", function (a) {
        e && (a.preventDefault(), history.back())
    }), $(document).on("click", ".js-theme-switcher", function () {
        var a;
        return Modernizr.localstorage ? (a = "gh-fullscreen-theme", localStorage.getItem(a) === "dark" ? (localStorage.removeItem(a), $(".js-fullscreen-overlay").removeClass("dark-theme")) : (localStorage.setItem(a, "dark"), $(".js-fullscreen-overlay").addClass("dark-theme"))) : $(".js-fullscreen-overlay").toggleClass("dark-theme"), !1
    }), a = function (a, d) {
        var f;
        if (f = d.match(/\#fullscreen_(.+)$/))return e = !!a, c(f[1]);
        if (f = a != null ? a.match(/\#fullscreen_(.+)$/) : void 0)return e = !1, b(f[1])
    }, $(window).on("hashchange", function (b) {
        var c;
        return c = b.originalEvent, a(c.oldURL, c.newURL)
    }), $(function () {
        var b;
        return Modernizr.localstorage && (b = "gh-fullscreen-theme", localStorage.getItem(b) === "dark" && $(".js-fullscreen-overlay").addClass("dark-theme")), a(null, window.location.href)
    })
}.call(this), function () {
    var a, b, c, d, e;
    c = function (b) {
        var c, f, g, h, i, j, k;
        c = $(a(this));
        if (b.which === 2 || b.metaKey)return!0;
        if (!c.length)return!0;
        g = $(this).closest(".js-hard-tabs"), k = g.find("a.selected");
        for (i = 0, j = k.length; i < j; i++)f = k[i], $(f).removeClass("selected"), d(g, $(a(f)));
        return e(g, c), $(this).addClass("selected"), typeof (h = window.history).replaceState == "function" && h.replaceState(null, document.title, $(this).attr("href")), g.trigger("tabChanged", {link: $(this)}), !1
    }, $(document).on("click", ".js-hard-tabs a", c), $(document).on("click", ".js-secondary-hard-link", c), a = function (a) {
        var c, d;
        return d = b($(a).attr("href")), c = $(a).attr("data-container-id") ? $(a).attr("data-container-id") : d, document.getElementById(c)
    }, d = function (a, b) {
        return a.hasClass("js-large-data-tabs") ? b[0] === null ? $() : (b.is(":visible") && !b[0].style.width && b.css({width: "" + b.width() + "px"}), b.css({position: "absolute", left: "-9999px"})) : b.hide()
    }, e = function (a, b) {
        return a.hasClass("js-large-data-tabs") ? b[0] === null ? $() : (b.is(":visible") || b.show(), b.css({position: "", left: ""})) : b.show()
    }, b = function (a) {
        var b;
        return a == null && (a = document.location.pathname), a = a.replace(/\?.+|#.+/, ""), b = a.match(/[^\/]+\/?$/), b.length === 0 && alert("Invalid tab link!"), b[0].replace("/", "")
    }
}.call(this), function () {
    $(document).on("ajaxSuccess", ".js-notice-dismiss", function () {
        return $(this).closest(".js-notice").fadeOut()
    }), $(document).on("ajaxError", ".js-notice-dismiss", function () {
        return alert("Failed to dismiss notice. Sorry!")
    })
}.call(this), function (a) {
    function b(b, d, e) {
        var f = this;
        return this.on("click.pjax", b, function (b) {
            var g = a.extend({}, m(d, e));
            g.container || (g.container = a(this).attr("data-pjax") || f), c(b, g)
        })
    }

    function c(b, c, d) {
        d = m(c, d);
        var f = b.currentTarget;
        if (f.tagName.toUpperCase() !== "A")throw"$.fn.pjax or $.pjax.click requires an anchor element";
        if (b.which > 1 || b.metaKey || b.ctrlKey || b.shiftKey || b.altKey)return;
        if (location.protocol !== f.protocol || location.host !== f.host)return;
        if (f.hash && f.href.replace(f.hash, "") === location.href.replace(location.hash, ""))return;
        if (f.href === location.href + "#")return;
        var g = {url: f.href, container: a(f).attr("data-pjax"), target: f, fragment: null};
        e(a.extend({}, g, d)), b.preventDefault()
    }

    function d(b, c, d) {
        d = m(c, d);
        var f = b.currentTarget;
        if (f.tagName.toUpperCase() !== "FORM")throw"$.pjax.submit requires a form element";
        var g = {type: f.method, url: f.action, data: a(f).serializeArray(), container: a(f).attr("data-pjax"), target: f, fragment: null};
        e(a.extend({}, g, d)), b.preventDefault()
    }

    function e(b) {
        function h(b, d) {
            var e = a.Event(b, {relatedTarget: c});
            return f.trigger(e, d), !e.isDefaultPrevented()
        }

        b = a.extend(!0, {}, a.ajaxSettings, e.defaults, b), a.isFunction(b.url) && (b.url = b.url());
        var c = b.target, d = l(b.url).hash, f = b.context = n(b.container);
        b.data || (b.data = {}), b.data._pjax = f.selector;
        var i;
        b.beforeSend = function (a, c) {
            c.type !== "GET" && (c.timeout = 0), a.setRequestHeader("X-PJAX", "true"), a.setRequestHeader("X-PJAX-Container", f.selector);
            var d;
            if (!h("pjax:beforeSend", [a, c]))return!1;
            c.timeout > 0 && (i = setTimeout(function () {
                h("pjax:timeout", [a, b]) && a.abort("timeout")
            }, c.timeout), c.timeout = 0), b.requestUrl = l(c.url).href
        }, b.complete = function (a, c) {
            i && clearTimeout(i), h("pjax:complete", [a, c, b]), h("pjax:end", [a, b])
        }, b.error = function (a, c, d) {
            var e = p("", a, b), f = h("pjax:error", [a, c, d, b]);
            b.type == "GET" && c !== "abort" && f && g(e.url)
        }, b.success = function (c, i, k) {
            var m = p(c, k, b);
            if (!m.contents) {
                g(m.url);
                return
            }
            e.state = {id: b.id || j(), url: m.url, title: m.title, container: f.selector, fragment: b.fragment, timeout: b.timeout}, (b.push || b.replace) && window.history.replaceState(e.state, m.title, m.url), m.title && (document.title = m.title), f.html(m.contents), typeof b.scrollTo == "number" && a(window).scrollTop(b.scrollTo), (b.replace || b.push) && window._gaq && _gaq.push(["_trackPageview"]);
            if (d !== "") {
                var n = l(m.url);
                n.hash = d, e.state.url = n.href, window.history.replaceState(e.state, m.title, n.href);
                var o = a(n.hash);
                o.length && a(window).scrollTop(o.offset().top)
            }
            h("pjax:success", [c, i, k, b])
        }, e.state || (e.state = {id: j(), url: window.location.href, title: document.title, container: f.selector, fragment: b.fragment, timeout: b.timeout}, window.history.replaceState(e.state, document.title));
        var m = e.xhr;
        m && m.readyState < 4 && (m.onreadystatechange = a.noop, m.abort()), e.options = b;
        var m = e.xhr = a.ajax(b);
        return m.readyState > 0 && (b.push && !b.replace && (t(e.state.id, f.clone().contents()), window.history.pushState(null, "", k(b.requestUrl))), h("pjax:start", [m, b]), h("pjax:send", [m, b])), e.xhr
    }

    function f(b, c) {
        var d = {url: window.location.href, push: !1, replace: !0, scrollTo: !1};
        return e(a.extend(d, m(b, c)))
    }

    function g(a) {
        window.history.replaceState(null, "", "#"), window.location.replace(a)
    }

    function h(b) {
        var c = b.state;
        if (c && c.container) {
            var d = a(c.container);
            if (d.length) {
                var f = q[c.id];
                if (!e.state) {
                    e.state = c;
                    return
                }
                var h = e.state.id < c.id ? "forward" : "back";
                u(h, e.state.id, d.clone().contents());
                var i = a.Event("pjax:popstate", {state: c, direction: h});
                d.trigger(i);
                var j = {id: c.id, url: c.url, container: d, push: !1, fragment: c.fragment, timeout: c.timeout, scrollTo: !1};
                f ? (d.trigger("pjax:start", [null, j]), c.title && (document.title = c.title), d.html(f), e.state = c, d.trigger("pjax:end", [null, j])) : e(j), d[0].offsetHeight
            } else g(location.href)
        }
    }

    function i(b) {
        var c = a.isFunction(b.url) ? b.url() : b.url, d = b.type ? b.type.toUpperCase() : "GET", e = a("<form>", {method: d === "GET" ? "GET" : "POST", action: c, style: "display:none"});
        d !== "GET" && d !== "POST" && e.append(a("<input>", {type: "hidden", name: "_method", value: d.toLowerCase()}));
        var f = b.data;
        if (typeof f == "string")a.each(f.split("&"), function (b, c) {
            var d = c.split("=");
            e.append(a("<input>", {type: "hidden", name: d[0], value: d[1]}))
        }); else if (typeof f == "object")for (key in f)e.append(a("<input>", {type: "hidden", name: key, value: f[key]}));
        a(document.body).append(e), e.submit()
    }

    function j() {
        return(new Date).getTime()
    }

    function k(a) {
        return a.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }

    function l(a) {
        var b = document.createElement("a");
        return b.href = a, b
    }

    function m(b, c) {
        return b && c ? c.container = b : a.isPlainObject(b) ? c = b : c = {container: b}, c.container && (c.container = n(c.container)), c
    }

    function n(b) {
        b = a(b);
        if (!b.length)throw"no pjax container for " + b.selector;
        if (b.selector !== "" && b.context === document)return b;
        if (b.attr("id"))return a("#" + b.attr("id"));
        throw"cant get selector for pjax container!"
    }

    function o(a, b) {
        return a.filter(b).add(a.find(b))
    }

    function p(b, c, d) {
        var e = {};
        e.url = k(c.getResponseHeader("X-PJAX-URL") || d.requestUrl);
        if (/<html/i.test(b))var f = a(a.parseHTML(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])), g = a(a.parseHTML(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0])); else var f = g = a(a.parseHTML(b));
        if (g.length === 0)return e;
        e.title = o(f, "title").last().text();
        if (d.fragment) {
            if (d.fragment === "body")var h = g; else var h = o(g, d.fragment).first();
            h.length && (e.contents = h.contents(), e.title || (e.title = h.attr("title") || h.data("title")))
        } else/<html/i.test(b) || (e.contents = g);
        return e.contents && (e.contents = e.contents.not("title"), e.contents.find("title").remove()), e.title && (e.title = a.trim(e.title)), e
    }

    function t(a, b) {
        q[a] = b, s.push(a);
        while (r.length)delete q[r.shift()];
        while (s.length > e.defaults.maxCacheLength)delete q[s.shift()]
    }

    function u(a, b, c) {
        var d, e;
        q[b] = c, a === "forward" ? (d = s, e = r) : (d = r, e = s), d.push(b), (b = e.pop()) && delete q[b]
    }

    function v() {
        a.fn.pjax = b, a.pjax = e, a.pjax.enable = a.noop, a.pjax.disable = w, a.pjax.click = c, a.pjax.submit = d, a.pjax.reload = f, a.pjax.defaults = {timeout: 650, push: !0, replace: !1, type: "GET", dataType: "html", scrollTo: 0, maxCacheLength: 20}, a(window).bind("popstate.pjax", h)
    }

    function w() {
        a.fn.pjax = function () {
            return this
        }, a.pjax = i, a.pjax.enable = v, a.pjax.disable = a.noop, a.pjax.click = a.noop, a.pjax.submit = a.noop, a.pjax.reload = function () {
            window.location.reload()
        }, a(window).unbind("popstate.pjax", h)
    }

    var q = {}, r = [], s = [];
    a.inArray("state", a.event.props) < 0 && a.event.props.push("state"), a.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), a.support.pjax ? v() : w()
}(jQuery), function () {
    var a;
    $.support.pjax && ($.pjax.defaults.timeout = GitHub.debug ? !1 : 1e3, a = function (a) {
        return $(this).is("[data-pjax-preserve-scroll]") ? !1 : 0
    }, $(document).on("click", "[data-pjax] a, a[data-pjax]", function (b) {
        var c, d, e;
        if ($(this).is("[data-skip-pjax]"))return;
        $(this).is("[data-pjax]") ? d = this : d = $(this).closest("[data-pjax]")[0], e = a(this);
        if (c = $(this).closest("[data-pjax-container]")[0])return $.pjax.click(b, {container: c, scrollTo: e})
    }), $(document).on("submit", "form[data-pjax]", function (b) {
        var c, d;
        d = a(this);
        if (c = $(this).closest("[data-pjax-container]")[0])return $.pjax.submit(b, {container: c, scrollTo: d})
    }))
}.call(this), function () {
    if (!$.support.pjax)return;
    $(document).on("pjax:start", function (a) {
        var b;
        if (b = a.relatedTarget)$(b).addClass("pjax-active"), $(b).parents(".js-pjax-active").addClass("pjax-active")
    }), $(document).on("pjax:end", function (a) {
        $(".pjax-active").removeClass("pjax-active")
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a(a) {
            this.container = a, this.onTabClick = b(this.onTabClick, this), this.onFilterChange = b(this.onFilterChange, this), this.onNavigationOpen = b(this.onNavigationOpen, this), this.onDeactivate = b(this.onDeactivate, this), this.onActivated = b(this.onActivated, this), this.pane = this.container.find(".js-select-menu-pane"), this.list = this.container.find(".js-navigation-container"), this.filter = this.container.find(".js-select-menu-text-filter"), this.items = this.list.find(".js-navigation-item"), this.newItemForm = this.container.find(".js-new-item-form"), this.newItemName = this.container.find(".js-new-item-name"), this.newItemSubmit = this.container.find(".js-new-item-submit"), this.container.on("menu:activated." + this.namespace, this.onActivated), this.container.on("menu:deactivate." + this.namespace, this.onDeactivate), this.container.on("filterable:change." + this.namespace, this.onFilterChange), this.container.on("navigation:open." + this.namespace, ".js-navigation-item", this.onNavigationOpen), this.container.on("click." + this.namespace, ".js-select-menu-tab", this.onTabClick), this.list.navigation("push")
        }

        return a.prototype.namespace = "selectMenu", a.prototype.onActivated = function () {
            return this.filter.focus()
        }, a.prototype.onDeactivate = function () {
            return this.list.navigation("pop"), this.items.removeClass("navigation-focus"), this.filter.val("").trigger("filterable:change"), this.container.off("." + this.namespace), this.container = this.pane = this.list = this.filter = this.items = null
        }, a.prototype.onNavigationOpen = function (a) {
            var b, c, d;
            c = $(a.currentTarget), this.items.filter(".selected").removeClass("selected"), c.addClass("selected"), c.find("input[type=radio]").prop("checked", !0).change(), d = c.find(".js-select-button-text"), d[0] && this.container.find(".js-select-button").html(d.html()), b = c.find(".js-select-menu-item-gravatar"), d[0] && this.container.find(".js-select-button-gravatar").html(b.html()), this.pane.menu("deactivate")
        }, a.prototype.onFilterChange = function () {
            var a, b;
            this.reset(), this.items.removeClass("last-visible").filter(":visible").last().addClass("last-visible");
            if (!(this.newItemForm.length > 0))return;
            a = this.filter.val(), b = $.makeArray(this.container.find(".js-select-button-text")).some(function (b) {
                return $.trim($(b).text().toLowerCase()) === a.toLowerCase()
            }), a !== "" && !b ? (this.newItemForm.addClass("is-enabled"), this.newItemName.html(a), this.newItemSubmit.val(a)) : this.newItemForm.removeClass("is-enabled")
        }, a.prototype.onTabClick = function (a) {
            var b;
            this.reset(), this.container.find(".js-select-menu-tab").removeClass("selected"), $(a.currentTarget).addClass("selected");
            if (b = $(a.currentTarget).attr("data-filter"))this.container.find(".js-filter-tab").hide(), this.container.find(".js-filter-" + b).show();
            return this.items.removeClass("last-visible").filter(":visible").last().addClass("last-visible"), !1
        }, a.prototype.reset = function () {
            return this.items.removeClass("navigation-focus"), this.list.navigation("focus")
        }, a
    }(), $(document).on("menu:activate", ".js-select-menu", function () {
        return new a($(this))
    })
}.call(this), function () {
    var a
        , b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
    a = function () {
        function c() {
            this.onMouseMove = b(this.onMouseMove, this), this.onMouseUp = b(this.onMouseUp, this), this.onMouseDown = b(this.onMouseDown, this), $(document).on("mousedown", ".js-sortable-container .js-sortable-target", this.onMouseDown)
        }

        var a;
        return a = $("<li />").addClass("js-sortable-placeholder sortable-placeholder"), c.prototype.onMouseDown = function (b) {
            return $(b.currentTarget).addClass("js-sorting").fadeTo(0, .5).css({"z-index": 10, position: "absolute", top: $(b.currentTarget).position().top, left: $(b.currentTarget).position().left}).after(a), $(document).on("mousemove.sortable", this.onMouseMove), $(document).on("mouseup", this.onMouseUp), !1
        }, c.prototype.onMouseUp = function (a) {
            return $(".js-sorting").removeClass("js-sorting").fadeTo(0, 1).css({"z-index": "", position: "", top: "", left: ""}), $(".js-sortable-placeholder").remove(), $(document).off("mousemove.sortable", this.onMouseMove), $(document).off("mouseup", this.onMouseUp), !1
        }, c.prototype.onMouseMove = function (a) {
            var b, c, d;
            return b = $(".js-sorting"), d = a.pageY - b.parent().offset().top, c = $(".js-sorting").height(), d < 0 + c / 2 ? $(".js-sorting").css({top: 0}) : d > b.parent().height() - c / 2 ? $(".js-sorting").css({top: b.parent().height() - b.height()}) : $(".js-sorting").css({top: d - c / 2}), $(".js-sorting").index() < b.parent().find(".js-sortable-target").length && $(".js-sorting").index() >= 0 && ($(".js-sorting").position().top > $(".js-sortable-placeholder").position().top + c * .8 ? ($(".js-sortable-placeholder").insertAfter($(".js-sortable-placeholder").next()), $(".js-sorting").insertBefore($(".js-sortable-placeholder"))) : $(".js-sorting").position().top < $(".js-sortable-placeholder").position().top - c * .8 && ($(".js-sortable-placeholder").insertBefore($(".js-sortable-placeholder").prev().prev()), $(".js-sorting").insertBefore($(".js-sortable-placeholder")))), !1
        }, c
    }(), new a
}.call(this), function () {
    var a, b, c;
    b = function (a) {
        if (a.find(".js-comment-edit-button").length > 0)return a.addClass("context-loader-container"), a.find(".js-comment-body").addClass("context-loader-overlay"), a.find(".task-list-item").addClass("enabled").find(".task-list-item-checkbox").attr("disabled", null), a.closest(".context-loader-container").removeClass("is-context-loading")
    }, a = function (a) {
        return a.find(".task-list-item").removeClass("enabled").find(".task-list-item-checkbox").attr("disabled", "disabled"), a.closest(".context-loader-container").addClass("is-context-loading")
    }, c = function (c) {
        var d, e, f, g;
        return e = c.parents(".js-comment"), g = e.find("form.edit_issue, form.js-comment-update"), d = e.find(".js-comment-body"), f = {item: c.attr("data-item-index"), checked: c.prop("checked") ? 1 : 0, body_version: d.attr("data-body-version")}, a(e), $.ajax({type: "post", url: g.attr("action") + "/task", data: f, dataType: "json", success: function (a) {
            return console.log("success", a), a.stale ? window.location.href = window.location.href : (d.attr("data-body-version", a.new_body_version), e.find(".form-content .js-comment-field").val(a.new_body))
        }, error: function (a) {
            return console.log("error", a)
        }, complete: function () {
            return b(e)
        }})
    }, $(document).on("change", "input.task-list-item-checkbox[type=checkbox]", function () {
        return c($(this))
    }), $.pageUpdate(function () {
        return $(".js-comment").each(function () {
            return b($(this))
        })
    })
}.call(this), function () {
    $(document).pageUpdate(function () {
        var a, b, c, d, e, f;
        f = $(this).find(".tooltipped");
        for (d = 0, e = f.length; d < e; d++)b = f[d], a = $(b), c = a.hasClass("downwards") ? "n" : "s", c = a.hasClass("rightwards") ? "w" : c, c = a.hasClass("leftwards") ? "e" : c, c = a.hasClass("downandright") ? "nw" : c, a.tipsy({gravity: c});
        return $(this).tipsy.revalidate()
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a() {
            this.onToggle = b(this.onToggle, this), this.onError = b(this.onError, this), this.onSuccess = b(this.onSuccess, this), this.onComplete = b(this.onComplete, this), this.onBeforeSend = b(this.onBeforeSend, this), this.onClick = b(this.onClick, this), $(document).on("click", ".js-toggler-container .js-toggler-target", this.onClick), $(document).on("ajaxBeforeSend", ".js-toggler-container", this.onBeforeSend), $(document).on("ajaxComplete", ".js-toggler-container", this.onComplete), $(document).on("ajaxSuccess", ".js-toggler-container", this.onSuccess), $(document).on("ajaxError", ".js-toggler-container", this.onError), $(document).on("toggler:toggle", ".js-toggler-container", this.onToggle)
        }

        return a.prototype.onClick = function (a) {
            return $(a.target).trigger("toggler:toggle"), !1
        }, a.prototype.onBeforeSend = function (a) {
            var b;
            return b = a.currentTarget, $(b).removeClass("success error"), $(b).addClass("loading")
        }, a.prototype.onComplete = function (a) {
            return $(a.currentTarget).removeClass("loading")
        }, a.prototype.onSuccess = function (a) {
            return $(a.currentTarget).addClass("success")
        }, a.prototype.onError = function (a) {
            return $(a.currentTarget).addClass("error")
        }, a.prototype.onToggle = function (a) {
            var b;
            return b = a.currentTarget, $(b).toggleClass("on")
        }, a
    }(), new a
}.call(this), function () {
    var a, b, c, d, e, f, g, h, i;
    if (!Modernizr.draganddrop)return;
    b = null, f = null, e = !1, g = function (a) {
        var d, g;
        g = a.target, g !== f && (e = c(a, f, g)), f = g, e && a.preventDefault(), clearTimeout(b), d = function () {
            return e = c(a, f, null), f = null
        }, b = setTimeout(d, 100)
    }, c = function (a, b, c) {
        var d;
        return d = !0, b && $(b).fire("drag:out", {originalEvent: a, dataTransfer: a.originalEvent.dataTransfer, relatedTarget: c}), c && $(c).fire("drag:over", {originalEvent: a, dataTransfer: a.originalEvent.dataTransfer, relatedTarget: b}, function () {
            return d = !1
        }), d
    }, a = 0, h = function () {
        ++a === 1 && $(window).on("dragover", g)
    }, i = function () {
        --a === 0 && $(window).off("dragover", g)
    }, d = function (a) {
        var b, c, d, e, f;
        e = this, f = a.type, c = a.relatedTarget, b = a.handleObj;
        if (!c || c !== e && !$.contains(e, c))a.type = b.origType, d = b.handler.apply(this, arguments), a.type = f;
        return d
    }, $.event.special["drag:out"] = {setup: h, teardown: i}, $.event.special["drag:over"] = {setup: h, teardown: i}, $.event.special["drag:enter"] = {handle: d, delegateType: "drag:over", bindType: "drag:over"}, $.event.special["drag:leave"] = {handle: d, delegateType: "drag:out", bindType: "drag:out"}
}.call(this), function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, y = [].indexOf || function (a) {
        for (var b = 0, c = this.length; b < c; b++)if (b in this && this[b] === a)return b;
        return-1
    }, z = {}.hasOwnProperty, A = function (a, b) {
        function d() {
            this.constructor = a
        }

        for (var c in b)z.call(b, c) && (a[c] = b[c]);
        return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
    };
    e = function () {
        function a() {
            this.uploads = [], this.busy = !1
        }

        return a.prototype.upload = function (a, b) {
            var c, d, e, f;
            return f = b.start || function () {
            }, e = b.progress || function () {
            }, c = b.complete || function () {
            }, d = b.error || function () {
            }, this.uploads.push({file: a, to: b.to, form: b.form || {}, start: f, progress: e, complete: c, error: d}), this.process()
        }, a.prototype.process = function () {
            var a, b, c, d, e, f, g = this;
            if (this.busy || this.uploads.length === 0)return;
            c = this.uploads.shift(), this.busy = !0, e = new XMLHttpRequest, e.open("POST", c.to, !0), e.setRequestHeader("X-CSRF-Token", this.token()), e.onloadstart = function (a) {
                return c.start()
            }, e.onreadystatechange = function (a) {
                var b;
                if (e.readyState === 4)return e.status === 204 ? (b = e.getResponseHeader("Location"), c.complete({href: b})) : e.status === 201 ? c.complete(JSON.parse(e.responseText)) : c.error(), g.busy = !1, g.process()
            }, e.onerror = function (a) {
                return c.error()
            }, e.upload.onprogress = function (a) {
                var b;
                if (a.lengthComputable)return b = Math.round(a.loaded / a.total * 100), c.progress(b)
            }, a = new FormData, f = c.form;
            for (b in f)d = f[b], a.append(b, d);
            return a.append("file", c.file), e.send(a)
        }, a.prototype.token = function () {
            return $('meta[name="csrf-token"]').attr("content")
        }, a
    }(), d = function () {
        function d(a) {
            this.container = a, this.error = x(this.error, this), this.complete = x(this.complete, this), this.progress = x(this.progress, this), this.start = x(this.start, this), this.available = x(this.available, this), this.model = $(a).data("model"), this.uploadUrl = "/upload/" + this.model + "s", this.policyUrl = "/upload/policies/" + this.model
        }

        var a, b, c;
        return b = ["image/gif", "image/png", "image/jpeg"], a = ["gif", "png", "jpg", "jpeg"], d.prototype.available = function () {
            return this.field && this.field[0] != null
        }, d.prototype.okToUpload = function (a) {
            return a.size < 5242880 && c(a.type)
        }, d.prototype.setup = function (a) {
            return a()
        }, d.prototype.start = function (a) {
        }, d.prototype.progress = function (a) {
        }, d.prototype.complete = function (a) {
        }, d.prototype.error = function (a) {
        }, d.prototype.acceptsExtension = function (b) {
            var c;
            return c = b.split(".").pop(), y.call(a, c) >= 0
        }, c = function (a) {
            return y.call(b, a) >= 0
        }, d
    }(), c = function (a) {
        function c(a) {
            this.container = a, this.complete = x(this.complete, this), c.__super__.constructor.call(this, a), this.field = $(a).siblings("ul.js-releases-field"), this.li = this.field.find("li.js-template"), this.meter = $(a).find(".js-upload-meter")
        }

        var b;
        return A(c, a), c.prototype.setup = function (a) {
            return $("#release_id").val() ? a() : $("button.js-save-draft").trigger("click", a)
        }, c.prototype.start = function (a) {
            return this.meter.show()
        }, c.prototype.progress = function (a) {
            return this.meter.css("width", a + "%")
        }, c.prototype.complete = function (a) {
            var b, c, d;
            return c = this.li.clone(), c.removeClass("template"), c.removeClass("js-template"), b = a.asset.name || a.asset.href.split("/").pop(), c.find(".filename").val(b), a.asset.size ? (d = (a.asset.size / 1048576).toFixed(2), c.find(".filesize").text("(" + d + "MB)")) : c.find(".filesize").text(""), c.find("input[type=hidden].url").val(a.asset.href), c.find("input[type=hidden].id").val(a.asset.id), this.field.append(c), this.field.addClass("is-populated"), this.meter.hide()
        }, c.prototype.okToUpload = function (a) {
            return!0
        }, b = function (a) {
            return!0
        }, c.prototype.acceptsExtension = function (a) {
            return!0
        }, c
    }(d), a = function (a) {
        function b(a) {
            this.container = a, this.complete = x(this.complete, this), b.__super__.constructor.call(this, a), this.field = $(a).find("img.js-image-field"), this.input = $(a).find("input.js-image-field")
        }

        return A(b, a), b.prototype.complete = function (a) {
            return this.field.attr("src", a.asset.href), this.input.attr("value", a.asset.href)
        }, b
    }(d), b = function (a) {
        function f(a) {
            this.container = a, this.error = x(this.error, this), this.complete = x(this.complete, this), this.start = x(this.start, this), f.__super__.constructor.call(this, a), this.field = $(a).find("textarea.js-comment-field")
        }

        var b, c, d, e;
        return A(f, a), d = function (a) {
            return"![Uploading " + a + " . . .]()"
        }, b = function (a) {
            return a.replace(/(.*)\.[^.]+$/, "$1").replace(/[^\w\s:-]/g, " ").replace(/\s+/g, " ")
        }, c = function (a, b) {
            var c, d, e, f;
            return e = a.selectionEnd, c = a.value.substring(0, e), f = a.value.substring(e), d = a.value === "" || c.match(/\n$/) ? "" : "\n", a.value = c + d + b + f, a.selectionStart = e + b.length, a.selectionEnd = e + b.length
        }, e = function (a, b, c) {
            var d, e;
            return $(a).data("link-replace") ? a.value = c : (d = a.value.substring(0, a.selectionEnd), e = a.value.substring(a.selectionEnd), d = d.replace(b, c), e = e.replace(b, c), a.value = d + e, a.selectionStart = d.length, a.selectionEnd = d.length)
        }, f.prototype.start = function (a) {
            return c(this.field[0], d(a.name) + "\n")
        }, f.prototype.complete = function (a) {
            var c, f;
            return f = d(a.asset.name), c = "![" + b(a.asset.name) + "](" + a.asset.href + ")", e(this.field[0], f, c)
        }, f.prototype.error = function (a) {
            var b;
            return b = d(a.asset.name), e(this.field[0], b, "")
        }, f
    }(d), n = ["is-default", "is-uploading", "is-bad-file", "is-failed"], p = function (a) {
        return a.removeClass(n.join(" "))
    }, q = function (a) {
        return p(a), a.addClass("is-default")
    }, w = new e, r = function (d) {
        var e;
        e = new b(d), e.available() || (e = new a(d)), e.available() || (e = new c(d));
        if (!e || !e.available())return;
        return e
    }, o = function (a, b) {
        var c;
        c = r(b);
        if (!c || !c.okToUpload(a))return;
        return c.setup(function () {
            return i(a, c.policyUrl, function (b) {
                var d;
                return c.start(a), d = j(b, c), w.upload(a, d)
            })
        })
    }, i = function (a, b, c) {
        return $.ajax({type: "POST", url: b, data: {name: a.name, size: a.size, content_type: a.type, repository_id: $("#release_repository_id").val(), release_id: $("#release_id").val()}, success: c})
    }, j = function (a, b) {
        var c, d;
        return c = $(b.container), d = {to: a.upload_url, form: a.form, start: function () {
            return p(c), c.addClass("is-uploading")
        }, progress: function (a) {
            return b.progress(a)
        }, complete: function (d) {
            return $.ajax({type: "PUT", url: "" + b.uploadUrl + "/" + a.asset.id}), b.complete(a), b.field.trigger("change"), q(c)
        }, error: function () {
            return b.error(a), b.field.trigger("change"), p(c), c.addClass("is-failed")
        }}
    }, t = function (a) {
        var b, c, d, e;
        e = a.types;
        for (c = 0, d = e.length; c < d; c++) {
            b = e[c];
            if (b === "Files")return!0
        }
        return!1
    }, u = function (a) {
        var b, c, d, e;
        e = a.types;
        for (c = 0, d = e.length; c < d; c++) {
            b = e[c];
            if (b === "text/uri-list")return!0
        }
        return!1
    }, v = function (a) {
        var b, c, d, e;
        e = a.types;
        for (c = 0, d = e.length; c < d; c++) {
            b = e[c];
            if (b === "text/plain")return!0
        }
        return!1
    }, f = function (a, b) {
        var c, d, e, f;
        f = [];
        for (d = 0, e = a.length; d < e; d++)c = a[d], o(c, b) ? f.push(void 0) : (p(b), f.push(b.addClass("is-bad-file")));
        return f
    }, g = function (a, b) {
        var c, d, e, f, g, h;
        if (!a)return;
        d = r(b);
        if (!d.available())return;
        g = a.split("\r\n"), h = [];
        for (e = 0, f = g.length; e < f; e++)c = g[e], d.acceptsExtension(c) ? (d.start({name: ""}), h.push(d.complete({asset: {name: "", href: c}}))) : (p(b), h.push(b.addClass("is-bad-file")));
        return h
    }, h = function (a, b) {
        var c;
        return c = textarea(b), insertTextAtCursor(c[0], a)
    }, k = function (a) {
        return t(a) ? "copy" : u(a) ? "link" : v(a) ? "copy" : "none"
    }, l = function (a) {
        switch (a) {
            case"image/gif":
                return"image.gif";
            case"image/png":
                return"image.png";
            case"image/jpeg":
                return"image.jpg"
        }
    }, Modernizr.draganddrop && (s = function (a) {
        a == null && (a = !0), $(document).off("drop.uploads dragover.uploads");
        if (!a)return;
        return $(document).on("drop.uploads", function (a) {
            return a.preventDefault()
        }), $(document).on("dragover.uploads", function (a) {
            return a.originalEvent.dataTransfer.dropEffect = "none", a.preventDefault()
        })
    }, m = function (a) {
        if ($(a).data("uploadable-container-installed"))return;
        return $(a).on("dragenter dragover", function (a) {
            var b;
            return b = k(a.originalEvent.dataTransfer), a.originalEvent.dataTransfer.dropEffect = b, $(this).addClass("dragover"), !1
        }), $(a).on("dragleave", function (a) {
            return a.originalEvent.dataTransfer.dropEffect = "none", $(this).removeClass("dragover"), !1
        }), $(a).on("drop", function (a) {
            var b;
            return $(this).removeClass("dragover"), b = a.originalEvent.dataTransfer, t(b) ? f(b.files, $(this)) : u(b) ? g(b.getData("text/uri-list"), $(this)) : v(b) && h(b.getData("text/plain"), $(this)), !1
        }), $(a).data("uploadable-container-installed", !0)
    }, $.pageUpdate(function () {
        var a, b, c, d, e;
        a = $(".js-uploadable-container"), s(a.length > 0), e = [];
        for (c = 0, d = a.length; c < d; c++)b = a[c], e.push(m(b));
        return e
    })), $(document).on("change", ".js-manual-file-chooser", function (a) {
        return f(a.target.files, $(this).closest(".js-uploadable-container"))
    }), $(document).on("paste", ".js-uploadable-container", function (a) {
        var b, c, d, e, g;
        if (!(d = (e = event.clipboardData) != null ? (g = e.items) != null ? g[0] : void 0 : void 0))return;
        if (!(c = l(d.type)))return;
        return b = d.getAsFile(), b.name = c, f([b], this), a.preventDefault()
    })
}.call(this), function () {
    var a;
    a = function (b) {
        var c, d, e, f, g;
        c = $(b);
        if (c.is("form")) {
            g = b.elements;
            for (e = 0, f = g.length; e < f; e++) {
                d = g[e];
                if (!a(d))return!1
            }
            return!0
        }
        return c.is("input[required], textarea[required]") && $.trim(c.val()) === "" ? !1 : !0
    }, $(document).on("focusin", "input[required], textarea[required]", function () {
        var b, c;
        return c = a(this), b = function (b) {
            var d;
            d = a(this), d !== c && $(this).trigger("validation:field:change", [d]), c = d
        }, $(this).on("textchange", b), $(this).on("blur", function () {
            return $(this).off("textchange", b)
        })
    }), $(document).on("validation:field:change", "form", function (b) {
        var c;
        return c = a(this), $(this).trigger("validation:change", [c])
    }), $(function () {
        var b, c, d, e;
        e = $("input[required], textarea[required]");
        for (c = 0, d = e.length; c < d; c++)b = e[c], $(b).trigger("validation:field:change", [a(b)])
    }), $(document).on("validation:change", "form", function (a, b) {
        return $(this).find("button[data-disable-invalid]").prop("disabled", !b)
    })
}.call(this), ZeroClipboard.setDefaults({moviePath: "/flash/ZeroClipboard.swf"});
if (typeof console == "undefined" || typeof console.log == "undefined")window.console = {log: function () {
}};
window.debug = function () {
}, window.GitHub.assetHostUrl = "https://a248.e.akamai.net/assets.github.com", $.ajaxPoll.version = "2", $.fn.spin = function () {
    return this.after('<img src="' + GitHub.Ajax.spinner + '" id="spinner" width="16" />')
}, $.fn.stopSpin = function () {
    return $("#spinner").remove(), this
}, GitHub.Ajax = {spinner: "https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif", error: "https://a248.e.akamai.net/assets.github.com/images/modules/ajax/error.png"}, $(function () {
    function b() {
        $("#facebox .shortcuts:visible").length ? $.facebox.close() : ($(document).one("reveal.facebox", function () {
            $(".js-see-all-keyboard-shortcuts").click(function () {
                return $(this).remove(), $("#facebox .js-hidden-pane").show(), !1
            })
        }), $.facebox({div: "#keyboard_shortcuts_pane", ajax: "/site/keyboard_shortcuts?url=" + window.location.pathname}, "shortcuts"))
    }

    function c() {
        $("#facebox .cheatsheet:visible").length ? $.facebox.close() : $.facebox({div: "#markdown-help", ajax: "/site/markdown_cheatsheet"}, "cheatsheet")
    }

    var a = new Image;
    a.src = GitHub.Ajax.spinner, $(".cards_select").cardsSelect({type_field: "credit_card_type"}), $(document).bind("reveal.facebox", function () {
        $(".cards_select").cardsSelect(), $("#facebox .content").fire("pageUpdate")
    }), $(".flash .close").click(function () {
        $(this).closest(".flash").fadeOut(300, function () {
            $(this).remove(), $(".flash-messages .close").length == 0 && $(".flash-messages").remove()
        })
    }), $(".js-date-input").date_input(), $(document).on("keypress", function (a) {
        if ($(a.target).is(":input"))return;
        if (a.which === 63)return b(), !1
    }), $(".home-signup input").placeholder(), $(document).on("keydown", function (a) {
        if (a.hotkey !== "m" || $(a.target).is(":input"))return;
        return c(), !1
    }), $(".gfm-help").click(function (a) {
        a.preventDefault(), c()
    })
}), $.pageUpdate(function () {
    $(this).find("a[rel*=facebox]").each(function () {
        if ($(this).data("facebox-installed"))return;
        $(this).facebox(), $(this).data("facebox-installed", !0)
    }), $(this).find(".js-entice").each(function () {
        $(this).enticeToAction({title: $(this).attr("data-entice")})
    })
}), $.extend($.facebox.settings, {loadingImage: "https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif", closeHTML: '<span class="mini-icon mini-icon-remove-close"></span>', closeImage: ""}), function () {
    $.pageUpdate(function () {
        var a, b, c;
        if (!$("#menu-about").length)return;
        a = $(".js-github-jobs");
        if (!a.length)return;
        return $(".js-github-jobs").hasClass("loading") || (a.addClass("loading"), $.getJSON(a.data("url"),function (a) {
            var d, e, f, g;
            if (a.length === 0)return c();
            g = [];
            for (e = 0, f = a.length; e < f; e++)d = a[e], g.push(b(d));
            return g
        }).error(function (a, b, c) {
            return $(".js-github-jobs .jobs").html("Had a problem pulling in our jobs. Sorry!")
        })), b = function (a) {
            var b;
            return b = a.description.split("\n")[0], $(".js-github-jobs .jobs").append('      <li>        <h3><a href="' + a.url + '">' + a.title + "</a></h3>        <p>" + b + "</p>        <hr />      </li>    ")
        }, c = function () {
            return $(".js-github-jobs .jobs").html("<p>We haven't posted any jobs lately. Check back later, though!</p>")
        }
    })
}.call(this), function () {
    $(function () {
        var a;
        return $(document).on("click", ".section-head", function (b) {
            var c;
            return c = $(b.currentTarget).next(".section-nav"), a.expand(c)
        }), a = {collapse: function (a) {
            return a.slideUp(200), a.addClass("collapsed")
        }, expand: function (b) {
            var c, d, e, f;
            d = $(".section-nav");
            for (e = 0, f = d.length; e < f; e++)c = d[e], a.collapse($(c));
            return b.slideDown(200), b.removeClass("collapsed")
        }}
    })
}.call(this), function () {
    var a, b, c, d, e, f;
    (e = window._gaq) == null && (window._gaq = []), _gaq.push(["_setAccount", "UA-3769691-2"]), _gaq.push(["_setDomainName", "none"]), _gaq.push(["_trackPageview"]), _gaq.push(["_trackPageLoadTime"]), document.title === "404 - GitHub" && (d = document.location.pathname + document.location.search, a = document.referrer, _gaq.push(["_trackPageview", "/404.html?page=" + d + "&from=" + a])), b = document.createElement("script"), b.type = "text/javascript", b.async = !0, c = document.location.protocol === "https:" ? "https://ssl" : "http://www", b.src = "" + c + ".google-analytics.com/ga.js", document.getElementsByTagName("head")[0].appendChild(b), (f = window._gauges) == null && (window._gauges = []), window.location.pathname.match(/\/blog/) === null && $(function () {
        var a, b;
        return a = document.createElement("script"), a.type = "text/javascript", a.async = !0, a.id = "gauges-tracker", a.setAttribute("data-site-id", "4f5634b5613f5d0429000010"), a.src = "https://secure.gaug.es/track.js", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b)
    })
}.call(this), $(function () {
    $.hotkeys({y: function () {
        var a = $("link[rel='permalink']").attr("href"), b = $("title");
        a && (a += location.hash, window.location.href = a)
    }})
}), function () {
    var a, b;
    $(document).on("ajaxBeforeSend", ".js-new-comment-form", function (a, b) {
        var c;
        if (c = $("#js-discussion-last-modified").attr("datetime"))return b.setRequestHeader("X-Discussion-Last-Modified", c)
    }), $(document).on("ajaxSend", ".js-new-comment-form", function () {
        $(this).find(".comment-form-error").hide()
    }), $(document).on("ajaxSuccess", ".js-new-comment-form", function () {
        return $(this)[0].reset(), $(this).find("a[action=write]").click()
    }), $(document).on("ajaxError", ".js-new-comment-form", function () {
        var a;
        return a = "There was an error posting your comment", $(this).find(".js-comment-field").text().trim() === "" && (a = "Comment field was blank"), $(this).find(".comment-form-error").show().text(a), !1
    }), a = function (a) {
        $(document).off("keydown.unpreview"), $(document).on("keydown.unpreview", function (b) {
            if (b.hotkey === "ctrl+P" || b.hotkey === "meta+P")return a.find(".write-tab").click(), a.find(".js-comment-field").focus(), $(document).off("keydown.unpreview"), b.preventDefault()
        })
    }, $(document).on("focusin", ".js-comment-field", function () {
        return $(this).on("keydown.commentFocus", function (a) {
            var b;
            if (a.hotkey === "ctrl+enter" || a.hotkey === "meta+enter")$(this).closest("form").submit(), a.preventDefault();
            if (a.hotkey === "ctrl+P" || a.hotkey === "meta+P")b = $(this).closest(".js-previewable-comment-form"), b.hasClass("write-selected") && ($(this).blur(), b.find(".preview-tab").click(), a.preventDefault(), a.stopImmediatePropagation());
            if (a.hotkey === "ctrl+L" || a.hotkey === "meta+L")return $(this).prev(".js-enable-fullscreen")[0].click(), a.preventDefault()
        }), $(this).on("blur.commentFocus", function () {
            return $(this).off(".commentFocus")
        })
    }), $(document).on("click", ".js-preview-tabs .write-tab", function () {
        var a;
        return a = $(this).closest(".js-previewable-comment-form"), a.addClass("write-selected").removeClass("preview-selected"), a.find(".tabnav-tab").removeClass("selected"), $(this).addClass("selected"), !1
    }), $(document).on("click", ".js-preview-tabs .preview-tab", function () {
        var c;
        return c = $(this).closest(".js-previewable-comment-form"), c.addClass("preview-selected").removeClass("write-selected"), c.find(".tabnav-tab").removeClass("selected"), $(this).addClass("selected"), a($(this).closest(".js-previewable-comment-form")), b(c), !1
    }), b = function (a) {
        var b;
        return b = a.find(".comment-body"), b.html("<p>Loading preview&hellip;</p>"), $.ajax({type: "POST", url: a.attr("data-preview-url"), data: {text: a.find(".js-comment-field").val()}, success: function (a) {
            return b.html(a || "<p>Nothing to preview</p>")
        }})
    }, $(document).on("click", ".js-comment-edit-button", function () {
        var a;
        return a = $(this).closest(".js-comment"), a.addClass("is-comment-editing"), a.find(".js-comment-field").focus(), !1
    }), $(document).on("click", ".js-comment-cancel-button", function () {
        return $(this).closest(".js-comment").removeClass("is-comment-editing"), !1
    }), $(document).on("ajaxSend", ".js-comment-delete, .js-comment-update", function () {
        var a;
        return a = $(this).closest(".js-comment"), a.addClass("is-comment-loading"), a.find(".minibutton").addClass("disabled")
    }), $(document).on("ajaxComplete", ".js-comment-delete, .js-comment-update", function () {
        var a;
        return a = $(this).closest(".js-comment"), a.removeClass("is-comment-loading"), a.find(".minibutton").removeClass("disabled")
    }), $(document).on("ajaxSuccess", ".js-comment-delete", function () {
        var a, b;
        return a = $(this).closest(".js-comment"), b = $(this).closest(".js-comment-container"), b.length || (b = a), b.fadeOut(function () {
            return a.removeClass("is-comment-editing")
        })
    }), $(document).on("ajaxSuccess", ".js-comment-update", function (a, b, c, d) {
        var e, f;
        return e = $(this).closest(".comment"), f = $(this).closest(".js-comment-container"), f.length || (f = e), d.title != null && e.find(".js-comment-body-title").html(d.title), e.find(".js-comment-body").html(d.body).attr("data-body-version", d.new_body_version), e.removeClass("is-comment-editing"), f.pageUpdate()
    }), $(document).on("focusin", ".js-new-comment-form .js-comment-field", function () {
        var a, b, c, d, e;
        c = $(this).closest(".js-new-comment-form"), a = c.find(".js-comment-and-button");
        if (!a[0])return;
        return d = a.text().trim(), e = a.attr("data-original-text"), b = a.attr("data-comment-text"), $(this).on("input.commentAndButton", function () {
            var c, f;
            f = $(this).val().trim() !== "", c = f ? b : e, c !== d && a.text(d = c)
        }), $(this).on("blur.commentAndButton", function () {
            return $(this).off(".commentAndButton")
        })
    }), $(document).on("focusin", ".js-write-bucket textarea", function () {
        return $(this).closest(".js-write-bucket").addClass("focused")
    }), $(document).on("focusout", ".js-write-bucket textarea", function () {
        return $(this).closest(".js-write-bucket").removeClass("focused")
    }), $(document).on("keydown", function (a) {
        var b, c, d, e;
        if ($(a.target).is(":input"))return;
        if (a.hotkey === "r") {
            b = $(".js-write-bucket:visible:last textarea");
            if (!b.length)return;
            e = window.getSelection();
            if (e.toString() && $(e.focusNode).closest(".js-discussion").length) {
                d = "> " + e.toString().replace(/\n/g, "\n> ") + "\n\n";
                if (c = b.val())d = "" + c + "\n\n" + d;
                b.val(d)
            }
            return b.closest(".js-comment-container").scrollTo({duration: 300}, function () {
                return b.caret(b.val().length)
            }), a.preventDefault()
        }
    })
}.call(this), function () {
    $(document).on("click", ".js-compare-tabs a", function () {
        return $(this).closest(".js-compare-tabs").find("a").removeClass("selected"), $(this).addClass("selected"), $("#commits_bucket, #files_bucket, #commit_comments_bucket").hide(), $(this.hash).show(), !1
    })
}.call(this), function () {
    $(document).on("pjax:send", ".context-loader-container", function () {
        return $(this).addClass("is-context-loading")
    }), $(document).on("pjax:complete", ".context-loader-container", function () {
        return $(this).removeClass("is-context-loading")
    }), $(document).on("pjax:timeout", ".context-loader-container", function () {
        return!1
    })
}.call(this), function () {
    var a, b, c, d, e, f, g;
    b = null, c = null, f = null, g = null, a = function (a) {
        var b;
        return b = $("<img>", {"class": "dots", src: "/images/spinners/octocat-spinner-128.gif"}), $("#contribution-activity-listing").html(b), $.pjax({url: a, container: "#contribution-activity", scrollTo: !1, replace: !0})
    }, d = function (c) {
        var d, h;
        return b = c, d = null, f = null, g = null, h = "" + document.location.pathname + "?tab=contributions&period=" + b, e(), a(h)
    }, e = function (a, b) {
        var c, d;
        return d = $(".calendar-graph"), c = d3.select(".js-calendar-graph").selectAll("rect.day").classed("active", !1), a || b ? (d.addClass("days-selected"), c.filter(function (c, d) {
            return a && b ? c[0] >= a && c[0] <= b : c[0] === a
        }).classed("active", !0)) : d.removeClass("days-selected")
    }, $(document).on("contributions:range", function (h, i, j) {
        var k, l, m, n, o, p, q, r, s, t;
        j == null && (j = !1), q = "" + document.location.pathname + "?tab=contributions";
        if (i >= f && i <= g) {
            d("weekly");
            return
        }
        return typeof j == "object" && (c = j, j = !0), c && j ? (o = moment(c).clone().subtract("days", 31).toDate(), n = moment(c).clone().add("days", 31).toDate(), r = i > c ? [c, i] : [i, c], m = r[0], p = r[1], m < o && (m = o), p > n && (p = n), s = [m, p], f = s[0], g = s[1], k = moment(m).format("YYYY-MM-DD"), l = moment(p).format("YYYY-MM-DD"), q += "&from=" + k + "&to=" + l) : (m = i, t = [m, null], f = t[0], g = t[1], k = moment(m).format("YYYY-MM-DD"), q += "&from=" + k), c = i, b = "custom", e(m, p), a(q)
    }), $(document).on("change", ".js-period-container", function (a) {
        var c;
        a.preventDefault(), a.stopPropagation(), c = $(a.target).val().toLowerCase();
        if (b === c)return;
        return d(c)
    }), $(function () {
        var a;
        return a = $(".popular-repos .col").height() - 20, $(".popular-repos .capped-box").css("height", "" + a + "px")
    })
}.call(this), function () {
    $(document).on("submit", ".js-credit-card-form", function (a) {
        var b;
        b = $(".js-optional-postal-code", this);
        if (b.val().match(/\S/))return b.attr("name", b.attr("data-name"))
    })
}.call(this), $(function () {
    if ($(".repohead").length == 0)return;
    var a = $("#repo_details"), b = GitHub.hasAdminAccess, c = GitHub.watchingRepo, d = GitHub.hasForked, e = $("#repository_description"), f = $("#repository_homepage"), g = $("#repo_details_loader");
    if ($(".js-edit-details").length) {
        var h = $(".repo-desc-homepage, .kill-the-chrome .js-details-show"), i = $(".edit-repo-desc-homepage, .kill-the-chrome .js-details-edit"), j = i.find(".error");
        $(".repo-desc-homepage, .kill-the-chrome .repository-meta").delegate(".js-edit-details", "click", function (a) {
            a.preventDefault(), h.hide(), i.show(), i.find(".description-field").focus()
        }), i.find(".cancel a").click(function (a) {
            a.preventDefault(), h.show(), i.hide()
        }), $("#js-update-repo-meta-form").submit(function (a) {
            a.preventDefault();
            var b = $(this);
            j.hide(), g.show(), i.css({opacity: .5}), $.ajax({url: b.attr("action"), type: "put", data: b.serialize(), success: function (a) {
                i.hide(), h.html(a).show(), g.hide(), i.css({opacity: 1})
            }, error: function () {
                j.show(), g.hide(), i.css({opacity: 1})
            }})
        })
    }
    b && ($(".editable-only").show(), $(".for-owner").show())
}), function () {
    $(document).on("click", ".js-git-protocol-selector", function () {
        var a, b, c;
        return a = $(this).closest(".url-box"), c = $(this).attr("href"), b = $(this).attr("data-permission"), a.find(".js-url-field").val(c), a.find(".js-zeroclipboard").attr("data-clipboard-text", c), a.find(".js-clone-url-permission").text(b), $(".js-live-clone-url").text(c), (c = $(this).attr("data-url")) && $.ajax({type: "POST", url: c}), a.find(".js-clone-urls > .selected").removeClass("selected"), $(this).parent(".js-clone-url-button").addClass("selected"), !1
    }), $(document).on("mouseup", ".js-url-field", function () {
        return $(this).select()
    })
}.call(this), $.pageUpdate(function () {
    $(document).on("click", ".js-hook-target", function () {
        return $(".js-hook-target").removeClass("selected"), $(this).addClass("selected"), $(".js-hook-group").hide(), $(this.hash).show().scrollTo(), !1
    }), $(".test_hook").click(function () {
        var a = $(this), b = a.prev(".test_hook_message");
        b.text("Sending payload...");
        var c = a.attr("href");
        return $.post(c, {name: a.attr("rel") || ""}, function () {
            b.text("Payload deployed")
        }), !1
    }), $(".add_postreceive_url").click(function () {
        var a = $(this).prev("dl.form").clone();
        return a.find("input").val(""), $(this).before(a), !1
    }), $(document).on("click", ".remove_postreceive_url", function () {
        return $(this).closest(".fields").find("dl.form").length < 2 ? (alert("You cannot remove the last post-receive URL"), !1) : ($(this).closest("dl.form").remove(), !1)
    }), $(".unlock_branch").click(function () {
        var a = location.pathname.split("/"), b = "/" + a[1] + "/" + a[2] + "/unlock_branch/" + a[4], c = $(this).parents(".notification");
        $(this).spin().remove();
        var d = this;
        return $.post(b, function () {
            c.hide()
        }), !1
    });
    if ($("#edit_repo").length > 0) {
        var a = $("#change_default_branch"), b = a.find("select"), c = b.val();
        b.change(function () {
            a.removeClass("success").removeClass("error").addClass("loading"), $.ajax({type: "PUT", url: a.closest("form").attr("action"), data: {field: "repository_master_branch", value: b.val()}, success: function () {
                a.removeClass("loading").addClass("success"), c = b.val()
            }, error: function () {
                b.val(c), a.removeClass("loading").addClass("error")
            }})
        }), $(".addon.feature").each(function () {
            var a = $(this);
            a.find(":checkbox").change(function () {
                var b = this;
                a.removeClass("success").removeClass("error").addClass("loading"), $.ajax({type: "PUT", url: a.closest("form").attr("action"), data: {field: b.name, value: b.checked ? 1 : 0}, success: function () {
                    a.removeClass("loading").addClass("success")
                }, error: function () {
                    b.checked = !b.checked, a.removeClass("loading").addClass("error")
                }})
            })
        });
        var d = $("#push_pull_collabs input[data-autocomplete]"), e = $("#push_pull_collabs button[type=submit]"), f = null;
        d.on("autocomplete:search", function () {
            f && f.abort();
            var a = $(this).val();
            if (a === "") {
                $("#add-user-autocomplete ul").empty(), $("#add-user-autocomplete").trigger("autocomplete:change");
                return
            }
            f = $.ajax({type: "GET", data: {q: a, limit: 10}, url: "/autocomplete/users", dataType: "html", success: function (a) {
                f = null, $("#add-user-autocomplete ul").html(a), $("#add-user-autocomplete").trigger("autocomplete:change")
            }})
        }), d.on("autocomplete:autocompleted:changed", function () {
            d.attr("data-autocompleted") ? e.removeAttr("disabled") : e.attr("disabled", "disabled")
        }), $("#push_pull_collabs form").submit(function () {
            var a = $(this).find(":text"), b = a.val();
            debug("Trying to add %s...", b);
            if (!b || !a.attr("data-autocompleted"))return!1;
            var c = function (a) {
                a != null ? $("#push_pull_collabs .error").text(a).show() : $("#push_pull_collabs .error").hide()
            };
            return c(), $.ajax({url: this.action, data: {member: b}, type: "POST", dataType: "json", success: function (b) {
                a.val(""), b.error ? c(b.error) : $("#push_pull_collabs ul.usernames").append(b.html)
            }, error: function () {
                c("An unidentified error occurred, try again?")
            }}), !1
        }), $(document).on("click", "#push_pull_collabs .remove-user", function () {
            return $.ajax({type: "DELETE", url: this.href}), $(this).closest("li").remove(), !1
        }), $("#teams form").submit(function () {
            var a = $(this).find("select"), b = a.val(), c = function (a) {
                a != null ? $("#push_pull_collabs .error").text(a).show() : $("#push_pull_collabs .error").hide()
            };
            return b == "" ? (c("You must select a team"
            ), !1) : (c(), $.ajax({url: this.action, data: {team: b}, type: "POST", dataType: "json", success: function (b) {
                a.val(""), b.error ? c(b.error) : $("#teams ul.teams").append(b.html)
            }, error: function () {
                c("An unidentified error occurred, try again?")
            }}), !1)
        }), $(document).on("click", "#teams .remove-team", function () {
            return $.ajax({type: "DELETE", url: this.href}), $(this).closest("li").remove(), !1
        }), $(".site").is(".vis-public") ? $(".private-only").hide() : $(".public-only").hide(), $(document).on("click", "#custom_tabs .remove-tab", function () {
            return $.ajax({type: "DELETE", url: this.href}), $(this).closest("li").remove(), !1
        }), $(document).bind("reveal.facebox", function () {
            $("#facebox .renaming_to_field").val($("#rename_field").val())
        })
    }
}), $(function () {
    var a = $(".community .bigcount"), b = function () {
        var b = a.outerWidth();
        a.css("margin-left", -(b / 2) + "px"), a.fadeIn()
    };
    a.length > 0 && setTimeout(b, 500);
    var c = $(".js-slidy-highlight");
    if (c.length > 0) {
        var d = c.find("li.highlight"), e = d.width() / 2;
        e += -1;
        var f = function (a) {
            var b = a.closest("li"), c = b.position(), d = c.left + b.width() / 2 - e;
            return d += parseInt(b.css("margin-left")), d
        };
        c.bind("tabChanged", function (a, b) {
            var c = f(b.link);
            d.animate({left: c}, 300)
        });
        var g = f(c.find(".selected"));
        d.css({left: g})
    }
}), function () {
    $(document).on("click", ".email-hidden-toggle > a", function () {
        return $(this).parent().siblings(".email-hidden-reply").toggle(), !1
    })
}.call(this), function () {
    var a;
    $(document).on("click", ".add-bubble[data-remote]", function () {
        var b, c;
        return $(this).hasClass("loading") ? !1 : ($(this).closest(".file").addClass("show-inline-notes"), c = $(this).closest("tr"), b = c.next("tr.inline-comments"), b.length ? a(b) : $.ajax({context: this, url: $(this).attr("data-remote"), success: function (b) {
            return c.after(b).fire("pageUpdate"), a(c.next("tr.inline-comments"))
        }}))
    }), a = function (a) {
        return a.find(".js-preview-tabs .write-tab").click(), a.addClass("show-inline-comment-form").find(".js-comment-field").focus()
    }, $(document).on("click", ".js-show-inline-comment-form", function () {
        return a($(this).closest(".inline-comments")), !1
    }), $(document).on("click", ".js-hide-inline-comment-form", function () {
        var a;
        return a = $(this).closest(".inline-comments"), a.removeClass("show-inline-comment-form"), a.find(".inline-comment-form .js-comment-field").val(""), a.find(".js-comments-holder").children(":visible").length || a.remove(), !1
    }), $(document).on("focusin", ".inline-comment-form .js-comment-field", function () {
        return $(this).on("keydown.inlineCommentForm", function (a) {
            var b;
            if ($(this).hasClass("js-navigation-enable"))return;
            if (a.hotkey === "esc" && $(this).val().length === 0)return b = $(this).closest(".inline-comments"), b.find(".js-hide-inline-comment-form").click(), !1
        }), $(this).on("blur.inlineCommentForm", function () {
            return $(this).off(".inlineCommentForm")
        })
    }), $(document).on("ajaxSend", ".js-inline-comment-form", function () {
        return $(this).find(".ajaxindicator").show()
    }), $(document).on("ajaxComplete", ".js-inline-comment-form", function () {
        return $(this).find(".ajaxindicator").hide()
    }), $(document).on("ajaxSuccess", ".js-inline-comment-form", function (a, b, c, d) {
        var e, f;
        return f = $(this).closest(".js-line-comments"), f.find(".js-comments-holder").append(d), f.find(".js-hide-inline-comment-form").click(), e = f.closest(".inline-comments").find(".comment-count .counter"), e.text(parseInt(e.text().replace(",", "")) + 1), f.closest(".inline-comments").pageUpdate()
    }), $(document).on("ajaxSuccess", ".inline-comments .js-comment-delete", function () {
        var a, b = this;
        return a = $(this).closest(".inline-comments"), setTimeout(function () {
            if (!a.find(".js-comments-holder").children(":visible").length)return a.remove()
        }, 500)
    })
}.call(this), function (a) {
    a.fn.milestoneSelector = function (b) {
        var c = a.extend({}, a.fn.milestoneSelector.defaults, b);
        return this.each(function () {
            var b = a(this), d = b.closest(".context-pane"), e = b.find(".selector-item"), f = b.find(".milestone-item"), g = f.filter(".open-milestone"), h = f.filter(".closed-milestone"), i = e.filter(".for-selected"), j = b.find(".new-milestone-item"), k = b.find(".no-results"), l = b.find(".milestone-filter"), m = a(".js-milestone-infobar-item-wrapper");
            b.closest(".js-menu-container").on("menu:activate",function () {
                b.navigation("push")
            }).on("menu:deactivate",function () {
                b.navigation("pop")
            }).on("menu:activated", function () {
                l.focus()
            });
            if (b.find("form").length == 0) {
                c.newMode = !0;
                var n = a("input[name='issue[milestone_id]']"), o = a("input[name='new_milestone_title']")
            }
            var p = "open", q = null;
            b.find(".tabs a").click(function () {
                return b.find(".tabs a.selected").removeClass("selected"), a(this).addClass("selected"), p = a(this).attr("data-filter"), u(), !1
            }), l.on("textchange", function (a, b) {
                q = b, u()
            }), b.on("navigation:open", ".milestone-item", function () {
                r(this)
            }), e.click(function () {
                r(this)
            }), d.bind("deactivated.contextPane", function () {
                y(), l.val(""), l.trigger("keyup")
            });
            var r = function (e) {
                e = a(e);
                if (e.length == 0)return;
                if (e.hasClass("new-milestone-item"))return s(e);
                var g = e.find("input[type=radio]");
                if (g[0].checked)return;
                g[0].checked = !0, b.trigger("beforeAssignment.milestoneSelector"), c.newMode ? (n.val(g[0].value), f.removeClass("selected"), e.addClass("selected"), d.menu("deactivate"), b.trigger("afterAssignment.milestoneSelector")) : t({url: g[0].form.action, params: {milestone: g[0].value, issues: b.attr("data-issue-numbers").split(",")}})
            }, s = function (a) {
                b.trigger("beforeAssignment.milestoneSelector"), c.newMode ? (n.val("new"), o.val(l.val()), f.removeClass("selected"), a.addClass("selected"), d.menu("deactivate"), b.trigger("afterAssignment.milestoneSelector")) : t({url: a.closest("form").attr("action"), params: {new_milestone: l.val(), issues: b.attr("data-issue-numbers").split(",")}})
            }, t = function (c) {
                v(), a.ajax({type: "PUT", url: c.url, data: c.params, success: function (a) {
                    w(), m.html(a.infobar_body).pageUpdate(), d.menu("deactivate"), b.html(a.context_pane_body).milestoneSelector().pageUpdate(), b.trigger("afterAssignment.milestoneSelector")
                }, error: function () {
                    w(), x()
                }})
            }, u = function () {
                var b = null;
                p == "open" ? (i.show(), h.hide(), b = g) : (i.hide(), g.hide(), b = h), q != "" && q != null ? (b.each(function () {
                    var b = a(this), c = b.find(".milestone-title").text().toLowerCase();
                    a.fuzzyScore(c, q) > 0 ? b.show() : b.hasClass("selected") || b.hide()
                }), j.find(".milestone-title").text(q), j.show(), k.hide(), i.hide()) : (b.each(function () {
                    a(this).show()
                }), b.length == 0 ? k.show() : k.hide(), j.hide())
            };
            u();
            var v = function () {
                d.find(".context-body").append('<div class="loader">Loading…</div>')
            }, w = function () {
                d.find("context-.body .loader").remove()
            }, x = function (a) {
                a == null && (a = "Sorry, an error occured"), d.find(".context-body").append('<div class="error-message">' + a + "</div>")
            }, y = function () {
                d.find(".context-body .error-message").remove()
            }
        })
    }, a.fn.milestoneSelector.defaults = {}
}(jQuery), $(function () {
    var a = $("#issues_search");
    if (a.length == 0)return;
    var b = $("#js-issues-quicksearch").val();
    a.find("input[type=radio], select").change(function (a) {
        var c = $(this).closest("form");
        c.find("#search_q").val(b), c.submit()
    })
}), function () {
    var a = location.pathname + location.hash, b = a.match(/#issue\/(\d+)(\/comment\/(\d+))?/);
    if (b) {
        var c = b[1], d = b[3];
        c && (d ? window.location = a.replace(/\/?#issue\/\d+\/comment\/\d+/, "/" + c + "#issuecomment-" + d) : window.location = a.replace(/\/?#issue\/\d+/, "/" + c))
    }
}(), $(function (a) {
    var b = a("#issues_next");
    if (b.length == 0)return;
    var c = a("#js-issues-quicksearch"), d = !0;
    if (c.length > 0) {
        var e = b.find(".js-new-issue-button"), f = c.offset();
        b.find(".search .autocomplete-results").css({left: c.position().left, width: e.offset().left - f.left + e.outerWidth(!0)}), c.quicksearch({results: b.find(".search .autocomplete-results"), insertSpinner: function (a) {
            c.closest("form").prepend(a)
        }}).bind("focus",function (b) {
            d && (d = !1), a(this).closest(".fieldwrap").addClass("focused")
        }).bind("blur",function (b) {
            a(this).closest(".fieldwrap").removeClass("focused")
        }).css({outline: "none"})
    }
}), $(function () {
    var a = $(".github-jobs-promotion");
    if (a.get(0) == null)return;
    a.css("visibility", "hidden"), window.jobsWidgetCallback = function (b) {
        var c = Math.floor(Math.random() * b.jobs.length), d = b.jobs[c];
        a.find(".job-link").attr("href", d.url), a.find(".job-company").text(d.company), a.find(".job-position").text(d.position), a.find(".job-location").text(d.location), a.css({visibility: "visible"})
    }, $.getScript(a.attr("url"))
}), function () {
    $.extend($.facebox.settings, {loadingImage: "https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif", closeHTML: '<span class="mini-icon mini-icon-remove-close"></span>', closeImage: ""}), $(document).on("click", ".js-keyboard-shortcuts", function () {
        return $("#facebox .shortcuts:visible").length || $(document).one("reveal.facebox", function () {
            return $(".js-see-all-keyboard-shortcuts").click(function () {
                return $(this).remove(), $("#facebox .js-hidden-pane").show(), !1
            })
        }), $.facebox({div: "#keyboard_shortcuts_pane", ajax: "/site/keyboard_shortcuts?url=" + window.location.pathname}, "shortcuts")
    })
}.call(this), function () {
    GitHub.loadGraph = function (a, b) {
        var c, d, e, f, g, h;
        return a = $(a).css("min-height", "500px"), d = $("<img />").addClass("dots").attr("src", "/images/spinners/octocat-spinner-128.gif").attr("width", "64"), c = $("<div />").addClass("activity"), f = $("<p />").addClass("msg").text("Crunching the latest data, just for you. Hang tight…").hide(), c.append(d).append(f), a.append(c), h = document.location.pathname.split("/"), g = h[h.length - 1], e = "" + document.location.pathname + "-data", $.ajaxPoll({url: e, success: function (a, e, g) {
            var h, i, j;
            return g.status === 202 ? f.show() : (h = a && a.length === 0 || ((i = a[0]) != null ? (j = i.weeks) != null ? j.length : void 0 : void 0) === 0, h ? (d.remove(), f.html("We don't have enough data to show you anything useful.                    It usually takes about a week.").show()) : (c.remove(), b(a)))
        }, error: function (b, d, e) {
            var f;
            return c.remove(), f = $("<div />").addClass("error").text("We tried our best, but the graph wouldn't load. Try reloading the page."), a.append(f)
        }})
    }
}.call(this), function () {
    var a, b;
    a = function () {
        var a, c, d, e, f;
        return e = [], a = $(".js-advanced-search-input").val(), f = {Repositories: 0, Users: 0, Code: 0}, e = b($("input[type=text].js-advanced-search-prefix, select.js-advanced-search-prefix"), function (a, b, c) {
            if (a === "")return"";
            b !== "" && f[c]++;
            if (b !== "")return"" + a + b
        }), $.merge(e, b($("input[type=checkbox].js-advanced-search-prefix"), function (a, b, c) {
            var d;
            d = $(this).prop("checked"), d !== !1 && f[c]++;
            if (d !== !1)return"" + a + d
        })), c = function (a) {
            return a.Users > a.Code && a.Users > a.Repositories ? "Users" : a.Code > a.Users && a.Code > a.Repositories ? "Code" : "Repositories"
        }, d = $.trim(e.join(" ")), $(".js-type-value").val(c(f)), $(".js-search-query").val($.trim("" + a + " " + d)), $(".js-advanced-query").empty().append($("<span>").text($.trim(a)), " " + d)
    }, b = function (a, b) {
        return $.map(a, function (a, c) {
            var d, e, f, g;
            return f = $.trim($(a).val()), d = $(a).attr("data-search-prefix"), e = $(a).attr("data-search-type"), g = function (a) {
                return a.search(/\s/g) !== -1 ? '"' + a + '"' : a
            }, d === "" ? b.call(a, d, f, e) : f.search(/\,/g) !== -1 && d !== "location" ? f.split(/\,/).map(function (c, f) {
                return b.call(a, d, g($.trim(c)), e)
            }) : b.call(a, d, g(f), e)
        })
    }, $(document).on("change input", ".js-advanced-search-prefix", a), $(document).on("focusin", ".js-advanced-search-input", function () {
        return $(this).closest(".js-advanced-search-label").addClass("focus")
    }), $(document).on("focusout", ".js-advanced-search-input", function () {
        return $(this).closest(".js-advanced-search-label").removeClass("focus")
    }), $(document).on("click", ".js-see-all-search-cheatsheet", function () {
        return $(".js-more-cheatsheet-info").removeClass("hidden"), !1
    }), $(function () {
        if ($(".js-advanced-search-input").length)return a()
    })
}.call(this), $(function () {
    $("#js-coupon-click-onload").click(), $(".selected .choose_plan").click(), $(".js-show-credit-card-form")[0] && ($.facebox({div: "#credit_card_form"}), $(document).unbind("close.facebox").bind("close.facebox", function () {
        window.location = "/account/billing"
    }))
}), $(document).on("click", ".js-add-cc", function () {
    return $(document).one("reveal.facebox", function () {
        $("#facebox .js-thanks, #facebox .rule:first").hide()
    }), $.facebox({div: this.href}), !1
}), $(document).on("click", ".js-add-billing-contact-info", function () {
    return $(document).one("reveal.facebox", function () {
        $(".js-billing-info-field").focus()
    }), $.facebox({div: "#js-add-billing-contact-info-modal"}), !1
}), $(document).on("click", ".js-close-facebox", function () {
    $(document).trigger("close.facebox")
}), $(document).on("click", ".js-plan-change", function (a) {
    var b = $(this).closest("tr").attr("data-name");
    $.facebox({div: this.hash});
    var c = $("#facebox");
    return c.find(".js-new-plan-name-val").val(b), c.find(".js-new-plan-name").text(b), c.find(".js-new-plan-card-on-file").toggle(b !== "free"), c.find(".js-new-plan-free").toggle(b == "free"), a.stopImmediatePropagation(), !1
}), $(document).on("ajaxSuccess", "#facebox .js-coupon-form",function (a, b) {
    $("#facebox .content").html(b.responseText), $(document).one("close.facebox", function () {
        window.location.reload()
    })
}).on("ajaxError", "#facebox .js-coupon-form", function (a, b) {
    return $("#facebox .content").html(b.responseText), !1
}), function () {
    var a, b, c, d, e, f, g, h;
    c = function (a) {
        var b, c, d, e, f;
        if (c = a.match(/\#?(?:L|-)(\d+)/gi)) {
            f = [];
            for (d = 0, e = c.length; d < e; d++)b = c[d], f.push(parseInt(b.replace(/\D/g, "")));
            return f
        }
        return[]
    }, a = function (a) {
        a.sort(h);
        switch (a.length) {
            case 1:
                return"#L" + a[0];
            case 2:
                return"#L" + a[0] + "-L" + a[1];
            default:
                return"#"
        }
    }, h = function (a, b) {
        return a - b
    }, g = !1, b = function (a) {
        var b, c, d;
        c = $(".line, .line-data");
        if (!c.length)return;
        c.css("background-color", "");
        if (a.length === 1)return $("#LC" + a[0]).css("background-color", "#ffc");
        if (a.length > 1) {
            b = a[0], d = [];
            while (b <= a[1])$("#LC" + b).css("background-color", "#ffc"), d.push(b++);
            return d
        }
    }, f = function (a) {
        var d;
        return a == null && (a = c(window.location.hash)), b(a), !g && (d = $("#LC" + a[0])).length && $(window).scrollTop(d.offset().top - $(window).height() * .33), g = !1
    }, $(window).on("hashchange", function () {
        return f()
    }), $(function () {
        return setTimeout(function () {
            return f()
        }, 0)
    }), d = function (a) {
        var b, c;
        return g = !0, b = (c = $(window).scrollTop()) != null ? c : 0, a(), $(window).scrollTop(b)
    }, $(document).on("mousedown", ".line-number, .line_numbers > span[rel]", function (b) {
        var e, f;
        return f = c($(this).attr("rel")), b.shiftKey && (e = c(window.location.hash), f.unshift(e[0])), d(function () {
            return window.location.hash = a(f)
        }), !1
    }), $(document).on("reveal.facebox", function () {
        var a, b;
        a = $("#facebox"), b = a.find(".js-jump-to-line-field"), b.focus(), a.find(".js-jump-to-line-form").on("submit", function () {
            var a;
            return a = parseInt(b.val().replace(/\D/g, "")), a && (window.location.hash = "L" + a), b.blur(), $(document).trigger("close.facebox"), !1
        })
    }), $(document).on("click", ".highlight-ctags a.ctag-relative", function (b) {
        var d;
        return(d = c($(this).attr("href"))).length && (window.location.hash = a(d)), !1
    }), e = !1, $(document).on("click", ".js-ctags-lookup-results a.js-slide-to,                         .js-ctags-search-results a.js-slide-to", function (a) {
        return e = !0
    }), $.pageUpdate(function () {
        if (e)return f(), e = !1
    })
}.call(this), function () {
    var a, b, c, d;
    c = !1, a = null, $.pageUpdate(function () {
        if (c)return setTimeout(function () {
            var a;
            if ((a = $("#highlight-ctags-enabled")).length)return a.prop("checked", !0).change()
        }, 100)
    }), d = function (b, c) {
        var e, f;
        return c == null && (c = 1e3), a ? b(a) : (e = $("#highlight-ctags-enabled"), f = $(".highlight-ctags").addClass("ctags-loading"), $.ajax({url: e.data("list-url"), dataType: "json", success: function (e) {
            var g = this;
            if (e.tags)return a = e.tags, b(a), f.removeClass("ctags-loading");
            if (e.generating)return c < 6e4 ? (c *= 1.5, setTimeout(function () {
                return d(b, c)
            }, c)) : f.removeClass("ctags-loading")
        }, error: function () {
            return f.removeClass("ctags-loading")
        }}))
    }, b = function () {
        var a = this;
        return d(function (a) {
            var b, c, d, e, f;
            c = [], f = $(".highlight .line > span.n, .highlight .line > span.no");
            for (d = 0, e = f.length; d < e; d++)b = f[d], a[b.innerText] && (b.children.length ? a[b.innerText] > 1 && (b.innerHTML = b.innerText, c.push(b)) : c.push(b));
            return $(c).addClass("valid-ctag")
        })
    }, $(document).on("click", ".highlight-ctags .popover", function (a) {
        return!1
    }), $(document).on("click", ".highlight-ctags", function (a) {
        var b;
        if ((b = $(".highlight-ctags .visible-ctag")).length)return b.removeClass("visible-ctag").popover("destroy"), $(".highlight-ctags .popover").remove(), !1
    }), $(document).on("click", ".highlight-ctags span.valid-ctag", function (b) {
        var c, d, e, f;
        if ((d = $(".highlight-ctags .visible-ctag")).length) {
            d.removeClass("visible-ctag").popover("destroy"), $(".highlight-ctags .popover").remove();
            if (d[0] === b.target)return!1
        }
        return d = $(b.target), d.addClass("visible-ctag"), c = $("#highlight-ctags-enabled"), f = b.target.innerText, e = d.offset().left + d.width() > $(window).width() * .5 ? "left" : "right", d.popover({html: !0, content: "<div class='loading'><img align='absmiddle' src='" + GitHub.Ajax.spinner + "' height='16'/>      Loading " + (a && a[f] || "") + " definitions</div>", placement: e}).popover("show"), $.ajax({url: c.data("lookup-url") + escape(f), data: {path: c.data("path"), line: d.parents("div.line:first").attr("id").slice(2)}, dataType: "html", success: function (a) {
            return d.popover({html: !0, content: a, placement: e}).popover("show"), $(".popover .js-navigation-container").pageUpdate().navigation("focus")
        }}), !1
    }), $(document).on("change", "input#highlight-ctags-enabled", function (a) {
        var d;
        return d = $(".js-blob-data td > .highlight"), (c = $(a.target).is(":checked")) ? (d.addClass("highlight-ctags"), b()) : d.removeClass("highlight-ctags")
    }), $(document).on("keydown", function (a) {
        var b;
        if ($(a.target).is("input, textarea"))return!0;
        if (a.hotkey === "f" && (b = $("#highlight-ctags-enabled")).length)return b.prop("checked", !b[0].checked).change(), !1
    })
}.call(this), function () {
    var a, b;
    b = function (a) {
        var b, c, d, e, f, g;
        return e = a.find(".js-new-blob-filename"), f = !e[0] || e.val() !== e.attr("data-default-value"), g = a.find(".js-check-for-fork").is(":visible"), d = $(".js-blob-contents")[0], c = d.value !== d.defaultValue, b = c || $(d).attr("data-allow-unchanged"), a.find(".js-blob-submit").prop("disabled", !f || g || !b)
    }, $.pageUpdate(function () {
        var a;
        if (!(a = $(this).find(".js-blob-contents")[0]))return;
        return b($(a).closest("form"))
    }), $(document).on("change", ".js-blob-contents", function () {
        return b($(this).closest("form"))
    }), $(document).on("click", ".js-new-blob-submit", function () {
        return $(this).closest("form.js-new-blob-form").submit()
    }), $(document).onFocusedInput(".js-new-blob-filename", function () {
        var a, c, d, e;
        return d = $(this).closest("form"), a = d.find(".js-new-blob-commit-summary"), c = d.find(".js-blob-contents"), e = $(".js-gitignore-template"), function () {
            var f, g;
            return f = $(this).val(), c.attr("data-filename", f), g = f ? "Create " + f : "Create new file", a.attr("placeholder", g), b(d), /^(.+\/)?\.gitignore$/.test(f) ? e.addClass("is-visible") : e.removeClass("is-visible")
        }
    }), $(document).onFocusedInput(".js-new-blob-commit-summary", function () {
        var a;
        return a = $(this).closest(".js-file-commit-form"), function () {
            return a.toggleClass("is-too-long-error", $(this).val().length > 50)
        }
    }), a = function (a) {
        var c;
        if (a.data("checking-for-fork"))return;
        return c = a.closest("form"), b(c), $.ajaxPoll({interval: 2, url: a.attr("data-check-url"), success: function () {
            return a.hide(), b(c)
        }, error: function (b) {
            return b.status === 404 ? this.resume() : a.html("<img src='/images/modules/ajax/error.png'>\nSomething went wrong. Please fork the project, then try from your fork.")
        }}), a.data("checking-for-fork", !0)
    }, $.pageUpdate(function () {
        var b, c, d, e;
        e = $(".js-check-for-fork");
        for (c = 0, d = e.length; c < d; c++)b = e[c], a($(b))
    }), $(document).on("change", ".js-gitignore-template input[type=radio]", function () {
        return $.ajax({type: "GET", url: $(this).attr("data-template-url"), success: function (a) {
            return editor.setCode(a)
        }})
    })
}.call(this), function () {
    $(document).on("click", ".js-branch-toggle", function () {
        return $(".js-branches-content").toggleClass("showing-unmerged"), $(".js-branches-content").toggleClass("showing-merged"), !1
    }), $(document).on("ajaxSend", ".js-branch-delete", function () {
        return $(this).addClass("disabled"), $(this).prev(".spinner").css("visibility", "visible")
    }), $(document).on("ajaxSuccess", ".js-branch-delete", function (a, b, c, d) {
        return $(this).closest("tr").fadeOut(), !1
    }), $(document).on("ajaxError", ".js-branch-delete", function (a, b, c, d) {
        return $(this).prev(".spinner").css("visibility", "hidden"), $(this).html("Couldn't delete!"), !1
    }), $(function () {
        var a, b, c, d;
        return b = 2, a = 7, d = 30, c = 1e4, $(".diverge-widget").each(function () {
            var c, e, f;
            return c = $(this), e = new Date(c.attr("last-updated")), f = (new Date - e) / 1e3 / 3600 / 24, f <= b ? c.addClass("hot") : f <= a ? c.addClass("fresh") : f <= d ? c.addClass("stale") : c.addClass("old")
        })
    })
}.call(this), function () {
    $.pageUpdate(function () {
        var a, b;
        if (!(a = document.getElementById("diff-comment-data")))return;
        if ($(a).data("commit-inline-comments-rendered"))return;
        return b = {}, $("#files.diff-view > .file > .meta").each(function () {
            return b[$(this).attr("data-path")] = this
        }), $("#diff-comment-data > table").each(function () {
            var a, c, d, e;
            return c = $(this).attr("data-path"), d = $(this).attr("data-position"), a = $(b[c]).closest(".file"), e = a.find(".data table tr[data-position='" + d + "']"), e.after($(this).find("tr").detach()), a.addClass("has-inline-notes show-inline-notes")
        }), $("#diff-comment-data > div").each(function () {
            var a;
            return a = $(this).attr("data-path"), $(b[a]).closest(".file").find(".file-comments-place-holder").replaceWith($(this).detach())
        }), $(a).data("commit-inline-comments-rendered", !0)
    }), $(document).on("change", ".js-show-inline-comments-toggle", function () {
        return $(this).closest(".file").toggleClass("show-inline-notes", this.checked)
    }), $(document).on("keyup", function (a) {
        var b;
        if (a.hotkey === "i" && !$(a.target).is(":input"))return b = $(".js-show-inline-comments-toggle:not(:checked)").length === 0, $(".js-show-inline-comments-toggle").prop("checked", !b).trigger("change")
    }), $(document).on("change", "#js-inline-comments-toggle", function () {
        return $("#comments").toggleClass("only-commit-comments", !this.checked)
    }), $(document).on("click", ".linkable-line-number", function () {
        return document.location.hash = this.id, !1
    })
}.call(this), function () {
    $(document).on("navigation:open", ".commit-group-item", function () {
        return $(this).find(".commit-title > a:first").simulateClick(), !1
    }), $(document).on("navigation:keydown", ".commit-group-item", function (a) {
        if (a.hotkey === "c")return $(this).find(".commit-title > a:first").simulateClick(), !1
    }), $.support.pjax && $(document).on("click", ".js-pjax-commit-title > a.message", function (a) {
        $.pjax.click(a, $(this).closest("[data-pjax-container]"))
    })
}.call(this), $(function () {
    if (!$(document.body).hasClass("page-compare"))return!1;
    var a = $("#compare").data("base"), b = $("#compare").data("head"), c = null;
    $(".compare-range .commit-ref.to").click(function () {
        return c = "end", $.facebox({div: "#compare_chooser"}), !1
    }), $(".compare-range .commit-ref.from").click(function () {
        return c = "start", $.facebox({div: "#compare_chooser"}), !1
    });
    var d = function () {
        var d = $("#facebox .ref-autocompleter"), e = $("#facebox button.choose-end"), f = $("#facebox button.refresh");
        d.val(c == "start" ? a : b), $("#facebox .mode-upper").text($.capitalize(c)), $("#facebox .mode-lower").text(c), c == "start" ? e.show() : e.hide()
    }, e = function () {
        var e = $("#facebox .ref-autocompleter");
        if (e.length == 0)return;
        var f = $("#facebox .commit-preview-holder"), g = $("#facebox button.refresh"), h = $(".compare-range").attr("url-base");
        d(), g.click(function () {
            return c == "start" ? a = e.val() : b = e.val(), $(document).trigger("close.facebox"), document.location = h + a + "..." + b, !1
        }), e.click(function () {
            return this.focus(), this.select(), !1
        });
        var i = !1, j = null, k = function () {
            i && j.abort(), i = !0, j = $.get(f.attr("url_base") + e.val(), null, function (a) {
                a.length > 0 && (f.html(a), f.find("a").attr("target", "_blank"), f.pageUpdate()), i = !1
            })
        };
        k();
        var l = e.val(), m = null, n = function () {
            if (l != e.val() || m == e.val()) {
                l = e.val();
                return
            }
            k(), m = e.val()
        };
        e.keyup(function () {
            l = this.value, setTimeout(n, 1e3)
        }), e.click()
    };
    $(document).bind("reveal.facebox", e), a == b && $(".compare-range .commit-ref.from").click();
    var f = window.location.hash.substr(1);
    (/^diff-/.test(f) || /^L\d+/.test(f)) && $("li a[href='#files_bucket']").click()
}), function () {
    var a;
    a = function (a) {
        var b;
        return a == null && (a = document.location.search.substr(1)), b = {}, $.each(a.split("&"), function (a, c) {
            var d, e, f;
            return f = c.split("="), d = f[0], e = f[1], b[d] = decodeURIComponent(e.replace(/\+/g, " "))
        }), b
    }, $(document).on("navigation:open", ".ctags-search-result", function (a) {
        return $(".js-ctags-search-form input.query").attr("placeholder", $.trim($(this).find(".name > .full").text())), $(this).find("a").simulateClick()
    }), $(document).on("click", ".js-ctags-search-results a.filter-item", function (b) {
        var c, d;
        return d = a(this.href.split("?", 2)[1] || ""), c = $(".js-ctags-search-form"), c.find("input[name=l]").val(d.l), c.find("input[name=k]").val(d.k), c.submit(), !1
    }), $(document).on("submit", "form.js-ctags-search-form[data-ajax]", function (a) {
        var b, c;
        c = $(this);
        if (b = $(".js-ctags-search-results[data-ajax-container]")[0])return c.addClass("pjax-active"), $.ajax({url: c.attr("action"), data: c.serialize()}).always(function () {
            return c.removeClass("pjax-active")
        }).done(function (a, c) {
            if (c === "success")return b.innerHTML = a, $(b).pageUpdate()
        }), !1
    }), $(document).on("focusin", ".js-ctags-search-form input.query", function (a) {
        var b, c;
        return b = $(this), b.on("blur.ctags", function () {
            return b.off(".ctags")
        }), c = null, b.on("input.ctags", function (a) {
            return c && clearTimeout(c), c = setTimeout(function () {
                return b.closest("form").submit()
            }, 150)
        }), b.on("keydown.ctags", function (a) {
            return a.hotkey === "esc" && (history.back(), a.preventDefault()), !0
        })
    }), $.pageUpdate(function () {
        var a, b, c, d, e, f, g;
        $(".js-ctags-search-results .js-navigation-container").navigation("focus"), g = $(".js-ctags-search-results .ctags-search-result");
        for (e = 0, f = g.length; e < f; e++)a = g[e], d = $(a), c = d.width() - d.find(".name").width() - 10, d.find(".link").css("max-width", "" + c + "px");
        b = $(".js-ctags-search-form"), b.find("input.query").attr("placeholder", "Search definitions...").focus(), b.find("input.query:focus").length || b.find("input.query").focus();
        if ($(".js-ctags-search-generating").length)return setTimeout(function () {
            return b.submit()
        }, 5e3)
    })
}.call(this), $(function () {
    $("#your_repos").repoList({selector: "#repo_listing", ajaxUrl: "/dashboard/ajax_your_repos"}), $("#watched_repos").repoList({selector: "#watched_repo_listing", ajaxUrl: "/dashboard/ajax_watched_repos"});
    if ($("#org_your_repos").length > 0) {
        var a = location.pathname;
        a[a.length - 1] == "/" && (a = a.slice(0, a.length - 1)), $("#org_your_repos").repoList({selector: "#repo_listing", ajaxUrl: a + "/ajax_your_repos"})
    }
}), function () {
    var a, b, c;
    c = function (a) {
        return a.status === 500 ? "Oops, something went wrong." : a.responseText
    }, a = 0, $(document).on("ajaxSend", ".js-cleanup-pull-request", function () {
        return $(this).removeClass("error"), $(this).addClass("disabled"), $(this).find(".minibutton").addClass("disabled")
    }), $(document).on("ajaxComplete", ".js-cleanup-pull-request", function () {
        return $(this).removeClass("disabled"), $(this).find(".minibutton").removeClass("disabled"), $(this).find(".delete-warning").hide()
    }), $(document).on("ajaxSuccess", ".js-cleanup-pull-request", function (b, c, d, e) {
        return $(this).find(".message").html(c.responseText), a === 1 ? a = 0 : ($(this).find(".mergeable").removeClass("merging").addClass("deleted"), $(this).find(".minibutton").hide())
    }), $(document).on("ajaxError", ".js-cleanup-pull-request", function (a, b) {
        return $(this).addClass("error"), $(this).find(".js-cleanup-error-message").html(c(b)), !1
    }), b = function (a, b) {
        var d;
        d = $(document).find(".js-head-ref-pull-request").show().find(".message");
        if (b)return d.html(c(b))
    }, $(document).on("ajaxSend", ".js-restore-head-ref", function () {
        return $(this).hide(), $(this).next().show(), b(this)
    }), $(document).on("ajaxSuccess", ".js-restore-head-ref", function (c, d, e, f) {
        var g, h, i, j;
        return b(this, d), j = $(this), j.parent().hide(), i = j.closest(".mergeable"), i.removeClass("deleted"), h = j.closest(".merge-branch"), h.hasClass("mergeable-dirty") || i.addClass("merging"), g = i.find(".minibutton"), g.show().removeClass("disabled"), a = 1, !0
    }), $(document).on("ajaxError", ".js-restore-head-ref", function (a, c) {
        return b(this, c), !1
    })
}.call(this), function () {
    var a;
    $(function () {
        var a;
        a = $(".mini-nav, .repo-container .menu");
        if (a.length)return $.each(a, function (a, b) {
            return new FastClick(b)
        })
    }), $(document).on("click", ".js-directory-link", function (a) {
        if (a.which === 2 || a.metaKey || a.ctrlKey)return;
        return $(this).closest("tr").addClass("is-loading")
    }), $(document).on("focusin", ".js-url-field", function () {
        var a;
        return a = this, setTimeout(function () {
            return $(a).select()
        }, 0)
    }), $(document).on("click", ".js-repo-home-link, .js-repository-container-pjax a", function (a) {
        var b, c;
        if ($(this).hasClass("js-disable-pjax"))return;
        return c = !1, b = $(".repo-container"), $.pjax.click(a, {container: b, scrollTo: c})
    }), a = function () {
        var a;
        if ($(".kill-the-chrome").length === 0)return;
        $(".mini-nav .selected").removeClass("selected"), a = $(this).find(".repo-container"), a.length === 0 && $(this).hasClass("repo-container") && (a = $(this));
        if (a.length === 0)return;
        return $(".repository-with-sidebar").length > 0 ? ($(".mini-nav").hide(), a.addClass("with-custom-nav")) : ($(".mini-nav").show(), a.removeClass("with-custom-nav"))
    }, $(document).ready(a), $(document).on("pjax:end", a)
}.call(this), function () {
    var a, b, c;
    c = null, $(document).on("ajaxBeforeSend", ".js-discussion-update", function (a, b) {
        c = b
    }), $(document).on("ajaxSuccess", ".js-discussion-update", function (a, c, d, e) {
        b(e)
    }), $(document).on("ajaxComplete", ".js-discussion-update", function () {
        c = null
    }), $(document).on("socket:channel:message", ".js-comment-channel", function () {
        if (c)return;
        return c = $.ajax({url: $(this).attr("data-url"), beforeSend: function (a) {
            var b;
            if (b = $("#js-discussion-last-modified").attr("datetime"))return a.setRequestHeader("X-Discussion-Last-Modified", b)
        }, success: function (a) {
            if (a)return b(a)
        }, complete: function () {
            return c = null
        }})
    }), b = function (b) {
        var c, d, e, f;
        return d = function () {
            var a, c, d, e, f, g, h;
            b.discussionStats != null && $(".discussion-stats").html(b.discussionStats), b.discussionLabels != null && $(".discussion-labels").html(b.discussionLabels), b.discussion != null && $(".js-discussion").append(b.discussion), b.formActionBar != null && $(".js-new-comment-form .action-bar").html(b.formActionBar), b.formActions != null && $(".js-new-comment-form .form-actions").html(b.formActions), c = $("#js-pull-merging .merge-form"), b.merging != null && (!c.is(":visible") || c.is(".disabled")) && $("#js-pull-merging").html(b.merging), b.pullHead != null && $("#pull-head").html(b.pullHead);
            if (b.changedStatuses != null) {
                g = b.changedStatuses;
                for (e = 0, f = g.length; e < f; e++)h = g[e], d = h[0], a = h[1], $(d).replaceWith(a)
            }
            return $(".js-new-comment-form .js-comment-field").trigger("validation:field:change"), $("#discussion_bucket").pageUpdate(), $("#show_issue").pageUpdate()
        }, c = $(".js-discussion").next(), f = $(document.activeElement).is("textarea"), e = c.offset().top < a, f || e ? c.preservingScrollPosition(d) : d()
    }, a = 0, $(function () {
        if (!$(".js-discussion-update").length)return;
        return $(document).on("mousemove", function (b) {
            return a = b.pageY
        })
    })
}.call(this), function () {
    $(document).on("click", ".js-zen-mode", function () {
        return $(document.body).hasClass("zen") ? ($(document.body).removeClass("zen"), $(document).off("keydown.zenMode")) : ($(document.body).addClass("zen"), $(document).on("keydown.zenMode", function (a) {
            if (a.hotkey === "esc")return $(document.body).removeClass("zen"), !1
        })), !1
    })
}.call(this), function () {
    $(function () {
        var a, b;
        a = $("#issues_list");
        if (!a.length)return;
        return b = function () {
            return $.pjax.reload(a)
        }, a.on("navigation:keydown", ".js-issues-list .js-list-browser-item", function (a) {
            if (a.hotkey === "x")return $(this).click().trigger("change")
        }), a.selectableList(".js-selectable-issues", {wrapperSelector: "", itemParentSelector: ".js-list-browser-item", enableShiftSelect: !0, ignoreLinks: !0}), a.on("click", ".milestone-context .pane-selector .milestone", function () {
            var a;
            return a = $(this), a.closest(".milestone-context").attr("data-selected-milestone", a.attr("data-milestone")), a.menu("deactivate")
        }), a.selectableList(".js-issue-sidebar .js-color-label-list"), a.on("click", ".js-editable-labels-container .js-manage-labels", function () {
            var a, b, c, d;
            return a = $(this), b = a.closest(".js-editable-labels-container"), d = b.find(".js-editable-labels-show"), c = b.find(".js-editable-labels-edit"), d.is(":visible") ? (d.hide(), c.show(), a.addClass("selected"), $(document).on("keydown.manage-labels", function (b) {
                if (b.keyCode === 27)return a.click()
            })) : (c.hide(), d.show(), a.removeClass("selected"), $(document).off("keydown.manage-labels")), !1
        }), a.on("ajaxSuccess", ".js-color-label-delete", function () {
            return $(this).closest(".label").hide()
        }), a.selectableList(".js-color-chooser", {wrapperSelector: ".js-color-cooser-color", mutuallyExclusive: !0}), a.on("click", ".js-custom-color-field a", function () {
            var a;
            return a = $(this).closest(".js-custom-color-field"), a.find(".field").show(), !1
        }), a.on("textchange", ".js-custom-color-field input[type=text]", function (a, b) {
            var c;
            if (b.length === 6)return c = $(this).closest(".js-custom-color-field"), c.find(".field").find("input[type=radio]").val(b).prop("checked", "checked"), c.find("a").html("Custom color: <strong>#" + b + "</strong>")
        }), a.on("focusin", ".js-new-label-form .js-label-field", function () {
            return $(this).closest(".js-new-label-form").find(".js-color-chooser-fade-in").fadeIn(300)
        }), a.on("change", ".select-toggle", function () {
            var b;
            return b = a.find(".js-list-browser-item.selected").length, a.find(".issues-list-actions .js-buttons").toggleClass("activated", b).toggleClass("deactivated"
                , !b)
        }), a.find(":checked").removeProp("checked"), a.on("click", ".js-issues-list-close", function () {
            var c;
            return $.ajax({type: "PUT", url: $(this).attr("data-url"), data: {issues: function () {
                var b, d, e, f;
                e = a.find(".js-issues-list :checked"), f = [];
                for (b = 0, d = e.length; b < d; b++)c = e[b], f.push($(c).val());
                return f
            }()}, success: b}), !1
        }), a.selectableList(".js-color-label-context .js-color-label-list"), a.on("click", ".js-color-label-context .color-label-list", function (a) {
            return a.preventDefault()
        }), a.on("click", ".js-issues-list .btn-label", function () {
            var b, c, d, e, f, g, h;
            d = a.find(".js-issues-list :checked").closest(".js-list-browser-item").find(".label"), c = a.find(".js-color-label-context"), c.find(".label a.selected").removeClass("selected"), c.find(":checked").prop("checked", !1), h = [];
            for (f = 0, g = d.length; f < g; f++)b = d[f], e = $(b).attr("data-name"), c.find(".label[data-name='" + e + "'] a").addClass("selected"), h.push(c.find(".label[data-name='" + e + "'] :checkbox").prop("checked", !0));
            return h
        }), a.on("click", ".js-color-label-context button.update-labels", function () {
            var c;
            return $(this).menu("deactivate"), $.ajax({url: a.find(".js-color-label-context ul.color-label-list").attr("data-url"), type: "PUT", data: {labels: function () {
                var b, d, e, f;
                e = a.find(".js-color-label-context ul.color-label-list :checked"), f = [];
                for (b = 0, d = e.length; b < d; b++)c = e[b], f.push($(c).val());
                return f
            }(), issues: function () {
                var b, d, e, f;
                e = a.find(".js-issues-list :checked"), f = [];
                for (b = 0, d = e.length; b < d; b++)c = e[b], f.push($(c).val());
                return f
            }()}, complete: b})
        }), a.on("change", ".assignee-assignment-context :radio", function (c) {
            var d, e;
            return e = $(c.target).closest(".assignee-assignment-context").find(":checked"), $.ajax({type: "PUT", url: e.attr("data-url"), data: {assignee: e.val(), issues: function () {
                var b, c, e, f;
                e = a.find(".js-issues-list :checked"), f = [];
                for (b = 0, c = e.length; b < c; b++)d = e[b], f.push($(d).val());
                return f
            }()}, success: b})
        }), a.pageUpdate(function () {
            var c;
            return c = a.find(".js-filterable-milestones").milestoneSelector(), c.off(".milestoneSelector"), c.on("beforeAssignment.milestoneSelector", function () {
                var b, c;
                return c = function () {
                    var c, d, e, f;
                    e = a.find(".js-issues-list :checked"), f = [];
                    for (c = 0, d = e.length; c < d; c++)b = e[c], f.push($(b).val());
                    return f
                }(), $(this).attr("data-issue-numbers", c.join(","))
            }), c.on("afterAssignment.milestoneSelector", b)
        }), a.pageUpdate()
    })
}.call(this), $(function () {
    var a = $("#js-new-issue-form");
    if (a.length == 0)return;
    $(a).on("click", ".js-composer-labels", function (a) {
        a.preventDefault()
    }), a.selectableList("ul.color-label-list");
    var b = a.find(".js-infobar .milestone .text"), c = a.find(".js-filterable-milestones").milestoneSelector();
    c.bind("afterAssignment.milestoneSelector", function () {
        c.menu("deactivate");
        var a = c.find(".selected");
        a.hasClass("clear") ? b.html("No milestone") : a.hasClass("new-milestone-item") ? b.html("Milestone: <strong>" + a.find("p").html()) : b.html("Milestone: <strong>" + a.find("h4").html())
    })
}), $(function () {
    var a = $("#show_issue");
    if (a.length == 0)return;
    a.find(".assignee-context").on("change", "input[type=radio]", function () {
        $(this).closest("form").submit()
    }), a.find(".js-filterable-milestones").milestoneSelector(), $(a).on("keydown", "#label-filter-field", function (a) {
        if (a.hotkey === "enter")return!1
    }), $(a).on("change", ".js-autosubmitting-labels input[type=checkbox]", function () {
        var a = $(this).closest("form");
        $.post(a.attr("action"), a.serialize(), function (a) {
            $(".discussion-labels > .color-label-list").html(a.labels)
        }, "json")
    }), $(a).on("click", ".js-autosubmitting-labels .color-label-list ", function (a) {
        a.preventDefault()
    }), a.selectableList(".js-selectable-labels")
}), function () {
    $(function () {
        var a;
        if ($(".js-leaving-form")[0])return a = function () {
            var a;
            return a = new WufooForm, a.initialize({userName: "github", formHash: "q7x4a9", autoResize: !0, height: "504", ssl: !0}), $(".js-leaving-form").html(a.generateFrameMarkup())
        }, function () {
            var b, c;
            return b = document.location.protocol === "https:" ? "https://secure." : "http://", c = "" + b + "wufoo.com/scripts/embed/form.js", $.getScript(c, a)
        }()
    })
}.call(this), function () {
    $(document).on("ajaxSuccess", ".js-milestones-assign, .js-milestones-unassign", function () {
        return window.location.reload()
    })
}.call(this), DateInput.prototype.resetDate = function () {
    $(".date_selector .selected").removeClass("selected"), this.changeInput("")
}, $(function () {
    $("input.js-date-input").each(function () {
        var a = new DateInput(this);
        a.hide = $.noop, a.show(), $(this).hide(), $(".date_selector").addClass("no_shadow")
    }), $("label.js-date-input a").click(function (a) {
        var b = $("input.js-date-input").data("datePicker");
        return b.resetDate(), !1
    })
}), function () {
    var a;
    a = function (a) {
        var b;
        if ($(a).is(".read"))return;
        return $(a).toggleClass("unread read"), b = $(a).closest(".js-notifications-browser").find(".js-notifications-unreadcount"), b.text(b.text() - 1)
    }, $(document).on("click", ".js-notification-target", function () {
        return a($(this).closest(".js-notification"))
    }), $(document).on("ajaxSuccess", ".js-delete-notification", function () {
        return a($(this).closest(".js-notification"))
    }), $(document).on("ajaxSuccess", ".js-mute-notification", function () {
        var b;
        return a($(this).closest(".js-notification")), b = $(this).closest(".js-notification"), b.is(".muted") ? this.action = this.action.replace("unmute", "mute") : this.action = this.action.replace("mute", "unmute"), b.toggleClass("muted")
    }), $(document).on("ajaxSuccess", ".js-mark-visible-as-read", function () {
        var a;
        return a = $(this).closest(".js-notifications-browser"), a.find(".unread").toggleClass("unread read"), a.find(".js-notifications-unreadcount").text(0), a.find(".js-mark-as-read-confirmation").show()
    }), $(document).on("navigation:keydown", ".js-notification", function (a) {
        var b;
        switch (a.hotkey) {
            case"I":
            case"e":
            case"y":
                return $(this).find(".js-delete-notification").submit(), !1;
            case"M":
                return $(this).find(".js-mute-notification").submit(), !1;
            case"o":
            case"enter":
                return b = $(this).find(".js-notification-target"), b.click(), window.location = b.attr("href"), !1
        }
    }), $(document).on("ajaxBeforeSend", ".js-notifications-subscription", function () {
        return $(this).find(".js-spinner").show()
    }), $(document).on("ajaxComplete", ".js-notifications-subscription", function () {
        return $(this).find(".js-spinner").hide()
    })
}.call(this), function () {
    $(document).on("focusin", "#organization_login", function () {
        var a;
        return a = $(this).closest("dd").find(".js-field-hint-name"), $(this).on("input.organizationLogin", function () {
            return a.text($(this).val())
        }), $(this).on("blur.organizationLogin", function () {
            return $(this).off(".organizationLogin")
        })
    }), $(function () {
        var a;
        if (!(a = document.getElementById("organization-transforming")))return;
        return $.ajaxPoll({url: $(a).attr("data-url"), success: function (a, b, c) {
            if (c.status === 201)return window.location = "/login"
        }})
    })
}.call(this), function () {
    $(document).on("ajaxSend", ".js-merge-pull-request", function () {
        return $(this).removeClass("error"), $(this).addClass("disabled"), $(this).find(".minibutton").addClass("disabled")
    }), $(document).on("ajaxComplete", ".js-merge-pull-request", function () {
        return $(this).removeClass("disabled"), $(this).find(".minibutton").removeClass("disabled")
    }), $(document).on("ajaxError", ".js-merge-pull-request", function (a, b) {
        return $(this).addClass("error"), $(this).find(".js-merge-error-message").text(b.responseText), !1
    })
}.call(this), function () {
    $(function () {
        var a, b, c;
        return $(document.body).hasClass("page-pullrequest") ? (b = $(".discussion-timeline"), b.find(".assignee-context").on("change", "input[type=radio]", function () {
            return $(this).closest("form").submit()
        }), b.find(".js-filterable-milestones").milestoneSelector(), a = window.location.hash, a.match(/#[\w-]+/) && (c = $(a).closest(".js-details-container").find(".js-details-target")[1], $(c).trigger("click")), $(".js-details-container .discussion-anchor-link").on("click", function () {
            return c = $(this).closest(".js-details-container").not(".open").find(".js-details-target")[1], $(c).trigger("click")
        }), $(".js-add-comment").on("click", function () {
            var a;
            return a = $(this).attr("href"), $(a).find("*[tabindex=1]").focus()
        })) : !1
    }), $(document).on("ajaxSuccess", ".js-inline-comment-form", function () {
    }), $(this).closest("#discussion_bucket").length ? $("#files_bucket").remove() : $("#discussion_bucket").remove(), $(document).on("socket:channel:message", ".js-pull-request-tabs", function () {
        var a = this;
        return $.ajax({url: $(this).attr("data-url"), data: {live_update: "tabs"}, success: function (b) {
            return debug("live_update for tabs"), a = $(a), $($.parseHTML(b)).find(".js-live-update-replace").map(function (b, c) {
                var d;
                return d = $(c), a.find("#" + d.attr("id")).html(d.html())
            })
        }})
    }), $(document).on("socket:channel:message", ".js-pull-request-commits-tab", function () {
        var a = this;
        return $.ajax({url: $(this).attr("data-url"), data: {live_update: "commits"}, success: function (b) {
            return debug("live_update for commits tab"), $(a).html(b).pageUpdate()
        }})
    }), $(document).on("socket:channel:message", ".js-pull-request-stale-files", function () {
        var a = this;
        return $.ajax({url: $(this).attr("data-url"), data: {live_update: "stale_files"}, success: function (b) {
            return debug("live_update for stale_files"), $(a).replaceWith(b)
        }})
    })
}.call(this), function () {
    var a, b;
    $(document).on("click", ".js-new-pull-tab", function () {
        return $(this).closest(".js-pull-tabs").find("a").removeClass("selected"), $(this).addClass("selected"), $("#preview_discussion_bucket, #discussion_bucket, #commits_bucket, #files_bucket").hide(), $(this.hash).show(), !1
    }), a = function (a) {
        var b, c, d, e;
        e = a.elements;
        for (c = 0, d = e.length; c < d; c++) {
            b = e[c];
            if (!b.name || b.defaultValue == null)continue;
            if (b.value !== b.defaultValue)return!0
        }
        return!1
    }, b = function (a) {
        return $(a.relatedTarget).is(".js-pull-range-target")
    }, $(document).on("pjax:beforeSend", "#js-repo-pjax-container", function (c) {
        var d, e;
        if (b(c)) {
            e = c.relatedTarget, $(e).menu("deactivate"), d = $(this).find("form")[0];
            if (d && a(d))return d.action = e.href, d.noValidate = !0, $(d).submit(), !1
        }
    }), $(document).on("pjax:send", "#js-repo-pjax-container", function (a) {
        if (b(a))return $(this).find(".pull-heading").addClass("loading")
    }), $(document).on("pjax:timeout", "#js-repo-pjax-container", function (a) {
        if (b(a))return!1
    })
}.call(this), function () {
    $(function () {
        if (!$(".js-create-branch").length)return;
        return $(document).on("menu:deactivate", ".js-branch-menu", function () {
            return $(".js-create-ref").removeClass("is-enabled")
        }), $(document).on("navigation:open", ".js-create-branch", function () {
            return $(this).submit()
        })
    }), $(function () {
        if (!$(".js-create-tag").length)return;
        return $(document).on("navigation:open", ".js-create-tag", function () {
            var a, b, c, d, e, f;
            return b = $(this), d = $(".js-select-button"), c = $(".js-spinner"), a = $(".js-error"), e = $(".js-new-item-submit").val(), f = $(".js-create-tag").attr("data-url"), d.text("Creating tag..."), c.show(), a.hide(), $.ajax({url: f, type: "POST", data: {tag_name: e}, success: function () {
                var a, c;
                d.text(e), c = b.closest(".select-menu-list").find(".select-menu-item-template");
                if (c.length)return a = c.clone().removeClass("select-menu-item-template").addClass("selected"), a.insertBefore(c), a.find(".js-select-button-text").text(e)
            }, complete: function () {
                return c.hide()
            }, error: function () {
                return a.show(), d.text("No tag selected")
            }}), !1
        })
    })
}.call(this), function () {
    $.pageUpdate(function () {
        var a, b;
        if (!(a = $("#repo_details")[0]))return;
        b = !window.location.pathname.match(/\/(blob|find)\//), $(a).toggle(b), $(".pagehead ul.tabs").toggleClass("with-details-box", b)
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a() {
            this.validate = b(this.validate, this), this.updateUpsell = b(this.updateUpsell, this), this.selectedPrivacyToggleElement = b(this.selectedPrivacyToggleElement, this), this.handlePrivacyChange = b(this.handlePrivacyChange, this), this.handleOwnerChange = b(this.handleOwnerChange, this);
            var a = this;
            this.elements = {ownerContainer: $(".js-owner-container"), iconPreviewPublic: $(".js-icon-preview-public"), iconPreviewPrivate: $(".js-icon-preview-private"), upgradeUpsell: $("#js-upgrade-container").hide(), upgradeConfirmationCheckbox: $(".js-confirm-upgrade"), upsells: $(".js-upgrade"), upsellCardsSelect: $(".cards_select"), privacyToggles: $(".js-privacy-toggle"), privateRadio: $(".js-privacy-toggle[value=false]"), publicRadio: $(".js-privacy-toggle[value=true]"), repoNameField: $("input[type=text].js-repo-name"), form: $("#new_repository"), ignoreContainer: $(".js-ignore-container"), autoInitCheckbox: $(".js-auto-init-checkbox"), teamBoxes: $(".js-team-select"), suggestion: $(".js-reponame-suggestion")}, this.current_login = $("input[name=owner]:checked").prop("value"), this.privateRepo = !1, this.autocheckURL = this.elements.repoNameField.attr("data-autocheck-url"), this.changedPrivacyManually = !1, this.elements.teamBoxes.hide(), this.elements.ignoreContainer.on("change", "input[type=radio]", function () {
                return $(".js-auto-init-checkbox").prop("checked", !0)
            }), this.elements.ownerContainer.on("change", "input[type=radio]", this.handleOwnerChange), this.elements.privacyToggles.on("change", function (b) {
                return a.handlePrivacyChange(b.targetElement, b)
            }), this.elements.repoNameField.on("textchange", function (b) {
                return $(b.target).removeClass("is-autocheck-successful"), a.validate()
            }), this.elements.upgradeUpsell.on("change textchange", "input", this.validate), this.elements.form.on("repoform:validate", this.validate), this.elements.suggestion.on("click", function (b) {
                var c;
                return c = a.elements.repoNameField, c.val($(b.target).text()), c.trigger("focusout")
            }), this.handleOwnerChange(), this.updateUpsell(), this.validate()
        }

        return a.prototype.handleOwnerChange = function () {
            var a, b, c;
            return this.current_login = $("input[name=owner]:checked").prop("value"), b = "" + this.autocheckURL + "?owner=" + encodeURIComponent(this.current_login), this.elements.repoNameField.attr("data-autocheck-url", b), this.elements.repoNameField.trigger("focusout"), c = this.elements.ownerContainer.find(".select-menu-item.selected"), this.elements.teamBoxes.hide().find("input, select").prop("disabled", !0), a = this.elements.teamBoxes.filter("[data-login=" + this.current_login + "]"), a.show().find("input, select").prop("disabled", !1), this.changedPrivacyManually || (c.attr("data-default") === "private" ? this.elements.privateRadio.prop("checked", "checked").change() : this.elements.publicRadio.prop("checked", "checked").change()), this.handlePrivacyChange(), c.attr("data-permission") === "yes" ? ($(".with-permission-fields").show(), $(".without-permission-fields").hide()) : ($(".with-permission-fields").hide(), $(".without-permission-fields").show()), this.updateUpsell()
        }, a.prototype.handlePrivacyChange = function (a, b) {
            return a == null && (a = this.selectedPrivacyToggleElement()), b == null && (b = null), b && !b.isTrigger && (this.changedPrivacyManually = !0), a.val() === "false" ? (this.privateRepo = !0, this.elements.upgradeUpsell.show(), this.elements.upgradeUpsell.find("input[type=checkbox]").prop("checked", "checked"), this.elements.iconPreviewPublic.hide(), this.elements.iconPreviewPrivate.show(), this.elements.upgradeUpsell.find(".js-cc-upgrade").length ? this.elements.form.attr("action", this.elements.form.attr("data-tr-url")) : this.elements.form.attr("action", this.elements.form.attr("data-url")), this.elements.upsellCardsSelect.cardsSelect()) : (this.privateRepo = !1, this.elements.upgradeUpsell.hide(), this.elements.upgradeUpsell.find("input[type=checkbox]").prop("checked", null), this.elements.form.attr("action", this.elements.form.attr("data-url")), this.elements.iconPreviewPrivate.hide(), this.elements.iconPreviewPublic.show()), this.validate()
        }, a.prototype.selectedPrivacyToggleElement = function () {
            return this.elements.privateRadio.is(":checked") ? this.elements.privateRadio : this.elements.publicRadio
        }, a.prototype.updateUpsell = function () {
            var a;
            return a = this.elements.upsells.filter("[data-login=" + this.current_login + "]"), this.elements.upgradeUpsell.html(a), this.elements.upgradeUpsell.find(".js-cc-upgrade").length && this.elements.privateRadio.is(":checked") ? this.elements.form.attr("action", this.elements.form.attr("data-tr-url")) : this.elements.form.attr("action", this.elements.form.attr("data-url"))
        }, a.prototype.validate = function () {
            var a, b, c;
            return a = this.elements.form, c = !0, this.elements.repoNameField.is(".is-autocheck-successful") || (c = !1), a.find("dl.form.errored").length && (c = !1), a.find(".is-autocheck-loading").length && (c = !1), b = this.elements.upgradeUpsell.find("input[type=checkbox]"), this.privateRepo && b.length && !b.is(":checked") && (c = !1), $("button.primary").prop("disabled", !c)
        }, a
    }(), $(function () {
        if (!$(".page-new-repo").length)return;
        return new a
    }), $(document).on("autocheck:send", "#repository_name", function () {
        return $(this).trigger("repoform:validate")
    }), $(document).on("autocheck:complete", "#repository_name", function () {
        return $(this).trigger("repoform:validate")
    }), $(document).on("autocheck:success", "#repository_name", function (a, b) {
        var c, d, e;
        d = $(this).val();
        if (d && d !== b.name)return c = $(this).closest("dl.form"), c.addClass("warn"), e = $("<dd>").addClass("warning").text("Will be created as " + b.name), c.append(e)
    }), $(document).on("menu:activated", ".js-ignore-container", function () {
        var a, b;
        a = $(this).find(".js-menu-content"), b = a.overflowOffset();
        if (b.bottom <= -10)return a.css({marginTop: b.bottom - 20})
    })
}.call(this), function () {
    var a, b;
    $(document).on("ajaxSend", ".js-restore-repository", function () {
        return $(this).find(".minibutton").addClass("disabled")
    }), $(document).on("ajaxComplete", ".js-restore-repository", function (c, d) {
        var e, f;
        return e = $(this), e.addClass("error"), f = d.status === 500 ? "Oops, something went wrong." : (b(e), d.responseText), a(e, f), !1
    }), a = function (a, b) {
        return a.find(".js-message").show().html(b)
    }, b = function (b) {
        return $.ajaxPoll({interval: 2, url: b.attr("data-check-url"), complete: function (c) {
            console.log("POLL COMPLETE"), console.log(c);
            if (c.status === 500)return a(b, "Oops, something went wrong.");
            a(b, c.responseText);
            if (c.status === !1)return this.resume()
        }})
    }
}.call(this), function () {
    $.support.pjax && $(document).on("submit", ".js-stars-search", function (a) {
        var b;
        if (b = $(this).closest("[data-pjax-container]")[0])return $.pjax.submit(a, {container: b})
    }), $(document).on("focusin", "#star-repo-search", function () {
        return $(this).on("input.clearSearch", function () {
            return $(this).closest(".js-stars-search").toggleClass("has-search-value", $(this).val() !== "")
        }), $(this).on("blur.clearSearch", function () {
            return $(this).off(".clearSearch")
        })
    }), $(document).on("click", ".js-clear-search", function () {
        return $("#star-repo-search").val("").focus(), $(this).closest(".js-stars-search").removeClass("has-search-value"), !1
    })
}.call(this), function () {
    $(function () {
        var a;
        if ($(".js-styleguide-ace")[0])return a = new GitHub.CodeEditor(".js-styleguide-ace"), $(".js-styleguide-themes").change(function () {
            return a.setTheme($(this).find(":selected").val())
        })
    })
}.call(this), GitHub.Team = function (a) {
    this.url = window.location.pathname, this.orgUrl = this.url.split(/\/(teams|invite)/)[0], a && (this.url = this.orgUrl + "/teams/" + a)
}, GitHub.Team.prototype = {name: function () {
    return $("#team-name").val()
}, newRecord: function () {
    return!/\/invite/.test(location.pathname) && !/\d/.test(location.pathname)
}, repos: function () {
    return $.makeArray($(".repositories li:visible a span").map(function () {
        return $(this).text()
    }))
}, addRepo: function (a, b) {
    debug("Adding repo %s", a);
    if (!a || $.inArray(a, this.repos()) > -1)return!1;
    this.addRepoAjax(a);
    var c = $(".repositories").find("li:first").clone(), d = c.find("input[type=hidden]");
    return c.find("a:first").attr("href", "/" + a).find("span").text(a), c.find(".remove-repository").attr("data-repo", a), b === "private" ? (c.addClass("private"), c.find("span.mini-icon").removeClass("mini-icon-public-repo").addClass("mini-icon-private-repo")) : (c.addClass("public"), c.find("span.mini-icon").addClass("mini-icon-public-repo")), d.length > 0 && d.val(a).attr("disabled", !1), $(".repositories").append(c.show()), !0
}, addRepoAjax: function (a) {
    if (this.newRecord())return;
    debug("Ajaxily adding %s", a), $.post(this.url + "/repo/" + a)
}, removeRepo: function (a) {
    debug("Removing %s", a);
    if (!a || $.inArray(a, this.repos()) == -1)return!1;
    var b = $(".repositories li:visible a").filter(function () {
        return $(this).find("span").text() == a
    }), c = function () {
        b.parents("li:first").remove()
    }, d = function () {
        b.parent().find(".remove-repository").show().removeClass("remove").html('<img class="dingus" src="/images/modules/ajax/error.png">').end().find(".spinner").hide()
    };
    return this.newRecord() ? c() : (b.parent().find(".remove-repository").after('<img class="dingus spinner" src="/images/spinners/octocat-spinner-64.gif" width="32" />').hide(), this.removeRepoAjax(a, c, d)), !0
}, removeRepoAjax: function (a, b, c) {
    if (this.newRecord())return;
    debug("Ajaxily removing %s", a), $.ajax({type: "DELETE", url: this.url + "/repo/" + a, success: b, error: c})
}, users: function () {
    return $.makeArray($(".usernames li:visible").map(function () {
        return $(this).find("a:first").text()
    }))
}, addUser: function (a) {
    debug("Adding %s", a);
    if (!a || $.inArray(a, this.users()) > -1)return!1;
    this.addUserAjax(a);
    var b = $(".usernames").find("li:first").clone(), c = b.find("input[type=hidden]");
    return b.find("img").attr("src", "/" + a + ".png"), b.find("a:first").attr("href", "/" + a).text(a), c.length > 0 && c.val(a).attr("disabled", !1), $(".usernames").append(b.show()), !0
}, removeUser: function (a) {
    debug("Removing %s", a);
    if (!a || $.inArray(a, this.users()) == -1)return!1;
    var b = $(".usernames li:visible a:contains(" + a + ")"), c = function () {
        b.parents("li:first").remove()
    };
    return this.newRecord() ? c() : (b.parent().find(".remove-user").spin().remove(), $("#spinner").addClass("remove"), this.removeUserAjax(a, c)), !0
}, addUserAjax: function (a) {
    if (this.newRecord())return;
    debug("Ajaxily adding %s", a), $.post(this.url + "/member/" + a)
}, removeUserAjax: function (a, b) {
    if (this.newRecord())return;
    debug("Ajaxily removing %s", a), $.ajax({type: "DELETE", url: this.url + "/member/" + a, success: b})
}}, $(function () {
    if (!$(".js-team")[0])return;
    var a = new GitHub.Team($(".js-team").data("team")), b = $(".add-username-form input"), c = $(".add-repository-form input"), d = $(".add-username-form button"), e = $(".add-repository-form button"), f = null;
    b.on("autocomplete:search", function (a) {
        f && f.abort();
        var b = $(this).val();
        if (b === "") {
            $("#add-user-autocomplete ul").empty(), $("#add-user-autocomplete").trigger("autocomplete:change");
            return
        }
        f = $.ajax({type: "GET", data: {q: b, limit: 10}, url: "/autocomplete/users", dataType: "html", success: function (a) {
            f = null, $("#add-user-autocomplete ul").html(a), $("#add-user-autocomplete").trigger("autocomplete:change")
        }})
    }), b.on("autocomplete:autocompleted:changed", function (a) {
        b.attr("data-autocompleted") ? d.removeAttr("disabled") : d.attr("disabled", "disabled")
    }), c.on("autocomplete:search", function () {
        f && f.abort();
        var b = $(this).val();
        if (b === "") {
            $("#add-repo-autocomplete ul").empty(), $("#add-repo-autocomplete").trigger("autocomplete:change");
            return
        }
        f = $.ajax({type: "GET", data: {q: b, limit: 10}, url: a.orgUrl + "/autocomplete/repos", dataType: "html", success: function (a) {
            f = null, $("#add-repo-autocomplete ul").html(a), $("#add-repo-autocomplete").trigger("autocomplete:change")
        }})
    }), c.on("autocomplete:autocompleted:changed", function (a) {
        c.attr("data-autocompleted") ? e.removeAttr("disabled") : e.attr("disabled", "disabled")
    }), $(document).on("click", ".remove-repository", function () {
        return a.removeRepo($(this).attr("data-repo")), !1
    }), $(document).on("click", ".remove-user", function () {
        return a.removeUser($(this).prev().text()), !1
    }), $(".add-username-form button").click(function () {
        var b = $(this).parent(), c = b.find(":text"), d = c.val();
        return debug("Trying to add %s...", d), !d || !c.attr("data-autocompleted") ? !1 : (c.val(""), a.addUser(d), !1)
    }), $(".js-team").on("submit", function (a) {
        var b = $(document.activeElement);
        if (b.is(".add-username-form input"))return b.closest(".add-username-form").find("button").click(), !1
    });
    var g, h = function () {
        g = $(this).attr("data-visibility")
    };
    $("#add-repo-autocomplete").on("navigation:open", "[data-autocomplete-value]", h), $("#add-repo-autocomplete").on("click", "[data-autocomplete-value]", h), $(".add-repository-form button").click(function () {
        var b = $(this).parent(), c = b.find(":text"), d = c.val();
        return debug("Trying to add %s...", d), !d || !c.attr("data-autocompleted") ? !1 : (c.val(""), a.addRepo(d, g), !1)
    }), $(".js-team").on("submit", function (a) {
        var b = $(document.activeElement);
        if (b.is(".add-repository-form input"))return b.closest(".add-repository-form").find("button").click(), !1
    })
}), function () {
    $.pageUpdate(function () {
        var a;
        if (!(a = document.getElementById("read_more")))return;
        return $(a).toggle($("#slider #readme").length !== 0)
    })
}.call(this), function () {
    var a, b;
    $.pageUpdate(function () {
        var a;
        if (!(a = document.getElementById("slider")))return;
        return setTimeout(function () {
            var b;
            if (b = $(a).find(".js-tree-finder-field")[0]) {
                b.blur();
                if ($(b).is(":visible"))return b.focus()
            }
        }, 0)
    }), $.pageUpdate(function () {
        var b, c, d, e;
        e = $(this).find(".js-tree-finder-field");
        for (c = 0, d = e.length; c < d; c++)b = e[c], a(b)
    }), b = null, a = function (c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p;
        if (!(l = document.getElementById($(c).attr("data-results"))))return;
        if (!(g = $(l).data("tree-finder-list"))) {
            b == null && (b = $.ajax({url: $(l).attr("data-url"), cache: !0, success: function (b) {
                return $(l).data("tree-finder-list", b.paths), a(c)
            }, complete: function () {
                return b = null
            }}));
            return
        }
        m = $(l).find(".js-tree-browser-result-template").html(), j = $(l).find(".js-tree-finder-results"), d == null && (d = $(c).val()), d ? (h = $.fuzzyRegexp(d), k = $.fuzzySort(g, d)) : k = g, k = k.slice(0, 50), e = function () {
            var a, b, c;
            c = [];
            for (a = 0, b = k.length; a < b; a++)f = k[a], c.push(m.replace(/\$path/g, encodeURI(f)));
            return c
        }(), j.html(e.join()), p = j.find(".tree-browser-result a");
        for (n = 0, o = p.length; n < o; n++)i = p[n], $.fuzzyHighlight(i, d, h);
        j.navigation("focus")
    }, $(document).on("focusin", ".js-tree-finder-field", function () {
        return a(this), $(this).on("throttled:input.treeFinder", function () {
            return a(this)
        }), $(this).on("keydown.treeFinder", function (a) {
            if (a.hotkey === "esc")return history.back(), a.preventDefault()
        }), $(this).on("blur.treeFinder", function () {
            return $(this).off(".treeFinder")
        })
    })
}.call(this), function () {
    var a, b, c, d, e, f, g, h, i, j, k = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    if (!Modernizr.history)return;
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/))return;
    a = function () {
        function a() {
            this.popStateHandler = k(this.popStateHandler, this), this.clickHandler = k(this.clickHandler, this)
        }

        return a.prototype.cache = {}, a.prototype.clickHandler = function (a) {
            var b, e;
            if (a.which === 2 || a.metaKey || a.ctrlKey)return;
            a.preventDefault();
            if (c)return;
            e = a.currentTarget.href;
            if (e === window.location.href)return;
            this.state || (this.state = {id: (new Date).getTime() - 1, direction: "forward", url: window.location.href}, window.history.replaceState(this.state, "")), this.cache[this.state.id] = $("#slider").clone()[0], b = $(a.currentTarget).attr("data-direction") || "forward", this.state = {id: (new Date).getTime(), direction: b, url: e}, window.history.pushState(this.state, "", e), typeof _gaq != "undefined" && _gaq !== null && _gaq.push(["_trackPageview"]), d(this.state, this.cache[this.state.id], this.state.direction)
        }, a.prototype.popStateHandler = function (a) {
            var b;
            if (!(b = a.state))return;
            if (!document.getElementById("slider"))return;
            if (b != null ? b.id : void 0)return this.state && this.stateTransition(this.state, b), this.state = b
        }, a.prototype.stateTransition = function (a, b) {
            var c;
            return a.id < b.id ? c = b.direction : c = a.direction === "forward" ? "back" : "forward", this.cache[a.id] = $("#slider").clone()[0], d(b, this.cache[b.id], c)
        }, a
    }(), i = new a, $(document).on("click", "#slider .js-slide-to", i.clickHandler), $(window).on("popstate", i.popStateHandler), $.pageUpdate(function () {
        var a, b, c, d, e, f;
        if (!(b = $(this).find(".frames")[0]))return;
        a = $(b).find(".frame")[0];
        if (e = $(a).attr("data-title"))document.title = e;
        (f = $(a).attr("data-permalink-url")) && $("link[rel=permalink]").attr("href", f), d = Math.min($(window).height(), $(a).height()), c = Math.max(d, $(b).height()), $(b).css("min-height", c)
    }), c = !1, g = function (a, b, d, e) {
        var f, g;
        if (c)return;
        return c = !0, g = 400, f = function () {
            return c = !1, $(b).siblings().remove(), typeof e == "function" ? e() : void 0
        }, d === "back" ? ($(b).css("marginLeft", "-1200px"), $(a).before(b), $(b).animate({marginLeft: "0"}, g, f)) : ($(b).css("marginLeft", "0"), $(a).after(b), $(a).animate({marginLeft: "-1200px"}, g, f))
    }, h = function (a, b, c, d) {
        var e, h, i, j, k, l, m = this;
        return i = $("#js-frame-loading-template").clone().show(), l = c === "back" ? 350 : 500, j = i.find(".js-frame-loading-spinner").hide(), setTimeout(function () {
            return j.show()
        }, l), k = 2, h = null, e = function () {
            if (--k === 0)return d(i, h)
        }, $.ajax({url: "" + b.url + "?slide=1", cache: !0, beforeSend: function (a) {
            return a.setRequestHeader("X-PJAX", "true")
        }, success: function (a) {
            return h = $($.parseHTML(a)).filter("#slider")[0], e()
        }, error: function () {
            return $(a).html("<h3>Something went wrong.</h3>")
        }}), g(a, i[0], c, e), f()
    }, d = function (a, c, d) {
        var f;
        return f = b($("#slider")), c ? e(f, c, d) : h(f, a, d, e)
    }, e = function (a, c, d) {
        var e, f, h;
        return h = $("#slider"), e = $(b(c)).clone()[0], (f = $(c).find(".frame-meta")[0]) && h.find(".frame-meta").replaceWith(f), d ? g(a, e, d, function () {
            return h.pageUpdate()
        }) : ($(a).replaceWith(e), h.pageUpdate())
    }, b = function (a) {
        var b;
        b = $(a).find(".frames > .frame");
        if (b.length === 1)return b[0];
        throw b.length > 1 ? "multiple frames" : "no frames"
    }, f = function () {
        if (!j(".breadcrumb:visible"))return $(".breadcrumb:visible").scrollTo({duration: 50})
    }, j = function (a) {
        var b, c, d, e;
        return c = $(window).scrollTop(), b = c + $(window).height(), e = $(a).offset().top, d = e + $(a).height(), d >= c && e <= b
    }
}.call(this), function () {
    $(document).on("click", ".js-toggle-recovery", function (a) {
        return $(".recovery-codes").toggleClass("is-hidden"), $('form[action="/sessions/two_factor"]').toggleClass("is-hidden")
    })
}.call(this), $(document).on("click", "#facebox .rename-warning button", function () {
    return $("#facebox .rename-warning, #facebox .rename-form").toggle(), !1
}), $.pageUpdate(function () {
    $(".js-repo-filter").repoList()
}), function () {
    $(function () {
        var a;
        return $("#load-readme").click(function () {
            var b, c, d, e, f, g;
            return c = $("#gollum-editor-body"), b = $("#editor-body-buffer"), e = $("#undo-load-readme"), g = b.text(), a(c, b), d = $(this), d.prop("disabled", !0), d.text(d.data("readme-name") + " loaded"), e.show(), f = function () {
                return $(this).val() !== g && e.hide(), c.off("change keyup", f)
            }, c.on("change keyup", f), !1
        }), $("#undo-load-readme").click(function () {
            var b;
            return a($("#gollum-editor-body"), $("#editor-body-buffer")), b = $("#load-readme"), b.prop("disabled", !1), b.text("Load " + b.data("readme-name")), $(this).hide(), !1
        }), a = function (a, b) {
            var c, d, e;
            return c = $(a), d = $(b), e = c.val(), c.val(d.text()), d.text(e)
        }
    })
}.call(this), $(document).on("click", ".ajax_paginate a", function () {
    var a = $(this).parent(".ajax_paginate"), b = a.parent();
    return a.hasClass("loading") ? !1 : (a.addClass("loading"), $.ajax({url: $(this).attr("href"), complete: function () {
        a.removeClass("loading")
    }, success: function (c) {
        a.replaceWith(c), b.pageUpdate()
    }}), !1)
}), function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    if (!Modernizr.canvas)return;
    GitHub.ParticipationGraph = function () {
        function b(b) {
            this.onSuccess = a(this.onSuccess, this);
            var c, d, e, f, g, h, i;
            this.el = $(b), this.canvas = b.getContext("2d"), e = window.devicePixelRatio || 1, d = this.canvas.webkitBackingStorePixelRatio || this.canvas.mozBackingStorePixelRatio || this.canvas.msBackingStorePixelRatio || this.canvas.oBackingStorePixelRatio || this.canvas.backingStorePixelRatio || 1, h = e / d, h !== 1 && (i = b.width, f = b.height, b.width = i * h, b.height = f * h, b.style.width = i + "px", b.style.height = f + "px", this.canvas.scale(h, h)), c = this.el.data("color-all"), g = this.el.data("color-owner"), c != null && (this.colors.all = c), g != null && (this.colors.owner = g), this.barMaxHeight = this.el.height(), this.barWidth = (this.el.width() - 52) / 52, this.refresh()
        }

        return b.prototype.colors = {all: "#cacaca", owner: "#336699"}, b.prototype.getUrl = function () {
            return this.el.data("source")
        }, b.prototype.setData = function (a) {
            var b, c;
            this.data = a;
            if (((b = this.data) != null ? b.all : void 0) == null || ((c = this.data) != null ? c.owner : void 0) == null)this.data = null;
            this.scale = this.getScale(this.data)
        }, b.prototype.getScale = function (a) {
            var b, c, d, e, f;
            if (a == null)return;
            b = a.all[0], f = a.all;
            for (d = 0, e = f.length; d < e; d++)c = f[d], c > b && (b = c);
            return b >= this.barMaxHeight ? (this.barMaxHeight - .1) / b : 1
        }, b.prototype.refresh = function () {
            $.ajax({url: this.getUrl(), dataType: "json", success: this.onSuccess})
        }, b.prototype.onSuccess = function (a) {
            this.setData(a), this.draw()
        }, b.prototype.draw = function () {
            if (this.data == null)return;
            this.drawCommits(this.data.all, this.colors.all), this.drawCommits(this.data.owner, this.colors.owner)
        }, b.prototype.drawCommits = function (a, b) {
            var c, d, e, f, g, h, i, j;
            for (e = i = 0, j = a.length; i < j; e = ++i)c = a[e], f = this.barWidth, d = c * this.scale, g = e * (this.barWidth + 1), h = this.barMaxHeight - d, this.canvas.fillStyle = b, this.canvas.fillRect(g, h, f, d)
        }, b
    }(), $(document).pageUpdate(function () {
        return $(this).find(".participation-graph").each(function () {
            if ($(this).is(":hidden"))return $(this).removeClass("disabled"), new GitHub.ParticipationGraph($(this).find("canvas")[0])
        })
    })
}.call(this), $(function () {
    var a = $("table.billing-plans"), b = a.find("tr.selected .choose_plan"), c = a.find("tr.current"), d = $("#plan"), e = $("#credit_card_fields"), f = function (b) {
        var c = b;
        a.find("tr.selected, tr.selected .choose_plan").removeClass("selected"), b.addClass("selected"), b.find(".choose_plan").addClass("selected"), d.val(c.attr("data-name")), requiredFields = e.find("input[required]"), c.attr("data-cost") == 0 ? (e.hide(), requiredFields.attr("required", !1)) : (e.show(), requiredFields.attr("required", !0
        ))
    };
    $(document).on("click", ".choose_plan", function (a) {
        return f($(this).closest("tr")), !1
    }), $(".selected .choose_plan").click()
}), function () {
    $.pageUpdate(function () {
        var a, b, c, d;
        b = $(".js-plaxify");
        if (b.length > 0) {
            for (c = 0, d = b.length; c < d; c++)a = b[c], $(a).plaxify({xRange: $(a).data("xrange") || 0, yRange: $(a).data("yrange") || 0, invert: $(a).data("invert") || !1});
            return $.plax.enable()
        }
    })
}.call(this), function () {
    var a, b, c, d, e;
    $(document).on("click", ".js-releases-field a.remove", function (a) {
        var b;
        return b = $(this).closest("li"), b.addClass("delete"), b.find("input.destroy").val("true"), !1
    }), $(document).on("click", ".js-releases-field a.undo", function (a) {
        var b;
        return b = $(this).closest("li"), b.removeClass("delete"), b.find("input.destroy").val(""), !1
    }), b = ["is-default", "is-saving", "is-saved", "is-failed"], c = function (a, c) {
        return a.removeClass(b.join(" ")), a.addClass(c), c === "is-saving" ? a.attr("disabled", "disabled") : a.removeAttr("disabled")
    }, $(document).on("click", ".js-save-draft", function (a, b) {
        var d, e, f, g, h, i;
        return $("#release_draft").val("1"), d = $(this), g = d.closest("form"), f = $("#delete_release_confirm form"), h = g.data("repo-url"), i = g.attr("action"), e = g.serialize(), c(d, "is-saving"), $.ajax({url: i, type: "POST", data: e, dataType: "json", success: function (a) {
            var e, i;
            e = "" + h + "/releases/" + a.tag_name, g.attr("action", e), f.attr("action", e), window.history.replaceState(null, document.title, "" + e + "/edit"), i = $("#release_id"), i.val() || (i.val(a.id), g.append('<input type="hidden" id="release_method" name="_method" value="put" />')), c(d, "is-saved"), setTimeout(function () {
                return c(d, "is-default")
            }, 5e3);
            if (b)return b()
        }, complete: function () {
        }, error: function (a) {
            return c(d, "is-failed")
        }}), a.preventDefault()
    }), $(document).on("click", ".js-publish-release", function (a) {
        return $("#release_draft").val("0")
    }), e = ["is-loading", "is-empty", "is-valid", "is-invalid", "is-duplicate", "is-pending"], d = function (a) {
        var b;
        return b = $(".js-release-tag"), b.removeClass(e.join(" ")), b.addClass(a)
    }, a = function (a) {
        if (!a.val())return;
        return d("is-loading"), $.ajax({url: a.attr("data-url"), type: "GET", data: {tag_name: a.val()}, dataType: "json", success: function (b) {
            if (b.status === "duplicate" && parseInt(a.attr("data-existing-id")) === parseInt(b.release_id)) {
                d("is-valid");
                return
            }
            return $(".js-release-tag .js-edit-release-link").attr("href", b.url), d("is-" + b.status)
        }, error: function (a) {
            return d("is-invalid")
        }})
    }, $(document).on("blur", ".js-release-tag-field", function (b) {
        return a($(this))
    }), $(function () {
        return a($(".js-release-tag-field"))
    })
}.call(this), function () {
    $(function () {
        var a, b;
        return a = /[^0-9A-Za-z_\.]/g, b = $(".js-form-note"), $("input.js-repository-name").on("keyup", function (c) {
            var d;
            d = $(this), b.html("Will be created as <code>" + d.val().replace(a, "-") + "</code>");
            if (a.test(d.val())) {
                if (b.is(":hidden"))return b.fadeIn()
            } else if (!d.val())return b.fadeOut()
        })
    })
}.call(this), function () {
    $(document).on("click", ".js-toggle-lang-stats", function (a) {
        var b, c;
        return $(".js-stats-switcher-viewport").toggleClass("is-revealing-lang-stats"), c = $(this).attr("original-title"), b = "", c.match("Show") ? b = c.replace("Show", "Hide") : b = c.replace("Hide", "Show"), $(".js-toggle-lang-stats").attr("title", b), $(this).trigger("mouseover"), a.preventDefault()
    })
}.call(this), function () {
    $(function () {
        if ($(".js-user-filter").length)return $(".js-user-filter").click(function (a) {
            a.preventDefault();
            if ($(this).hasClass("selected"))return;
            $(".js-user-filter").removeClass("selected"), $("img.avatar").removeClass("almost-hidden"), $(this).addClass("selected");
            if ($(this).attr("rel") === "owners")return $("img.avatar.member").addClass("almost-hidden");
            if ($(this).attr("rel") === "members")return $("img.avatar.owner").addClass("almost-hidden")
        })
    })
}.call(this), function () {
    $(function () {
        if ($(".js-settings-next").length === 0)return!1;
        $("#page-settings").on("click", ".js-add-email", function (a) {
            return $(this).toggle(), $("#add-email-form").fadeIn(200).find(":text").focus(), !1
        }), $("#page-settings").on("click", ".js-add-email-cancel", function (a) {
            return $(".js-add-email").toggle(), $("#add-email-form").hide().find(":text").val(""), !1
        }), $(document).on("click", ".js-notification-global-toggle", function (a) {
            var b, c, d;
            return d = $(this).attr("data-url"), b = this.checked, c = {}, c[this.name] = b ? "1" : "0", $.ajax({url: $(this).attr("data-url"), type: "PUT", data: c, success: function () {
                return b ? $(this).parent("p").removeClass("ignored") : $(this).parent("p").addClass("ignored")
            }})
        }), $(document).on("change", ".js-notifications-settings input[type=checkbox]", function (a) {
            var b;
            return b = $(this), b.parents("li").append('<img class="spinner" src="' + GitHub.Ajax.spinner + '" width="16" />'), $.ajax({url: b.parents(".js-notifications-settings").attr("data-toggle-url"), type: "POST", data: b.parents(".js-notifications-settings").serialize(), complete: function () {
                return b.parents("li").find("img").remove()
            }})
        }), $(document).on("click", "button.dummy", function (a) {
            return $(this).prev(".success").show().fadeOut(500), !1
        }), $(document).on("ajaxSend", ".js-remove-item", function (a) {
            return $(this).spin().hide()
        }), $(document).on("ajaxComplete", ".js-remove-item", function (a) {
            return $(this).parents("li").stopSpin()
        }), $(document).on("ajaxSuccess", ".js-remove-item", function (a) {
            return $(this).parents("li").remove()
        }), $(document).on("ajaxSuccess", ".js-toggle-visibility", function (a, b, c, d) {
            return $("#settings-emails").children(".settings-email.primary").toggleClass("private", d.visibility === "private")
        }), $(document).on("ajaxSend", ".js-remove-key", function (a) {
            return $(this).addClass("disabled").find("span").text("Deleting…")
        }), $(document).on("ajaxError", ".js-remove-key", function (a) {
            return $(this).removeClass("disabled").find("span").text("Error. Try again.")
        }), $(document).on("ajaxSuccess", ".js-remove-key", function (a) {
            $(this).parents("li").remove();
            if ($(".js-ssh-keys-box li").length === 0)return $(".js-no-ssh-keys").show()
        }), $(document).on("click", ".js-leave-collaborated-repo", function (a) {
            var b, c, d, e;
            return c = $(a.currentTarget), d = c.parent("div").parent("div").attr("data-repo"), e = $('ul.repositories li[data-repo="' + d + '"]'), b = c.parents("div.full-button"), b.addClass("no-bg"), b.html('<img src="' + GitHub.Ajax.spinner + '" width="16" />'), $.ajax({url: "/account/leave_repo/" + d, type: "POST", success: function () {
                return $.facebox.close(), e.fadeOut()
            }, error: function () {
                return b.html('<img src="/images/modules/ajax/error.png">')
            }}), !1
        });
        if ($(".js-name-change-in-progress").length)return $.ajaxPoll({url: $(".js-name-change-in-progress").attr("data-poll-url"), dataType: "json", success: function (a) {
            return(a != null ? a.url : void 0) ? window.location = a.url : a ? this.resume() : location.reload()
        }, error: function () {
            return $(".js-name-change-in-progress").hide(), $(".js-name-change-error").show()
        }})
    }), $(document).on("ajaxSuccess", ".js-unsubscribe-from-newsletter form", function (a, b) {
        return $(".js-unsubscribe-from-newsletter .message").toggle()
    }), $(document).on("click", ".js-show-new-ssh-key-form", function () {
        return $(".js-new-ssh-key-box").toggle().find(":text").focus(), !1
    }), $.pageUpdate(function () {
        return $(this).find("dl.autosave").each(function () {
            return $(this).autosaveField()
        })
    })
}.call(this), $(function () {
    $(".plan").dblclick(function () {
        var a = $(this).find("a.button");
        a.length > 0 && (document.location = a.attr("href"))
    }), $("#signup_form").submit(function () {
        $("#signup_button").attr("disabled", !0).find("span").text("Creating your GitHub account...")
    })
}), function () {
    $(document).on("ajaxSuccess", ".js-social-container", function (a, b, c, d) {
        return $(this).find(".js-social-count").text(d.count)
    })
}.call(this), function () {
    var a, b, c, d = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    if (!Modernizr.eventsource)return;
    if (navigator.userAgent.match(/iPhone/))return;
    a = function () {
        function a(a) {
            this.base = a, this.flush = d(this.flush, this), this.onVisibilityChange = d(this.onVisibilityChange, this), this.setup = d(this.setup, this), $(document).on("webkitvisibilitychange.xhrSocket", this.onVisibilityChange), $(document).on("mozvisibilitychange.xhrSocket", this.onVisibilityChange), $(document).on("msvisibilitychange.xhrSocket", this.onVisibilityChange), $(document).on("visibilitychange.xhrSocket", this.onVisibilityChange), this.channels = [], setTimeout(this.setup, 0)
        }

        return a.prototype.setup = function () {
            var a, b, c = this;
            if (b = this.popMessages())a = {message: b};
            return $.ajax({type: "POST", url: this.base, data: a, success: function (a, b, d) {
                var e;
                return c.url = d.getResponseHeader("Location"), e = $.Event("socket:open"), $(window).trigger(e, [c]), e.isDefaultPrevented() ? c.close() : (c.flush(), c.start())
            }, error: function () {
                return c.close()
            }})
        }, a.prototype.close = function () {
            var a;
            return $(document).off(".xhrSocket"), (a = this.source) != null && a.close(), this.source = null, this.url = null, $(window).trigger("socket:close", [this])
        }, a.prototype.start = function () {
            var a = this;
            this.source = new EventSource(this.url), this.source.addEventListener("message", function (a) {
                var b;
                b = JSON.parse(a.data), debug("received", b), $(window).trigger("socket:message", [b])
            }), this.source.addEventListener("reopen", function (b) {
                var c, d, e, f;
                debug("reopen"), f = a.channels;
                for (d = 0, e = f.length; d < e; d++)c = f[d], a.send({subscribe: c})
            }), this.source.addEventListener("error", function (b) {
                a.source.readyState === EventSource.CLOSED && a.close()
            })
        }, a.prototype.onVisibilityChange = function () {
            return document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? this.send({visibility: "hidden"}) : this.send({visibility: "visible"})
        }, a.prototype.flush = function () {
            var a, b = this;
            this.flushTimeout = null;
            if (a = this.popMessages())return $.ajax({type: "POST", url: "" + this.url + "/message", data: {message: a}, error: function () {
                return b.close()
            }})
        }, a.prototype.popMessages = function () {
            var a, b, c, d, e;
            if (!this.outbox)return;
            a = this.outbox, e = this.outbox;
            for (c = 0, d = e.length; c < d; c++)b = e[c], debug("sending", b);
            return this.outbox = null, a
        }, a.prototype.send = function (a) {
            var b, c;
            (b = this.outbox) == null && (this.outbox = []), this.outbox.push(a);
            if (this.url)return(c = this.flushTimeout) != null ? c : this.flushTimeout = setTimeout(this.flush, 0)
        }, a.prototype.subscribe = function (a) {
            if (this.channels.indexOf(a) !== -1)return;
            return this.channels.push(a), this.send({subscribe: a})
        }, a
    }(), c = null, b = null, $(window).on("socket:message", function (a, c) {
        var d, e;
        e = c[0], d = c[1];
        if (!e || !d)return;
        $(b[e]).trigger("socket:channel:message", [d])
    }), $.pageUpdate(function () {
        var d, e, f, g, h, i, j, k;
        g = !1, b = {}, j = $(".js-socket-channel");
        for (h = 0, i = j.length; h < i; h++)d = j[h], g = !0, f = $(d).attr("data-channel"), (k = b[f]) == null && (b[f] = []), b[f].push(d);
        if (g) {
            if (c != null ? !c.url : !void 0)c = new a("/_sockets");
            for (f in b)e = b[f], c.subscribe(f)
        } else c != null && c.close(), c = null
    })
}.call(this), function () {
    $(function () {
        var a, b;
        if (b = $(".js-current-repository").attr("href"))return a = {path: "/", expires: 1}, $.cookie("spy_repo", b.substr(1), a), $.cookie("spy_repo_at", new Date, a)
    })
}.call(this), function () {
    $(document).on("click", ".js-approve-ssh-key", function (a) {
        var b;
        return b = $(this), b.addClass("disabled").find("span").text("Approving…"), $.ajax({url: b.attr("href"), type: "POST", success: function () {
            return b.parents("li").addClass("approved")
        }, error: function () {
            return b.removeClass("disabled").find("span").text("Error. Try Again")
        }}), !1
    }), $(document).on("click", ".js-reject-ssh-key", function (a) {
        var b;
        return b = $(this), b.addClass("disabled").find("span").text("Rejecting…"), $.ajax({url: b.attr("href"), type: "DELETE", success: function () {
            return b.parents("li").addClass("rejected")
        }, error: function () {
            return b.removeClass("disabled").find("span").text("Error. Try Again")
        }}), !1
    })
}.call(this), function () {
    $.support.pjax && !location.search && $(function () {
        var a, b, c;
        a = (c = document.getElementById("issues-dashboard")) != null ? c : document.getElementById("issues_list");
        if (b = $(a).attr("data-url"))return window.history.replaceState(null, document.title, b)
    })
}.call(this), function () {
    $(function () {
        return $(document).on("ajaxBeforeSend", ".js-auto-subscribe-toggle", function () {
            return $(this).find("label").append('<img src="' + GitHub.Ajax.spinner + '" width="16" />')
        }), $(document).on("ajaxError", ".js-auto-subscribe-toggle", function () {
            return $(this).find("label img").remove(), $(this).find("label").append('<img src="/images/modules/ajax/error.png">')
        }), $(document).on("ajaxSuccess", ".js-auto-subscribe-toggle", function () {
            return $(this).find("label img").remove()
        }), $(document).on("ajaxBeforeSend", ".js-unignore-form, .js-ignore-form", function () {
            return $(this).closest(".subscription-row").addClass("loading")
        }), $(document).on("ajaxError", ".js-unignore-form, .js-ignore-form", function () {
            return $(this).closest(".subscription-row").removeClass("loading"), $(this).find(".minibutton").addClass("danger").attr("title", "There was a problem unignoring this repo.")
        }), $(document).on("ajaxSuccess", ".js-unignore-form", function () {
            return $(this).closest(".subscription-row").removeClass("loading").addClass("unsubscribed")
        }), $(document).on("ajaxSuccess", ".js-ignore-form", function () {
            return $(this).closest(".subscription-row").removeClass("loading unsubscribed")
        }), $(document).on("ajaxBeforeSend", ".js-unsubscribe-form, .js-subscribe-form", function () {
            return $(this).closest(".subscription-row").addClass("loading")
        }), $(document).on("ajaxError", ".js-unsubscribe-form, .js-subscribe-form", function () {
            return $(this).closest(".subscription-row").removeClass("loading"), $(this).find(".minibutton").addClass("danger").attr("title", "There was a problem with unsubscribing :(")
        }), $(document).on("ajaxSuccess", ".js-unsubscribe-form", function () {
            return $(this).closest(".subscription-row").removeClass("loading").addClass("unsubscribed")
        }), $(document).on("ajaxSuccess", ".js-subscribe-form", function () {
            return $(this).closest(".subscription-row").removeClass("loading unsubscribed")
        })
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function c(a) {
            this.textarea = a, this.onNavigationOpen = b(this.onNavigationOpen, this), this.onNavigationKeyDown = b(this.onNavigationKeyDown, this), this.onKeyUp = b(this.onKeyUp, this), this.teardown = b(this.teardown, this), $(this.textarea).on("focusout:delayed.suggester", this.teardown), $(this.textarea).on("keyup.suggester", this.onKeyUp), this.suggester = document.getElementById($(this.textarea).attr("data-suggester")), $(this.suggester).on("navigation:keydown.suggester", "[data-value]", this.onNavigationKeyDown), $(this.suggester).on("navigation:open.suggester", "[data-value]", this.onNavigationOpen), this.loadSuggestions()
        }

        var a;
        return c.prototype.types = {mention: {search: "fuzzy", limit: 5, className: "mention-suggestions", match: /(^|\s)@([a-z0-9\-_\/]*)$/i, replace: "$1@$value "}, emoji: {search: "prefix", limit: 5, className: "emoji-suggestions", match: /(^|\s):([a-z0-9\-\+_]*)$/i, replace: "$1:$value: "}, hashed: {search: "fuzzy-hashed", limit: 5, className: "hashed-suggestions", match: /(^|\s)\#([a-z0-9\-_\/]*)$/i, replace: "$1#$value "}}, a = function (a) {
            var b, c;
            if (((b = a.match(/`{3,}/g)) != null ? b.length : void 0) % 2)return!0;
            if (((c = a.match(/`/g)) != null ? c.length : void 0) % 2)return!0
        }, c.prototype.teardown = function () {
            this.deactivate(), $(this.textarea).off(".suggester"), $(this.suggester).off(".suggester")
        }, c.prototype.onKeyUp = function () {
            if (this.checkQuery())return!1
        }, c.prototype.onNavigationKeyDown = function (a) {
            switch (a.hotkey) {
                case"tab":
                    return this.onNavigationOpen(a), !1;
                case"esc":
                    return this.deactivate(), !1
            }
        }, c.prototype.onNavigationOpen = function (a) {
            var b, c, d;
            return d = $(a.target).attr("data-value"), c = this.textarea.value.substring(0, this.textarea.selectionEnd), b = this.textarea.value.substring(this.textarea.selectionEnd), c = c.replace(this.type.match, this.type.replace.replace("$value", d)), this.textarea.value = c + b, this.deactivate(), this.textarea.focus(), this.textarea.selectionStart = c.length, this.textarea.selectionEnd = c.length, !1
        }, c.prototype.checkQuery = function () {
            var a, b, c;
            c = this.searchQuery(), b = c[0], a = c[1];
            if (b != null && a != null) {
                if (a === this.query)return;
                return this.type = b, this.query = a, this.search(b, a) ? this.activate() : this.deactivate(), this.query
            }
            this.type = this.query = null, this.deactivate()
        }, c.prototype.activate = function () {
            if ($(this.suggester).is(".active"))return;
            $(this.suggester).addClass("active"), $(this.suggester).css($(this.textarea).textareaSelectionPosition()), $(this.textarea).addClass("js-navigation-enable"), $(this.suggester).navigation("push"), $(this.suggester).navigation("focus")
        }, c.prototype.deactivate = function () {
            $(this.suggester).removeClass("active"), $(this.suggester).find(".suggestions").hide(), $(this.textarea).removeClass("js-navigation-enable"), $(this.suggester).navigation("pop")
        }, c.prototype.search = function (a, b) {
            var c, d;
            c = $(this.suggester).find("ul." + a.className);
            if (!c[0])return;
            return d = function () {
                switch (a.search) {
                    case"fuzzy-hashed":
                        return c.fuzzyFilterSortList("#" + b, {limit: a.limit});
                    case"fuzzy":
                        return c.fuzzyFilterSortList(b, {limit: a.limit});
                    default:
                        return c.prefixFilterList(b, {limit: a.limit})
                }
            }(), d > 0 ? (c.show(), $(this.suggester).navigation("focus"), !0) : !1
        }, c.prototype.searchQuery = function () {
            var b, c, d, e, f;
            d = this.textarea.value.substring(0, this.textarea.selectionEnd);
            if (a(d))return[];
            f = this.types;
            for (c in f) {
                e = f[c];
                if (b = d.match(e.match))return[e, b[2]]
            }
            return[]
        }, c.prototype.loadSuggestions = function () {
            var a = this;
            if ($(this.suggester).children().length)return;
            return $.ajax({url: $(this.suggester).attr("data-url"), success: function (b) {
                return $(a.suggester).html(b), a.type = a.query = null, a.checkQuery()
            }})
        }, c
    }(), $(document).on("focusin:delayed", "textarea[data-suggester]", function () {
        new a(this)
    })
}.call(this), $(function () {
    $(".remove-team").click(function () {
        if (!confirm("Are you POSITIVE you want to remove this team?"))return!1;
        var a = $(this).parents("li.team");
        return $.ajax({type: "DELETE", url: this.href, success: function () {
            a.remove()
        }}), $(this).spin().remove(), !1
    })
}), $(function () {
    function d(a, b) {
        arguments.length < 2 && (b = location.href);
        if (arguments.length > 0 && a != "") {
            if (a == "#")var c = new RegExp("[#]([^$]*)"); else if (a == "?")var c = new RegExp("[?]([^#$]*)"); else var c = new RegExp("[?&]" + a + "=([^&#]*)");
            var d = c.exec(b);
            return d == null ? "" : d[1]
        }
        b = b.split("?");
        var d = {};
        return b.length > 1 && (b = b[1].split("#"), b.length > 1 && (d.hash = b[1]), $.each(b[0].split("&"), function (a, b) {
            b = b.split("="), d[b[0]] = b[1]
        })), d
    }

    var a = $.cookie("tracker"), b = null;
    a == null && (b = document.referrer ? document.referrer : "direct");
    var c = d();
    c.utm_campaign && $.trim(c.utm_campaign) != "" && (b = c.utm_campaign), c.referral_code && $.trim(c.referral_code) != "" && (b = c.referral_code), b != null && $.cookie("tracker", b, {expires: 7, path: "/"})
}), $(function () {
    function a(a, b) {
        var c = Math.min(a.canvas.width, b.canvas.width), d = Math.min(a.canvas.height, b.canvas.height), e = a.getImageData(0, 0, c, d), f = b.getImageData(0, 0, c, d), g = e.data, h = f.data, i, j, k, l = h.length, m, n, o, p, q, r, s, t;
        for (k = 0; k < l; k += 4)i = g[k + 3] / 255, j = h[k + 3] / 255, s = i + j - i * j, h[k + 3] = s * 255, m = g[k] / 255 * i, p = h[k] / 255 * j, n = g[k + 1] / 255 * i, q = h[k + 1] / 255 * j, o = g[k + 2] / 255 * i, r = h[k + 2] / 255 * j, t = 255 / s, h[k] = (m + p - 2 * Math.min(m * j, p * i)) * t, h[k + 1] = (n + q - 2 * Math.min(n * j, q * i)) * t, h[k + 2] = (o + r - 2 * Math.min(o * j, r * i)) * t;
        b.putImageData(f, 0, 0)
    }

    if ($("#files .image").length) {
        var b = $("#files .file:has(.onion-skin)"), c = [];
        $.each(b, function (d, e) {
            function E() {
                A++, H();
                if (A >= z) {
                    var a = f.find(".progress");
                    a.is(":visible") ? a.fadeOut(250, function () {
                        G()
                    }) : (a.hide(), G())
                }
            }

            function F(a) {
                var b = w.find(".active"), c = w.find(".active").first().index(), d = x.eq(c), e = w.children().eq(a);
                if (e.hasClass("active") == 0 && e.hasClass("disabled") == 0) {
                    b.removeClass("active"), e.addClass("active");
                    if (e.is(":visible")) {
                        var g = e.position(), h = e.outerWidth(), i = String(g.left + h / 2) + "px 0px";
                        w.css("background-image", "url(/images/modules/commit/menu_arrow.gif)"), w.css("background-position", i)
                    }
                    A >= 2 && (animHeight = parseInt(x.eq(a).css("height")) + 127, f.css("height", animHeight), d.animate({opacity: "hide"}, 250, "swing", function () {
                        x.eq(a).fadeIn(250)
                    }))
                }
            }

            function G() {
                var b = 858, e = Math.max(B.width, C.width), k = Math.max(B.height, C.height), l = 0, x = 1;
                B.marginHoriz = Math.floor((e - B.width) / 2), B.marginVert = Math.floor((k - B.height) / 2), C.marginHoriz = Math.floor((e - C.width) / 2), C.marginVert = Math.floor((k - C.height) / 2), $.each($.getUrlVars(), function (a, b) {
                    b == f.attr("id") && (diffNum = parseInt(b.replace(/\D*/g, "")), y = $.getUrlVar(b)[0], l = $.getUrlVar(b)[1] / 100, c[diffNum].view = $.getUrlVar(b)[0], c[diffNum].pct = $.getUrlVar(b)[1], c[diffNum].changed = !0)
                });
                var z = 1;
                e > (b - 30) / 2 && (z = (b - 30) / 2 / e), m.attr({width: B.width * z, height: B.height * z}), n.attr({width: C.width * z, height: C.height * z}), g.find(".deleted-frame").css({margin: B.marginVert * z + "px " + B.marginHoriz * z + "px", width: B.width * z + 2, height: B.height * z + 2}), g.find(".added-frame").css({margin: C.marginVert * z + "px " + C.marginHoriz * z + "px", width: C.width * z + 2, height: C.height * z + 2}), g.find(".aWMeta").eq(0).text(C.width + "px"), g.find(".aHMeta").eq(0).text(C.height + "px"), g.find(".dWMeta").eq(0).text(B.width + "px"), g.find(".dHMeta").eq(0).text(B.height + "px"), C.width != B.width && (g.find(".aWMeta").eq(0).addClass("a-green"), g.find(".dWMeta").eq(0).addClass("d-red")), C.height != B.height && (g.find(".aHMeta").eq(0).addClass("a-green"), g.find(".dHMeta").eq(0).addClass("d-red"));
                var A = 1, D;
                e > b - 12 && (A = (b - 12) / e), D = 0, D = e * A + 3, o.attr({width: B.width * A, height: B.height * A}), p.attr({width: C.width * A, height: C.height * A}), h.find(".deleted-frame").css({margin: B.marginVert * A + "px " + B.marginHoriz * A + "px", width: B.width * A + 2, height: B.height * A + 2}), h.find(".added-frame").css({margin: C.marginVert * A + "px " + C.marginHoriz * A + "px", width: C.width * A + 2, height: C.height * A + 2}), h.find(".swipe-shell").css({width: e * A + 3 + "px", height: k * A + 4 + "px"}), h.find(".swipe-frame").css({width: e * A + 18 + "px", height: k * A + 30 + "px"}), h.find(".swipe-bar").css("left", l * D + "px"), f.find(".swipe .swipe-shell").css("width", D - D * l), h.find(".swipe-bar").on("mousedown", function (a) {
                    var b = $(this), e = $(this).parent(), g = 0, h = e.width() - b.width();
                    a.preventDefault(), $("body").css({cursor: "pointer"}), $(document).on("mousemove.swipe", function (a) {
                        a.preventDefault();
                        var g = a.clientX - e.offset().left;
                        g < 0 && (g = 0), g > h && (g = h), b.css({left: g});
                        var i = Math.round(g / (parseInt(f.find(".swipe-frame").css("width")) - 15) * 1e4) / 1e4;
                        f.find(".swipe .swipe-shell").css("width", D - D * i), c[d].pct = i * 100, c[d].changed = !0
                    }), $(document).on("mouseup.swipe", function () {
                        $(document).off(".swipe"), $("body").css({cursor: "auto"}), I()
                    })
                });
                var E = 1;
                e > b - 12 && (E = (b - 12) / e), q.attr({width: B.width * E, height: B.height * E}), r.attr({width: C.width * E, height: C.height * E}), i.find(".deleted-frame").css({margin: B.marginVert * E + "px " + B.marginHoriz * E + "px", width: B.width * E + 2, height: B.height * E + 2}), i.find(".added-frame").css({margin: C.marginVert * E + "px " + C.marginHoriz * E + "px", width: C.width * E + 2, height: C.height * E + 2}), i.find(".onion-skin-frame").css({width: e * E + 4 + "px", height: k * E + 30 + "px"}), f.find(".dragger").css("left", x * 262 + "px"), f.find(".onion-skin .added-frame").css("opacity", x), f.find(".onion-skin .added-frame img").css("opacity", x), f.find(".dragger").on("mousedown", function (a) {
                    var b = $(this), e = $(this).parent(), g = 0, h = e.width() - b.width();
                    a.preventDefault(), $("body").css({cursor: "pointer"}), $(document).on("mousemove.dragger", function (a) {
                        a.preventDefault();
                        var g = a.clientX - e.offset().left;
                        g < 0 && (g = 0), g > h && (g = h), b.css({left: g});
                        var i = Math.round(g / 262 * 100) / 100;
                        f.find(".onion-skin .added-frame").css("opacity", i), f.find(".onion-skin .added-frame img").css("opacity", i), c[d].pct = i * 100, c[d].changed = !0
                    }), $(document).on("mouseup.dragger", function () {
                        $(document).off(".dragger"), $("body").css({cursor: "auto"}), I()
                    })
                });
                var G = 1;
                e > b - 4 && (G = (b - 4) / e), Modernizr.canvas && (s.attr({width: e * G, height: k * G}), t.attr({width: e * G, height: k * G}), j.find(".added-frame").css({width: e * G + 2, height: k * G + 2}), j.find(".deleted-frame").css({width: e * G + 2, height: k * G + 2}), u.drawImage(B, B.marginHoriz * G, B.marginVert * G, B.width * G, B.height * G), v.drawImage(C, C.marginHoriz * G, C.marginVert * G, C.width * G, C.height * G), a(v, u)), g.css("height", k * z + 30), h.css("height", k * A + 30), i.css("height", k * A + 30), j.css("height", k * A + 30), w.children().removeClass("disabled"), F(y)
            }

            function H() {
                var a = A / z * 100 + "%";
                f.find(".progress-bar").animate({width: a}, 250, "swing")
            }

            function I() {
                var a = "?";
                $.each(c, function (b, c) {
                    c["changed"] == 1 && (b != 0 && (a += "&"), a += "diff-" + b + "=" + c.view + "-" + Math.round(c.pct))
                }), Modernizr.history && window.history.replaceState({}, "", a)
            }

            var f = b.eq(d), g = f.find(".two-up").eq(0), h = f.find(".swipe").eq(0), i = f.find(".onion-skin").eq(0), j = f.find(".difference").eq(0), k = f.find(".deleted"), l = f.find(".added"), m = k.eq(0), n = l.eq(0), o = k.eq(1), p = l.eq(1), q = k.eq(2), r = l.eq(2), s = f.find("canvas.deleted").eq(0), t = f.find("canvas.added").eq(0), u, v, w = f.find("ul.view-modes-menu"), x = f.find(".view"), y = 0, z = f.find(".asset").length, A = 0, B = new Image, C = new Image;
            c.push({name: f.attr("id"), view: 0, pct: 0, changed: !1}), Modernizr.canvas ? (u = s[0].getContext("2d"), v = t[0].getContext("2d")) : w.children().eq(3).addClass("hidden"), f.find(".two-up").hide(), f.find(".two-up p").removeClass("hidden"), f.find(".progress").removeClass("hidden"), f.find(".view-modes").removeClass("hidden"), B.src = f.find(".deleted").first().attr("src"), C.src = f.find(".added").first().attr("src"), m.attr("src", B.src).load(function () {
                E()
            }), n.attr("src", C.src).load(function () {
                E()
            }), o.attr("src", B.src).load(function () {
                E()
            }), p.attr("src", C.src).load(function () {
                E()
            }), q.attr("src", B.src).load(function () {
                E()
            }), r.attr("src", C.src).load(function () {
                E()
            });
            var D = !0;
            w.children("li").click(function () {
                var a = $(this).index();
                (a == 1 || a == 2) && D && (D = !1), F(a), c[d].view = a, c[d].changed = !0, I()
            }), $.extend({getUrlVars: function () {
                var a = [], b, c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
                for (var d = 0; d < c.length; d++)b = c[d].split("="), b[1] && (b[1] = b[1].split("-")), a.push(b[0]), a[b[0]] = b[1];
                return a
            }, getUrlVar: function (a) {
                return $.getUrlVars()[a]
            }})
        })
    }
}), $(function () {
    function b() {
        var c = $("#current-version").val();
        c && $.get("_current", function (d) {
            c == d ? setTimeout(b, 5e3) : a || ($("#gollum-error-message").text("Someone has edited the wiki since you started. Please reload this page and re-apply your changes."), $("#gollum-error-message").show(), $("#gollum-editor-submit").attr("disabled", "disabled"), $("#gollum-editor-submit").attr("value", "Cannot Save, Someone Else Has Edited"))
        })
    }

    $("#see-more-elsewhere").click(function () {
        return $(".seen-elsewhere").show(), $(this).remove(), !1
    });
    var a = !1;
    $("#gollum-editor-body").each(b), $("#gollum-editor-submit").click(function () {
        a = !0
    });
    var c = [];
    $("form#history input[type=submit]").attr("disabled", !0), $("form#history input[type=checkbox]").change(function () {
        var a = $(this).val(), b = $.inArray(a, c);
        if (b > -1)c.splice(b, 1); else {
            c.push(a);
            if (c.length > 2) {
                var d = c.shift();
                $("input[value=" + d + "]").prop("checked", !1)
            }
        }
        $("form#history tr.commit").removeClass("selected"), $("form#history input[type=submit]").attr("disabled", !0);
        if (c.length == 2) {
            $("form#history input[type=submit]").attr("disabled", !1);
            var e = !1;
            $("form#history tr.commit").each(function () {
                e && $(this).addClass("selected"), $(this).find("input:checked").length > 0 && (e = !e), e && $(this).addClass("selected")
            })
        }
    })
}), function () {
    $(document).on("focusin", "#command-bar", function () {
        var a;
        return a = $(this), a.data("command-bar-installed") ? a.closest(".topsearch").addClass("command-bar-focus") : (a.commandBar().data("command-bar-installed", !0), setTimeout(function () {
            return a.focus()
        }, 20))
    }), $(document).on("focusout", "#command-bar", function () {
        return $(this).closest(".topsearch").removeClass("command-bar-focus")
    }), $(document).on("keyup", function (a) {
        if (a.hotkey === "ctrl+/" || a.hotkey === "s" && !$(a.target).is(":input"))return $("#command-bar").focus()
    }), $(document).on("mousedown", ".commandbar .display", function () {
        return!1
    }), $(document).on("mousedown", ".command-bar-focus #advanced_search", function () {
        return!1
    }), $(document).on("click", ".command_bar_form .help", function () {
        var a;
        return a = $("#command-bar").focus(), $(".tipsy").hide(), setTimeout(function () {
            return a.val("help"), a.trigger("execute.commandbar")
        }, 250), !1
    }), $(document).ready(function () {
        return $(".launch #command-bar").focus()
    })
}.call(this), function () {
    var a, b, c, d = [].slice, e = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    b = function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, c = function (a) {
        return a.replace(/^\s+/g, "")
    }, a = function () {
        function a(a) {
            this.defaultContext = a, this.callbacks = {}
        }

        return a.prototype.bind = function (a, b) {
            var c, d, e, f, g;
            g = a.split(" ");
            for (e = 0, f = g.length; e < f; e++)c = g[e], (d = this.callbacks)[c] || (d[c] = []), this.callbacks[c].push(b);
            return this
        }, a.prototype.trigger = function () {
            var a, b, c, e, f, g;
            e = arguments[0], a = 2 <= arguments.length ? d.call(arguments, 1) : [], c = this.callbacks[e];
            if (!c)return!0;
            for (f = 0, g = c.length; f < g; f++) {
                b = c[f];
                if (b.apply(this.context, a) === !1)return!1
            }
            return!0
        }, a.prototype.unbind = function (a, b) {
            var c, d, e, f, g;
            if (a)if (b) {
                c = this.callbacks[a];
                for (e = f = 0, g = c.length; f < g; e = ++f) {
                    d = c[e];
                    if (d !== b)continue;
                    c.splice(e, 1);
                    break
                }
            } else delete this.callbacks[a]; else this.callbacks = {};
            return this
        }, a.prototype.execute = function (a) {
            return(new this.defaultContext(this, a)).fullMatch().execute()
        }, a.prototype.suggestions = function (a, b) {
            return b == null && (b = 8), (new this.defaultContext(this, a)).partialMatch().suggestions().slice(0, b)
        }, a.prototype.complete = function (b, c) {
            var d;
            return d = (new this.defaultContext(this, b)).partialMatch(), a.Store.set("" + d.constructor.name + ":" + b, c), d.complete(c)
        }, a
    }(), a.Store = function () {
        function b() {
        }

        var a;
        return a = function () {
            try {
                return"localStorage"in window && window.localStorage !== null
            } catch (a) {
                return!1
            }
        }, b.set = function (b, c) {
            if (!a())return;
            try {
                return localStorage.setItem(b, JSON.stringify(c)), c
            } catch (d) {
                return!1
            }
        }, b.get = function (b) {
            return a() ? this.parse(localStorage[b]) : null
        }, b.parse = function (a) {
            try {
                return JSON.parse(a)
            } catch (b) {
                return a
            }
        }, b.expire = function (b) {
            var c;
            if (!a())return;
            return c = localStorage[b], localStorage.removeItem(b), c
        }, b
    }(), a.RemoteProxy = function () {
        function b() {
        }

        return b.caches = a.Store.get("commandbar.caches") || {}, b.requests = {}, b.get = function (b, c, d) {
            var e, f, g = this;
            return this.commandBar = d, (f = c.cache_for) == null && (c.cache_for = 36e5), e = (new Date).getTime() - c.cache_for, this.shouldLoad = function (a) {
                return this.isCached(a) ? this.caches[a].requested < e ? !0 : !1 : !0
            }, this.shouldLoad(b) ? (this.isLoading(b) || (this.requests[b] = $.ajax({url: b, dataType: c.dataType || "json", success: function (d) {
                return g.caches[b] = {response: c.process(d), requested: (new Date).getTime()}, a.Store.set("commandbar.caches", g.caches)
            }, error: function (a, c, d) {
                return g.caches[b] = {response: [], requested: (new Date).getTime()}
            }, complete: function () {
                var a;
                return delete g.requests[b], (a = g.commandBar) != null ? a.trigger("suggest.commandbar") : void 0
            }})), this.isCached(b) ? this.caches[b].response : [
                {command: "", description: c.loadingMessage, type: "loading"}
            ]) : this.caches[b].response
        }, b.isLoading = function (a) {
            return this.requests[a] != null
        }, b.isCached = function (a) {
            return this.caches[a] != null
        }, b
    }(), a.Timer = function () {
        function a() {
            this.time = (new Date).getTime(), this
        }

        return a.prototype.diff = function () {
            var a, b;
            return b = (new Date).getTime(), a = b - this.time, this.time = b, a
        }, a
    }(), a.History = function () {
        function f() {
        }

        var c, d, e;
        return e = [], d = function () {
            return a.Store.set("commandbar.history", e.slice(0, 50).join("\n"))
        }, c = function (a) {
            var c, d, f, g;
            d = [];
            for (f = 0, g = e.length; f < g; f++)c = e[f], b(c) !== b(a) && d.push(c);
            return e = d
        }, f.load = function () {
            var b;
            return b = a.Store.get("commandbar.history"), e = b != null ? b.split("\n") : []
        }, f.add = function (a) {
            return c(a), e.unshift(a), d()
        }, f.get = function (a) {
            return e[a]
        }, f.exists = function (a) {
            return e[a] != null
        }, f
    }.call(this), a.History.load(), a.Context = function () {
        function d(a, b, c) {
            this.commandBar = a, this.text = b, this.parent = c, this.lazyLoad = e(this.lazyLoad, this), this.suggestionCollection = e(this.suggestionCollection, this), this.matches = this.text.match(this.constructor.regex), this.remainder = this.matches ? this.text.replace(this.matches[0], "") : this.text
        }

        return d.contexts = [], d.register = function (a) {
            return this.contexts.push(a)
        }, d.regex = /(?:)/i, d.matches = function (a) {
            return!!a.match(this.regex)
        }, d.help = function () {
            return{}
        }, d.prototype.suffix = function () {
            return" "
        }, d.prototype.suggestionOptions = function () {
            return[]
        }, d.prototype.suggestionCollection = function () {
            var b, c, d, e, f;
            c = [], f = this.constructor.contexts;
            for (d = 0, e = f.length; d < e; d++)b = f[d], c = c.concat((new b(this.commandBar, this.remainder, this)).suggestionOptions());
            return new a.SuggestionCollection(c)
        }, d.prototype.suggestions = function () {
            return this.suggestionCollection().filter(this.remainder, this)
        }, d.prototype.fullMatch = function (a) {
            var c, d, e, f, g, h, i;
            a == null && (a = this.remainder), this.parent === void 0 && (d = this);
            if (b(a) === "")f = this; else {
                i = this.constructor.contexts;
                for (g = 0, h = i.length; g < h; g++) {
                    c = i[g];
                    if (c.matches(a)) {
                        e = (new c(this.commandBar, a, this)).fullMatch();
                        if (e)return e
                    }
                }
            }
            return f || d
        }, d.prototype.partialMatch = function () {
            var a, b, d, e, f, g, h;
            b = this;
            if (this.remainder.length) {
                h = this.constructor.contexts;
                for (f = 0, g = h.length; f < g; f++) {
                    a = h[f];
                    if (a.matches(this.remainder)) {
                        d = (new a(this.commandBar, c(this.remainder), this)).partialMatch();
                        if (d)return d
                    }
                }
            } else e = this.parent;
            return e || b
        }, d.prototype.description = function () {
            return"Execute `" + this.command() + "`"
        }, d.prototype.command = function () {
            return this.parent ? b("" + this.parent.command() + " " + this.matches[0]) : ""
        }, d.prototype.complete = function (a) {
            var b;
            return b = this.fullMatch(a), (b != null ? b.command() : void 0) + b.suffix()
        }, d.prototype.lazyLoad = function (b, c) {
            return a.RemoteProxy.get(b, c, this.commandBar)
        }, d.prototype.loading = function (a) {
            return this.commandBar.trigger("loading.commandbar"
                , a)
        }, d.prototype.success = function (a) {
            return this.commandBar.trigger("success.commandbar", a)
        }, d.prototype.error = function (a) {
            return this.commandBar.trigger("error.commandbar", a)
        }, d.prototype.message = function (a) {
            return this.commandBar.trigger("message.commandbar", a)
        }, d.prototype.goToUrl = function (b) {
            var c;
            if (!a.ctrlKey && !a.metaKey)return window.location = b;
            c = window.open(b, (new Date).getTime());
            if (c !== window)return this.success("Opened in a new window")
        }, d.prototype.post = function (a) {
            return a = $.extend(a, {type: "POST"}), $.ajax(a)
        }, d.prototype.execute = function () {
        }, d
    }(), a.SuggestionCollection = function () {
        function h(a) {
            this.suggestions = a
        }

        var c, d, e, f, g;
        return h.prototype.filter = function (a, b) {
            var h;
            return h = d(this.suggestions), h = c(h, a, b), h = f(h), h = g(h), h = e(h), h.push({command: "Search GitHub for '" + a + "'", description: "", type: "choice", multiplier: 1, filter: !0}), h
        }, d = function (a) {
            return a = a.map(function (a) {
                return{command: a.command || "", description: a.description || "", type: a.type || "choice", multiplier: a.multiplier || 1, filter: a.filter === !1 ? !1 : !0}
            })
        }, c = function (c, d, e) {
            return d = b(d), c = c.map(function (b) {
                var c;
                return b.filter === !1 ? b.score = 1 : b.type !== "loading" ? (c = a.Store.get("" + e.constructor.name + ":" + d), c === b.command ? b.score = 1.99 : (b.score = d ? fuzzyScore(b.command, d) : 1, b.score *= b.multiplier)) : b.score = 2, b
            }), c
        }, f = function (a) {
            var b;
            return a = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = a.length; c < d; c++)b = a[c], b.score && e.push(b);
                return e
            }()
        }, g = function (a) {
            return a.sort(function (a, b) {
                return b.score - a.score
            })
        }, e = function (a) {
            return a.map(function (a) {
                return delete a.score, a
            })
        }, h
    }(), window.CommandBar = a
}.call(this), function () {
    var a, b = {}.hasOwnProperty, c = function (a, c) {
        function e() {
            this.constructor = a
        }

        for (var d in c)b.call(c, d) && (a[d] = c[d]);
        return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
    };
    CommandBar.Context.prototype.execute = function () {
        return $.trim(this.text) === "" ? !1 : (this.loading("Searching for '" + this.text + "'"), this.commandBar.trigger("submit.commandbar"))
    }, a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return c(b, a), b.contexts = [], b.regex = /search github for '(.+)'/i, b.help = function () {
            return{command: "search", description: "Search GitHub"}
        }, b.prototype.query = function () {
            if (this.matches)return $.trim(this.matches[1])
        }, b.prototype.suggestionOptions = function () {
            return[]
        }, b.prototype.description = function () {
            return"Search GitHub for " + this.query()
        }, b.prototype.helpText = function () {
            return{command: "search", description: "Search GitHub"}
        }, b.prototype.execute = function () {
            return this.loading("Searching for '" + this.query() + "'"), this.goToUrl("/search?utf8=✓&q=" + this.query() + "&ref=searchcontext")
        }, b
    }(CommandBar.Context), CommandBar.Context.register(a)
}.call(this), function () {
    var a, b = {}.hasOwnProperty, c = function (a, c) {
        function e() {
            this.constructor = a
        }

        for (var d in c)b.call(c, d) && (a[d] = c[d]);
        return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
    };
    a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return c(b, a), b.contexts = [], b.regex = /(help|\?)/i, b.prototype.suggestionOptions = function () {
            return[
                {command: "help", description: "Show available commands"}
            ]
        }, b.prototype.description = function () {
            return"Show available commands"
        }, b.prototype.helpMessagesFor = function (a) {
            var b, c, d, e, f, g;
            e = this, d = [];
            for (f = 0, g = a.length; f < g; f++)b = a[f], c = b.help(), c.constructor === Array ? d = d.concat(c) : (b.contexts.length && (c.children = e.helpMessagesFor(b.contexts)), d.push(c));
            return d
        }, b.prototype.formatCommands = function (a) {
            var b;
            return b = "<table>", b += this.messageRows(a), b += "</table>", b
        }, b.prototype.messageRows = function (a, b) {
            var c, d, e, f;
            d = "", b || (b = ""), a = a.sort(function (a, b) {
                return a.command > b.command ? 1 : -1
            });
            for (e = 0, f = a.length; e < f; e++)c = a[e], d += this.messageRow(c, b), c.children && (d += this.messageRows(c.children, "" + b + c.command + " "));
            return d
        }, b.prototype.messageRow = function (a, b) {
            var c;
            return c = "", a.description ? (c += "<tr><td class=command>", c += "" + b + "<strong>" + a.command + "</strong>", c += "</td><td><span>" + a.description + "</span></td></tr>") : ""
        }, b.prototype.execute = function () {
            var a;
            return a = [], a = a.concat(this.helpMessagesFor(this.commandBar.defaultContext.contexts)), this.message(this.formatCommands(a))
        }, b
    }(CommandBar.Context), CommandBar.Context.register(a)
}.call(this), function () {
    var a, b, c, d, e, f, g, h, i = {}.hasOwnProperty, j = function (a, b) {
        function d() {
            this.constructor = a
        }

        for (var c in b)i.call(b, c) && (a[c] = b[c]);
        return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
    };
    a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /^my/i, b.help = function () {
            return{command: "my"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "my", description: "Dashboard, settings, and more"}
            ]
        }, b.prototype.description = function () {
            return"View your dashboard"
        }, b.prototype.helpText = function () {
            return{command: "my", description: "View your dashboard, settings, and notifications"}
        }, b.prototype.execute = function () {
            return this.loading("Loading your dashboard"), this.goToUrl("/")
        }, b
    }(CommandBar.Context), b = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /dashboard/i, b.help = function () {
            return{command: "dashboard", description: "Go to your dashboard"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "dashboard", description: "View your dashboard"}
            ]
        }, b.prototype.description = function () {
            return"View your dashboard"
        }, b.prototype.execute = function () {
            return this.loading("Loading your dashboard"), this.goToUrl("/")
        }, b
    }(CommandBar.Context), f = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /pulls/i, b.help = function () {
            return{command: "pulls", description: "View your pull requests"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "pulls", description: "View your pull requests"}
            ]
        }, b.prototype.description = function () {
            return"View your pull requests"
        }, b.prototype.execute = function () {
            return this.loading("Loading your pull requests"), this.goToUrl("/dashboard/pulls")
        }, b
    }(CommandBar.Context), c = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /issues/i, b.help = function () {
            return{command: "issues", description: "View your issues"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "issues", description: "View your issues"}
            ]
        }, b.prototype.description = function () {
            return"View your issues"
        }, b.prototype.execute = function () {
            return this.loading("Loading your issues"), this.goToUrl("/dashboard/issues")
        }, b
    }(CommandBar.Context), h = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /stars/i, b.help = function () {
            return{command: "stars", description: "View your starred repositories"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "stars", description: "View your starred repositories"}
            ]
        }, b.prototype.description = function () {
            return"View your starred repositories"
        }, b.prototype.execute = function () {
            return this.loading("Loading your starred repositories"), this.goToUrl("/stars")
        }, b
    }(CommandBar.Context), e = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /profile/i, b.help = function () {
            return{command: "profile", description: "View your public user profile"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "profile", description: "View your public user profile"}
            ]
        }, b.prototype.description = function () {
            return"View your public user profile"
        }, b.prototype.execute = function () {
            var a;
            return this.loading("Loading your profile"), a = $("#command-bar")[0].getAttribute("data-username"), this.goToUrl("/" + a)
        }, b
    }(CommandBar.Context), g = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /settings/i, b.help = function () {
            return{command: "settings", description: "View or edit your account settings"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "settings", description: "View or edit your account settings"}
            ]
        }, b.prototype.description = function () {
            return"View or edit your account settings"
        }, b.prototype.execute = function () {
            return this.loading("Loading your settings"), this.goToUrl("/settings")
        }, b
    }(CommandBar.Context), d = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return j(b, a), b.contexts = [], b.regex = /notifications/i, b.help = function () {
            return{command: "notifications", description: "View your notifications"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "notifications", description: "View all your notifications"}
            ]
        }, b.prototype.description = function () {
            return"View all your notifications"
        }, b.prototype.execute = function () {
            return this.loading("Loading your notifications"), this.goToUrl("/notifications")
        }, b
    }(CommandBar.Context), CommandBar.Context.register(a), a.register(b), a.register(f), a.register(c), a.register(h), a.register(e), a.register(g), a.register(d)
}.call(this), function () {
    var a, b, c, d, e, f, g, h, i, j = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, k = {}.hasOwnProperty, l = function (a, b) {
        function d() {
            this.constructor = a
        }

        for (var c in b)k.call(b, c) && (a[c] = b[c]);
        return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
    };
    b = function (a) {
        function b() {
            return this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /^([\w\._-]+\/[\w\._-]+)/i, b.help = function () {
            return{command: "user/repo", description: "View a repository"}
        }, b.prototype.repo = function () {
            if (this.matches)return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            var a, b, c;
            a = this.lazyLoad("/command_bar/repos", {loadingMessage: "Loading your repos", process: function (a) {
                return a.repositories
            }});
            if (c = this.text.match(/([\w-_]+)\//i))b = c[1], a = this.lazyLoad("/command_bar/repos_for/" + b, {loadingMessage: "Loading repos for " + b, process: function (a) {
                return a.repositories
            }});
            return a
        }, b.prototype.description = function () {
            return"Go to " + this.repo()
        }, b.prototype.helpText = function () {
            return{command: "user/repo", description: "View user/repo, manage issues, etc."}
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.repo()), this.goToUrl("/" + this.repo())
        }, b
    }(CommandBar.Context), c = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /issues/i, b.help = function () {
            return{command: "issues", description: "List issues for a repository"}
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "issues", description: "List, show, and create issues"}
            ]
        }, b.prototype.description = function () {
            return"View issues for " + this.repo()
        }, b.prototype.helpText = function () {
            return{command: "" + this.repo() + " issues", description: "List issues, show a specific issue, new issue"}
        }, b.prototype.execute = function () {
            return this.loading("Loading issues for " + this.repo()), this.goToUrl("/" + this.repo() + "/issues")
        }, b
    }(CommandBar.Context), a = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.branch = j(this.branch, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /(?:@|branch)([\w-_\/]+)?/i, b.help = function () {
            return{command: "@branchname", description: "View a branch in a repository"}
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.branch = function () {
            if (this.matches)return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return this.text.match(/@/i) ? this.lazyLoad("/command_bar/" + this.repo() + "/branches", {loadingMessage: "Loading branches for " + this.repo(), process: function (a) {
                return a.branches
            }}) : [
                {command: "@", description: "Show a specific branch"}
            ]
        }, b.prototype.description = function () {
            return"Show branch `" + this.branch() + "` for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.repo() + "@" + this.branch()), this.goToUrl("/" + this.repo() + "/tree/" + this.branch())
        }, b
    }(CommandBar.Context), g = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.section = j(this.section, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /(wiki|graphs|network|admin)/i, b.help = function () {
            return(new this(this.commandBar, "")).suggestionOptions()
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.section = function () {
            if (this.matches)return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "wiki", description: "Pull up the wiki"},
                {command: "graphs", description: "All the Graphs!"},
                {command: "network", description: "See the network"},
                {command: "admin", description: "Manage this repo"}
            ]
        }, b.prototype.description = function () {
            return"View the " + this.section() + " for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.section() + " for " + this.repo()), this.goToUrl("/" + this.repo() + "/" + this.section())
        }, b
    }(CommandBar.Context), e = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.repo = j(this.repo, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /pull(?:s|-requests)/i, b.help = function () {
            return{command: "pulls", description: "View pull requests"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "pulls", description: "Show open pull requests"}
            ]
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.description = function () {
            return"Show pull requests for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading pulls for " + this.repo()), this.goToUrl("/" + this.repo() + "/pulls")
        }, b
    }(CommandBar.Context), h = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.issue = j(this.issue, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /\#\s?(\d+)?/i, b.help = function () {
            return{command: "#123", description: "View a specific issue"}
        }, b.prototype.suffix = function () {
            return""
        }, b.prototype.suggestionOptions = function () {
            return this.text.match(/#/i) ? this.lazyLoad("/command_bar/" + this.repo() + "/issues", {loadingMessage: "Loading open issues for " + this.repo(), process: function (a) {
                return a.issues
            }}) : [
                {command: "#", description: "Show a specific issue by number"}
            ]
        }, b.prototype.issue = function () {
            return this.matches ? this.matches[1] : ""
        }, b.prototype.description = function () {
            return"Show issue #" + this.issue() + " for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading issue #" + this.issue() + " for " + this.repo()), this.goToUrl("/" + this.repo() + "/issues/" + this.issue())
        }, b
    }(c), f = function (a) {
        function b() {
            return this.execute = j(this.execute, this), this.term = j(this.term, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /#((?:\s+)?(?:[0-9]+)?[a-zA-Z][\w\s0-9]*)/i, b.help = function () {
            return{command: "#search term", description: "Search for an issue"}
        }, b.timeout = null, b.previous_term = null, b.last_suggested = null, b.search_delay = 700, b.prototype.suffix = function () {
            return""
        }, b.prototype.suggestionOptions = function () {
            var a, b, c;
            return c = this.term(), b = this.constructor.previous_term, clearTimeout(this.constructor.timeout), this.constructor.previous_term = c, c.match(/\w/i) && c.length > 2 ? c === b && this.searchDelayPassed() ? this.lazyLoad("/command_bar/" + this.repo() + "/issues_search?q=" + this.term(), {loadingMessage: "Searching issues for " + this.repo(), process: function (a) {
                return a.issues
            }}) : (this.constructor.last_suggested = (new Date).getTime(), a = this.commandBar, this.constructor.timeout = setTimeout(function () {
                return a.trigger("suggest.commandbar")
            }, this.constructor.search_delay), []) : []
        }, b.prototype.searchDelayPassed = function () {
            return(new Date).getTime() - this.constructor.last_suggested >= this.constructor.search_delay
        }, b.prototype.term = function () {
            return this.matches ? this.matches[1] : ""
        }, b.prototype.description = function () {
            return"Search issues for `" + this.term() + "` on " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Searching for issues matching `" + this.term() + "` on " + this.repo()), this.goToUrl("/" + this.repo() + "/issues/search?q=" + this.term())
        }, b
    }(c), d = function (a) {
        function b() {
            return this.execute = j(this.execute, this), b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /new/i, b.help = function () {
            return{command: "new", description: "Create a new issue"}
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "new", description: "Create new issue"}
            ]
        }, b.prototype.description = function () {
            return"Create a new issue for " + this.repo()
        }, b.prototype.execute = function () {
            return this.loading("Loading new issue form for " + this.repo()), this.goToUrl("/" + this.repo() + "/issues/new")
        }, b
    }(c), i = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return l(b, a), b.contexts = [], b.regex = /(watch|unwatch)/i, b.help = function () {
            return[
                {command: "watch", description: "Watch a repo"},
                {command: "unwatch", description: "Unwatch a repo"}
            ]
        }, b.prototype.repo = function () {
            return this.parent.repo()
        }, b.prototype.action = function () {
            if (this.matches)return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "watch", description: "Watch " + this.repo()},
                {command: "unwatch", description: "Unwatch " + this.repo()}
            ]
        }, b.prototype.description = function () {
            return"Watch or unwatch " + this.repo()
        }, b.prototype.execute = function () {
            var a = this;
            return this.loading("Requesting to " + this.action() + " " + this.repo()), this.post({url: "/command_bar/" + this.repo() + "/" + this.action(), success: function () {
                return a.action() === "watch" ? a.success("You are now watching " + a.repo()) : a.success("You are no longer watching " + a.repo())
            }, error: function () {
                return a.error("Could not " + a.action() + " " + a.repo())
            }})
        }, b
    }(CommandBar.Context), CommandBar.Context.register(b), b.register(f), b.register(c), c.register(h), c.register(d), b.register(h), b.register(e), b.register(a), b.register(g), b.register(i)
}.call(this), function () {
    var a, b, c = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, d = {}.hasOwnProperty, e = function (a, b) {
        function e() {
            this.constructor = a
        }

        for (var c in b)d.call(b, c) && (a[c] = b[c]);
        return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
    };
    b = function (a) {
        function b() {
            return this.suffix = c(this.suffix, this), this.user = c(this.user, this), b.__super__.constructor.apply(this, arguments)
        }

        return e(b, a), b.contexts = [], b.regex = /@([A-Za-z0-9-_]+)\/?/i, b.help = function () {
            return{command: "@user", description: "View a user&rsquo;s profile"}
        }, b.matches = function (a) {
            var b;
            return b = a.match(this.regex), !!b && !b[0].match(/\/$/)
        }, b.prototype.user = function () {
            if (this.matches)return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return this.lazyLoad("/command_bar/users", {loadingMessage: "Loading users", process: function (a) {
                return a.users
            }})
        }, b.prototype.suffix = function () {
            return""
        }, b.prototype.execute = function () {
            return this.loading("Loading " + this.user() + "'s profile"), this.goToUrl("/" + this.user())
        }, b
    }(CommandBar.Context), a = function (a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }

        return e(b, a), b.contexts = [], b.regex = /(follow|unfollow)/i, b.help = function () {
            return[
                {command: "follow", description: "Follow a user"},
                {command: "unfollow", description: "Unfollow a user"}
            ]
        }, b.prototype.user = function () {
            return this.parent.user()
        }, b.prototype.action = function () {
            if (this.matches)return this.matches[1]
        }, b.prototype.suggestionOptions = function () {
            return[
                {command: "follow", description: "Follow " + this.user()},
                {command: "unfollow", description: "Unfollow " + this.user()}
            ]
        }, b.prototype.description = function () {
            return"Follow or unfollow " + this.user()
        }, b.prototype.execute = function () {
            var a = this;
            return this.loading("Requesting to " + this.action() + " " + this.user()), this.post({url: "/command_bar/" + this.user() + "/" + this.action(), success: function () {
                return a.action() === "follow" ? a.success("You are now following " + a.user()) : a.success("You are no longer following " + a.user())
            }, error: function () {
                return a.error("Could not " + a.action() + " " + a.user())
            }})
        }, b
    }(CommandBar.Context), CommandBar.Context.register(b), b.register(a)
}.call(this), function () {
    window.stringDistance = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m;
        j = [a, b].sort(function (a, b) {
            return b.length - a.length
        }), a = j[0], b = j[1], d = a.length, i = b.length, h = [], h[0] = [];
        for (e = k = 0; 0 <= i ? k <= i : k >= i; e = 0 <= i ? ++k : --k)h[0][e] = e;
        for (f = l = 1; 1 <= d ? l <= d : l >= d; f = 1 <= d ? ++l : --l) {
            h[f] = [], h[f][0] = f;
            for (g = m = 1; 1 <= i ? m <= i : m >= i; g = 1 <= i ? ++m : --m)c = a.charAt(f - 1) === b.charAt(g - 1) ? 0 : 1, h[f][g] = Math.min(h[f - 1][g] + 1, h[f][g - 1] + 1, h[f - 1][g - 1] + c)
        }
        return h[d][i]
    }, window.fuzzyScore = function (a, b) {
        var c, d, e, f, g;
        a = a.toLowerCase(), b = b.toLowerCase(), f = new RegExp("(" + b.split("").join(".*?") + ")", "g"), g = 0;
        if (e = a.match(f))c = stringDistance(a, b), c === 0 ? g = 1 : (g = .4 * (1 / e[0].length), g += .1 * (1 / a.length), d = a.indexOf(b), d >= 0 && (g += .5 * (1 / (d + 1))), g += 1 - g - (1 - g) * (1 / e.length));
        return g
    }
}.call(this), function () {
    var a, b, c;
    a = jQuery, b = {ENTER: 13, TAB: 9, UP: 38, DOWN: 40, N: 78, P: 80, CTRL: 17, ESC: 27}, c = {init: function (c) {
        var d;
        return d = {classname: "commandbar", debug: !1, context: CommandBar.Context, limit: 8}, d = a.extend(d, c), this.each(function () {
            var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
            return h = new CommandBar(d.context), f = a(this), d.limit = f.attr("data-results-limit"), f.attr("autocomplete", "off"), f.attr("spellcheck", "false"), f.wrap('<div class="' + d.classname + '" />'), e = f.closest("." + d.classname), g = a('<span class="message" />').prependTo(e), c = a('<div class="display hidden" />').appendTo(e), n = null, j = 0, f.bind("execute.commandbar", function () {
                return k()
            }), h.bind("suggest.commandbar", function () {
                return f.trigger("suggest.commandbar")
            }), h.bind("loading.commandbar", function (a) {
                return t(a, "loading")
            }), h.bind("message.commandbar", function (a) {
                return q(a)
            }), h.bind("success.commandbar", function (a) {
                return t("" + String.fromCharCode(10004) + " " + a, "success", !0)
            }), h.bind("error.commandbar", function (a) {
                return t("" + String.fromCharCode(10006) + " " + a, "error", !0)
            }), h.bind("submit.commandbar", function (a) {
                return f.closest("form").submit()
            }), t = function (a, b, c) {
                g.text(a).show().addClass("visible"), g.removeClass("loading error success").addClass(b);
                if (c)return l()
            }, l = function () {
                return setTimeout(function () {
                    return g.removeClass("visible")
                }, 5e3)
            }, m = function () {
                return g.hide().removeClass("visible loading error success")
            }, r = function () {
                var a, b, d;
                a = c.find(".selected"), d = function () {
                    return a.position().top < 0
                }, b = function () {
                    return a.position().top + a.outerHeight() > c.height()
                }, d() && c.scrollTop(c.scrollTop() + a.position().top);
                if (b())return c.scrollTop(c.scrollTop() + a.position().top + a.outerHeight() - c.height())
            }, o = function () {
                var a;
                c.find(".selected").removeClass("selected");
                if (j === -1)return f.val(f.data("val")), c.removeClass("hidden"), j++;
                if (j >= 0)return a = c.find(".choice:nth-child(" + (j + 1) + ")").addClass("selected"), a.length ? (r(), f.val(h.complete(f.data("val"), a.data("command"))), j++) : c.find(".choice:nth-child(" + j + ")").addClass("selected");
                if (CommandBar.History.exists(-j - 2))return f.val(CommandBar.History.get(-j - 2)), j++
            }, p = function () {
                var a;
                c.find(".selected").removeClass("selected");
                if (j === 1)return f.val(f.data("val")), j--;
                if (j > 1)return a = c.find(".choice:nth-child(" + (j - 1) + ")"), a.addClass("selected"), r(), a.length && f.val(h.complete(f.data("val"), a.data("command"))), j--;
                if (CommandBar.History.exists(-j))return c.addClass("hidden"), f.val(CommandBar.History.get(-j)), j--
            }, i = function (b) {
                var d, e;
                b.length || (b = c.find(".choice:first"));
                if (!b.length)return;
                return n != null && clearTimeout(n), e = f.data("val"), d = a(b).data("command"), f.val(h.complete(e, d)), f.focus().keyup()
            }, q = function (a) {
                return c.html(a).show().removeClass("hidden")
            }, k = function () {
                return c.html(""), CommandBar.History.add(f.val()), h.execute(f.val()), f.val(""), s()
            }, g.click(function () {
                return m(), f.focus(), !1
            }), f.focus(function () {
                return clearTimeout(n), e.addClass("focused"), a(this).keyup()
            }), f.blur(function () {
                return n = setTimeout(function () {
                    return e.removeClass("focused"), c.addClass("hidden")
                }, 200)
            }), f.bind("suggest.commandbar", function () {
                var b, e, f, g, i, k;
                j = 0, g = a(this).val(), c.html("");
                if (g !== "") {
                    f = h.suggestions(g, d.limit);
                    for (i = 0, k = f.length; i < k; i++)e = f[i], b = a("<div class=" + e.type + "></div>").attr("data-command", e.command), e.command && a("<span class=command />").text(e.command).appendTo(b), e.description && a("<span class=description />").text(e.description).appendTo(b), b.appendTo(c)
                }
                return s()
            }), s = function () {
                return c.is(":empty") ? c.hide().addClass("hidden") : c.show().removeClass("hidden")
            }, f.bind("throttled:input", function (a) {
                return f.val() !== "" && m(), f.data("val", f.val()), f.trigger("suggest.commandbar")
            }), f.keyup(function (a) {
                switch (a.which) {
                    case b.N:
                    case b.P:
                        return a.ctrlKey ? !1 : f.trigger("suggest.commandbar");
                    case b.ENTER:
                    case b.TAB:
                    case b.CTRL:
                    case b.DOWN:
                    case b.UP:
                    case b:
                        return!1;
                    case b.ESC:
                        return f.val() === "" ? f.blur() : f.val("")
                }
            }), f.keydown(function (a) {
                CommandBar.ctrlKey = a.ctrlKey, CommandBar.metaKey = a.metaKey, CommandBar.shiftKey = a.shiftKey;
                switch (a.which) {
                    case b.DOWN:
                        return o();
                    case b.UP:
                        return p(), a.preventDefault(), !1;
                    case b.P:
                        if (a.ctrlKey)return p();
                        break;
                    case b.N:
                        if (a.ctrlKey)return o();
                        break;
                    case b.ENTER:
                        return k(), !1;
                    case b.TAB:
                        if (f.val() !== "")return i(c.find(".selected")), !1
                }
            }), c.on("click", "div.choice", function () {
                return i(a(this)), !1
            })
        })
    }}, a.fn.commandBar = function (b) {
        return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : typeof b == "object" || !b ? c.init.apply(this, arguments) : a.error("Method " + b + " does not exists on jQuery.commandBar")
    }
}.call(this);