"use strict";
!(function(e) {
  "function" == typeof define && define.amd
    ? define(e)
    : "undefined" != typeof module && module.exports
    ? (module.exports = e())
    : (window.enterView = e.call(this));
})(function() {
  var e = function(e) {
    function n() {
      E =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(e) {
          return setTimeout(e, 1e3 / 60);
        };
    }
    function t() {
      if (y && "number" == typeof y) {
        var e = Math.min(Math.max(0, y), 1);
        return F - e * F;
      }
      return F;
    }
    function o() {
      var e = document.documentElement.clientHeight,
        n = window.innerHeight || 0;
      F = Math.max(e, n);
    }
    function r() {
      L = !1;
      var e = t();
      (M = M.filter(function(n) {
        var t = n.getBoundingClientRect(),
          o = t.top,
          r = t.bottom,
          i = t.height,
          s = o < e,
          u = r < e;
        if (s && !n.__ev_entered) {
          if ((m(n), (n.__ev_progress = 0), h(n, n.__ev_progress), q))
            return !1;
        } else !s && n.__ev_entered && ((n.__ev_progress = 0), h(n, n.__ev_progress), g(n));
        if (s && !u) {
          var d = (e - o) / i;
          (n.__ev_progress = Math.min(1, Math.max(0, d))),
            h(n, n.__ev_progress);
        }
        return (
          s &&
            u &&
            1 !== n.__ev_progress &&
            ((n.__ev_progress = 1), h(n, n.__ev_progress)),
          (n.__ev_entered = s),
          !0
        );
      })),
        M.length || window.removeEventListener("scroll", i, !0);
    }
    function i() {
      L || ((L = !0), E(r));
    }
    function s() {
      o(), r();
    }
    function u() {
      o(), r();
    }
    function d(e) {
      for (var n = e.length, t = [], o = 0; o < n; o += 1) t.push(e[o]);
      return t;
    }
    function f(e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : document;
      return "string" == typeof e
        ? d(n.querySelectorAll(e))
        : e instanceof NodeList
        ? d(e)
        : e instanceof Array
        ? e
        : void 0;
    }
    function c() {
      M = f(v);
    }
    function a() {
      window.addEventListener("resize", s, !0),
        window.addEventListener("scroll", i, !0),
        window.addEventListener("load", u, !0),
        s();
    }
    function _() {
      return v
        ? (c(),
          M && M.length
            ? (n(), a(), void r())
            : (console.error("no selector elements found"), !1))
        : (console.error("must pass a selector"), !1);
    }
    var v = e.selector,
      l = e.enter,
      m = void 0 === l ? function() {} : l,
      w = e.exit,
      g = void 0 === w ? function() {} : w,
      p = e.progress,
      h = void 0 === p ? function() {} : p,
      x = e.offset,
      y = void 0 === x ? 0 : x,
      A = e.once,
      q = void 0 !== A && A,
      E = null,
      L = !1,
      M = [],
      F = 0;
    _();
  };
  return e;
});
