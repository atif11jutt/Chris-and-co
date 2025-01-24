!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
            return t.default;
          }
          : function () {
            return t;
          };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 6));
})([
  function (t, e, i) {
    "use strict";
    function n(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function r(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    /*!
     * GSAP 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ i.d(e, "a", function () {
      return Hn;
    });
    var o,
      s,
      a,
      l,
      u,
      c,
      h,
      d,
      p,
      f,
      m,
      g,
      v,
      y,
      _,
      w = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      D = { duration: 0.5, overwrite: !1, delay: 0 },
      x = 1e8,
      b = 2 * Math.PI,
      C = b / 4,
      E = 0,
      S = Math.sqrt,
      T = Math.cos,
      P = Math.sin,
      A = function (t) {
        return "string" == typeof t;
      },
      F = function (t) {
        return "function" == typeof t;
      },
      k = function (t) {
        return "number" == typeof t;
      },
      M = function (t) {
        return void 0 === t;
      },
      L = function (t) {
        return "object" == typeof t;
      },
      O = function (t) {
        return !1 !== t;
      },
      I = function () {
        return "undefined" != typeof window;
      },
      j = function (t) {
        return F(t) || A(t);
      },
      z =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () { },
      B = Array.isArray,
      R = /(?:-?\.?\d|\.)+/gi,
      N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      Z = /[+-]=-?[.\d]+/,
      Q = /[^,'"\[\]\s]+/gi,
      X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      Y = {},
      W = {},
      U = function (t) {
        return (W = bt(t, Y)) && xi;
      },
      V = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      G = function (t, e) {
        return !e && console.warn(t);
      },
      K = function (t, e) {
        return (t && (Y[t] = e) && W && (W[t] = e)) || Y;
      },
      $ = function () {
        return 0;
      },
      J = { suppressEvents: !0, isStart: !0, kill: !1 },
      tt = { suppressEvents: !0, kill: !1 },
      et = { suppressEvents: !0 },
      it = {},
      nt = [],
      rt = {},
      ot = {},
      st = {},
      at = 30,
      lt = [],
      ut = "",
      ct = function (t) {
        var e,
          i,
          n = t[0];
        if ((L(n) || F(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (i = lt.length; i-- && !lt[i].targetTest(n););
          e = lt[i];
        }
        for (i = t.length; i--;)
          (t[i] && (t[i]._gsap || (t[i]._gsap = new je(t[i], e)))) ||
            t.splice(i, 1);
        return t;
      },
      ht = function (t) {
        return t._gsap || ct(te(t))[0]._gsap;
      },
      dt = function (t, e, i) {
        return (i = t[e]) && F(i)
          ? t[e]()
          : (M(i) && t.getAttribute && t.getAttribute(e)) || i;
      },
      pt = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      ft = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      mt = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      gt = function (t, e) {
        var i = e.charAt(0),
          n = parseFloat(e.substr(2));
        return (
          (t = parseFloat(t)),
          "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
        );
      },
      vt = function (t, e) {
        for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
        return n < i;
      },
      yt = function () {
        var t,
          e,
          i = nt.length,
          n = nt.slice(0);
        for (rt = {}, nt.length = 0, t = 0; t < i; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      _t = function (t, e, i, n) {
        nt.length && !s && yt(),
          t.render(e, i, n || (s && e < 0 && (t._initted || t._startAt))),
          nt.length && !s && yt();
      },
      wt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Q).length < 2
          ? e
          : A(t)
            ? t.trim()
            : t;
      },
      Dt = function (t) {
        return t;
      },
      xt = function (t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t;
      },
      bt = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      Ct = function t(e, i) {
        for (var n in i)
          "__proto__" !== n &&
            "constructor" !== n &&
            "prototype" !== n &&
            (e[n] = L(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
        return e;
      },
      Et = function (t, e) {
        var i,
          n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n;
      },
      St = function (t) {
        var e,
          i = t.parent || l,
          n = t.keyframes
            ? ((e = B(t.keyframes)),
              function (t, i) {
                for (var n in i)
                  n in t ||
                    ("duration" === n && e) ||
                    "ease" === n ||
                    (t[n] = i[n]);
              })
            : xt;
        if (O(t.inherit))
          for (; i;) n(t, i.vars.defaults), (i = i.parent || i._dp);
        return t;
      },
      Tt = function (t, e, i, n, r) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var o,
          s = t[n];
        if (r) for (o = e[r]; s && s[r] > o;) s = s._prev;
        return (
          s
            ? ((e._next = s._next), (s._next = e))
            : ((e._next = t[i]), (t[i] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = s),
          (e.parent = e._dp = t),
          e
        );
      },
      Pt = function (t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r = e._prev,
          o = e._next;
        r ? (r._next = o) : t[i] === e && (t[i] = o),
          o ? (o._prev = r) : t[n] === e && (t[n] = r),
          (e._next = e._prev = e.parent = null);
      },
      At = function (t, e) {
        t.parent &&
          (!e || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0);
      },
      Ft = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var i = t; i;) (i._dirty = 1), (i = i.parent);
        return t;
      },
      kt = function (t) {
        for (var e = t.parent; e && e.parent;)
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      Mt = function (t, e, i, n) {
        return (
          t._startAt &&
          (s
            ? t._startAt.revert(tt)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, n))
        );
      },
      Lt = function (t) {
        return t._repeat ? Ot(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Ot = function (t, e) {
        var i = Math.floor((t /= e));
        return t && i === t ? i - 1 : i;
      },
      It = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      jt = function (t) {
        return (t._end = mt(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
        ));
      },
      zt = function (t, e) {
        var i = t._dp;
        return (
          i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = mt(
            i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
            jt(t),
            i._dirty || Ft(i, t)),
          t
        );
      },
      Bt = function (t, e) {
        var i;
        if (
          ((e._time ||
            (!e._dur && e._initted) ||
            (e._start < t._time && (e._dur || !e.add))) &&
            ((i = It(t.rawTime(), e)),
              (!e._dur || Vt(0, e.totalDuration(), i) - e._tTime > 1e-8) &&
              e.render(i, !0)),
            Ft(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (i = t; i._dp;)
              i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
          t._zTime = -1e-8;
        }
      },
      Rt = function (t, e, i, n) {
        return (
          e.parent && At(e),
          (e._start = mt(
            (k(i) ? i : i || t !== l ? Yt(t, i, e) : t._time) + e._delay
          )),
          (e._end = mt(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          Tt(t, e, "_first", "_last", t._sort ? "_start" : 0),
          qt(e) || (t._recent = e),
          n || Bt(t, e),
          t._ts < 0 && zt(t, t._tTime),
          t
        );
      },
      Nt = function (t, e) {
        return (
          (Y.ScrollTrigger || V("scrollTrigger", e)) &&
          Y.ScrollTrigger.create(e, t)
        );
      },
      Ht = function (t, e, i, n, r) {
        return (
          Qe(t, e, r),
          t._initted
            ? !i &&
              t._pt &&
              !s &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              p !== be.frame
              ? (nt.push(t), (t._lazy = [r, n]), 1)
              : void 0
            : 1
        );
      },
      qt = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      Zt = function (t, e, i, n) {
        var r = t._repeat,
          o = mt(e) || 0,
          s = t._tTime / t._tDur;
        return (
          s && !n && (t._time *= o / t._dur),
          (t._dur = o),
          (t._tDur = r ? (r < 0 ? 1e10 : mt(o * (r + 1) + t._rDelay * r)) : o),
          s > 0 && !n && zt(t, (t._tTime = t._tDur * s)),
          t.parent && jt(t),
          i || Ft(t.parent, t),
          t
        );
      },
      Qt = function (t) {
        return t instanceof Be ? Ft(t) : Zt(t, t._dur);
      },
      Xt = { _start: 0, endTime: $, totalDuration: $ },
      Yt = function t(e, i, n) {
        var r,
          o,
          s,
          a = e.labels,
          l = e._recent || Xt,
          u = e.duration() >= x ? l.endTime(!1) : e._dur;
        return A(i) && (isNaN(i) || i in a)
          ? ((o = i.charAt(0)),
            (s = "%" === i.substr(-1)),
            (r = i.indexOf("=")),
            "<" === o || ">" === o
              ? (r >= 0 && (i = i.replace(/=/, "")),
                ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(i.substr(1)) || 0) *
                (s ? (r < 0 ? l : n).totalDuration() / 100 : 1))
              : r < 0
                ? (i in a || (a[i] = u), a[i])
                : ((o = parseFloat(i.charAt(r - 1) + i.substr(r + 1))),
                  s && n && (o = (o / 100) * (B(n) ? n[0] : n).totalDuration()),
                  r > 1 ? t(e, i.substr(0, r - 1), n) + o : u + o))
          : null == i
            ? u
            : +i;
      },
      Wt = function (t, e, i) {
        var n,
          r,
          o = k(e[1]),
          s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[s];
        if ((o && (a.duration = e[1]), (a.parent = i), t)) {
          for (n = a, r = i; r && !("immediateRender" in n);)
            (n = r.vars.defaults || {}), (r = O(r.vars.inherit) && r.parent);
          (a.immediateRender = O(n.immediateRender)),
            t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
        }
        return new Ve(e[0], a, e[s + 1]);
      },
      Ut = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      Vt = function (t, e, i) {
        return i < t ? t : i > e ? e : i;
      },
      Gt = function (t, e) {
        return A(t) && (e = X.exec(t)) ? e[1] : "";
      },
      Kt = [].slice,
      $t = function (t, e) {
        return (
          t &&
          L(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && L(t[0]))) &&
          !t.nodeType &&
          t !== u
        );
      },
      Jt = function (t, e, i) {
        return (
          void 0 === i && (i = []),
          t.forEach(function (t) {
            var n;
            return (A(t) && !e) || $t(t, 1)
              ? (n = i).push.apply(n, te(t))
              : i.push(t);
          }) || i
        );
      },
      te = function (t, e, i) {
        return a && !e && a.selector
          ? a.selector(t)
          : !A(t) || i || (!c && Ce())
            ? B(t)
              ? Jt(t, i)
              : $t(t)
                ? Kt.call(t, 0)
                : t
                  ? [t]
                  : []
            : Kt.call((e || h).querySelectorAll(t), 0);
      },
      ee = function (t) {
        return (
          (t = te(t)[0] || G("Invalid scope") || {}),
          function (e) {
            var i = t.current || t.nativeElement || t;
            return te(
              e,
              i.querySelectorAll
                ? i
                : i === t
                  ? G("Invalid scope") || h.createElement("div")
                  : t
            );
          }
        );
      },
      ie = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ne = function (t) {
        if (F(t)) return t;
        var e = L(t) ? t : { each: t },
          i = ke(e.ease),
          n = e.from || 0,
          r = parseFloat(e.base) || 0,
          o = {},
          s = n > 0 && n < 1,
          a = isNaN(n) || s,
          l = e.axis,
          u = n,
          c = n;
        return (
          A(n)
            ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !s && a && ((u = n[0]), (c = n[1])),
          function (t, s, h) {
            var d,
              p,
              f,
              m,
              g,
              v,
              y,
              _,
              w,
              D = (h || e).length,
              b = o[D];
            if (!b) {
              if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, x])[1])) {
                for (
                  y = -x;
                  y < (y = h[w++].getBoundingClientRect().left) && w < D;

                );
                w < D && w--;
              }
              for (
                b = o[D] = [],
                d = a ? Math.min(w, D) * u - 0.5 : n % w,
                p = w === x ? 0 : a ? (D * c) / w - 0.5 : (n / w) | 0,
                y = 0,
                _ = x,
                v = 0;
                v < D;
                v++
              )
                (f = (v % w) - d),
                  (m = p - ((v / w) | 0)),
                  (b[v] = g =
                    l ? Math.abs("y" === l ? m : f) : S(f * f + m * m)),
                  g > y && (y = g),
                  g < _ && (_ = g);
              "random" === n && ie(b),
                (b.max = y - _),
                (b.min = _),
                (b.v = D =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                    (w > D
                      ? D - 1
                      : l
                        ? "y" === l
                          ? D / w
                          : w
                        : Math.max(w, D / w)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (b.b = D < 0 ? r - D : r),
                (b.u = Gt(e.amount || e.each) || 0),
                (i = i && D < 0 ? Ae(i) : i);
            }
            return (
              (D = (b[t] - b.min) / b.max || 0),
              mt(b.b + (i ? i(D) : D) * b.v) + b.u
            );
          }
        );
      },
      re = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (i) {
          var n = mt(Math.round(parseFloat(i) / t) * t * e);
          return (n - (n % 1)) / e + (k(i) ? 0 : Gt(i));
        };
      },
      oe = function (t, e) {
        var i,
          n,
          r = B(t);
        return (
          !r &&
          L(t) &&
          ((i = r = t.radius || x),
            t.values
              ? ((t = te(t.values)), (n = !k(t[0])) && (i *= i))
              : (t = re(t.increment))),
          Ut(
            e,
            r
              ? F(t)
                ? function (e) {
                  return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                }
                : function (e) {
                  for (
                    var r,
                    o,
                    s = parseFloat(n ? e.x : e),
                    a = parseFloat(n ? e.y : 0),
                    l = x,
                    u = 0,
                    c = t.length;
                    c--;

                  )
                    (r = n
                      ? (r = t[c].x - s) * r + (o = t[c].y - a) * o
                      : Math.abs(t[c] - s)) < l && ((l = r), (u = c));
                  return (
                    (u = !i || l <= i ? t[u] : e),
                    n || u === e || k(e) ? u : u + Gt(e)
                  );
                }
              : re(t)
          )
        );
      },
      se = function (t, e, i, n) {
        return Ut(B(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
          return B(t)
            ? t[~~(Math.random() * t.length)]
            : (i = i || 1e-5) &&
            (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round(
                (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
              ) *
              i *
              n
            ) / n;
        });
      },
      ae = function (t, e, i) {
        return Ut(i, function (i) {
          return t[~~e(i)];
        });
      },
      le = function (t) {
        for (var e, i, n, r, o = 0, s = ""; ~(e = t.indexOf("random(", o));)
          (n = t.indexOf(")", e)),
            (r = "[" === t.charAt(e + 7)),
            (i = t.substr(e + 7, n - e - 7).match(r ? Q : R)),
            (s +=
              t.substr(o, e - o) +
              se(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
            (o = n + 1);
        return s + t.substr(o, t.length - o);
      },
      ue = function (t, e, i, n, r) {
        var o = e - t,
          s = n - i;
        return Ut(r, function (e) {
          return i + (((e - t) / o) * s || 0);
        });
      },
      ce = function (t, e, i) {
        var n,
          r,
          o,
          s = t.labels,
          a = x;
        for (n in s)
          (r = s[n] - e) < 0 == !!i &&
            r &&
            a > (r = Math.abs(r)) &&
            ((o = n), (a = r));
        return o;
      },
      he = function (t, e, i) {
        var n,
          r,
          o,
          s = t.vars,
          l = s[e],
          u = a,
          c = t._ctx;
        if (l)
          return (
            (n = s[e + "Params"]),
            (r = s.callbackScope || t),
            i && nt.length && yt(),
            c && (a = c),
            (o = n ? l.apply(r, n) : l.call(r)),
            (a = u),
            o
          );
      },
      de = function (t) {
        return (
          At(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!s),
          t.progress() < 1 && he(t, "onInterrupt"),
          t
        );
      },
      pe = [],
      fe = function (t) {
        if (t)
          if (((t = (!t.name && t.default) || t), I() || t.headless)) {
            var e = t.name,
              i = F(t),
              n =
                e && !i && t.init
                  ? function () {
                    this._props = [];
                  }
                  : t,
              r = {
                init: $,
                render: ri,
                add: qe,
                kill: si,
                modifier: oi,
                rawVars: 0,
              },
              o = {
                targetTest: 0,
                get: 0,
                getSetter: ti,
                aliases: {},
                register: 0,
              };
            if ((Ce(), t !== n)) {
              if (ot[e]) return;
              xt(n, xt(Et(t, r), o)),
                bt(n.prototype, bt(r, Et(t, o))),
                (ot[(n.prop = e)] = n),
                t.targetTest && (lt.push(n), (it[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            K(e, n), t.register && t.register(xi, n, ui);
          } else pe.push(t);
      },
      me = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      ge = function (t, e, i) {
        return (
          (255 *
            (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (i - e) * t * 6
              : t < 0.5
                ? i
                : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
            0.5) |
          0
        );
      },
      ve = function (t, e, i) {
        var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p = t ? (k(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : me.black;
        if (!p) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]))
            p = me[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((n = t.charAt(1)),
                  (r = t.charAt(2)),
                  (o = t.charAt(3)),
                  (t =
                    "#" +
                    n +
                    n +
                    r +
                    r +
                    o +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
            )
              return [
                (p = parseInt(t.substr(1, 6), 16)) >> 16,
                (p >> 8) & 255,
                255 & p,
                parseInt(t.substr(7), 16) / 255,
              ];
            p = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & 255,
              255 & t,
            ];
          } else if ("hsl" === t.substr(0, 3))
            if (((p = d = t.match(R)), e)) {
              if (~t.indexOf("="))
                return (p = t.match(N)), i && p.length < 4 && (p[3] = 1), p;
            } else
              (s = (+p[0] % 360) / 360),
                (a = +p[1] / 100),
                (n =
                  2 * (l = +p[2] / 100) -
                  (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = ge(s + 1 / 3, n, r)),
                (p[1] = ge(s, n, r)),
                (p[2] = ge(s - 1 / 3, n, r));
          else p = t.match(R) || me.transparent;
          p = p.map(Number);
        }
        return (
          e &&
          !d &&
          ((n = p[0] / 255),
            (r = p[1] / 255),
            (o = p[2] / 255),
            (l = ((u = Math.max(n, r, o)) + (c = Math.min(n, r, o))) / 2),
            u === c
              ? (s = a = 0)
              : ((h = u - c),
                (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)),
                (s =
                  u === n
                    ? (r - o) / h + (r < o ? 6 : 0)
                    : u === r
                      ? (o - n) / h + 2
                      : (n - r) / h + 4),
                (s *= 60)),
            (p[0] = ~~(s + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * l + 0.5))),
          i && p.length < 4 && (p[3] = 1),
          p
        );
      },
      ye = function (t) {
        var e = [],
          i = [],
          n = -1;
        return (
          t.split(we).forEach(function (t) {
            var r = t.match(H) || [];
            e.push.apply(e, r), i.push((n += r.length + 1));
          }),
          (e.c = i),
          e
        );
      },
      _e = function (t, e, i) {
        var n,
          r,
          o,
          s,
          a = "",
          l = (t + a).match(we),
          u = e ? "hsla(" : "rgba(",
          c = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (
              (t = ve(t, e, 1)) &&
              u +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
            );
          })),
            i && ((o = ye(t)), (n = i.c).join(a) !== o.c.join(a)))
        )
          for (s = (r = t.replace(we, "1").split(H)).length - 1; c < s; c++)
            a +=
              r[c] +
              (~n.indexOf(c)
                ? l.shift() || u + "0,0,0,0)"
                : (o.length ? o : l.length ? l : i).shift());
        if (!r)
          for (s = (r = t.split(we)).length - 1; c < s; c++) a += r[c] + l[c];
        return a + r[s];
      },
      we = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in me) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      De = /hsl[a]?\(/,
      xe = function (t) {
        var e,
          i = t.join(" ");
        if (((we.lastIndex = 0), we.test(i)))
          return (
            (e = De.test(i)),
            (t[1] = _e(t[1], e)),
            (t[0] = _e(t[0], e, ye(t[1]))),
            !0
          );
      },
      be = (function () {
        var t,
          e,
          i,
          n,
          r,
          o,
          s = Date.now,
          a = 500,
          l = 33,
          p = s(),
          f = p,
          g = 1e3 / 240,
          v = g,
          y = [],
          _ = function i(u) {
            var c,
              h,
              d,
              m,
              _ = s() - f,
              w = !0 === u;
            if (
              ((_ > a || _ < 0) && (p += _ - l),
                ((c = (d = (f += _) - p) - v) > 0 || w) &&
                ((m = ++n.frame),
                  (r = d - 1e3 * n.time),
                  (n.time = d /= 1e3),
                  (v += c + (c >= g ? 4 : g - c)),
                  (h = 1)),
                w || (t = e(i)),
                h)
            )
              for (o = 0; o < y.length; o++) y[o](d, r, m, u);
          };
        return (n = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (t) {
            return r / (1e3 / (t || 60));
          },
          wake: function () {
            d &&
              (!c &&
                I() &&
                ((u = c = window),
                  (h = u.document || {}),
                  (Y.gsap = xi),
                  (u.gsapVersions || (u.gsapVersions = [])).push(xi.version),
                  U(W || u.GreenSockGlobals || (!u.gsap && u) || {}),
                  pe.forEach(fe)),
                (i =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && n.sleep(),
                (e =
                  i ||
                  function (t) {
                    return setTimeout(t, (v - 1e3 * n.time + 1) | 0);
                  }),
                (m = 1),
                _(2));
          },
          sleep: function () {
            (i ? cancelAnimationFrame : clearTimeout)(t), (m = 0), (e = $);
          },
          lagSmoothing: function (t, e) {
            (a = t || 1 / 0), (l = Math.min(e || 33, a));
          },
          fps: function (t) {
            (g = 1e3 / (t || 240)), (v = 1e3 * n.time + g);
          },
          add: function (t, e, i) {
            var r = e
              ? function (e, i, o, s) {
                t(e, i, o, s), n.remove(r);
              }
              : t;
            return n.remove(t), y[i ? "unshift" : "push"](r), Ce(), r;
          },
          remove: function (t, e) {
            ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--;
          },
          _listeners: y,
        });
      })(),
      Ce = function () {
        return !m && be.wake();
      },
      Ee = {},
      Se = /^[\d.\-M][\d.\-,\s]/,
      Te = /["']/g,
      Pe = function (t) {
        for (
          var e,
          i,
          n,
          r = {},
          o = t.substr(1, t.length - 3).split(":"),
          s = o[0],
          a = 1,
          l = o.length;
          a < l;
          a++
        )
          (i = o[a]),
            (e = a !== l - 1 ? i.lastIndexOf(",") : i.length),
            (n = i.substr(0, e)),
            (r[s] = isNaN(n) ? n.replace(Te, "").trim() : +n),
            (s = i.substr(e + 1).trim());
        return r;
      },
      Ae = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Fe = function t(e, i) {
        for (var n, r = e._first; r;)
          r instanceof Be
            ? t(r, i)
            : !r.vars.yoyoEase ||
            (r._yoyo && r._repeat) ||
            r._yoyo === i ||
            (r.timeline
              ? t(r.timeline, i)
              : ((n = r._ease),
                (r._ease = r._yEase),
                (r._yEase = n),
                (r._yoyo = i))),
            (r = r._next);
      },
      ke = function (t, e) {
        return (
          (t &&
            (F(t)
              ? t
              : Ee[t] ||
              (function (t) {
                var e,
                  i,
                  n,
                  r,
                  o = (t + "").split("("),
                  s = Ee[o[0]];
                return s && o.length > 1 && s.config
                  ? s.config.apply(
                    null,
                    ~t.indexOf("{")
                      ? [Pe(o[1])]
                      : ((e = t),
                        (i = e.indexOf("(") + 1),
                        (n = e.indexOf(")")),
                        (r = e.indexOf("(", i)),
                        e.substring(
                          i,
                          ~r && r < n ? e.indexOf(")", n + 1) : n
                        ))
                        .split(",")
                        .map(wt)
                  )
                  : Ee._CE && Se.test(t)
                    ? Ee._CE("", t)
                    : s;
              })(t))) ||
          e
        );
      },
      Me = function (t, e, i, n) {
        void 0 === i &&
          (i = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
          (n = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
        var r,
          o = { easeIn: e, easeOut: i, easeInOut: n };
        return (
          pt(t, function (t) {
            for (var e in ((Ee[t] = Y[t] = o),
              (Ee[(r = t.toLowerCase())] = i),
              o))
              Ee[
                r +
                ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = Ee[t + "." + e] = o[e];
          }),
          o
        );
      },
      Le = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Oe = function t(e, i, n) {
        var r = i >= 1 ? i : 1,
          o = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
          s = (o / b) * (Math.asin(1 / r) || 0),
          a = function (t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * P((t - s) * o) + 1;
          },
          l =
            "out" === e
              ? a
              : "in" === e
                ? function (t) {
                  return 1 - a(1 - t);
                }
                : Le(a);
        return (
          (o = b / o),
          (l.config = function (i, n) {
            return t(e, i, n);
          }),
          l
        );
      },
      Ie = function t(e, i) {
        void 0 === i && (i = 1.70158);
        var n = function (t) {
          return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
        },
          r =
            "out" === e
              ? n
              : "in" === e
                ? function (t) {
                  return 1 - n(1 - t);
                }
                : Le(n);
        return (
          (r.config = function (i) {
            return t(e, i);
          }),
          r
        );
      };
    pt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var i = e < 5 ? e + 1 : e;
      Me(
        t + ",Power" + (i - 1),
        e
          ? function (t) {
            return Math.pow(t, i);
          }
          : function (t) {
            return t;
          },
        function (t) {
          return 1 - Math.pow(1 - t, i);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, i) / 2
            : 1 - Math.pow(2 * (1 - t), i) / 2;
        }
      );
    }),
      (Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn),
      Me("Elastic", Oe("in"), Oe("out"), Oe()),
      (g = 7.5625),
      (y = 1 / (v = 2.75)),
      Me(
        "Bounce",
        function (t) {
          return 1 - _(1 - t);
        },
        (_ = function (t) {
          return t < y
            ? g * t * t
            : t < 0.7272727272727273
              ? g * Math.pow(t - 1.5 / v, 2) + 0.75
              : t < 0.9090909090909092
                ? g * (t -= 2.25 / v) * t + 0.9375
                : g * Math.pow(t - 2.625 / v, 2) + 0.984375;
        })
      ),
      Me("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      Me("Circ", function (t) {
        return -(S(1 - t * t) - 1);
      }),
      Me("Sine", function (t) {
        return 1 === t ? 1 : 1 - T(t * C);
      }),
      Me("Back", Ie("in"), Ie("out"), Ie()),
      (Ee.SteppedEase =
        Ee.steps =
        Y.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
              n = t + (e ? 0 : 1),
              r = e ? 1 : 0;
            return function (t) {
              return (((n * Vt(0, 1 - 1e-8, t)) | 0) + r) * i;
            };
          },
        }),
      (D.ease = Ee["quad.out"]),
      pt(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (ut += t + "," + t + "Params,");
        }
      );
    var je = function (t, e) {
      (this.id = E++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : dt),
        (this.set = e ? e.getSetter : ti);
    },
      ze = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Zt(this, +t.duration, 1, 1),
            (this.data = t.data),
            a && ((this._ctx = a), a.data.push(this)),
            m || be.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Zt(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((Ce(), !arguments.length)) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
              for (
                zt(this, t), !i._dp || i.parent || Bt(i, this);
                i && i.parent;

              )
                i.parent._time !==
                  i._start +
                  (i._ts >= 0
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                  i.totalTime(i._tTime, !0),
                  (i = i.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Rt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), _t(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                Math.min(this.totalDuration(), t + Lt(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                  ? 1
                  : 0;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Lt(this),
                e
              )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                  ? 1
                  : 0;
          }),
          (e.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * i, e)
              : this._repeat
                ? Ot(this._tTime, i) + 1
                : 1;
          }),
          (e.timeScale = function (t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var i =
              this.parent && this._ts
                ? It(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(
                Vt(-Math.abs(this._delay), this._tDur, i),
                !1 !== e
              ),
              jt(this),
              kt(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                ((this._ps = t),
                  t
                    ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (Ce(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                        1e-8 !== Math.abs(this._zTime) &&
                        (this._tTime -= 1e-8)
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Rt(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (O(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? It(e.rawTime(t), this)
                  : this._tTime
              : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = et);
            var e = s;
            return (
              (s = t),
              (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
                this.totalTime(-0.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              (s = e),
              this
            );
          }),
          (e.globalTime = function (t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e;)
              (i = e._start + i / (Math.abs(e._ts) || 1)), (e = e._dp);
            return !this.parent && this._sat ? this._sat.globalTime(t) : i;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), Qt(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), Qt(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Yt(this, t), O(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, O(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              i = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= i &&
                t < this.endTime(!0) - 1e-8
              )
            );
          }),
          (e.eventCallback = function (t, e, i) {
            var n = this.vars;
            return arguments.length > 1
              ? (e
                ? ((n[t] = e),
                  i && (n[t + "Params"] = i),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete n[t],
                this)
              : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (i) {
              var n = F(t) ? t : Dt,
                r = function () {
                  var t = e.then;
                  (e.then = null),
                    F(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    i(n),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                ? r()
                : (e._prom = r);
            });
          }),
          (e.kill = function () {
            de(this);
          }),
          t
        );
      })();
    xt(ze.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Be = (function (t) {
      function e(e, i) {
        var r;
        return (
          void 0 === e && (e = {}),
          ((r = t.call(this, e) || this).labels = {}),
          (r.smoothChildTiming = !!e.smoothChildTiming),
          (r.autoRemoveChildren = !!e.autoRemoveChildren),
          (r._sort = O(e.sortChildren)),
          l && Rt(e.parent || l, n(r), i),
          e.reversed && r.reverse(),
          e.paused && r.paused(!0),
          e.scrollTrigger && Nt(n(r), e.scrollTrigger),
          r
        );
      }
      r(e, t);
      var i = e.prototype;
      return (
        (i.to = function (t, e, i) {
          return Wt(0, arguments, this), this;
        }),
        (i.from = function (t, e, i) {
          return Wt(1, arguments, this), this;
        }),
        (i.fromTo = function (t, e, i, n) {
          return Wt(2, arguments, this), this;
        }),
        (i.set = function (t, e, i) {
          return (
            (e.duration = 0),
            (e.parent = this),
            St(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Ve(t, e, Yt(this, i), 1),
            this
          );
        }),
        (i.call = function (t, e, i) {
          return Rt(this, Ve.delayedCall(0, t, e), i);
        }),
        (i.staggerTo = function (t, e, i, n, r, o, s) {
          return (
            (i.duration = e),
            (i.stagger = i.stagger || n),
            (i.onComplete = o),
            (i.onCompleteParams = s),
            (i.parent = this),
            new Ve(t, i, Yt(this, r)),
            this
          );
        }),
        (i.staggerFrom = function (t, e, i, n, r, o, s) {
          return (
            (i.runBackwards = 1),
            (St(i).immediateRender = O(i.immediateRender)),
            this.staggerTo(t, e, i, n, r, o, s)
          );
        }),
        (i.staggerFromTo = function (t, e, i, n, r, o, s, a) {
          return (
            (n.startAt = i),
            (St(n).immediateRender = O(n.immediateRender)),
            this.staggerTo(t, e, n, r, o, s, a)
          );
        }),
        (i.render = function (t, e, i) {
          var n,
            r,
            o,
            a,
            u,
            c,
            h,
            d,
            p,
            f,
            m,
            g,
            v = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            _ = this._dur,
            w = t <= 0 ? 0 : mt(t),
            D = this._zTime < 0 != t < 0 && (this._initted || !_);
          if (
            (this !== l && w > y && t >= 0 && (w = y),
              w !== this._tTime || i || D)
          ) {
            if (
              (v !== this._time &&
                _ &&
                ((w += this._time - v), (t += this._time - v)),
                (n = w),
                (p = this._start),
                (c = !(d = this._ts)),
                D && (_ || (v = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
            ) {
              if (
                ((m = this._yoyo),
                  (u = _ + this._rDelay),
                  this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * u + t, e, i);
              if (
                ((n = mt(w % u)),
                  w === y
                    ? ((a = this._repeat), (n = _))
                    : ((a = ~~(w / u)) && a === w / u && ((n = _), a--),
                      n > _ && (n = _)),
                  (f = Ot(this._tTime, u)),
                  !v &&
                  this._tTime &&
                  f !== a &&
                  this._tTime - f * u - this._dur <= 0 &&
                  (f = a),
                  m && 1 & a && ((n = _ - n), (g = 1)),
                  a !== f && !this._lock)
              ) {
                var x = m && 1 & f,
                  b = x === (m && 1 & a);
                if (
                  (a < f && (x = !x),
                    (v = x ? 0 : w % _ ? _ : w),
                    (this._lock = 1),
                    (this.render(v || (g ? 0 : mt(a * u)), e, !_)._lock = 0),
                    (this._tTime = w),
                    !e && this.parent && he(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                    !g &&
                    (this.invalidate()._lock = 1),
                    (v && v !== this._time) ||
                    c !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((_ = this._dur),
                    (y = this._tDur),
                    b &&
                    ((this._lock = 2),
                      (v = x ? _ : -1e-4),
                      this.render(v, !0),
                      this.vars.repeatRefresh && !g && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                )
                  return this;
                Fe(this, g);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, i) {
                  var n;
                  if (i > e)
                    for (n = t._first; n && n._start <= i;) {
                      if ("isPause" === n.data && n._start > e) return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= i;) {
                      if ("isPause" === n.data && n._start < e) return n;
                      n = n._prev;
                    }
                })(this, mt(v), mt(n))) &&
                (w -= n - (n = h._start)),
                (this._tTime = w),
                (this._time = n),
                (this._act = !d),
                this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (v = 0)),
                !v && n && !e && !a && (he(this, "onStart"), this._tTime !== w))
            )
              return this;
            if (n >= v && t >= 0)
              for (r = this._first; r;) {
                if (
                  ((o = r._next), (r._act || n >= r._start) && r._ts && h !== r)
                ) {
                  if (r.parent !== this) return this.render(t, e, i);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (n - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                        (n - r._start) * r._ts,
                      e,
                      i
                    ),
                      n !== this._time || (!this._ts && !c))
                  ) {
                    (h = 0), o && (w += this._zTime = -1e-8);
                    break;
                  }
                }
                r = o;
              }
            else {
              r = this._last;
              for (var C = t < 0 ? t : n; r;) {
                if (
                  ((o = r._prev), (r._act || C <= r._end) && r._ts && h !== r)
                ) {
                  if (r.parent !== this) return this.render(t, e, i);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (C - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                        (C - r._start) * r._ts,
                      e,
                      i || (s && (r._initted || r._startAt))
                    ),
                      n !== this._time || (!this._ts && !c))
                  ) {
                    (h = 0), o && (w += this._zTime = C ? -1e-8 : 1e-8);
                    break;
                  }
                }
                r = o;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
                (h.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1),
                this._ts)
            )
              return (this._start = p), jt(this), this.render(t, e, i);
            this._onUpdate && !e && he(this, "onUpdate", !0),
              ((w === y && this._tTime >= this.totalDuration()) || (!w && v)) &&
              ((p !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !_) &&
                  ((w === y && this._ts > 0) || (!w && this._ts < 0)) &&
                  At(this, 1),
                  e ||
                  (t < 0 && !v) ||
                  (!w && !v && y) ||
                  (he(
                    this,
                    w === y && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                    this._prom &&
                    !(w < y && this.timeScale() > 0) &&
                    this._prom())));
          }
          return this;
        }),
        (i.add = function (t, e) {
          var i = this;
          if ((k(e) || (e = Yt(this, e, t)), !(t instanceof ze))) {
            if (B(t))
              return (
                t.forEach(function (t) {
                  return i.add(t, e);
                }),
                this
              );
            if (A(t)) return this.addLabel(t, e);
            if (!F(t)) return this;
            t = Ve.delayedCall(0, t);
          }
          return this !== t ? Rt(this, t, e) : this;
        }),
        (i.getChildren = function (t, e, i, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === i && (i = !0),
            void 0 === n && (n = -x);
          for (var r = [], o = this._first; o;)
            o._start >= n &&
              (o instanceof Ve
                ? e && r.push(o)
                : (i && r.push(o),
                  t && r.push.apply(r, o.getChildren(!0, e, i)))),
              (o = o._next);
          return r;
        }),
        (i.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
            if (e[i].vars.id === t) return e[i];
        }),
        (i.remove = function (t) {
          return A(t)
            ? this.removeLabel(t)
            : F(t)
              ? this.killTweensOf(t)
              : (Pt(this, t),
                t === this._recent && (this._recent = this._last),
                Ft(this));
        }),
        (i.totalTime = function (e, i) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
              this._ts &&
              (this._start = mt(
                be.time -
                (this._ts > 0
                  ? e / this._ts
                  : (this.totalDuration() - e) / -this._ts)
              )),
              t.prototype.totalTime.call(this, e, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (i.addLabel = function (t, e) {
          return (this.labels[t] = Yt(this, e)), this;
        }),
        (i.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (i.addPause = function (t, e, i) {
          var n = Ve.delayedCall(0, e || $, i);
          return (
            (n.data = "isPause"), (this._hasPause = 1), Rt(this, n, Yt(this, t))
          );
        }),
        (i.removePause = function (t) {
          var e = this._first;
          for (t = Yt(this, t); e;)
            e._start === t && "isPause" === e.data && At(e), (e = e._next);
        }),
        (i.killTweensOf = function (t, e, i) {
          for (var n = this.getTweensOf(t, i), r = n.length; r--;)
            Re !== n[r] && n[r].kill(t, e);
          return this;
        }),
        (i.getTweensOf = function (t, e) {
          for (var i, n = [], r = te(t), o = this._first, s = k(e); o;)
            o instanceof Ve
              ? vt(o._targets, r) &&
              (s
                ? (!Re || (o._initted && o._ts)) &&
                o.globalTime(0) <= e &&
                o.globalTime(o.totalDuration()) > e
                : !e || o.isActive()) &&
              n.push(o)
              : (i = o.getTweensOf(r, e)).length && n.push.apply(n, i),
              (o = o._next);
          return n;
        }),
        (i.tweenTo = function (t, e) {
          e = e || {};
          var i,
            n = this,
            r = Yt(n, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            l = o.onStartParams,
            u = o.immediateRender,
            c = Ve.to(
              n,
              xt(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: r,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (r - (s && "time" in s ? s.time : n._time)) /
                      n.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((n.pause(), !i)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (r - (s && "time" in s ? s.time : n._time)) /
                          n.timeScale()
                        );
                      c._dur !== t && Zt(c, t, 0, 1).render(c._time, !0, !0),
                        (i = 1);
                    }
                    a && a.apply(c, l || []);
                  },
                },
                e
              )
            );
          return u ? c.render(0) : c;
        }),
        (i.tweenFromTo = function (t, e, i) {
          return this.tweenTo(e, xt({ startAt: { time: Yt(this, t) } }, i));
        }),
        (i.recent = function () {
          return this._recent;
        }),
        (i.nextLabel = function (t) {
          return void 0 === t && (t = this._time), ce(this, Yt(this, t));
        }),
        (i.previousLabel = function (t) {
          return void 0 === t && (t = this._time), ce(this, Yt(this, t), 1);
        }),
        (i.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (i.shiftChildren = function (t, e, i) {
          void 0 === i && (i = 0);
          for (var n, r = this._first, o = this.labels; r;)
            r._start >= i && ((r._start += t), (r._end += t)), (r = r._next);
          if (e) for (n in o) o[n] >= i && (o[n] += t);
          return Ft(this);
        }),
        (i.invalidate = function (e) {
          var i = this._first;
          for (this._lock = 0; i;) i.invalidate(e), (i = i._next);
          return t.prototype.invalidate.call(this, e);
        }),
        (i.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, i = this._first; i;)
            (e = i._next), this.remove(i), (i = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Ft(this)
          );
        }),
        (i.totalDuration = function (t) {
          var e,
            i,
            n,
            r = 0,
            o = this,
            s = o._last,
            a = x;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -t : t)
            );
          if (o._dirty) {
            for (n = o.parent; s;)
              (e = s._prev),
                s._dirty && s.totalDuration(),
                (i = s._start) > a && o._sort && s._ts && !o._lock
                  ? ((o._lock = 1), (Rt(o, s, i - s._delay, 1)._lock = 0))
                  : (a = i),
                i < 0 &&
                s._ts &&
                ((r -= i),
                  ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                  ((o._start += i / o._ts), (o._time -= i), (o._tTime -= i)),
                  o.shiftChildren(-i, !1, -Infinity),
                  (a = 0)),
                s._end > r && s._ts && (r = s._end),
                (s = e);
            Zt(o, o === l && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((l._ts && (_t(l, It(t, l)), (p = be.frame)), be.frame >= at)) {
            at += w.autoSleep || 120;
            var e = l._first;
            if ((!e || !e._ts) && w.autoSleep && be._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || be.sleep();
            }
          }
        }),
        e
      );
    })(ze);
    xt(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Re,
      Ne,
      He = function (t, e, i, n, r, o, s) {
        var a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m = new ui(this._pt, t, e, 0, 1, ni, null, r),
          g = 0,
          v = 0;
        for (
          m.b = i,
          m.e = n,
          i += "",
          (p = ~(n += "").indexOf("random(")) && (n = le(n)),
          o && (o((f = [i, n]), t, e), (i = f[0]), (n = f[1])),
          l = i.match(q) || [];
          (a = q.exec(n));

        )
          (c = a[0]),
            (h = n.substring(g, a.index)),
            u ? (u = (u + 1) % 5) : "rgba(" === h.substr(-5) && (u = 1),
            c !== l[v++] &&
            ((d = parseFloat(l[v - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: h || 1 === v ? h : ",",
                s: d,
                c: "=" === c.charAt(1) ? gt(d, c) - d : parseFloat(c) - d,
                m: u && u < 4 ? Math.round : 0,
              }),
              (g = q.lastIndex));
        return (
          (m.c = g < n.length ? n.substring(g, n.length) : ""),
          (m.fp = s),
          (Z.test(n) || p) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      qe = function (t, e, i, n, r, o, s, a, l, u) {
        F(n) && (n = n(r || 0, t, o));
        var c,
          h = t[e],
          d =
            "get" !== i
              ? i
              : F(h)
                ? l
                  ? t[
                    e.indexOf("set") || !F(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](l)
                  : t[e]()
                : h,
          p = F(h) ? (l ? $e : Ke) : Ge;
        if (
          (A(n) &&
            (~n.indexOf("random(") && (n = le(n)),
              "=" === n.charAt(1) &&
              ((c = gt(d, n) + (Gt(d) || 0)) || 0 === c) &&
              (n = c)),
            !u || d !== n || Ne)
        )
          return isNaN(d * n) || "" === n
            ? (!h && !(e in t) && V(e, n),
              He.call(this, t, e, d, n, p, a || w.stringFilter, l))
            : ((c = new ui(
              this._pt,
              t,
              e,
              +d || 0,
              n - (d || 0),
              "boolean" == typeof h ? ii : ei,
              0,
              p
            )),
              l && (c.fp = l),
              s && c.modifier(s, this, t),
              (this._pt = c));
      },
      Ze = function (t, e, i, n, r, o) {
        var s, a, l, u;
        if (
          ot[t] &&
          !1 !==
          (s = new ot[t]()).init(
            r,
            s.rawVars
              ? e[t]
              : (function (t, e, i, n, r) {
                if (
                  (F(t) && (t = Ye(t, r, e, i, n)),
                    !L(t) || (t.style && t.nodeType) || B(t) || z(t))
                )
                  return A(t) ? Ye(t, r, e, i, n) : t;
                var o,
                  s = {};
                for (o in t) s[o] = Ye(t[o], r, e, i, n);
                return s;
              })(e[t], n, r, o, i),
            i,
            n,
            o
          ) &&
          ((i._pt = a = new ui(i._pt, r, t, 0, 1, s.render, s, 0, s.priority)),
            i !== f)
        )
          for (
            l = i._ptLookup[i._targets.indexOf(r)], u = s._props.length;
            u--;

          )
            l[s._props[u]] = a;
        return s;
      },
      Qe = function t(e, i, n) {
        var r,
          a,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v,
          y,
          _,
          w = e.vars,
          b = w.ease,
          C = w.startAt,
          E = w.immediateRender,
          S = w.lazy,
          T = w.onUpdate,
          P = w.runBackwards,
          A = w.yoyoEase,
          F = w.keyframes,
          k = w.autoRevert,
          M = e._dur,
          L = e._startAt,
          I = e._targets,
          j = e.parent,
          z = j && "nested" === j.data ? j.vars.targets : I,
          B = "auto" === e._overwrite && !o,
          R = e.timeline;
        if (
          (R && (!F || !b) && (b = "none"),
            (e._ease = ke(b, D.ease)),
            (e._yEase = A ? Ae(ke(!0 === A ? b : A, D.ease)) : 0),
            A &&
            e._yoyo &&
            !e._repeat &&
            ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
            (e._from = !R && !!w.runBackwards),
            !R || (F && !w.stagger))
        ) {
          if (
            ((y = (f = I[0] ? ht(I[0]).harness : 0) && w[f.prop]),
              (r = Et(w, it)),
              L &&
              (L._zTime < 0 && L.progress(1),
                i < 0 && P && E && !k
                  ? L.render(-1, !0)
                  : L.revert(P && M ? tt : J),
                (L._lazy = 0)),
              C)
          ) {
            if (
              (At(
                (e._startAt = Ve.set(
                  I,
                  xt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: j,
                      immediateRender: !0,
                      lazy: !L && O(S),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        T &&
                        function () {
                          return he(e, "onUpdate");
                        },
                      stagger: 0,
                    },
                    C
                  )
                ))
              ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                i < 0 && (s || (!E && !k)) && e._startAt.revert(tt),
                E && M && i <= 0 && n <= 0)
            )
              return void (i && (e._zTime = i));
          } else if (P && M && !L)
            if (
              (i && (E = !1),
                (u = xt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: E && !L && O(S),
                    immediateRender: E,
                    stagger: 0,
                    parent: j,
                  },
                  r
                )),
                y && (u[f.prop] = y),
                At((e._startAt = Ve.set(I, u))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                i < 0 && (s ? e._startAt.revert(tt) : e._startAt.render(-1, !0)),
                (e._zTime = i),
                E)
            ) {
              if (!i) return;
            } else t(e._startAt, 1e-8, 1e-8);
          for (
            e._pt = e._ptCache = 0, S = (M && O(S)) || (S && !M), a = 0;
            a < I.length;
            a++
          ) {
            if (
              ((p = (h = I[a])._gsap || ct(I)[a]._gsap),
                (e._ptLookup[a] = g = {}),
                rt[p.id] && nt.length && yt(),
                (v = z === I ? a : z.indexOf(h)),
                f &&
                !1 !== (m = new f()).init(h, y || r, e, v, z) &&
                ((e._pt = c =
                  new ui(e._pt, h, m.name, 0, 1, m.render, m, 0, m.priority)),
                  m._props.forEach(function (t) {
                    g[t] = c;
                  }),
                  m.priority && (d = 1)),
                !f || y)
            )
              for (u in r)
                ot[u] && (m = Ze(u, r, e, v, h, z))
                  ? m.priority && (d = 1)
                  : (g[u] = c =
                    qe.call(e, h, u, "get", r[u], v, z, 0, w.stringFilter));
            e._op && e._op[a] && e.kill(h, e._op[a]),
              B &&
              e._pt &&
              ((Re = e),
                l.killTweensOf(h, g, e.globalTime(i)),
                (_ = !e.parent),
                (Re = 0)),
              e._pt && S && (rt[p.id] = 1);
          }
          d && li(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = T),
          (e._initted = (!e._op || e._pt) && !_),
          F && i <= 0 && R.render(x, !0, !0);
      },
      Xe = function (t, e, i, n) {
        var r,
          o,
          s = e.ease || n || "power1.inOut";
        if (B(e))
          (o = i[t] || (i[t] = [])),
            e.forEach(function (t, i) {
              return o.push({ t: (i / (e.length - 1)) * 100, v: t, e: s });
            });
        else
          for (r in e)
            (o = i[r] || (i[r] = [])),
              "ease" === r || o.push({ t: parseFloat(t), v: e[r], e: s });
      },
      Ye = function (t, e, i, n, r) {
        return F(t)
          ? t.call(e, i, n, r)
          : A(t) && ~t.indexOf("random(")
            ? le(t)
            : t;
      },
      We = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Ue = {};
    pt(We + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (Ue[t] = 1);
    });
    var Ve = (function (t) {
      function e(e, i, r, s) {
        var a;
        "number" == typeof i && ((r.duration = i), (i = r), (r = null));
        var u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v = (a = t.call(this, s ? i : St(i)) || this).vars,
          y = v.duration,
          _ = v.delay,
          D = v.immediateRender,
          x = v.stagger,
          b = v.overwrite,
          C = v.keyframes,
          E = v.defaults,
          S = v.scrollTrigger,
          T = v.yoyoEase,
          P = i.parent || l,
          A = (B(e) || z(e) ? k(e[0]) : "length" in i) ? [e] : te(e);
        if (
          ((a._targets = A.length
            ? ct(A)
            : G(
              "GSAP target " + e + " not found. https://gsap.com",
              !w.nullTargetWarn
            ) || []),
            (a._ptLookup = []),
            (a._overwrite = b),
            C || x || j(y) || j(_))
        ) {
          if (
            ((i = a.vars),
              (u = a.timeline =
                new Be({
                  data: "nested",
                  defaults: E || {},
                  targets: P && "nested" === P.data ? P.vars.targets : A,
                })).kill(),
              (u.parent = u._dp = n(a)),
              (u._start = 0),
              x || j(y) || j(_))
          ) {
            if (((d = A.length), (m = x && ne(x)), L(x)))
              for (p in x) ~We.indexOf(p) && (g || (g = {}), (g[p] = x[p]));
            for (c = 0; c < d; c++)
              ((h = Et(i, Ue)).stagger = 0),
                T && (h.yoyoEase = T),
                g && bt(h, g),
                (f = A[c]),
                (h.duration = +Ye(y, n(a), c, f, A)),
                (h.delay = (+Ye(_, n(a), c, f, A) || 0) - a._delay),
                !x &&
                1 === d &&
                h.delay &&
                ((a._delay = _ = h.delay), (a._start += _), (h.delay = 0)),
                u.to(f, h, m ? m(c, f, A) : 0),
                (u._ease = Ee.none);
            u.duration() ? (y = _ = 0) : (a.timeline = 0);
          } else if (C) {
            St(xt(u.vars.defaults, { ease: "none" })),
              (u._ease = ke(C.ease || i.ease || "none"));
            var F,
              M,
              I,
              R = 0;
            if (B(C))
              C.forEach(function (t) {
                return u.to(A, t, ">");
              }),
                u.duration();
            else {
              for (p in ((h = {}), C))
                "ease" === p || "easeEach" === p || Xe(p, C[p], h, C.easeEach);
              for (p in h)
                for (
                  F = h[p].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                  R = 0,
                  c = 0;
                  c < F.length;
                  c++
                )
                  ((I = {
                    ease: (M = F[c]).e,
                    duration: ((M.t - (c ? F[c - 1].t : 0)) / 100) * y,
                  })[p] = M.v),
                    u.to(A, I, R),
                    (R += I.duration);
              u.duration() < y && u.to({}, { duration: y - u.duration() });
            }
          }
          y || a.duration((y = u.duration()));
        } else a.timeline = 0;
        return (
          !0 !== b || o || ((Re = n(a)), l.killTweensOf(A), (Re = 0)),
          Rt(P, n(a), r),
          i.reversed && a.reverse(),
          i.paused && a.paused(!0),
          (D ||
            (!y &&
              !C &&
              a._start === mt(P._time) &&
              O(D) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(n(a)) &&
              "nested" !== P.data)) &&
          ((a._tTime = -1e-8), a.render(Math.max(0, -_) || 0)),
          S && Nt(n(a), S),
          a
        );
      }
      r(e, t);
      var i = e.prototype;
      return (
        (i.render = function (t, e, i) {
          var n,
            r,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            p = this._time,
            f = this._tDur,
            m = this._dur,
            g = t < 0,
            v = t > f - 1e-8 && !g ? f : t < 1e-8 ? 0 : t;
          if (m) {
            if (
              v !== this._tTime ||
              !t ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== g)
            ) {
              if (((n = v), (h = this.timeline), this._repeat)) {
                if (((a = m + this._rDelay), this._repeat < -1 && g))
                  return this.totalTime(100 * a + t, e, i);
                if (
                  ((n = mt(v % a)),
                    v === f
                      ? ((o = this._repeat), (n = m))
                      : ((o = ~~(v / a)) && o === mt(v / a) && ((n = m), o--),
                        n > m && (n = m)),
                    (u = this._yoyo && 1 & o) && ((d = this._yEase), (n = m - n)),
                    (l = Ot(this._tTime, a)),
                    n === p && !i && this._initted && o === l)
                )
                  return (this._tTime = v), this;
                o !== l &&
                  (h && this._yEase && Fe(h, u),
                    this.vars.repeatRefresh &&
                    !u &&
                    !this._lock &&
                    this._time !== a &&
                    this._initted &&
                    ((this._lock = i = 1),
                      (this.render(mt(a * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ht(this, g ? t : n, i, e, v))
                  return (this._tTime = 0), this;
                if (
                  !(
                    p === this._time ||
                    (i && this.vars.repeatRefresh && o !== l)
                  )
                )
                  return this;
                if (m !== this._dur) return this.render(t, e, i);
              }
              if (
                ((this._tTime = v),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (d || this._ease)(n / m)),
                  this._from && (this.ratio = c = 1 - c),
                  n && !p && !e && !o && (he(this, "onStart"), this._tTime !== v))
              )
                return this;
              for (r = this._pt; r;) r.r(c, r.d), (r = r._next);
              (h &&
                h.render(t < 0 ? t : h._dur * h._ease(n / this._dur), e, i)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                !e &&
                (g && Mt(this, t, 0, i), he(this, "onUpdate")),
                this._repeat &&
                o !== l &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                he(this, "onRepeat"),
                (v !== this._tDur && v) ||
                this._tTime !== v ||
                (g && !this._onUpdate && Mt(this, t, 0, !0),
                  (t || !m) &&
                  ((v === this._tDur && this._ts > 0) ||
                    (!v && this._ts < 0)) &&
                  At(this, 1),
                  e ||
                  (g && !p) ||
                  !(v || p || u) ||
                  (he(this, v === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                    !(v < f && this.timeScale() > 0) &&
                    this._prom()));
            }
          } else
            !(function (t, e, i, n) {
              var r,
                o,
                a,
                l = t.ratio,
                u =
                  e < 0 ||
                    (!e &&
                      ((!t._start &&
                        (function t(e) {
                          var i = e.parent;
                          return (
                            i &&
                            i._ts &&
                            i._initted &&
                            !i._lock &&
                            (i.rawTime() < 0 || t(i))
                          );
                        })(t) &&
                        (t._initted || !qt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !qt(t))))
                    ? 0
                    : 1,
                c = t._rDelay,
                h = 0;
              if (
                (c &&
                  t._repeat &&
                  ((h = Vt(0, t._tDur, e)),
                    (o = Ot(h, c)),
                    t._yoyo && 1 & o && (u = 1 - u),
                    o !== Ot(t._tTime, c) &&
                    ((l = 1 - u),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  u !== l || s || n || 1e-8 === t._zTime || (!e && t._zTime))
              ) {
                if (!t._initted && Ht(t, e, n, i, h)) return;
                for (
                  a = t._zTime,
                  t._zTime = e || (i ? 1e-8 : 0),
                  i || (i = e && !a),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = h,
                  r = t._pt;
                  r;

                )
                  r.r(u, r.d), (r = r._next);
                e < 0 && Mt(t, e, 0, !0),
                  t._onUpdate && !i && he(t, "onUpdate"),
                  h && t._repeat && !i && t.parent && he(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && At(t, 1),
                    i ||
                    s ||
                    (he(t, u ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, i);
          return this;
        }),
        (i.targets = function () {
          return this._targets;
        }),
        (i.invalidate = function (e) {
          return (
            (!e || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
              0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (i.resetTo = function (t, e, i, n, r) {
          m || be.wake(), this._ts || this.play();
          var o = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts
          );
          return (
            this._initted || Qe(this, o),
            (function (t, e, i, n, r, o, s, a) {
              var l,
                u,
                c,
                h,
                d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
              if (!d)
                for (
                  d = t._ptCache[e] = [],
                  c = t._ptLookup,
                  h = t._targets.length;
                  h--;

                ) {
                  if ((l = c[h][e]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== e && l.fp !== e;)
                      l = l._next;
                  if (!l)
                    return (
                      (Ne = 1),
                      (t.vars[e] = "+=0"),
                      Qe(t, s),
                      (Ne = 0),
                      a ? G(e + " not eligible for reset") : 1
                    );
                  d.push(l);
                }
              for (h = d.length; h--;)
                ((l = (u = d[h])._pt || u).s =
                  (!n && 0 !== n) || r ? l.s + (n || 0) + o * l.c : n),
                  (l.c = i - l.s),
                  u.e && (u.e = ft(i) + Gt(u.e)),
                  u.b && (u.b = l.s + Gt(u.b));
            })(this, t, e, i, n, this._ease(o / this._dur), o, r)
              ? this.resetTo(t, e, i, n, 1)
              : (zt(this, 0),
                this.parent ||
                Tt(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
                this.render(0))
          );
        }),
        (i.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? de(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Re && !0 !== Re.vars.overwrite)
                ._first || de(this),
              this.parent &&
              i !== this.timeline.totalDuration() &&
              Zt(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var n,
            r,
            o,
            s,
            a,
            l,
            u,
            c = this._targets,
            h = t ? te(t) : c,
            d = this._ptLookup,
            p = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var i = t.length, n = i === e.length;
                n && i-- && t[i] === e[i];

              );
              return i < 0;
            })(c, h)
          )
            return "all" === e && (this._pt = 0), de(this);
          for (
            n = this._op = this._op || [],
            "all" !== e &&
            (A(e) &&
              ((a = {}),
                pt(e, function (t) {
                  return (a[t] = 1);
                }),
                (e = a)),
              (e = (function (t, e) {
                var i,
                  n,
                  r,
                  o,
                  s = t[0] ? ht(t[0]).harness : 0,
                  a = s && s.aliases;
                if (!a) return e;
                for (n in ((i = bt({}, e)), a))
                  if ((n in i))
                    for (r = (o = a[n].split(",")).length; r--;)
                      i[o[r]] = i[n];
                return i;
              })(c, e))),
            u = c.length;
            u--;

          )
            if (~h.indexOf(c[u]))
              for (a in ((r = d[u]),
                "all" === e
                  ? ((n[u] = e), (s = r), (o = {}))
                  : ((o = n[u] = n[u] || {}), (s = e)),
                s))
                (l = r && r[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || Pt(this, l, "_pt"),
                    delete r[a]),
                  "all" !== o && (o[a] = 1);
          return this._initted && !this._pt && p && de(this), this;
        }),
        (e.to = function (t, i) {
          return new e(t, i, arguments[2]);
        }),
        (e.from = function (t, e) {
          return Wt(1, arguments);
        }),
        (e.delayedCall = function (t, i, n, r) {
          return new e(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: r,
          });
        }),
        (e.fromTo = function (t, e, i) {
          return Wt(2, arguments);
        }),
        (e.set = function (t, i) {
          return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
        }),
        (e.killTweensOf = function (t, e, i) {
          return l.killTweensOf(t, e, i);
        }),
        e
      );
    })(ze);
    xt(Ve.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      pt("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Ve[t] = function () {
          var e = new Be(),
            i = Kt.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
          );
        };
      });
    var Ge = function (t, e, i) {
      return (t[e] = i);
    },
      Ke = function (t, e, i) {
        return t[e](i);
      },
      $e = function (t, e, i, n) {
        return t[e](n.fp, i);
      },
      Je = function (t, e, i) {
        return t.setAttribute(e, i);
      },
      ti = function (t, e) {
        return F(t[e]) ? Ke : M(t[e]) && t.setAttribute ? Je : Ge;
      },
      ei = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      ii = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      ni = function (t, e) {
        var i = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; i;)
            (n =
              i.p +
              (i.m
                ? i.m(i.s + i.c * t)
                : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
              n),
              (i = i._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      ri = function (t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), (i = i._next);
      },
      oi = function (t, e, i, n) {
        for (var r, o = this._pt; o;)
          (r = o._next), o.p === n && o.modifier(t, e, i), (o = r);
      },
      si = function (t) {
        for (var e, i, n = this._pt; n;)
          (i = n._next),
            (n.p === t && !n.op) || n.op === t
              ? Pt(this, n, "_pt")
              : n.dep || (e = 1),
            (n = i);
        return !e;
      },
      ai = function (t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
      },
      li = function (t) {
        for (var e, i, n, r, o = t._pt; o;) {
          for (e = o._next, i = n; i && i.pr > o.pr;) i = i._next;
          (o._prev = i ? i._prev : r) ? (o._prev._next = o) : (n = o),
            (o._next = i) ? (i._prev = o) : (r = o),
            (o = e);
        }
        t._pt = n;
      },
      ui = (function () {
        function t(t, e, i, n, r, o, s, a, l) {
          (this.t = e),
            (this.s = n),
            (this.c = r),
            (this.p = i),
            (this.r = o || ei),
            (this.d = s || this),
            (this.set = a || Ge),
            (this.pr = l || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, i) {
            (this.mSet = this.mSet || this.set),
              (this.set = ai),
              (this.m = t),
              (this.mt = i),
              (this.tween = e);
          }),
          t
        );
      })();
    pt(
      ut +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (it[t] = 1);
      }
    ),
      (Y.TweenMax = Y.TweenLite = Ve),
      (Y.TimelineLite = Y.TimelineMax = Be),
      (l = new Be({
        sortChildren: !1,
        defaults: D,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (w.stringFilter = xe);
    var ci = [],
      hi = {},
      di = [],
      pi = 0,
      fi = 0,
      mi = function (t) {
        return (hi[t] || di).map(function (t) {
          return t();
        });
      },
      gi = function () {
        var t = Date.now(),
          e = [];
        t - pi > 2 &&
          (mi("matchMediaInit"),
            ci.forEach(function (t) {
              var i,
                n,
                r,
                o,
                s = t.queries,
                a = t.conditions;
              for (n in s)
                (i = u.matchMedia(s[n]).matches) && (r = 1),
                  i !== a[n] && ((a[n] = i), (o = 1));
              o && (t.revert(), r && e.push(t));
            }),
            mi("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (pi = t),
            mi("matchMedia"));
      },
      vi = (function () {
        function t(t, e) {
          (this.selector = e && ee(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = fi++),
            t && this.add(t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, i) {
            F(t) && ((i = e), (e = t), (t = F));
            var n = this,
              r = function () {
                var t,
                  r = a,
                  o = n.selector;
                return (
                  r && r !== n && r.data.push(n),
                  i && (n.selector = ee(i)),
                  (a = n),
                  (t = e.apply(n, arguments)),
                  F(t) && n._r.push(t),
                  (a = r),
                  (n.selector = o),
                  (n.isReverted = !1),
                  t
                );
              };
            return (
              (n.last = r),
              t === F
                ? r(n, function (t) {
                  return n.add(null, t);
                })
                : t
                  ? (n[t] = r)
                  : r
            );
          }),
          (e.ignore = function (t) {
            var e = a;
            (a = null), t(this), (a = e);
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (i) {
                return i instanceof t
                  ? e.push.apply(e, i.getTweens())
                  : i instanceof Ve &&
                  !(i.parent && "nested" === i.parent.data) &&
                  e.push(i);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var i = this;
            if (
              (t
                ? (function () {
                  for (var e, n = i.getTweens(), r = i.data.length; r--;)
                    "isFlip" === (e = i.data[r]).data &&
                      (e.revert(),
                        e.getChildren(!0, !0, !1).forEach(function (t) {
                          return n.splice(n.indexOf(t), 1);
                        }));
                  for (
                    n
                      .map(function (t) {
                        return {
                          g:
                            t._dur ||
                              t._delay ||
                              (t._sat && !t._sat.vars.immediateRender)
                              ? t.globalTime(0)
                              : -1 / 0,
                          t: t,
                        };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1 / 0;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                    r = i.data.length;
                    r--;

                  )
                    (e = i.data[r]) instanceof Be
                      ? "nested" !== e.data &&
                      (e.scrollTrigger && e.scrollTrigger.revert(),
                        e.kill())
                      : !(e instanceof Ve) && e.revert && e.revert(t);
                  i._r.forEach(function (e) {
                    return e(t, i);
                  }),
                    (i.isReverted = !0);
                })()
                : this.data.forEach(function (t) {
                  return t.kill && t.kill();
                }),
                this.clear(),
                e)
            )
              for (var n = ci.length; n--;)
                ci[n].id === this.id && ci.splice(n, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      yi = (function () {
        function t(t) {
          (this.contexts = []), (this.scope = t), a && a.data.push(this);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, i) {
            L(t) || (t = { matches: t });
            var n,
              r,
              o,
              s = new vi(0, i || this.scope),
              l = (s.conditions = {});
            for (r in (a && !s.selector && (s.selector = a.selector),
              this.contexts.push(s),
              (e = s.add("onMatch", e)),
              (s.queries = t),
              t))
              "all" === r
                ? (o = 1)
                : (n = u.matchMedia(t[r])) &&
                (ci.indexOf(s) < 0 && ci.push(s),
                  (l[r] = n.matches) && (o = 1),
                  n.addListener
                    ? n.addListener(gi)
                    : n.addEventListener("change", gi));
            return (
              o &&
              e(s, function (t) {
                return s.add(null, t);
              }),
              this
            );
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      _i = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          e.forEach(function (t) {
            return fe(t);
          });
        },
        timeline: function (t) {
          return new Be(t);
        },
        getTweensOf: function (t, e) {
          return l.getTweensOf(t, e);
        },
        getProperty: function (t, e, i, n) {
          A(t) && (t = te(t)[0]);
          var r = ht(t || {}).get,
            o = i ? Dt : wt;
          return (
            "native" === i && (i = ""),
            t
              ? e
                ? o(((ot[e] && ot[e].get) || r)(t, e, i, n))
                : function (e, i, n) {
                  return o(((ot[e] && ot[e].get) || r)(t, e, i, n));
                }
              : t
          );
        },
        quickSetter: function (t, e, i) {
          if ((t = te(t)).length > 1) {
            var n = t.map(function (t) {
              return xi.quickSetter(t, e, i);
            }),
              r = n.length;
            return function (t) {
              for (var e = r; e--;) n[e](t);
            };
          }
          t = t[0] || {};
          var o = ot[e],
            s = ht(t),
            a = (s.harness && (s.harness.aliases || {})[e]) || e,
            l = o
              ? function (e) {
                var n = new o();
                (f._pt = 0),
                  n.init(t, i ? e + i : e, f, 0, [t]),
                  n.render(1, n),
                  f._pt && ri(1, f);
              }
              : s.set(t, a);
          return o
            ? l
            : function (e) {
              return l(t, a, i ? e + i : e, s, 1);
            };
        },
        quickTo: function (t, e, i) {
          var n,
            r = xi.to(
              t,
              bt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), i || {})
            ),
            o = function (t, i, n) {
              return r.resetTo(e, t, i, n);
            };
          return (o.tween = r), o;
        },
        isTweening: function (t) {
          return l.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = ke(t.ease, D.ease)), Ct(D, t || {});
        },
        config: function (t) {
          return Ct(w, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            i = t.effect,
            n = t.plugins,
            r = t.defaults,
            o = t.extendTimeline;
          (n || "").split(",").forEach(function (t) {
            return (
              t &&
              !ot[t] &&
              !Y[t] &&
              G(e + " effect requires " + t + " plugin.")
            );
          }),
            (st[e] = function (t, e, n) {
              return i(te(t), xt(e || {}, r), n);
            }),
            o &&
            (Be.prototype[e] = function (t, i, n) {
              return this.add(st[e](t, L(i) ? i : (n = i) && {}, this), n);
            });
        },
        registerEase: function (t, e) {
          Ee[t] = ke(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? ke(t, e) : Ee;
        },
        getById: function (t) {
          return l.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var i,
            n,
            r = new Be(t);
          for (
            r.smoothChildTiming = O(t.smoothChildTiming),
            l.remove(r),
            r._dp = 0,
            r._time = r._tTime = l._time,
            i = l._first;
            i;

          )
            (n = i._next),
              (!e &&
                !i._dur &&
                i instanceof Ve &&
                i.vars.onComplete === i._targets[0]) ||
              Rt(r, i, i._start - i._delay),
              (i = n);
          return Rt(l, r, 0), r;
        },
        context: function (t, e) {
          return t ? new vi(t, e) : a;
        },
        matchMedia: function (t) {
          return new yi(t);
        },
        matchMediaRefresh: function () {
          return (
            ci.forEach(function (t) {
              var e,
                i,
                n = t.conditions;
              for (i in n) n[i] && ((n[i] = !1), (e = 1));
              e && t.revert();
            }) || gi()
          );
        },
        addEventListener: function (t, e) {
          var i = hi[t] || (hi[t] = []);
          ~i.indexOf(e) || i.push(e);
        },
        removeEventListener: function (t, e) {
          var i = hi[t],
            n = i && i.indexOf(e);
          n >= 0 && i.splice(n, 1);
        },
        utils: {
          wrap: function t(e, i, n) {
            var r = i - e;
            return B(e)
              ? ae(e, t(0, e.length), i)
              : Ut(n, function (t) {
                return ((r + ((t - e) % r)) % r) + e;
              });
          },
          wrapYoyo: function t(e, i, n) {
            var r = i - e,
              o = 2 * r;
            return B(e)
              ? ae(e, t(0, e.length - 1), i)
              : Ut(n, function (t) {
                return (
                  e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t)
                );
              });
          },
          distribute: ne,
          random: se,
          snap: oe,
          normalize: function (t, e, i) {
            return ue(t, e, 0, 1, i);
          },
          getUnit: Gt,
          clamp: function (t, e, i) {
            return Ut(i, function (i) {
              return Vt(t, e, i);
            });
          },
          splitColor: ve,
          toArray: te,
          selector: ee,
          mapRange: ue,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (i) {
              return t(parseFloat(i)) + (e || Gt(i));
            };
          },
          interpolate: function t(e, i, n, r) {
            var o = isNaN(e + i)
              ? 0
              : function (t) {
                return (1 - t) * e + t * i;
              };
            if (!o) {
              var s,
                a,
                l,
                u,
                c,
                h = A(e),
                d = {};
              if ((!0 === n && (r = 1) && (n = null), h))
                (e = { p: e }), (i = { p: i });
              else if (B(e) && !B(i)) {
                for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++)
                  l.push(t(e[a - 1], e[a]));
                u--,
                  (o = function (t) {
                    t *= u;
                    var e = Math.min(c, ~~t);
                    return l[e](t - e);
                  }),
                  (n = i);
              } else r || (e = bt(B(e) ? [] : {}, e));
              if (!l) {
                for (s in i) qe.call(d, e, s, "get", i[s]);
                o = function (t) {
                  return ri(t, d) || (h ? e.p : e);
                };
              }
            }
            return Ut(n, o);
          },
          shuffle: ie,
        },
        install: U,
        effects: st,
        ticker: be,
        updateRoot: Be.updateRoot,
        plugins: ot,
        globalTimeline: l,
        core: {
          PropTween: ui,
          globals: K,
          Tween: Ve,
          Timeline: Be,
          Animation: ze,
          getCache: ht,
          _removeLinkedListItem: Pt,
          reverting: function () {
            return s;
          },
          context: function (t) {
            return t && a && (a.data.push(t), (t._ctx = a)), a;
          },
          suppressOverwrites: function (t) {
            return (o = t);
          },
        },
      };
    pt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (_i[t] = Ve[t]);
    }),
      be.add(Be.updateRoot),
      (f = _i.to({}, { duration: 0 }));
    var wi = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;)
        i = i._next;
      return i;
    },
      Di = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, i, n) {
            n._onInit = function (t) {
              var n, r;
              if (
                (A(i) &&
                  ((n = {}),
                    pt(i, function (t) {
                      return (n[t] = 1);
                    }),
                    (i = n)),
                  e)
              ) {
                for (r in ((n = {}), i)) n[r] = e(i[r]);
                i = n;
              }
              !(function (t, e) {
                var i,
                  n,
                  r,
                  o = t._targets;
                for (i in e)
                  for (n = o.length; n--;)
                    (r = t._ptLookup[n][i]) &&
                      (r = r.d) &&
                      (r._pt && (r = wi(r, i)),
                        r && r.modifier && r.modifier(e[i], t, o[n], i));
              })(t, i);
            };
          },
        };
      },
      xi =
        _i.registerPlugin(
          {
            name: "attr",
            init: function (t, e, i, n, r) {
              var o, s, a;
              for (o in ((this.tween = i), e))
                (a = t.getAttribute(o) || ""),
                  ((s = this.add(
                    t,
                    "setAttribute",
                    (a || 0) + "",
                    e[o],
                    n,
                    r,
                    0,
                    0,
                    o
                  )).op = o),
                  (s.b = a),
                  this._props.push(o);
            },
            render: function (t, e) {
              for (var i = e._pt; i;)
                s ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var i = e.length; i--;)
                this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
            },
          },
          Di("roundProps", re),
          Di("modifiers"),
          Di("snap", oe)
        ) || _i;
    (Ve.version = Be.version = xi.version = "3.12.5"), (d = 1), I() && Ce();
    Ee.Power0,
      Ee.Power1,
      Ee.Power2,
      Ee.Power3,
      Ee.Power4,
      Ee.Linear,
      Ee.Quad,
      Ee.Cubic,
      Ee.Quart,
      Ee.Quint,
      Ee.Strong,
      Ee.Elastic,
      Ee.Back,
      Ee.SteppedEase,
      Ee.Bounce,
      Ee.Sine,
      Ee.Expo,
      Ee.Circ;
    /*!
     * CSSPlugin 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var bi,
      Ci,
      Ei,
      Si,
      Ti,
      Pi,
      Ai,
      Fi,
      ki = {},
      Mi = 180 / Math.PI,
      Li = Math.PI / 180,
      Oi = Math.atan2,
      Ii = /([A-Z])/g,
      ji = /(left|right|width|margin|padding|x)/i,
      zi = /[\s,\(]\S/,
      Bi = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Ri = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Ni = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Hi = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      qi = function (t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Zi = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Qi = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      Xi = function (t, e, i) {
        return (t.style[e] = i);
      },
      Yi = function (t, e, i) {
        return t.style.setProperty(e, i);
      },
      Wi = function (t, e, i) {
        return (t._gsap[e] = i);
      },
      Ui = function (t, e, i) {
        return (t._gsap.scaleX = t._gsap.scaleY = i);
      },
      Vi = function (t, e, i, n, r) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = i), o.renderTransform(r, o);
      },
      Gi = function (t, e, i, n, r) {
        var o = t._gsap;
        (o[e] = i), o.renderTransform(r, o);
      },
      Ki = "transform",
      $i = Ki + "Origin",
      Ji = function t(e, i) {
        var n = this,
          r = this.target,
          o = r.style,
          s = r._gsap;
        if (e in ki && o) {
          if (((this.tfm = this.tfm || {}), "transform" === e))
            return Bi.transform.split(",").forEach(function (e) {
              return t.call(n, e, i);
            });
          if (
            (~(e = Bi[e] || e).indexOf(",")
              ? e.split(",").forEach(function (t) {
                return (n.tfm[t] = yn(r, t));
              })
              : (this.tfm[e] = s.x ? s[e] : yn(r, e)),
              e === $i && (this.tfm.zOrigin = s.zOrigin),
              this.props.indexOf(Ki) >= 0)
          )
            return;
          s.svg &&
            ((this.svgo = r.getAttribute("data-svg-origin")),
              this.props.push($i, i, "")),
            (e = Ki);
        }
        (o || i) && this.props.push(e, i, o[e]);
      },
      tn = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
      },
      en = function () {
        var t,
          e,
          i = this.props,
          n = this.target,
          r = n.style,
          o = n._gsap;
        for (t = 0; t < i.length; t += 3)
          i[t + 1]
            ? (n[i[t]] = i[t + 2])
            : i[t + 2]
              ? (r[i[t]] = i[t + 2])
              : r.removeProperty(
                "--" === i[t].substr(0, 2)
                  ? i[t]
                  : i[t].replace(Ii, "-$1").toLowerCase()
              );
        if (this.tfm) {
          for (e in this.tfm) o[e] = this.tfm[e];
          o.svg &&
            (o.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
            ((t = Ai()) && t.isStart) ||
            r[Ki] ||
            (tn(r),
              o.zOrigin &&
              r[$i] &&
              ((r[$i] += " " + o.zOrigin + "px"),
                (o.zOrigin = 0),
                o.renderTransform()),
              (o.uncache = 1));
        }
      },
      nn = function (t, e) {
        var i = { target: t, props: [], revert: en, save: Ji };
        return (
          t._gsap || xi.core.getCache(t),
          e &&
          e.split(",").forEach(function (t) {
            return i.save(t);
          }),
          i
        );
      },
      rn = function (t, e) {
        var i = Ci.createElementNS
          ? Ci.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
          : Ci.createElement(t);
        return i && i.style ? i : Ci.createElement(t);
      },
      on = function t(e, i, n) {
        var r = getComputedStyle(e);
        return (
          r[i] ||
          r.getPropertyValue(i.replace(Ii, "-$1").toLowerCase()) ||
          r.getPropertyValue(i) ||
          (!n && t(e, an(i) || i, 1)) ||
          ""
        );
      },
      sn = "O,Moz,ms,Ms,Webkit".split(","),
      an = function (t, e, i) {
        var n = (e || Ti).style,
          r = 5;
        if (t in n && !i) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          r-- && !(sn[r] + t in n);

        );
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? sn[r] : "") + t;
      },
      ln = function () {
        "undefined" != typeof window &&
          window.document &&
          ((bi = window),
            (Ci = bi.document),
            (Ei = Ci.documentElement),
            (Ti = rn("div") || { style: {} }),
            rn("div"),
            (Ki = an(Ki)),
            ($i = Ki + "Origin"),
            (Ti.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Fi = !!an("perspective")),
            (Ai = xi.core.reverting),
            (Si = 1));
      },
      un = function t(e) {
        var i,
          n = rn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
          ),
          r = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (Ei.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            e)
        )
          try {
            (i = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) { }
        else this._gsapBBox && (i = this._gsapBBox());
        return (
          r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
          Ei.removeChild(n),
          (this.style.cssText = s),
          i
        );
      },
      cn = function (t, e) {
        for (var i = e.length; i--;)
          if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
      },
      hn = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (i) {
          e = un.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
          t.getBBox === un ||
          (e = un.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
              x: +cn(t, ["x", "cx", "x1"]) || 0,
              y: +cn(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
        );
      },
      dn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !hn(t));
      },
      pn = function (t, e) {
        if (e) {
          var i,
            n = t.style;
          e in ki && e !== $i && (e = Ki),
            n.removeProperty
              ? (("ms" !== (i = e.substr(0, 2)) &&
                "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
                n.removeProperty(
                  "--" === i ? e : e.replace(Ii, "-$1").toLowerCase()
                ))
              : n.removeAttribute(e);
        }
      },
      fn = function (t, e, i, n, r, o) {
        var s = new ui(t._pt, e, i, 0, 1, o ? Qi : Zi);
        return (t._pt = s), (s.b = n), (s.e = r), t._props.push(i), s;
      },
      mn = { deg: 1, rad: 1, turn: 1 },
      gn = { grid: 1, flex: 1 },
      vn = function t(e, i, n, r) {
        var o,
          s,
          a,
          l,
          u = parseFloat(n) || 0,
          c = (n + "").trim().substr((u + "").length) || "px",
          h = Ti.style,
          d = ji.test(i),
          p = "svg" === e.tagName.toLowerCase(),
          f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
          m = "px" === r,
          g = "%" === r;
        if (r === c || !u || mn[r] || mn[c]) return u;
        if (
          ("px" !== c && !m && (u = t(e, i, n, "px")),
            (l = e.getCTM && dn(e)),
            (g || "%" === c) && (ki[i] || ~i.indexOf("adius")))
        )
          return (
            (o = l ? e.getBBox()[d ? "width" : "height"] : e[f]),
            ft(g ? (u / o) * 100 : (u / 100) * o)
          );
        if (
          ((h[d ? "width" : "height"] = 100 + (m ? c : r)),
            (s =
              ~i.indexOf("adius") || ("em" === r && e.appendChild && !p)
                ? e
                : e.parentNode),
            l && (s = (e.ownerSVGElement || {}).parentNode),
            (s && s !== Ci && s.appendChild) || (s = Ci.body),
            (a = s._gsap) &&
            g &&
            a.width &&
            d &&
            a.time === be.time &&
            !a.uncache)
        )
          return ft((u / a.width) * 100);
        if (!g || ("height" !== i && "width" !== i))
          (g || "%" === c) &&
            !gn[on(s, "display")] &&
            (h.position = on(e, "position")),
            s === e && (h.position = "static"),
            s.appendChild(Ti),
            (o = Ti[f]),
            s.removeChild(Ti),
            (h.position = "absolute");
        else {
          var v = e.style[i];
          (e.style[i] = 100 + r), (o = e[f]), v ? (e.style[i] = v) : pn(e, i);
        }
        return (
          d && g && (((a = ht(s)).time = be.time), (a.width = s[f])),
          ft(m ? (o * u) / 100 : o && u ? (100 / o) * u : 0)
        );
      },
      yn = function (t, e, i, n) {
        var r;
        return (
          Si || ln(),
          e in Bi &&
          "transform" !== e &&
          ~(e = Bi[e]).indexOf(",") &&
          (e = e.split(",")[0]),
          ki[e] && "transform" !== e
            ? ((r = An(t, n)),
              (r =
                "transformOrigin" !== e
                  ? r[e]
                  : r.svg
                    ? r.origin
                    : Fn(on(t, $i)) + " " + r.zOrigin + "px"))
            : (!(r = t.style[e]) ||
              "auto" === r ||
              n ||
              ~(r + "").indexOf("calc(")) &&
            (r =
              (xn[e] && xn[e](t, e, i)) ||
              on(t, e) ||
              dt(t, e) ||
              ("opacity" === e ? 1 : 0)),
          i && !~(r + "").trim().indexOf(" ") ? vn(t, e, r, i) + i : r
        );
      },
      _n = function (t, e, i, n) {
        if (!i || "none" === i) {
          var r = an(e, t, 1),
            o = r && on(t, r, 1);
          o && o !== i
            ? ((e = r), (i = o))
            : "borderColor" === e && (i = on(t, "borderTopColor"));
        }
        var s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v = new ui(this._pt, t.style, e, 0, 1, ni),
          y = 0,
          _ = 0;
        if (
          ((v.b = i),
            (v.e = n),
            (i += ""),
            "auto" === (n += "") &&
            ((h = t.style[e]),
              (t.style[e] = n),
              (n = on(t, e) || n),
              h ? (t.style[e] = h) : pn(t, e)),
            xe((s = [i, n])),
            (n = s[1]),
            (l = (i = s[0]).match(H) || []),
            (n.match(H) || []).length)
        ) {
          for (; (a = H.exec(n));)
            (d = a[0]),
              (f = n.substring(y, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                (c = 1),
              d !== (h = l[_++] || "") &&
              ((u = parseFloat(h) || 0),
                (g = h.substr((u + "").length)),
                "=" === d.charAt(1) && (d = gt(u, d) + g),
                (p = parseFloat(d)),
                (m = d.substr((p + "").length)),
                (y = H.lastIndex - m.length),
                m ||
                ((m = m || w.units[e] || g),
                  y === n.length && ((n += m), (v.e += m))),
                g !== m && (u = vn(t, e, h, m) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: f || 1 === _ ? f : ",",
                  s: u,
                  c: p - u,
                  m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                }));
          v.c = y < n.length ? n.substring(y, n.length) : "";
        } else v.r = "display" === e && "none" === n ? Qi : Zi;
        return Z.test(n) && (v.e = 0), (this._pt = v), v;
      },
      wn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Dn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var i,
            n,
            r,
            o = e.t,
            s = o.style,
            a = e.u,
            l = o._gsap;
          if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
          else
            for (r = (a = a.split(",")).length; --r > -1;)
              (i = a[r]),
                ki[i] && ((n = 1), (i = "transformOrigin" === i ? $i : Ki)),
                pn(o, i);
          n &&
            (pn(o, Ki),
              l &&
              (l.svg && o.removeAttribute("transform"),
                An(o, 1),
                (l.uncache = 1),
                tn(s)));
        }
      },
      xn = {
        clearProps: function (t, e, i, n, r) {
          if ("isFromStart" !== r.data) {
            var o = (t._pt = new ui(t._pt, e, i, 0, 0, Dn));
            return (o.u = n), (o.pr = -10), (o.tween = r), t._props.push(i), 1;
          }
        },
      },
      bn = [1, 0, 0, 1, 0, 0],
      Cn = {},
      En = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      Sn = function (t) {
        var e = on(t, Ki);
        return En(e) ? bn : e.substr(7).match(N).map(ft);
      },
      Tn = function (t, e) {
        var i,
          n,
          r,
          o,
          s = t._gsap || ht(t),
          a = t.style,
          l = Sn(t);
        return s.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (r = t.transform.baseVal.consolidate().matrix).a,
              r.b,
              r.c,
              r.d,
              r.e,
              r.f,
            ]).join(",")
            ? bn
            : l
          : (l !== bn ||
            t.offsetParent ||
            t === Ei ||
            s.svg ||
            ((r = a.display),
              (a.display = "block"),
              ((i = t.parentNode) && t.offsetParent) ||
              ((o = 1), (n = t.nextElementSibling), Ei.appendChild(t)),
              (l = Sn(t)),
              r ? (a.display = r) : pn(t, "display"),
              o &&
              (n
                ? i.insertBefore(t, n)
                : i
                  ? i.appendChild(t)
                  : Ei.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      Pn = function (t, e, i, n, r, o) {
        var s,
          a,
          l,
          u = t._gsap,
          c = r || Tn(t, !0),
          h = u.xOrigin || 0,
          d = u.yOrigin || 0,
          p = u.xOffset || 0,
          f = u.yOffset || 0,
          m = c[0],
          g = c[1],
          v = c[2],
          y = c[3],
          _ = c[4],
          w = c[5],
          D = e.split(" "),
          x = parseFloat(D[0]) || 0,
          b = parseFloat(D[1]) || 0;
        i
          ? c !== bn &&
          (a = m * y - g * v) &&
          ((l = x * (-g / a) + b * (m / a) - (m * w - g * _) / a),
            (x = x * (y / a) + b * (-v / a) + (v * w - y * _) / a),
            (b = l))
          : ((x =
            (s = hn(t)).x + (~D[0].indexOf("%") ? (x / 100) * s.width : x)),
            (b =
              s.y + (~(D[1] || D[0]).indexOf("%") ? (b / 100) * s.height : b))),
          n || (!1 !== n && u.smooth)
            ? ((_ = x - h),
              (w = b - d),
              (u.xOffset = p + (_ * m + w * v) - _),
              (u.yOffset = f + (_ * g + w * y) - w))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = x),
          (u.yOrigin = b),
          (u.smooth = !!n),
          (u.origin = e),
          (u.originIsAbsolute = !!i),
          (t.style[$i] = "0px 0px"),
          o &&
          (fn(o, u, "xOrigin", h, x),
            fn(o, u, "yOrigin", d, b),
            fn(o, u, "xOffset", p, u.xOffset),
            fn(o, u, "yOffset", f, u.yOffset)),
          t.setAttribute("data-svg-origin", x + " " + b);
      },
      An = function (t, e) {
        var i = t._gsap || new je(t);
        if ("x" in i && !e && !i.uncache) return i;
        var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v,
          y,
          _,
          D,
          x,
          b,
          C,
          E,
          S,
          T,
          P,
          A,
          F,
          k,
          M,
          L,
          O,
          I,
          j = t.style,
          z = i.scaleX < 0,
          B = getComputedStyle(t),
          R = on(t, $i) || "0";
        return (
          (n = r = o = l = u = c = h = d = p = 0),
          (s = a = 1),
          (i.svg = !(!t.getCTM || !dn(t))),
          B.translate &&
          (("none" === B.translate &&
            "none" === B.scale &&
            "none" === B.rotate) ||
            (j[Ki] =
              ("none" !== B.translate
                ? "translate3d(" +
                (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
                : "") +
              ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
              ("none" !== B.scale
                ? "scale(" + B.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== B[Ki] ? B[Ki] : "")),
            (j.scale = j.rotate = j.translate = "none")),
          (g = Tn(t, i.svg)),
          i.svg &&
          (i.uncache
            ? ((P = t.getBBox()),
              (R = i.xOrigin - P.x + "px " + (i.yOrigin - P.y) + "px"),
              (T = ""))
            : (T = !e && t.getAttribute("data-svg-origin")),
            Pn(t, T || R, !!T || i.originIsAbsolute, !1 !== i.smooth, g)),
          (f = i.xOrigin || 0),
          (m = i.yOrigin || 0),
          g !== bn &&
          ((D = g[0]),
            (x = g[1]),
            (b = g[2]),
            (C = g[3]),
            (n = E = g[4]),
            (r = S = g[5]),
            6 === g.length
              ? ((s = Math.sqrt(D * D + x * x)),
                (a = Math.sqrt(C * C + b * b)),
                (l = D || x ? Oi(x, D) * Mi : 0),
                (h = b || C ? Oi(b, C) * Mi + l : 0) &&
                (a *= Math.abs(Math.cos(h * Li))),
                i.svg &&
                ((n -= f - (f * D + m * b)), (r -= m - (f * x + m * C))))
              : ((I = g[6]),
                (L = g[7]),
                (F = g[8]),
                (k = g[9]),
                (M = g[10]),
                (O = g[11]),
                (n = g[12]),
                (r = g[13]),
                (o = g[14]),
                (u = (v = Oi(I, M)) * Mi),
                v &&
                ((T = E * (y = Math.cos(-v)) + F * (_ = Math.sin(-v))),
                  (P = S * y + k * _),
                  (A = I * y + M * _),
                  (F = E * -_ + F * y),
                  (k = S * -_ + k * y),
                  (M = I * -_ + M * y),
                  (O = L * -_ + O * y),
                  (E = T),
                  (S = P),
                  (I = A)),
                (c = (v = Oi(-b, M)) * Mi),
                v &&
                ((y = Math.cos(-v)),
                  (O = C * (_ = Math.sin(-v)) + O * y),
                  (D = T = D * y - F * _),
                  (x = P = x * y - k * _),
                  (b = A = b * y - M * _)),
                (l = (v = Oi(x, D)) * Mi),
                v &&
                ((T = D * (y = Math.cos(v)) + x * (_ = Math.sin(v))),
                  (P = E * y + S * _),
                  (x = x * y - D * _),
                  (S = S * y - E * _),
                  (D = T),
                  (E = P)),
                u &&
                Math.abs(u) + Math.abs(l) > 359.9 &&
                ((u = l = 0), (c = 180 - c)),
                (s = ft(Math.sqrt(D * D + x * x + b * b))),
                (a = ft(Math.sqrt(S * S + I * I))),
                (v = Oi(E, S)),
                (h = Math.abs(v) > 2e-4 ? v * Mi : 0),
                (p = O ? 1 / (O < 0 ? -O : O) : 0)),
            i.svg &&
            ((T = t.getAttribute("transform")),
              (i.forceCSS = t.setAttribute("transform", "") || !En(on(t, Ki))),
              T && t.setAttribute("transform", T))),
          Math.abs(h) > 90 &&
          Math.abs(h) < 270 &&
          (z
            ? ((s *= -1),
              (h += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((a *= -1), (h += h <= 0 ? 180 : -180))),
          (e = e || i.uncache),
          (i.x =
            n -
            ((i.xPercent =
              n &&
              ((!e && i.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
              ? (t.offsetWidth * i.xPercent) / 100
              : 0) +
            "px"),
          (i.y =
            r -
            ((i.yPercent =
              r &&
              ((!e && i.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
              ? (t.offsetHeight * i.yPercent) / 100
              : 0) +
            "px"),
          (i.z = o + "px"),
          (i.scaleX = ft(s)),
          (i.scaleY = ft(a)),
          (i.rotation = ft(l) + "deg"),
          (i.rotationX = ft(u) + "deg"),
          (i.rotationY = ft(c) + "deg"),
          (i.skewX = h + "deg"),
          (i.skewY = d + "deg"),
          (i.transformPerspective = p + "px"),
          (i.zOrigin = parseFloat(R.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
          (j[$i] = Fn(R)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = w.force3D),
          (i.renderTransform = i.svg ? On : Fi ? Ln : Mn),
          (i.uncache = 0),
          i
        );
      },
      Fn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      kn = function (t, e, i) {
        var n = Gt(e);
        return ft(parseFloat(e) + parseFloat(vn(t, "x", i + "px", n))) + n;
      },
      Mn = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          Ln(t, e);
      },
      Ln = function (t, e) {
        var i = e || this,
          n = i.xPercent,
          r = i.yPercent,
          o = i.x,
          s = i.y,
          a = i.z,
          l = i.rotation,
          u = i.rotationY,
          c = i.rotationX,
          h = i.skewX,
          d = i.skewY,
          p = i.scaleX,
          f = i.scaleY,
          m = i.transformPerspective,
          g = i.force3D,
          v = i.target,
          y = i.zOrigin,
          _ = "",
          w = ("auto" === g && t && 1 !== t) || !0 === g;
        if (y && ("0deg" !== c || "0deg" !== u)) {
          var D,
            x = parseFloat(u) * Li,
            b = Math.sin(x),
            C = Math.cos(x);
          (x = parseFloat(c) * Li),
            (D = Math.cos(x)),
            (o = kn(v, o, b * D * -y)),
            (s = kn(v, s, -Math.sin(x) * -y)),
            (a = kn(v, a, C * D * -y + y));
        }
        "0px" !== m && (_ += "perspective(" + m + ") "),
          (n || r) && (_ += "translate(" + n + "%, " + r + "%) "),
          (w || "0px" !== o || "0px" !== s || "0px" !== a) &&
          (_ +=
            "0px" !== a || w
              ? "translate3d(" + o + ", " + s + ", " + a + ") "
              : "translate(" + o + ", " + s + ") "),
          "0deg" !== l && (_ += "rotate(" + l + ") "),
          "0deg" !== u && (_ += "rotateY(" + u + ") "),
          "0deg" !== c && (_ += "rotateX(" + c + ") "),
          ("0deg" === h && "0deg" === d) ||
          (_ += "skew(" + h + ", " + d + ") "),
          (1 === p && 1 === f) || (_ += "scale(" + p + ", " + f + ") "),
          (v.style[Ki] = _ || "translate(0, 0)");
      },
      On = function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          a = e || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          h = a.y,
          d = a.rotation,
          p = a.skewX,
          f = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          y = a.xOrigin,
          _ = a.yOrigin,
          w = a.xOffset,
          D = a.yOffset,
          x = a.forceCSS,
          b = parseFloat(c),
          C = parseFloat(h);
        (d = parseFloat(d)),
          (p = parseFloat(p)),
          (f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
          d || p
            ? ((d *= Li),
              (p *= Li),
              (i = Math.cos(d) * m),
              (n = Math.sin(d) * m),
              (r = Math.sin(d - p) * -g),
              (o = Math.cos(d - p) * g),
              p &&
              ((f *= Li),
                (s = Math.tan(p - f)),
                (r *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                f &&
                ((s = Math.tan(f)),
                  (i *= s = Math.sqrt(1 + s * s)),
                  (n *= s))),
              (i = ft(i)),
              (n = ft(n)),
              (r = ft(r)),
              (o = ft(o)))
            : ((i = m), (o = g), (n = r = 0)),
          ((b && !~(c + "").indexOf("px")) ||
            (C && !~(h + "").indexOf("px"))) &&
          ((b = vn(v, "x", c, "px")), (C = vn(v, "y", h, "px"))),
          (y || _ || w || D) &&
          ((b = ft(b + y - (y * i + _ * r) + w)),
            (C = ft(C + _ - (y * n + _ * o) + D))),
          (l || u) &&
          ((s = v.getBBox()),
            (b = ft(b + (l / 100) * s.width)),
            (C = ft(C + (u / 100) * s.height))),
          (s =
            "matrix(" +
            i +
            "," +
            n +
            "," +
            r +
            "," +
            o +
            "," +
            b +
            "," +
            C +
            ")"),
          v.setAttribute("transform", s),
          x && (v.style[Ki] = s);
      },
      In = function (t, e, i, n, r) {
        var o,
          s,
          a = A(r),
          l = parseFloat(r) * (a && ~r.indexOf("rad") ? Mi : 1) - n,
          u = n + l + "deg";
        return (
          a &&
          ("short" === (o = r.split("_")[1]) &&
            (l %= 360) !== l % 180 &&
            (l += l < 0 ? 360 : -360),
            "cw" === o && l < 0
              ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
              : "ccw" === o &&
              l > 0 &&
              (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
          (t._pt = s = new ui(t._pt, e, i, n, l, Ni)),
          (s.e = u),
          (s.u = "deg"),
          t._props.push(i),
          s
        );
      },
      jn = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      zn = function (t, e, i) {
        var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c = jn({}, i._gsap),
          h = i.style;
        for (r in (c.svg
          ? ((o = i.getAttribute("transform")),
            i.setAttribute("transform", ""),
            (h[Ki] = e),
            (n = An(i, 1)),
            pn(i, Ki),
            i.setAttribute("transform", o))
          : ((o = getComputedStyle(i)[Ki]),
            (h[Ki] = e),
            (n = An(i, 1)),
            (h[Ki] = o)),
          ki))
          (o = c[r]) !== (s = n[r]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
            ((a = Gt(o) !== (u = Gt(s)) ? vn(i, r, o, u) : parseFloat(o)),
              (l = parseFloat(s)),
              (t._pt = new ui(t._pt, n, r, a, l - a, Ri)),
              (t._pt.u = u || 0),
              t._props.push(r));
        jn(n, c);
      };
    pt("padding,margin,Width,Radius", function (t, e) {
      var i = "Top",
        n = "Right",
        r = "Bottom",
        o = "Left",
        s = (e < 3 ? [i, n, r, o] : [i + o, i + n, r + n, r + o]).map(function (
          i
        ) {
          return e < 2 ? t + i : "border" + i + t;
        });
      xn[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return yn(t, e, i);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (n + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, r);
      };
    });
    var Bn,
      Rn,
      Nn = {
        name: "css",
        register: ln,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, i, n, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            h,
            d,
            p,
            f,
            m,
            g,
            v,
            y,
            _,
            D,
            x,
            b,
            C,
            E,
            S = this._props,
            T = t.style,
            P = i.vars.startAt;
          for (h in (Si || ln(),
            (this.styles = this.styles || nn(t)),
            (D = this.styles.props),
            (this.tween = i),
            e))
            if (
              "autoRound" !== h &&
              ((s = e[h]), !ot[h] || !Ze(h, e, i, n, t, r))
            )
              if (
                ((u = typeof s),
                  (c = xn[h]),
                  "function" === u && (u = typeof (s = s.call(i, n, t, r))),
                  "string" === u && ~s.indexOf("random(") && (s = le(s)),
                  c)
              )
                c(this, t, h, s, i) && (_ = 1);
              else if ("--" === h.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                  (s += ""),
                  (we.lastIndex = 0),
                  we.test(o) || ((d = Gt(o)), (p = Gt(s))),
                  p ? d !== p && (o = vn(t, h, o, p) + p) : d && (s += d),
                  this.add(T, "setProperty", o, s, n, r, 0, 0, h),
                  S.push(h),
                  D.push(h, 0, T[h]);
              else if ("undefined" !== u) {
                if (
                  (P && h in P
                    ? ((o =
                      "function" == typeof P[h]
                        ? P[h].call(i, n, t, r)
                        : P[h]),
                      A(o) && ~o.indexOf("random(") && (o = le(o)),
                      Gt(o + "") ||
                      "auto" === o ||
                      (o += w.units[h] || Gt(yn(t, h)) || ""),
                      "=" === (o + "").charAt(1) && (o = yn(t, h)))
                    : (o = yn(t, h)),
                    (l = parseFloat(o)),
                    (f =
                      "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                    (a = parseFloat(s)),
                    h in Bi &&
                    ("autoAlpha" === h &&
                      (1 === l &&
                        "hidden" === yn(t, "visibility") &&
                        a &&
                        (l = 0),
                        D.push("visibility", 0, T.visibility),
                        fn(
                          this,
                          T,
                          "visibility",
                          l ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== h &&
                      "transform" !== h &&
                      ~(h = Bi[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                    (m = h in ki))
                )
                  if (
                    (this.styles.save(h),
                      g ||
                      (((v = t._gsap).renderTransform && !e.parseTransform) ||
                        An(t, e.parseTransform),
                        (y = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new ui(
                            this._pt,
                            T,
                            Ki,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === h)
                  )
                    (this._pt = new ui(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      (f ? gt(v.scaleY, f + a) : a) - v.scaleY || 0,
                      Ri
                    )),
                      (this._pt.u = 0),
                      S.push("scaleY", h),
                      (h += "X");
                  else {
                    if ("transformOrigin" === h) {
                      D.push($i, 0, T[$i]),
                        (b = void 0),
                        (C = void 0),
                        (E = void 0),
                        (b = (x = s).split(" ")),
                        (C = b[0]),
                        (E = b[1] || "50%"),
                        ("top" !== C &&
                          "bottom" !== C &&
                          "left" !== E &&
                          "right" !== E) ||
                        ((x = C), (C = E), (E = x)),
                        (b[0] = wn[C] || C),
                        (b[1] = wn[E] || E),
                        (s = b.join(" ")),
                        v.svg
                          ? Pn(t, s, 0, y, 0, this)
                          : ((p = parseFloat(s.split(" ")[2]) || 0) !==
                            v.zOrigin && fn(this, v, "zOrigin", v.zOrigin, p),
                            fn(this, T, h, Fn(o), Fn(s)));
                      continue;
                    }
                    if ("svgOrigin" === h) {
                      Pn(t, s, 1, y, 0, this);
                      continue;
                    }
                    if (h in Cn) {
                      In(this, v, h, l, f ? gt(l, f + s) : s);
                      continue;
                    }
                    if ("smoothOrigin" === h) {
                      fn(this, v, "smooth", v.smooth, s);
                      continue;
                    }
                    if ("force3D" === h) {
                      v[h] = s;
                      continue;
                    }
                    if ("transform" === h) {
                      zn(this, s, t);
                      continue;
                    }
                  }
                else h in T || (h = an(h) || h);
                if (
                  m ||
                  ((a || 0 === a) && (l || 0 === l) && !zi.test(s) && h in T)
                )
                  a || (a = 0),
                    (d = (o + "").substr((l + "").length)) !==
                    (p = Gt(s) || (h in w.units ? w.units[h] : d)) &&
                    (l = vn(t, h, o, p)),
                    (this._pt = new ui(
                      this._pt,
                      m ? v : T,
                      h,
                      l,
                      (f ? gt(l, f + a) : a) - l,
                      m || ("px" !== p && "zIndex" !== h) || !1 === e.autoRound
                        ? Ri
                        : qi
                    )),
                    (this._pt.u = p || 0),
                    d !== p &&
                    "%" !== p &&
                    ((this._pt.b = o), (this._pt.r = Hi));
                else if (h in T) _n.call(this, t, h, o, f ? f + s : s);
                else if (h in t) this.add(t, h, o || t[h], f ? f + s : s, n, r);
                else if ("parseTransform" !== h) {
                  V(h, s);
                  continue;
                }
                m || (h in T ? D.push(h, 0, T[h]) : D.push(h, 1, o || t[h])),
                  S.push(h);
              }
          _ && li(this);
        },
        render: function (t, e) {
          if (e.tween._time || !Ai())
            for (var i = e._pt; i;) i.r(t, i.d), (i = i._next);
          else e.styles.revert();
        },
        get: yn,
        aliases: Bi,
        getSetter: function (t, e, i) {
          var n = Bi[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in ki && e !== $i && (t._gsap.x || yn(t, "x"))
              ? i && Pi === i
                ? "scale" === e
                  ? Ui
                  : Wi
                : (Pi = i || {}) && ("scale" === e ? Vi : Gi)
              : t.style && !M(t.style[e])
                ? Xi
                : ~e.indexOf("-")
                  ? Yi
                  : ti(t, e)
          );
        },
        core: { _removeProperty: pn, _getMatrix: Tn },
      };
    (xi.utils.checkPrefix = an),
      (xi.core.getStyleSaver = nn),
      (Rn = pt(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
        (Bn = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          ki[t] = 1;
        }
      )),
      pt(Bn, function (t) {
        (w.units[t] = "deg"), (Cn[t] = 1);
      }),
      (Bi[Rn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Bn),
      pt(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          Bi[e[1]] = Rn[e[0]];
        }
      ),
      pt(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          w.units[t] = "px";
        }
      ),
      xi.registerPlugin(Nn);
    var Hn = xi.registerPlugin(Nn) || xi;
    Hn.core.Tween;
  },
  function (t, e, i) {
    "use strict";
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    i.d(e, "a", function () {
      return We;
    });
    /*!
     * Observer 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var r,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      d,
      p,
      f,
      m,
      g,
      v = function () {
        return (
          r ||
          ("undefined" != typeof window &&
            (r = window.gsap) &&
            r.registerPlugin &&
            r)
        );
      },
      y = 1,
      _ = [],
      w = [],
      D = [],
      x = Date.now,
      b = function (t, e) {
        return e;
      },
      C = function (t, e) {
        return ~D.indexOf(t) && D[D.indexOf(t) + 1][e];
      },
      E = function (t) {
        return !!~p.indexOf(t);
      },
      S = function (t, e, i, n, r) {
        return t.addEventListener(e, i, { passive: !1 !== n, capture: !!r });
      },
      T = function (t, e, i, n) {
        return t.removeEventListener(e, i, !!n);
      },
      P = function () {
        return (f && f.isPressed) || w.cache++;
      },
      A = function (t, e) {
        var i = function i(n) {
          if (n || 0 === n) {
            y && (s.history.scrollRestoration = "manual");
            var r = f && f.isPressed;
            (n = i.v = Math.round(n) || (f && f.iOS ? 1 : 0)),
              t(n),
              (i.cacheID = w.cache),
              r && b("ss", n);
          } else
            (e || w.cache !== i.cacheID || b("ref")) &&
              ((i.cacheID = w.cache), (i.v = t()));
          return i.v + i.offset;
        };
        return (i.offset = 0), t && i;
      },
      F = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: A(function (t) {
          return arguments.length
            ? s.scrollTo(t, k.sc())
            : s.pageXOffset ||
            a.scrollLeft ||
            l.scrollLeft ||
            u.scrollLeft ||
            0;
        }),
      },
      k = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: F,
        sc: A(function (t) {
          return arguments.length
            ? s.scrollTo(F.sc(), t)
            : s.pageYOffset || a.scrollTop || l.scrollTop || u.scrollTop || 0;
        }),
      },
      M = function (t, e) {
        return (
          ((e && e._ctx && e._ctx.selector) || r.utils.toArray)(t)[0] ||
          ("string" == typeof t && !1 !== r.config().nullTargetWarn
            ? console.warn("Element not found:", t)
            : null)
        );
      },
      L = function (t, e) {
        var i = e.s,
          n = e.sc;
        E(t) && (t = a.scrollingElement || l);
        var o = w.indexOf(t),
          s = n === k.sc ? 1 : 2;
        !~o && (o = w.push(t) - 1), w[o + s] || S(t, "scroll", P);
        var u = w[o + s],
          c =
            u ||
            (w[o + s] =
              A(C(t, i), !0) ||
              (E(t)
                ? n
                : A(function (e) {
                  return arguments.length ? (t[i] = e) : t[i];
                })));
        return (
          (c.target = t),
          u || (c.smooth = "smooth" === r.getProperty(t, "scrollBehavior")),
          c
        );
      },
      O = function (t, e, i) {
        var n = t,
          r = t,
          o = x(),
          s = o,
          a = e || 50,
          l = Math.max(500, 3 * a),
          u = function (t, e) {
            var l = x();
            e || l - o > a
              ? ((r = n), (n = t), (s = o), (o = l))
              : i
                ? (n += t)
                : (n = r + ((t - r) / (l - s)) * (o - s));
          };
        return {
          update: u,
          reset: function () {
            (r = n = i ? 0 : n), (s = o = 0);
          },
          getVelocity: function (t) {
            var e = s,
              a = r,
              c = x();
            return (
              (t || 0 === t) && t !== n && u(t),
              o === s || c - s > l
                ? 0
                : ((n + (i ? a : -a)) / ((i ? c : o) - e)) * 1e3
            );
          },
        };
      },
      I = function (t, e) {
        return (
          e && !t._gsapAllow && t.preventDefault(),
          t.changedTouches ? t.changedTouches[0] : t
        );
      },
      j = function (t) {
        var e = Math.max.apply(Math, t),
          i = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(i) ? e : i;
      },
      z = function () {
        var t, e, i, n;
        (d = r.core.globals().ScrollTrigger) &&
          d.core &&
          ((t = d.core),
            (e = t.bridge || {}),
            (i = t._scrollers),
            (n = t._proxies),
            i.push.apply(i, w),
            n.push.apply(n, D),
            (w = i),
            (D = n),
            (b = function (t, i) {
              return e[t](i);
            }));
      },
      B = function (t) {
        return (
          (r = t || v()),
          !o &&
          r &&
          "undefined" != typeof document &&
          document.body &&
          ((s = window),
            (a = document),
            (l = a.documentElement),
            (u = a.body),
            (p = [s, a, l, u]),
            r.utils.clamp,
            (g = r.core.context || function () { }),
            (h = "onpointerenter" in u ? "pointer" : "mouse"),
            (c = R.isTouch =
              s.matchMedia &&
                s.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in s ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
            (m = R.eventTypes =
              (
                "ontouchstart" in l
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in l
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (y = 0);
            }, 500),
            z(),
            (o = 1)),
          o
        );
      };
    (F.op = k), (w.cache = 0);
    var R = (function () {
      function t(t) {
        this.init(t);
      }
      var e, i, p;
      return (
        (t.prototype.init = function (t) {
          o || B(r) || console.warn("Please gsap.registerPlugin(Observer)"),
            d || z();
          var e = t.tolerance,
            i = t.dragMinimum,
            n = t.type,
            p = t.target,
            v = t.lineHeight,
            y = t.debounce,
            w = t.preventDefault,
            D = t.onStop,
            b = t.onStopDelay,
            C = t.ignore,
            A = t.wheelSpeed,
            R = t.event,
            N = t.onDragStart,
            H = t.onDragEnd,
            q = t.onDrag,
            Z = t.onPress,
            Q = t.onRelease,
            X = t.onRight,
            Y = t.onLeft,
            W = t.onUp,
            U = t.onDown,
            V = t.onChangeX,
            G = t.onChangeY,
            K = t.onChange,
            $ = t.onToggleX,
            J = t.onToggleY,
            tt = t.onHover,
            et = t.onHoverEnd,
            it = t.onMove,
            nt = t.ignoreCheck,
            rt = t.isNormalizer,
            ot = t.onGestureStart,
            st = t.onGestureEnd,
            at = t.onWheel,
            lt = t.onEnable,
            ut = t.onDisable,
            ct = t.onClick,
            ht = t.scrollSpeed,
            dt = t.capture,
            pt = t.allowClicks,
            ft = t.lockAxis,
            mt = t.onLockAxis;
          (this.target = p = M(p) || l),
            (this.vars = t),
            C && (C = r.utils.toArray(C)),
            (e = e || 1e-9),
            (i = i || 0),
            (A = A || 1),
            (ht = ht || 1),
            (n = n || "wheel,touch,pointer"),
            (y = !1 !== y),
            v || (v = parseFloat(s.getComputedStyle(u).lineHeight) || 22);
          var gt,
            vt,
            yt,
            _t,
            wt,
            Dt,
            xt,
            bt = this,
            Ct = 0,
            Et = 0,
            St = t.passive || !w,
            Tt = L(p, F),
            Pt = L(p, k),
            At = Tt(),
            Ft = Pt(),
            kt =
              ~n.indexOf("touch") &&
              !~n.indexOf("pointer") &&
              "pointerdown" === m[0],
            Mt = E(p),
            Lt = p.ownerDocument || a,
            Ot = [0, 0, 0],
            It = [0, 0, 0],
            jt = 0,
            zt = function () {
              return (jt = x());
            },
            Bt = function (t, e) {
              return (
                ((bt.event = t) && C && ~C.indexOf(t.target)) ||
                (e && kt && "touch" !== t.pointerType) ||
                (nt && nt(t, e))
              );
            },
            Rt = function () {
              var t = (bt.deltaX = j(Ot)),
                i = (bt.deltaY = j(It)),
                n = Math.abs(t) >= e,
                r = Math.abs(i) >= e;
              K && (n || r) && K(bt, t, i, Ot, It),
                n &&
                (X && bt.deltaX > 0 && X(bt),
                  Y && bt.deltaX < 0 && Y(bt),
                  V && V(bt),
                  $ && bt.deltaX < 0 != Ct < 0 && $(bt),
                  (Ct = bt.deltaX),
                  (Ot[0] = Ot[1] = Ot[2] = 0)),
                r &&
                (U && bt.deltaY > 0 && U(bt),
                  W && bt.deltaY < 0 && W(bt),
                  G && G(bt),
                  J && bt.deltaY < 0 != Et < 0 && J(bt),
                  (Et = bt.deltaY),
                  (It[0] = It[1] = It[2] = 0)),
                (_t || yt) &&
                (it && it(bt), yt && (q(bt), (yt = !1)), (_t = !1)),
                Dt && !(Dt = !1) && mt && mt(bt),
                wt && (at(bt), (wt = !1)),
                (gt = 0);
            },
            Nt = function (t, e, i) {
              (Ot[i] += t),
                (It[i] += e),
                bt._vx.update(t),
                bt._vy.update(e),
                y ? gt || (gt = requestAnimationFrame(Rt)) : Rt();
            },
            Ht = function (t, e) {
              ft &&
                !xt &&
                ((bt.axis = xt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                  (Dt = !0)),
                "y" !== xt && ((Ot[2] += t), bt._vx.update(t, !0)),
                "x" !== xt && ((It[2] += e), bt._vy.update(e, !0)),
                y ? gt || (gt = requestAnimationFrame(Rt)) : Rt();
            },
            qt = function (t) {
              if (!Bt(t, 1)) {
                var e = (t = I(t, w)).clientX,
                  n = t.clientY,
                  r = e - bt.x,
                  o = n - bt.y,
                  s = bt.isDragging;
                (bt.x = e),
                  (bt.y = n),
                  (s ||
                    Math.abs(bt.startX - e) >= i ||
                    Math.abs(bt.startY - n) >= i) &&
                  (q && (yt = !0),
                    s || (bt.isDragging = !0),
                    Ht(r, o),
                    s || (N && N(bt)));
              }
            },
            Zt = (bt.onPress = function (t) {
              Bt(t, 1) ||
                (t && t.button) ||
                ((bt.axis = xt = null),
                  vt.pause(),
                  (bt.isPressed = !0),
                  (t = I(t)),
                  (Ct = Et = 0),
                  (bt.startX = bt.x = t.clientX),
                  (bt.startY = bt.y = t.clientY),
                  bt._vx.reset(),
                  bt._vy.reset(),
                  S(rt ? p : Lt, m[1], qt, St, !0),
                  (bt.deltaX = bt.deltaY = 0),
                  Z && Z(bt));
            }),
            Qt = (bt.onRelease = function (t) {
              if (!Bt(t, 1)) {
                T(rt ? p : Lt, m[1], qt, !0);
                var e = !isNaN(bt.y - bt.startY),
                  i = bt.isDragging,
                  n =
                    i &&
                    (Math.abs(bt.x - bt.startX) > 3 ||
                      Math.abs(bt.y - bt.startY) > 3),
                  o = I(t);
                !n &&
                  e &&
                  (bt._vx.reset(),
                    bt._vy.reset(),
                    w &&
                    pt &&
                    r.delayedCall(0.08, function () {
                      if (x() - jt > 300 && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (Lt.createEvent) {
                          var e = Lt.createEvent("MouseEvents");
                          e.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            s,
                            1,
                            o.screenX,
                            o.screenY,
                            o.clientX,
                            o.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            t.target.dispatchEvent(e);
                        }
                    })),
                  (bt.isDragging = bt.isGesturing = bt.isPressed = !1),
                  D && i && !rt && vt.restart(!0),
                  H && i && H(bt),
                  Q && Q(bt, n);
              }
            }),
            Xt = function (t) {
              return (
                t.touches &&
                t.touches.length > 1 &&
                (bt.isGesturing = !0) &&
                ot(t, bt.isDragging)
              );
            },
            Yt = function () {
              return (bt.isGesturing = !1) || st(bt);
            },
            Wt = function (t) {
              if (!Bt(t)) {
                var e = Tt(),
                  i = Pt();
                Nt((e - At) * ht, (i - Ft) * ht, 1),
                  (At = e),
                  (Ft = i),
                  D && vt.restart(!0);
              }
            },
            Ut = function (t) {
              if (!Bt(t)) {
                (t = I(t, w)), at && (wt = !0);
                var e =
                  (1 === t.deltaMode
                    ? v
                    : 2 === t.deltaMode
                      ? s.innerHeight
                      : 1) * A;
                Nt(t.deltaX * e, t.deltaY * e, 0), D && !rt && vt.restart(!0);
              }
            },
            Vt = function (t) {
              if (!Bt(t)) {
                var e = t.clientX,
                  i = t.clientY,
                  n = e - bt.x,
                  r = i - bt.y;
                (bt.x = e),
                  (bt.y = i),
                  (_t = !0),
                  D && vt.restart(!0),
                  (n || r) && Ht(n, r);
              }
            },
            Gt = function (t) {
              (bt.event = t), tt(bt);
            },
            Kt = function (t) {
              (bt.event = t), et(bt);
            },
            $t = function (t) {
              return Bt(t) || (I(t, w) && ct(bt));
            };
          (vt = bt._dc =
            r
              .delayedCall(b || 0.25, function () {
                bt._vx.reset(), bt._vy.reset(), vt.pause(), D && D(bt);
              })
              .pause()),
            (bt.deltaX = bt.deltaY = 0),
            (bt._vx = O(0, 50, !0)),
            (bt._vy = O(0, 50, !0)),
            (bt.scrollX = Tt),
            (bt.scrollY = Pt),
            (bt.isDragging = bt.isGesturing = bt.isPressed = !1),
            g(this),
            (bt.enable = function (t) {
              return (
                bt.isEnabled ||
                (S(Mt ? Lt : p, "scroll", P),
                  n.indexOf("scroll") >= 0 &&
                  S(Mt ? Lt : p, "scroll", Wt, St, dt),
                  n.indexOf("wheel") >= 0 && S(p, "wheel", Ut, St, dt),
                  ((n.indexOf("touch") >= 0 && c) ||
                    n.indexOf("pointer") >= 0) &&
                  (S(p, m[0], Zt, St, dt),
                    S(Lt, m[2], Qt),
                    S(Lt, m[3], Qt),
                    pt && S(p, "click", zt, !0, !0),
                    ct && S(p, "click", $t),
                    ot && S(Lt, "gesturestart", Xt),
                    st && S(Lt, "gestureend", Yt),
                    tt && S(p, h + "enter", Gt),
                    et && S(p, h + "leave", Kt),
                    it && S(p, h + "move", Vt)),
                  (bt.isEnabled = !0),
                  t && t.type && Zt(t),
                  lt && lt(bt)),
                bt
              );
            }),
            (bt.disable = function () {
              bt.isEnabled &&
                (_.filter(function (t) {
                  return t !== bt && E(t.target);
                }).length || T(Mt ? Lt : p, "scroll", P),
                  bt.isPressed &&
                  (bt._vx.reset(),
                    bt._vy.reset(),
                    T(rt ? p : Lt, m[1], qt, !0)),
                  T(Mt ? Lt : p, "scroll", Wt, dt),
                  T(p, "wheel", Ut, dt),
                  T(p, m[0], Zt, dt),
                  T(Lt, m[2], Qt),
                  T(Lt, m[3], Qt),
                  T(p, "click", zt, !0),
                  T(p, "click", $t),
                  T(Lt, "gesturestart", Xt),
                  T(Lt, "gestureend", Yt),
                  T(p, h + "enter", Gt),
                  T(p, h + "leave", Kt),
                  T(p, h + "move", Vt),
                  (bt.isEnabled = bt.isPressed = bt.isDragging = !1),
                  ut && ut(bt));
            }),
            (bt.kill = bt.revert =
              function () {
                bt.disable();
                var t = _.indexOf(bt);
                t >= 0 && _.splice(t, 1), f === bt && (f = 0);
              }),
            _.push(bt),
            rt && E(p) && (f = bt),
            bt.enable(R);
        }),
        (e = t),
        (i = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]) && n(e.prototype, i),
        p && n(e, p),
        t
      );
    })();
    (R.version = "3.12.5"),
      (R.create = function (t) {
        return new R(t);
      }),
      (R.register = B),
      (R.getAll = function () {
        return _.slice();
      }),
      (R.getById = function (t) {
        return _.filter(function (e) {
          return e.vars.id === t;
        })[0];
      }),
      v() && r.registerPlugin(R);
    /*!
     * ScrollTrigger 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var N,
      H,
      q,
      Z,
      Q,
      X,
      Y,
      W,
      U,
      V,
      G,
      K,
      $,
      J,
      tt,
      et,
      it,
      nt,
      rt,
      ot,
      st,
      at,
      lt,
      ut,
      ct,
      ht,
      dt,
      pt,
      ft,
      mt,
      gt,
      vt,
      yt,
      _t,
      wt,
      Dt,
      xt,
      bt,
      Ct = 1,
      Et = Date.now,
      St = Et(),
      Tt = 0,
      Pt = 0,
      At = function (t, e, i) {
        var n = qt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
        return (i["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
      },
      Ft = function (t, e) {
        return !e || (qt(t) && "clamp(" === t.substr(0, 6))
          ? t
          : "clamp(" + t + ")";
      },
      kt = function () {
        return (J = 1);
      },
      Mt = function () {
        return (J = 0);
      },
      Lt = function (t) {
        return t;
      },
      Ot = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      It = function () {
        return "undefined" != typeof window;
      },
      jt = function () {
        return N || (It() && (N = window.gsap) && N.registerPlugin && N);
      },
      zt = function (t) {
        return !!~Y.indexOf(t);
      },
      Bt = function (t) {
        return (
          ("Height" === t ? gt : q["inner" + t]) ||
          Q["client" + t] ||
          X["client" + t]
        );
      },
      Rt = function (t) {
        return (
          C(t, "getBoundingClientRect") ||
          (zt(t)
            ? function () {
              return (Ne.width = q.innerWidth), (Ne.height = gt), Ne;
            }
            : function () {
              return Jt(t);
            })
        );
      },
      Nt = function (t, e) {
        var i = e.s,
          n = e.d2,
          r = e.d,
          o = e.a;
        return Math.max(
          0,
          (i = "scroll" + n) && (o = C(t, i))
            ? o() - Rt(t)()[r]
            : zt(t)
              ? (Q[i] || X[i]) - Bt(n)
              : t[i] - t["offset" + n]
        );
      },
      Ht = function (t, e) {
        for (var i = 0; i < rt.length; i += 3)
          (!e || ~e.indexOf(rt[i + 1])) && t(rt[i], rt[i + 1], rt[i + 2]);
      },
      qt = function (t) {
        return "string" == typeof t;
      },
      Zt = function (t) {
        return "function" == typeof t;
      },
      Qt = function (t) {
        return "number" == typeof t;
      },
      Xt = function (t) {
        return "object" == typeof t;
      },
      Yt = function (t, e, i) {
        return t && t.progress(e ? 0 : 1) && i && t.pause();
      },
      Wt = function (t, e) {
        if (t.enabled) {
          var i = t._ctx
            ? t._ctx.add(function () {
              return e(t);
            })
            : e(t);
          i && i.totalTime && (t.callbackAnimation = i);
        }
      },
      Ut = Math.abs,
      Vt = "padding",
      Gt = "px",
      Kt = function (t) {
        return q.getComputedStyle(t);
      },
      $t = function (t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t;
      },
      Jt = function (t, e) {
        var i =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== Kt(t)[tt] &&
          N.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
          n = t.getBoundingClientRect();
        return i && i.progress(0).kill(), n;
      },
      te = function (t, e) {
        var i = e.d2;
        return t["offset" + i] || t["client" + i] || 0;
      },
      ee = function (t) {
        var e,
          i = [],
          n = t.labels,
          r = t.duration();
        for (e in n) i.push(n[e] / r);
        return i;
      },
      ie = function (t) {
        var e = N.utils.snap(t),
          i =
            Array.isArray(t) &&
            t.slice(0).sort(function (t, e) {
              return t - e;
            });
        return i
          ? function (t, n, r) {
            var o;
            if ((void 0 === r && (r = 0.001), !n)) return e(t);
            if (n > 0) {
              for (t -= r, o = 0; o < i.length; o++)
                if (i[o] >= t) return i[o];
              return i[o - 1];
            }
            for (o = i.length, t += r; o--;) if (i[o] <= t) return i[o];
            return i[0];
          }
          : function (i, n, r) {
            void 0 === r && (r = 0.001);
            var o = e(i);
            return !n || Math.abs(o - i) < r || o - i < 0 == n < 0
              ? o
              : e(n < 0 ? i - t : i + t);
          };
      },
      ne = function (t, e, i, n) {
        return i.split(",").forEach(function (i) {
          return t(e, i, n);
        });
      },
      re = function (t, e, i, n, r) {
        return t.addEventListener(e, i, { passive: !n, capture: !!r });
      },
      oe = function (t, e, i, n) {
        return t.removeEventListener(e, i, !!n);
      },
      se = function (t, e, i) {
        (i = i && i.wheelHandler) && (t(e, "wheel", i), t(e, "touchmove", i));
      },
      ae = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      le = { toggleActions: "play", anticipatePin: 0 },
      ue = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      ce = function (t, e) {
        if (qt(t)) {
          var i = t.indexOf("="),
            n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
          ~i &&
            (t.indexOf("%") > i && (n *= e / 100), (t = t.substr(0, i - 1))),
            (t =
              n +
              (t in ue
                ? ue[t] * e
                : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0));
        }
        return t;
      },
      he = function (t, e, i, n, r, o, s, a) {
        var l = r.startColor,
          u = r.endColor,
          c = r.fontSize,
          h = r.indent,
          d = r.fontWeight,
          p = Z.createElement("div"),
          f = zt(i) || "fixed" === C(i, "pinType"),
          m = -1 !== t.indexOf("scroller"),
          g = f ? X : i,
          v = -1 !== t.indexOf("start"),
          y = v ? l : u,
          _ =
            "border-color:" +
            y +
            ";font-size:" +
            c +
            ";color:" +
            y +
            ";font-weight:" +
            d +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (_ += "position:" + ((m || a) && f ? "fixed;" : "absolute;")),
          (m || a || !f) &&
          (_ +=
            (n === k ? "right" : "bottom") +
            ":" +
            (o + parseFloat(h)) +
            "px;"),
          s &&
          (_ +=
            "box-sizing:border-box;text-align:left;width:" +
            s.offsetWidth +
            "px;"),
          (p._isStart = v),
          p.setAttribute(
            "class",
            "gsap-marker-" + t + (e ? " marker-" + e : "")
          ),
          (p.style.cssText = _),
          (p.innerText = e || 0 === e ? t + "-" + e : t),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p["offset" + n.op.d2]),
          de(p, 0, n, v),
          p
        );
      },
      de = function (t, e, i, n) {
        var r = { display: "block" },
          o = i[n ? "os2" : "p2"],
          s = i[n ? "p2" : "os2"];
        (t._isFlipped = n),
          (r[i.a + "Percent"] = n ? -100 : 0),
          (r[i.a] = n ? "1px" : 0),
          (r["border" + o + "Width"] = 1),
          (r["border" + s + "Width"] = 0),
          (r[i.p] = e + "px"),
          N.set(t, r);
      },
      pe = [],
      fe = {},
      me = function () {
        return Et() - Tt > 34 && (wt || (wt = requestAnimationFrame(Le)));
      },
      ge = function () {
        (!lt || !lt.isPressed || lt.startX > X.clientWidth) &&
          (w.cache++,
            lt ? wt || (wt = requestAnimationFrame(Le)) : Le(),
            Tt || xe("scrollStart"),
            (Tt = Et()));
      },
      ve = function () {
        (ht = q.innerWidth), (ct = q.innerHeight);
      },
      ye = function () {
        w.cache++,
          !$ &&
          !at &&
          !Z.fullscreenElement &&
          !Z.webkitFullscreenElement &&
          (!ut ||
            ht !== q.innerWidth ||
            Math.abs(q.innerHeight - ct) > 0.25 * q.innerHeight) &&
          W.restart(!0);
      },
      _e = {},
      we = [],
      De = function t() {
        return oe(We, "scrollEnd", t) || Fe(!0);
      },
      xe = function (t) {
        return (
          (_e[t] &&
            _e[t].map(function (t) {
              return t();
            })) ||
          we
        );
      },
      be = [],
      Ce = function (t) {
        for (var e = 0; e < be.length; e += 5)
          (!t || (be[e + 4] && be[e + 4].query === t)) &&
            ((be[e].style.cssText = be[e + 1]),
              be[e].getBBox && be[e].setAttribute("transform", be[e + 2] || ""),
              (be[e + 3].uncache = 1));
      },
      Ee = function (t, e) {
        var i;
        for (et = 0; et < pe.length; et++)
          !(i = pe[et]) ||
            (e && i._ctx !== e) ||
            (t ? i.kill(1) : i.revert(!0, !0));
        (vt = !0), e && Ce(e), e || xe("revert");
      },
      Se = function (t, e) {
        w.cache++,
          (e || !Dt) &&
          w.forEach(function (t) {
            return Zt(t) && t.cacheID++ && (t.rec = 0);
          }),
          qt(t) && (q.history.scrollRestoration = ft = t);
      },
      Te = 0,
      Pe = function () {
        X.appendChild(mt),
          (gt = (!lt && mt.offsetHeight) || q.innerHeight),
          X.removeChild(mt);
      },
      Ae = function (t) {
        return U(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (e) {
          return (e.style.display = t ? "none" : "block");
        });
      },
      Fe = function (t, e) {
        if (!Tt || t || vt) {
          Pe(),
            (Dt = We.isRefreshing = !0),
            w.forEach(function (t) {
              return Zt(t) && ++t.cacheID && (t.rec = t());
            });
          var i = xe("refreshInit");
          ot && We.sort(),
            e || Ee(),
            w.forEach(function (t) {
              Zt(t) &&
                (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
            }),
            pe.slice(0).forEach(function (t) {
              return t.refresh();
            }),
            (vt = !1),
            pe.forEach(function (t) {
              if (t._subPinOffset && t.pin) {
                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  i = t.pin[e];
                t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - i), t.refresh();
              }
            }),
            (yt = 1),
            Ae(!0),
            pe.forEach(function (t) {
              var e = Nt(t.scroller, t._dir),
                i = "max" === t.vars.end || (t._endClamp && t.end > e),
                n = t._startClamp && t.start >= e;
              (i || n) &&
                t.setPositions(
                  n ? e - 1 : t.start,
                  i ? Math.max(n ? e : t.start + 1, e) : t.end,
                  !0
                );
            }),
            Ae(!1),
            (yt = 0),
            i.forEach(function (t) {
              return t && t.render && t.render(-1);
            }),
            w.forEach(function (t) {
              Zt(t) &&
                (t.smooth &&
                  requestAnimationFrame(function () {
                    return (t.target.style.scrollBehavior = "smooth");
                  }),
                  t.rec && t(t.rec));
            }),
            Se(ft, 1),
            W.pause(),
            Te++,
            (Dt = 2),
            Le(2),
            pe.forEach(function (t) {
              return Zt(t.vars.onRefresh) && t.vars.onRefresh(t);
            }),
            (Dt = We.isRefreshing = !1),
            xe("refresh");
        } else re(We, "scrollEnd", De);
      },
      ke = 0,
      Me = 1,
      Le = function (t) {
        if (2 === t || (!Dt && !vt)) {
          (We.isUpdating = !0), bt && bt.update(0);
          var e = pe.length,
            i = Et(),
            n = i - St >= 50,
            r = e && pe[0].scroll();
          if (
            ((Me = ke > r ? -1 : 1),
              Dt || (ke = r),
              n &&
              (Tt && !J && i - Tt > 200 && ((Tt = 0), xe("scrollEnd")),
                (G = St),
                (St = i)),
              Me < 0)
          ) {
            for (et = e; et-- > 0;) pe[et] && pe[et].update(0, n);
            Me = 1;
          } else for (et = 0; et < e; et++) pe[et] && pe[et].update(0, n);
          We.isUpdating = !1;
        }
        wt = 0;
      },
      Oe = [
        "left",
        "top",
        "bottom",
        "right",
        "marginBottom",
        "marginRight",
        "marginTop",
        "marginLeft",
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      Ie = Oe.concat([
        "width",
        "height",
        "boxSizing",
        "maxWidth",
        "maxHeight",
        "position",
        "margin",
        Vt,
        Vt + "Top",
        Vt + "Right",
        Vt + "Bottom",
        Vt + "Left",
      ]),
      je = function (t, e, i, n) {
        if (!t._gsap.swappedIn) {
          for (var r, o = Oe.length, s = e.style, a = t.style; o--;)
            s[(r = Oe[o])] = i[r];
          (s.position = "absolute" === i.position ? "absolute" : "relative"),
            "inline" === i.display && (s.display = "inline-block"),
            (a.bottom = a.right = "auto"),
            (s.flexBasis = i.flexBasis || "auto"),
            (s.overflow = "visible"),
            (s.boxSizing = "border-box"),
            (s.width = te(t, F) + Gt),
            (s.height = te(t, k) + Gt),
            (s[Vt] = a.margin = a.top = a.left = "0"),
            Be(n),
            (a.width = a.maxWidth = i.width),
            (a.height = a.maxHeight = i.height),
            (a[Vt] = i[Vt]),
            t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
            (t._gsap.swappedIn = !0);
        }
      },
      ze = /([A-Z])/g,
      Be = function (t) {
        if (t) {
          var e,
            i,
            n = t.t.style,
            r = t.length,
            o = 0;
          for ((t.t._gsap || N.core.getCache(t.t)).uncache = 1; o < r; o += 2)
            (i = t[o + 1]),
              (e = t[o]),
              i
                ? (n[e] = i)
                : n[e] && n.removeProperty(e.replace(ze, "-$1").toLowerCase());
        }
      },
      Re = function (t) {
        for (var e = Ie.length, i = t.style, n = [], r = 0; r < e; r++)
          n.push(Ie[r], i[Ie[r]]);
        return (n.t = t), n;
      },
      Ne = { left: 0, top: 0 },
      He = function (t, e, i, n, r, o, s, a, l, u, c, h, d, p) {
        Zt(t) && (t = t(a)),
          qt(t) &&
          "max" === t.substr(0, 3) &&
          (t = h + ("=" === t.charAt(4) ? ce("0" + t.substr(3), i) : 0));
        var f,
          m,
          g,
          v = d ? d.time() : 0;
        if ((d && d.seek(0), isNaN(t) || (t = +t), Qt(t)))
          d &&
            (t = N.utils.mapRange(
              d.scrollTrigger.start,
              d.scrollTrigger.end,
              0,
              h,
              t
            )),
            s && de(s, i, n, !0);
        else {
          Zt(e) && (e = e(a));
          var y,
            _,
            w,
            D,
            x = (t || "0").split(" ");
          (g = M(e, a) || X),
            ((y = Jt(g) || {}) && (y.left || y.top)) ||
            "none" !== Kt(g).display ||
            ((D = g.style.display),
              (g.style.display = "block"),
              (y = Jt(g)),
              D ? (g.style.display = D) : g.style.removeProperty("display")),
            (_ = ce(x[0], y[n.d])),
            (w = ce(x[1] || "0", i)),
            (t = y[n.p] - l[n.p] - u + _ + r - w),
            s && de(s, w, n, i - w < 20 || (s._isStart && w > 20)),
            (i -= i - w);
        }
        if ((p && ((a[p] = t || -0.001), t < 0 && (t = 0)), o)) {
          var b = t + i,
            C = o._isStart;
          (f = "scroll" + n.d2),
            de(
              o,
              b,
              n,
              (C && b > 20) ||
              (!C && (c ? Math.max(X[f], Q[f]) : o.parentNode[f]) <= b + 1)
            ),
            c &&
            ((l = Jt(s)),
              c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Gt));
        }
        return (
          d &&
          g &&
          ((f = Jt(g)),
            d.seek(h),
            (m = Jt(g)),
            (d._caScrollDist = f[n.p] - m[n.p]),
            (t = (t / d._caScrollDist) * h)),
          d && d.seek(v),
          d ? t : Math.round(t)
        );
      },
      qe = /(webkit|moz|length|cssText|inset)/i,
      Ze = function (t, e, i, n) {
        if (t.parentNode !== e) {
          var r,
            o,
            s = t.style;
          if (e === X) {
            for (r in ((t._stOrig = s.cssText), (o = Kt(t))))
              +r ||
                qe.test(r) ||
                !o[r] ||
                "string" != typeof s[r] ||
                "0" === r ||
                (s[r] = o[r]);
            (s.top = i), (s.left = n);
          } else s.cssText = t._stOrig;
          (N.core.getCache(t).uncache = 1), e.appendChild(t);
        }
      },
      Qe = function (t, e, i) {
        var n = e,
          r = n;
        return function (e) {
          var o = Math.round(t());
          return (
            o !== n &&
            o !== r &&
            Math.abs(o - n) > 3 &&
            Math.abs(o - r) > 3 &&
            ((e = o), i && i()),
            (r = n),
            (n = e),
            e
          );
        };
      },
      Xe = function (t, e, i) {
        var n = {};
        (n[e.p] = "+=" + i), N.set(t, n);
      },
      Ye = function (t, e) {
        var i = L(t, e),
          n = "_scroll" + e.p2,
          r = function e(r, o, s, a, l) {
            var u = e.tween,
              c = o.onComplete,
              h = {};
            s = s || i();
            var d = Qe(i, s, function () {
              u.kill(), (e.tween = 0);
            });
            return (
              (l = (a && l) || 0),
              (a = a || r - s),
              u && u.kill(),
              (o[n] = r),
              (o.inherit = !1),
              (o.modifiers = h),
              (h[n] = function () {
                return d(s + a * u.ratio + l * u.ratio * u.ratio);
              }),
              (o.onUpdate = function () {
                w.cache++, e.tween && Le();
              }),
              (o.onComplete = function () {
                (e.tween = 0), c && c.call(u);
              }),
              (u = e.tween = N.to(t, o))
            );
          };
        return (
          (t[n] = i),
          (i.wheelHandler = function () {
            return r.tween && r.tween.kill() && (r.tween = 0);
          }),
          re(t, "wheel", i.wheelHandler),
          We.isTouch && re(t, "touchmove", i.wheelHandler),
          r
        );
      },
      We = (function () {
        function t(e, i) {
          H ||
            t.register(N) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            pt(this),
            this.init(e, i);
        }
        return (
          (t.prototype.init = function (e, i) {
            if (
              ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                Pt)
            ) {
              var n,
                r,
                o,
                s,
                a,
                l,
                u,
                c,
                h,
                d,
                p,
                f,
                m,
                g,
                v,
                y,
                _,
                x,
                b,
                E,
                S,
                T,
                P,
                A,
                O,
                I,
                j,
                z,
                B,
                R,
                H,
                Y,
                W,
                K,
                tt,
                it,
                nt,
                rt,
                at,
                lt,
                ut,
                ct,
                ht = (e = $t(
                  qt(e) || Qt(e) || e.nodeType ? { trigger: e } : e,
                  le
                )),
                dt = ht.onUpdate,
                pt = ht.toggleClass,
                ft = ht.id,
                mt = ht.onToggle,
                gt = ht.onRefresh,
                vt = ht.scrub,
                wt = ht.trigger,
                St = ht.pin,
                kt = ht.pinSpacing,
                Mt = ht.invalidateOnRefresh,
                It = ht.anticipatePin,
                jt = ht.onScrubComplete,
                Ht = ht.onSnapComplete,
                ne = ht.once,
                se = ht.snap,
                ue = ht.pinReparent,
                de = ht.pinSpacer,
                me = ht.containerAnimation,
                ve = ht.fastScrollEnd,
                _e = ht.preventOverlaps,
                we =
                  e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                    ? F
                    : k,
                xe = !vt && 0 !== vt,
                be = M(e.scroller || q),
                Ce = N.core.getCache(be),
                Ee = zt(be),
                Se =
                  "fixed" ===
                  ("pinType" in e
                    ? e.pinType
                    : C(be, "pinType") || (Ee && "fixed")),
                Pe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                Ae = xe && e.toggleActions.split(" "),
                ke = "markers" in e ? e.markers : le.markers,
                Le = Ee
                  ? 0
                  : parseFloat(Kt(be)["border" + we.p2 + "Width"]) || 0,
                Oe = this,
                Ie =
                  e.onRefreshInit &&
                  function () {
                    return e.onRefreshInit(Oe);
                  },
                ze = (function (t, e, i) {
                  var n = i.d,
                    r = i.d2,
                    o = i.a;
                  return (o = C(t, "getBoundingClientRect"))
                    ? function () {
                      return o()[n];
                    }
                    : function () {
                      return (e ? Bt(r) : t["client" + r]) || 0;
                    };
                })(be, Ee, we),
                qe = (function (t, e) {
                  return !e || ~D.indexOf(t)
                    ? Rt(t)
                    : function () {
                      return Ne;
                    };
                })(be, Ee),
                Qe = 0,
                We = 0,
                Ue = 0,
                Ve = L(be, we);
              if (
                ((Oe._startClamp = Oe._endClamp = !1),
                  (Oe._dir = we),
                  (It *= 45),
                  (Oe.scroller = be),
                  (Oe.scroll = me ? me.time.bind(me) : Ve),
                  (s = Ve()),
                  (Oe.vars = e),
                  (i = i || e.animation),
                  "refreshPriority" in e &&
                  ((ot = 1), -9999 === e.refreshPriority && (bt = Oe)),
                  (Ce.tweenScroll = Ce.tweenScroll || {
                    top: Ye(be, k),
                    left: Ye(be, F),
                  }),
                  (Oe.tweenTo = n = Ce.tweenScroll[we.p]),
                  (Oe.scrubDuration = function (t) {
                    (W = Qt(t) && t)
                      ? Y
                        ? Y.duration(t)
                        : (Y = N.to(i, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: W,
                          paused: !0,
                          onComplete: function () {
                            return jt && jt(Oe);
                          },
                        }))
                      : (Y && Y.progress(1).kill(), (Y = 0));
                  }),
                  i &&
                  ((i.vars.lazy = !1),
                    (i._initted && !Oe.isReverted) ||
                    (!1 !== i.vars.immediateRender &&
                      !1 !== e.immediateRender &&
                      i.duration() &&
                      i.render(0, !0, !0)),
                    (Oe.animation = i.pause()),
                    (i.scrollTrigger = Oe),
                    Oe.scrubDuration(vt),
                    (R = 0),
                    ft || (ft = i.vars.id)),
                  se &&
                  ((Xt(se) && !se.push) || (se = { snapTo: se }),
                    "scrollBehavior" in X.style &&
                    N.set(Ee ? [X, Q] : be, { scrollBehavior: "auto" }),
                    w.forEach(function (t) {
                      return (
                        Zt(t) &&
                        t.target === (Ee ? Z.scrollingElement || Q : be) &&
                        (t.smooth = !1)
                      );
                    }),
                    (o = Zt(se.snapTo)
                      ? se.snapTo
                      : "labels" === se.snapTo
                        ? (function (t) {
                          return function (e) {
                            return N.utils.snap(ee(t), e);
                          };
                        })(i)
                        : "labelsDirectional" === se.snapTo
                          ? ((lt = i),
                            function (t, e) {
                              return ie(ee(lt))(t, e.direction);
                            })
                          : !1 !== se.directional
                            ? function (t, e) {
                              return ie(se.snapTo)(
                                t,
                                Et() - We < 500 ? 0 : e.direction
                              );
                            }
                            : N.utils.snap(se.snapTo)),
                    (K = se.duration || { min: 0.1, max: 2 }),
                    (K = Xt(K) ? V(K.min, K.max) : V(K, K)),
                    (tt = N.delayedCall(se.delay || W / 2 || 0.1, function () {
                      var t = Ve(),
                        e = Et() - We < 500,
                        r = n.tween;
                      if (
                        !(e || Math.abs(Oe.getVelocity()) < 10) ||
                        r ||
                        J ||
                        Qe === t
                      )
                        Oe.isActive && Qe !== t && tt.restart(!0);
                      else {
                        var s,
                          a,
                          c = (t - l) / g,
                          h = i && !xe ? i.totalProgress() : c,
                          d = e ? 0 : ((h - H) / (Et() - G)) * 1e3 || 0,
                          p = N.utils.clamp(-c, 1 - c, (Ut(d / 2) * d) / 0.185),
                          f = c + (!1 === se.inertia ? 0 : p),
                          m = se,
                          v = m.onStart,
                          y = m.onInterrupt,
                          _ = m.onComplete;
                        if (
                          ((s = o(f, Oe)),
                            Qt(s) || (s = f),
                            (a = Math.round(l + s * g)),
                            t <= u && t >= l && a !== t)
                        ) {
                          if (r && !r._initted && r.data <= Ut(a - t)) return;
                          !1 === se.inertia && (p = s - c),
                            n(
                              a,
                              {
                                duration: K(
                                  Ut(
                                    (0.185 * Math.max(Ut(f - h), Ut(s - h))) /
                                    d /
                                    0.05 || 0
                                  )
                                ),
                                ease: se.ease || "power3",
                                data: Ut(a - t),
                                onInterrupt: function () {
                                  return tt.restart(!0) && y && y(Oe);
                                },
                                onComplete: function () {
                                  Oe.update(),
                                    (Qe = Ve()),
                                    i &&
                                    (Y
                                      ? Y.resetTo(
                                        "totalProgress",
                                        s,
                                        i._tTime / i._tDur
                                      )
                                      : i.progress(s)),
                                    (R = H =
                                      i && !xe ? i.totalProgress() : Oe.progress),
                                    Ht && Ht(Oe),
                                    _ && _(Oe);
                                },
                              },
                              t,
                              p * g,
                              a - t - p * g
                            ),
                            v && v(Oe, n.tween);
                        }
                      }
                    }).pause())),
                  ft && (fe[ft] = Oe),
                  (at =
                    (wt = Oe.trigger = M(wt || (!0 !== St && St))) &&
                    wt._gsap &&
                    wt._gsap.stRevert) && (at = at(Oe)),
                  (St = !0 === St ? wt : M(St)),
                  qt(pt) && (pt = { targets: wt, className: pt }),
                  St &&
                  (!1 === kt ||
                    "margin" === kt ||
                    (kt =
                      !(
                        !kt &&
                        St.parentNode &&
                        St.parentNode.style &&
                        "flex" === Kt(St.parentNode).display
                      ) && Vt),
                    (Oe.pin = St),
                    (r = N.core.getCache(St)).spacer
                      ? (v = r.pinState)
                      : (de &&
                        ((de = M(de)) &&
                          !de.nodeType &&
                          (de = de.current || de.nativeElement),
                          (r.spacerIsNative = !!de),
                          de && (r.spacerState = Re(de))),
                        (r.spacer = x = de || Z.createElement("div")),
                        x.classList.add("pin-spacer"),
                        ft && x.classList.add("pin-spacer-" + ft),
                        (r.pinState = v = Re(St))),
                    !1 !== e.force3D && N.set(St, { force3D: !0 }),
                    (Oe.spacer = x = r.spacer),
                    (B = Kt(St)),
                    (A = B[kt + we.os2]),
                    (E = N.getProperty(St)),
                    (S = N.quickSetter(St, we.a, Gt)),
                    je(St, x, B),
                    (_ = Re(St))),
                  ke)
              ) {
                (f = Xt(ke) ? $t(ke, ae) : ae),
                  (d = he("scroller-start", ft, be, we, f, 0)),
                  (p = he("scroller-end", ft, be, we, f, 0, d)),
                  (b = d["offset" + we.op.d2]);
                var Ge = M(C(be, "content") || be);
                (c = this.markerStart = he("start", ft, Ge, we, f, b, 0, me)),
                  (h = this.markerEnd = he("end", ft, Ge, we, f, b, 0, me)),
                  me && (rt = N.quickSetter([c, h], we.a, Gt)),
                  Se ||
                  (D.length && !0 === C(be, "fixedMarkers")) ||
                  ((ct = Kt((ut = Ee ? X : be)).position),
                    (ut.style.position =
                      "absolute" === ct || "fixed" === ct ? ct : "relative"),
                    N.set([d, p], { force3D: !0 }),
                    (I = N.quickSetter(d, we.a, Gt)),
                    (z = N.quickSetter(p, we.a, Gt)));
              }
              if (me) {
                var Ke = me.vars.onUpdate,
                  $e = me.vars.onUpdateParams;
                me.eventCallback("onUpdate", function () {
                  Oe.update(0, 0, 1), Ke && Ke.apply(me, $e || []);
                });
              }
              if (
                ((Oe.previous = function () {
                  return pe[pe.indexOf(Oe) - 1];
                }),
                  (Oe.next = function () {
                    return pe[pe.indexOf(Oe) + 1];
                  }),
                  (Oe.revert = function (t, e) {
                    if (!e) return Oe.kill(!0);
                    var n = !1 !== t || !Oe.enabled,
                      r = $;
                    n !== Oe.isReverted &&
                      (n &&
                        ((it = Math.max(Ve(), Oe.scroll.rec || 0)),
                          (Ue = Oe.progress),
                          (nt = i && i.progress())),
                        c &&
                        [c, h, d, p].forEach(function (t) {
                          return (t.style.display = n ? "none" : "block");
                        }),
                        n && (($ = Oe), Oe.update(n)),
                        !St ||
                        (ue && Oe.isActive) ||
                        (n
                          ? (function (t, e, i) {
                            Be(i);
                            var n = t._gsap;
                            if (n.spacerIsNative) Be(n.spacerState);
                            else if (t._gsap.swappedIn) {
                              var r = e.parentNode;
                              r && (r.insertBefore(t, e), r.removeChild(e));
                            }
                            t._gsap.swappedIn = !1;
                          })(St, x, v)
                          : je(St, x, Kt(St), O)),
                        n || Oe.update(n),
                        ($ = r),
                        (Oe.isReverted = n));
                  }),
                  (Oe.refresh = function (r, o, f, w) {
                    if ((!$ && Oe.enabled) || o)
                      if (St && r && Tt) re(t, "scrollEnd", De);
                      else {
                        !Dt && Ie && Ie(Oe),
                          ($ = Oe),
                          n.tween && !f && (n.tween.kill(), (n.tween = 0)),
                          Y && Y.pause(),
                          Mt && i && i.revert({ kill: !1 }).invalidate(),
                          Oe.isReverted || Oe.revert(!0, !0),
                          (Oe._subPinOffset = !1);
                        var D,
                          b,
                          C,
                          S,
                          A,
                          I,
                          z,
                          B,
                          R,
                          H,
                          q,
                          W,
                          U,
                          V = ze(),
                          G = qe(),
                          K = me ? me.duration() : Nt(be, we),
                          J = g <= 0.01,
                          et = 0,
                          rt = w || 0,
                          ot = Xt(f) ? f.end : e.end,
                          at = e.endTrigger || wt,
                          lt = Xt(f)
                            ? f.start
                            : e.start ||
                            (0 !== e.start && wt ? (St ? "0 0" : "0 100%") : 0),
                          ut = (Oe.pinnedContainer =
                            e.pinnedContainer && M(e.pinnedContainer, Oe)),
                          ct = (wt && Math.max(0, pe.indexOf(Oe))) || 0,
                          ht = ct;
                        for (
                          ke &&
                          Xt(f) &&
                          ((W = N.getProperty(d, we.p)),
                            (U = N.getProperty(p, we.p)));
                          ht--;

                        )
                          (I = pe[ht]).end || I.refresh(0, 1) || ($ = Oe),
                            !(z = I.pin) ||
                            (z !== wt && z !== St && z !== ut) ||
                            I.isReverted ||
                            (H || (H = []), H.unshift(I), I.revert(!0, !0)),
                            I !== pe[ht] && (ct--, ht--);
                        for (
                          Zt(lt) && (lt = lt(Oe)),
                          lt = At(lt, "start", Oe),
                          l =
                          He(
                            lt,
                            wt,
                            V,
                            we,
                            Ve(),
                            c,
                            d,
                            Oe,
                            G,
                            Le,
                            Se,
                            K,
                            me,
                            Oe._startClamp && "_startClamp"
                          ) || (St ? -0.001 : 0),
                          Zt(ot) && (ot = ot(Oe)),
                          qt(ot) &&
                          !ot.indexOf("+=") &&
                          (~ot.indexOf(" ")
                            ? (ot = (qt(lt) ? lt.split(" ")[0] : "") + ot)
                            : ((et = ce(ot.substr(2), V)),
                              (ot = qt(lt)
                                ? lt
                                : (me
                                  ? N.utils.mapRange(
                                    0,
                                    me.duration(),
                                    me.scrollTrigger.start,
                                    me.scrollTrigger.end,
                                    l
                                  )
                                  : l) + et),
                              (at = wt))),
                          ot = At(ot, "end", Oe),
                          u =
                          Math.max(
                            l,
                            He(
                              ot || (at ? "100% 0" : K),
                              at,
                              V,
                              we,
                              Ve() + et,
                              h,
                              p,
                              Oe,
                              G,
                              Le,
                              Se,
                              K,
                              me,
                              Oe._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                          et = 0,
                          ht = ct;
                          ht--;

                        )
                          (z = (I = pe[ht]).pin) &&
                            I.start - I._pinPush <= l &&
                            !me &&
                            I.end > 0 &&
                            ((D =
                              I.end -
                              (Oe._startClamp ? Math.max(0, I.start) : I.start)),
                              ((z === wt && I.start - I._pinPush < l) ||
                                z === ut) &&
                              isNaN(lt) &&
                              (et += D * (1 - I.progress)),
                              z === St && (rt += D));
                        if (
                          ((l += et),
                            (u += et),
                            Oe._startClamp && (Oe._startClamp += et),
                            Oe._endClamp &&
                            !Dt &&
                            ((Oe._endClamp = u || -0.001),
                              (u = Math.min(u, Nt(be, we)))),
                            (g = u - l || ((l -= 0.01) && 0.001)),
                            J &&
                            (Ue = N.utils.clamp(
                              0,
                              1,
                              N.utils.normalize(l, u, it)
                            )),
                            (Oe._pinPush = rt),
                            c &&
                            et &&
                            (((D = {})[we.a] = "+=" + et),
                              ut && (D[we.p] = "-=" + Ve()),
                              N.set([c, h], D)),
                            !St || (yt && Oe.end >= Nt(be, we)))
                        ) {
                          if (wt && Ve() && !me)
                            for (b = wt.parentNode; b && b !== X;)
                              b._pinOffset &&
                                ((l -= b._pinOffset), (u -= b._pinOffset)),
                                (b = b.parentNode);
                        } else
                          (D = Kt(St)),
                            (S = we === k),
                            (C = Ve()),
                            (T = parseFloat(E(we.a)) + rt),
                            !K &&
                            u > 1 &&
                            ((q = {
                              style: (q = (Ee ? Z.scrollingElement || Q : be)
                                .style),
                              value: q["overflow" + we.a.toUpperCase()],
                            }),
                              Ee &&
                              "scroll" !==
                              Kt(X)["overflow" + we.a.toUpperCase()] &&
                              (q.style["overflow" + we.a.toUpperCase()] =
                                "scroll")),
                            je(St, x, D),
                            (_ = Re(St)),
                            (b = Jt(St, !0)),
                            (B = Se && L(be, S ? F : k)()),
                            kt
                              ? (((O = [kt + we.os2, g + rt + Gt]).t = x),
                                (ht = kt === Vt ? te(St, we) + g + rt : 0) &&
                                (O.push(we.d, ht + Gt),
                                  "auto" !== x.style.flexBasis &&
                                  (x.style.flexBasis = ht + Gt)),
                                Be(O),
                                ut &&
                                pe.forEach(function (t) {
                                  t.pin === ut &&
                                    !1 !== t.vars.pinSpacing &&
                                    (t._subPinOffset = !0);
                                }),
                                Se && Ve(it))
                              : (ht = te(St, we)) &&
                              "auto" !== x.style.flexBasis &&
                              (x.style.flexBasis = ht + Gt),
                            Se &&
                            (((A = {
                              top: b.top + (S ? C - l : B) + Gt,
                              left: b.left + (S ? B : C - l) + Gt,
                              boxSizing: "border-box",
                              position: "fixed",
                            }).width = A.maxWidth =
                              Math.ceil(b.width) + Gt),
                              (A.height = A.maxHeight = Math.ceil(b.height) + Gt),
                              (A.margin =
                                A.marginTop =
                                A.marginRight =
                                A.marginBottom =
                                A.marginLeft =
                                "0"),
                              (A[Vt] = D[Vt]),
                              (A[Vt + "Top"] = D[Vt + "Top"]),
                              (A[Vt + "Right"] = D[Vt + "Right"]),
                              (A[Vt + "Bottom"] = D[Vt + "Bottom"]),
                              (A[Vt + "Left"] = D[Vt + "Left"]),
                              (y = (function (t, e, i) {
                                for (
                                  var n, r = [], o = t.length, s = i ? 8 : 0;
                                  s < o;
                                  s += 2
                                )
                                  (n = t[s]), r.push(n, n in e ? e[n] : t[s + 1]);
                                return (r.t = t.t), r;
                              })(v, A, ue)),
                              Dt && Ve(0)),
                            i
                              ? ((R = i._initted),
                                st(1),
                                i.render(i.duration(), !0, !0),
                                (P = E(we.a) - T + g + rt),
                                (j = Math.abs(g - P) > 1),
                                Se && j && y.splice(y.length - 2, 2),
                                i.render(0, !0, !0),
                                R || i.invalidate(!0),
                                i.parent || i.totalTime(i.totalTime()),
                                st(0))
                              : (P = g),
                            q &&
                            (q.value
                              ? (q.style["overflow" + we.a.toUpperCase()] =
                                q.value)
                              : q.style.removeProperty("overflow-" + we.a));
                        H &&
                          H.forEach(function (t) {
                            return t.revert(!1, !0);
                          }),
                          (Oe.start = l),
                          (Oe.end = u),
                          (s = a = Dt ? it : Ve()),
                          me || Dt || (s < it && Ve(it), (Oe.scroll.rec = 0)),
                          Oe.revert(!1, !0),
                          (We = Et()),
                          tt && ((Qe = -1), tt.restart(!0)),
                          ($ = 0),
                          i &&
                          xe &&
                          (i._initted || nt) &&
                          i.progress() !== nt &&
                          i.progress(nt || 0, !0).render(i.time(), !0, !0),
                          (J || Ue !== Oe.progress || me || Mt) &&
                          (i &&
                            !xe &&
                            i.totalProgress(
                              me && l < -0.001 && !Ue
                                ? N.utils.normalize(l, u, 0)
                                : Ue,
                              !0
                            ),
                            (Oe.progress = J || (s - l) / g === Ue ? 0 : Ue)),
                          St &&
                          kt &&
                          (x._pinOffset = Math.round(Oe.progress * P)),
                          Y && Y.invalidate(),
                          isNaN(W) ||
                          ((W -= N.getProperty(d, we.p)),
                            (U -= N.getProperty(p, we.p)),
                            Xe(d, we, W),
                            Xe(c, we, W - (w || 0)),
                            Xe(p, we, U),
                            Xe(h, we, U - (w || 0))),
                          J && !Dt && Oe.update(),
                          !gt || Dt || m || ((m = !0), gt(Oe), (m = !1));
                      }
                  }),
                  (Oe.getVelocity = function () {
                    return ((Ve() - a) / (Et() - G)) * 1e3 || 0;
                  }),
                  (Oe.endAnimation = function () {
                    Yt(Oe.callbackAnimation),
                      i &&
                      (Y
                        ? Y.progress(1)
                        : i.paused()
                          ? xe || Yt(i, Oe.direction < 0, 1)
                          : Yt(i, i.reversed()));
                  }),
                  (Oe.labelToScroll = function (t) {
                    return (
                      (i &&
                        i.labels &&
                        (l || Oe.refresh() || l) +
                        (i.labels[t] / i.duration()) * g) ||
                      0
                    );
                  }),
                  (Oe.getTrailing = function (t) {
                    var e = pe.indexOf(Oe),
                      i =
                        Oe.direction > 0
                          ? pe.slice(0, e).reverse()
                          : pe.slice(e + 1);
                    return (
                      qt(t)
                        ? i.filter(function (e) {
                          return e.vars.preventOverlaps === t;
                        })
                        : i
                    ).filter(function (t) {
                      return Oe.direction > 0 ? t.end <= l : t.start >= u;
                    });
                  }),
                  (Oe.update = function (t, e, r) {
                    if (!me || r || t) {
                      var o,
                        c,
                        h,
                        p,
                        f,
                        m,
                        v,
                        w = !0 === Dt ? it : Oe.scroll(),
                        D = t ? 0 : (w - l) / g,
                        b = D < 0 ? 0 : D > 1 ? 1 : D || 0,
                        C = Oe.progress;
                      if (
                        (e &&
                          ((a = s),
                            (s = me ? Ve() : w),
                            se &&
                            ((H = R), (R = i && !xe ? i.totalProgress() : b))),
                          It &&
                          St &&
                          !$ &&
                          !Ct &&
                          Tt &&
                          (!b && l < w + ((w - a) / (Et() - G)) * It
                            ? (b = 1e-4)
                            : 1 === b &&
                            u > w + ((w - a) / (Et() - G)) * It &&
                            (b = 0.9999)),
                          b !== C && Oe.enabled)
                      ) {
                        if (
                          ((p =
                            (f =
                              (o = Oe.isActive = !!b && b < 1) !==
                              (!!C && C < 1)) || !!b != !!C),
                            (Oe.direction = b > C ? 1 : -1),
                            (Oe.progress = b),
                            p &&
                            !$ &&
                            ((c = b && !C ? 0 : 1 === b ? 1 : 1 === C ? 2 : 3),
                              xe &&
                              ((h =
                                (!f && "none" !== Ae[c + 1] && Ae[c + 1]) ||
                                Ae[c]),
                                (v =
                                  i &&
                                  ("complete" === h || "reset" === h || h in i)))),
                            _e &&
                            (f || v) &&
                            (v || vt || !i) &&
                            (Zt(_e)
                              ? _e(Oe)
                              : Oe.getTrailing(_e).forEach(function (t) {
                                return t.endAnimation();
                              })),
                            xe ||
                            (!Y || $ || Ct
                              ? i && i.totalProgress(b, !(!$ || (!We && !t)))
                              : (Y._dp._time - Y._start !== Y._time &&
                                Y.render(Y._dp._time - Y._start),
                                Y.resetTo
                                  ? Y.resetTo(
                                    "totalProgress",
                                    b,
                                    i._tTime / i._tDur
                                  )
                                  : ((Y.vars.totalProgress = b),
                                    Y.invalidate().restart()))),
                            St)
                        )
                          if ((t && kt && (x.style[kt + we.os2] = A), Se)) {
                            if (p) {
                              if (
                                ((m =
                                  !t &&
                                  b > C &&
                                  u + 1 > w &&
                                  w + 1 >= Nt(be, we)),
                                  ue)
                              )
                                if (t || (!o && !m)) Ze(St, x);
                                else {
                                  var E = Jt(St, !0),
                                    F = w - l;
                                  Ze(
                                    St,
                                    X,
                                    E.top + (we === k ? F : 0) + Gt,
                                    E.left + (we === k ? 0 : F) + Gt
                                  );
                                }
                              Be(o || m ? y : _),
                                (j && b < 1 && o) ||
                                S(T + (1 !== b || m ? 0 : P));
                            }
                          } else S(Ot(T + P * b));
                        se && !n.tween && !$ && !Ct && tt.restart(!0),
                          pt &&
                          (f || (ne && b && (b < 1 || !_t))) &&
                          U(pt.targets).forEach(function (t) {
                            return t.classList[o || ne ? "add" : "remove"](
                              pt.className
                            );
                          }),
                          dt && !xe && !t && dt(Oe),
                          p && !$
                            ? (xe &&
                              (v &&
                                ("complete" === h
                                  ? i.pause().totalProgress(1)
                                  : "reset" === h
                                    ? i.restart(!0).pause()
                                    : "restart" === h
                                      ? i.restart(!0)
                                      : i[h]()),
                                dt && dt(Oe)),
                              (!f && _t) ||
                              (mt && f && Wt(Oe, mt),
                                Pe[c] && Wt(Oe, Pe[c]),
                                ne && (1 === b ? Oe.kill(!1, 1) : (Pe[c] = 0)),
                                f ||
                                (Pe[(c = 1 === b ? 1 : 3)] && Wt(Oe, Pe[c]))),
                              ve &&
                              !o &&
                              Math.abs(Oe.getVelocity()) >
                              (Qt(ve) ? ve : 2500) &&
                              (Yt(Oe.callbackAnimation),
                                Y
                                  ? Y.progress(1)
                                  : Yt(i, "reverse" === h ? 1 : !b, 1)))
                            : xe && dt && !$ && dt(Oe);
                      }
                      if (z) {
                        var M = me
                          ? (w / me.duration()) * (me._caScrollDist || 0)
                          : w;
                        I(M + (d._isFlipped ? 1 : 0)), z(M);
                      }
                      rt && rt((-w / me.duration()) * (me._caScrollDist || 0));
                    }
                  }),
                  (Oe.enable = function (e, i) {
                    Oe.enabled ||
                      ((Oe.enabled = !0),
                        re(be, "resize", ye),
                        Ee || re(be, "scroll", ge),
                        Ie && re(t, "refreshInit", Ie),
                        !1 !== e && ((Oe.progress = Ue = 0), (s = a = Qe = Ve())),
                        !1 !== i && Oe.refresh());
                  }),
                  (Oe.getTween = function (t) {
                    return t && n ? n.tween : Y;
                  }),
                  (Oe.setPositions = function (t, e, i, n) {
                    if (me) {
                      var r = me.scrollTrigger,
                        o = me.duration(),
                        s = r.end - r.start;
                      (t = r.start + (s * t) / o), (e = r.start + (s * e) / o);
                    }
                    Oe.refresh(
                      !1,
                      !1,
                      {
                        start: Ft(t, i && !!Oe._startClamp),
                        end: Ft(e, i && !!Oe._endClamp),
                      },
                      n
                    ),
                      Oe.update();
                  }),
                  (Oe.adjustPinSpacing = function (t) {
                    if (O && t) {
                      var e = O.indexOf(we.d) + 1;
                      (O[e] = parseFloat(O[e]) + t + Gt),
                        (O[1] = parseFloat(O[1]) + t + Gt),
                        Be(O);
                    }
                  }),
                  (Oe.disable = function (e, i) {
                    if (
                      Oe.enabled &&
                      (!1 !== e && Oe.revert(!0, !0),
                        (Oe.enabled = Oe.isActive = !1),
                        i || (Y && Y.pause()),
                        (it = 0),
                        r && (r.uncache = 1),
                        Ie && oe(t, "refreshInit", Ie),
                        tt &&
                        (tt.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                        !Ee)
                    ) {
                      for (var o = pe.length; o--;)
                        if (pe[o].scroller === be && pe[o] !== Oe) return;
                      oe(be, "resize", ye), Ee || oe(be, "scroll", ge);
                    }
                  }),
                  (Oe.kill = function (t, n) {
                    Oe.disable(t, n), Y && !n && Y.kill(), ft && delete fe[ft];
                    var o = pe.indexOf(Oe);
                    o >= 0 && pe.splice(o, 1),
                      o === et && Me > 0 && et--,
                      (o = 0),
                      pe.forEach(function (t) {
                        return t.scroller === Oe.scroller && (o = 1);
                      }),
                      o || Dt || (Oe.scroll.rec = 0),
                      i &&
                      ((i.scrollTrigger = null),
                        t && i.revert({ kill: !1 }),
                        n || i.kill()),
                      c &&
                      [c, h, d, p].forEach(function (t) {
                        return t.parentNode && t.parentNode.removeChild(t);
                      }),
                      bt === Oe && (bt = 0),
                      St &&
                      (r && (r.uncache = 1),
                        (o = 0),
                        pe.forEach(function (t) {
                          return t.pin === St && o++;
                        }),
                        o || (r.spacer = 0)),
                      e.onKill && e.onKill(Oe);
                  }),
                  pe.push(Oe),
                  Oe.enable(!1, !1),
                  at && at(Oe),
                  i && i.add && !g)
              ) {
                var Je = Oe.update;
                (Oe.update = function () {
                  (Oe.update = Je), l || u || Oe.refresh();
                }),
                  N.delayedCall(0.01, Oe.update),
                  (g = 0.01),
                  (l = u = 0);
              } else Oe.refresh();
              St &&
                (function () {
                  if (xt !== Te) {
                    var t = (xt = Te);
                    requestAnimationFrame(function () {
                      return t === Te && Fe(!0);
                    });
                  }
                })();
            } else this.update = this.refresh = this.kill = Lt;
          }),
          (t.register = function (e) {
            return (
              H ||
              ((N = e || jt()),
                It() && window.document && t.enable(),
                (H = Pt)),
              H
            );
          }),
          (t.defaults = function (t) {
            if (t) for (var e in t) le[e] = t[e];
            return le;
          }),
          (t.disable = function (t, e) {
            (Pt = 0),
              pe.forEach(function (i) {
                return i[e ? "kill" : "disable"](t);
              }),
              oe(q, "wheel", ge),
              oe(Z, "scroll", ge),
              clearInterval(K),
              oe(Z, "touchcancel", Lt),
              oe(X, "touchstart", Lt),
              ne(oe, Z, "pointerdown,touchstart,mousedown", kt),
              ne(oe, Z, "pointerup,touchend,mouseup", Mt),
              W.kill(),
              Ht(oe);
            for (var i = 0; i < w.length; i += 3)
              se(oe, w[i], w[i + 1]), se(oe, w[i], w[i + 2]);
          }),
          (t.enable = function () {
            if (
              ((q = window),
                (Z = document),
                (Q = Z.documentElement),
                (X = Z.body),
                N &&
                ((U = N.utils.toArray),
                  (V = N.utils.clamp),
                  (pt = N.core.context || Lt),
                  (st = N.core.suppressOverwrites || Lt),
                  (ft = q.history.scrollRestoration || "auto"),
                  (ke = q.pageYOffset),
                  N.core.globals("ScrollTrigger", t),
                  X))
            ) {
              (Pt = 1),
                ((mt = document.createElement("div")).style.height = "100vh"),
                (mt.style.position = "absolute"),
                Pe(),
                (function t() {
                  return Pt && requestAnimationFrame(t);
                })(),
                R.register(N),
                (t.isTouch = R.isTouch),
                (dt =
                  R.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (ut = 1 === R.isTouch),
                re(q, "wheel", ge),
                (Y = [q, Z, Q, X]),
                N.matchMedia
                  ? ((t.matchMedia = function (t) {
                    var e,
                      i = N.matchMedia();
                    for (e in t) i.add(e, t[e]);
                    return i;
                  }),
                    N.addEventListener("matchMediaInit", function () {
                      return Ee();
                    }),
                    N.addEventListener("matchMediaRevert", function () {
                      return Ce();
                    }),
                    N.addEventListener("matchMedia", function () {
                      Fe(0, 1), xe("matchMedia");
                    }),
                    N.matchMedia("(orientation: portrait)", function () {
                      return ve(), ve;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                ve(),
                re(Z, "scroll", ge);
              var e,
                i,
                n = X.style,
                r = n.borderTopStyle,
                o = N.core.Animation.prototype;
              for (
                o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = "solid",
                e = Jt(X),
                k.m = Math.round(e.top + k.sc()) || 0,
                F.m = Math.round(e.left + F.sc()) || 0,
                r
                  ? (n.borderTopStyle = r)
                  : n.removeProperty("border-top-style"),
                K = setInterval(me, 250),
                N.delayedCall(0.5, function () {
                  return (Ct = 0);
                }),
                re(Z, "touchcancel", Lt),
                re(X, "touchstart", Lt),
                ne(re, Z, "pointerdown,touchstart,mousedown", kt),
                ne(re, Z, "pointerup,touchend,mouseup", Mt),
                tt = N.utils.checkPrefix("transform"),
                Ie.push(tt),
                H = Et(),
                W = N.delayedCall(0.2, Fe).pause(),
                rt = [
                  Z,
                  "visibilitychange",
                  function () {
                    var t = q.innerWidth,
                      e = q.innerHeight;
                    Z.hidden
                      ? ((it = t), (nt = e))
                      : (it === t && nt === e) || ye();
                  },
                  Z,
                  "DOMContentLoaded",
                  Fe,
                  q,
                  "load",
                  Fe,
                  q,
                  "resize",
                  ye,
                ],
                Ht(re),
                pe.forEach(function (t) {
                  return t.enable(0, 1);
                }),
                i = 0;
                i < w.length;
                i += 3
              )
                se(oe, w[i], w[i + 1]), se(oe, w[i], w[i + 2]);
            }
          }),
          (t.config = function (e) {
            "limitCallbacks" in e && (_t = !!e.limitCallbacks);
            var i = e.syncInterval;
            (i && clearInterval(K)) || ((K = i) && setInterval(me, i)),
              "ignoreMobileResize" in e &&
              (ut = 1 === t.isTouch && e.ignoreMobileResize),
              "autoRefreshEvents" in e &&
              (Ht(oe) || Ht(re, e.autoRefreshEvents || "none"),
                (at = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
          }),
          (t.scrollerProxy = function (t, e) {
            var i = M(t),
              n = w.indexOf(i),
              r = zt(i);
            ~n && w.splice(n, r ? 6 : 2),
              e && (r ? D.unshift(q, e, X, e, Q, e) : D.unshift(i, e));
          }),
          (t.clearMatchMedia = function (t) {
            pe.forEach(function (e) {
              return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
            });
          }),
          (t.isInViewport = function (t, e, i) {
            var n = (qt(t) ? M(t) : t).getBoundingClientRect(),
              r = n[i ? "width" : "height"] * e || 0;
            return i
              ? n.right - r > 0 && n.left + r < q.innerWidth
              : n.bottom - r > 0 && n.top + r < q.innerHeight;
          }),
          (t.positionInViewport = function (t, e, i) {
            qt(t) && (t = M(t));
            var n = t.getBoundingClientRect(),
              r = n[i ? "width" : "height"],
              o =
                null == e
                  ? r / 2
                  : e in ue
                    ? ue[e] * r
                    : ~e.indexOf("%")
                      ? (parseFloat(e) * r) / 100
                      : parseFloat(e) || 0;
            return i
              ? (n.left + o) / q.innerWidth
              : (n.top + o) / q.innerHeight;
          }),
          (t.killAll = function (t) {
            if (
              (pe.slice(0).forEach(function (t) {
                return "ScrollSmoother" !== t.vars.id && t.kill();
              }),
                !0 !== t)
            ) {
              var e = _e.killAll || [];
              (_e = {}),
                e.forEach(function (t) {
                  return t();
                });
            }
          }),
          t
        );
      })();
    (We.version = "3.12.5"),
      (We.saveStyles = function (t) {
        return t
          ? U(t).forEach(function (t) {
            if (t && t.style) {
              var e = be.indexOf(t);
              e >= 0 && be.splice(e, 5),
                be.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  N.core.getCache(t),
                  pt()
                );
            }
          })
          : be;
      }),
      (We.revert = function (t, e) {
        return Ee(!t, e);
      }),
      (We.create = function (t, e) {
        return new We(t, e);
      }),
      (We.refresh = function (t) {
        return t ? ye() : (H || We.register()) && Fe(!0);
      }),
      (We.update = function (t) {
        return ++w.cache && Le(!0 === t ? 2 : 0);
      }),
      (We.clearScrollMemory = Se),
      (We.maxScroll = function (t, e) {
        return Nt(t, e ? F : k);
      }),
      (We.getScrollFunc = function (t, e) {
        return L(M(t), e ? F : k);
      }),
      (We.getById = function (t) {
        return fe[t];
      }),
      (We.getAll = function () {
        return pe.filter(function (t) {
          return "ScrollSmoother" !== t.vars.id;
        });
      }),
      (We.isScrolling = function () {
        return !!Tt;
      }),
      (We.snapDirectional = ie),
      (We.addEventListener = function (t, e) {
        var i = _e[t] || (_e[t] = []);
        ~i.indexOf(e) || i.push(e);
      }),
      (We.removeEventListener = function (t, e) {
        var i = _e[t],
          n = i && i.indexOf(e);
        n >= 0 && i.splice(n, 1);
      }),
      (We.batch = function (t, e) {
        var i,
          n = [],
          r = {},
          o = e.interval || 0.016,
          s = e.batchMax || 1e9,
          a = function (t, e) {
            var i = [],
              n = [],
              r = N.delayedCall(o, function () {
                e(i, n), (i = []), (n = []);
              }).pause();
            return function (t) {
              i.length || r.restart(!0),
                i.push(t.trigger),
                n.push(t),
                s <= i.length && r.progress(1);
            };
          };
        for (i in e)
          r[i] =
            "on" === i.substr(0, 2) && Zt(e[i]) && "onRefreshInit" !== i
              ? a(0, e[i])
              : e[i];
        return (
          Zt(s) &&
          ((s = s()),
            re(We, "refresh", function () {
              return (s = e.batchMax());
            })),
          U(t).forEach(function (t) {
            var e = {};
            for (i in r) e[i] = r[i];
            (e.trigger = t), n.push(We.create(e));
          }),
          n
        );
      });
    var Ue,
      Ve = function (t, e, i, n) {
        return (
          e > n ? t(n) : e < 0 && t(0),
          i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
        );
      },
      Ge = function t(e, i) {
        !0 === i
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
            !0 === i
              ? "auto"
              : i
                ? "pan-" + i + (R.isTouch ? " pinch-zoom" : "")
                : "none"),
          e === Q && t(X, i);
      },
      Ke = { auto: 1, scroll: 1 },
      $e = function (t) {
        var e,
          i = t.event,
          n = t.target,
          r = t.axis,
          o = (i.changedTouches ? i.changedTouches[0] : i).target,
          s = o._gsap || N.core.getCache(o),
          a = Et();
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
          for (
            ;
            o &&
            o !== X &&
            ((o.scrollHeight <= o.clientHeight &&
              o.scrollWidth <= o.clientWidth) ||
              (!Ke[(e = Kt(o)).overflowY] && !Ke[e.overflowX]));

          )
            o = o.parentNode;
          (s._isScroll =
            o &&
            o !== n &&
            !zt(o) &&
            (Ke[(e = Kt(o)).overflowY] || Ke[e.overflowX])),
            (s._isScrollT = a);
        }
        (s._isScroll || "x" === r) &&
          (i.stopPropagation(), (i._gsapAllow = !0));
      },
      Je = function (t, e, i, n) {
        return R.create({
          target: t,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: e,
          onWheel: (n = n && $e),
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: function () {
            return i && re(Z, R.eventTypes[0], ei, !1, !0);
          },
          onDisable: function () {
            return oe(Z, R.eventTypes[0], ei, !0);
          },
        });
      },
      ti = /(input|label|select|textarea)/i,
      ei = function (t) {
        var e = ti.test(t.target.tagName);
        (e || Ue) && ((t._gsapAllow = !0), (Ue = e));
      },
      ii = function (t) {
        Xt(t) || (t = {}),
          (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
          t.type || (t.type = "wheel,touch"),
          (t.debounce = !!t.debounce),
          (t.id = t.id || "normalizer");
        var e,
          i,
          n,
          r,
          o,
          s,
          a,
          l,
          u = t,
          c = u.normalizeScrollX,
          h = u.momentum,
          d = u.allowNestedScroll,
          p = u.onRelease,
          f = M(t.target) || Q,
          m = N.core.globals().ScrollSmoother,
          g = m && m.get(),
          v =
            dt &&
            ((t.content && M(t.content)) ||
              (g && !1 !== t.content && !g.smooth() && g.content())),
          y = L(f, k),
          _ = L(f, F),
          D = 1,
          x =
            (R.isTouch && q.visualViewport
              ? q.visualViewport.scale * q.visualViewport.width
              : q.outerWidth) / q.innerWidth,
          b = 0,
          C = Zt(h)
            ? function () {
              return h(e);
            }
            : function () {
              return h || 2.8;
            },
          E = Je(f, t.type, !0, d),
          S = function () {
            return (r = !1);
          },
          T = Lt,
          P = Lt,
          A = function () {
            (i = Nt(f, k)),
              (P = V(dt ? 1 : 0, i)),
              c && (T = V(0, Nt(f, F))),
              (n = Te);
          },
          O = function () {
            (v._gsap.y = Ot(parseFloat(v._gsap.y) + y.offset) + "px"),
              (v.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(v._gsap.y) +
                ", 0, 1)"),
              (y.offset = y.cacheID = 0);
          },
          I = function () {
            A(),
              o.isActive() &&
              o.vars.scrollY > i &&
              (y() > i ? o.progress(1) && y(i) : o.resetTo("scrollY", i));
          };
        return (
          v && N.set(v, { y: "+=0" }),
          (t.ignoreCheck = function (t) {
            return (
              (dt &&
                "touchmove" === t.type &&
                (function () {
                  if (r) {
                    requestAnimationFrame(S);
                    var t = Ot(e.deltaY / 2),
                      i = P(y.v - t);
                    if (v && i !== y.v + y.offset) {
                      y.offset = i - y.v;
                      var n = Ot((parseFloat(v && v._gsap.y) || 0) - y.offset);
                      (v.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        n +
                        ", 0, 1)"),
                        (v._gsap.y = n + "px"),
                        (y.cacheID = w.cache),
                        Le();
                    }
                    return !0;
                  }
                  y.offset && O(), (r = !0);
                })()) ||
              (D > 1.05 && "touchstart" !== t.type) ||
              e.isGesturing ||
              (t.touches && t.touches.length > 1)
            );
          }),
          (t.onPress = function () {
            r = !1;
            var t = D;
            (D = Ot(((q.visualViewport && q.visualViewport.scale) || 1) / x)),
              o.pause(),
              t !== D && Ge(f, D > 1.01 || (!c && "x")),
              (s = _()),
              (a = y()),
              A(),
              (n = Te);
          }),
          (t.onRelease = t.onGestureStart =
            function (t, e) {
              if ((y.offset && O(), e)) {
                w.cache++;
                var n,
                  r,
                  s = C();
                c &&
                  ((r = (n = _()) + (0.05 * s * -t.velocityX) / 0.227),
                    (s *= Ve(_, n, r, Nt(f, F))),
                    (o.vars.scrollX = T(r))),
                  (r = (n = y()) + (0.05 * s * -t.velocityY) / 0.227),
                  (s *= Ve(y, n, r, Nt(f, k))),
                  (o.vars.scrollY = P(r)),
                  o.invalidate().duration(s).play(0.01),
                  ((dt && o.vars.scrollY >= i) || n >= i - 1) &&
                  N.to({}, { onUpdate: I, duration: s });
              } else l.restart(!0);
              p && p(t);
            }),
          (t.onWheel = function () {
            o._ts && o.pause(), Et() - b > 1e3 && ((n = 0), (b = Et()));
          }),
          (t.onChange = function (t, e, i, r, o) {
            if (
              (Te !== n && A(),
                e &&
                c &&
                _(T(r[2] === e ? s + (t.startX - t.x) : _() + e - r[1])),
                i)
            ) {
              y.offset && O();
              var l = o[2] === i,
                u = l ? a + t.startY - t.y : y() + i - o[1],
                h = P(u);
              l && u !== h && (a += h - u), y(h);
            }
            (i || e) && Le();
          }),
          (t.onEnable = function () {
            Ge(f, !c && "x"),
              We.addEventListener("refresh", I),
              re(q, "resize", I),
              y.smooth &&
              ((y.target.style.scrollBehavior = "auto"),
                (y.smooth = _.smooth = !1)),
              E.enable();
          }),
          (t.onDisable = function () {
            Ge(f, !0),
              oe(q, "resize", I),
              We.removeEventListener("refresh", I),
              E.kill();
          }),
          (t.lockAxis = !1 !== t.lockAxis),
          ((e = new R(t)).iOS = dt),
          dt && !y() && y(1),
          dt && N.ticker.add(Lt),
          (l = e._dc),
          (o = N.to(e, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Qe(y, y(), function () {
                return o.pause();
              }),
            },
            onUpdate: Le,
            onComplete: l.vars.onComplete,
          })),
          e
        );
      };
    (We.sort = function (t) {
      return pe.sort(
        t ||
        function (t, e) {
          return (
            -1e6 * (t.vars.refreshPriority || 0) +
            t.start -
            (e.start + -1e6 * (e.vars.refreshPriority || 0))
          );
        }
      );
    }),
      (We.observe = function (t) {
        return new R(t);
      }),
      (We.normalizeScroll = function (t) {
        if (void 0 === t) return lt;
        if (!0 === t && lt) return lt.enable();
        if (!1 === t) return lt && lt.kill(), void (lt = t);
        var e = t instanceof R ? t : ii(t);
        return (
          lt && lt.target === e.target && lt.kill(), zt(e.target) && (lt = e), e
        );
      }),
      (We.core = {
        _getVelocityProp: O,
        _inputObserver: Je,
        _scrollers: w,
        _proxies: D,
        bridge: {
          ss: function () {
            Tt || xe("scrollStart"), (Tt = Et());
          },
          ref: function () {
            return $;
          },
        },
      }),
      jt() && N.registerPlugin(We);
  },
  function (t, e, i) {
    "use strict";
    i.d(e, "b", function () {
      return T;
    }),
      i.d(e, "a", function () {
        return P;
      }),
      i.d(e, "c", function () {
        return A;
      });
    var n = i(0),
      r = i(1);
    function o(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    /*!
     * ScrollSmoother 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var s,
      a,
      l,
      u,
      c,
      h,
      d,
      p,
      f,
      m,
      g,
      v,
      y,
      _,
      w,
      D = function () {
        return "undefined" != typeof window;
      },
      x = function () {
        return s || (D() && (s = window.gsap) && s.registerPlugin && s);
      },
      b = function (t) {
        return f.maxScroll(t || l);
      },
      C = function (t) {
        var e = u.querySelector(".ScrollSmoother-wrapper");
        return (
          e ||
          ((e = u.createElement("div")).classList.add(
            "ScrollSmoother-wrapper"
          ),
            t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
          e
        );
      },
      E = (function () {
        function t(e) {
          var i = this;
          a ||
            t.register(s) ||
            console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
            (e = this.vars = e || {}),
            m && m.kill(),
            (m = this),
            _(this);
          var n,
            r,
            o,
            D,
            x,
            E,
            S,
            T,
            P,
            A,
            F,
            k,
            M,
            L,
            O,
            I,
            j = e,
            z = j.smoothTouch,
            B = j.onUpdate,
            R = j.onStop,
            N = j.smooth,
            H = j.onFocusIn,
            q = j.normalizeScroll,
            Z = j.wholePixels,
            Q = this,
            X = e.effectsPrefix || "",
            Y = f.getScrollFunc(l),
            W =
              1 === f.isTouch
                ? !0 === z
                  ? 0.8
                  : parseFloat(z) || 0
                : 0 === N || !1 === N
                  ? 0
                  : parseFloat(N) || 0.8,
            U = (W && +e.speed) || 1,
            V = 0,
            G = 0,
            K = 1,
            $ = v(0),
            J = function () {
              return $.update(-V);
            },
            tt = { y: 0 },
            et = function () {
              return (n.style.overflow = "visible");
            },
            it = function (t) {
              t.update();
              var e = t.getTween();
              e && (e.pause(), (e._time = e._dur), (e._tTime = e._tDur)),
                (O = !1),
                t.animation.progress(t.progress, !0);
            },
            nt = function (e, i) {
              ((e !== V && !A) || i) &&
                (Z && (e = Math.round(e)),
                  W &&
                  ((n.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    e +
                    ", 0, 1)"),
                    (n._gsap.y = e + "px")),
                  (G = e - V),
                  (V = e),
                  f.isUpdating || t.isRefreshing || f.update());
            },
            rt = function (t) {
              return arguments.length
                ? (t < 0 && (t = 0),
                  (tt.y = -t),
                  (O = !0),
                  A ? (V = -t) : nt(-t),
                  f.isRefreshing ? D.update() : Y(t / U),
                  this)
                : -V;
            },
            ot =
              "undefined" != typeof ResizeObserver &&
              !1 !== e.autoResize &&
              new ResizeObserver(function () {
                if (!f.isRefreshing) {
                  var t = b(r) * U;
                  t < -V && rt(t), w.restart(!0);
                }
              }),
            st = function (t) {
              (r.scrollTop = 0),
                (t.target.contains && t.target.contains(r)) ||
                (H && !1 === H(i, t)) ||
                (f.isInViewport(t.target) ||
                  t.target === I ||
                  i.scrollTo(t.target, !1, "center center"),
                  (I = t.target));
            },
            at = function (t, e) {
              if (t < e.start) return t;
              var i = isNaN(e.ratio) ? 1 : e.ratio,
                n = e.end - e.start,
                r = t - e.start,
                o = e.offset || 0,
                s = e.pins || [],
                a = s.offset || 0,
                l =
                  (e._startClamp && e.start <= 0) || (e.pins && e.pins.offset)
                    ? 0
                    : e._endClamp && e.end === b()
                      ? 1
                      : 0.5;
              return (
                s.forEach(function (e) {
                  (n -= e.distance), e.nativeStart <= t && (r -= e.distance);
                }),
                a && (r *= (n - a / i) / n),
                t + (r - o * l) / i - r
              );
            },
            lt = function (t, e) {
              x.forEach(function (i) {
                return (function t(e, i, n) {
                  n || (e.pins.length = e.pins.offset = 0);
                  var r,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    d,
                    p = e.pins,
                    f = e.markers;
                  for (h = 0; h < i.length; h++)
                    if (
                      ((d = i[h]),
                        e.trigger &&
                        d.trigger &&
                        e !== d &&
                        (d.trigger === e.trigger ||
                          d.pinnedContainer === e.trigger ||
                          e.trigger.contains(d.trigger)) &&
                        ((u = d._startNative || d._startClamp || d.start),
                          (c = d._endNative || d._endClamp || d.end),
                          (a = at(u, e)),
                          (l = d.pin && c > 0 ? a + (c - u) : at(c, e)),
                          d.setPositions(
                            a,
                            l,
                            !0,
                            (d._startClamp ? Math.max(0, a) : a) - u
                          ),
                          d.markerStart &&
                          f.push(
                            s.quickSetter(
                              [d.markerStart, d.markerEnd],
                              "y",
                              "px"
                            )
                          ),
                          d.pin && d.end > 0 && !n))
                    ) {
                      if (
                        ((r = d.end - d.start),
                          (o = e._startClamp && d.start < 0))
                      ) {
                        if (e.start > 0)
                          return (
                            e.setPositions(
                              0,
                              e.end + (e._startNative - e.start),
                              !0
                            ),
                            void t(e, i)
                          );
                        (r += d.start), (p.offset = -d.start);
                      }
                      p.push({
                        start: d.start,
                        nativeStart: u,
                        end: d.end,
                        distance: r,
                        trig: d,
                      }),
                        e.setPositions(e.start, e.end + (o ? -d.start : r), !0);
                    }
                })(i, t, e);
              });
            },
            ut = function () {
              et(),
                requestAnimationFrame(et),
                x &&
                (f.getAll().forEach(function (t) {
                  (t._startNative = t.start), (t._endNative = t.end);
                }),
                  x.forEach(function (t) {
                    var e = t._startClamp || t.start,
                      i = t.autoSpeed
                        ? Math.min(b(), t.end)
                        : e + Math.abs((t.end - e) / t.ratio),
                      n = i - t.end;
                    if ((e -= n / 2) > (i -= n / 2)) {
                      var r = e;
                      (e = i), (i = r);
                    }
                    t._startClamp && e < 0
                      ? ((n =
                        (i = t.ratio < 0 ? b() : t.end / t.ratio) - t.end),
                        (e = 0))
                      : (t.ratio < 0 || (t._endClamp && i >= b())) &&
                      (n =
                        ((i = b()) -
                          (e =
                            t.ratio < 0 || t.ratio > 1
                              ? 0
                              : i - (i - t.start) / t.ratio)) *
                        t.ratio -
                        (t.end - t.start)),
                      (t.offset = n || 1e-4),
                      (t.pins.length = t.pins.offset = 0),
                      t.setPositions(e, i, !0);
                  }),
                  lt(f.sort())),
                $.reset();
            },
            ct = function () {
              return f.addEventListener("refresh", ut);
            },
            ht = function () {
              return (
                x &&
                x.forEach(function (t) {
                  return t.vars.onRefresh(t);
                })
              );
            },
            dt = function () {
              return (
                x &&
                x.forEach(function (t) {
                  return t.vars.onRefreshInit(t);
                }),
                ht
              );
            },
            pt = function (t, e, i, n) {
              return function () {
                var r = "function" == typeof e ? e(i, n) : e;
                r ||
                  0 === r ||
                  (r =
                    n.getAttribute("data-" + X + t) || ("speed" === t ? 1 : 0)),
                  n.setAttribute("data-" + X + t, r);
                var o = "clamp(" === (r + "").substr(0, 6);
                return { clamp: o, value: o ? r.substr(6, r.length - 7) : r };
              };
            },
            ft = function (t, e, i, n, o) {
              o = ("function" == typeof o ? o(n, t) : o) || 0;
              var a,
                u,
                h,
                d,
                m,
                v,
                y = pt("speed", e, n, t),
                _ = pt("lag", i, n, t),
                w = s.getProperty(t, "y"),
                D = t._gsap,
                C = [],
                E = function () {
                  (e = y()),
                    (i = parseFloat(_().value)),
                    (a = parseFloat(e.value) || 1),
                    (h = "auto" === e.value),
                    (m =
                      h || (u && u._startClamp && u.start <= 0) || C.offset
                        ? 0
                        : u && u._endClamp && u.end === b()
                          ? 1
                          : 0.5),
                    d && d.kill(),
                    (d =
                      i &&
                      s.to(t, {
                        ease: g,
                        overwrite: !1,
                        y: "+=0",
                        duration: i,
                      })),
                    u && ((u.ratio = a), (u.autoSpeed = h));
                },
                S = function () {
                  (D.y = w + "px"), D.renderTransform(1), E();
                },
                T = [],
                P = 0,
                A = function (e) {
                  if (h) {
                    S();
                    var i = (function (t, e) {
                      var i,
                        n,
                        r = t.parentNode || c,
                        o = t.getBoundingClientRect(),
                        s = r.getBoundingClientRect(),
                        a = s.top - o.top,
                        u = s.bottom - o.bottom,
                        h = (Math.abs(a) > Math.abs(u) ? a : u) / (1 - e),
                        d = -h * e;
                      return (
                        h > 0 &&
                        ((n =
                          0.5 === (i = s.height / (l.innerHeight + s.height))
                            ? 2 * s.height
                            : 2 *
                            Math.min(
                              s.height,
                              Math.abs((-h * i) / (2 * i - 1))
                            ) *
                            (e || 1)),
                          (d += e ? -n * e : -n / 2),
                          (h += n)),
                        { change: h, offset: d }
                      );
                    })(t, p(0, 1, -e.start / (e.end - e.start)));
                    (P = i.change), (v = i.offset);
                  } else
                    (v = C.offset || 0), (P = (e.end - e.start - v) * (1 - a));
                  C.forEach(function (t) {
                    return (P -= t.distance * (1 - a));
                  }),
                    (e.offset = P || 0.001),
                    e.vars.onUpdate(e),
                    d && d.progress(1);
                };
              return (
                E(),
                (1 !== a || h || d) &&
                (A(
                  (u = f.create({
                    trigger: h ? t.parentNode : t,
                    start: function () {
                      return e.clamp
                        ? "clamp(top bottom+=" + o + ")"
                        : "top bottom+=" + o;
                    },
                    end: function () {
                      return e.value < 0
                        ? "max"
                        : e.clamp
                          ? "clamp(bottom top-=" + o + ")"
                          : "bottom top-=" + o;
                    },
                    scroller: r,
                    scrub: !0,
                    refreshPriority: -999,
                    onRefreshInit: S,
                    onRefresh: A,
                    onKill: function (t) {
                      var e = x.indexOf(t);
                      e >= 0 && x.splice(e, 1), S();
                    },
                    onUpdate: function (t) {
                      var e,
                        i,
                        n,
                        r,
                        o = w + P * (t.progress - m),
                        a = C.length,
                        l = 0;
                      if (t.offset) {
                        if (a) {
                          for (i = -V, n = t.end; a--;) {
                            if (
                              (e = C[a]).trig.isActive ||
                              (i >= e.start && i <= e.end)
                            )
                              return void (
                                d &&
                                ((e.trig.progress +=
                                  e.trig.direction < 0 ? 0.001 : -0.001),
                                  e.trig.update(0, 0, 1),
                                  d.resetTo("y", parseFloat(D.y), -G, !0),
                                  K && d.progress(1))
                              );
                            i > e.end && (l += e.distance), (n -= e.distance);
                          }
                          o =
                            w +
                            l +
                            P *
                            ((s.utils.clamp(t.start, t.end, i) -
                              t.start -
                              l) /
                              (n - t.start) -
                              m);
                        }
                        T.length &&
                          !h &&
                          T.forEach(function (t) {
                            return t(o - l);
                          }),
                          (r = o + v),
                          (o = Math.round(1e5 * r) / 1e5 || 0),
                          d
                            ? (d.resetTo("y", o, -G, !0), K && d.progress(1))
                            : ((D.y = o + "px"), D.renderTransform(1));
                      }
                    },
                  }))
                ),
                  (s.core.getCache(u.trigger).stRevert = dt),
                  (u.startY = w),
                  (u.pins = C),
                  (u.markers = T),
                  (u.ratio = a),
                  (u.autoSpeed = h),
                  (t.style.willChange = "transform")),
                u
              );
            };
          function mt() {
            return (
              (o = n.clientHeight),
              (n.style.overflow = "visible"),
              (h.style.height = l.innerHeight + (o - l.innerHeight) / U + "px"),
              o - l.innerHeight
            );
          }
          ct(),
            f.addEventListener("killAll", ct),
            s.delayedCall(0.5, function () {
              return (K = 0);
            }),
            (this.scrollTop = rt),
            (this.scrollTo = function (t, e, n) {
              var r = s.utils.clamp(
                0,
                b(),
                isNaN(t) ? i.offset(t, n, !!e && !A) : +t
              );
              e
                ? A
                  ? s.to(i, {
                    duration: W,
                    scrollTop: r,
                    overwrite: "auto",
                    ease: g,
                  })
                  : Y(r)
                : rt(r);
            }),
            (this.offset = function (t, e, i) {
              var n,
                r = (t = d(t)[0]).style.cssText,
                o = f.create({ trigger: t, start: e || "top top" });
              return (
                x && (K ? f.refresh() : lt([o], !0)),
                (n = o.start / (i ? U : 1)),
                o.kill(!1),
                (t.style.cssText = r),
                (s.core.getCache(t).uncache = 1),
                n
              );
            }),
            (this.content = function (t) {
              if (arguments.length) {
                var e =
                  d(t || "#smooth-content")[0] ||
                  console.warn(
                    "ScrollSmoother needs a valid content element."
                  ) ||
                  h.children[0];
                return (
                  e !== n &&
                  ((P = (n = e).getAttribute("style") || ""),
                    ot && ot.observe(n),
                    s.set(n, {
                      overflow: "visible",
                      width: "100%",
                      boxSizing: "border-box",
                      y: "+=0",
                    }),
                    W || s.set(n, { clearProps: "transform" })),
                  this
                );
              }
              return n;
            }),
            (this.wrapper = function (t) {
              return arguments.length
                ? ((r = d(t || "#smooth-wrapper")[0] || C(n)),
                  (T = r.getAttribute("style") || ""),
                  mt(),
                  s.set(
                    r,
                    W
                      ? {
                        overflow: "hidden",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }
                      : {
                        overflow: "visible",
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto",
                      }
                  ),
                  this)
                : r;
            }),
            (this.effects = function (t, e) {
              var i;
              if ((x || (x = []), !t)) return x.slice(0);
              (t = d(t)).forEach(function (t) {
                for (var e = x.length; e--;) x[e].trigger === t && x[e].kill();
              });
              var n,
                r,
                o = (e = e || {}),
                s = o.speed,
                a = o.lag,
                l = o.effectsPadding,
                u = [];
              for (n = 0; n < t.length; n++)
                (r = ft(t[n], s, a, n, l)) && u.push(r);
              return (
                (i = x).push.apply(i, u), !1 !== e.refresh && f.refresh(), u
              );
            }),
            (this.sections = function (t, e) {
              var i;
              if ((E || (E = []), !t)) return E.slice(0);
              var n = d(t).map(function (t) {
                return f.create({
                  trigger: t,
                  start: "top 120%",
                  end: "bottom -20%",
                  onToggle: function (e) {
                    (t.style.opacity = e.isActive ? "1" : "0"),
                      (t.style.pointerEvents = e.isActive ? "all" : "none");
                  },
                });
              });
              return (
                e && e.add ? (i = E).push.apply(i, n) : (E = n.slice(0)), n
              );
            }),
            this.content(e.content),
            this.wrapper(e.wrapper),
            (this.render = function (t) {
              return nt(t || 0 === t ? t : V);
            }),
            (this.getVelocity = function () {
              return $.getVelocity(-V);
            }),
            f.scrollerProxy(r, {
              scrollTop: rt,
              scrollHeight: function () {
                return mt() && h.scrollHeight;
              },
              fixedMarkers: !1 !== e.fixedMarkers && !!W,
              content: n,
              getBoundingClientRect: function () {
                return {
                  top: 0,
                  left: 0,
                  width: l.innerWidth,
                  height: l.innerHeight,
                };
              },
            }),
            f.defaults({ scroller: r });
          var gt = f.getAll().filter(function (t) {
            return t.scroller === l || t.scroller === r;
          });
          gt.forEach(function (t) {
            return t.revert(!0, !0);
          }),
            (D = f.create({
              animation: s.fromTo(
                tt,
                {
                  y: function () {
                    return (L = 0), 0;
                  },
                },
                {
                  y: function () {
                    return (L = 1), -mt();
                  },
                  immediateRender: !1,
                  ease: "none",
                  data: "ScrollSmoother",
                  duration: 100,
                  onUpdate: function () {
                    if (L) {
                      var t = O;
                      t && (it(D), (tt.y = V)),
                        nt(tt.y, t),
                        J(),
                        B && !A && B(Q);
                    }
                  },
                }
              ),
              onRefreshInit: function (e) {
                if (!t.isRefreshing) {
                  if (((t.isRefreshing = !0), x)) {
                    var i = f.getAll().filter(function (t) {
                      return !!t.pin;
                    });
                    x.forEach(function (t) {
                      t.vars.pinnedContainer ||
                        i.forEach(function (e) {
                          if (e.pin.contains(t.trigger)) {
                            var i = t.vars;
                            (i.pinnedContainer = e.pin),
                              (t.vars = null),
                              t.init(i, t.animation);
                          }
                        });
                    });
                  }
                  var n = e.getTween();
                  (M = n && n._end > n._dp._time),
                    (k = V),
                    (tt.y = 0),
                    W &&
                    (1 === f.isTouch && (r.style.position = "absolute"),
                      (r.scrollTop = 0),
                      1 === f.isTouch && (r.style.position = "fixed"));
                }
              },
              onRefresh: function (e) {
                e.animation.invalidate(),
                  e.setPositions(e.start, mt() / U),
                  M || it(e),
                  (tt.y = -Y() * U),
                  nt(tt.y),
                  K ||
                  (M && (O = !1),
                    e.animation.progress(s.utils.clamp(0, 1, k / U / -e.end))),
                  M && ((e.progress -= 0.001), e.update()),
                  (t.isRefreshing = !1);
              },
              id: "ScrollSmoother",
              scroller: l,
              invalidateOnRefresh: !0,
              start: 0,
              refreshPriority: -9999,
              end: function () {
                return mt() / U;
              },
              onScrubComplete: function () {
                $.reset(), R && R(i);
              },
              scrub: W || !0,
            })),
            (this.smooth = function (t) {
              return (
                arguments.length &&
                ((U = ((W = t || 0) && +e.speed) || 1), D.scrubDuration(t)),
                D.getTween() ? D.getTween().duration() : 0
              );
            }),
            D.getTween() && (D.getTween().vars.ease = e.ease || g),
            (this.scrollTrigger = D),
            e.effects &&
            this.effects(
              !0 === e.effects
                ? "[data-" + X + "speed], [data-" + X + "lag]"
                : e.effects,
              { effectsPadding: e.effectsPadding, refresh: !1 }
            ),
            e.sections &&
            this.sections(!0 === e.sections ? "[data-section]" : e.sections),
            gt.forEach(function (t) {
              (t.vars.scroller = r),
                t.revert(!1, !0),
                t.init(t.vars, t.animation);
            }),
            (this.paused = function (t, e) {
              return arguments.length
                ? (!!A !== t &&
                  (t
                    ? (D.getTween() && D.getTween().pause(),
                      Y(-V / U),
                      $.reset(),
                      (F = f.normalizeScroll()) && F.disable(),
                      ((A = f.observe({
                        preventDefault: !0,
                        type: "wheel,touch,scroll",
                        debounce: !1,
                        allowClicks: !0,
                        onChangeY: function () {
                          return rt(-V);
                        },
                      })).nested = y(c, "wheel,touch,scroll", !0, !1 !== e)))
                    : (A.nested.kill(),
                      A.kill(),
                      (A = 0),
                      F && F.enable(),
                      (D.progress = (-V / U - D.start) / (D.end - D.start)),
                      it(D))),
                  this)
                : !!A;
            }),
            (this.kill = this.revert =
              function () {
                i.paused(!1), it(D), D.kill();
                for (var t = (x || []).concat(E || []), e = t.length; e--;)
                  t[e].kill();
                f.scrollerProxy(r),
                  f.removeEventListener("killAll", ct),
                  f.removeEventListener("refresh", ut),
                  (r.style.cssText = T),
                  (n.style.cssText = P);
                var o = f.defaults({});
                o && o.scroller === r && f.defaults({ scroller: l }),
                  i.normalizer && f.normalizeScroll(!1),
                  clearInterval(S),
                  (m = null),
                  ot && ot.disconnect(),
                  h.style.removeProperty("height"),
                  l.removeEventListener("focusin", st);
              }),
            (this.refresh = function (t, e) {
              return D.refresh(t, e);
            }),
            q &&
            (this.normalizer = f.normalizeScroll(
              !0 === q ? { debounce: !0, content: !W && n } : q
            )),
            f.config(e),
            "overscrollBehavior" in l.getComputedStyle(h) &&
            s.set([h, c], { overscrollBehavior: "none" }),
            "scrollBehavior" in l.getComputedStyle(h) &&
            s.set([h, c], { scrollBehavior: "auto" }),
            l.addEventListener("focusin", st),
            (S = setInterval(J, 250)),
            "loading" === u.readyState ||
            requestAnimationFrame(function () {
              return f.refresh();
            });
        }
        var e, i, n;
        return (
          (t.register = function (e) {
            return (
              a ||
              ((s = e || x()),
                D() &&
                window.document &&
                ((l = window),
                  (u = document),
                  (c = u.documentElement),
                  (h = u.body)),
                s &&
                ((d = s.utils.toArray),
                  (p = s.utils.clamp),
                  (g = s.parseEase("expo")),
                  (_ = s.core.context || function () { }),
                  (f = s.core.globals().ScrollTrigger),
                  s.core.globals("ScrollSmoother", t),
                  h &&
                  f &&
                  ((w = s
                    .delayedCall(0.2, function () {
                      return f.isRefreshing || (m && m.refresh());
                    })
                    .pause()),
                    [l, u, c, h],
                    (v = f.core._getVelocityProp),
                    (y = f.core._inputObserver),
                    (t.refresh = f.refresh),
                    (a = 1)))),
              a
            );
          }),
          (e = t),
          (i = [
            {
              key: "progress",
              get: function () {
                return this.scrollTrigger
                  ? this.scrollTrigger.animation._time / 100
                  : 0;
              },
            },
          ]) && o(e.prototype, i),
          n && o(e, n),
          t
        );
      })();
    let S;
    function T() {
      return (
        (S =
          1 !== r.a.isTouch &&
          E.create({
            smooth: 1,
            effects: !1,
            ignoreMobileResize: !0,
            smoothTouch: !1,
          })),
        S
      );
    }
    function P() {
      S && S.paused(!S.paused());
    }
    function A() {
      S && S.paused(!1);
    }
    (E.version = "3.12.5"),
      (E.create = function (t) {
        return m && t && m.content() === d(t.content)[0] ? m : new E(t);
      }),
      (E.get = function () {
        return m;
      }),
      x() && s.registerPlugin(E),
      n.a.registerPlugin(r.a, E);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
        return t;
      },
      r = function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t))
          return (function (t, e) {
            var i = [],
              n = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(n = (s = a.next()).done) &&
                (i.push(s.value), !e || i.length !== e);
                n = !0
              );
            } catch (t) {
              (r = !0), (o = t);
            } finally {
              try {
                !n && a.return && a.return();
              } finally {
                if (r) throw o;
              }
            }
            return i;
          })(t, e);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    (e.default = function (t, e) {
      var i = [],
        r = [];
      return (function () {
        if (
          t &&
          t instanceof HTMLElement &&
          "SELECT" === t.tagName.toUpperCase()
        )
          i.push(t);
        else if (t && "string" == typeof t)
          for (
            var a = document.querySelectorAll(t), l = 0, u = a.length;
            l < u;
            ++l
          )
            a[l] instanceof HTMLElement &&
              "SELECT" === a[l].tagName.toUpperCase() &&
              i.push(a[l]);
        else if (t && t.length)
          for (var c = 0, h = t.length; c < h; ++c)
            t[c] instanceof HTMLElement &&
              "SELECT" === t[c].tagName.toUpperCase() &&
              i.push(t[c]);
        for (var d = 0, p = i.length; d < p; ++d) r.push(s(i[d], n({}, o, e)));
        return r;
      })();
    }),
      i(7);
    var o = {
      containerClass: "custom-select-container",
      openerClass: "custom-select-opener",
      panelClass: "custom-select-panel",
      optionClass: "custom-select-option",
      optgroupClass: "custom-select-optgroup",
      isSelectedClass: "is-selected",
      hasFocusClass: "has-focus",
      isDisabledClass: "is-disabled",
      isOpenClass: "is-open",
    };
    function s(t, e) {
      var i = !1,
        n = "",
        o = t,
        s = void 0,
        a = void 0,
        l = void 0,
        u = void 0,
        c = void 0,
        h = void 0,
        d = void 0,
        p = "";
      function f(t) {
        l && l.classList.remove(e.hasFocusClass),
          void 0 !== t
            ? ((l = t).classList.add(e.hasFocusClass),
              i &&
              (t.offsetTop < t.offsetParent.scrollTop ||
                t.offsetTop >
                t.offsetParent.scrollTop +
                t.offsetParent.clientHeight -
                t.clientHeight) &&
              t.dispatchEvent(
                new CustomEvent("custom-select:focus-outside-panel", {
                  bubbles: !0,
                })
              ))
            : (l = void 0);
      }
      function m(t) {
        u &&
          (u.classList.remove(e.isSelectedClass),
            u.removeAttribute("id"),
            a.removeAttribute("aria-activedescendant")),
          void 0 !== t
            ? (t.classList.add(e.isSelectedClass),
              t.setAttribute("id", "customSelect-" + n + "-selectedOption"),
              a.setAttribute(
                "aria-activedescendant",
                "customSelect-" + n + "-selectedOption"
              ),
              (u = t),
              (a.children[0].textContent = u.customSelectOriginalOption.text))
            : ((u = void 0), (a.children[0].textContent = "")),
          f(t);
      }
      function g(t) {
        var e = [].indexOf.call(o.options, l.customSelectOriginalOption);
        o.options[e + t] && f(o.options[e + t].customSelectCstOption);
      }
      function v(t) {
        if (t || void 0 === t) {
          var n = document.querySelector(".customSelect." + e.isOpenClass);
          n && (n.customSelect.open = !1),
            s.classList.add(e.isOpenClass),
            s.classList.add(e.isOpenClass),
            a.setAttribute("aria-expanded", "true"),
            u && (c.scrollTop = u.offsetTop),
            s.dispatchEvent(new CustomEvent("custom-select:open")),
            (i = !0);
        } else
          s.classList.remove(e.isOpenClass),
            a.setAttribute("aria-expanded", "false"),
            (i = !1),
            f(u),
            s.dispatchEvent(new CustomEvent("custom-select:close"));
        return i;
      }
      function y(t) {
        t.target === a || a.contains(t.target)
          ? i
            ? v(!1)
            : v()
          : t.target.classList &&
            t.target.classList.contains(e.optionClass) &&
            c.contains(t.target)
            ? (m(t.target),
              (u.customSelectOriginalOption.selected = !0),
              v(!1),
              o.dispatchEvent(new CustomEvent("change")))
            : t.target === o
              ? a !== document.activeElement &&
              o !== document.activeElement &&
              a.focus()
              : i && !s.contains(t.target) && v(!1);
      }
      function _(t) {
        t.target.classList &&
          t.target.classList.contains(e.optionClass) &&
          f(t.target);
      }
      function w(t) {
        if (i)
          switch (t.keyCode) {
            case 13:
            case 32:
              m(l),
                (u.customSelectOriginalOption.selected = !0),
                o.dispatchEvent(new CustomEvent("change")),
                v(!1);
              break;
            case 27:
              v(!1);
              break;
            case 38:
              g(-1);
              break;
            case 40:
              g(1);
              break;
            default:
              if (t.keyCode >= 48 && t.keyCode <= 90) {
                d && clearTimeout(d),
                  (d = setTimeout(function () {
                    p = "";
                  }, 1500)),
                  (p += String.fromCharCode(t.keyCode));
                for (var e = 0, n = o.options.length; e < n; e++)
                  if (
                    o.options[e].text.toUpperCase().substr(0, p.length) === p
                  ) {
                    f(o.options[e].customSelectCstOption);
                    break;
                  }
              }
          }
        else (40 !== t.keyCode && 38 !== t.keyCode && 32 !== t.keyCode) || v();
      }
      function D() {
        var t = o.selectedIndex;
        m(-1 === t ? void 0 : o.options[t].customSelectCstOption);
      }
      function x(t) {
        var e = t.currentTarget,
          i = t.target;
        i.offsetTop < e.scrollTop
          ? (e.scrollTop = i.offsetTop)
          : (e.scrollTop = i.offsetTop + i.clientHeight - e.clientHeight);
      }
      function b() {
        document.addEventListener("click", y),
          c.addEventListener("mouseover", _),
          c.addEventListener("custom-select:focus-outside-panel", x),
          o.addEventListener("change", D),
          s.addEventListener("keydown", w);
      }
      function C() {
        document.removeEventListener("click", y),
          c.removeEventListener("mouseover", _),
          c.removeEventListener("custom-select:focus-outside-panel", x),
          o.removeEventListener("change", D),
          s.removeEventListener("keydown", w);
      }
      function E(t) {
        var i = t,
          n = [];
        if (void 0 === i.length) throw new TypeError("Invalid Argument");
        for (var r = 0, o = i.length; r < o; r++)
          if (
            i[r] instanceof HTMLElement &&
            "OPTGROUP" === i[r].tagName.toUpperCase()
          ) {
            var s = document.createElement("div");
            s.classList.add(e.optgroupClass),
              s.setAttribute("data-label", i[r].label),
              (s.customSelectOriginalOptgroup = i[r]),
              (i[r].customSelectCstOptgroup = s);
            for (var a = E(i[r].children), l = 0, u = a.length; l < u; l++)
              s.appendChild(a[l]);
            n.push(s);
          } else {
            if (
              !(
                i[r] instanceof HTMLElement &&
                "OPTION" === i[r].tagName.toUpperCase()
              )
            )
              throw new TypeError("Invalid Argument");
            var c = document.createElement("div");
            c.classList.add(e.optionClass),
              (c.textContent = i[r].text),
              c.setAttribute("data-value", i[r].value),
              c.setAttribute("role", "option"),
              (c.customSelectOriginalOption = i[r]),
              (i[r].customSelectCstOption = c),
              i[r].selected && m(c),
              n.push(c);
          }
        return n;
      }
      function S(t, e, i) {
        var n = void 0;
        if (void 0 === i || i === o) n = c;
        else {
          if (
            !(
              i instanceof HTMLElement &&
              "OPTGROUP" === i.tagName.toUpperCase() &&
              o.contains(i)
            )
          )
            throw new TypeError("Invalid Argument");
          n = i.customSelectCstOptgroup;
        }
        var r = t instanceof HTMLElement ? [t] : t;
        if (e)
          for (var s = 0, a = r.length; s < a; s++)
            n === c
              ? o.appendChild(r[s])
              : n.customSelectOriginalOptgroup.appendChild(r[s]);
        for (var l = E(r), u = 0, h = l.length; u < h; u++) n.appendChild(l[u]);
        return r;
      }
      (s = document.createElement("div")).classList.add(
        e.containerClass,
        "customSelect"
      ),
        ((a = document.createElement("span")).className = e.openerClass),
        a.setAttribute("role", "combobox"),
        a.setAttribute("aria-autocomplete", "list"),
        a.setAttribute("aria-expanded", "false"),
        (a.innerHTML =
          "<span>\n   " +
          (-1 !== o.selectedIndex ? o.options[o.selectedIndex].text : "") +
          "\n   </span>"),
        (c = document.createElement("div"));
      for (
        var T =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        P = 0;
        P < 5;
        P++
      )
        n += T.charAt(Math.floor(Math.random() * T.length));
      return (
        (c.id = "customSelect-" + n + "-panel"),
        (c.className = e.panelClass),
        c.setAttribute("role", "listbox"),
        a.setAttribute("aria-owns", c.id),
        S(o.children, !1),
        s.appendChild(a),
        o.parentNode.replaceChild(s, o),
        s.appendChild(o),
        s.appendChild(c),
        document.querySelector('label[for="' + o.id + '"]')
          ? (h = document.querySelector('label[for="' + o.id + '"]'))
          : "LABEL" === s.parentNode.tagName.toUpperCase() &&
          (h = s.parentNode),
        void 0 !== h &&
        (h.setAttribute("id", "customSelect-" + n + "-label"),
          a.setAttribute("aria-labelledby", "customSelect-" + n + "-label")),
        o.disabled
          ? s.classList.add(e.isDisabledClass)
          : (a.setAttribute("tabindex", "0"),
            o.setAttribute("tabindex", "-1"),
            b()),
        (s.customSelect = {
          get pluginOptions() {
            return e;
          },
          get open() {
            return i;
          },
          set open(t) {
            v(t);
          },
          get disabled() {
            return o.disabled;
          },
          set disabled(t) {
            !(function (t) {
              t && !o.disabled
                ? (s.classList.add(e.isDisabledClass),
                  (o.disabled = !0),
                  a.removeAttribute("tabindex"),
                  s.dispatchEvent(new CustomEvent("custom-select:disabled")),
                  C())
                : !t &&
                o.disabled &&
                (s.classList.remove(e.isDisabledClass),
                  (o.disabled = !1),
                  a.setAttribute("tabindex", "0"),
                  s.dispatchEvent(new CustomEvent("custom-select:enabled")),
                  b());
            })(t);
          },
          get value() {
            return o.value;
          },
          set value(t) {
            var e, i;
            (e = t),
              (i = o.querySelector("option[value='" + e + "']")) ||
              (i = r(o.options, 1)[0]),
              (i.selected = !0),
              m(o.options[o.selectedIndex].customSelectCstOption);
          },
          append: function (t, e) {
            return S(t, !0, e);
          },
          insertBefore: function (t, e) {
            return (function (t, e) {
              var i = void 0;
              if (
                e instanceof HTMLElement &&
                "OPTION" === e.tagName.toUpperCase() &&
                o.contains(e)
              )
                i = e.customSelectCstOption;
              else {
                if (
                  !(
                    e instanceof HTMLElement &&
                    "OPTGROUP" === e.tagName.toUpperCase() &&
                    o.contains(e)
                  )
                )
                  throw new TypeError("Invalid Argument");
                i = e.customSelectCstOptgroup;
              }
              var n = E(t.length ? t : [t]);
              return (
                i.parentNode.insertBefore(n[0], i),
                e.parentNode.insertBefore(t.length ? t[0] : t, e)
              );
            })(t, e);
          },
          remove: function (t) {
            var e = void 0;
            if (
              t instanceof HTMLElement &&
              "OPTION" === t.tagName.toUpperCase() &&
              o.contains(t)
            )
              e = t.customSelectCstOption;
            else {
              if (
                !(
                  t instanceof HTMLElement &&
                  "OPTGROUP" === t.tagName.toUpperCase() &&
                  o.contains(t)
                )
              )
                throw new TypeError("Invalid Argument");
              e = t.customSelectCstOptgroup;
            }
            e.parentNode.removeChild(e);
            var i = t.parentNode.removeChild(t);
            return D(), i;
          },
          empty: function () {
            for (var t = []; o.children.length;)
              c.removeChild(c.children[0]),
                t.push(o.removeChild(o.children[0]));
            return m(), t;
          },
          destroy: function () {
            for (var t = 0, e = o.options.length; t < e; t++)
              delete o.options[t].customSelectCstOption;
            for (
              var i = o.getElementsByTagName("optgroup"), n = 0, r = i.length;
              n < r;
              n++
            )
              delete i.customSelectCstOptgroup;
            return C(), s.parentNode.replaceChild(o, s);
          },
          opener: a,
          select: o,
          panel: c,
          container: s,
        }),
        (o.customSelect = s.customSelect),
        s.customSelect
      );
    }
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      i.d(e, "closeNavigation", function () {
        return a;
      });
    var n = i(2),
      r = i(0);
    const o = document.querySelector(".js-menu"),
      s = document.querySelector(".js-toggleNavigation");
    function a() {
      const t = document.querySelector(".js-navigation");
      document.body.classList.remove("-menuOpen"),
        s.classList.remove("-active"),
        t.classList.remove("-open"),
        o.classList.remove("-menuOpen"),
        r.a.to("body", {
          background: "#454545",
          ease: "power4.inOut",
          duration: 0.2,
          overwrite: !0,
        });
    }
    s.addEventListener("click", (t) => {
      const e = document.querySelector(".js-navigation");
      Object(n.a)(),
        document.body.classList.contains("-menuOpen")
          ? r.a.to("body", {
            background: "#454545",
            ease: "power4.inOut",
            duration: 0.2,
            overwrite: !0,
          })
          : r.a.to("body", {
            background: "#000000",
            ease: "power4.inOut",
            duration: 0.2,
            overwrite: !0,
          }),
        document.body.classList.toggle("-menuOpen"),
        s.classList.toggle("-active"),
        e.classList.toggle("-open"),
        o.classList.toggle("-menuOpen");
    });
    let l = 0;
    r.a.timeline({ paused: !1 });
    window.addEventListener("scroll", function () {
      const t = window.scrollY;
      var e = window.pageYOffset || document.documentElement.scrollTop;
      if (document.body.classList.contains("-menuOpen"))
        r.a.set(o, { y: 0, overwrite: !0 });
      else if (t > 200)
        if (e > l)
          0 == o.classList.contains("-animatedOut") &&
            (r.a.to(o, {
              y: "-100%",
              duration: 0.3,
              ease: "linear",
              overwrite: !0,
            }),
              o.classList.add("-animatedOut"),
              o.classList.remove("-animatedIn"));
        else if (e < l) {
          o.offsetHeight;
          o.classList.add("-sticky"),
            0 == o.classList.contains("-animatedIn") &&
            (r.a.to(o, {
              y: 0,
              duration: 0.3,
              ease: "linear",
              overwrite: !0,
            }),
              o.classList.add("-animatedIn"),
              o.classList.remove("-animatedOut"));
        }
      t < 2 && o.classList.remove("-sticky"), (l = e <= 0 ? 0 : e);
    });
  },
  function (t, e, i) {
    t.exports = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function e(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
      }
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function n(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function r(t) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t, e, i) {
        return (s = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () { })
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (t, e, i) {
            var n = [null];
            n.push.apply(n, e);
            var r = new (Function.bind.apply(t, n))();
            return i && o(r, i.prototype), r;
          }).apply(null, arguments);
      }
      function a(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (a = function (t) {
          if (
            null === t ||
            -1 === Function.toString.call(t).indexOf("[native code]")
          )
            return t;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, i);
          }
          function i() {
            return s(t, arguments, r(this).constructor);
          }
          return (
            (i.prototype = Object.create(t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(i, t)
          );
        })(t);
      }
      function l(t, e) {
        try {
          var i = t();
        } catch (t) {
          return e(t);
        }
        return i && i.then ? i.then(void 0, e) : i;
      }
      var u;
      "undefined" != typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol &&
        (Symbol.asyncIterator ||
          (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
        (function (t) {
          (t[(t.off = 0)] = "off"),
            (t[(t.error = 1)] = "error"),
            (t[(t.warning = 2)] = "warning"),
            (t[(t.info = 3)] = "info"),
            (t[(t.debug = 4)] = "debug");
        })(u || (u = {}));
      var c = u.off,
        h = (function () {
          function t(t) {
            this.t = t;
          }
          (t.getLevel = function () {
            return c;
          }),
            (t.setLevel = function (t) {
              return (c = u[t]);
            });
          var e = t.prototype;
          return (
            (e.error = function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              this.i(console.error, u.error, e);
            }),
            (e.warn = function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              this.i(console.warn, u.warning, e);
            }),
            (e.info = function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              this.i(console.info, u.info, e);
            }),
            (e.debug = function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              this.i(console.log, u.debug, e);
            }),
            (e.i = function (e, i, n) {
              i <= t.getLevel() &&
                e.apply(console, ["[" + this.t + "] "].concat(n));
            }),
            t
          );
        })(),
        d = E,
        p = _,
        f = y,
        m = w,
        g = C,
        v = new RegExp(
          [
            "(\\\\.)",
            "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
          ].join("|"),
          "g"
        );
      function y(t, e) {
        for (
          var i,
          n = [],
          r = 0,
          o = 0,
          s = "",
          a = (e && e.delimiter) || "/",
          l = (e && e.whitelist) || void 0,
          u = !1;
          null !== (i = v.exec(t));

        ) {
          var c = i[0],
            h = i[1],
            d = i.index;
          if (((s += t.slice(o, d)), (o = d + c.length), h))
            (s += h[1]), (u = !0);
          else {
            var p = "",
              f = i[2],
              m = i[3],
              g = i[4],
              y = i[5];
            if (!u && s.length) {
              var _ = s.length - 1,
                w = s[_];
              (!l || l.indexOf(w) > -1) && ((p = w), (s = s.slice(0, _)));
            }
            s && (n.push(s), (s = ""), (u = !1));
            var b = m || g,
              C = p || a;
            n.push({
              name: f || r++,
              prefix: p,
              delimiter: C,
              optional: "?" === y || "*" === y,
              repeat: "+" === y || "*" === y,
              pattern: b ? x(b) : "[^" + D(C === a ? C : C + a) + "]+?",
            });
          }
        }
        return (s || o < t.length) && n.push(s + t.substr(o)), n;
      }
      function _(t, e) {
        return function (i, n) {
          var r = t.exec(i);
          if (!r) return !1;
          for (
            var o = r[0],
            s = r.index,
            a = {},
            l = (n && n.decode) || decodeURIComponent,
            u = 1;
            u < r.length;
            u++
          )
            if (void 0 !== r[u]) {
              var c = e[u - 1];
              a[c.name] = c.repeat
                ? r[u].split(c.delimiter).map(function (t) {
                  return l(t, c);
                })
                : l(r[u], c);
            }
          return { path: o, index: s, params: a };
        };
      }
      function w(t, e) {
        for (var i = new Array(t.length), n = 0; n < t.length; n++)
          "object" == typeof t[n] &&
            (i[n] = new RegExp("^(?:" + t[n].pattern + ")$", b(e)));
        return function (e, n) {
          for (
            var r = "",
            o = (n && n.encode) || encodeURIComponent,
            s = !n || !1 !== n.validate,
            a = 0;
            a < t.length;
            a++
          ) {
            var l = t[a];
            if ("string" != typeof l) {
              var u,
                c = e ? e[l.name] : void 0;
              if (Array.isArray(c)) {
                if (!l.repeat)
                  throw new TypeError(
                    'Expected "' + l.name + '" to not repeat, but got array'
                  );
                if (0 === c.length) {
                  if (l.optional) continue;
                  throw new TypeError(
                    'Expected "' + l.name + '" to not be empty'
                  );
                }
                for (var h = 0; h < c.length; h++) {
                  if (((u = o(c[h], l)), s && !i[a].test(u)))
                    throw new TypeError(
                      'Expected all "' +
                      l.name +
                      '" to match "' +
                      l.pattern +
                      '"'
                    );
                  r += (0 === h ? l.prefix : l.delimiter) + u;
                }
              } else if (
                "string" != typeof c &&
                "number" != typeof c &&
                "boolean" != typeof c
              ) {
                if (!l.optional)
                  throw new TypeError(
                    'Expected "' +
                    l.name +
                    '" to be ' +
                    (l.repeat ? "an array" : "a string")
                  );
              } else {
                if (((u = o(String(c), l)), s && !i[a].test(u)))
                  throw new TypeError(
                    'Expected "' +
                    l.name +
                    '" to match "' +
                    l.pattern +
                    '", but got "' +
                    u +
                    '"'
                  );
                r += l.prefix + u;
              }
            } else r += l;
          }
          return r;
        };
      }
      function D(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function x(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function b(t) {
        return t && t.sensitive ? "" : "i";
      }
      function C(t, e, i) {
        for (
          var n = (i = i || {}).strict,
          r = !1 !== i.start,
          o = !1 !== i.end,
          s = i.delimiter || "/",
          a = []
            .concat(i.endsWith || [])
            .map(D)
            .concat("$")
            .join("|"),
          l = r ? "^" : "",
          u = 0;
          u < t.length;
          u++
        ) {
          var c = t[u];
          if ("string" == typeof c) l += D(c);
          else {
            var h = c.repeat
              ? "(?:" +
              c.pattern +
              ")(?:" +
              D(c.delimiter) +
              "(?:" +
              c.pattern +
              "))*"
              : c.pattern;
            e && e.push(c),
              (l += c.optional
                ? c.prefix
                  ? "(?:" + D(c.prefix) + "(" + h + "))?"
                  : "(" + h + ")?"
                : D(c.prefix) + "(" + h + ")");
          }
        }
        if (o)
          n || (l += "(?:" + D(s) + ")?"),
            (l += "$" === a ? "$" : "(?=" + a + ")");
        else {
          var d = t[t.length - 1],
            p = "string" == typeof d ? d[d.length - 1] === s : void 0 === d;
          n || (l += "(?:" + D(s) + "(?=" + a + "))?"),
            p || (l += "(?=" + D(s) + "|" + a + ")");
        }
        return new RegExp(l, b(i));
      }
      function E(t, e, i) {
        return t instanceof RegExp
          ? (function (t, e) {
            if (!e) return t;
            var i = t.source.match(/\((?!\?)/g);
            if (i)
              for (var n = 0; n < i.length; n++)
                e.push({
                  name: n,
                  prefix: null,
                  delimiter: null,
                  optional: !1,
                  repeat: !1,
                  pattern: null,
                });
            return t;
          })(t, e)
          : Array.isArray(t)
            ? (function (t, e, i) {
              for (var n = [], r = 0; r < t.length; r++)
                n.push(E(t[r], e, i).source);
              return new RegExp("(?:" + n.join("|") + ")", b(i));
            })(t, e, i)
            : (function (t, e, i) {
              return C(y(t, i), e, i);
            })(t, e, i);
      }
      (d.match = function (t, e) {
        var i = [];
        return _(E(t, i, e), i);
      }),
        (d.regexpToFunction = p),
        (d.parse = f),
        (d.compile = function (t, e) {
          return w(y(t, e), e);
        }),
        (d.tokensToFunction = m),
        (d.tokensToRegExp = g);
      var S = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper",
      },
        T = new ((function () {
          function t() {
            (this.o = S), (this.u = new DOMParser());
          }
          var e = t.prototype;
          return (
            (e.toString = function (t) {
              return t.outerHTML;
            }),
            (e.toDocument = function (t) {
              return this.u.parseFromString(t, "text/html");
            }),
            (e.toElement = function (t) {
              var e = document.createElement("div");
              return (e.innerHTML = t), e;
            }),
            (e.getHtml = function (t) {
              return (
                void 0 === t && (t = document), this.toString(t.documentElement)
              );
            }),
            (e.getWrapper = function (t) {
              return (
                void 0 === t && (t = document),
                t.querySelector(
                  "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                )
              );
            }),
            (e.getContainer = function (t) {
              return (
                void 0 === t && (t = document),
                t.querySelector(
                  "[" + this.o.prefix + '="' + this.o.container + '"]'
                )
              );
            }),
            (e.removeContainer = function (t) {
              document.body.contains(t) && t.parentNode.removeChild(t);
            }),
            (e.addContainer = function (t, e) {
              var i = this.getContainer();
              i ? this.s(t, i) : e.appendChild(t);
            }),
            (e.getNamespace = function (t) {
              void 0 === t && (t = document);
              var e = t.querySelector(
                "[" + this.o.prefix + "-" + this.o.namespace + "]"
              );
              return e
                ? e.getAttribute(this.o.prefix + "-" + this.o.namespace)
                : null;
            }),
            (e.getHref = function (t) {
              if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href) return t.href;
                var e = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (e) return this.resolveUrl(e.baseVal || e);
              }
              return null;
            }),
            (e.resolveUrl = function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              var n = e.length;
              if (0 === n)
                throw new Error(
                  "resolveUrl requires at least one argument; got none."
                );
              var r = document.createElement("base");
              if (((r.href = arguments[0]), 1 === n)) return r.href;
              var o = document.getElementsByTagName("head")[0];
              o.insertBefore(r, o.firstChild);
              for (var s, a = document.createElement("a"), l = 1; l < n; l++)
                (a.href = arguments[l]), (r.href = s = a.href);
              return o.removeChild(r), s;
            }),
            (e.s = function (t, e) {
              e.parentNode.insertBefore(t, e.nextSibling);
            }),
            t
          );
        })())(),
        P = new ((function () {
          function t() {
            (this.h = []), (this.v = -1);
          }
          var n = t.prototype;
          return (
            (n.init = function (t, e) {
              this.l = "barba";
              var i = {
                ns: e,
                scroll: { x: window.scrollX, y: window.scrollY },
                url: t,
              };
              this.h.push(i), (this.v = 0);
              var n = { from: this.l, index: 0, states: [].concat(this.h) };
              window.history && window.history.replaceState(n, "", t);
            }),
            (n.change = function (t, e, i) {
              if (i && i.state) {
                var n = i.state,
                  r = n.index;
                (e = this.m(this.v - r)), this.replace(n.states), (this.v = r);
              } else this.add(t, e);
              return e;
            }),
            (n.add = function (t, e) {
              var i = this.size,
                n = this.p(e),
                r = {
                  ns: "tmp",
                  scroll: { x: window.scrollX, y: window.scrollY },
                  url: t,
                };
              this.h.push(r), (this.v = i);
              var o = { from: this.l, index: i, states: [].concat(this.h) };
              switch (n) {
                case "push":
                  window.history && window.history.pushState(o, "", t);
                  break;
                case "replace":
                  window.history && window.history.replaceState(o, "", t);
              }
            }),
            (n.update = function (t, e) {
              var n = e || this.v,
                r = i({}, this.get(n), {}, t);
              this.set(n, r);
            }),
            (n.remove = function (t) {
              t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
            }),
            (n.clear = function () {
              (this.h = []), (this.v = -1);
            }),
            (n.replace = function (t) {
              this.h = t;
            }),
            (n.get = function (t) {
              return this.h[t];
            }),
            (n.set = function (t, e) {
              return (this.h[t] = e);
            }),
            (n.p = function (t) {
              var e = "push",
                i = t,
                n = S.prefix + "-" + S.history;
              return (
                i.hasAttribute && i.hasAttribute(n) && (e = i.getAttribute(n)),
                e
              );
            }),
            (n.m = function (t) {
              return Math.abs(t) > 1
                ? t > 0
                  ? "forward"
                  : "back"
                : 0 === t
                  ? "popstate"
                  : t > 0
                    ? "back"
                    : "forward";
            }),
            e(t, [
              {
                key: "current",
                get: function () {
                  return this.h[this.v];
                },
              },
              {
                key: "state",
                get: function () {
                  return this.h[this.h.length - 1];
                },
              },
              {
                key: "previous",
                get: function () {
                  return this.v < 1 ? null : this.h[this.v - 1];
                },
              },
              {
                key: "size",
                get: function () {
                  return this.h.length;
                },
              },
            ]),
            t
          );
        })())(),
        A = function (t, e) {
          try {
            var i = (function () {
              if (!e.next.html)
                return Promise.resolve(t).then(function (t) {
                  var i = e.next;
                  if (t) {
                    var n = T.toElement(t);
                    (i.namespace = T.getNamespace(n)),
                      (i.container = T.getContainer(n)),
                      (i.html = t),
                      P.update({ ns: i.namespace });
                    var r = T.toDocument(t);
                    document.title = r.title;
                  }
                });
            })();
            return Promise.resolve(
              i && i.then ? i.then(function () { }) : void 0
            );
          } catch (t) {
            return Promise.reject(t);
          }
        },
        F = d,
        k = {
          __proto__: null,
          update: A,
          nextTick: function () {
            return new Promise(function (t) {
              window.requestAnimationFrame(t);
            });
          },
          pathToRegexp: F,
        },
        M = function () {
          return window.location.origin;
        },
        L = function (t) {
          return void 0 === t && (t = window.location.href), O(t).port;
        },
        O = function (t) {
          var e,
            i = t.match(/:\d+/);
          if (null === i)
            /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
          else {
            var n = i[0].substring(1);
            e = parseInt(n, 10);
          }
          var r,
            o = t.replace(M(), ""),
            s = {},
            a = o.indexOf("#");
          a >= 0 && ((r = o.slice(a + 1)), (o = o.slice(0, a)));
          var l = o.indexOf("?");
          return (
            l >= 0 && ((s = I(o.slice(l + 1))), (o = o.slice(0, l))),
            { hash: r, path: o, port: e, query: s }
          );
        },
        I = function (t) {
          return t.split("&").reduce(function (t, e) {
            var i = e.split("=");
            return (t[i[0]] = i[1]), t;
          }, {});
        },
        j = function (t) {
          return (
            void 0 === t && (t = window.location.href),
            t.replace(/(\/#.*|\/|#.*)$/, "")
          );
        },
        z = {
          __proto__: null,
          getHref: function () {
            return window.location.href;
          },
          getOrigin: M,
          getPort: L,
          getPath: function (t) {
            return void 0 === t && (t = window.location.href), O(t).path;
          },
          parse: O,
          parseQuery: I,
          clean: j,
        };
      function B(t, e, i) {
        return (
          void 0 === e && (e = 2e3),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest();
            (o.onreadystatechange = function () {
              if (o.readyState === XMLHttpRequest.DONE)
                if (200 === o.status) n(o.responseText);
                else if (o.status) {
                  var e = { status: o.status, statusText: o.statusText };
                  i(t, e), r(e);
                }
            }),
              (o.ontimeout = function () {
                var n = new Error("Timeout error [" + e + "]");
                i(t, n), r(n);
              }),
              (o.onerror = function () {
                var e = new Error("Fetch error");
                i(t, e), r(e);
              }),
              o.open("GET", t),
              (o.timeout = e),
              o.setRequestHeader(
                "Accept",
                "text/html,application/xhtml+xml,application/xml"
              ),
              o.setRequestHeader("x-barba", "yes"),
              o.send();
          })
        );
      }
      var R = function (t) {
        return (
          !!t &&
          ("object" == typeof t || "function" == typeof t) &&
          "function" == typeof t.then
        );
      };
      function N(t, e) {
        return (
          void 0 === e && (e = {}),
          function () {
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
              n[r] = arguments[r];
            var o = !1,
              s = new Promise(function (i, r) {
                e.async = function () {
                  return (
                    (o = !0),
                    function (t, e) {
                      t ? r(t) : i(e);
                    }
                  );
                };
                var s = t.apply(e, n);
                o || (R(s) ? s.then(i, r) : i(s));
              });
            return s;
          }
        );
      }
      var H = new ((function (t) {
        function e() {
          var e;
          return (
            ((e = t.call(this) || this).logger = new h("@barba/core")),
            (e.all = [
              "ready",
              "page",
              "reset",
              "currentAdded",
              "currentRemoved",
              "nextAdded",
              "nextRemoved",
              "beforeOnce",
              "once",
              "afterOnce",
              "before",
              "beforeLeave",
              "leave",
              "afterLeave",
              "beforeEnter",
              "enter",
              "afterEnter",
              "after",
            ]),
            (e.registered = new Map()),
            e.init(),
            e
          );
        }
        n(e, t);
        var i = e.prototype;
        return (
          (i.init = function () {
            var t = this;
            this.registered.clear(),
              this.all.forEach(function (e) {
                t[e] ||
                  (t[e] = function (i, n) {
                    t.registered.has(e) || t.registered.set(e, new Set()),
                      t.registered.get(e).add({ ctx: n || {}, fn: i });
                  });
              });
          }),
          (i.do = function (t) {
            for (
              var e = this,
              i = arguments.length,
              n = new Array(i > 1 ? i - 1 : 0),
              r = 1;
              r < i;
              r++
            )
              n[r - 1] = arguments[r];
            if (this.registered.has(t)) {
              var o = Promise.resolve();
              return (
                this.registered.get(t).forEach(function (t) {
                  o = o.then(function () {
                    return N(t.fn, t.ctx).apply(void 0, n);
                  });
                }),
                o.catch(function (i) {
                  e.logger.debug("Hook error [" + t + "]"), e.logger.error(i);
                })
              );
            }
            return Promise.resolve();
          }),
          (i.clear = function () {
            var t = this;
            this.all.forEach(function (e) {
              delete t[e];
            }),
              this.init();
          }),
          (i.help = function () {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t = [];
            this.registered.forEach(function (e, i) {
              return t.push(i);
            }),
              this.logger.info("Registered hooks: " + t.join(","));
          }),
          e
        );
      })(function () { }))(),
        q = (function () {
          function t(t) {
            if (((this.P = []), "boolean" == typeof t)) this.g = t;
            else {
              var e = Array.isArray(t) ? t : [t];
              this.P = e.map(function (t) {
                return F(t);
              });
            }
          }
          return (
            (t.prototype.checkHref = function (t) {
              if ("boolean" == typeof this.g) return this.g;
              var e = O(t).path;
              return this.P.some(function (t) {
                return null !== t.exec(e);
              });
            }),
            t
          );
        })(),
        Z = (function (t) {
          function e(e) {
            var i;
            return ((i = t.call(this, e) || this).k = new Map()), i;
          }
          n(e, t);
          var r = e.prototype;
          return (
            (r.set = function (t, e, i) {
              return (
                this.k.set(t, { action: i, request: e }),
                { action: i, request: e }
              );
            }),
            (r.get = function (t) {
              return this.k.get(t);
            }),
            (r.getRequest = function (t) {
              return this.k.get(t).request;
            }),
            (r.getAction = function (t) {
              return this.k.get(t).action;
            }),
            (r.has = function (t) {
              return !this.checkHref(t) && this.k.has(t);
            }),
            (r.delete = function (t) {
              return this.k.delete(t);
            }),
            (r.update = function (t, e) {
              var n = i({}, this.k.get(t), {}, e);
              return this.k.set(t, n), n;
            }),
            e
          );
        })(q),
        Q = function () {
          return !window.history.pushState;
        },
        X = function (t) {
          return !t.el || !t.href;
        },
        Y = function (t) {
          var e = t.event;
          return (
            e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
          );
        },
        W = function (t) {
          var e = t.el;
          return e.hasAttribute("target") && "_blank" === e.target;
        },
        U = function (t) {
          var e = t.el;
          return (
            (void 0 !== e.protocol &&
              window.location.protocol !== e.protocol) ||
            (void 0 !== e.hostname && window.location.hostname !== e.hostname)
          );
        },
        V = function (t) {
          var e = t.el;
          return void 0 !== e.port && L() !== L(e.href);
        },
        G = function (t) {
          var e = t.el;
          return (
            e.getAttribute && "string" == typeof e.getAttribute("download")
          );
        },
        K = function (t) {
          return t.el.hasAttribute(S.prefix + "-" + S.prevent);
        },
        $ = function (t) {
          return Boolean(
            t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]')
          );
        },
        J = function (t) {
          var e = t.href;
          return j(e) === j() && L(e) === L();
        },
        tt = (function (t) {
          function e(e) {
            var i;
            return (
              ((i = t.call(this, e) || this).suite = []),
              (i.tests = new Map()),
              i.init(),
              i
            );
          }
          n(e, t);
          var i = e.prototype;
          return (
            (i.init = function () {
              this.add("pushState", Q),
                this.add("exists", X),
                this.add("newTab", Y),
                this.add("blank", W),
                this.add("corsDomain", U),
                this.add("corsPort", V),
                this.add("download", G),
                this.add("preventSelf", K),
                this.add("preventAll", $),
                this.add("sameUrl", J, !1);
            }),
            (i.add = function (t, e, i) {
              void 0 === i && (i = !0),
                this.tests.set(t, e),
                i && this.suite.push(t);
            }),
            (i.run = function (t, e, i, n) {
              return this.tests.get(t)({ el: e, event: i, href: n });
            }),
            (i.checkLink = function (t, e, i) {
              var n = this;
              return this.suite.some(function (r) {
                return n.run(r, t, e, i);
              });
            }),
            e
          );
        })(q),
        et = (function (t) {
          function e(i, n) {
            var r;
            void 0 === n && (n = "Barba error");
            for (
              var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2;
              a < o;
              a++
            )
              s[a - 2] = arguments[a];
            return (
              ((r = t.call.apply(t, [this].concat(s)) || this).error = i),
              (r.label = n),
              Error.captureStackTrace &&
              Error.captureStackTrace(
                (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(r),
                e
              ),
              (r.name = "BarbaError"),
              r
            );
          }
          return n(e, t), e;
        })(a(Error)),
        it = (function () {
          function t(t) {
            void 0 === t && (t = []),
              (this.logger = new h("@barba/core")),
              (this.all = []),
              (this.page = []),
              (this.once = []),
              (this.A = [
                { name: "namespace", type: "strings" },
                { name: "custom", type: "function" },
              ]),
              t && (this.all = this.all.concat(t)),
              this.update();
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e) {
              switch (t) {
                case "rule":
                  this.A.splice(e.position || 0, 0, e.value);
                  break;
                case "transition":
                default:
                  this.all.push(e);
              }
              this.update();
            }),
            (e.resolve = function (t, e) {
              var i = this;
              void 0 === e && (e = {});
              var n = e.once ? this.once : this.page;
              n = n.filter(
                e.self
                  ? function (t) {
                    return t.name && "self" === t.name;
                  }
                  : function (t) {
                    return !t.name || "self" !== t.name;
                  }
              );
              var r = new Map(),
                o = n.find(function (n) {
                  var o = !0,
                    s = {};
                  return (
                    !(!e.self || "self" !== n.name) ||
                    (i.A.reverse().forEach(function (e) {
                      o &&
                        ((o = i.R(n, e, t, s)),
                          n.from &&
                          n.to &&
                          (o =
                            i.R(n, e, t, s, "from") && i.R(n, e, t, s, "to")),
                          n.from && !n.to && (o = i.R(n, e, t, s, "from")),
                          !n.from && n.to && (o = i.R(n, e, t, s, "to")));
                    }),
                      r.set(n, s),
                      o)
                  );
                }),
                s = r.get(o),
                a = [];
              if (
                (a.push(e.once ? "once" : "page"), e.self && a.push("self"), s)
              ) {
                var l,
                  u = [o];
                Object.keys(s).length > 0 && u.push(s),
                  (l = this.logger).info.apply(
                    l,
                    ["Transition found [" + a.join(",") + "]"].concat(u)
                  );
              } else
                this.logger.info("No transition found [" + a.join(",") + "]");
              return o;
            }),
            (e.update = function () {
              var t = this;
              (this.all = this.all
                .map(function (e) {
                  return t.T(e);
                })
                .sort(function (t, e) {
                  return t.priority - e.priority;
                })
                .reverse()
                .map(function (t) {
                  return delete t.priority, t;
                })),
                (this.page = this.all.filter(function (t) {
                  return void 0 !== t.leave || void 0 !== t.enter;
                })),
                (this.once = this.all.filter(function (t) {
                  return void 0 !== t.once;
                }));
            }),
            (e.R = function (t, e, i, n, r) {
              var o = !0,
                s = !1,
                a = t,
                l = e.name,
                u = l,
                c = l,
                h = l,
                d = r ? a[r] : a,
                p = "to" === r ? i.next : i.current;
              if (r ? d && d[l] : d[l]) {
                switch (e.type) {
                  case "strings":
                  default:
                    var f = Array.isArray(d[u]) ? d[u] : [d[u]];
                    p[u] && -1 !== f.indexOf(p[u]) && (s = !0),
                      -1 === f.indexOf(p[u]) && (o = !1);
                    break;
                  case "object":
                    var m = Array.isArray(d[c]) ? d[c] : [d[c]];
                    p[c]
                      ? (p[c].name && -1 !== m.indexOf(p[c].name) && (s = !0),
                        -1 === m.indexOf(p[c].name) && (o = !1))
                      : (o = !1);
                    break;
                  case "function":
                    d[h](i) ? (s = !0) : (o = !1);
                }
                s &&
                  (r
                    ? ((n[r] = n[r] || {}), (n[r][l] = a[r][l]))
                    : (n[l] = a[l]));
              }
              return o;
            }),
            (e.O = function (t, e, i) {
              var n = 0;
              return (
                (t[e] || (t.from && t.from[e]) || (t.to && t.to[e])) &&
                ((n += Math.pow(10, i)),
                  t.from && t.from[e] && (n += 1),
                  t.to && t.to[e] && (n += 2)),
                n
              );
            }),
            (e.T = function (t) {
              var e = this;
              t.priority = 0;
              var i = 0;
              return (
                this.A.forEach(function (n, r) {
                  i += e.O(t, n.name, r + 1);
                }),
                (t.priority = i),
                t
              );
            }),
            t
          );
        })(),
        nt = (function () {
          function t(t) {
            void 0 === t && (t = []),
              (this.logger = new h("@barba/core")),
              (this.S = !1),
              (this.store = new it(t));
          }
          var i = t.prototype;
          return (
            (i.get = function (t, e) {
              return this.store.resolve(t, e);
            }),
            (i.doOnce = function (t) {
              var e = t.data,
                i = t.transition;
              try {
                var n = function () {
                  r.S = !1;
                },
                  r = this,
                  o = i || {};
                r.S = !0;
                var s = l(
                  function () {
                    return Promise.resolve(r.j("beforeOnce", e, o)).then(
                      function () {
                        return Promise.resolve(r.once(e, o)).then(function () {
                          return Promise.resolve(r.j("afterOnce", e, o)).then(
                            function () { }
                          );
                        });
                      }
                    );
                  },
                  function (t) {
                    (r.S = !1),
                      r.logger.debug("Transition error [before/after/once]"),
                      r.logger.error(t);
                  }
                );
                return Promise.resolve(s && s.then ? s.then(n) : n());
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.doPage = function (t) {
              var e = t.data,
                i = t.transition,
                n = t.page,
                r = t.wrapper;
              try {
                var o = function (t) {
                  if (s) return t;
                  a.S = !1;
                },
                  s = !1,
                  a = this,
                  u = i || {},
                  c = !0 === u.sync || !1;
                a.S = !0;
                var h = l(
                  function () {
                    function t() {
                      return Promise.resolve(a.j("before", e, u)).then(
                        function () {
                          function t(t) {
                            return Promise.resolve(a.remove(e)).then(
                              function () {
                                return Promise.resolve(a.j("after", e, u)).then(
                                  function () { }
                                );
                              }
                            );
                          }
                          var i = (function () {
                            if (c)
                              return l(
                                function () {
                                  return Promise.resolve(a.add(e, r)).then(
                                    function () {
                                      return Promise.resolve(
                                        a.j("beforeLeave", e, u)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.j("beforeEnter", e, u)
                                        ).then(function () {
                                          return Promise.resolve(
                                            Promise.all([
                                              a.leave(e, u),
                                              a.enter(e, u),
                                            ])
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("afterLeave", e, u)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("afterEnter", e, u)
                                              ).then(function () { });
                                            });
                                          });
                                        });
                                      });
                                    }
                                  );
                                },
                                function (t) {
                                  if (a.M(t))
                                    throw new et(t, "Transition error [sync]");
                                }
                              );
                            var t = function (t) {
                              return l(
                                function () {
                                  var t = (function () {
                                    if (!1 !== i)
                                      return Promise.resolve(
                                        a.add(e, r)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.j("beforeEnter", e, u)
                                        ).then(function () {
                                          return Promise.resolve(
                                            a.enter(e, u, i)
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("afterEnter", e, u)
                                            ).then(function () { });
                                          });
                                        });
                                      });
                                  })();
                                  if (t && t.then)
                                    return t.then(function () { });
                                },
                                function (t) {
                                  if (a.M(t))
                                    throw new et(
                                      t,
                                      "Transition error [before/after/enter]"
                                    );
                                }
                              );
                            },
                              i = !1,
                              o = l(
                                function () {
                                  return Promise.resolve(
                                    a.j("beforeLeave", e, u)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        a.leave(e, u),
                                        A(n, e),
                                      ]).then(function (t) {
                                        return t[0];
                                      })
                                    ).then(function (t) {
                                      return (
                                        (i = t),
                                        Promise.resolve(
                                          a.j("afterLeave", e, u)
                                        ).then(function () { })
                                      );
                                    });
                                  });
                                },
                                function (t) {
                                  if (a.M(t))
                                    throw new et(
                                      t,
                                      "Transition error [before/after/leave]"
                                    );
                                }
                              );
                            return o && o.then ? o.then(t) : t();
                          })();
                          return i && i.then ? i.then(t) : t();
                        }
                      );
                    }
                    var i = (function () {
                      if (c)
                        return Promise.resolve(A(n, e)).then(function () { });
                    })();
                    return i && i.then ? i.then(t) : t();
                  },
                  function (t) {
                    if (((a.S = !1), t.name && "BarbaError" === t.name))
                      throw (
                        (a.logger.debug(t.label), a.logger.error(t.error), t)
                      );
                    throw (
                      (a.logger.debug("Transition error [page]"),
                        a.logger.error(t),
                        t)
                    );
                  }
                );
                return Promise.resolve(h && h.then ? h.then(o) : o(h));
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.once = function (t, e) {
              try {
                return Promise.resolve(H.do("once", t, e)).then(function () {
                  return e.once ? N(e.once, e)(t) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.leave = function (t, e) {
              try {
                return Promise.resolve(H.do("leave", t, e)).then(function () {
                  return e.leave ? N(e.leave, e)(t) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.enter = function (t, e, i) {
              try {
                return Promise.resolve(H.do("enter", t, e)).then(function () {
                  return e.enter ? N(e.enter, e)(t, i) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.add = function (t, e) {
              try {
                return (
                  T.addContainer(t.next.container, e),
                  H.do("nextAdded", t),
                  Promise.resolve()
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.remove = function (t) {
              try {
                return (
                  T.removeContainer(t.current.container),
                  H.do("currentRemoved", t),
                  Promise.resolve()
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (i.M = function (t) {
              return t.message
                ? !/Timeout error|Fetch error/.test(t.message)
                : !t.status;
            }),
            (i.j = function (t, e, i) {
              try {
                return Promise.resolve(H.do(t, e, i)).then(function () {
                  return i[t] ? N(i[t], i)(e) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            e(t, [
              {
                key: "isRunning",
                get: function () {
                  return this.S;
                },
                set: function (t) {
                  this.S = t;
                },
              },
              {
                key: "hasOnce",
                get: function () {
                  return this.store.once.length > 0;
                },
              },
              {
                key: "hasSelf",
                get: function () {
                  return this.store.all.some(function (t) {
                    return "self" === t.name;
                  });
                },
              },
              {
                key: "shouldWait",
                get: function () {
                  return this.store.all.some(function (t) {
                    return (t.to && !t.to.route) || t.sync;
                  });
                },
              },
            ]),
            t
          );
        })(),
        rt = (function () {
          function t(t) {
            var e = this;
            (this.names = [
              "beforeLeave",
              "afterLeave",
              "beforeEnter",
              "afterEnter",
            ]),
              (this.byNamespace = new Map()),
              0 !== t.length &&
              (t.forEach(function (t) {
                e.byNamespace.set(t.namespace, t);
              }),
                this.names.forEach(function (t) {
                  H[t](e.L(t));
                }));
          }
          return (
            (t.prototype.L = function (t) {
              var e = this;
              return function (i) {
                var n = t.match(/enter/i) ? i.next : i.current,
                  r = e.byNamespace.get(n.namespace);
                return r && r[t] ? N(r[t], r)(i) : Promise.resolve();
              };
            }),
            t
          );
        })();
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
        (Element.prototype.closest = function (t) {
          var e = this;
          do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        });
      var ot = {
        container: null,
        html: "",
        namespace: "",
        url: { hash: "", href: "", path: "", port: null, query: {} },
      };
      return new ((function () {
        function t() {
          (this.version = "2.9.7"),
            (this.schemaPage = ot),
            (this.Logger = h),
            (this.logger = new h("@barba/core")),
            (this.plugins = []),
            (this.hooks = H),
            (this.dom = T),
            (this.helpers = k),
            (this.history = P),
            (this.request = B),
            (this.url = z);
        }
        var n = t.prototype;
        return (
          (n.use = function (t, e) {
            var i = this.plugins;
            i.indexOf(t) > -1
              ? this.logger.warn("Plugin [" + t.name + "] already installed.")
              : "function" == typeof t.install
                ? (t.install(this, e), i.push(t))
                : this.logger.warn(
                  "Plugin [" + t.name + '] has no "install" method.'
                );
          }),
          (n.init = function (t) {
            var e = void 0 === t ? {} : t,
              n = e.transitions,
              r = void 0 === n ? [] : n,
              o = e.views,
              s = void 0 === o ? [] : o,
              a = e.schema,
              l = void 0 === a ? S : a,
              u = e.requestError,
              c = e.timeout,
              d = void 0 === c ? 2e3 : c,
              p = e.cacheIgnore,
              f = void 0 !== p && p,
              m = e.prefetchIgnore,
              g = void 0 !== m && m,
              v = e.preventRunning,
              y = void 0 !== v && v,
              _ = e.prevent,
              w = void 0 === _ ? null : _,
              D = e.debug,
              x = e.logLevel;
            if (
              (h.setLevel(
                !0 === (void 0 !== D && D) ? "debug" : void 0 === x ? "off" : x
              ),
                this.logger.info(this.version),
                Object.keys(l).forEach(function (t) {
                  S[t] && (S[t] = l[t]);
                }),
                (this.$ = u),
                (this.timeout = d),
                (this.cacheIgnore = f),
                (this.prefetchIgnore = g),
                (this.preventRunning = y),
                (this._ = this.dom.getWrapper()),
                !this._)
            )
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var b = this.data.current;
            if (!b.container)
              throw new Error("[@barba/core] No Barba container found");
            if (
              ((this.cache = new Z(f)),
                (this.prevent = new tt(g)),
                (this.transitions = new nt(r)),
                (this.views = new rt(s)),
                null !== w)
            ) {
              if ("function" != typeof w)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", w);
            }
            this.history.init(b.url.href, b.namespace),
              (this.B = this.B.bind(this)),
              (this.U = this.U.bind(this)),
              (this.D = this.D.bind(this)),
              this.F(),
              this.plugins.forEach(function (t) {
                return t.init();
              });
            var C = this.data;
            (C.trigger = "barba"),
              (C.next = C.current),
              (C.current = i({}, this.schemaPage)),
              this.hooks.do("ready", C),
              this.once(C),
              this.q();
          }),
          (n.destroy = function () {
            this.q(),
              this.H(),
              this.history.clear(),
              this.hooks.clear(),
              (this.plugins = []);
          }),
          (n.force = function (t) {
            window.location.assign(t);
          }),
          (n.go = function (t, e, i) {
            var n;
            if ((void 0 === e && (e = "barba"), this.transitions.isRunning))
              this.force(t);
            else if (
              !(n =
                "popstate" === e
                  ? this.history.current &&
                  this.url.getPath(this.history.current.url) ===
                  this.url.getPath(t)
                  : this.prevent.run("sameUrl", null, null, t)) ||
              this.transitions.hasSelf
            )
              return (
                (e = this.history.change(t, e, i)),
                i && (i.stopPropagation(), i.preventDefault()),
                this.page(t, e, n)
              );
          }),
          (n.once = function (t) {
            try {
              var e = this;
              return Promise.resolve(e.hooks.do("beforeEnter", t)).then(
                function () {
                  function i() {
                    return Promise.resolve(e.hooks.do("afterEnter", t)).then(
                      function () { }
                    );
                  }
                  var n = (function () {
                    if (e.transitions.hasOnce) {
                      var i = e.transitions.get(t, { once: !0 });
                      return Promise.resolve(
                        e.transitions.doOnce({ transition: i, data: t })
                      ).then(function () { });
                    }
                  })();
                  return n && n.then ? n.then(i) : i();
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.page = function (t, e, n) {
            try {
              var r = function () {
                var t = o.data;
                return Promise.resolve(o.hooks.do("page", t)).then(
                  function () {
                    var e = l(
                      function () {
                        var e = o.transitions.get(t, { once: !1, self: n });
                        return Promise.resolve(
                          o.transitions.doPage({
                            data: t,
                            page: s,
                            transition: e,
                            wrapper: o._,
                          })
                        ).then(function () {
                          o.q();
                        });
                      },
                      function () {
                        0 === h.getLevel() && o.force(t.current.url.href);
                      }
                    );
                    if (e && e.then) return e.then(function () { });
                  }
                );
              },
                o = this;
              (o.data.next.url = i({ href: t }, o.url.parse(t))),
                (o.data.trigger = e);
              var s = o.cache.has(t)
                ? o.cache.update(t, { action: "click" }).request
                : o.cache.set(
                  t,
                  o.request(t, o.timeout, o.onRequestError.bind(o, e)),
                  "click"
                ).request,
                a = (function () {
                  if (o.transitions.shouldWait)
                    return Promise.resolve(A(s, o.data)).then(function () { });
                })();
              return Promise.resolve(a && a.then ? a.then(r) : r());
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.onRequestError = function (t) {
            this.transitions.isRunning = !1;
            for (
              var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              i[n - 1] = arguments[n];
            var r = i[0],
              o = i[1],
              s = this.cache.getAction(r);
            return (
              this.cache.delete(r),
              !(
                (this.$ && !1 === this.$(t, s, r, o)) ||
                ("click" === s && this.force(r), 1)
              )
            );
          }),
          (n.prefetch = function (t) {
            var e = this;
            this.cache.has(t) ||
              this.cache.set(
                t,
                this.request(
                  t,
                  this.timeout,
                  this.onRequestError.bind(this, "barba")
                ).catch(function (t) {
                  e.logger.error(t);
                }),
                "prefetch"
              );
          }),
          (n.F = function () {
            !0 !== this.prefetchIgnore &&
              (document.addEventListener("mouseover", this.B),
                document.addEventListener("touchstart", this.B)),
              document.addEventListener("click", this.U),
              window.addEventListener("popstate", this.D);
          }),
          (n.H = function () {
            !0 !== this.prefetchIgnore &&
              (document.removeEventListener("mouseover", this.B),
                document.removeEventListener("touchstart", this.B)),
              document.removeEventListener("click", this.U),
              window.removeEventListener("popstate", this.D);
          }),
          (n.B = function (t) {
            var e = this,
              i = this.I(t);
            if (i) {
              var n = this.dom.getHref(i);
              this.prevent.checkHref(n) ||
                this.cache.has(n) ||
                this.cache.set(
                  n,
                  this.request(
                    n,
                    this.timeout,
                    this.onRequestError.bind(this, i)
                  ).catch(function (t) {
                    e.logger.error(t);
                  }),
                  "enter"
                );
            }
          }),
          (n.U = function (t) {
            var e = this.I(t);
            if (e)
              return this.transitions.isRunning && this.preventRunning
                ? (t.preventDefault(), void t.stopPropagation())
                : void this.go(this.dom.getHref(e), e, t);
          }),
          (n.D = function (t) {
            this.go(this.url.getHref(), "popstate", t);
          }),
          (n.I = function (t) {
            for (var e = t.target; e && !this.dom.getHref(e);)
              e = e.parentNode;
            if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e)))
              return e;
          }),
          (n.q = function () {
            var t = this.url.getHref(),
              e = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: i({ href: t }, this.url.parse(t)),
              };
            (this.C = {
              current: e,
              next: i({}, this.schemaPage),
              trigger: void 0,
            }),
              this.hooks.do("reset", this.data);
          }),
          e(t, [
            {
              key: "data",
              get: function () {
                return this.C;
              },
            },
            {
              key: "wrapper",
              get: function () {
                return this._;
              },
            },
          ]),
          t
        );
      })())();
    })();
  },
  function (t, e, i) {
    i(8), i(4);
  },
  function (t, e) {
    try {
      var i = new window.CustomEvent("test");
      if ((i.preventDefault(), !0 !== i.defaultPrevented))
        throw new Error("Could not prevent default");
    } catch (t) {
      var n = function (t, e) {
        var i, n;
        return (
          (e = e || { bubbles: !1, cancelable: !1, detail: void 0 }),
          (i = document.createEvent("CustomEvent")).initCustomEvent(
            t,
            e.bubbles,
            e.cancelable,
            e.detail
          ),
          (n = i.preventDefault),
          (i.preventDefault = function () {
            n.call(this);
            try {
              Object.defineProperty(this, "defaultPrevented", {
                get: function () {
                  return !0;
                },
              });
            } catch (t) {
              this.defaultPrevented = !0;
            }
          }),
          i
        );
      };
      (n.prototype = window.Event.prototype), (window.CustomEvent = n);
    }
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(2),
      r = i(0),
      o = i(1),
      s = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      a = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      l = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      u = /(^[#\.][a-z]|[a-y][a-z])/i,
      c = Math.PI / 180,
      h = (Math.PI, Math.sin),
      d = Math.cos,
      p = Math.abs,
      f = Math.sqrt,
      m =
        (Math.atan2,
          function (t) {
            return "string" == typeof t;
          }),
      g = function (t) {
        return "number" == typeof t;
      },
      v = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      };
    function y(t) {
      var e,
        i = 0;
      for (t.reverse(); i < t.length; i += 2)
        (e = t[i]), (t[i] = t[i + 1]), (t[i + 1] = e);
      t.reversed = !t.reversed;
    }
    var _ = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2",
    };
    function w(t, e) {
      var i,
        n,
        r,
        o,
        s,
        l,
        u,
        c,
        h,
        d,
        p,
        f,
        m,
        g,
        v,
        y,
        w,
        D,
        C,
        E,
        S,
        T,
        P = t.tagName.toLowerCase(),
        A = 0.552284749831;
      return "path" !== P && t.getBBox
        ? ((l = (function (t, e) {
          var i,
            n = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            ),
            r = [].slice.call(t.attributes),
            o = r.length;
          for (e = "," + e + ","; --o > -1;)
            (i = r[o].nodeName.toLowerCase()),
              e.indexOf("," + i + ",") < 0 &&
              n.setAttributeNS(null, i, r[o].nodeValue);
          return n;
        })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
          (T = (function (t, e) {
            for (
              var i = e ? e.split(",") : [], n = {}, r = i.length;
              --r > -1;

            )
              n[i[r]] = +t.getAttribute(i[r]) || 0;
            return n;
          })(t, _[P])),
          "rect" === P
            ? ((o = T.rx),
              (s = T.ry || o),
              (n = T.x),
              (r = T.y),
              (d = T.width - 2 * o),
              (p = T.height - 2 * s),
              (i =
                o || s
                  ? "M" +
                  (y = (g = (m = n + o) + d) + o) +
                  "," +
                  (D = r + s) +
                  " V" +
                  (C = D + p) +
                  " C" +
                  [
                    y,
                    (E = C + s * A),
                    (v = g + o * A),
                    (S = C + s),
                    g,
                    S,
                    g - (g - m) / 3,
                    S,
                    m + (g - m) / 3,
                    S,
                    m,
                    S,
                    (f = n + o * (1 - A)),
                    S,
                    n,
                    E,
                    n,
                    C,
                    n,
                    C - (C - D) / 3,
                    n,
                    D + (C - D) / 3,
                    n,
                    D,
                    n,
                    (w = r + s * (1 - A)),
                    f,
                    r,
                    m,
                    r,
                    m + (g - m) / 3,
                    r,
                    g - (g - m) / 3,
                    r,
                    g,
                    r,
                    v,
                    r,
                    y,
                    w,
                    y,
                    D,
                  ].join(",") +
                  "z"
                  : "M" +
                  (n + d) +
                  "," +
                  r +
                  " v" +
                  p +
                  " h" +
                  -d +
                  " v" +
                  -p +
                  " h" +
                  d +
                  "z"))
            : "circle" === P || "ellipse" === P
              ? ("circle" === P
                ? (c = (o = s = T.r) * A)
                : ((o = T.rx), (c = (s = T.ry) * A)),
                (i =
                  "M" +
                  ((n = T.cx) + o) +
                  "," +
                  (r = T.cy) +
                  " C" +
                  [
                    n + o,
                    r + c,
                    n + (u = o * A),
                    r + s,
                    n,
                    r + s,
                    n - u,
                    r + s,
                    n - o,
                    r + c,
                    n - o,
                    r,
                    n - o,
                    r - c,
                    n - u,
                    r - s,
                    n,
                    r - s,
                    n + u,
                    r - s,
                    n + o,
                    r - c,
                    n + o,
                    r,
                  ].join(",") +
                  "z"))
              : "line" === P
                ? (i = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2)
                : ("polyline" !== P && "polygon" !== P) ||
                ((i =
                  "M" +
                  (n = (h =
                    (t.getAttribute("points") + "").match(a) || []).shift()) +
                  "," +
                  (r = h.shift()) +
                  " L" +
                  h.join(",")),
                  "polygon" === P && (i += "," + n + "," + r + "z")),
          l.setAttribute("d", b((l._gsRawPath = x(i)))),
          e &&
          t.parentNode &&
          (t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t)),
          l)
        : t;
    }
    function D(t, e, i, n, r, o, s, a, l) {
      if (t !== a || e !== l) {
        (i = p(i)), (n = p(n));
        var u = (r % 360) * c,
          m = d(u),
          g = h(u),
          v = Math.PI,
          y = 2 * v,
          _ = (t - a) / 2,
          w = (e - l) / 2,
          D = m * _ + g * w,
          x = -g * _ + m * w,
          b = D * D,
          C = x * x,
          E = b / (i * i) + C / (n * n);
        E > 1 && ((i = f(E) * i), (n = f(E) * n));
        var S = i * i,
          T = n * n,
          P = (S * T - S * C - T * b) / (S * C + T * b);
        P < 0 && (P = 0);
        var A = (o === s ? -1 : 1) * f(P),
          F = A * ((i * x) / n),
          k = A * ((-n * D) / i),
          M = (t + a) / 2 + (m * F - g * k),
          L = (e + l) / 2 + (g * F + m * k),
          O = (D - F) / i,
          I = (x - k) / n,
          j = (-D - F) / i,
          z = (-x - k) / n,
          B = O * O + I * I,
          R = (I < 0 ? -1 : 1) * Math.acos(O / f(B)),
          N =
            (O * z - I * j < 0 ? -1 : 1) *
            Math.acos((O * j + I * z) / f(B * (j * j + z * z)));
        isNaN(N) && (N = v),
          !s && N > 0 ? (N -= y) : s && N < 0 && (N += y),
          (R %= y),
          (N %= y);
        var H,
          q = Math.ceil(p(N) / (y / 4)),
          Z = [],
          Q = N / q,
          X = ((4 / 3) * h(Q / 2)) / (1 + d(Q / 2)),
          Y = m * i,
          W = g * i,
          U = g * -n,
          V = m * n;
        for (H = 0; H < q; H++)
          (D = d((r = R + H * Q))),
            (x = h(r)),
            (O = d((r += Q))),
            (I = h(r)),
            Z.push(D - X * x, x + X * D, O + X * I, I - X * O, O, I);
        for (H = 0; H < Z.length; H += 2)
          (D = Z[H]),
            (x = Z[H + 1]),
            (Z[H] = D * Y + x * U + M),
            (Z[H + 1] = D * W + x * V + L);
        return (Z[H - 2] = a), (Z[H - 1] = l), Z;
      }
    }
    function x(t) {
      var e,
        i,
        n,
        r,
        o,
        a,
        u,
        c,
        h,
        d,
        f,
        m,
        g,
        v,
        y,
        _ =
          (t + "")
            .replace(l, function (t) {
              var e = +t;
              return e < 1e-4 && e > -1e-4 ? 0 : e;
            })
            .match(s) || [],
        w = [],
        x = 0,
        b = 0,
        C = _.length,
        E = 0,
        S = "ERROR: malformed path: " + t,
        T = function (t, e, i, n) {
          (d = (i - t) / 3),
            (f = (n - e) / 3),
            u.push(t + d, e + f, i - d, n - f, i, n);
        };
      if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(S), w;
      for (e = 0; e < C; e++)
        if (
          ((g = o),
            isNaN(_[e]) ? (a = (o = _[e].toUpperCase()) !== _[e]) : e--,
            (n = +_[e + 1]),
            (r = +_[e + 2]),
            a && ((n += x), (r += b)),
            e || ((c = n), (h = r)),
            "M" === o)
        )
          u && (u.length < 8 ? (w.length -= 1) : (E += u.length)),
            (x = c = n),
            (b = h = r),
            (u = [n, r]),
            w.push(u),
            (e += 2),
            (o = "L");
        else if ("C" === o)
          u || (u = [0, 0]),
            a || (x = b = 0),
            u.push(
              n,
              r,
              x + 1 * _[e + 3],
              b + 1 * _[e + 4],
              (x += 1 * _[e + 5]),
              (b += 1 * _[e + 6])
            ),
            (e += 6);
        else if ("S" === o)
          (d = x),
            (f = b),
            ("C" !== g && "S" !== g) ||
            ((d += x - u[u.length - 4]), (f += b - u[u.length - 3])),
            a || (x = b = 0),
            u.push(d, f, n, r, (x += 1 * _[e + 3]), (b += 1 * _[e + 4])),
            (e += 4);
        else if ("Q" === o)
          (d = x + (2 / 3) * (n - x)),
            (f = b + (2 / 3) * (r - b)),
            a || (x = b = 0),
            (x += 1 * _[e + 3]),
            (b += 1 * _[e + 4]),
            u.push(d, f, x + (2 / 3) * (n - x), b + (2 / 3) * (r - b), x, b),
            (e += 4);
        else if ("T" === o)
          (d = x - u[u.length - 4]),
            (f = b - u[u.length - 3]),
            u.push(
              x + d,
              b + f,
              n + (2 / 3) * (x + 1.5 * d - n),
              r + (2 / 3) * (b + 1.5 * f - r),
              (x = n),
              (b = r)
            ),
            (e += 2);
        else if ("H" === o) T(x, b, (x = n), b), (e += 1);
        else if ("V" === o) T(x, b, x, (b = n + (a ? b - x : 0))), (e += 1);
        else if ("L" === o || "Z" === o)
          "Z" === o && ((n = c), (r = h), (u.closed = !0)),
            ("L" === o || p(x - n) > 0.5 || p(b - r) > 0.5) &&
            (T(x, b, n, r), "L" === o && (e += 2)),
            (x = n),
            (b = r);
        else if ("A" === o) {
          if (
            ((v = _[e + 4]),
              (y = _[e + 5]),
              (d = _[e + 6]),
              (f = _[e + 7]),
              (i = 7),
              v.length > 1 &&
              (v.length < 3
                ? ((f = d), (d = y), i--)
                : ((f = y), (d = v.substr(2)), (i -= 2)),
                (y = v.charAt(1)),
                (v = v.charAt(0))),
              (m = D(
                x,
                b,
                +_[e + 1],
                +_[e + 2],
                +_[e + 3],
                +v,
                +y,
                (a ? x : 0) + 1 * d,
                (a ? b : 0) + 1 * f
              )),
              (e += i),
              m)
          )
            for (i = 0; i < m.length; i++) u.push(m[i]);
          (x = u[u.length - 2]), (b = u[u.length - 1]);
        } else console.log(S);
      return (
        (e = u.length) < 6
          ? (w.pop(), (e = 0))
          : u[0] === u[e - 2] && u[1] === u[e - 1] && (u.closed = !0),
        (w.totalPoints = E + e),
        w
      );
    }
    function b(t) {
      g(t[0]) && (t = [t]);
      var e,
        i,
        n,
        r,
        o = "",
        s = t.length;
      for (i = 0; i < s; i++) {
        for (
          r = t[i],
          o += "M" + v(r[0]) + "," + v(r[1]) + " C",
          e = r.length,
          n = 2;
          n < e;
          n++
        )
          o +=
            v(r[n++]) +
            "," +
            v(r[n++]) +
            " " +
            v(r[n++]) +
            "," +
            v(r[n++]) +
            " " +
            v(r[n++]) +
            "," +
            v(r[n]) +
            " ";
        r.closed && (o += "z");
      }
      return o;
    }
    /*!
     * MorphSVGPlugin 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var C,
      E,
      S,
      T,
      P,
      A = function () {
        return (
          C ||
          ("undefined" != typeof window &&
            (C = window.gsap) &&
            C.registerPlugin &&
            C)
        );
      },
      F = function (t) {
        return "function" == typeof t;
      },
      k = Math.atan2,
      M = Math.cos,
      L = Math.sin,
      O = Math.sqrt,
      I = Math.PI,
      j = 2 * I,
      z = 0.3 * I,
      B = 0.7 * I,
      R = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      N = /(^[#\.][a-z]|[a-y][a-z])/i,
      H = /[achlmqstvz]/i,
      q = function (t) {
        return console && console.warn(t);
      },
      Z = function (t) {
        var e,
          i = t.length,
          n = 0,
          r = 0;
        for (e = 0; e < i; e++) (n += t[e++]), (r += t[e]);
        return [n / (i / 2), r / (i / 2)];
      },
      Q = function (t) {
        var e,
          i,
          n,
          r = t.length,
          o = t[0],
          s = o,
          a = t[1],
          l = a;
        for (n = 6; n < r; n += 6)
          (e = t[n]) > o ? (o = e) : e < s && (s = e),
            (i = t[n + 1]) > a ? (a = i) : i < l && (l = i);
        return (
          (t.centerX = (o + s) / 2),
          (t.centerY = (a + l) / 2),
          (t.size = (o - s) * (a - l))
        );
      },
      X = function (t, e) {
        void 0 === e && (e = 3);
        for (
          var i,
          n,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v,
          y = t.length,
          _ = t[0][0],
          w = _,
          D = t[0][1],
          x = D,
          b = 1 / e;
          --y > -1;

        )
          for (i = (s = t[y]).length, o = 6; o < i; o += 6)
            for (
              c = s[o],
              h = s[o + 1],
              d = s[o + 2] - c,
              m = s[o + 3] - h,
              p = s[o + 4] - c,
              g = s[o + 5] - h,
              f = s[o + 6] - c,
              v = s[o + 7] - h,
              a = e;
              --a > -1;

            )
              (n =
                ((l = b * a) * l * f + 3 * (u = 1 - l) * (l * p + u * d)) * l +
                c) > _
                ? (_ = n)
                : n < w && (w = n),
                (r = (l * l * v + 3 * u * (l * g + u * m)) * l + h) > D
                  ? (D = r)
                  : r < x && (x = r);
        return (
          (t.centerX = (_ + w) / 2),
          (t.centerY = (D + x) / 2),
          (t.left = w),
          (t.width = _ - w),
          (t.top = x),
          (t.height = D - x),
          (t.size = (_ - w) * (D - x))
        );
      },
      Y = function (t, e) {
        return e.length - t.length;
      },
      W = function (t, e) {
        var i = t.size || Q(t),
          n = e.size || Q(e);
        return Math.abs(n - i) < (i + n) / 20
          ? e.centerX - t.centerX || e.centerY - t.centerY
          : n - i;
      },
      U = function (t, e) {
        var i,
          n,
          r = t.slice(0),
          o = t.length,
          s = o - 2;
        for (e |= 0, i = 0; i < o; i++)
          (n = (i + e) % s), (t[i++] = r[n]), (t[i] = r[n + 1]);
      },
      V = function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          u = t.length,
          c = 0,
          h = u - 2;
        for (i *= 6, s = 0; s < u; s += 6)
          (l = t[(o = (s + i) % h)] - (e[s] - n)),
            (a = t[o + 1] - (e[s + 1] - r)),
            (c += O(a * a + l * l));
        return c;
      },
      G = function (t, e, i) {
        var n,
          r,
          o,
          s = t.length,
          a = Z(t),
          l = Z(e),
          u = l[0] - a[0],
          c = l[1] - a[1],
          h = V(t, e, 0, u, c),
          d = 0;
        for (o = 6; o < s; o += 6)
          (r = V(t, e, o / 6, u, c)) < h && ((h = r), (d = o));
        if (i)
          for (y((n = t.slice(0))), o = 6; o < s; o += 6)
            (r = V(n, e, o / 6, u, c)) < h && ((h = r), (d = -o));
        return d / 6;
      },
      K = function (t, e, i) {
        for (
          var n, r, o, s, a, l, u = t.length, c = 1e20, h = 0, d = 0;
          --u > -1;

        )
          for (l = (n = t[u]).length, a = 0; a < l; a += 6)
            (r = n[a] - e),
              (o = n[a + 1] - i),
              (s = O(r * r + o * o)) < c &&
              ((c = s), (h = n[a]), (d = n[a + 1]));
        return [h, d];
      },
      $ = function (t, e, i, n, r, o) {
        var s,
          a,
          l,
          u,
          c = e.length,
          h = 0,
          d = Math.min(t.size || Q(t), e[i].size || Q(e[i])) * n,
          p = 1e20,
          f = t.centerX + r,
          m = t.centerY + o;
        for (s = i; s < c && !((e[s].size || Q(e[s])) < d); s++)
          (a = e[s].centerX - f),
            (l = e[s].centerY - m),
            (u = O(a * a + l * l)) < p && ((h = s), (p = u));
        return (u = e[h]), e.splice(h, 1), u;
      },
      J = function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g = 0,
          v = t.length,
          y = e / ((v - 2) / 6);
        for (f = 2; f < v; f += 6)
          for (g += y; g > 0.999999;)
            (i = t[f - 2]),
              (n = t[f - 1]),
              (r = t[f]),
              (o = t[f + 1]),
              (s = t[f + 2]),
              (a = t[f + 3]),
              (l = t[f + 4]),
              (u = t[f + 5]),
              (c = i + (r - i) * (m = 1 / ((Math.floor(g) || 1) + 1))),
              (c += ((d = r + (s - r) * m) - c) * m),
              (d += (s + (l - s) * m - d) * m),
              (h = n + (o - n) * m),
              (h += ((p = o + (a - o) * m) - h) * m),
              (p += (a + (u - a) * m - p) * m),
              t.splice(
                f,
                4,
                i + (r - i) * m,
                n + (o - n) * m,
                c,
                h,
                c + (d - c) * m,
                h + (p - h) * m,
                d,
                p,
                s + (l - s) * m,
                a + (u - a) * m
              ),
              (f += 6),
              (v += 6),
              g--;
        return t;
      },
      tt = function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          u,
          c,
          h,
          d = e.length - t.length,
          p = d > 0 ? e : t,
          f = d > 0 ? t : e,
          m = 0,
          g = "complexity" === n ? Y : W,
          v = "position" === n ? 0 : "number" == typeof n ? n : 0.8,
          _ = f.length,
          w = "object" == typeof i && i.push ? i.slice(0) : [i],
          D = "reverse" === w[0] || w[0] < 0,
          x = "log" === i;
        if (f[0]) {
          if (
            p.length > 1 &&
            (t.sort(g),
              e.sort(g),
              p.size || X(p),
              f.size || X(f),
              (c = p.centerX - f.centerX),
              (h = p.centerY - f.centerY),
              g === W)
          )
            for (_ = 0; _ < f.length; _++)
              p.splice(_, 0, $(f[_], p, _, v, c, h));
          if (d)
            for (
              d < 0 && (d = -d),
              p[0].length > f[0].length &&
              J(f[0], ((p[0].length - f[0].length) / 6) | 0),
              _ = f.length;
              m < d;

            )
              p[_].size || Q(p[_]),
                (l = (a = K(f, p[_].centerX, p[_].centerY))[0]),
                (u = a[1]),
                (f[_++] = [l, u, l, u, l, u, l, u]),
                (f.totalPoints += 8),
                m++;
          for (_ = 0; _ < t.length; _++)
            (o = e[_]),
              (s = t[_]),
              (d = o.length - s.length) < 0
                ? J(o, (-d / 6) | 0)
                : d > 0 && J(s, (d / 6) | 0),
              D && !1 !== r && !s.reversed && y(s),
              (i = w[_] || 0 === w[_] ? w[_] : "auto") &&
              (s.closed ||
                (Math.abs(s[0] - s[s.length - 2]) < 0.5 &&
                  Math.abs(s[1] - s[s.length - 1]) < 0.5)
                ? "auto" === i || "log" === i
                  ? ((w[_] = i = G(s, o, !_ || !1 === r)),
                    i < 0 && ((D = !0), y(s), (i = -i)),
                    U(s, 6 * i))
                  : "reverse" !== i &&
                  (_ && i < 0 && y(s), U(s, 6 * (i < 0 ? -i : i)))
                : !D &&
                  (("auto" === i &&
                    Math.abs(o[0] - s[0]) +
                    Math.abs(o[1] - s[1]) +
                    Math.abs(o[o.length - 2] - s[s.length - 2]) +
                    Math.abs(o[o.length - 1] - s[s.length - 1]) >
                    Math.abs(o[0] - s[s.length - 2]) +
                    Math.abs(o[1] - s[s.length - 1]) +
                    Math.abs(o[o.length - 2] - s[0]) +
                    Math.abs(o[o.length - 1] - s[1])) ||
                    i % 2)
                  ? (y(s), (w[_] = -1), (D = !0))
                  : "auto" === i
                    ? (w[_] = 0)
                    : "reverse" === i && (w[_] = -1),
                s.closed !== o.closed && (s.closed = o.closed = !1));
          return (
            x && q("shapeIndex:[" + w.join(",") + "]"), (t.shapeIndex = w), w
          );
        }
      },
      et = function (t, e, i, n, r) {
        var o = x(t[0]),
          s = x(t[1]);
        tt(o, s, e || 0 === e ? e : "auto", i, r) &&
          ((t[0] = b(o)),
            (t[1] = b(s)),
            ("log" !== n && !0 !== n) ||
            q('precompile:["' + t[0] + '","' + t[1] + '"]'));
      },
      it = function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          a,
          l,
          u = 0,
          c = parseFloat(t[0]),
          h = parseFloat(t[1]),
          d = c + "," + h + " ";
        for (
          i = (0.5 * e) / (0.5 * (r = t.length) - 1), n = 0;
          n < r - 2;
          n += 2
        ) {
          if (
            ((u += i),
              (a = parseFloat(t[n + 2])),
              (l = parseFloat(t[n + 3])),
              u > 0.999999)
          )
            for (s = 1 / (Math.floor(u) + 1), o = 1; u > 0.999999;)
              (d +=
                (c + (a - c) * s * o).toFixed(2) +
                "," +
                (h + (l - h) * s * o).toFixed(2) +
                " "),
                u--,
                o++;
          (d += a + "," + l + " "), (c = a), (h = l);
        }
        return d;
      },
      nt = function (t) {
        var e = t[0].match(R) || [],
          i = t[1].match(R) || [],
          n = i.length - e.length;
        n > 0 ? (t[0] = it(e, n)) : (t[1] = it(i, -n));
      },
      rt = function (t) {
        return isNaN(t)
          ? nt
          : function (e) {
            nt(e),
              (e[1] = (function (t, e) {
                if (!e) return t;
                var i,
                  n,
                  r,
                  o = t.match(R) || [],
                  s = o.length,
                  a = "";
                for (
                  "reverse" === e
                    ? ((n = s - 1), (i = -2))
                    : ((n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * s) % s),
                      (i = 2)),
                  r = 0;
                  r < s;
                  r += 2
                )
                  (a += o[n - 1] + "," + o[n] + " "), (n = (n + i) % s);
                return a;
              })(e[1], parseInt(t, 10)));
          };
      },
      ot = function (t, e) {
        for (
          var i,
          n,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f = t.length,
          m = 0.2 * (e || 1);
          --f > -1;

        ) {
          for (
            d = (n = t[f]).isSmooth = n.isSmooth || [0, 0, 0, 0],
            p = n.smoothData = n.smoothData || [0, 0, 0, 0],
            d.length = 4,
            u = n.length - 2,
            l = 6;
            l < u;
            l += 6
          )
            (r = n[l] - n[l - 2]),
              (o = n[l + 1] - n[l - 1]),
              (s = n[l + 2] - n[l]),
              (a = n[l + 3] - n[l + 1]),
              (c = k(o, r)),
              (h = k(a, s)),
              (i = Math.abs(c - h) < m) &&
              ((p[l - 2] = c),
                (p[l + 2] = h),
                (p[l - 1] = O(r * r + o * o)),
                (p[l + 3] = O(s * s + a * a))),
              d.push(i, i, 0, 0, i, i);
          n[u] === n[0] &&
            n[u + 1] === n[1] &&
            ((r = n[0] - n[u - 2]),
              (o = n[1] - n[u - 1]),
              (s = n[2] - n[0]),
              (a = n[3] - n[1]),
              (c = k(o, r)),
              (h = k(a, s)),
              Math.abs(c - h) < m &&
              ((p[u - 2] = c),
                (p[2] = h),
                (p[u - 1] = O(r * r + o * o)),
                (p[3] = O(s * s + a * a)),
                (d[u - 2] = d[u - 1] = !0)));
        }
        return t;
      },
      st = function (t) {
        var e = t.trim().split(" ");
        return {
          x:
            (~t.indexOf("left")
              ? 0
              : ~t.indexOf("right")
                ? 100
                : isNaN(parseFloat(e[0]))
                  ? 50
                  : parseFloat(e[0])) / 100,
          y:
            (~t.indexOf("top")
              ? 0
              : ~t.indexOf("bottom")
                ? 100
                : isNaN(parseFloat(e[1]))
                  ? 50
                  : parseFloat(e[1])) / 100,
        };
      },
      at =
        "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
      lt = function (t, e, i, n) {
        var r,
          o,
          s,
          a = this._origin,
          l = this._eOrigin,
          u = t[i] - a.x,
          c = t[i + 1] - a.y,
          h = O(u * u + c * c),
          d = k(c, u);
        return (
          (u = e[i] - l.x),
          (c = e[i + 1] - l.y),
          (r = k(c, u) - d),
          (o = (s = r) !== s % I ? s + (s < 0 ? j : -j) : s),
          !n && S && Math.abs(o + S.ca) < z && (n = S),
          (this._anchorPT = S =
          {
            _next: this._anchorPT,
            t: t,
            sa: d,
            ca: n && o * n.ca < 0 && Math.abs(o) > B ? r : o,
            sl: h,
            cl: O(u * u + c * c) - h,
            i: i,
          })
        );
      },
      ut = function (t) {
        (C = A()),
          (P = P || (C && C.plugins.morphSVG)),
          C && P
            ? ((E = C.utils.toArray),
              document,
              (P.prototype._tweenRotation = lt),
              (T = 1))
            : t && q("Please gsap.registerPlugin(MorphSVGPlugin)");
      },
      ct = {
        version: "3.12.5",
        name: "morphSVG",
        rawVars: 1,
        register: function (t, e) {
          (C = t), (P = e), ut();
        },
        init: function (t, e, i, n, r) {
          if ((T || ut(1), !e)) return q("invalid shape"), !1;
          var o, s, a, l, u, c, h, d, p, f, m, g, v, y, _, D, C, P, A, k, M, L;
          if (
            (F(e) && (e = e.call(i, n, t, r)),
              "string" == typeof e || e.getBBox || e[0])
          )
            e = { shape: e };
          else if ("object" == typeof e) {
            for (s in ((o = {}), e))
              o[s] = F(e[s]) && "render" !== s ? e[s].call(i, n, t, r) : e[s];
            e = o;
          }
          var O = t.nodeType ? window.getComputedStyle(t) : {},
            I = O.fill + "",
            j = !(
              "none" === I ||
              "0" === (I.match(R) || [])[3] ||
              "evenodd" === O.fillRule
            ),
            z = (e.origin || "50 50").split(",");
          if (
            ((u =
              "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) ||
              "POLYGON" === o),
              "PATH" !== o && !u && !e.prop)
          )
            return q("Cannot morph a <" + o + "> element. " + at), !1;
          if (
            ((s = "PATH" === o ? "d" : "points"), !e.prop && !F(t.setAttribute))
          )
            return !1;
          if (
            ((l = (function (t, e, i) {
              var n, r;
              return (
                (!("string" == typeof t) ||
                  N.test(t) ||
                  (t.match(R) || []).length < 3) &&
                ((n = E(t)[0])
                  ? ((r = (n.nodeName + "").toUpperCase()),
                    e && "PATH" !== r && ((n = w(n, !1)), (r = "PATH")),
                    (t = n.getAttribute("PATH" === r ? "d" : "points") || ""),
                    n === i &&
                    (t = n.getAttributeNS(null, "data-original") || t))
                  : (q("WARNING: invalid morph to: " + t), (t = !1))),
                t
              );
            })(e.shape || e.d || e.points || "", "d" === s, t)),
              u && H.test(l))
          )
            return q("A <" + o + "> cannot accept path data. " + at), !1;
          if (
            ((c = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto"),
              (h = e.map || ct.defaultMap),
              (this._prop = e.prop),
              (this._render = e.render || ct.defaultRender),
              (this._apply =
                "updateTarget" in e ? e.updateTarget : ct.defaultUpdateTarget),
              (this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision)),
              (this._tween = i),
              l)
          ) {
            if (
              ((this._target = t),
                (C = "object" == typeof e.precompile),
                (f = this._prop ? t[this._prop] : t.getAttribute(s)),
                this._prop ||
                t.getAttributeNS(null, "data-original") ||
                t.setAttributeNS(null, "data-original", f),
                "d" === s || this._prop)
            ) {
              if (
                ((f = x(C ? e.precompile[0] : f)),
                  (m = x(C ? e.precompile[1] : l)),
                  !C && !tt(f, m, c, h, j))
              )
                return !1;
              for (
                ("log" !== e.precompile && !0 !== e.precompile) ||
                q('precompile:["' + b(f) + '","' + b(m) + '"]'),
                (M = "linear" !== (e.type || ct.defaultType)) &&
                ((f = ot(f, e.smoothTolerance)),
                  (m = ot(m, e.smoothTolerance)),
                  f.size || X(f),
                  m.size || X(m),
                  (k = st(z[0])),
                  (this._origin = f.origin =
                    { x: f.left + k.x * f.width, y: f.top + k.y * f.height }),
                  z[1] && (k = st(z[1])),
                  (this._eOrigin = {
                    x: m.left + k.x * m.width,
                    y: m.top + k.y * m.height,
                  })),
                this._rawPath = t._gsRawPath = f,
                v = f.length;
                --v > -1;

              )
                for (
                  _ = f[v],
                  D = m[v],
                  d = _.isSmooth || [],
                  p = D.isSmooth || [],
                  y = _.length,
                  S = 0,
                  g = 0;
                  g < y;
                  g += 2
                )
                  (D[g] === _[g] && D[g + 1] === _[g + 1]) ||
                    (M
                      ? d[g] && p[g]
                        ? ((P = _.smoothData),
                          (A = D.smoothData),
                          (L = g + (g === y - 4 ? 7 - y : 5)),
                          (this._controlPT = {
                            _next: this._controlPT,
                            i: g,
                            j: v,
                            l1s: P[g + 1],
                            l1c: A[g + 1] - P[g + 1],
                            l2s: P[L],
                            l2c: A[L] - P[L],
                          }),
                          (a = this._tweenRotation(_, D, g + 2)),
                          this._tweenRotation(_, D, g, a),
                          this._tweenRotation(_, D, L - 1, a),
                          (g += 4))
                        : this._tweenRotation(_, D, g)
                      : ((a = this.add(_, g, _[g], D[g], 0, 0, 0, 0, 0, 1)),
                        (a =
                          this.add(
                            _,
                            g + 1,
                            _[g + 1],
                            D[g + 1],
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                          ) || a)));
            } else
              a = this.add(
                t,
                "setAttribute",
                t.getAttribute(s) + "",
                l + "",
                n,
                r,
                0,
                rt(c),
                s
              );
            M &&
              (this.add(
                this._origin,
                "x",
                this._origin.x,
                this._eOrigin.x,
                0,
                0,
                0,
                0,
                0,
                1
              ),
                (a = this.add(
                  this._origin,
                  "y",
                  this._origin.y,
                  this._eOrigin.y,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                ))),
              a && (this._props.push("morphSVG"), (a.end = l), (a.endProp = s));
          }
          return 1;
        },
        render: function (t, e) {
          for (
            var i,
            n,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            d,
            p,
            f = e._rawPath,
            m = e._controlPT,
            g = e._anchorPT,
            v = e._rnd,
            y = e._target,
            _ = e._pt;
            _;

          )
            _.r(t, _.d), (_ = _._next);
          if (1 === t && e._apply)
            for (_ = e._pt; _;)
              _.end &&
                (e._prop
                  ? (y[e._prop] = _.end)
                  : y.setAttribute(_.endProp, _.end)),
                (_ = _._next);
          else if (f) {
            for (; g;)
              (s = g.sa + t * g.ca),
                (o = g.sl + t * g.cl),
                (g.t[g.i] = e._origin.x + M(s) * o),
                (g.t[g.i + 1] = e._origin.y + L(s) * o),
                (g = g._next);
            for (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; m;)
              (p =
                (a = m.i) + (a === (r = f[m.j]).length - 4 ? 7 - r.length : 5)),
                (s = k(r[p] - r[a + 1], r[p - 1] - r[a])),
                (h = L(s)),
                (d = M(s)),
                (u = r[a + 2]),
                (c = r[a + 3]),
                (o = m.l1s + n * m.l1c),
                (r[a] = u - d * o),
                (r[a + 1] = c - h * o),
                (o = m.l2s + n * m.l2c),
                (r[p - 1] = u + d * o),
                (r[p] = c + h * o),
                (m = m._next);
            if (((y._gsRawPath = f), e._apply)) {
              for (i = "", " ", l = 0; l < f.length; l++)
                for (
                  o = (r = f[l]).length,
                  i +=
                  "M" +
                  ((r[0] * v) | 0) / v +
                  " " +
                  ((r[1] * v) | 0) / v +
                  " C",
                  a = 2;
                  a < o;
                  a++
                )
                  i += ((r[a] * v) | 0) / v + " ";
              e._prop ? (y[e._prop] = i) : y.setAttribute("d", i);
            }
          }
          e._render && f && e._render.call(e._tween, f, y);
        },
        kill: function (t) {
          this._pt = this._rawPath = 0;
        },
        getRawPath: function (t) {
          var e,
            i = (t = (m(t) && u.test(t) && document.querySelector(t)) || t)
              .getAttribute
              ? t
              : 0;
          return i && (t = t.getAttribute("d"))
            ? (i._gsPath || (i._gsPath = {}),
              (e = i._gsPath[t]) && !e._dirty ? e : (i._gsPath[t] = x(t)))
            : t
              ? m(t)
                ? x(t)
                : g(t[0])
                  ? [t]
                  : t
              : console.warn(
                "Expecting a <path> element or an SVG path data string"
              );
        },
        stringToRawPath: x,
        rawPathToString: b,
        normalizeStrings: function (t, e, i) {
          var n = i.shapeIndex,
            r = i.map,
            o = [t, e];
          return et(o, n, r), o;
        },
        pathFilter: et,
        pointsFilter: nt,
        getTotalSize: X,
        equalizeSegmentQuantity: tt,
        convertToPath: function (t, e) {
          return E(t).map(function (t) {
            return w(t, !1 !== e);
          });
        },
        defaultType: "linear",
        defaultUpdateTarget: !0,
        defaultMap: "size",
      };
    A() && C.registerPlugin(ct);
    /*!
     * strings: 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ht =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var dt,
      pt,
      ft,
      mt,
      gt,
      vt,
      yt = /(?:\r|\n|\t\t)/g,
      _t = /(?:\s\s+)/g,
      wt = String.fromCharCode(160),
      Dt = function (t) {
        (dt = document),
          (pt = window),
          (mt =
            mt ||
            t ||
            pt.gsap ||
            console.warn("Please gsap.registerPlugin(SplitText)")) &&
          ((vt = mt.utils.toArray),
            (gt = mt.core.context || function () { }),
            (ft = 1));
      },
      xt = function (t) {
        return pt.getComputedStyle(t);
      },
      bt = function (t) {
        return "absolute" === t.position || !0 === t.absolute;
      },
      Ct = function (t, e) {
        for (var i, n = e.length; --n > -1;)
          if (((i = e[n]), t.substr(0, i.length) === i)) return i.length;
      },
      Et = function (t, e) {
        void 0 === t && (t = "");
        var i = ~t.indexOf("++"),
          n = 1;
        return (
          i && (t = t.split("++").join("")),
          function () {
            return (
              "<" +
              e +
              " style='position:relative;display:inline-block;'" +
              (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
            );
          }
        );
      },
      St = function t(e, i, n) {
        var r = e.nodeType;
        if (1 === r || 9 === r || 11 === r)
          for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
        else
          (3 !== r && 4 !== r) || (e.nodeValue = e.nodeValue.split(i).join(n));
      },
      Tt = function (t, e) {
        for (var i = e.length; --i > -1;) t.push(e[i]);
      },
      Pt = function (t, e, i) {
        for (var n; t && t !== e;) {
          if ((n = t._next || t.nextSibling))
            return n.textContent.charAt(0) === i;
          t = t.parentNode || t._parent;
        }
      },
      At = function t(e) {
        var i,
          n,
          r = vt(e.childNodes),
          o = r.length;
        for (i = 0; i < o; i++)
          (n = r[i])._isSplit
            ? t(n)
            : i && n.previousSibling && 3 === n.previousSibling.nodeType
              ? ((n.previousSibling.nodeValue +=
                3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue),
                e.removeChild(n))
              : 3 !== n.nodeType &&
              (e.insertBefore(n.firstChild, n), e.removeChild(n));
      },
      Ft = function (t, e) {
        return parseFloat(e[t]) || 0;
      },
      kt = function (t, e, i, n, r, o, s) {
        var a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v,
          y,
          _ = xt(t),
          w = Ft("paddingLeft", _),
          D = -999,
          x = Ft("borderBottomWidth", _) + Ft("borderTopWidth", _),
          b = Ft("borderLeftWidth", _) + Ft("borderRightWidth", _),
          C = Ft("paddingTop", _) + Ft("paddingBottom", _),
          E = Ft("paddingLeft", _) + Ft("paddingRight", _),
          S = Ft("fontSize", _) * (e.lineThreshold || 0.2),
          T = _.textAlign,
          P = [],
          A = [],
          F = [],
          k = e.wordDelimiter || " ",
          M = e.tag ? e.tag : e.span ? "span" : "div",
          L = e.type || e.split || "chars,words,lines",
          O = r && ~L.indexOf("lines") ? [] : null,
          I = ~L.indexOf("words"),
          j = ~L.indexOf("chars"),
          z = bt(e),
          B = e.linesClass,
          R = ~(B || "").indexOf("++"),
          N = [],
          H = "flex" === _.display,
          q = t.style.display;
        for (
          R && (B = B.split("++").join("")),
          H && (t.style.display = "block"),
          u = (l = t.getElementsByTagName("*")).length,
          h = [],
          a = 0;
          a < u;
          a++
        )
          h[a] = l[a];
        if (O || z)
          for (a = 0; a < u; a++)
            ((d = (c = h[a]).parentNode === t) || z || (j && !I)) &&
              ((y = c.offsetTop),
                O &&
                d &&
                Math.abs(y - D) > S &&
                ("BR" !== c.nodeName || 0 === a) &&
                ((p = []), O.push(p), (D = y)),
                z &&
                ((c._x = c.offsetLeft),
                  (c._y = y),
                  (c._w = c.offsetWidth),
                  (c._h = c.offsetHeight)),
                O &&
                (((c._isSplit && d) ||
                  (!j && d) ||
                  (I && d) ||
                  (!I &&
                    c.parentNode.parentNode === t &&
                    !c.parentNode._isSplit)) &&
                  (p.push(c), (c._x -= w), Pt(c, t, k) && (c._wordEnd = !0)),
                  "BR" === c.nodeName &&
                  ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                    0 === a) &&
                  O.push([])));
        for (a = 0; a < u; a++)
          if (((d = (c = h[a]).parentNode === t), "BR" !== c.nodeName))
            if (
              (z &&
                ((m = c.style),
                  I ||
                  d ||
                  ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                  (m.left = c._x + "px"),
                  (m.top = c._y + "px"),
                  (m.position = "absolute"),
                  (m.display = "block"),
                  (m.width = c._w + 1 + "px"),
                  (m.height = c._h + "px")),
                !I && j)
            )
              if (c._isSplit)
                for (
                  c._next = l = c.nextSibling, c.parentNode.appendChild(c);
                  l && 3 === l.nodeType && " " === l.textContent;

                )
                  (c._next = l.nextSibling),
                    c.parentNode.appendChild(l),
                    (l = l.nextSibling);
              else
                c.parentNode._isSplit
                  ? ((c._parent = c.parentNode),
                    !c.previousSibling &&
                    c.firstChild &&
                    (c.firstChild._isFirst = !0),
                    c.nextSibling &&
                    " " === c.nextSibling.textContent &&
                    !c.nextSibling.nextSibling &&
                    N.push(c.nextSibling),
                    (c._next =
                      c.nextSibling && c.nextSibling._isFirst
                        ? null
                        : c.nextSibling),
                    c.parentNode.removeChild(c),
                    h.splice(a--, 1),
                    u--)
                  : d ||
                  ((y = !c.nextSibling && Pt(c.parentNode, t, k)),
                    c.parentNode._parent && c.parentNode._parent.appendChild(c),
                    y && c.parentNode.appendChild(dt.createTextNode(" ")),
                    "span" === M && (c.style.display = "inline"),
                    P.push(c));
            else
              c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                ? A.push(c)
                : j &&
                !c._isSplit &&
                ("span" === M && (c.style.display = "inline"), P.push(c));
          else
            O || z
              ? (c.parentNode && c.parentNode.removeChild(c),
                h.splice(a--, 1),
                u--)
              : I || t.appendChild(c);
        for (a = N.length; --a > -1;) N[a].parentNode.removeChild(N[a]);
        if (O) {
          for (
            z &&
            ((g = dt.createElement(M)),
              t.appendChild(g),
              (v = g.offsetWidth + "px"),
              (y = g.offsetParent === t ? 0 : t.offsetLeft),
              t.removeChild(g)),
            m = t.style.cssText,
            t.style.cssText = "display:none;";
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          for (f = " " === k && (!z || (!I && !j)), a = 0; a < O.length; a++) {
            for (
              p = O[a],
              (g = dt.createElement(M)).style.cssText =
              "display:block;text-align:" +
              T +
              ";position:" +
              (z ? "absolute;" : "relative;"),
              B && (g.className = B + (R ? a + 1 : "")),
              F.push(g),
              u = p.length,
              l = 0;
              l < u;
              l++
            )
              "BR" !== p[l].nodeName &&
                ((c = p[l]),
                  g.appendChild(c),
                  f && c._wordEnd && g.appendChild(dt.createTextNode(" ")),
                  z &&
                  (0 === l &&
                    ((g.style.top = c._y + "px"),
                      (g.style.left = w + y + "px")),
                    (c.style.top = "0px"),
                    y && (c.style.left = c._x - y + "px")));
            0 === u
              ? (g.innerHTML = "&nbsp;")
              : I || j || (At(g), St(g, String.fromCharCode(160), " ")),
              z && ((g.style.width = v), (g.style.height = c._h + "px")),
              t.appendChild(g);
          }
          t.style.cssText = m;
        }
        z &&
          (s > t.clientHeight &&
            ((t.style.height = s - C + "px"),
              t.clientHeight < s && (t.style.height = s + x + "px")),
            o > t.clientWidth &&
            ((t.style.width = o - E + "px"),
              t.clientWidth < o && (t.style.width = o + b + "px"))),
          H && (q ? (t.style.display = q) : t.style.removeProperty("display")),
          Tt(i, P),
          I && Tt(n, A),
          Tt(r, F);
      },
      Mt = function (t, e, i, n) {
        var r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d = e.tag ? e.tag : e.span ? "span" : "div",
          p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
          f = bt(e),
          m = e.wordDelimiter || " ",
          g = function (t) {
            return t === m || (t === wt && " " === m);
          },
          v = " " !== m ? "" : f ? "&#173; " : " ",
          y = "</" + d + ">",
          _ = 1,
          w = e.specialChars
            ? "function" == typeof e.specialChars
              ? e.specialChars
              : Ct
            : null,
          D = dt.createElement("div"),
          x = t.parentNode;
        for (
          x.insertBefore(D, t),
          D.textContent = t.nodeValue,
          x.removeChild(t),
          c =
          -1 !==
          (r = (function t(e) {
            var i = e.nodeType,
              n = "";
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += t(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
            return n;
          })((t = D))).indexOf("<"),
          !1 !== e.reduceWhiteSpace &&
          (r = r.replace(_t, " ").replace(yt, "")),
          c && (r = r.split("<").join("{{LT}}")),
          l = r.length,
          o = (" " === r.charAt(0) ? v : "") + i(),
          s = 0;
          s < l;
          s++
        )
          if (((u = r.charAt(s)), w && (h = w(r.substr(s), e.specialChars))))
            (u = r.substr(s, h || 1)),
              (o += p && " " !== u ? n() + u + "</" + d + ">" : u),
              (s += h - 1);
          else if (g(u) && !g(r.charAt(s - 1)) && s) {
            for (o += _ ? y : "", _ = 0; g(r.charAt(s + 1));) (o += v), s++;
            s === l - 1
              ? (o += v)
              : ")" !== r.charAt(s + 1) && ((o += v + i()), (_ = 1));
          } else
            "{" === u && "{{LT}}" === r.substr(s, 6)
              ? ((o += p ? n() + "{{LT}}</" + d + ">" : "{{LT}}"), (s += 5))
              : (u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319) ||
                (r.charCodeAt(s + 1) >= 65024 && r.charCodeAt(s + 1) <= 65039)
                ? ((a = ((r.substr(s, 12).split(ht) || [])[1] || "").length || 2),
                  (o +=
                    p && " " !== u
                      ? n() + r.substr(s, a) + "</" + d + ">"
                      : r.substr(s, a)),
                  (s += a - 1))
                : (o += p && " " !== u ? n() + u + "</" + d + ">" : u);
        (t.outerHTML = o + (_ ? y : "")), c && St(x, "{{LT}}", "<");
      },
      Lt = function t(e, i, n, r) {
        var o,
          s,
          a = vt(e.childNodes),
          l = a.length,
          u = bt(i);
        if (3 !== e.nodeType || l > 1) {
          for (i.absolute = !1, o = 0; o < l; o++)
            ((s = a[o])._next = s._isFirst = s._parent = s._wordEnd = null),
              (3 !== s.nodeType || /\S+/.test(s.nodeValue)) &&
              (u &&
                3 !== s.nodeType &&
                "inline" === xt(s).display &&
                ((s.style.display = "inline-block"),
                  (s.style.position = "relative")),
                (s._isSplit = !0),
                t(s, i, n, r));
          return (i.absolute = u), void (e._isSplit = !0);
        }
        Mt(e, i, n, r);
      },
      Ot = (function () {
        function t(t, e) {
          ft || Dt(),
            (this.elements = vt(t)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = e || {}),
            gt(this),
            this.split(e);
        }
        var e = t.prototype;
        return (
          (e.split = function (t) {
            this.isSplit && this.revert(),
              (this.vars = t = t || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                0);
            for (
              var e,
              i,
              n,
              r = this.elements.length,
              o = t.tag ? t.tag : t.span ? "span" : "div",
              s = Et(t.wordsClass, o),
              a = Et(t.charsClass, o);
              --r > -1;

            )
              (n = this.elements[r]),
                (this._originals[r] = {
                  html: n.innerHTML,
                  style: n.getAttribute("style"),
                }),
                (e = n.clientHeight),
                (i = n.clientWidth),
                Lt(n, t, s, a),
                kt(n, t, this.chars, this.words, this.lines, i, e);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (e.revert = function () {
            var t = this._originals;
            if (!t) throw "revert() call wasn't scoped properly.";
            return (
              this.elements.forEach(function (e, i) {
                (e.innerHTML = t[i].html), e.setAttribute("style", t[i].style);
              }),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this.isSplit = !1),
              this
            );
          }),
          (t.create = function (e, i) {
            return new t(e, i);
          }),
          t
        );
      })();
    (Ot.version = "3.12.5"), (Ot.register = Dt);
    var It,
      jt,
      zt,
      Bt,
      Rt,
      Nt,
      Ht,
      qt,
      Zt = i(5),
      Qt = i.n(Zt),
      Xt = function () {
        return "undefined" != typeof window;
      },
      Yt = function () {
        return It || (Xt() && (It = window.gsap) && It.registerPlugin && It);
      },
      Wt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      Ut = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      Vt = function (t) {
        return Math.round(1e4 * t) / 1e4;
      },
      Gt = function (t) {
        return parseFloat(t) || 0;
      },
      Kt = function (t, e) {
        var i = Gt(t);
        return ~t.indexOf("%") ? (i / 100) * e : i;
      },
      $t = function (t, e) {
        return Gt(t.getAttribute(e));
      },
      Jt = Math.sqrt,
      te = function (t, e, i, n, r, o) {
        return Jt(
          Math.pow((Gt(i) - Gt(t)) * r, 2) + Math.pow((Gt(n) - Gt(e)) * o, 2)
        );
      },
      ee = function (t) {
        return console.warn(t);
      },
      ie = function (t) {
        return "non-scaling-stroke" === t.getAttribute("vector-effect");
      },
      ne = function (t) {
        if (!(t = jt(t)[0])) return 0;
        var e,
          i,
          n,
          r,
          o,
          s,
          a,
          l = t.tagName.toLowerCase(),
          u = t.style,
          c = 1,
          h = 1;
        ie(t) &&
          ((h = t.getScreenCTM()),
            (c = Jt(h.a * h.a + h.b * h.b)),
            (h = Jt(h.d * h.d + h.c * h.c)));
        try {
          i = t.getBBox();
        } catch (t) {
          ee(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
          );
        }
        var d = i || { x: 0, y: 0, width: 0, height: 0 },
          p = d.x,
          f = d.y,
          m = d.width,
          g = d.height;
        if (
          ((i && (m || g)) ||
            !Ut[l] ||
            ((m = $t(t, Ut[l][0])),
              (g = $t(t, Ut[l][1])),
              "rect" !== l && "line" !== l && ((m *= 2), (g *= 2)),
              "line" === l &&
              ((p = $t(t, "x1")),
                (f = $t(t, "y1")),
                (m = Math.abs(m - p)),
                (g = Math.abs(g - f)))),
            "path" === l)
        )
          (r = u.strokeDasharray),
            (u.strokeDasharray = "none"),
            (e = t.getTotalLength() || 0),
            Vt(c) !== Vt(h) &&
            !Nt &&
            (Nt = 1) &&
            ee(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
            (e *= (c + h) / 2),
            (u.strokeDasharray = r);
        else if ("rect" === l) e = 2 * m * c + 2 * g * h;
        else if ("line" === l) e = te(p, f, p + m, f + g, c, h);
        else if ("polyline" === l || "polygon" === l)
          for (
            n = t.getAttribute("points").match(Wt) || [],
            "polygon" === l && n.push(n[0], n[1]),
            e = 0,
            o = 2;
            o < n.length;
            o += 2
          )
            e += te(n[o - 2], n[o - 1], n[o], n[o + 1], c, h) || 0;
        else
          ("circle" !== l && "ellipse" !== l) ||
            ((s = (m / 2) * c),
              (a = (g / 2) * h),
              (e = Math.PI * (3 * (s + a) - Jt((3 * s + a) * (s + 3 * a)))));
        return e || 0;
      },
      re = function (t, e) {
        if (!(t = jt(t)[0])) return [0, 0];
        e || (e = ne(t) + 1);
        var i = zt.getComputedStyle(t),
          n = i.strokeDasharray || "",
          r = Gt(i.strokeDashoffset),
          o = n.indexOf(",");
        return (
          o < 0 && (o = n.indexOf(" ")),
          (n = o < 0 ? e : Gt(n.substr(0, o))) > e && (n = e),
          [-r || 0, n - r || 0]
        );
      },
      oe = function () {
        Xt() &&
          (document,
            (zt = window),
            (Rt = It = Yt()),
            (jt = It.utils.toArray),
            (Ht = It.core.getStyleSaver),
            (qt = It.core.reverting || function () { }),
            (Bt = -1 !== ((zt.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      se = {
        version: "3.12.5",
        name: "drawSVG",
        register: function (t) {
          (It = t), oe();
        },
        init: function (t, e, i, n, r) {
          if (!t.getBBox) return !1;
          Rt || oe();
          var o,
            s,
            a,
            l = ne(t);
          return (
            (this.styles =
              Ht && Ht(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
            (this.tween = i),
            (this._style = t.style),
            (this._target = t),
            e + "" == "true"
              ? (e = "0 100%")
              : e
                ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                : (e = "0 0"),
            (s = (function (t, e, i) {
              var n,
                r,
                o = t.indexOf(" ");
              return (
                o < 0
                  ? ((n = void 0 !== i ? i + "" : t), (r = t))
                  : ((n = t.substr(0, o)), (r = t.substr(o + 1))),
                (n = Kt(n, e)) > (r = Kt(r, e)) ? [r, n] : [n, r]
              );
            })(e, l, (o = re(t, l))[0])),
            (this._length = Vt(l)),
            (this._dash = Vt(o[1] - o[0])),
            (this._offset = Vt(-o[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              Vt(s[1] - s[0]),
              0,
              0,
              0,
              0,
              0,
              1
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              Vt(-s[0]),
              0,
              0,
              0,
              0,
              0,
              1
            )),
            Bt &&
            (a = zt.getComputedStyle(t)).strokeLinecap !== a.strokeLinejoin &&
            ((s = Gt(a.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", s, s + 0.01)),
            (this._live = ie(t) || ~(e + "").indexOf("live")),
            (this._nowrap = ~(e + "").indexOf("nowrap")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (t, e) {
          if (e.tween._time || !qt()) {
            var i,
              n,
              r,
              o,
              s = e._pt,
              a = e._style;
            if (s) {
              for (
                e._live &&
                (i = ne(e._target)) !== e._length &&
                ((n = i / e._length),
                  (e._length = i),
                  e._offsetPT && ((e._offsetPT.s *= n), (e._offsetPT.c *= n)),
                  e._dashPT
                    ? ((e._dashPT.s *= n), (e._dashPT.c *= n))
                    : (e._dash *= n));
                s;

              )
                s.r(t, s.d), (s = s._next);
              (r = e._dash || (t && 1 !== t && 1e-4) || 0),
                (i = e._length - r + 0.1),
                (o = e._offset),
                r &&
                o &&
                r + Math.abs(o % e._length) > e._length - 0.2 &&
                (o += o < 0 ? 0.1 : -0.1) &&
                (i += 0.1),
                (a.strokeDashoffset = r ? o : o + 0.001),
                (a.strokeDasharray =
                  i < 0.2
                    ? "none"
                    : r
                      ? r + "px," + (e._nowrap ? 999999 : i) + "px"
                      : "0px, 999999px");
            }
          } else e.styles.revert();
        },
        getLength: ne,
        getPosition: re,
      };
    function ae(t) {
      let e = r.a.matchMedia(),
        i = r.a.timeline({ repeat: -1, repeatDelay: 1.2 }),
        n = jQuery(t.next.container).find(".js-homeSlide"),
        s = 0;
      r.a.utils.toArray(n).forEach((t) => {
        var e = ".js-bannerTextTop-" + (s + 1),
          o = ".js-bannerTextBottom-" + (s + 1);
        const a = r.a.timeline({ defaults: { ease: "power3.inOut" } });
        a.to(t, { opacity: 1, duration: 1.2 }),
          a.to(e, { duration: 1.2, y: 0 }, "-=1.2"),
          a.to(o, { duration: 1.2, y: 0 }, "-=1.2"),
          s + 1 != n.length &&
          (a.to(e, { duration: 1.2, y: "100%" }, 3.2),
            a.to(o, { duration: 1.2, y: "100%" }, 3.2)),
          i.add(a, 3.2 * s),
          s++;
      });
      let a = jQuery(t.next.container).find(".js-404");
      function l(t, e) {
        let i = r.a.timeline({ paused: !0, defaults: { ease: "none" } }),
          n = t.querySelector(".js-header__text"),
          s = t.querySelector("img"),
          a = t.querySelector(".js-imgHolder");
        if ("small" === e || "medium" === e) {
          var l =
            0.6 * a.clientHeight - (n.clientHeight - 0.6 * a.clientHeight);
          if (n.clientHeight < window.innerHeight) {
            var u = "+=40%";
            "top top", i.to(s, { scale: "1.13", duration: 2 }, 0);
          } else {
            u = "+=80%";
            "top top",
              i.to(n, { translateY: l + "px", duration: 2 }),
              i.to(s, { scale: "1.13", duration: 2 }, 0);
          }
        } else if ("medium" === e)
          i.to(n, { translateY: "-55%", duration: 2 }),
            i.to(s, { scale: "1.08", duration: 2 }, 0);
        else if ("large" === e) {
          l = s.clientHeight - t.clientHeight;
          i.to(s, { translateY: "-" + l + "px", duration: 2 }, 0);
        }
        o.a.create({
          trigger: a,
          start: "top top",
          end: "large" === e ? "+=100%" : u,
          pin: "large" !== e && a,
          pinSpacing: !0,
          markers: !1,
          onUpdate: (t) => {
            i.progress(t.progress.toFixed(16));
          },
        });
      }
      r.a.utils.toArray(a).forEach((t) => {
        let e = t.querySelectorAll(".js-circle"),
          i = t.querySelectorAll(".js-circle_second");
        function n(t) {
          let e = 20 * Math.random() + 40;
          e *= Math.random() < 0.5 ? -1 : 1;
          let i = t + e;
          return i < -90 ? (i = -90) : i > 90 && (i = 90), i;
        }
        !(function t(o) {
          let s = n(o),
            a = n(o);
          r.a.to(e, {
            rotation: s,
            duration: 2,
            ease: "power1.inOut",
            transformOrigin: "center",
            overwrite: !0,
            onComplete: () => t(s),
          }),
            r.a.to(i, {
              rotation: a,
              duration: 2,
              ease: "power1.inOut",
              transformOrigin: "center",
              overwrite: !0,
              onComplete: () => t(a),
            });
        })(0);
      });
      let u = jQuery(t.next.container).find(".js-header");
      e.add("(max-width: 666px)", () =>
        r.a.utils.toArray(u).forEach((t) => l(t, "small"))
      ),
        e.add(
          "(min-width: 667px) and (max-width: 991px) and (orientation: portrait)",
          () => r.a.utils.toArray(u).forEach((t) => l(t, "medium"))
        ),
        e.add("(min-width: 992px)", () =>
          r.a.utils.toArray(u).forEach((t) => l(t, "large"))
        );
      let c = jQuery(t.next.container).find(".js-lineImage");
      function h(t, e) {
        const i = t.querySelectorAll(".js-hexaFill"),
          n = t.querySelectorAll(".js-innerFill"),
          s = t.querySelectorAll(".js-modelPiece"),
          a = (t.querySelectorAll(".js-upperTitle"), t.querySelectorAll(".o-approach__intro h2")),
          l = t.querySelectorAll(".js-approach__sticky"),
          u = t.querySelectorAll(".js-modelHolder"),
          c = t.querySelectorAll(".js-introText"),
          h = (r.a.timeline({ paused: !0 }), r.a.timeline({ paused: !0, defaults: { ease: "none" } })),
          d = r.a.timeline({ delay: 2, defaults: { ease: "none" } }),
          p = r.a.timeline({ defaults: { ease: "none" } }),
          f = r.a.timeline({ defaults: { ease: "none" } }),
          m = r.a.timeline({ defaults: { ease: "none" } }),
          g = r.a.timeline({ defaults: { ease: "none" } });
        r.a.set([i, n], { drawSVG: "0.3% 0.3%" }),
          r.a.set(s, { rotation: "-60" }),
          e && h.add(f, 0),
          t.classList.contains("-extra") ? (h.add(d, 0.7), h.add(p, 0.7), h.add(m, 0.7)) : (h.add(d, 0), h.add(p, 0), h.add(m, 0));
        t.classList.contains("-extra") &&
          e &&
          (r.a.set(l, { opacity: "0" }),
            f.set(l, { translateX: "100%" }),
            f.set(l, { opacity: "1" }),
            f.to(a, { fontSize: "1.35416vw", lineHeight: "9vh", translateX: "12px", duration: 1.6, ease: "none" }),
            f.to(l, { translateX: "0", duration: 1.6, ease: "none", delay: "-1.6" }),
            f.to(c, { translateY: "-600%", force3D: !1, duration: 11.96, ease: "none", delay: "-0.85" })),
          [0, 60, 120, 180, 240].forEach((t) => {
            d.to(s, { rotation: t, translateY: "-50%", duration: 2 });
          });
        if (
          (["0.3% 16.9%", "0.3% 33.5%", "0.3% 50.1%", "0.3% 66.8%", "0.3% 83.4%", "0.3% 100.3%"].forEach((t) => {
            p.to([i, n], { duration: 2, drawSVG: t });
          }),
            t.querySelectorAll(".js-stepText").forEach(function (t, e) {
              1 == e || 2 == e || 3 == e
                ? (m.to(t, { attr: { y: "+=325" }, duration: 2, delay: "-2" }), m.set(t, { attr: { y: "-=650" } }), m.to(t, { attr: { y: "+=325" }, duration: 2 }))
                : (m.to(t, { attr: { y: "-=325" }, duration: 2, delay: "-2" }), m.set(t, { attr: { y: "+=650" } }), m.to(t, { attr: { y: "-=325" }, duration: 2 }));
            }),
            0 == e ? h.add(g, 16) : t.classList.contains("-extra") ? h.add(g, 13.6) : h.add(g, 12),
            e
              ? (g.to(".o-modelShapes__video", { opacity: "1", duration: 1.2, ease: "none" }),
                g.to(".js-removeEnd", { opacity: "0", duration: 0.6, ease: "none" }),
                g.set(".a-model__overlay", { display: "none" }),
                g.to(l, { width: "100%", duration: 4.6, delay: "-1.6", ease: "none" }),
                g.to(c, { translateX: "-100%", duration: 4.6, delay: "-4.6", ease: "none" }),
                g.to(".o-modelShapes__titleLine", { scale: "1", opacity: 1, translateY: "0%", duration: 2, stagger: "0.3", delay: "-4.6", ease: "none" }),
                g.to(".o-approach__modelHolder", { width: "120vw", height: "137.88vw", duration: 4.6, delay: "0", ease: "none" }))
              : (g.fromTo(u, { height: "50lvh" }, { height: "100lvh", duration: 2.2, ease: "none" }),
                g.to(".o-modelShapes__video", { opacity: "1", duration: 1.2, delay: 3, ease: "none" }),
                g.to(".js-removeEnd", { opacity: "0", duration: 0.6, ease: "none" }),
                g.to(".o-modelShapes__titleLine", { scale: "1", opacity: 1, translateY: "0%", duration: 2, stagger: "0.3", ease: "none" }),
                g.to(u, { scale: "1.2", duration: 1.6, delay: "-1.6", ease: "none" })),
            0 == e)
        )
          var v = "bottom bottom",
            y = l,
            _ = !1,
            w = !1;
        else {
          (v = "+=500%"), (y = !0), (_ = !0), (w = !1);
          if (t.classList.contains("-extra")) (v = "+=800%"), (y = !0), (w = [0.1176, 0.2045, 0.2913, 0.378, 0.4654, 0.554, 0.8612, 1]);
        }
        o.a.create({
          trigger: t,
          start: "top top",
          end: v,
          pin: y,
          pinSpacing: _,
          snap: w,
          markers: !1,
          onEnter: (t) => {
            let { progress: e, direction: i, isActive: n } = t;
            r.a.to("body", { background: "#000000", ease: "power4.inOut", duration: 0.2, overwrite: !0 });
          },
          onLeave: (t) => {
            let { progress: e, direction: i, isActive: n } = t;
            r.a.to("body", { background: "#000", ease: "power4.inOut", duration: 0.2, overwrite: !0 });
          },
          onEnterBack: (t) => {
            let { progress: e, direction: i, isActive: n } = t;
            r.a.to("body", { background: "#000000", ease: "power4.inOut", duration: 0.2, overwrite: !0 });
          },
          onLeaveBack: (t) => {
            let { progress: e, direction: i, isActive: n } = t;
            r.a.to("body", { background: "#000", ease: "power4.inOut", duration: 0.2, overwrite: !0 });
          },
          onUpdate: (t) => {
            e && h.progress(t.progress.toFixed(8));
          },
        }),
          0 == e &&
          o.a.create({
            trigger: t,
            start: "top center",
            end: "bottom bottom",
            markers: !1,
            onUpdate: (t) => {
              h.progress(t.progress.toFixed(8));
            },
          });
      }
      r.a.utils.toArray(c).forEach((t) => {
        const e = r.a.timeline({ paused: !0, defaults: { ease: "none" } });
        var i = t.querySelectorAll(".o-intro__img");
        if (window.innerWidth > 991) var n = "8.8vw";
        else n = "8.8vw";
        e.to(i, { width: n, duration: 1 }),
          o.a.create({
            trigger: t,
            endTrigger: t,
            start: "top bottom",
            end: "bottom center",
            markers: !1,
            onUpdate: (t) => {
              e.progress(t.progress.toFixed(8));
            },
          });
      });
      let d = jQuery(t.next.container).find(".js-approach");
      e.add("(max-width: 991px)", () =>
        r.a.utils.toArray(d).forEach((t) => h(t, !1))
      ),
        e.add("(min-width: 992px)", () =>
          r.a.utils.toArray(d).forEach((t) => h(t, !0))
        );
      let p = jQuery(t.next.container).find(".js-featured__text");
      e.add("(max-width: 991px)", () => {
        r.a.utils.toArray(p).forEach((t) => {
          let e = t.closest(".js-featured");
          o.a.create({
            trigger: t,
            start: "bottom bottom",
            endTrigger: e,
            end: "bottom bottom",
            pin: !0,
            pinSpacing: !0,
            markers: !1,
          });
        });
      });
      let f = jQuery(t.next.container).find(".js-featured");
      e.add("(min-width: 992px)", () => {
        r.a.utils.toArray(f).forEach((t) => {
          t.querySelectorAll(".m-featured__text");
          var e = t.querySelectorAll(".m-featured__img"),
            i = t.querySelectorAll(".m-featured__img img"),
            n = t.querySelectorAll(
              ".m-featured__textHolder .a-tag, .m-featured__textHolder .m-post__title, .m-featured__textHolder .js-par"
            );
          const s = r.a.timeline({ paused: !0, defaults: { ease: "none" } });
          s.to(i, { height: "250%", duration: 0.6 }),
            s.to(i, { width: "200%", duration: 1.4 }),
            s.to(n, { color: "#ffffff", duration: 0.2 }, 1.5),
            o.a.create({
              trigger: t,
              start: "top top+=60%",
              end: "+=200%",
              pin: !0,
              pinSpacing: !0,
              markers: !1,
              onUpdate: (t) => {
                s.progress(t.progress.toFixed(12));
              },
              onLeave: (t) => {
                const n = t.start + (window.innerHeight / 10) * 6;
                t.scroll(n),
                  t.kill(),
                  r.a.set(e, { height: "100vh" }),
                  r.a.set(i, { height: "100%" }),
                  o.a.refresh(),
                  window.scrollTo(0, n);
              },
            });
        });
      });
      let m = jQuery(t.next.container).find(".js-list");
      e.add("(max-width: 991px)", () => {
        r.a.utils.toArray(m).forEach((t) => {
          let e = r.a.timeline({ paused: !0, defaults: { ease: "none" } }),
            i = t.querySelectorAll(".js-list__inner"),
            n = t.querySelectorAll(".js-list__header");
          var s = i[0].offsetHeight + n[0].offsetHeight - window.innerHeight;
          e.to(i, { translateY: "-" + s + "px", duration: 2 });
          var a = "+=" + (s / 425) * 100 + "%";
          o.a.create({
            trigger: t,
            start: "top top",
            end: a,
            pin: !0,
            pinSpacing: !0,
            markers: !1,
            onUpdate: (t) => {
              e.progress(t.progress.toFixed(8));
            },
            onEnter: (t) => {
              let { progress: e, direction: i, isActive: n } = t;
              r.a.to("body", {
                background: "#000000",
                ease: "power4.inOut",
                duration: 0.2,
                overwrite: !0,
              });
            },
            onLeave: (t) => {
              let { progress: e, direction: i, isActive: n } = t;
              r.a.to("body", {
                background: "#454545",
                ease: "power4.inOut",
                duration: 0.2,
                overwrite: !0,
              });
            },
            onEnterBack: (t) => {
              let { progress: e, direction: i, isActive: n } = t;
              r.a.to("body", {
                background: "#000000",
                ease: "power4.inOut",
                duration: 0.2,
                overwrite: !0,
              });
            },
            onLeaveBack: (t) => {
              let { progress: e, direction: i, isActive: n } = t;
              r.a.to("body", {
                background: "#454545",
                ease: "power4.inOut",
                duration: 0.2,
                overwrite: !0,
              });
            },
          });
        });
      });
      let g = jQuery(t.next.container).find(".js-gallery");
      r.a.utils.toArray(g).forEach((t) => {
        let e = r.a.timeline({ paused: !0, defaults: { ease: "none" } }),
          i = t.querySelectorAll(".js-gallery__right"),
          n = t.querySelectorAll(".js-gallery__left");
        e.fromTo(n, { translateX: "-5.5%" }, { translateX: "5.5%", duration: 2 }),
          e.fromTo(
            i,
            { translateX: "5.5%" },
            { translateX: "-5.5%", duration: 2 },
            0
          ),
          o.a.create({
            trigger: t,
            start: "top bottom",
            end: "bottom top",
            pin: !1,
            markers: !1,
            onUpdate: (t) => {
              e.progress(t.progress.toFixed(8));
            },
          });
      });
      let v = jQuery(t.next.container).find(".js-titleScroll");
      r.a.utils.toArray(v).forEach((t) => {
        const e = r.a.timeline({ paused: !0 });
        var i = t.querySelectorAll(".js-line__inner"),
          n = t.querySelectorAll(".js-tag"),
          s = t.querySelectorAll(".js-btn");
        e.fromTo(
          n,
          { opacity: 0, y: "-100%" },
          { opacity: 1, y: "0%", ease: "power4.out", duration: 1 }
        ),
          e.to(
            i,
            { y: "0%", ease: "power4.out", duration: 1, stagger: 0.2 },
            0.1
          ),
          e.fromTo(
            s,
            { opacity: 0 },
            { opacity: 1, ease: "power4.out", duration: 0.6 },
            0.4
          ),
          o.a.create({
            trigger: t,
            start: "center bottom",
            markers: !1,
            onEnter: (t) => {
              e.play();
            },
          });
      });
      let y = jQuery(t.next.container).find(".js-cta");
      r.a.utils.toArray(y).forEach((t) => {
        const e = r.a.timeline({ paused: !0 });
        var i = t.querySelectorAll(".js-cta__button"),
          n = t.querySelectorAll(".js-cta__img");
        e.fromTo(
          i,
          { opacity: 0 },
          { opacity: 1, ease: "power3.inOut", duration: 1.2 }
        ),
          e.fromTo(
            n,
            { opacity: 0 },
            { opacity: 1, ease: "power3.inOut", duration: 1.2 }
          ),
          o.a.create({
            trigger: t,
            start: "top bottom",
            markers: !1,
            onEnter: (t) => {
              e.play();
            },
          });
      });
      let _ = jQuery(t.next.container).find(".js-content");
      r.a.utils.toArray(_).forEach((t) => {
        let e = t.querySelectorAll(".js-contentBlock");
        var i = r.a.timeline({ paused: !0 });
        r.a.set(e, { opacity: 0, y: "4vh" }),
          i.to(e, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.inOut",
            stagger: 0.15,
          }),
          o.a.create({
            trigger: t,
            start: "top bottom",
            markers: !1,
            once: !0,
            onEnter: (t) => {
              i.play();
            },
          });
      });
      let w = jQuery(t.next.container).find(".js-paralax");
      e.add("(min-width: 992px)", () => {
        r.a.utils.toArray(w).forEach((t) => {
          let e = t.querySelectorAll(".js-paralax__ele");
          var i = r.a.timeline({ paused: !0 });
          i.fromTo(
            e,
            { y: t.dataset.speedparalax },
            { duration: 1, y: "-" + t.dataset.speedparalax, ease: "none" }
          ),
            o.a.create({
              trigger: t,
              start: "top bottom",
              end: "bottom top",
              markers: !1,
              once: !1,
              pin: !1,
              onUpdate: (t) => {
                i.progress(t.progress);
              },
            });
        });
      });
      let D = jQuery(t.next.container).find(".js-cart");
      r.a.utils.toArray(D).forEach((t) => {
        let e = t.closest(".js-transition");
        o.a.create({
          trigger: e,
          start: "top top",
          end: "bottom+=500% top",
          pin: t,
          pinSpacing: !1,
          markers: !1,
        });
      });
      let x = jQuery(t.next.container).find(".js-footer");
      r.a.utils.toArray(x).forEach((t) => {
        o.a.create({
          trigger: t,
          start: "top center",
          end: "top center",
          markers: !1,
          onEnter: (t) => {
            let { progress: e, direction: i, isActive: n } = t;
            r.a.to(".m-tool", {
              pointerEvents: "none",
              opacity: "0",
              ease: "power4.out",
              duration: 0.4,
              overwrite: !0,
            });
          },
          onEnterBack: (t) => {
            let { progress: e, direction: i, isActive: n } = t;
            r.a.to(".m-tool", {
              pointerEvents: "all",
              opacity: "1",
              ease: "power4.in",
              duration: 0.4,
              overwrite: !0,
            });
          },
        });
      });
    }
    Yt() && It.registerPlugin(se),
      r.a.registerPlugin(o.a, Ot, se),
      r.a.config({ force3D: !1, nullTargetWarn: !1, trialWarn: !1 });
    i(3);
    function le(t) {
      (0, i(3).default)(".js-selectAlways");
      jQuery(".js-selectAlways").on("change", function (t) {
        window.location.href = jQuery(".js-selectAlways").val();
      });
      let e = r.a.timeline({ paused: !0 });
      function n(i) {
        r.a.to(".o-filer__overlay", {
          opacity: "0.6",
          ease: "power4.inOut",
          duration: 0.8,
          overwrite: !0,
        });
        let n = {},
          s = "";
        s =
          null != i.data("type")
            ? i.data("type")
            : jQuery(".js-transition").data("body-class");
        let a = i.data("tax"),
          l = i.data("id"),
          u = !1;
        "" !== jQuery(".js-filterSearch").val().trim() &&
          (jQuery(".m-tool__filterItem.-selected").each(function () {
            jQuery(this).removeClass("-selected");
          }),
            jQuery(".m-tool__filterItem.-disabled").each(function () {
              jQuery(this).removeClass("-disabled");
            }),
            (u = !0),
            (n.search = jQuery(".js-filterSearch").val())),
          i.hasClass("-selected")
            ? i.removeClass("-selected")
            : ("work" == s
              ? i.siblings(".m-tool__filterItem").removeClass("-selected")
              : jQuery(".m-tool__filterItem").removeClass("-selected"),
              i.addClass("-selected"),
              "work" == s
                ? jQuery(".js-work").each(function () {
                  let t = jQuery(this).find(".-selected");
                  if (t.length > 0 && 0 == u) {
                    let e = t.data("tax"),
                      i = t.data("id");
                    n[e] = i;
                  }
                })
                : null != a && null != l && ((n.tax = a), (n.id = l)));
        let c = { action: "filter_overview", post_type: s, filters: n };
        jQuery.ajax({
          type: "POST",
          url: ajax.url,
          data: c,
          success: function (i) {
            r.a.to(".o-filer__overlay", {
              opacity: "0",
              ease: "power4.inOut",
              duration: 0.8,
              overwrite: !0,
            }),
              "" == i.items
                ? jQuery(".js-noResults").addClass("-show")
                : jQuery(".js-noResults").removeClass("-show"),
              jQuery(".js-filterItemsGrid").html(i.items),
              t
                ? t.scrollTo("#filter_to", "top 200px")
                : jQuery("html, body").animate(
                  { scrollTop: jQuery("#filter_to").offset().top },
                  1e3
                );
            const n = document.querySelector(".js-menu");
            r.a.set(n, { y: 0 }),
              "team" == s || "insights" == s
                ? ue(t, e)
                : 0 == u &&
                (jQuery('.m-tool__filterItem[data-tax="pages"]').addClass(
                  "-disabled"
                ),
                  jQuery.each(i.pages, function (t, e) {
                    jQuery(
                      '.m-tool__filterItem[data-id="' +
                      e +
                      '"][data-tax="pages"]'
                    ).removeClass("-disabled");
                  }),
                  jQuery('.m-tool__filterItem[data-tax="places"]').addClass(
                    "-disabled"
                  ),
                  jQuery.each(i.places, function (t, e) {
                    jQuery(
                      '.m-tool__filterItem[data-id="' +
                      e +
                      '"][data-tax="places"]'
                    ).removeClass("-disabled");
                  }),
                  jQuery('.m-tool__filterItem[data-tax="country"]').addClass(
                    "-disabled"
                  ),
                  jQuery.each(i.country, function (t, e) {
                    jQuery(
                      '.m-tool__filterItem[data-id="' +
                      e +
                      '"][data-tax="country"]'
                    ).removeClass("-disabled");
                  }),
                  jQuery('.m-tool__filterItem[data-tax="expertises"]').addClass(
                    "-disabled"
                  ),
                  jQuery.each(i.expertises, function (t, e) {
                    jQuery(
                      '.m-tool__filterItem[data-id="' +
                      e +
                      '"][data-tax="expertises"]'
                    ).removeClass("-disabled");
                  }),
                  jQuery('.m-tool__filterItem[data-tax="size"]').addClass(
                    "-disabled"
                  ),
                  jQuery.each(i.size, function (t, e) {
                    jQuery(
                      '.m-tool__filterItem[data-id="' +
                      e +
                      '"][data-tax="size"]'
                    ).removeClass("-disabled");
                  })),
              "all" == l
                ? jQuery(
                  '.js-viewAll[data-type="' + s + '"][data-tax="' + a + '"]'
                ).addClass("-hide")
                : jQuery(
                  '.js-viewAll[data-type="' + s + '"][data-tax="' + a + '"]'
                ).removeClass("-hide"),
              o.a.refresh();
          },
          error: function () {
            r.a.to(".o-filer__overlay", {
              opacity: "0",
              ease: "power4.inOut",
              duration: 0.8,
              overwrite: !0,
            }),
              ue(t, e),
              "all" == n.id
                ? jQuery('.js-viewAll[data-type="' + s + '"]').addClass("-hide")
                : jQuery('.js-viewAll[data-type="' + s + '"]').removeClass(
                  "-hide"
                );
          },
        });
      }
      e.to(".m-tool", {
        width: "96vw",
        ease: "power4.inOut",
        duration: 0.2,
        overwrite: !0,
      }),
        e.set(".m-tool__open", { display: "none", overwrite: !0 }, 0.2),
        e.set(".m-tool__close", { display: "block", overwrite: !0 }, 0.2),
        e.set(".m-tool__holder", { width: "96vw", overwrite: !0 }, 0.2),
        e.to(
          ".m-tool__holder",
          { height: "80dvh", ease: "power4.inOut", duration: 0.8 },
          0.21
        ),
        jQuery("body").on("click", ".js-filterToggle", function () {
          return (
            jQuery(this).hasClass("-open")
              ? ue(t, e)
              : (function (t, e) {
                t && t.paused(!0);
                e.play(),
                  1 != o.a.isTouch && jQuery(".m-tool__searchInput").focus();
                jQuery(".js-filterToggle").addClass("-open");
              })(t, e),
            !1
          );
        }),
        jQuery("body").on("click", ".js-openFilterList", function () {
          jQuery(this).hasClass("-open")
            ? (jQuery(this).removeClass("-open"),
              r.a.to(jQuery(this).next(), {
                height: "0",
                ease: "power4.inOut",
                duration: 0.8,
                overwrite: !0,
              }),
              r.a.to(jQuery(this).find("svg"), {
                rotate: "90deg",
                ease: "power4.inOut",
                duration: 0.8,
                overwrite: !0,
              }))
            : (jQuery(this).addClass("-open"),
              r.a.to(jQuery(this).next(), {
                height: "auto",
                ease: "power4.inOut",
                duration: 0.8,
                overwrite: !0,
              }),
              r.a.to(jQuery(this).find("svg"), {
                rotate: "-90deg",
                ease: "power4.inOut",
                duration: 0.8,
                overwrite: !0,
              }));
        }),
        jQuery("body").on("click", function () {
          if (jQuery(".js-filterToggle").hasClass("-open")) {
            if (jQuery(event.target).closest(".m-tool").length) return;
            ue(t, e);
          }
        }),
        jQuery(".js-filterSearch").keydown(function (i) {
          if ("Enter" === i.key) {
            i.preventDefault(), n(jQuery(this)), ue(t, e);
          }
        }),
        jQuery(".js-filterSearch").focusin(function (t) {
          o.a.isTouch;
        }),
        jQuery(".js-filterSearch").focusout(function (t) {
          r.a.to(".m-tool", {
            bottom: "2vw",
            ease: "power4.inOut",
            duration: 0.2,
            overwrite: !0,
          });
        }),
        jQuery("body").on("click", ".js-filterSearchSubmit", function (i) {
          n(jQuery(this).prev(".js-filterSearch")), ue(t, e);
        }),
        jQuery(document).on("click", ".m-tool__filterItem", function (t) {
          jQuery(".js-filterSearch").val(""), n(jQuery(this));
        });
    }
    function ue(t, e) {
      t && t.paused(!1),
        e.reverse(),
        jQuery(".js-filterToggle").removeClass("-open");
    }
    function ce(t, e, i, n) {
      return new (i || (i = Promise))(function (r, o) {
        function s(t) {
          try {
            l(n.next(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          try {
            l(n.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function l(t) {
          var e;
          t.done
            ? r(t.value)
            : ((e = t.value),
              e instanceof i
                ? e
                : new i(function (t) {
                  t(e);
                })).then(s, a);
        }
        l((n = n.apply(t, e || [])).next());
      });
    }
    function he(t) {
      return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t;
    }
    "function" == typeof SuppressedError && SuppressedError;
    var de = he(function t(e, i) {
      if (e === i) return !0;
      if (e && i && "object" == typeof e && "object" == typeof i) {
        if (e.constructor !== i.constructor) return !1;
        var n, r, o;
        if (Array.isArray(e)) {
          if ((n = e.length) != i.length) return !1;
          for (r = n; 0 != r--;) if (!t(e[r], i[r])) return !1;
          return !0;
        }
        if (e.constructor === RegExp)
          return e.source === i.source && e.flags === i.flags;
        if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === i.valueOf();
        if (e.toString !== Object.prototype.toString)
          return e.toString() === i.toString();
        if ((n = (o = Object.keys(e)).length) !== Object.keys(i).length)
          return !1;
        for (r = n; 0 != r--;)
          if (!Object.prototype.hasOwnProperty.call(i, o[r])) return !1;
        for (r = n; 0 != r--;) {
          var s = o[r];
          if (!t(e[s], i[s])) return !1;
        }
        return !0;
      }
      return e != e && i != i;
    });
    var pe;
    !(function (t) {
      (t[(t.INITIALIZED = 0)] = "INITIALIZED"),
        (t[(t.LOADING = 1)] = "LOADING"),
        (t[(t.SUCCESS = 2)] = "SUCCESS"),
        (t[(t.FAILURE = 3)] = "FAILURE");
    })(pe || (pe = {}));
    class fe {
      constructor({
        apiKey: t,
        authReferrerPolicy: e,
        channel: i,
        client: n,
        id: r = "__googleMapsScriptId",
        language: o,
        libraries: s = [],
        mapIds: a,
        nonce: l,
        region: u,
        retries: c = 3,
        url: h = "https://maps.googleapis.com/maps/api/js",
        version: d,
      }) {
        if (
          ((this.callbacks = []),
            (this.done = !1),
            (this.loading = !1),
            (this.errors = []),
            (this.apiKey = t),
            (this.authReferrerPolicy = e),
            (this.channel = i),
            (this.client = n),
            (this.id = r || "__googleMapsScriptId"),
            (this.language = o),
            (this.libraries = s),
            (this.mapIds = a),
            (this.nonce = l),
            (this.region = u),
            (this.retries = c),
            (this.url = h),
            (this.version = d),
            fe.instance)
        ) {
          if (!de(this.options, fe.instance.options))
            throw new Error(
              `Loader must not be called again with different options. ${JSON.stringify(
                this.options
              )} !== ${JSON.stringify(fe.instance.options)}`
            );
          return fe.instance;
        }
        fe.instance = this;
      }
      get options() {
        return {
          version: this.version,
          apiKey: this.apiKey,
          channel: this.channel,
          client: this.client,
          id: this.id,
          libraries: this.libraries,
          language: this.language,
          region: this.region,
          mapIds: this.mapIds,
          nonce: this.nonce,
          url: this.url,
          authReferrerPolicy: this.authReferrerPolicy,
        };
      }
      get status() {
        return this.errors.length
          ? pe.FAILURE
          : this.done
            ? pe.SUCCESS
            : this.loading
              ? pe.LOADING
              : pe.INITIALIZED;
      }
      get failed() {
        return (
          this.done && !this.loading && this.errors.length >= this.retries + 1
        );
      }
      createUrl() {
        let t = this.url;
        return (
          (t += "?callback=__googleMapsCallback&loading=async"),
          this.apiKey && (t += "&key=" + this.apiKey),
          this.channel && (t += "&channel=" + this.channel),
          this.client && (t += "&client=" + this.client),
          this.libraries.length > 0 &&
          (t += "&libraries=" + this.libraries.join(",")),
          this.language && (t += "&language=" + this.language),
          this.region && (t += "&region=" + this.region),
          this.version && (t += "&v=" + this.version),
          this.mapIds && (t += "&map_ids=" + this.mapIds.join(",")),
          this.authReferrerPolicy &&
          (t += "&auth_referrer_policy=" + this.authReferrerPolicy),
          t
        );
      }
      deleteScript() {
        const t = document.getElementById(this.id);
        t && t.remove();
      }
      load() {
        return this.loadPromise();
      }
      loadPromise() {
        return new Promise((t, e) => {
          this.loadCallback((i) => {
            i ? e(i.error) : t(window.google);
          });
        });
      }
      importLibrary(t) {
        return this.execute(), google.maps.importLibrary(t);
      }
      loadCallback(t) {
        this.callbacks.push(t), this.execute();
      }
      setScript() {
        var t, e;
        if (document.getElementById(this.id)) return void this.callback();
        const i = {
          key: this.apiKey,
          channel: this.channel,
          client: this.client,
          libraries: this.libraries.length && this.libraries,
          v: this.version,
          mapIds: this.mapIds,
          language: this.language,
          region: this.region,
          authReferrerPolicy: this.authReferrerPolicy,
        };
        Object.keys(i).forEach((t) => !i[t] && delete i[t]),
          (null ===
            (e =
              null ===
                (t =
                  null === window || void 0 === window
                    ? void 0
                    : window.google) || void 0 === t
                ? void 0
                : t.maps) || void 0 === e
            ? void 0
            : e.importLibrary) ||
          ((t) => {
            let e,
              i,
              n,
              r = "The Google Maps JavaScript API",
              o = "google",
              s = "importLibrary",
              a = "__ib__",
              l = document,
              u = window;
            u = u[o] || (u[o] = {});
            const c = u.maps || (u.maps = {}),
              h = new Set(),
              d = new URLSearchParams(),
              p = () =>
                e ||
                (e = new Promise((s, u) =>
                  ce(this, void 0, void 0, function* () {
                    var p;
                    for (n in (yield (i = l.createElement("script")),
                      (i.id = this.id),
                      d.set("libraries", [...h] + ""),
                      t))
                      d.set(
                        n.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                        t[n]
                      );
                    d.set("callback", o + ".maps." + a),
                      (i.src = this.url + "?" + d),
                      (c[a] = s),
                      (i.onerror = () =>
                        (e = u(Error(r + " could not load.")))),
                      (i.nonce =
                        this.nonce ||
                        (null === (p = l.querySelector("script[nonce]")) ||
                          void 0 === p
                          ? void 0
                          : p.nonce) ||
                        ""),
                      l.head.append(i);
                  })
                ));
            c[s]
              ? console.warn(r + " only loads once. Ignoring:", t)
              : (c[s] = (t, ...e) =>
                h.add(t) && p().then(() => c[s](t, ...e)));
          })(i);
        const n = this.libraries.map((t) => this.importLibrary(t));
        n.length || n.push(this.importLibrary("core")),
          Promise.all(n).then(
            () => this.callback(),
            (t) => {
              const e = new ErrorEvent("error", { error: t });
              this.loadErrorCallback(e);
            }
          );
      }
      reset() {
        this.deleteScript(),
          (this.done = !1),
          (this.loading = !1),
          (this.errors = []),
          (this.onerrorEvent = null);
      }
      resetIfRetryingFailed() {
        this.failed && this.reset();
      }
      loadErrorCallback(t) {
        if ((this.errors.push(t), this.errors.length <= this.retries)) {
          const t = this.errors.length * Math.pow(2, this.errors.length);
          console.error(
            `Failed to load Google Maps script, retrying in ${t} ms.`
          ),
            setTimeout(() => {
              this.deleteScript(), this.setScript();
            }, t);
        } else (this.onerrorEvent = t), this.callback();
      }
      callback() {
        (this.done = !0),
          (this.loading = !1),
          this.callbacks.forEach((t) => {
            t(this.onerrorEvent);
          }),
          (this.callbacks = []);
      }
      execute() {
        if ((this.resetIfRetryingFailed(), this.done)) this.callback();
        else {
          if (window.google && window.google.maps && window.google.maps.version)
            return (
              console.warn(
                "Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."
              ),
              void this.callback()
            );
          this.loading || ((this.loading = !0), this.setScript());
        }
      }
    }
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var me =
      function (t, e) {
        return (me =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          })(t, e);
      };
    function ge(t, e) {
      function i() {
        this.constructor = t;
      }
      me(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((i.prototype = e.prototype), new i()));
    }
    var ve = function () {
      return (ve =
        Object.assign ||
        function (t) {
          for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var r in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
    var ye = function t() {
      !(function (t, e) {
        for (var i in e.prototype) t.prototype[i] = e.prototype[i];
      })(t, google.maps.OverlayView);
    };
    function _e(t) {
      return Object.keys(t)
        .reduce(function (e, i) {
          return t[i] && e.push(i + ":" + t[i]), e;
        }, [])
        .join(";");
    }
    function we(t) {
      return t ? t + "px" : void 0;
    }
    var De = (function (t) {
      function e(e, i) {
        var n = t.call(this) || this;
        return (
          (n.cluster_ = e),
          (n.styles_ = i),
          (n.center_ = null),
          (n.div_ = null),
          (n.sums_ = null),
          (n.visible_ = !1),
          (n.style = null),
          n.setMap(e.getMap()),
          n
        );
      }
      return (
        ge(e, t),
        (e.prototype.onAdd = function () {
          var t,
            e,
            i = this,
            n = this.cluster_.getMarkerClusterer(),
            r = google.maps.version.split("."),
            o = r[0],
            s = r[1],
            a = 100 * parseInt(o, 10) + parseInt(s, 10);
          (this.div_ = document.createElement("div")),
            this.visible_ && this.show(),
            this.getPanes().overlayMouseTarget.appendChild(this.div_),
            (this.boundsChangedListener_ = google.maps.event.addListener(
              this.getMap(),
              "bounds_changed",
              function () {
                e = t;
              }
            )),
            google.maps.event.addDomListener(
              this.div_,
              "mousedown",
              function () {
                (t = !0), (e = !1);
              }
            ),
            google.maps.event.addDomListener(
              this.div_,
              "contextmenu",
              function () {
                google.maps.event.trigger(n, "contextmenu", i.cluster_);
              }
            ),
            a >= 332 &&
            google.maps.event.addDomListener(
              this.div_,
              "touchstart",
              function (t) {
                t.stopPropagation();
              }
            ),
            google.maps.event.addDomListener(
              this.div_,
              "click",
              function (r) {
                if (((t = !1), !e)) {
                  if (
                    (google.maps.event.trigger(n, "click", i.cluster_),
                      google.maps.event.trigger(n, "clusterclick", i.cluster_),
                      n.getZoomOnClick())
                  ) {
                    var o = n.getMaxZoom(),
                      s = i.cluster_.getBounds();
                    n.getMap().fitBounds(s),
                      setTimeout(function () {
                        n.getMap().fitBounds(s),
                          null !== o &&
                          n.getMap().getZoom() > o &&
                          n.getMap().setZoom(o + 1);
                      }, 100);
                  }
                  (r.cancelBubble = !0),
                    r.stopPropagation && r.stopPropagation();
                }
              }
            ),
            google.maps.event.addDomListener(
              this.div_,
              "mouseover",
              function () {
                google.maps.event.trigger(n, "mouseover", i.cluster_);
              }
            ),
            google.maps.event.addDomListener(
              this.div_,
              "mouseout",
              function () {
                google.maps.event.trigger(n, "mouseout", i.cluster_);
              }
            );
        }),
        (e.prototype.onRemove = function () {
          this.div_ &&
            this.div_.parentNode &&
            (this.hide(),
              google.maps.event.removeListener(this.boundsChangedListener_),
              google.maps.event.clearInstanceListeners(this.div_),
              this.div_.parentNode.removeChild(this.div_),
              (this.div_ = null));
        }),
        (e.prototype.draw = function () {
          if (this.visible_) {
            var t = this.getPosFromLatLng_(this.center_);
            (this.div_.style.top = t.y + "px"),
              (this.div_.style.left = t.x + "px");
          }
        }),
        (e.prototype.hide = function () {
          this.div_ && (this.div_.style.display = "none"),
            (this.visible_ = !1);
        }),
        (e.prototype.show = function () {
          this.div_ &&
            ((this.div_.className = this.className_),
              (this.div_.style.cssText = this.createCss_(
                this.getPosFromLatLng_(this.center_)
              )),
              (this.div_.innerHTML =
                (this.style.url ? this.getImageElementHtml() : "") +
                this.getLabelDivHtml()),
              void 0 === this.sums_.title || "" === this.sums_.title
                ? (this.div_.title = this.cluster_
                  .getMarkerClusterer()
                  .getTitle())
                : (this.div_.title = this.sums_.title),
              (this.div_.style.display = "")),
            (this.visible_ = !0);
        }),
        (e.prototype.getLabelDivHtml = function () {
          var t = this.cluster_
            .getMarkerClusterer()
            .ariaLabelFn(this.sums_.text),
            e = {
              position: "absolute",
              top: we(this.anchorText_[0]),
              left: we(this.anchorText_[1]),
              color: this.style.textColor,
              "font-size": we(this.style.textSize),
              "font-family": this.style.fontFamily,
              "font-weight": this.style.fontWeight,
              "font-style": this.style.fontStyle,
              "text-decoration": this.style.textDecoration,
              "text-align": "center",
              width: we(this.style.width),
              "line-height": we(this.style.textLineHeight),
            };
          return '\n<div aria-label="'
            .concat(t, '" style="')
            .concat(_e(e), '" tabindex="0">\n  <span aria-hidden="true">')
            .concat(this.sums_.text, "</span>\n</div>\n");
        }),
        (e.prototype.getImageElementHtml = function () {
          var t = (this.style.backgroundPosition || "0 0").split(" "),
            e = parseInt(t[0].replace(/^\s+|\s+$/g, ""), 10),
            i = parseInt(t[1].replace(/^\s+|\s+$/g, ""), 10),
            n = {};
          if (this.cluster_.getMarkerClusterer().getEnableRetinaIcons())
            n = {
              width: we(this.style.width),
              height: we(this.style.height),
            };
          else {
            var r = [
              -1 * i,
              -1 * e + this.style.width,
              -1 * i + this.style.height,
              -1 * e,
            ],
              o = r[1],
              s = r[2],
              a = r[3];
            n = {
              clip: "rect("
                .concat(r[0], "px, ")
                .concat(o, "px, ")
                .concat(s, "px, ")
                .concat(a, "px)"),
            };
          }
          var l = this.sums_.url ? { width: "100%", height: "100%" } : {},
            u = _e(
              ve(ve({ position: "absolute", top: we(i), left: we(e) }, n), l)
            );
          return '<img alt="'
            .concat(this.sums_.text, '" aria-hidden="true" src="')
            .concat(this.style.url, '" style="')
            .concat(u, '"/>');
        }),
        (e.prototype.useStyle = function (t) {
          this.sums_ = t;
          var e = Math.max(0, t.index - 1);
          (e = Math.min(this.styles_.length - 1, e)),
            (this.style = this.sums_.url
              ? ve(ve({}, this.styles_[e]), { url: this.sums_.url })
              : this.styles_[e]),
            (this.anchorText_ = this.style.anchorText || [0, 0]),
            (this.anchorIcon_ = this.style.anchorIcon || [
              Math.floor(this.style.height / 2),
              Math.floor(this.style.width / 2),
            ]),
            (this.className_ =
              this.cluster_.getMarkerClusterer().getClusterClass() +
              " " +
              (this.style.className || "cluster-" + e));
        }),
        (e.prototype.setCenter = function (t) {
          this.center_ = t;
        }),
        (e.prototype.createCss_ = function (t) {
          return _e({
            "z-index": "".concat(
              this.cluster_.getMarkerClusterer().getZIndex()
            ),
            top: we(t.y),
            left: we(t.x),
            width: we(this.style.width),
            height: we(this.style.height),
            cursor: "pointer",
            position: "absolute",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
          });
        }),
        (e.prototype.getPosFromLatLng_ = function (t) {
          var e = this.getProjection().fromLatLngToDivPixel(t);
          return (
            (e.x = Math.floor(e.x - this.anchorIcon_[1])),
            (e.y = Math.floor(e.y - this.anchorIcon_[0])),
            e
          );
        }),
        e
      );
    })(ye),
      xe = (function () {
        function t(t) {
          (this.markerClusterer_ = t),
            (this.map_ = this.markerClusterer_.getMap()),
            (this.minClusterSize_ =
              this.markerClusterer_.getMinimumClusterSize()),
            (this.averageCenter_ = this.markerClusterer_.getAverageCenter()),
            (this.markers_ = []),
            (this.center_ = null),
            (this.bounds_ = null),
            (this.clusterIcon_ = new De(
              this,
              this.markerClusterer_.getStyles()
            ));
        }
        return (
          (t.prototype.getSize = function () {
            return this.markers_.length;
          }),
          (t.prototype.getMarkers = function () {
            return this.markers_;
          }),
          (t.prototype.getCenter = function () {
            return this.center_;
          }),
          (t.prototype.getMap = function () {
            return this.map_;
          }),
          (t.prototype.getMarkerClusterer = function () {
            return this.markerClusterer_;
          }),
          (t.prototype.getBounds = function () {
            for (
              var t = new google.maps.LatLngBounds(this.center_, this.center_),
              e = this.getMarkers(),
              i = 0;
              i < e.length;
              i++
            )
              t.extend(e[i].getPosition());
            return t;
          }),
          (t.prototype.remove = function () {
            this.clusterIcon_.setMap(null),
              (this.markers_ = []),
              delete this.markers_;
          }),
          (t.prototype.addMarker = function (t) {
            if (this.isMarkerAlreadyAdded_(t)) return !1;
            if (this.center_) {
              if (this.averageCenter_) {
                var e = this.markers_.length + 1,
                  i =
                    (this.center_.lat() * (e - 1) + t.getPosition().lat()) / e,
                  n =
                    (this.center_.lng() * (e - 1) + t.getPosition().lng()) / e;
                (this.center_ = new google.maps.LatLng(i, n)),
                  this.calculateBounds_();
              }
            } else (this.center_ = t.getPosition()), this.calculateBounds_();
            (t.isAdded = !0), this.markers_.push(t);
            var r = this.markers_.length,
              o = this.markerClusterer_.getMaxZoom();
            if (null !== o && this.map_.getZoom() > o)
              t.getMap() !== this.map_ && t.setMap(this.map_);
            else if (r < this.minClusterSize_)
              t.getMap() !== this.map_ && t.setMap(this.map_);
            else if (r === this.minClusterSize_)
              for (var s = 0; s < r; s++) this.markers_[s].setMap(null);
            else t.setMap(null);
            return !0;
          }),
          (t.prototype.isMarkerInClusterBounds = function (t) {
            return this.bounds_.contains(t.getPosition());
          }),
          (t.prototype.calculateBounds_ = function () {
            var t = new google.maps.LatLngBounds(this.center_, this.center_);
            this.bounds_ = this.markerClusterer_.getExtendedBounds(t);
          }),
          (t.prototype.updateIcon = function () {
            var t = this.markers_.length,
              e = this.markerClusterer_.getMaxZoom();
            if (null !== e && this.map_.getZoom() > e) this.clusterIcon_.hide();
            else if (t < this.minClusterSize_) this.clusterIcon_.hide();
            else {
              var i = this.markerClusterer_.getStyles().length,
                n = this.markerClusterer_.getCalculator()(this.markers_, i);
              this.clusterIcon_.setCenter(this.center_),
                this.clusterIcon_.useStyle(n),
                this.clusterIcon_.show();
            }
          }),
          (t.prototype.isMarkerAlreadyAdded_ = function (t) {
            if (this.markers_.indexOf) return -1 !== this.markers_.indexOf(t);
            for (var e = 0; e < this.markers_.length; e++)
              if (t === this.markers_[e]) return !0;
            return !1;
          }),
          t
        );
      })(),
      be = function (t, e, i) {
        return void 0 !== t[e] ? t[e] : i;
      },
      Ce = (function (t) {
        function e(i, n, r) {
          void 0 === n && (n = []), void 0 === r && (r = {});
          var o = t.call(this) || this;
          return (
            (o.options = r),
            (o.markers_ = []),
            (o.clusters_ = []),
            (o.listeners_ = []),
            (o.activeMap_ = null),
            (o.ready_ = !1),
            (o.ariaLabelFn =
              o.options.ariaLabelFn ||
              function () {
                return "";
              }),
            (o.zIndex_ =
              o.options.zIndex || Number(google.maps.Marker.MAX_ZINDEX) + 1),
            (o.gridSize_ = o.options.gridSize || 60),
            (o.minClusterSize_ = o.options.minimumClusterSize || 2),
            (o.maxZoom_ = o.options.maxZoom || null),
            (o.styles_ = o.options.styles || []),
            (o.title_ = o.options.title || ""),
            (o.zoomOnClick_ = be(o.options, "zoomOnClick", !0)),
            (o.averageCenter_ = be(o.options, "averageCenter", !1)),
            (o.ignoreHidden_ = be(o.options, "ignoreHidden", !1)),
            (o.enableRetinaIcons_ = be(o.options, "enableRetinaIcons", !1)),
            (o.imagePath_ = o.options.imagePath || e.IMAGE_PATH),
            (o.imageExtension_ = o.options.imageExtension || e.IMAGE_EXTENSION),
            (o.imageSizes_ = o.options.imageSizes || e.IMAGE_SIZES),
            (o.calculator_ = o.options.calculator || e.CALCULATOR),
            (o.batchSize_ = o.options.batchSize || e.BATCH_SIZE),
            (o.batchSizeIE_ = o.options.batchSizeIE || e.BATCH_SIZE_IE),
            (o.clusterClass_ = o.options.clusterClass || "cluster"),
            -1 !== navigator.userAgent.toLowerCase().indexOf("msie") &&
            (o.batchSize_ = o.batchSizeIE_),
            o.setupStyles_(),
            o.addMarkers(n, !0),
            o.setMap(i),
            o
          );
        }
        return (
          ge(e, t),
          (e.prototype.onAdd = function () {
            var t = this;
            (this.activeMap_ = this.getMap()),
              (this.ready_ = !0),
              this.repaint(),
              (this.prevZoom_ = this.getMap().getZoom()),
              (this.listeners_ = [
                google.maps.event.addListener(
                  this.getMap(),
                  "zoom_changed",
                  function () {
                    var e = t.getMap(),
                      i = e.minZoom || 0,
                      n = Math.min(
                        e.maxZoom || 100,
                        e.mapTypes[e.getMapTypeId()].maxZoom
                      ),
                      r = Math.min(Math.max(t.getMap().getZoom(), i), n);
                    t.prevZoom_ != r &&
                      ((t.prevZoom_ = r), t.resetViewport_(!1));
                  }
                ),
                google.maps.event.addListener(
                  this.getMap(),
                  "idle",
                  function () {
                    t.redraw_();
                  }
                ),
              ]);
          }),
          (e.prototype.onRemove = function () {
            for (var t = 0; t < this.markers_.length; t++)
              this.markers_[t].getMap() !== this.activeMap_ &&
                this.markers_[t].setMap(this.activeMap_);
            for (t = 0; t < this.clusters_.length; t++)
              this.clusters_[t].remove();
            this.clusters_ = [];
            for (t = 0; t < this.listeners_.length; t++)
              google.maps.event.removeListener(this.listeners_[t]);
            (this.listeners_ = []),
              (this.activeMap_ = null),
              (this.ready_ = !1);
          }),
          (e.prototype.draw = function () { }),
          (e.prototype.setupStyles_ = function () {
            if (!(this.styles_.length > 0))
              for (var t = 0; t < this.imageSizes_.length; t++) {
                var i = this.imageSizes_[t];
                this.styles_.push(
                  e.withDefaultStyle({
                    url: this.imagePath_ + (t + 1) + "." + this.imageExtension_,
                    height: i,
                    width: i,
                  })
                );
              }
          }),
          (e.prototype.fitMapToMarkers = function (t) {
            for (
              var e = this.getMarkers(),
              i = new google.maps.LatLngBounds(),
              n = 0;
              n < e.length;
              n++
            )
              (!e[n].getVisible() && this.getIgnoreHidden()) ||
                i.extend(e[n].getPosition());
            this.getMap().fitBounds(i, t);
          }),
          (e.prototype.getGridSize = function () {
            return this.gridSize_;
          }),
          (e.prototype.setGridSize = function (t) {
            this.gridSize_ = t;
          }),
          (e.prototype.getMinimumClusterSize = function () {
            return this.minClusterSize_;
          }),
          (e.prototype.setMinimumClusterSize = function (t) {
            this.minClusterSize_ = t;
          }),
          (e.prototype.getMaxZoom = function () {
            return this.maxZoom_;
          }),
          (e.prototype.setMaxZoom = function (t) {
            this.maxZoom_ = t;
          }),
          (e.prototype.getZIndex = function () {
            return this.zIndex_;
          }),
          (e.prototype.setZIndex = function (t) {
            this.zIndex_ = t;
          }),
          (e.prototype.getStyles = function () {
            return this.styles_;
          }),
          (e.prototype.setStyles = function (t) {
            this.styles_ = t;
          }),
          (e.prototype.getTitle = function () {
            return this.title_;
          }),
          (e.prototype.setTitle = function (t) {
            this.title_ = t;
          }),
          (e.prototype.getZoomOnClick = function () {
            return this.zoomOnClick_;
          }),
          (e.prototype.setZoomOnClick = function (t) {
            this.zoomOnClick_ = t;
          }),
          (e.prototype.getAverageCenter = function () {
            return this.averageCenter_;
          }),
          (e.prototype.setAverageCenter = function (t) {
            this.averageCenter_ = t;
          }),
          (e.prototype.getIgnoreHidden = function () {
            return this.ignoreHidden_;
          }),
          (e.prototype.setIgnoreHidden = function (t) {
            this.ignoreHidden_ = t;
          }),
          (e.prototype.getEnableRetinaIcons = function () {
            return this.enableRetinaIcons_;
          }),
          (e.prototype.setEnableRetinaIcons = function (t) {
            this.enableRetinaIcons_ = t;
          }),
          (e.prototype.getImageExtension = function () {
            return this.imageExtension_;
          }),
          (e.prototype.setImageExtension = function (t) {
            this.imageExtension_ = t;
          }),
          (e.prototype.getImagePath = function () {
            return this.imagePath_;
          }),
          (e.prototype.setImagePath = function (t) {
            this.imagePath_ = t;
          }),
          (e.prototype.getImageSizes = function () {
            return this.imageSizes_;
          }),
          (e.prototype.setImageSizes = function (t) {
            this.imageSizes_ = t;
          }),
          (e.prototype.getCalculator = function () {
            return this.calculator_;
          }),
          (e.prototype.setCalculator = function (t) {
            this.calculator_ = t;
          }),
          (e.prototype.getBatchSizeIE = function () {
            return this.batchSizeIE_;
          }),
          (e.prototype.setBatchSizeIE = function (t) {
            this.batchSizeIE_ = t;
          }),
          (e.prototype.getClusterClass = function () {
            return this.clusterClass_;
          }),
          (e.prototype.setClusterClass = function (t) {
            this.clusterClass_ = t;
          }),
          (e.prototype.getMarkers = function () {
            return this.markers_;
          }),
          (e.prototype.getTotalMarkers = function () {
            return this.markers_.length;
          }),
          (e.prototype.getClusters = function () {
            return this.clusters_;
          }),
          (e.prototype.getTotalClusters = function () {
            return this.clusters_.length;
          }),
          (e.prototype.addMarker = function (t, e) {
            this.pushMarkerTo_(t), e || this.redraw_();
          }),
          (e.prototype.addMarkers = function (t, e) {
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) &&
                this.pushMarkerTo_(t[i]);
            e || this.redraw_();
          }),
          (e.prototype.pushMarkerTo_ = function (t) {
            var e = this;
            t.getDraggable() &&
              google.maps.event.addListener(t, "dragend", function () {
                e.ready_ && ((t.isAdded = !1), e.repaint());
              }),
              (t.isAdded = !1),
              this.markers_.push(t);
          }),
          (e.prototype.removeMarker = function (t, e) {
            var i = this.removeMarker_(t);
            return !e && i && this.repaint(), i;
          }),
          (e.prototype.removeMarkers = function (t, e) {
            for (var i = !1, n = 0; n < t.length; n++) {
              var r = this.removeMarker_(t[n]);
              i = i || r;
            }
            return !e && i && this.repaint(), i;
          }),
          (e.prototype.removeMarker_ = function (t) {
            var e = -1;
            if (this.markers_.indexOf) e = this.markers_.indexOf(t);
            else
              for (var i = 0; i < this.markers_.length; i++)
                if (t === this.markers_[i]) {
                  e = i;
                  break;
                }
            return -1 !== e && (t.setMap(null), this.markers_.splice(e, 1), !0);
          }),
          (e.prototype.clearMarkers = function () {
            this.resetViewport_(!0), (this.markers_ = []);
          }),
          (e.prototype.repaint = function () {
            var t = this.clusters_.slice();
            (this.clusters_ = []),
              this.resetViewport_(!1),
              this.redraw_(),
              setTimeout(function () {
                for (var e = 0; e < t.length; e++) t[e].remove();
              }, 0);
          }),
          (e.prototype.getExtendedBounds = function (t) {
            var e = this.getProjection(),
              i = new google.maps.LatLng(
                t.getNorthEast().lat(),
                t.getNorthEast().lng()
              ),
              n = new google.maps.LatLng(
                t.getSouthWest().lat(),
                t.getSouthWest().lng()
              ),
              r = e.fromLatLngToDivPixel(i);
            (r.x += this.gridSize_), (r.y -= this.gridSize_);
            var o = e.fromLatLngToDivPixel(n);
            (o.x -= this.gridSize_), (o.y += this.gridSize_);
            var s = e.fromDivPixelToLatLng(r),
              a = e.fromDivPixelToLatLng(o);
            return t.extend(s), t.extend(a), t;
          }),
          (e.prototype.redraw_ = function () {
            this.createClusters_(0);
          }),
          (e.prototype.resetViewport_ = function (t) {
            for (var e = 0; e < this.clusters_.length; e++)
              this.clusters_[e].remove();
            this.clusters_ = [];
            for (e = 0; e < this.markers_.length; e++) {
              var i = this.markers_[e];
              (i.isAdded = !1), t && i.setMap(null);
            }
          }),
          (e.prototype.distanceBetweenPoints_ = function (t, e) {
            var i = ((e.lat() - t.lat()) * Math.PI) / 180,
              n = ((e.lng() - t.lng()) * Math.PI) / 180,
              r =
                Math.sin(i / 2) * Math.sin(i / 2) +
                Math.cos((t.lat() * Math.PI) / 180) *
                Math.cos((e.lat() * Math.PI) / 180) *
                Math.sin(n / 2) *
                Math.sin(n / 2);
            return 6371 * (2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r)));
          }),
          (e.prototype.isMarkerInBounds_ = function (t, e) {
            return e.contains(t.getPosition());
          }),
          (e.prototype.addToClosestCluster_ = function (t) {
            for (var e = 4e4, i = null, n = 0; n < this.clusters_.length; n++) {
              var r,
                o = (r = this.clusters_[n]).getCenter();
              if (o) {
                var s = this.distanceBetweenPoints_(o, t.getPosition());
                s < e && ((e = s), (i = r));
              }
            }
            i && i.isMarkerInClusterBounds(t)
              ? i.addMarker(t)
              : ((r = new xe(this)).addMarker(t), this.clusters_.push(r));
          }),
          (e.prototype.createClusters_ = function (t) {
            var e = this;
            if (this.ready_) {
              0 === t &&
                (google.maps.event.trigger(this, "clusteringbegin", this),
                  void 0 !== this.timerRefStatic &&
                  (clearTimeout(this.timerRefStatic),
                    delete this.timerRefStatic));
              for (
                var i = new google.maps.LatLngBounds(
                  this.getMap().getBounds().getSouthWest(),
                  this.getMap().getBounds().getNorthEast()
                ),
                n = this.getExtendedBounds(i),
                r = Math.min(t + this.batchSize_, this.markers_.length),
                o = t;
                o < r;
                o++
              ) {
                var s = this.markers_[o];
                !s.isAdded &&
                  this.isMarkerInBounds_(s, n) &&
                  (!this.ignoreHidden_ ||
                    (this.ignoreHidden_ && s.getVisible())) &&
                  this.addToClosestCluster_(s);
              }
              if (r < this.markers_.length)
                this.timerRefStatic = window.setTimeout(function () {
                  e.createClusters_(r);
                }, 0);
              else {
                delete this.timerRefStatic,
                  google.maps.event.trigger(this, "clusteringend", this);
                for (o = 0; o < this.clusters_.length; o++)
                  this.clusters_[o].updateIcon();
              }
            }
          }),
          (e.CALCULATOR = function (t, e) {
            for (var i = 0, n = t.length, r = n; 0 !== r;)
              (r = Math.floor(r / 10)), i++;
            return (
              (i = Math.min(i, e)), { text: n.toString(), index: i, title: "" }
            );
          }),
          (e.withDefaultStyle = function (t) {
            return ve(
              {
                textColor: "black",
                textSize: 11,
                textDecoration: "none",
                textLineHeight: t.height,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Arial,sans-serif",
                backgroundPosition: "0 0",
              },
              t
            );
          }),
          (e.BATCH_SIZE = 2e3),
          (e.BATCH_SIZE_IE = 500),
          (e.IMAGE_PATH = "../images/m"),
          (e.IMAGE_EXTENSION = "png"),
          (e.IMAGE_SIZES = [53, 56, 66, 78, 90]),
          e
        );
      })(ye);
    const Ee = partnersData;
    function Se(t) {
      let e = jQuery(t.next.container).find(".js-map");
      if (e.length) {
        const t = new fe({
          apiKey: "AIzaSyCZwk2RrJt4mVgqOrIE6riRM4SGIiC3afo",
          version: "weekly",
        }),
          i = "/app/themes/includi-v2/assets/img/marker.svg";
        t.load().then(async () => {
          const { Map: t } = await google.maps.importLibrary("maps");
          fetch("/app/themes/includi-v2/assets/json/map-styles.json")
            .then((t) => t.json())
            .then((n) => {
              var r = {
                enableRetinaIcons: !0,
                imageSizes: [39],
                styles: [
                  {
                    url: "/app/themes/includi-v2/assets/img/m-4.png",
                    textColor: "#454545",
                    textSize: 16,
                    fontFamily: "'Open Sans', Arial",
                    fontWeight: "bold",
                    anchorText: [10, 0],
                    width: "39",
                    height: "39",
                  },
                ],
              };
              const o = new t(e[0], {
                center: { lat: 45.7229311, lng: 1.7166556 },
                zoom: 4,
                disableDefaultUI: !0,
                zoomControl: !0,
                styles: n,
              }),
                s = new google.maps.LatLngBounds(),
                a = Ee.reduce(
                  (t, e) => ((t.all = t.all || []), t.all.push(e), t),
                  {}
                );
              var l = new google.maps.InfoWindow();
              Object.keys(a).forEach((t) => {
                const e = a[t].map((t) => {
                  const e = new google.maps.Marker({
                    position: new google.maps.LatLng(t.lat, t.lng),
                    title: t.title,
                    map: o,
                    icon: i,
                    optimized: !1,
                  });
                  let n = t.link;
                  if (("" != t.url && (n = t.url), n))
                    var r =
                      "<a href='" +
                      n.url +
                      "' target='" +
                      n.target +
                      "'><h6 class='u-fs20 -white'>" +
                      t.title +
                      "</h6><img class='a-img__map' src='" +
                      t.img +
                      "'/></a>";
                  else
                    r =
                      "<h6 class='u-fs20 -white'>" +
                      t.title +
                      "</h6><img class='a-img__map' src='" +
                      t.img +
                      "'/>";
                  return (
                    google.maps.event.addListener(e, "click", function () {
                      l.setContent(r), l.open(o, this);
                    }),
                    s.extend(e.position),
                    e
                  );
                });
                new Ce(o, e, r), o.fitBounds(s);
              });
            });
        });
      }
    }
    /*!
     * matrix 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var Te,
      Pe,
      Ae,
      Fe,
      ke,
      Me,
      Le,
      Oe,
      Ie,
      je = "transform",
      ze = je + "Origin",
      Be = function (t) {
        var e = t.ownerDocument || t;
        !(je in t.style) &&
          "msTransform" in t.style &&
          (ze = (je = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode););
        if (((Pe = window), (Le = new Xe()), e)) {
          (Te = e),
            (Ae = e.documentElement),
            (Fe = e.body),
            ((Oe = Te.createElementNS(
              "http://www.w3.org/2000/svg",
              "g"
            )).style.transform = "none");
          var i = e.createElement("div"),
            n = e.createElement("div"),
            r = e && (e.body || e.firstElementChild);
          r &&
            r.appendChild &&
            (r.appendChild(i),
              i.appendChild(n),
              i.setAttribute(
                "style",
                "position:static;transform:translate3d(0,0,1px)"
              ),
              (Ie = n.offsetParent !== i),
              r.removeChild(i));
        }
        return e;
      },
      Re = [],
      Ne = [],
      He = function (t) {
        return (
          t.ownerSVGElement ||
          ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        );
      },
      qe = function t(e, i) {
        if (e.parentNode && (Te || Be(e))) {
          var n = He(e),
            r = n
              ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
              : "http://www.w3.org/1999/xhtml",
            o = n ? (i ? "rect" : "g") : "div",
            s = 2 !== i ? 0 : 100,
            a = 3 === i ? 100 : 0,
            l =
              "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
            u = Te.createElementNS
              ? Te.createElementNS(r.replace(/^https/, "http"), o)
              : Te.createElement(o);
          return (
            i &&
            (n
              ? (Me || (Me = t(e)),
                u.setAttribute("width", 0.01),
                u.setAttribute("height", 0.01),
                u.setAttribute("transform", "translate(" + s + "," + a + ")"),
                Me.appendChild(u))
              : (ke || ((ke = t(e)).style.cssText = l),
                (u.style.cssText =
                  l +
                  "width:0.1px;height:0.1px;top:" +
                  a +
                  "px;left:" +
                  s +
                  "px"),
                ke.appendChild(u))),
            u
          );
        }
        throw "Need document and parent.";
      },
      Ze = function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          a,
          l = He(t),
          u = t === l,
          c = l ? Re : Ne,
          h = t.parentNode;
        if (t === Pe) return t;
        if (
          (c.length || c.push(qe(t, 1), qe(t, 2), qe(t, 3)),
            (i = l ? Me : ke),
            l)
        )
          u
            ? ((o =
              -(r = (function (t) {
                var e,
                  i = t.getCTM();
                return (
                  i ||
                  ((e = t.style[je]),
                    (t.style[je] = "none"),
                    t.appendChild(Oe),
                    (i = Oe.getCTM()),
                    t.removeChild(Oe),
                    e
                      ? (t.style[je] = e)
                      : t.style.removeProperty(
                        je.replace(/([A-Z])/g, "-$1").toLowerCase()
                      )),
                  i || Le.clone()
                );
              })(t)).e / r.a),
              (s = -r.f / r.d),
              (n = Le))
            : t.getBBox
              ? ((r = t.getBBox()),
                (o =
                  (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
                    ? n.numberOfItems > 1
                      ? (function (t) {
                        for (var e = new Xe(), i = 0; i < t.numberOfItems; i++)
                          e.multiply(t.getItem(i).matrix);
                        return e;
                      })(n)
                      : n.getItem(0).matrix
                    : Le).a *
                  r.x +
                  n.c * r.y),
                (s = n.b * r.x + n.d * r.y))
              : ((n = new Xe()), (o = s = 0)),
            e && "g" === t.tagName.toLowerCase() && (o = s = 0),
            (u ? l : h).appendChild(i),
            i.setAttribute(
              "transform",
              "matrix(" +
              n.a +
              "," +
              n.b +
              "," +
              n.c +
              "," +
              n.d +
              "," +
              (n.e + o) +
              "," +
              (n.f + s) +
              ")"
            );
        else {
          if (((o = s = 0), Ie))
            for (
              n = t.offsetParent, r = t;
              r && (r = r.parentNode) && r !== n && r.parentNode;

            )
              (Pe.getComputedStyle(r)[je] + "").length > 4 &&
                ((o = r.offsetLeft), (s = r.offsetTop), (r = 0));
          if (
            "absolute" !== (a = Pe.getComputedStyle(t)).position &&
            "fixed" !== a.position
          )
            for (n = t.offsetParent; h && h !== n;)
              (o += h.scrollLeft || 0),
                (s += h.scrollTop || 0),
                (h = h.parentNode);
          ((r = i.style).top = t.offsetTop - s + "px"),
            (r.left = t.offsetLeft - o + "px"),
            (r[je] = a[je]),
            (r[ze] = a[ze]),
            (r.position = "fixed" === a.position ? "fixed" : "absolute"),
            t.parentNode.appendChild(i);
        }
        return i;
      },
      Qe = function (t, e, i, n, r, o, s) {
        return (
          (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = o), (t.f = s), t
        );
      },
      Xe = (function () {
        function t(t, e, i, n, r, o) {
          void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0),
            void 0 === o && (o = 0),
            Qe(this, t, e, i, n, r, o);
        }
        var e = t.prototype;
        return (
          (e.inverse = function () {
            var t = this.a,
              e = this.b,
              i = this.c,
              n = this.d,
              r = this.e,
              o = this.f,
              s = t * n - e * i || 1e-10;
            return Qe(
              this,
              n / s,
              -e / s,
              -i / s,
              t / s,
              (i * o - n * r) / s,
              -(t * o - e * r) / s
            );
          }),
          (e.multiply = function (t) {
            var e = this.a,
              i = this.b,
              n = this.c,
              r = this.d,
              o = this.e,
              s = this.f,
              a = t.a,
              l = t.c,
              u = t.b,
              c = t.d,
              h = t.e,
              d = t.f;
            return Qe(
              this,
              a * e + u * n,
              a * i + u * r,
              l * e + c * n,
              l * i + c * r,
              o + h * e + d * n,
              s + h * i + d * r
            );
          }),
          (e.clone = function () {
            return new t(this.a, this.b, this.c, this.d, this.e, this.f);
          }),
          (e.equals = function (t) {
            var e = this.a,
              i = this.b,
              n = this.c,
              r = this.d,
              o = this.e,
              s = this.f;
            return (
              e === t.a &&
              i === t.b &&
              n === t.c &&
              r === t.d &&
              o === t.e &&
              s === t.f
            );
          }),
          (e.apply = function (t, e) {
            void 0 === e && (e = {});
            var i = t.x,
              n = t.y,
              r = this.a,
              o = this.b,
              s = this.c,
              a = this.d,
              l = this.e,
              u = this.f;
            return (
              (e.x = i * r + n * s + l || 0), (e.y = i * o + n * a + u || 0), e
            );
          }),
          t
        );
      })();
    function Ye(t, e, i, n) {
      if (!t || !t.parentNode || (Te || Be(t)).documentElement === t)
        return new Xe();
      var r = (function (t) {
        for (var e, i; t && t !== Fe;)
          (i = t._gsap) && i.uncache && i.get(t, "x"),
            i &&
            !i.scaleX &&
            !i.scaleY &&
            i.renderTransform &&
            ((i.scaleX = i.scaleY = 1e-4),
              i.renderTransform(1, i),
              e ? e.push(i) : (e = [i])),
            (t = t.parentNode);
        return e;
      })(t),
        o = He(t) ? Re : Ne,
        s = Ze(t, i),
        a = o[0].getBoundingClientRect(),
        l = o[1].getBoundingClientRect(),
        u = o[2].getBoundingClientRect(),
        c = s.parentNode,
        h =
          !n &&
          (function t(e) {
            return (
              "fixed" === Pe.getComputedStyle(e).position ||
              ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            );
          })(t),
        d = new Xe(
          (l.left - a.left) / 100,
          (l.top - a.top) / 100,
          (u.left - a.left) / 100,
          (u.top - a.top) / 100,
          a.left +
          (h
            ? 0
            : Pe.pageXOffset ||
            Te.scrollLeft ||
            Ae.scrollLeft ||
            Fe.scrollLeft ||
            0),
          a.top +
          (h
            ? 0
            : Pe.pageYOffset ||
            Te.scrollTop ||
            Ae.scrollTop ||
            Fe.scrollTop ||
            0)
        );
      if ((c.removeChild(s), r))
        for (a = r.length; a--;)
          ((l = r[a]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
      return e ? d.inverse() : d;
    }
    function We(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    /*!
     * Draggable 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ue,
      Ve,
      Ge,
      Ke,
      $e,
      Je,
      ti,
      ei,
      ii,
      ni,
      ri,
      oi,
      si,
      ai,
      li,
      ui,
      ci,
      hi,
      di,
      pi,
      fi,
      mi,
      gi = 0,
      vi = function () {
        return "undefined" != typeof window;
      },
      yi = function () {
        return Ue || (vi() && (Ue = window.gsap) && Ue.registerPlugin && Ue);
      },
      _i = function (t) {
        return "function" == typeof t;
      },
      wi = function (t) {
        return "object" == typeof t;
      },
      Di = function (t) {
        return void 0 === t;
      },
      xi = function () {
        return !1;
      },
      bi = "transform",
      Ci = "transformOrigin",
      Ei = function (t) {
        return Math.round(1e4 * t) / 1e4;
      },
      Si = Array.isArray,
      Ti = function (t, e) {
        var i = Ge.createElementNS
          ? Ge.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
          : Ge.createElement(t);
        return i.style ? i : Ge.createElement(t);
      },
      Pi = 180 / Math.PI,
      Ai = new Xe(),
      Fi =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      ki = [],
      Mi = {},
      Li = 0,
      Oi = /^(?:a|input|textarea|button|select)$/i,
      Ii = 0,
      ji = {},
      zi = {},
      Bi = function (t, e) {
        var i,
          n = {};
        for (i in t) n[i] = e ? t[i] * e : t[i];
        return n;
      },
      Ri = function t(e, i) {
        for (var n, r = e.length; r--;)
          i
            ? (e[r].style.touchAction = i)
            : e[r].style.removeProperty("touch-action"),
            (n = e[r].children) && n.length && t(n, i);
      },
      Ni = function () {
        return ki.forEach(function (t) {
          return t();
        });
      },
      Hi = function () {
        return !ki.length && Ue.ticker.remove(Ni);
      },
      qi = function (t) {
        for (var e = ki.length; e--;) ki[e] === t && ki.splice(e, 1);
        Ue.to(Hi, {
          overwrite: !0,
          delay: 15,
          duration: 0,
          onComplete: Hi,
          data: "_draggable",
        });
      },
      Zi = function (t, e, i, n) {
        if (t.addEventListener) {
          var r = si[e];
          (n = n || (ri ? { passive: !1 } : null)),
            t.addEventListener(r || e, i, n),
            r && e !== r && t.addEventListener(e, i, n);
        }
      },
      Qi = function (t, e, i, n) {
        if (t.removeEventListener) {
          var r = si[e];
          t.removeEventListener(r || e, i, n),
            r && e !== r && t.removeEventListener(e, i, n);
        }
      },
      Xi = function (t) {
        t.preventDefault && t.preventDefault(),
          t.preventManipulation && t.preventManipulation();
      },
      Yi = function t(e) {
        (ai = e.touches && gi < e.touches.length), Qi(e.target, "touchend", t);
      },
      Wi = function (t) {
        (ai = t.touches && gi < t.touches.length), Zi(t.target, "touchend", Yi);
      },
      Ui = function (t) {
        return (
          Ve.pageYOffset ||
          t.scrollTop ||
          t.documentElement.scrollTop ||
          t.body.scrollTop ||
          0
        );
      },
      Vi = function (t) {
        return (
          Ve.pageXOffset ||
          t.scrollLeft ||
          t.documentElement.scrollLeft ||
          t.body.scrollLeft ||
          0
        );
      },
      Gi = function t(e, i) {
        Zi(e, "scroll", i), $i(e.parentNode) || t(e.parentNode, i);
      },
      Ki = function t(e, i) {
        Qi(e, "scroll", i), $i(e.parentNode) || t(e.parentNode, i);
      },
      $i = function (t) {
        return !(
          t &&
          t !== Ke &&
          9 !== t.nodeType &&
          t !== Ge.body &&
          t !== Ve &&
          t.nodeType &&
          t.parentNode
        );
      },
      Ji = function (t, e) {
        var i = "x" === e ? "Width" : "Height",
          n = "scroll" + i,
          r = "client" + i;
        return Math.max(
          0,
          $i(t)
            ? Math.max(Ke[n], $e[n]) - (Ve["inner" + i] || Ke[r] || $e[r])
            : t[n] - t[r]
        );
      },
      tn = function t(e, i) {
        var n = Ji(e, "x"),
          r = Ji(e, "y");
        $i(e) ? (e = zi) : t(e.parentNode, i),
          (e._gsMaxScrollX = n),
          (e._gsMaxScrollY = r),
          i ||
          ((e._gsScrollX = e.scrollLeft || 0),
            (e._gsScrollY = e.scrollTop || 0));
      },
      en = function (t, e, i) {
        var n = t.style;
        n &&
          (Di(n[e]) && (e = ii(e, t) || e),
            null == i
              ? n.removeProperty &&
              n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
              : (n[e] = i));
      },
      nn = function (t) {
        return Ve.getComputedStyle(
          t instanceof Element ? t : t.host || (t.parentNode || {}).host || t
        );
      },
      rn = {},
      on = function (t) {
        if (t === Ve)
          return (
            (rn.left = rn.top = 0),
            (rn.width = rn.right =
              Ke.clientWidth || t.innerWidth || $e.clientWidth || 0),
            (rn.height = rn.bottom =
              (t.innerHeight || 0) - 20 < Ke.clientHeight
                ? Ke.clientHeight
                : t.innerHeight || $e.clientHeight || 0),
            rn
          );
        var e = t.ownerDocument || Ge,
          i = Di(t.pageX)
            ? t.nodeType || Di(t.left) || Di(t.top)
              ? ni(t)[0].getBoundingClientRect()
              : t
            : {
              left: t.pageX - Vi(e),
              top: t.pageY - Ui(e),
              right: t.pageX - Vi(e) + 1,
              bottom: t.pageY - Ui(e) + 1,
            };
        return (
          Di(i.right) && !Di(i.width)
            ? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
            : Di(i.width) &&
            (i = {
              width: i.right - i.left,
              height: i.bottom - i.top,
              right: i.right,
              left: i.left,
              bottom: i.bottom,
              top: i.top,
            }),
          i
        );
      },
      sn = function (t, e, i) {
        var n,
          r = t.vars,
          o = r[i],
          s = t._listeners[e];
        return (
          _i(o) &&
          (n = o.apply(
            r.callbackScope || t,
            r[i + "Params"] || [t.pointerEvent]
          )),
          s && !1 === t.dispatchEvent(e) && (n = !1),
          n
        );
      },
      an = function (t, e) {
        var i,
          n,
          r,
          o = ni(t)[0];
        return o.nodeType || o === Ve
          ? un(o, e)
          : Di(t.left)
            ? {
              left: (n = t.min || t.minX || t.minRotation || 0),
              top: (i = t.min || t.minY || 0),
              width: (t.max || t.maxX || t.maxRotation || 0) - n,
              height: (t.max || t.maxY || 0) - i,
            }
            : ((r = { x: 0, y: 0 }),
            {
              left: t.left - r.x,
              top: t.top - r.y,
              width: t.width,
              height: t.height,
            });
      },
      ln = {},
      un = function (t, e) {
        e = ni(e)[0];
        var i,
          n,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          d,
          p,
          f,
          m = t.getBBox && t.ownerSVGElement,
          g = t.ownerDocument || Ge;
        if (t === Ve)
          (r = Ui(g)),
            (n =
              (i = Vi(g)) +
              (g.documentElement.clientWidth ||
                t.innerWidth ||
                g.body.clientWidth ||
                0)),
            (o =
              r +
              ((t.innerHeight || 0) - 20 < g.documentElement.clientHeight
                ? g.documentElement.clientHeight
                : t.innerHeight || g.body.clientHeight || 0));
        else {
          if (e === Ve || Di(e)) return t.getBoundingClientRect();
          (i = r = 0),
            m
              ? ((d = (h = t.getBBox()).width), (p = h.height))
              : (t.viewBox &&
                (h = t.viewBox.baseVal) &&
                ((i = h.x || 0),
                  (r = h.y || 0),
                  (d = h.width),
                  (p = h.height)),
                d ||
                ((h = "border-box" === (f = nn(t)).boxSizing),
                  (d =
                    (parseFloat(f.width) || t.clientWidth || 0) +
                    (h
                      ? 0
                      : parseFloat(f.borderLeftWidth) +
                      parseFloat(f.borderRightWidth))),
                  (p =
                    (parseFloat(f.height) || t.clientHeight || 0) +
                    (h
                      ? 0
                      : parseFloat(f.borderTopWidth) +
                      parseFloat(f.borderBottomWidth))))),
            (n = d),
            (o = p);
        }
        return t === e
          ? { left: i, top: r, width: n - i, height: o - r }
          : ((a = (s = Ye(e, !0).multiply(Ye(t))).apply({ x: i, y: r })),
            (l = s.apply({ x: n, y: r })),
            (u = s.apply({ x: n, y: o })),
            (c = s.apply({ x: i, y: o })),
          {
            left: (i = Math.min(a.x, l.x, u.x, c.x)),
            top: (r = Math.min(a.y, l.y, u.y, c.y)),
            width: Math.max(a.x, l.x, u.x, c.x) - i,
            height: Math.max(a.y, l.y, u.y, c.y) - r,
          });
      },
      cn = function (t, e, i, n, r, o) {
        var s,
          a,
          l,
          u = {};
        if (e)
          if (1 !== r && e instanceof Array) {
            if (((u.end = s = []), (l = e.length), wi(e[0])))
              for (a = 0; a < l; a++) s[a] = Bi(e[a], r);
            else for (a = 0; a < l; a++) s[a] = e[a] * r;
            (i += 1.1), (n -= 1.1);
          } else
            _i(e)
              ? (u.end = function (i) {
                var n,
                  o,
                  s = e.call(t, i);
                if (1 !== r)
                  if (wi(s)) {
                    for (o in ((n = {}), s)) n[o] = s[o] * r;
                    s = n;
                  } else s *= r;
                return s;
              })
              : (u.end = e);
        return (
          (i || 0 === i) && (u.max = i),
          (n || 0 === n) && (u.min = n),
          o && (u.velocity = 0),
          u
        );
      },
      hn = function t(e) {
        var i;
        return (
          !(!e || !e.getAttribute || e === $e) &&
          (!(
            "true" !== (i = e.getAttribute("data-clickable")) &&
            ("false" === i ||
              (!Oi.test(e.nodeName + "") &&
                "true" !== e.getAttribute("contentEditable")))
          ) ||
            t(e.parentNode))
        );
      },
      dn = function (t, e) {
        for (var i, n = t.length; n--;)
          ((i = t[n]).ondragstart = i.onselectstart = e ? null : xi),
            Ue.set(i, { lazy: !0, userSelect: e ? "text" : "none" });
      },
      pn = function (t, e) {
        (t = Ue.utils.toArray(t)[0]), (e = e || {});
        var i,
          n,
          r,
          o,
          s,
          a,
          l = document.createElement("div"),
          u = l.style,
          c = t.firstChild,
          h = 0,
          d = 0,
          p = t.scrollTop,
          f = t.scrollLeft,
          m = t.scrollWidth,
          g = t.scrollHeight,
          v = 0,
          y = 0,
          _ = 0;
        fi && !1 !== e.force3D
          ? ((s = "translate3d("), (a = "px,0px)"))
          : bi && ((s = "translate("), (a = "px)")),
          (this.scrollTop = function (t, e) {
            if (!arguments.length) return -this.top();
            this.top(-t, e);
          }),
          (this.scrollLeft = function (t, e) {
            if (!arguments.length) return -this.left();
            this.left(-t, e);
          }),
          (this.left = function (i, n) {
            if (!arguments.length) return -(t.scrollLeft + d);
            var r = t.scrollLeft - f,
              o = d;
            if ((r > 2 || r < -2) && !n)
              return (
                (f = t.scrollLeft),
                Ue.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                this.left(-f),
                void (e.onKill && e.onKill())
              );
            (i = -i) < 0
              ? ((d = (i - 0.5) | 0), (i = 0))
              : i > y
                ? ((d = (i - y) | 0), (i = y))
                : (d = 0),
              (d || o) &&
              (this._skip || (u[bi] = s + -d + "px," + -h + a),
                d + v >= 0 && (u.paddingRight = d + v + "px")),
              (t.scrollLeft = 0 | i),
              (f = t.scrollLeft);
          }),
          (this.top = function (i, n) {
            if (!arguments.length) return -(t.scrollTop + h);
            var r = t.scrollTop - p,
              o = h;
            if ((r > 2 || r < -2) && !n)
              return (
                (p = t.scrollTop),
                Ue.killTweensOf(this, { top: 1, scrollTop: 1 }),
                this.top(-p),
                void (e.onKill && e.onKill())
              );
            (i = -i) < 0
              ? ((h = (i - 0.5) | 0), (i = 0))
              : i > _
                ? ((h = (i - _) | 0), (i = _))
                : (h = 0),
              (h || o) && (this._skip || (u[bi] = s + -d + "px," + -h + a)),
              (t.scrollTop = 0 | i),
              (p = t.scrollTop);
          }),
          (this.maxScrollTop = function () {
            return _;
          }),
          (this.maxScrollLeft = function () {
            return y;
          }),
          (this.disable = function () {
            for (c = l.firstChild; c;)
              (o = c.nextSibling), t.appendChild(c), (c = o);
            t === l.parentNode && t.removeChild(l);
          }),
          (this.enable = function () {
            if ((c = t.firstChild) !== l) {
              for (; c;) (o = c.nextSibling), l.appendChild(c), (c = o);
              t.appendChild(l), this.calibrate();
            }
          }),
          (this.calibrate = function (e) {
            var o,
              s,
              a,
              c = t.clientWidth === i;
            (p = t.scrollTop),
              (f = t.scrollLeft),
              (c &&
                t.clientHeight === n &&
                l.offsetHeight === r &&
                m === t.scrollWidth &&
                g === t.scrollHeight &&
                !e) ||
              ((h || d) &&
                ((s = this.left()),
                  (a = this.top()),
                  this.left(-t.scrollLeft),
                  this.top(-t.scrollTop)),
                (o = nn(t)),
                (c && !e) ||
                ((u.display = "block"),
                  (u.width = "auto"),
                  (u.paddingRight = "0px"),
                  (v = Math.max(0, t.scrollWidth - t.clientWidth)) &&
                  (v +=
                    parseFloat(o.paddingLeft) +
                    (mi ? parseFloat(o.paddingRight) : 0))),
                (u.display = "inline-block"),
                (u.position = "relative"),
                (u.overflow = "visible"),
                (u.verticalAlign = "top"),
                (u.boxSizing = "content-box"),
                (u.width = "100%"),
                (u.paddingRight = v + "px"),
                mi && (u.paddingBottom = o.paddingBottom),
                (i = t.clientWidth),
                (n = t.clientHeight),
                (m = t.scrollWidth),
                (g = t.scrollHeight),
                (y = t.scrollWidth - i),
                (_ = t.scrollHeight - n),
                (r = l.offsetHeight),
                (u.display = "block"),
                (s || a) && (this.left(s), this.top(a)));
          }),
          (this.content = l),
          (this.element = t),
          (this._skip = !1),
          this.enable();
      },
      fn = function (t) {
        if (vi() && document.body) {
          var e = window && window.navigator;
          (Ve = window),
            (Ge = document),
            (Ke = Ge.documentElement),
            ($e = Ge.body),
            (Je = Ti("div")),
            (hi = !!window.PointerEvent),
            ((ti = Ti("div")).style.cssText =
              "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
            (ci = "grab" === ti.style.cursor ? "grab" : "move"),
            (li = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
            (oi =
              ("ontouchstart" in Ke && "orientation" in Ve) ||
              (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
            (n = Ti("div")),
            (r = Ti("div")),
            (o = r.style),
            (s = $e),
            (o.display = "inline-block"),
            (o.position = "relative"),
            (n.style.cssText =
              "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
            n.appendChild(r),
            s.appendChild(n),
            (i = r.offsetHeight + 18 > n.scrollHeight),
            s.removeChild(n),
            (mi = i),
            (si = (function (t) {
              for (
                var e = t.split(","),
                i = (
                  ("onpointerdown" in Je)
                    ? "pointerdown,pointermove,pointerup,pointercancel"
                    : ("onmspointerdown" in Je)
                      ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                      : t
                ).split(","),
                n = {},
                r = 4;
                --r > -1;

              )
                (n[e[r]] = i[r]), (n[i[r]] = e[r]);
              try {
                Ke.addEventListener(
                  "test",
                  null,
                  Object.defineProperty({}, "passive", {
                    get: function () {
                      ri = 1;
                    },
                  })
                );
              } catch (t) { }
              return n;
            })("touchstart,touchmove,touchend,touchcancel")),
            Zi(Ge, "touchcancel", xi),
            Zi(Ve, "touchmove", xi),
            $e && $e.addEventListener("touchstart", xi),
            Zi(Ge, "contextmenu", function () {
              for (var t in Mi) Mi[t].isPressed && Mi[t].endDrag();
            }),
            (Ue = ei = yi());
        }
        var i, n, r, o, s;
        Ue
          ? ((ui = Ue.plugins.inertia),
            (di = Ue.core.context || function () { }),
            (ii = Ue.utils.checkPrefix),
            (bi = ii(bi)),
            (Ci = ii(Ci)),
            (ni = Ue.utils.toArray),
            (pi = Ue.core.getStyleSaver),
            (fi = !!ii("perspective")))
          : t && console.warn("Please gsap.registerPlugin(Draggable)");
      },
      mn = (function (t) {
        var e, i;
        function n(e, i) {
          var r;
          (r = t.call(this) || this),
            ei || fn(1),
            (e = ni(e)[0]),
            (r.styles = pi && pi(e, "transform,left,top")),
            ui || (ui = Ue.plugins.inertia),
            (r.vars = i = Bi(i || {})),
            (r.target = e),
            (r.x = r.y = r.rotation = 0),
            (r.dragResistance = parseFloat(i.dragResistance) || 0),
            (r.edgeResistance = isNaN(i.edgeResistance)
              ? 1
              : parseFloat(i.edgeResistance) || 0),
            (r.lockAxis = i.lockAxis),
            (r.autoScroll = i.autoScroll || 0),
            (r.lockedAxis = null),
            (r.allowEventDefault = !!i.allowEventDefault),
            Ue.getProperty(e, "x");
          var o,
            s,
            a,
            l,
            u,
            c,
            h,
            d,
            p,
            f,
            m,
            g,
            v,
            y,
            _,
            w,
            D,
            x,
            b,
            C,
            E,
            S,
            T,
            P,
            A,
            F,
            k,
            M,
            L,
            O,
            I,
            j,
            z,
            B = (i.type || "x,y").toLowerCase(),
            R = ~B.indexOf("x") || ~B.indexOf("y"),
            N = -1 !== B.indexOf("rotation"),
            H = N ? "rotation" : R ? "x" : "left",
            q = R ? "y" : "top",
            Z = !(!~B.indexOf("x") && !~B.indexOf("left") && "scroll" !== B),
            Q = !(!~B.indexOf("y") && !~B.indexOf("top") && "scroll" !== B),
            X = i.minimumMovement || 2,
            Y = We(r),
            W = ni(i.trigger || i.handle || e),
            U = {},
            V = 0,
            G = !1,
            K = i.autoScrollMarginTop || 40,
            $ = i.autoScrollMarginRight || 40,
            J = i.autoScrollMarginBottom || 40,
            tt = i.autoScrollMarginLeft || 40,
            et = i.clickableTest || hn,
            it = 0,
            nt = e._gsap || Ue.core.getCache(e),
            rt = (function t(e) {
              return (
                "fixed" === nn(e).position ||
                ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
              );
            })(e),
            ot = function (t, i) {
              return parseFloat(nt.get(e, t, i));
            },
            st = e.ownerDocument || Ge,
            at = function (t) {
              return (
                Xi(t),
                t.stopImmediatePropagation && t.stopImmediatePropagation(),
                !1
              );
            },
            lt = function t(i) {
              if (Y.autoScroll && Y.isDragging && (G || D)) {
                var n,
                  r,
                  o,
                  a,
                  l,
                  u,
                  c,
                  h,
                  p = e,
                  f = 15 * Y.autoScroll;
                for (
                  G = !1,
                  zi.scrollTop =
                  null != Ve.pageYOffset
                    ? Ve.pageYOffset
                    : null != st.documentElement.scrollTop
                      ? st.documentElement.scrollTop
                      : st.body.scrollTop,
                  zi.scrollLeft =
                  null != Ve.pageXOffset
                    ? Ve.pageXOffset
                    : null != st.documentElement.scrollLeft
                      ? st.documentElement.scrollLeft
                      : st.body.scrollLeft,
                  a = Y.pointerX - zi.scrollLeft,
                  l = Y.pointerY - zi.scrollTop;
                  p && !r;

                )
                  (n = (r = $i(p.parentNode)) ? zi : p.parentNode),
                    (o = r
                      ? {
                        bottom: Math.max(
                          Ke.clientHeight,
                          Ve.innerHeight || 0
                        ),
                        right: Math.max(Ke.clientWidth, Ve.innerWidth || 0),
                        left: 0,
                        top: 0,
                      }
                      : n.getBoundingClientRect()),
                    (u = c = 0),
                    Q &&
                    ((h = n._gsMaxScrollY - n.scrollTop) < 0
                      ? (c = h)
                      : l > o.bottom - J && h
                        ? ((G = !0),
                          (c = Math.min(
                            h,
                            (f * (1 - Math.max(0, o.bottom - l) / J)) | 0
                          )))
                        : l < o.top + K &&
                        n.scrollTop &&
                        ((G = !0),
                          (c = -Math.min(
                            n.scrollTop,
                            (f * (1 - Math.max(0, l - o.top) / K)) | 0
                          ))),
                      c && (n.scrollTop += c)),
                    Z &&
                    ((h = n._gsMaxScrollX - n.scrollLeft) < 0
                      ? (u = h)
                      : a > o.right - $ && h
                        ? ((G = !0),
                          (u = Math.min(
                            h,
                            (f * (1 - Math.max(0, o.right - a) / $)) | 0
                          )))
                        : a < o.left + tt &&
                        n.scrollLeft &&
                        ((G = !0),
                          (u = -Math.min(
                            n.scrollLeft,
                            (f * (1 - Math.max(0, a - o.left) / tt)) | 0
                          ))),
                      u && (n.scrollLeft += u)),
                    r &&
                    (u || c) &&
                    (Ve.scrollTo(n.scrollLeft, n.scrollTop),
                      Dt(Y.pointerX + u, Y.pointerY + c)),
                    (p = n);
              }
              if (D) {
                var m = Y.x,
                  g = Y.y;
                N
                  ? ((Y.deltaX = m - parseFloat(nt.rotation)),
                    (Y.rotation = m),
                    (nt.rotation = m + "deg"),
                    nt.renderTransform(1, nt))
                  : s
                    ? (Q && ((Y.deltaY = g - s.top()), s.top(g)),
                      Z && ((Y.deltaX = m - s.left()), s.left(m)))
                    : R
                      ? (Q &&
                        ((Y.deltaY = g - parseFloat(nt.y)), (nt.y = g + "px")),
                        Z && ((Y.deltaX = m - parseFloat(nt.x)), (nt.x = m + "px")),
                        nt.renderTransform(1, nt))
                      : (Q &&
                        ((Y.deltaY = g - parseFloat(e.style.top || 0)),
                          (e.style.top = g + "px")),
                        Z &&
                        ((Y.deltaX = m - parseFloat(e.style.left || 0)),
                          (e.style.left = m + "px"))),
                  !d ||
                  i ||
                  M ||
                  ((M = !0),
                    !1 === sn(Y, "drag", "onDrag") &&
                    (Z && (Y.x -= Y.deltaX), Q && (Y.y -= Y.deltaY), t(!0)),
                    (M = !1));
              }
              D = !1;
            },
            ut = function (t, i) {
              var n,
                r,
                o = Y.x,
                a = Y.y;
              e._gsap || (nt = Ue.core.getCache(e)),
                nt.uncache && Ue.getProperty(e, "x"),
                R
                  ? ((Y.x = parseFloat(nt.x)), (Y.y = parseFloat(nt.y)))
                  : N
                    ? (Y.x = Y.rotation = parseFloat(nt.rotation))
                    : s
                      ? ((Y.y = s.top()), (Y.x = s.left()))
                      : ((Y.y =
                        parseFloat(e.style.top || ((r = nn(e)) && r.top)) || 0),
                        (Y.x = parseFloat(e.style.left || (r || {}).left) || 0)),
                (b || C || E) &&
                !i &&
                (Y.isDragging || Y.isThrowing) &&
                (E &&
                  ((ji.x = Y.x),
                    (ji.y = Y.y),
                    (n = E(ji)).x !== Y.x && ((Y.x = n.x), (D = !0)),
                    n.y !== Y.y && ((Y.y = n.y), (D = !0))),
                  b &&
                  (n = b(Y.x)) !== Y.x &&
                  ((Y.x = n), N && (Y.rotation = n), (D = !0)),
                  C && ((n = C(Y.y)) !== Y.y && (Y.y = n), (D = !0))),
                D && lt(!0),
                t ||
                ((Y.deltaX = Y.x - o),
                  (Y.deltaY = Y.y - a),
                  sn(Y, "throwupdate", "onThrowUpdate"));
            },
            ct = function (t, e, i, n) {
              return (
                null == e && (e = -1e20),
                null == i && (i = 1e20),
                _i(t)
                  ? function (r) {
                    var o = Y.isPressed ? 1 - Y.edgeResistance : 1;
                    return (
                      t.call(
                        Y,
                        (r > i
                          ? i + (r - i) * o
                          : r < e
                            ? e + (r - e) * o
                            : r) * n
                      ) * n
                    );
                  }
                  : Si(t)
                    ? function (n) {
                      for (var r, o, s = t.length, a = 0, l = 1e20; --s > -1;)
                        (o = (r = t[s]) - n) < 0 && (o = -o),
                          o < l && r >= e && r <= i && ((a = s), (l = o));
                      return t[a];
                    }
                    : isNaN(t)
                      ? function (t) {
                        return t;
                      }
                      : function () {
                        return t * n;
                      }
              );
            },
            ht = function () {
              var t, n, r, o;
              (h = !1),
                s
                  ? (s.calibrate(),
                    (Y.minX = m = -s.maxScrollLeft()),
                    (Y.minY = v = -s.maxScrollTop()),
                    (Y.maxX = f = Y.maxY = g = 0),
                    (h = !0))
                  : i.bounds &&
                  ((t = an(i.bounds, e.parentNode)),
                    N
                      ? ((Y.minX = m = t.left),
                        (Y.maxX = f = t.left + t.width),
                        (Y.minY = v = Y.maxY = g = 0))
                      : Di(i.bounds.maxX) && Di(i.bounds.maxY)
                        ? ((n = an(e, e.parentNode)),
                          (Y.minX = m =
                            Math.round(ot(H, "px") + t.left - n.left)),
                          (Y.minY = v = Math.round(ot(q, "px") + t.top - n.top)),
                          (Y.maxX = f = Math.round(m + (t.width - n.width))),
                          (Y.maxY = g = Math.round(v + (t.height - n.height))))
                        : ((t = i.bounds),
                          (Y.minX = m = t.minX),
                          (Y.minY = v = t.minY),
                          (Y.maxX = f = t.maxX),
                          (Y.maxY = g = t.maxY)),
                    m > f && ((Y.minX = f), (Y.maxX = f = m), (m = Y.minX)),
                    v > g && ((Y.minY = g), (Y.maxY = g = v), (v = Y.minY)),
                    N && ((Y.minRotation = m), (Y.maxRotation = f)),
                    (h = !0)),
                i.liveSnap &&
                ((r = !0 === i.liveSnap ? i.snap || {} : i.liveSnap),
                  (o = Si(r) || _i(r)),
                  N
                    ? ((b = ct(o ? r : r.rotation, m, f, 1)), (C = null))
                    : r.points
                      ? (E = (function (t, e, i, n, r, o, s) {
                        return (
                          (o = o && o < 1e20 ? o * o : 1e20),
                          _i(t)
                            ? function (a) {
                              var l,
                                u,
                                c,
                                h = Y.isPressed ? 1 - Y.edgeResistance : 1,
                                d = a.x,
                                p = a.y;
                              return (
                                (a.x = d =
                                  d > i
                                    ? i + (d - i) * h
                                    : d < e
                                      ? e + (d - e) * h
                                      : d),
                                (a.y = p =
                                  p > r
                                    ? r + (p - r) * h
                                    : p < n
                                      ? n + (p - n) * h
                                      : p),
                                (l = t.call(Y, a)) !== a &&
                                ((a.x = l.x), (a.y = l.y)),
                                1 !== s && ((a.x *= s), (a.y *= s)),
                                o < 1e20 &&
                                (u = a.x - d) * u + (c = a.y - p) * c > o &&
                                ((a.x = d), (a.y = p)),
                                a
                              );
                            }
                            : Si(t)
                              ? function (e) {
                                for (
                                  var i, n, r, s, a = t.length, l = 0, u = 1e20;
                                  --a > -1;

                                )
                                  (s =
                                    (i = (r = t[a]).x - e.x) * i +
                                    (n = r.y - e.y) * n) < u &&
                                    ((l = a), (u = s));
                                return u <= o ? t[l] : e;
                              }
                              : function (t) {
                                return t;
                              }
                        );
                      })(o ? r : r.points, m, f, v, g, r.radius, s ? -1 : 1))
                      : (Z &&
                        (b = ct(
                          o ? r : r.x || r.left || r.scrollLeft,
                          m,
                          f,
                          s ? -1 : 1
                        )),
                        Q &&
                        (C = ct(
                          o ? r : r.y || r.top || r.scrollTop,
                          v,
                          g,
                          s ? -1 : 1
                        ))));
            },
            dt = function () {
              (Y.isThrowing = !1), sn(Y, "throwcomplete", "onThrowComplete");
            },
            pt = function () {
              Y.isThrowing = !1;
            },
            ft = function (t, n) {
              var r, o, a, l;
              t && ui
                ? (!0 === t &&
                  ((r = i.snap || i.liveSnap || {}),
                    (o = Si(r) || _i(r)),
                    (t = {
                      resistance:
                        (i.throwResistance || i.resistance || 1e3) /
                        (N ? 10 : 1),
                    }),
                    N
                      ? (t.rotation = cn(Y, o ? r : r.rotation, f, m, 1, n))
                      : (Z &&
                        (t[H] = cn(
                          Y,
                          o ? r : r.points || r.x || r.left,
                          f,
                          m,
                          s ? -1 : 1,
                          n || "x" === Y.lockedAxis
                        )),
                        Q &&
                        (t[q] = cn(
                          Y,
                          o ? r : r.points || r.y || r.top,
                          g,
                          v,
                          s ? -1 : 1,
                          n || "y" === Y.lockedAxis
                        )),
                        (r.points || (Si(r) && wi(r[0]))) &&
                        ((t.linkedProps = H + "," + q),
                          (t.radius = r.radius)))),
                  (Y.isThrowing = !0),
                  (l = isNaN(i.overshootTolerance)
                    ? 1 === i.edgeResistance
                      ? 0
                      : 1 - Y.edgeResistance + 0.2
                    : i.overshootTolerance),
                  t.duration ||
                  (t.duration = {
                    max: Math.max(
                      i.minDuration || 0,
                      "maxDuration" in i ? i.maxDuration : 2
                    ),
                    min: isNaN(i.minDuration)
                      ? 0 === l || (wi(t) && t.resistance > 1e3)
                        ? 0
                        : 0.5
                      : i.minDuration,
                    overshoot: l,
                  }),
                  (Y.tween = a =
                    Ue.to(s || e, {
                      inertia: t,
                      data: "_draggable",
                      inherit: !1,
                      onComplete: dt,
                      onInterrupt: pt,
                      onUpdate: i.fastMode ? sn : ut,
                      onUpdateParams: i.fastMode
                        ? [Y, "onthrowupdate", "onThrowUpdate"]
                        : r && r.radius
                          ? [!1, !0]
                          : [],
                    })),
                  i.fastMode ||
                  (s && (s._skip = !0),
                    a.render(1e9, !0, !0),
                    ut(!0, !0),
                    (Y.endX = Y.x),
                    (Y.endY = Y.y),
                    N && (Y.endRotation = Y.x),
                    a.play(0),
                    ut(!0, !0),
                    s && (s._skip = !1)))
                : h && Y.applyBounds();
            },
            mt = function (t) {
              var i,
                n = P;
              (P = Ye(e.parentNode, !0)),
                t &&
                Y.isPressed &&
                !P.equals(n || new Xe()) &&
                ((i = n.inverse().apply({ x: a, y: l })),
                  P.apply(i, i),
                  (a = i.x),
                  (l = i.y)),
                P.equals(Ai) && (P = null);
            },
            gt = function () {
              var t,
                i,
                n,
                r = 1 - Y.edgeResistance,
                o = rt ? Vi(st) : 0,
                d = rt ? Ui(st) : 0;
              R &&
                ((nt.x = ot(H, "px") + "px"),
                  (nt.y = ot(q, "px") + "px"),
                  nt.renderTransform()),
                mt(!1),
                (ln.x = Y.pointerX - o),
                (ln.y = Y.pointerY - d),
                P && P.apply(ln, ln),
                (a = ln.x),
                (l = ln.y),
                D && (Dt(Y.pointerX, Y.pointerY), lt(!0)),
                (j = Ye(e)),
                s
                  ? (ht(), (c = s.top()), (u = s.left()))
                  : (vt() ? (ut(!0, !0), ht()) : Y.applyBounds(),
                    N
                      ? ((t = e.ownerSVGElement
                        ? [
                          nt.xOrigin - e.getBBox().x,
                          nt.yOrigin - e.getBBox().y,
                        ]
                        : (nn(e)[Ci] || "0 0").split(" ")),
                        (w = Y.rotationOrigin =
                          Ye(e).apply({
                            x: parseFloat(t[0]) || 0,
                            y: parseFloat(t[1]) || 0,
                          })),
                        ut(!0, !0),
                        (i = Y.pointerX - w.x - o),
                        (n = w.y - Y.pointerY + d),
                        (u = Y.x),
                        (c = Y.y = Math.atan2(n, i) * Pi))
                      : ((c = ot(q, "px")), (u = ot(H, "px")))),
                h &&
                r &&
                (u > f
                  ? (u = f + (u - f) / r)
                  : u < m && (u = m - (m - u) / r),
                  N ||
                  (c > g
                    ? (c = g + (c - g) / r)
                    : c < v && (c = v - (v - c) / r))),
                (Y.startX = u = Ei(u)),
                (Y.startY = c = Ei(c));
            },
            vt = function () {
              return Y.tween && Y.tween.isActive();
            },
            yt = function () {
              !ti.parentNode ||
                vt() ||
                Y.isDragging ||
                ti.parentNode.removeChild(ti);
            },
            _t = function (t, r) {
              var u;
              if (
                !o ||
                Y.isPressed ||
                !t ||
                (!(("mousedown" !== t.type && "pointerdown" !== t.type) || r) &&
                  Fi() - it < 30 &&
                  si[Y.pointerEvent.type])
              )
                I && t && o && Xi(t);
              else {
                if (
                  ((A = vt()),
                    (z = !1),
                    (Y.pointerEvent = t),
                    si[t.type]
                      ? ((T = ~t.type.indexOf("touch")
                        ? t.currentTarget || t.target
                        : st),
                        Zi(T, "touchend", xt),
                        Zi(T, "touchmove", wt),
                        Zi(T, "touchcancel", xt),
                        Zi(st, "touchstart", Wi))
                      : ((T = null), Zi(st, "mousemove", wt)),
                    (k = null),
                    (hi && T) ||
                    (Zi(st, "mouseup", xt),
                      t && t.target && Zi(t.target, "mouseup", xt)),
                    (S = et.call(Y, t.target) && !1 === i.dragClickables && !r))
                )
                  return (
                    Zi(t.target, "change", xt),
                    sn(Y, "pressInit", "onPressInit"),
                    sn(Y, "press", "onPress"),
                    dn(W, !0),
                    void (I = !1)
                  );
                var c;
                if (
                  ((F =
                    !(
                      !T ||
                      Z === Q ||
                      !1 === Y.vars.allowNativeTouchScrolling ||
                      (Y.vars.allowContextMenu &&
                        t &&
                        (t.ctrlKey || t.which > 2))
                    ) && (Z ? "y" : "x")),
                    (I = !F && !Y.allowEventDefault) &&
                    (Xi(t), Zi(Ve, "touchforcechange", Xi)),
                    t.changedTouches
                      ? ((t = y = t.changedTouches[0]), (_ = t.identifier))
                      : t.pointerId
                        ? (_ = t.pointerId)
                        : (y = _ = null),
                    gi++,
                    (c = lt),
                    ki.push(c),
                    1 === ki.length && Ue.ticker.add(Ni),
                    (l = Y.pointerY = t.pageY),
                    (a = Y.pointerX = t.pageX),
                    sn(Y, "pressInit", "onPressInit"),
                    (F || Y.autoScroll) && tn(e.parentNode),
                    !e.parentNode ||
                    !Y.autoScroll ||
                    s ||
                    N ||
                    !e.parentNode._gsMaxScrollX ||
                    ti.parentNode ||
                    e.getBBox ||
                    ((ti.style.width = e.parentNode.scrollWidth + "px"),
                      e.parentNode.appendChild(ti)),
                    gt(),
                    Y.tween && Y.tween.kill(),
                    (Y.isThrowing = !1),
                    Ue.killTweensOf(s || e, U, !0),
                    s && Ue.killTweensOf(e, { scrollTo: 1 }, !0),
                    (Y.tween = Y.lockedAxis = null),
                    (i.zIndexBoost || (!N && !s && !1 !== i.zIndexBoost)) &&
                    (e.style.zIndex = n.zIndex++),
                    (Y.isPressed = !0),
                    (d = !(!i.onDrag && !Y._listeners.drag)),
                    (p = !(!i.onMove && !Y._listeners.move)),
                    !1 !== i.cursor || i.activeCursor)
                )
                  for (u = W.length; --u > -1;)
                    Ue.set(W[u], {
                      cursor:
                        i.activeCursor ||
                        i.cursor ||
                        ("grab" === ci ? "grabbing" : ci),
                    });
                sn(Y, "press", "onPress");
              }
            },
            wt = function (t) {
              var i,
                n,
                r,
                s,
                u,
                c,
                h = t;
              if (o && !ai && Y.isPressed && t) {
                if (((Y.pointerEvent = t), (i = t.changedTouches))) {
                  if ((t = i[0]) !== y && t.identifier !== _) {
                    for (
                      s = i.length;
                      --s > -1 && (t = i[s]).identifier !== _ && t.target !== e;

                    );
                    if (s < 0) return;
                  }
                } else if (t.pointerId && _ && t.pointerId !== _) return;
                T &&
                  F &&
                  !k &&
                  ((ln.x = t.pageX - (rt ? Vi(st) : 0)),
                    (ln.y = t.pageY - (rt ? Ui(st) : 0)),
                    P && P.apply(ln, ln),
                    (n = ln.x),
                    (r = ln.y),
                    (((u = Math.abs(n - a)) !== (c = Math.abs(r - l)) &&
                      (u > X || c > X)) ||
                      (li && F === k)) &&
                    ((k = u > c && Z ? "x" : "y"),
                      F && k !== F && Zi(Ve, "touchforcechange", Xi),
                      !1 !== Y.vars.lockAxisOnTouchScroll &&
                      Z &&
                      Q &&
                      ((Y.lockedAxis = "x" === k ? "y" : "x"),
                        _i(Y.vars.onLockAxis) && Y.vars.onLockAxis.call(Y, h)),
                      li && F === k))
                  ? xt(h)
                  : (Y.allowEventDefault ||
                    (F && (!k || F === k)) ||
                    !1 === h.cancelable
                    ? I && (I = !1)
                    : (Xi(h), (I = !0)),
                    Y.autoScroll && (G = !0),
                    Dt(t.pageX, t.pageY, p));
              } else I && t && o && Xi(t);
            },
            Dt = function (t, e, i) {
              var n,
                r,
                o,
                s,
                d,
                p,
                y = 1 - Y.dragResistance,
                _ = 1 - Y.edgeResistance,
                x = Y.pointerX,
                S = Y.pointerY,
                T = c,
                A = Y.x,
                F = Y.y,
                k = Y.endX,
                M = Y.endY,
                L = Y.endRotation,
                O = D;
              (Y.pointerX = t),
                (Y.pointerY = e),
                rt && ((t -= Vi(st)), (e -= Ui(st))),
                N
                  ? ((s = Math.atan2(w.y - e, t - w.x) * Pi),
                    (d = Y.y - s) > 180
                      ? ((c -= 360), (Y.y = s))
                      : d < -180 && ((c += 360), (Y.y = s)),
                    Y.x !== u || Math.abs(c - s) > X
                      ? ((Y.y = s), (o = u + (c - s) * y))
                      : (o = u))
                  : (P &&
                    ((p = t * P.a + e * P.c + P.e),
                      (e = t * P.b + e * P.d + P.f),
                      (t = p)),
                    (r = e - l) < X && r > -X && (r = 0),
                    (n = t - a) < X && n > -X && (n = 0),
                    (Y.lockAxis || Y.lockedAxis) &&
                    (n || r) &&
                    ((p = Y.lockedAxis) ||
                      ((Y.lockedAxis = p =
                        Z && Math.abs(n) > Math.abs(r)
                          ? "y"
                          : Q
                            ? "x"
                            : null),
                        p &&
                        _i(Y.vars.onLockAxis) &&
                        Y.vars.onLockAxis.call(Y, Y.pointerEvent)),
                      "y" === p ? (r = 0) : "x" === p && (n = 0)),
                    (o = Ei(u + n * y)),
                    (s = Ei(c + r * y))),
                (b || C || E) &&
                (Y.x !== o || (Y.y !== s && !N)) &&
                (E &&
                  ((ji.x = o),
                    (ji.y = s),
                    (p = E(ji)),
                    (o = Ei(p.x)),
                    (s = Ei(p.y))),
                  b && (o = Ei(b(o))),
                  C && (s = Ei(C(s)))),
                h &&
                (o > f
                  ? (o = f + Math.round((o - f) * _))
                  : o < m && (o = m + Math.round((o - m) * _)),
                  N ||
                  (s > g
                    ? (s = Math.round(g + (s - g) * _))
                    : s < v && (s = Math.round(v + (s - v) * _)))),
                (Y.x !== o || (Y.y !== s && !N)) &&
                (N
                  ? ((Y.endRotation = Y.x = Y.endX = o), (D = !0))
                  : (Q && ((Y.y = Y.endY = s), (D = !0)),
                    Z && ((Y.x = Y.endX = o), (D = !0))),
                  i && !1 === sn(Y, "move", "onMove")
                    ? ((Y.pointerX = x),
                      (Y.pointerY = S),
                      (c = T),
                      (Y.x = A),
                      (Y.y = F),
                      (Y.endX = k),
                      (Y.endY = M),
                      (Y.endRotation = L),
                      (D = O))
                    : !Y.isDragging &&
                    Y.isPressed &&
                    ((Y.isDragging = z = !0),
                      sn(Y, "dragstart", "onDragStart")));
            },
            xt = function t(n, r) {
              if (
                o &&
                Y.isPressed &&
                (!n ||
                  null == _ ||
                  r ||
                  !(
                    (n.pointerId && n.pointerId !== _ && n.target !== e) ||
                    (n.changedTouches &&
                      !(function (t, e) {
                        for (var i = t.length; i--;)
                          if (t[i].identifier === e) return !0;
                      })(n.changedTouches, _))
                  ))
              ) {
                Y.isPressed = !1;
                var s,
                  a,
                  l,
                  u,
                  c,
                  h = n,
                  d = Y.isDragging,
                  p =
                    Y.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
                  f = Ue.delayedCall(0.001, yt);
                if (
                  (T
                    ? (Qi(T, "touchend", t),
                      Qi(T, "touchmove", wt),
                      Qi(T, "touchcancel", t),
                      Qi(st, "touchstart", Wi))
                    : Qi(st, "mousemove", wt),
                    Qi(Ve, "touchforcechange", Xi),
                    (hi && T) ||
                    (Qi(st, "mouseup", t),
                      n && n.target && Qi(n.target, "mouseup", t)),
                    (D = !1),
                    d && ((V = Ii = Fi()), (Y.isDragging = !1)),
                    qi(lt),
                    S && !p)
                )
                  return (
                    n && (Qi(n.target, "change", t), (Y.pointerEvent = h)),
                    dn(W, !1),
                    sn(Y, "release", "onRelease"),
                    sn(Y, "click", "onClick"),
                    void (S = !1)
                  );
                for (a = W.length; --a > -1;)
                  en(W[a], "cursor", i.cursor || (!1 !== i.cursor ? ci : null));
                if ((gi--, n)) {
                  if (
                    (s = n.changedTouches) &&
                    (n = s[0]) !== y &&
                    n.identifier !== _
                  ) {
                    for (
                      a = s.length;
                      --a > -1 && (n = s[a]).identifier !== _ && n.target !== e;

                    );
                    if (a < 0 && !r) return;
                  }
                  (Y.pointerEvent = h),
                    (Y.pointerX = n.pageX),
                    (Y.pointerY = n.pageY);
                }
                return (
                  p && h
                    ? (Xi(h), (I = !0), sn(Y, "release", "onRelease"))
                    : h && !d
                      ? ((I = !1),
                        A &&
                        (i.snap || i.bounds) &&
                        ft(i.inertia || i.throwProps),
                        sn(Y, "release", "onRelease"),
                        (li && "touchmove" === h.type) ||
                        -1 !== h.type.indexOf("cancel") ||
                        (sn(Y, "click", "onClick"),
                          Fi() - it < 300 &&
                          sn(Y, "doubleclick", "onDoubleClick"),
                          (u = h.target || e),
                          (it = Fi()),
                          (c = function () {
                            it === L ||
                              !Y.enabled() ||
                              Y.isPressed ||
                              h.defaultPrevented ||
                              (u.click
                                ? u.click()
                                : st.createEvent &&
                                ((l =
                                  st.createEvent("MouseEvents")).initMouseEvent(
                                    "click",
                                    !0,
                                    !0,
                                    Ve,
                                    1,
                                    Y.pointerEvent.screenX,
                                    Y.pointerEvent.screenY,
                                    Y.pointerX,
                                    Y.pointerY,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null
                                  ),
                                  u.dispatchEvent(l)));
                          }),
                          li || h.defaultPrevented || Ue.delayedCall(0.05, c)))
                      : (ft(i.inertia || i.throwProps),
                        Y.allowEventDefault ||
                          !h ||
                          (!1 === i.dragClickables && et.call(Y, h.target)) ||
                          !d ||
                          (F && (!k || F !== k)) ||
                          !1 === h.cancelable
                          ? (I = !1)
                          : ((I = !0), Xi(h)),
                        sn(Y, "release", "onRelease")),
                  vt() && f.duration(Y.tween.duration()),
                  d && sn(Y, "dragend", "onDragEnd"),
                  !0
                );
              }
              I && n && o && Xi(n);
            },
            bt = function (t) {
              if (t && Y.isDragging && !s) {
                var i = t.target || e.parentNode,
                  n = i.scrollLeft - i._gsScrollX,
                  r = i.scrollTop - i._gsScrollY;
                (n || r) &&
                  (P
                    ? ((a -= n * P.a + r * P.c), (l -= r * P.d + n * P.b))
                    : ((a -= n), (l -= r)),
                    (i._gsScrollX += n),
                    (i._gsScrollY += r),
                    Dt(Y.pointerX, Y.pointerY));
              }
            },
            Ct = function (t) {
              var e = Fi(),
                i = e - it < 100,
                n = e - V < 50,
                r = i && L === it,
                o = Y.pointerEvent && Y.pointerEvent.defaultPrevented,
                s = i && O === it,
                a = t.isTrusted || (null == t.isTrusted && i && r);
              if (
                ((r || (n && !1 !== Y.vars.suppressClickOnDrag)) &&
                  t.stopImmediatePropagation &&
                  t.stopImmediatePropagation(),
                  i &&
                  (!Y.pointerEvent || !Y.pointerEvent.defaultPrevented) &&
                  (!r || (a && !s)))
              )
                return a && r && (O = it), void (L = it);
              (Y.isPressed || n || i) && ((a && t.detail && i && !o) || Xi(t)),
                i ||
                n ||
                z ||
                (t && t.target && (Y.pointerEvent = t),
                  sn(Y, "click", "onClick"));
            },
            Et = function (t) {
              return P
                ? {
                  x: t.x * P.a + t.y * P.c + P.e,
                  y: t.x * P.b + t.y * P.d + P.f,
                }
                : { x: t.x, y: t.y };
            };
          return (
            (x = n.get(e)) && x.kill(),
            (r.startDrag = function (t, i) {
              var n, r, o, s;
              _t(t || Y.pointerEvent, !0),
                i &&
                !Y.hitTest(t || Y.pointerEvent) &&
                ((n = on(t || Y.pointerEvent)),
                  (r = on(e)),
                  (o = Et({
                    x: n.left + n.width / 2,
                    y: n.top + n.height / 2,
                  })),
                  (s = Et({
                    x: r.left + r.width / 2,
                    y: r.top + r.height / 2,
                  })),
                  (a -= o.x - s.x),
                  (l -= o.y - s.y)),
                Y.isDragging ||
                ((Y.isDragging = z = !0), sn(Y, "dragstart", "onDragStart"));
            }),
            (r.drag = wt),
            (r.endDrag = function (t) {
              return xt(t || Y.pointerEvent, !0);
            }),
            (r.timeSinceDrag = function () {
              return Y.isDragging ? 0 : (Fi() - V) / 1e3;
            }),
            (r.timeSinceClick = function () {
              return (Fi() - it) / 1e3;
            }),
            (r.hitTest = function (t, e) {
              return n.hitTest(Y.target, t, e);
            }),
            (r.getDirection = function (t, i) {
              var n,
                r,
                o,
                s,
                a,
                l,
                h =
                  "velocity" === t && ui
                    ? t
                    : wi(t) && !N
                      ? "element"
                      : "start";
              return (
                "element" === h && ((a = on(Y.target)), (l = on(t))),
                (n =
                  "start" === h
                    ? Y.x - u
                    : "velocity" === h
                      ? ui.getVelocity(e, H)
                      : a.left + a.width / 2 - (l.left + l.width / 2)),
                N
                  ? n < 0
                    ? "counter-clockwise"
                    : "clockwise"
                  : ((i = i || 2),
                    (r =
                      "start" === h
                        ? Y.y - c
                        : "velocity" === h
                          ? ui.getVelocity(e, q)
                          : a.top + a.height / 2 - (l.top + l.height / 2)),
                    (s =
                      (o = Math.abs(n / r)) < 1 / i
                        ? ""
                        : n < 0
                          ? "left"
                          : "right"),
                    o < i &&
                    ("" !== s && (s += "-"), (s += r < 0 ? "up" : "down")),
                    s)
              );
            }),
            (r.applyBounds = function (t, n) {
              var r, o, s, a, l, u;
              if (t && i.bounds !== t) return (i.bounds = t), Y.update(!0, n);
              if ((ut(!0), ht(), h && !vt())) {
                if (
                  ((r = Y.x),
                    (o = Y.y),
                    r > f ? (r = f) : r < m && (r = m),
                    o > g ? (o = g) : o < v && (o = v),
                    (Y.x !== r || Y.y !== o) &&
                    ((s = !0),
                      (Y.x = Y.endX = r),
                      N ? (Y.endRotation = r) : (Y.y = Y.endY = o),
                      (D = !0),
                      lt(!0),
                      Y.autoScroll && !Y.isDragging))
                )
                  for (
                    tn(e.parentNode),
                    a = e,
                    zi.scrollTop =
                    null != Ve.pageYOffset
                      ? Ve.pageYOffset
                      : null != st.documentElement.scrollTop
                        ? st.documentElement.scrollTop
                        : st.body.scrollTop,
                    zi.scrollLeft =
                    null != Ve.pageXOffset
                      ? Ve.pageXOffset
                      : null != st.documentElement.scrollLeft
                        ? st.documentElement.scrollLeft
                        : st.body.scrollLeft;
                    a && !u;

                  )
                    (l = (u = $i(a.parentNode)) ? zi : a.parentNode),
                      Q &&
                      l.scrollTop > l._gsMaxScrollY &&
                      (l.scrollTop = l._gsMaxScrollY),
                      Z &&
                      l.scrollLeft > l._gsMaxScrollX &&
                      (l.scrollLeft = l._gsMaxScrollX),
                      (a = l);
                Y.isThrowing &&
                  (s || Y.endX > f || Y.endX < m || Y.endY > g || Y.endY < v) &&
                  ft(i.inertia || i.throwProps, s);
              }
              return Y;
            }),
            (r.update = function (t, i, n) {
              if (i && Y.isPressed) {
                var r = Ye(e),
                  o = j.apply({ x: Y.x - u, y: Y.y - c }),
                  s = Ye(e.parentNode, !0);
                s.apply({ x: r.e - o.x, y: r.f - o.y }, o),
                  (Y.x -= o.x - s.e),
                  (Y.y -= o.y - s.f),
                  lt(!0),
                  gt();
              }
              var a = Y.x,
                l = Y.y;
              return (
                mt(!i),
                t ? Y.applyBounds() : (D && n && lt(!0), ut(!0)),
                i && (Dt(Y.pointerX, Y.pointerY), D && lt(!0)),
                Y.isPressed &&
                !i &&
                ((Z && Math.abs(a - Y.x) > 0.01) ||
                  (Q && Math.abs(l - Y.y) > 0.01 && !N)) &&
                gt(),
                Y.autoScroll &&
                (tn(e.parentNode, Y.isDragging),
                  (G = Y.isDragging),
                  lt(!0),
                  Ki(e, bt),
                  Gi(e, bt)),
                Y
              );
            }),
            (r.enable = function (t) {
              var n,
                r,
                a,
                l = { lazy: !0 };
              if (
                (!1 !== i.cursor && (l.cursor = i.cursor || ci),
                  Ue.utils.checkPrefix("touchCallout") &&
                  (l.touchCallout = "none"),
                  "soft" !== t)
              ) {
                for (
                  Ri(
                    W,
                    Z === Q
                      ? "none"
                      : (i.allowNativeTouchScrolling &&
                        (e.scrollHeight === e.clientHeight) ==
                        (e.scrollWidth === e.clientHeight)) ||
                        i.allowEventDefault
                        ? "manipulation"
                        : Z
                          ? "pan-y"
                          : "pan-x"
                  ),
                  r = W.length;
                  --r > -1;

                )
                  (a = W[r]),
                    hi || Zi(a, "mousedown", _t),
                    Zi(a, "touchstart", _t),
                    Zi(a, "click", Ct, !0),
                    Ue.set(a, l),
                    a.getBBox &&
                    a.ownerSVGElement &&
                    Z !== Q &&
                    Ue.set(a.ownerSVGElement, {
                      touchAction:
                        i.allowNativeTouchScrolling || i.allowEventDefault
                          ? "manipulation"
                          : Z
                            ? "pan-y"
                            : "pan-x",
                    }),
                    i.allowContextMenu || Zi(a, "contextmenu", at);
                dn(W, !1);
              }
              return (
                Gi(e, bt),
                (o = !0),
                ui &&
                "soft" !== t &&
                ui.track(s || e, R ? "x,y" : N ? "rotation" : "top,left"),
                (e._gsDragID = n = "d" + Li++),
                (Mi[n] = Y),
                s && (s.enable(), (s.element._gsDragID = n)),
                (i.bounds || N) && gt(),
                i.bounds && Y.applyBounds(),
                Y
              );
            }),
            (r.disable = function (t) {
              for (var i, n = Y.isDragging, r = W.length; --r > -1;)
                en(W[r], "cursor", null);
              if ("soft" !== t) {
                for (Ri(W, null), r = W.length; --r > -1;)
                  (i = W[r]),
                    en(i, "touchCallout", null),
                    Qi(i, "mousedown", _t),
                    Qi(i, "touchstart", _t),
                    Qi(i, "click", Ct, !0),
                    Qi(i, "contextmenu", at);
                dn(W, !0),
                  T &&
                  (Qi(T, "touchcancel", xt),
                    Qi(T, "touchend", xt),
                    Qi(T, "touchmove", wt)),
                  Qi(st, "mouseup", xt),
                  Qi(st, "mousemove", wt);
              }
              return (
                Ki(e, bt),
                (o = !1),
                ui &&
                "soft" !== t &&
                (ui.untrack(s || e, R ? "x,y" : N ? "rotation" : "top,left"),
                  Y.tween && Y.tween.kill()),
                s && s.disable(),
                qi(lt),
                (Y.isDragging = Y.isPressed = S = !1),
                n && sn(Y, "dragend", "onDragEnd"),
                Y
              );
            }),
            (r.enabled = function (t, e) {
              return arguments.length ? (t ? Y.enable(e) : Y.disable(e)) : o;
            }),
            (r.kill = function () {
              return (
                (Y.isThrowing = !1),
                Y.tween && Y.tween.kill(),
                Y.disable(),
                Ue.set(W, { clearProps: "userSelect" }),
                delete Mi[e._gsDragID],
                Y
              );
            }),
            (r.revert = function () {
              this.kill(), this.styles && this.styles.revert();
            }),
            ~B.indexOf("scroll") &&
            ((s = r.scrollProxy =
              new pn(
                e,
                (function (t, e) {
                  for (var i in e) i in t || (t[i] = e[i]);
                  return t;
                })(
                  {
                    onKill: function () {
                      Y.isPressed && xt(null);
                    },
                  },
                  i
                )
              )),
              (e.style.overflowY = Q && !oi ? "auto" : "hidden"),
              (e.style.overflowX = Z && !oi ? "auto" : "hidden"),
              (e = s.content)),
            N ? (U.rotation = 1) : (Z && (U[H] = 1), Q && (U[q] = 1)),
            (nt.force3D = !("force3D" in i) || i.force3D),
            di(We(r)),
            r.enable(),
            r
          );
        }
        return (
          (i = t),
          ((e = n).prototype = Object.create(i.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = i),
          (n.register = function (t) {
            (Ue = t), fn();
          }),
          (n.create = function (t, e) {
            return (
              ei || fn(!0),
              ni(t).map(function (t) {
                return new n(t, e);
              })
            );
          }),
          (n.get = function (t) {
            return Mi[(ni(t)[0] || {})._gsDragID];
          }),
          (n.timeSinceDrag = function () {
            return (Fi() - Ii) / 1e3;
          }),
          (n.hitTest = function (t, e, i) {
            if (t === e) return !1;
            var n,
              r,
              o,
              s = on(t),
              a = on(e),
              l = s.top,
              u = s.left,
              c = s.right,
              h = s.bottom,
              d = s.width,
              p = s.height,
              f = a.left > c || a.right < u || a.top > h || a.bottom < l;
            return f || !i
              ? !f
              : ((o = -1 !== (i + "").indexOf("%")),
                (i = parseFloat(i) || 0),
                ((n = {
                  left: Math.max(u, a.left),
                  top: Math.max(l, a.top),
                }).width = Math.min(c, a.right) - n.left),
                (n.height = Math.min(h, a.bottom) - n.top),
                !(n.width < 0 || n.height < 0) &&
                (o
                  ? ((i *= 0.01),
                    (r = n.width * n.height) >= d * p * i ||
                    r >= a.width * a.height * i)
                  : n.width > i && n.height > i));
          }),
          n
        );
      })(
        (function () {
          function t(t) {
            (this._listeners = {}), (this.target = t || this);
          }
          var e = t.prototype;
          return (
            (e.addEventListener = function (t, e) {
              var i = this._listeners[t] || (this._listeners[t] = []);
              ~i.indexOf(e) || i.push(e);
            }),
            (e.removeEventListener = function (t, e) {
              var i = this._listeners[t],
                n = i && i.indexOf(e);
              n >= 0 && i.splice(n, 1);
            }),
            (e.dispatchEvent = function (t) {
              var e,
                i = this;
              return (
                (this._listeners[t] || []).forEach(function (n) {
                  return (
                    !1 === n.call(i, { type: t, target: i.target }) && (e = !1)
                  );
                }),
                e
              );
            }),
            t
          );
        })()
      );
    !(function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
    })(mn.prototype, {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: !1,
      isPressed: !1,
    }),
      (mn.zIndex = 1e3),
      (mn.version = "3.12.5"),
      yi() && Ue.registerPlugin(mn);
    /*!
     * VelocityTracker: 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var gn,
      vn,
      yn,
      _n,
      wn,
      Dn,
      xn,
      bn,
      Cn = function () {
        return gn || ("undefined" != typeof window && (gn = window.gsap));
      },
      En = {},
      Sn = function (t) {
        return bn(t).id;
      },
      Tn = function (t) {
        return En[Sn("string" == typeof t ? yn(t)[0] : t)];
      },
      Pn = function (t) {
        var e,
          i = wn;
        if (t - xn >= 0.05)
          for (xn, xn = t; i;)
            ((e = i.g(i.t, i.p)) !== i.v1 || t - i.t1 > 0.2) &&
              ((i.v2 = i.v1), (i.v1 = e), (i.t2 = i.t1), (i.t1 = t)),
              (i = i._next);
      },
      An = { deg: 360, rad: 2 * Math.PI },
      Fn = function () {
        (gn = Cn()) &&
          ((yn = gn.utils.toArray),
            (_n = gn.utils.getUnit),
            (bn = gn.core.getCache),
            (Dn = gn.ticker),
            (vn = 1));
      },
      kn = function (t, e, i, n) {
        (this.t = t),
          (this.p = e),
          (this.g = t._gsap.get),
          (this.rCap = An[i || _n(this.g(t, e))]),
          (this.v1 = this.v2 = 0),
          (this.t1 = this.t2 = Dn.time),
          n && ((this._next = n), (n._prev = this));
      },
      Mn = (function () {
        function t(t, e) {
          vn || Fn(),
            (this.target = yn(t)[0]),
            (En[Sn(this.target)] = this),
            (this._props = {}),
            e && this.add(e);
        }
        t.register = function (t) {
          (gn = t), Fn();
        };
        var e = t.prototype;
        return (
          (e.get = function (t, e) {
            var i,
              n,
              r,
              o =
                this._props[t] ||
                console.warn("Not tracking " + t + " velocity.");
            return (
              (i = parseFloat(e ? o.v1 : o.g(o.t, o.p)) - parseFloat(o.v2)),
              (n = o.rCap) &&
              (i %= n) !== i % (n / 2) &&
              (i = i < 0 ? i + n : i - n),
              (r = i / ((e ? o.t1 : Dn.time) - o.t2)),
              Math.round(1e4 * r) / 1e4
            );
          }),
          (e.getAll = function () {
            var t,
              e = {},
              i = this._props;
            for (t in i) e[t] = this.get(t);
            return e;
          }),
          (e.isTracking = function (t) {
            return t in this._props;
          }),
          (e.add = function (t, e) {
            t in this._props ||
              (wn || (Dn.add(Pn), (xn = Dn.time)),
                (wn = this._props[t] = new kn(this.target, t, e, wn)));
          }),
          (e.remove = function (t) {
            var e,
              i,
              n = this._props[t];
            n &&
              ((e = n._prev),
                (i = n._next),
                e && (e._next = i),
                i ? (i._prev = e) : wn === n && (Dn.remove(Pn), (wn = 0)),
                delete this._props[t]);
          }),
          (e.kill = function (t) {
            for (var e in this._props) this.remove(e);
            t || delete En[Sn(this.target)];
          }),
          (t.track = function (e, i, n) {
            vn || Fn();
            for (
              var r,
              o,
              s = [],
              a = yn(e),
              l = i.split(","),
              u = (n || "").split(","),
              c = a.length;
              c--;

            ) {
              for (r = Tn(a[c]) || new t(a[c]), o = l.length; o--;)
                r.add(l[o], u[o] || u[0]);
              s.push(r);
            }
            return s;
          }),
          (t.untrack = function (t, e) {
            var i = (e || "").split(",");
            yn(t).forEach(function (t) {
              var e = Tn(t);
              e &&
                (i.length
                  ? i.forEach(function (t) {
                    return e.remove(t);
                  })
                  : e.kill(1));
            });
          }),
          (t.isTracking = function (t, e) {
            var i = Tn(t);
            return i && i.isTracking(e);
          }),
          (t.getVelocity = function (t, e) {
            var i = Tn(t);
            return i && i.isTracking(e)
              ? i.get(e)
              : console.warn("Not tracking velocity of " + e);
          }),
          t
        );
      })();
    (Mn.getByTarget = Tn), Cn() && gn.registerPlugin(Mn);
    /*!
     * InertiaPlugin 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ln,
      On,
      In,
      jn,
      zn,
      Bn,
      Rn,
      Nn,
      Hn,
      qn,
      Zn,
      Qn,
      Xn,
      Yn,
      Wn = Mn.getByTarget,
      Un = function () {
        return (
          Ln ||
          ("undefined" != typeof window &&
            (Ln = window.gsap) &&
            Ln.registerPlugin &&
            Ln)
        );
      },
      Vn = function (t) {
        return "number" == typeof t;
      },
      Gn = function (t) {
        return "object" == typeof t;
      },
      Kn = function (t) {
        return "function" == typeof t;
      },
      $n = Array.isArray,
      Jn = function (t) {
        return t;
      },
      tr = function (t, e, i) {
        for (var n in e) n in t || n === i || (t[n] = e[n]);
        return t;
      },
      er = function t(e) {
        var i,
          n,
          r = {};
        for (i in e) r[i] = Gn((n = e[i])) && !$n(n) ? t(n) : n;
        return r;
      },
      ir = function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          u = e.length,
          c = 0,
          h = 1e10;
        if (Gn(t)) {
          for (; u--;) {
            for (a in ((o = e[u]), (s = 0), t)) s += (l = o[a] - t[a]) * l;
            s < h && ((c = u), (h = s));
          }
          if ((r || 1e10) < 1e10 && r < Math.sqrt(h)) return t;
        } else
          for (; u--;)
            (s = (o = e[u]) - t) < 0 && (s = -s),
              s < h && o >= n && o <= i && ((c = u), (h = s));
        return e[c];
      },
      nr = function (t, e, i, n, r, o, s) {
        if ("auto" === t.end) return t;
        var a,
          l,
          u = t.end;
        if (((i = isNaN(i) ? 1e10 : i), (n = isNaN(n) ? -1e10 : n), Gn(e))) {
          if (
            ((a = e.calculated
              ? e
              : (Kn(u) ? u(e, s) : ir(e, u, i, n, o)) || e),
              !e.calculated)
          ) {
            for (l in a) e[l] = a[l];
            e.calculated = !0;
          }
          a = a[r];
        } else a = Kn(u) ? u(e, s) : $n(u) ? ir(e, u, i, n, o) : parseFloat(u);
        return (
          a > i ? (a = i) : a < n && (a = n),
          { max: a, min: a, unitFactor: t.unitFactor }
        );
      },
      rr = function (t, e, i) {
        return isNaN(t[e]) ? i : +t[e];
      },
      or = function (t, e) {
        return (0.05 * e * t) / qn;
      },
      sr = function (t, e, i) {
        return Math.abs(((e - t) * qn) / i / 0.05);
      },
      ar = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1,
      },
      lr = function (t, e, i, n) {
        if (e.linkedProps) {
          var r,
            o,
            s,
            a,
            l,
            u,
            c = e.linkedProps.split(","),
            h = {};
          for (r = 0; r < c.length; r++)
            (s = e[(o = c[r])]) &&
              ((a = Vn(s.velocity)
                ? s.velocity
                : (l = l || Wn(t)) && l.isTracking(o)
                  ? l.get(o)
                  : 0),
                (u = Math.abs(a / rr(s, "resistance", n))),
                (h[o] = parseFloat(i(t, o)) + or(a, u)));
          return h;
        }
      },
      ur = function () {
        (Ln = Un()) &&
          ((In = Ln.parseEase),
            (jn = Ln.utils.toArray),
            (Rn = Ln.utils.getUnit),
            (Hn = Ln.core.getCache),
            (Zn = Ln.utils.clamp),
            (Xn = Ln.core.getStyleSaver),
            (Yn = Ln.core.reverting || function () { }),
            (zn = In("power3")),
            (qn = zn(0.05)),
            (Nn = Ln.core.PropTween),
            Ln.config({
              resistance: 100,
              unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3,
              },
            }),
            (Bn = Ln.config()),
            Ln.registerPlugin(Mn),
            (On = 1));
      },
      cr = {
        version: "3.12.5",
        name: "inertia",
        register: function (t) {
          (Ln = t), ur();
        },
        init: function (t, e, i, n, r) {
          On || ur();
          var o = Wn(t);
          if ("auto" === e) {
            if (!o)
              return void console.warn(
                "No inertia tracking on " +
                t +
                ". InertiaPlugin.track(target) first."
              );
            e = o.getAll();
          }
          (this.styles = Xn && "object" == typeof t.style && Xn(t)),
            (this.target = t),
            (this.tween = i),
            (Qn = e);
          var s,
            a,
            l,
            u,
            c,
            h,
            d,
            p,
            f,
            m = t._gsap,
            g = m.get,
            v = e.duration,
            y = Gn(v),
            _ = e.preventOvershoot || (y && 0 === v.overshoot),
            w = rr(e, "resistance", Bn.resistance),
            D = Vn(v)
              ? v
              : (function (t, e, i, n, r, o) {
                if (
                  (void 0 === i && (i = 10),
                    void 0 === n && (n = 0.2),
                    void 0 === r && (r = 1),
                    void 0 === o && (o = 0),
                    "string" == typeof t && (t = jn(t)[0]),
                    !t)
                )
                  return 0;
                var s,
                  a,
                  l,
                  u,
                  c,
                  h,
                  d,
                  p,
                  f,
                  m,
                  g = 0,
                  v = 1e10,
                  y = e.inertia || e,
                  _ = Hn(t).get,
                  w = rr(y, "resistance", Bn.resistance);
                for (s in ((m = lr(t, y, _, w)), y))
                  ar[s] ||
                    ((a = y[s]),
                      Gn(a) ||
                      ((p = p || Wn(t)) && p.isTracking(s)
                        ? (a = Vn(a)
                          ? { velocity: a }
                          : { velocity: p.get(s) })
                        : ((u = +a || 0), (l = Math.abs(u / w)))),
                      Gn(a) &&
                      ((u = Vn(a.velocity)
                        ? a.velocity
                        : (p = p || Wn(t)) && p.isTracking(s)
                          ? p.get(s)
                          : 0),
                        (l = Zn(n, i, Math.abs(u / rr(a, "resistance", w)))),
                        (h = (c = parseFloat(_(t, s)) || 0) + or(u, l)),
                        "end" in a &&
                        ((a = nr(
                          a,
                          m && s in m ? m : h,
                          a.max,
                          a.min,
                          s,
                          y.radius,
                          u
                        )),
                          o &&
                          (Qn === e && (Qn = y = er(e)),
                            (y[s] = tr(a, y[s], "end")))),
                        "max" in a && h > +a.max + 1e-10
                          ? ((f = a.unitFactor || Bn.unitFactors[s] || 1),
                            (d =
                              (c > a.max && a.min !== a.max) ||
                                (u * f > -15 && u * f < 45)
                                ? n + 0.1 * (i - n)
                                : sr(c, a.max, u)) +
                            r <
                            v && (v = d + r))
                          : "min" in a &&
                          h < +a.min - 1e-10 &&
                          ((f = a.unitFactor || Bn.unitFactors[s] || 1),
                            (d =
                              (c < a.min && a.min !== a.max) ||
                                (u * f > -45 && u * f < 15)
                                ? n + 0.1 * (i - n)
                                : sr(c, a.min, u)) +
                            r <
                            v && (v = d + r)),
                        d > g && (g = d)),
                      l > g && (g = l));
                return g > v && (g = v), g > i ? i : g < n ? n : g;
              })(
                t,
                e,
                (y && v.max) || 10,
                (y && v.min) || 0.2,
                y && "overshoot" in v ? +v.overshoot : _ ? 0 : 1,
                !0
              );
          for (s in ((e = Qn), (Qn = 0), (f = lr(t, e, g, w)), e))
            ar[s] ||
              ((a = e[s]),
                Kn(a) && (a = a(n, t, r)),
                Vn(a)
                  ? (c = a)
                  : Gn(a) && !isNaN(a.velocity)
                    ? (c = +a.velocity)
                    : o && o.isTracking(s)
                      ? (c = o.get(s))
                      : console.warn(
                        "ERROR: No velocity was defined for " +
                        t +
                        " property: " +
                        s
                      ),
                (h = or(c, D)),
                (p = 0),
                (l = g(t, s)),
                (u = Rn(l)),
                (l = parseFloat(l)),
                Gn(a) &&
                ((d = l + h),
                  "end" in a &&
                  (a = nr(
                    a,
                    f && s in f ? f : d,
                    a.max,
                    a.min,
                    s,
                    e.radius,
                    c
                  )),
                  "max" in a && +a.max < d
                    ? _ || a.preventOvershoot
                      ? (h = a.max - l)
                      : (p = a.max - l - h)
                    : "min" in a &&
                    +a.min > d &&
                    (_ || a.preventOvershoot
                      ? (h = a.min - l)
                      : (p = a.min - l - h))),
                this._props.push(s),
                this.styles && this.styles.save(s),
                (this._pt = new Nn(
                  this._pt,
                  t,
                  s,
                  l,
                  0,
                  Jn,
                  0,
                  m.set(t, s, this)
                )),
                (this._pt.u = u || 0),
                (this._pt.c1 = h),
                (this._pt.c2 = p));
          return i.duration(D), 1;
        },
        render: function (t, e) {
          var i,
            n = e._pt;
          if ((t = zn(e.tween._time / e.tween._dur)) || !Yn())
            for (; n;)
              n.set(
                n.t,
                n.p,
                ((i = n.s + n.c1 * t + n.c2 * t * t),
                  Math.round(1e4 * i) / 1e4 + n.u),
                n.d,
                t
              ),
                (n = n._next);
          else e.styles.revert();
        },
      };
    function hr(t, e) {
      var n = i(3).default;
      let s = jQuery(t.next.container).find(".js-select select");
      r.a.utils.toArray(s).forEach((t) => {
        n(t);
        t.addEventListener("change", (t) => {
          var e = jQuery("#filter-country").val(),
            i = jQuery("#filter-type").val();
          o.a.refresh(),
            "all" == i && "all" == e
              ? jQuery(".js-filterClients").removeClass("-disabled")
              : "all" == i
                ? (jQuery(".js-filterClients").addClass("-disabled"),
                  jQuery(
                    '.js-filterClients[data-country="' + e + '"]'
                  ).removeClass("-disabled"))
                : "all" == e
                  ? (jQuery(".js-filterClients").addClass("-disabled"),
                    jQuery(".js-filterClients").each(function () {
                      jQuery(this)
                        .attr("data-type")
                        .split(",")
                        .map(function (t) {
                          return t.trim();
                        })
                        .includes(i) && jQuery(this).removeClass("-disabled");
                    }))
                  : (jQuery(".js-filterClients").addClass("-disabled"),
                    jQuery(".js-filterClients").each(function () {
                      var t = jQuery(this).attr("data-type"),
                        n = jQuery(this).attr("data-country");
                      t
                        .split(",")
                        .map(function (t) {
                          return t.trim();
                        })
                        .includes(i) &&
                        n === e &&
                        jQuery(this).removeClass("-disabled");
                    }));
        });
      }),
        jQuery(t.next.container)
          .find(".js-variations__open")
          .on("click", function (e) {
            e.preventDefault(),
              jQuery(t.next.container)
                .find(".a-list__options")
                .toggleClass("-open"),
              jQuery(this).toggleClass("-showList");
          }),
        jQuery(t.next.container)
          .find(".js-btnBackUp")
          .on("click", function (t) {
            if (e) {
              const t = document.querySelector(".js-menu");
              e.scrollTo("html", "top 0"), r.a.set(t, { y: 0, overwrite: !0 });
            } else jQuery("html, body").animate({ scrollTop: 0 }, 1e3);
          }),
        jQuery(t.next.container)
          .find(".single_add_to_cart_button_new")
          .on("click", function (t) {
            if (
              (t.preventDefault(), jQuery(this).hasClass("js-variation__link"))
            )
              var e = jQuery(this).data("variation-id");
            else e = 0;
            var i = jQuery(this),
              n = i.closest("form.cart"),
              r = i.val(),
              o = {
                action: "ql_woocommerce_ajax_add_to_cart",
                product_id: n.find("input[name=product_id]").val() || r,
                product_sku: "",
                quantity: 1,
                variation_id: e,
              };
            jQuery.ajax({
              type: "post",
              url: wc_add_to_cart_params.ajax_url,
              data: o,
              beforeSend: function (t) {
                i.removeClass("added").addClass("loading");
              },
              complete: function (t) {
                i.addClass("added").removeClass("loading");
              },
              success: function (t) {
                if (t.error & t.product_url) window.location = t.product_url;
                else {
                  jQuery.post(
                    woocommerce_params.ajax_url,
                    { action: "mode_theme_update_mini_cart" },
                    function (t) {
                      jQuery("#mode-mini-cart").html(t);
                    }
                  ),
                    jQuery(document.body).trigger("added_to_cart", [
                      t.fragments,
                      t.cart_hash,
                      i,
                    ]);
                }
              },
            });
          });
      r.a.matchMedia();
      let a = "#000000",
        l = "#fff",
        u = "#ffffff",
        c = jQuery(t.next.container).find(".js-quote");
      r.a.utils.toArray(c).forEach((t) => {
        !(function t(e, i) {
          setTimeout(function () {
            setTimeout(function () {
              jQuery(e).html(i.current() + 1);
            }, 1e3),
              i.next({ duration: 1, ease: "power3.inOut" }),
              t(e, i);
          }, 7e3);
        })(
          t.querySelectorAll(".js-qoute__count"),
          (function (t, e) {
            (t = r.a.utils.toArray(t)), (e = e || {});
            let i,
              n,
              o,
              s,
              a,
              l,
              u = r.a.timeline({
                repeat: e.repeat,
                paused: e.paused,
                defaults: { ease: "none" },
                onReverseComplete: () =>
                  u.totalTime(u.rawTime() + 100 * u.duration()),
              }),
              c = t.length,
              h = t[0].offsetLeft,
              d = [],
              p = [],
              f = [],
              m = 0,
              g = 100 * (e.speed || 1),
              v = !1 === e.snap ? (t) => t : r.a.utils.snap(e.snap || 1);
            for (
              r.a.set(t, {
                xPercent: (t, e) => {
                  let i = (p[t] = parseFloat(
                    r.a.getProperty(e, "width", "px")
                  ));
                  return (
                    (f[t] = v(
                      (parseFloat(r.a.getProperty(e, "x", "px")) / i) * 100 +
                      r.a.getProperty(e, "xPercent")
                    )),
                    f[t]
                  );
                },
              }),
              r.a.set(t, { x: 0 }),
              i =
              t[c - 1].offsetLeft +
              (f[c - 1] / 100) * p[c - 1] -
              h +
              t[c - 1].offsetWidth * r.a.getProperty(t[c - 1], "scaleX") +
              (parseFloat(e.paddingRight) || 0),
              l = 0;
              l < c;
              l++
            )
              (a = t[l]),
                (n = (f[l] / 100) * p[l]),
                (o = a.offsetLeft + n - h),
                (s = o + p[l] * r.a.getProperty(a, "scaleX")),
                u
                  .to(
                    a,
                    { xPercent: v(((n - s) / p[l]) * 100), duration: s / g },
                    0
                  )
                  .fromTo(
                    a,
                    { xPercent: v(((n - s + i) / p[l]) * 100) },
                    {
                      xPercent: f[l],
                      duration: (n - s + i - n) / g,
                      immediateRender: !1,
                    },
                    s / g
                  )
                  .add("label" + l, o / g),
                (d[l] = o / g);
            function y(t, e) {
              (e = e || {}), Math.abs(t - m) > c / 2 && (t += t > m ? -c : c);
              let i = r.a.utils.wrap(0, c, t),
                n = d[i];
              return (
                n > u.time() != t > m &&
                ((e.modifiers = { time: r.a.utils.wrap(0, u.duration()) }),
                  (n += u.duration() * (t > m ? 1 : -1))),
                (m = i),
                (e.overwrite = !0),
                u.tweenTo(n, e)
              );
            }
            return (
              (u.next = (t) => y(m + 1, t)),
              (u.previous = (t) => y(m - 1, t)),
              (u.current = () => m),
              (u.toIndex = (t, e) => y(t, e)),
              (u.times = d),
              u.progress(1, !0).progress(0, !0),
              e.reversed && (u.vars.onReverseComplete(), u.reverse()),
              u
            );
          })(t.querySelectorAll(".js-quote__slide"), {
            paused: !0,
            repeat: -1,
            speed: 200,
          })
        );
      });
      let h = document.querySelectorAll(".js-announcement__close"),
        d = document.querySelector(".js-announcement");
      r.a.utils.toArray(h).forEach((t) => {
        t.addEventListener("click", () => {
          d.remove();
        });
      });
      let p = jQuery(t.next.container).find(".js-btnHover");
      r.a.utils.toArray(p).forEach((t) => {
        let e = t.querySelectorAll("svg"),
          i = t.querySelectorAll("path"),
          n = "45deg";
        jQuery(t).hasClass("js-btnBackUp") && (n = "-45deg"),
          t.addEventListener("mouseenter", () => {
            r.a.to(t, {
              backgroundColor: a,
              color: l,
              opacity: 1,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
              r.a.to(i, {
                fill: l,
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              }),
              r.a.to(e, {
                rotate: n,
                marginLeft: "0.7vw ",
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              });
          }),
          t.addEventListener("mouseleave", () => {
            r.a.to(t, {
              backgroundColor: l,
              color: a,
              opacity: 1,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
              r.a.to(i, {
                fill: a,
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              }),
              r.a.to(e, {
                rotate: "0deg",
                marginLeft: "0.32vw",
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              });
          });
      });
      let f = jQuery(t.next.container).find(".js-btnHoverMore");
      r.a.utils.toArray(f).forEach((t) => {
        t.querySelectorAll("svg");
        let e = t.querySelectorAll("line");
        t.addEventListener("mouseenter", () => {
          r.a.to(t, {
            backgroundColor: a,
            color: l,
            opacity: 1,
            duration: 0.6,
            overwrite: !0,
            ease: "power3.out",
          }),
            r.a.to(e, {
              stroke: l,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            });
        }),
          t.addEventListener("mouseleave", () => {
            r.a.to(t, {
              backgroundColor: l,
              color: a,
              opacity: 1,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
              r.a.to(e, {
                stroke: a,
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              });
          });
      });
      let m = jQuery(t.next.container).find(".js-btnHoverBlack");
      r.a.utils.toArray(m).forEach((t) => {
        let e = t.querySelectorAll("svg"),
          i = t.querySelectorAll("path"),
          n = "45deg";
        jQuery(t).hasClass("js-btnBackUp") && (n = "-45deg"),
          t.addEventListener("mouseenter", () => {
            r.a.to(t, {
              backgroundColor: l,
              color: a,
              opacity: 1,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
              r.a.to(i, {
                fill: a,
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              }),
              r.a.to(e, {
                rotate: n,
                marginLeft: "0.7vw ",
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              });
          }),
          t.addEventListener("mouseleave", () => {
            r.a.to(t, {
              backgroundColor: a,
              color: l,
              opacity: 1,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
              r.a.to(i, {
                fill: l,
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              }),
              r.a.to(e, {
                rotate: "0deg",
                marginLeft: "0.32vw",
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              });
          });
      });
      let g = jQuery(t.next.container).find(".js-btnHoverWhite");
      r.a.utils.toArray(g).forEach((t) => {
        let e = t.querySelectorAll("svg"),
          i = t.querySelectorAll("path");
        t.addEventListener("mouseenter", () => {
          r.a.to(t, {
            backgroundColor: u,
            color: a,
            opacity: 1,
            duration: 0.6,
            overwrite: !0,
            ease: "power3.out",
          }),
            r.a.to(i, {
              fill: a,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
            r.a.to(e, {
              rotate: "45deg",
              marginLeft: "0.7vw ",
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            });
        }),
          t.addEventListener("mouseleave", () => {
            r.a.to(t, {
              backgroundColor: "transparent",
              color: u,
              opacity: 1,
              duration: 0.6,
              overwrite: !0,
              ease: "power3.out",
            }),
              r.a.to(i, {
                fill: u,
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              }),
              r.a.to(e, {
                rotate: "0deg",
                marginLeft: "0.32vw",
                duration: 0.6,
                overwrite: !0,
                ease: "power3.out",
              });
          });
      }),
        jQuery(document).on("mouseenter", ".m-post", function () {
          let t = jQuery(this).find("img");
          r.a.to(t, {
            scale: "1",
            duration: 1.2,
            ease: "power3.out",
            overwrite: !0,
          });
        }),
        jQuery(document).on("mouseleave", ".m-post", function () {
          let t = jQuery(this).find("img");
          r.a.to(t, {
            scale: "1.07",
            duration: 1.2,
            ease: "power3.out",
            overwrite: !0,
          });
        });
      let v = jQuery(t.next.container).find(".js-agendaHover");
      r.a.utils.toArray(v).forEach((t) => {
        let e = t.querySelectorAll(".a-title, .js-titleHover"),
          i = t.querySelectorAll(".a-btn"),
          n = (t.querySelectorAll("svg"), t.querySelectorAll("path"));
        t.addEventListener("mouseenter", () => {
          r.a.to(t, {
            background: a,
            color: l,
            paddingLeft: "2vw",
            paddingRight: "2vw",
            ease: "power3.out",
            overwrite: !0,
            duration: 0.8,
          }),
            r.a.to(e, {
              color: l,
              duration: 0.8,
              overwrite: !0,
              ease: "power3.out",
            }),
            r.a.to(i, {
              borderColor: l,
              color: l,
              overwrite: !0,
              duration: 0.8,
              ease: "power3.out",
            }),
            r.a.to(n, {
              fill: l,
              duration: 0.8,
              overwrite: !0,
              ease: "power3.out",
            });
        }),
          t.addEventListener("mouseleave", () => {
            r.a.to(t, {
              background: l,
              color: a,
              paddingLeft: "0vw",
              paddingRight: "0vw",
              ease: "power3.out",
              duration: 0.8,
              overwrite: !0,
            }),
              r.a.to(e, {
                color: a,
                duration: 0.8,
                ease: "power3.out",
                overwrite: !0,
              }),
              r.a.to(i, {
                borderColor: a,
                background: "transparent",
                color: a,
                duration: 0.8,
                ease: "power3.out",
                overwrite: !0,
              }),
              r.a.to(n, {
                fill: a,
                duration: 0.8,
                ease: "power3.out",
                overwrite: !0,
              });
          });
      });
      let y = jQuery(t.next.container).find(".js-socialHover");
      r.a.utils.toArray(y).forEach((t) => {
        let e = t.querySelectorAll(".cls-1");
        t.addEventListener("mouseenter", () => {
          r.a.to(e, {
            fill: u,
            ease: "power3.out",
            overwrite: !0,
            duration: 0.8,
          });
        }),
          t.addEventListener("mouseleave", () => {
            r.a.to(e, {
              fill: l,
              ease: "power3.out",
              duration: 0.8,
              overwrite: !0,
            });
          });
      });
      let _ = jQuery(t.next.container).find(".js-socialHoverMenu");
      r.a.utils.toArray(_).forEach((t) => {
        let e = t.querySelectorAll(".white-cls-1");
        t.addEventListener("mouseenter", () => {
          r.a.to(e, {
            fill: l,
            ease: "power3.out",
            overwrite: !0,
            duration: 0.8,
          });
        }),
          t.addEventListener("mouseleave", () => {
            r.a.to(e, {
              fill: u,
              ease: "power3.out",
              duration: 0.8,
              overwrite: !0,
            });
          });
      });
      let w = jQuery(t.next.container).find(".js-ctaHover");
      r.a.utils.toArray(w).forEach((t) => {
        t.classList.contains("js-ctaShowImageFirst")
          ? (function (t) {
            let e = t.querySelectorAll("h4"),
              i = t.querySelectorAll(".a-btn"),
              n = (t.querySelectorAll("svg"), t.querySelectorAll("path")),
              o = t.querySelectorAll(".js-cta__img");
            var s = u;
            r.a.to(t, {
              background: a,
              color: s,
              duration: 1.2,
              ease: "power3.out",
            }),
              r.a.to(e, { color: s, duration: 1.2, ease: "power3.out" }),
              r.a.to(i, {
                borderColor: s,
                color: s,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
              }),
              r.a.to(n, { fill: s, duration: 1.2, ease: "power3.out" }),
              t.classList.contains("js-ctaHoverImage") &&
              r.a.to(o, { opacity: 1, duration: 1.2, ease: "power3.out" });
            t.addEventListener("mouseenter", () => {
              var s = l;
              r.a.to(t, {
                background: a,
                color: s,
                duration: 1.2,
                ease: "power3.out",
              }),
                r.a.to(e, { color: s, duration: 1.2, ease: "power3.out" }),
                r.a.to(i, {
                  borderColor: s,
                  color: s,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power3.out",
                }),
                r.a.to(n, { fill: s, duration: 1.2, ease: "power3.out" }),
                t.classList.contains("js-ctaHoverImage") &&
                r.a.to(o, {
                  opacity: 0,
                  duration: 1.2,
                  ease: "power3.out",
                  overwrite: !0,
                });
            }),
              t.addEventListener("mouseleave", () => {
                r.a.to(t, {
                  background: "transparent",
                  color: s,
                  duration: 1.2,
                  ease: "power3.out",
                }),
                  r.a.to(e, { color: s, duration: 1.2, ease: "power3.out" }),
                  r.a.to(i, {
                    borderColor: s,
                    background: "transparent",
                    color: s,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                  }),
                  r.a.to(n, { fill: s, duration: 1.2, ease: "power3.out" }),
                  t.classList.contains("js-ctaHoverImage") &&
                  r.a.to(o, {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                  });
              });
          })(t)
          : t.classList.contains("js-ctaShowBlackFirst")
            ? (function (t) {
              let e = t.querySelectorAll("h3"),
                i = t.querySelectorAll(".a-btn"),
                n = t.querySelectorAll(".js-tag"),
                o = (t.querySelectorAll("svg"), t.querySelectorAll("path")),
                s = t.querySelectorAll(".js-cta__img");
              var c = a;
              t.classList.contains("js-ctaHoverImage") && (c = u);
              t.addEventListener("mouseenter", () => {
                r.a.to(t, {
                  background: l,
                  color: c,
                  duration: 1.2,
                  ease: "power3.out",
                }),
                  r.a.to(e, { color: c, duration: 1.2, ease: "power3.out" }),
                  r.a.to(n, { color: c, duration: 1.2, ease: "power3.out" }),
                  r.a.to(i, {
                    borderColor: c,
                    color: c,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                  }),
                  r.a.to(o, { fill: c, duration: 1.2, ease: "power3.out" }),
                  t.classList.contains("js-ctaHoverImage") &&
                  r.a.to(s, {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                  });
              }),
                t.addEventListener("mouseleave", () => {
                  r.a.to(t, {
                    background: a,
                    color: l,
                    duration: 1.2,
                    ease: "power3.out",
                    overwrite: !0,
                  }),
                    r.a.to(e, {
                      color: l,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    r.a.to(n, {
                      color: l,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    r.a.to(i, {
                      borderColor: l,
                      background: "transparent",
                      color: l,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    r.a.to(o, {
                      fill: l,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    t.classList.contains("js-ctaHoverImage") &&
                    r.a.to(s, {
                      opacity: 0,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    });
                });
            })(t)
            : (function (t) {
              let e = t.querySelectorAll("h4"),
                i = t.querySelectorAll(".a-btn"),
                n = (t.querySelectorAll("svg"), t.querySelectorAll("path")),
                o = t.querySelectorAll(".js-cta__img");
              var s = l;
              t.classList.contains("js-ctaHoverImage") && (s = u);
              t.addEventListener("mouseenter", () => {
                r.a.to(t, {
                  background: a,
                  color: s,
                  duration: 1.2,
                  ease: "power3.out",
                }),
                  r.a.to(e, { color: s, duration: 1.2, ease: "power3.out" }),
                  r.a.to(i, {
                    borderColor: s,
                    color: s,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                  }),
                  r.a.to(n, { fill: s, duration: 1.2, ease: "power3.out" }),
                  t.classList.contains("js-ctaHoverImage") &&
                  r.a.to(o, {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                  });
              }),
                t.addEventListener("mouseleave", () => {
                  r.a.to(t, {
                    background: l,
                    color: a,
                    duration: 1.2,
                    ease: "power3.out",
                    overwrite: !0,
                  }),
                    r.a.to(e, {
                      color: a,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    r.a.to(i, {
                      borderColor: a,
                      background: "transparent",
                      color: a,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    r.a.to(n, {
                      fill: a,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    }),
                    t.classList.contains("js-ctaHoverImage") &&
                    r.a.to(o, {
                      opacity: 0,
                      duration: 1.2,
                      ease: "power3.out",
                      overwrite: !0,
                    });
                });
            })(t);
      });
      let D = jQuery(t.next.container).find(".o-banner__videoPlay");
      r.a.utils.toArray(D).forEach((t) => {
        var e = t
          .closest(".o-banner__video")
          .querySelector(".o-banner__videoFile");
        t.addEventListener("click", () => {
          e.pause(),
            (e.currentTime = 0),
            e.load(),
            e.fullscreenElement ||
            (e.requestFullscreen
              ? (e.setAttribute("controls", "controls"),
                e.requestFullscreen())
              : e.mozRequestFullScreen
                ? (e.setAttribute("controls", "controls"),
                  e.mozRequestFullScreen())
                : e.webkitRequestFullscreen
                  ? (e.setAttribute("controls", "controls"),
                    e.webkitRequestFullscreen())
                  : e.msRequestFullscreen &&
                  (e.setAttribute("controls", "controls"),
                    e.msRequestFullscreen()));
        });
      });
      let x = jQuery(t.next.container).find("video");
      r.a.utils.toArray(x).forEach((t) => {
        t.pause(), (t.currentTime = 0), t.load();
      });
      let b = jQuery(t.next.container).find(".js-showMore");
      r.a.utils.toArray(b).forEach((t) => {
        t.addEventListener("click", () => {
          var e = t.closest(".u-container").querySelectorAll(".-hide");
          let i = Array.prototype.slice.call(e, 0, 10);
          jQuery(i).removeClass("-hide"),
            t.closest(".u-container").querySelectorAll(".-hide").length < 10 &&
            t.remove();
        });
      });
      let C = jQuery(t.next.container).find(".qib-button");
      if (
        (r.a.utils.toArray(C).forEach((e) => {
          jQuery("body").on("click", e, function () {
            setTimeout(() => {
              jQuery(t.next.container)
                .find("button[name='update_cart']")
                .trigger("click");
            }, "200");
          });
        }),
          1 != o.a.isTouch)
      ) {
        let e = jQuery(t.next.container).find(".js-slider");
        r.a.utils.toArray(e).forEach((t) => {
          var e = new Object();
          (e.container = t),
            (e.proxy = t.querySelector(".js-slider-proxy")),
            (e.slider = t.querySelector(".js-slider-inner")),
            (e.sliderContent = t.querySelector(".js-slider-content")),
            (e.slides = [...jQuery(e.sliderContent).find(".js-slide")]),
            (e.sliderWidth = 0),
            (e.prevSliderWidth = 0),
            (e.offset = 0);
          const i = () => {
            (e.sliderWidth = jQuery(e.slider).width()),
              r.a.set([e.slider, e.proxy], { width: e.sliderWidth, x: "+=0" }),
              r.a.fromTo(
                [e.slider],
                { x: 200 },
                { x: 0, duration: 2, ease: "power3.out" }
              );
          };
          var n, o, s;
          r.a.fromTo(
            [e.slider],
            { x: 200 },
            { x: 0, duration: 2, ease: "power3.out" }
          ),
            i(),
            window.addEventListener(
              "resize",
              ((n = i),
                (o = 800),
                (s = null),
                function () {
                  null == s &&
                    (s = setTimeout(function () {
                      n(), (s = null);
                    }, o));
                })
            );
          mn.create(e.proxy, {
            type: "x",
            bounds: e.container,
            trigger: e.container,
            zIndexBoost: !1,
            throwProps: !0,
            edgeResistance: 0.75,
            allowNativeTouchScrolling: !0,
            dragResistance: 0.1,
            onPress: function (t) {
              this.target.getBoundingClientRect();
              (e.offset = this.x - r.a.getProperty(e.proxy, "x")),
                r.a.killTweensOf(e.sliderContent),
                r.a.to(e.sliderContent, { skewX: 0, duration: 0.2 });
            },
            onDrag: function () {
              r.a.to(e.sliderContent, {
                duration: 0.8,
                x: () => this.x - e.offset,
                overwrite: "auto",
                ease: "power2",
              });
            },
            onRelease: function () {
              let t = cr.getVelocity(e.proxy, "x");
              this.tween &&
                Math.abs(t) > 20 &&
                r.a.to(e.sliderContent, {
                  overwrite: "auto",
                  inertia: { x: { velocity: t, end: this.endX } },
                }),
                r.a.to(e.sliderContent, {
                  skewX: 0,
                  duration: 0.5,
                  overwrite: "auto",
                });
            },
          });
        });
      }
    }
    "track,untrack,isTracking,getVelocity,getByTarget"
      .split(",")
      .forEach(function (t) {
        return (cr[t] = Mn[t]);
      }),
      Un() && Ln.registerPlugin(cr),
      r.a.registerPlugin(mn, cr);
    var dr,
      pr = i(4);
    function fr(t) {
      let e = jQuery;
      e(t)
        .find(".js-loadForm")
        .each(function () {
          let t = e(this),
            i = t.find(".gfid"),
            n = i.attr("data-id"),
            r = parseInt(n),
            s = i.attr("data-title"),
            a = i.attr("data-descr"),
            l = i.attr("data-ajax"),
            u = i.attr("data-post-id");
          t.length &&
            e
              .ajax({
                type: "GET",
                url: ajax.url,
                data: {
                  action: "load_gravity_form",
                  formid: r,
                  formtitle: s,
                  formdescr: a,
                  formajax: l,
                  formpostid: u,
                },
              })
              .done(function (e) {
                return t.html(e), o.a.refresh(), e;
              });
        });
    }
    /*!
     * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
     * (c) 2024 Dmytro Semenov
     */ function mr(t, e, i) {
      const n = document.createElement(e);
      return t && (n.className = t), i && i.appendChild(n), n;
    }
    function gr(t, e, i) {
      (t.style.width = "number" == typeof e ? e + "px" : e),
        (t.style.height = "number" == typeof i ? i + "px" : i);
    }
    (dr = jQuery)(function () {
      let t =
        'input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="month"],input[type="number"],input[type="password"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"], textarea';
      dr(document).on("focus", t, function () {
        dr(this).closest(".gfield").addClass("-focus");
      }),
        dr(document).on("blur", t, function () {
          "" == dr(this).val() &&
            dr(this).closest(".gfield").removeClass("-focus");
        });
    });
    const vr = "idle",
      yr = "loading",
      _r = "loaded",
      wr = "error";
    function Dr(t, e, i = document) {
      let n = [];
      if (t instanceof Element) n = [t];
      else if (t instanceof NodeList || Array.isArray(t)) n = Array.from(t);
      else {
        const r = "string" == typeof t ? t : e;
        r && (n = Array.from(i.querySelectorAll(r)));
      }
      return n;
    }
    function xr() {
      return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
    }
    class br {
      constructor(t, e) {
        (this.type = t),
          (this.defaultPrevented = !1),
          e && Object.assign(this, e);
      }
      preventDefault() {
        this.defaultPrevented = !0;
      }
    }
    class Cr {
      constructor(t, e) {
        if (
          ((this.element = mr(
            "pswp__img pswp__img--placeholder",
            t ? "img" : "div",
            e
          )),
            t)
        ) {
          const e = this.element;
          (e.decoding = "async"),
            (e.alt = ""),
            (e.src = t),
            e.setAttribute("role", "presentation");
        }
        this.element.setAttribute("aria-hidden", "true");
      }
      setDisplayedSize(t, e) {
        this.element &&
          ("IMG" === this.element.tagName
            ? (gr(this.element, 250, "auto"),
              (this.element.style.transformOrigin = "0 0"),
              (this.element.style.transform = (function (t, e, i) {
                let n = `translate3d(${t}px,${e || 0}px,0)`;
                return void 0 !== i && (n += ` scale3d(${i},${i},1)`), n;
              })(0, 0, t / 250)))
            : gr(this.element, t, e));
      }
      destroy() {
        var t;
        null !== (t = this.element) &&
          void 0 !== t &&
          t.parentNode &&
          this.element.remove(),
          (this.element = null);
      }
    }
    class Er {
      constructor(t, e, i) {
        (this.instance = e),
          (this.data = t),
          (this.index = i),
          (this.element = void 0),
          (this.placeholder = void 0),
          (this.slide = void 0),
          (this.displayedImageWidth = 0),
          (this.displayedImageHeight = 0),
          (this.width = Number(this.data.w) || Number(this.data.width) || 0),
          (this.height = Number(this.data.h) || Number(this.data.height) || 0),
          (this.isAttached = !1),
          (this.hasSlide = !1),
          (this.isDecoding = !1),
          (this.state = vr),
          this.data.type
            ? (this.type = this.data.type)
            : this.data.src
              ? (this.type = "image")
              : (this.type = "html"),
          this.instance.dispatch("contentInit", { content: this });
      }
      removePlaceholder() {
        this.placeholder &&
          !this.keepPlaceholder() &&
          setTimeout(() => {
            this.placeholder &&
              (this.placeholder.destroy(), (this.placeholder = void 0));
          }, 1e3);
      }
      load(t, e) {
        if (this.slide && this.usePlaceholder())
          if (this.placeholder) {
            const t = this.placeholder.element;
            t && !t.parentElement && this.slide.container.prepend(t);
          } else {
            const t = this.instance.applyFilters(
              "placeholderSrc",
              !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc,
              this
            );
            this.placeholder = new Cr(t, this.slide.container);
          }
        (this.element && !e) ||
          this.instance.dispatch("contentLoad", { content: this, isLazy: t })
            .defaultPrevented ||
          (this.isImageContent()
            ? ((this.element = mr("pswp__img", "img")),
              this.displayedImageWidth && this.loadImage(t))
            : ((this.element = mr("pswp__content", "div")),
              (this.element.innerHTML = this.data.html || "")),
            e && this.slide && this.slide.updateContentSize(!0));
      }
      loadImage(t) {
        var e, i;
        if (
          !this.isImageContent() ||
          !this.element ||
          this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy: t,
          }).defaultPrevented
        )
          return;
        const n = this.element;
        this.updateSrcsetSizes(),
          this.data.srcset && (n.srcset = this.data.srcset),
          (n.src = null !== (e = this.data.src) && void 0 !== e ? e : ""),
          (n.alt = null !== (i = this.data.alt) && void 0 !== i ? i : ""),
          (this.state = yr),
          n.complete
            ? this.onLoaded()
            : ((n.onload = () => {
              this.onLoaded();
            }),
              (n.onerror = () => {
                this.onError();
              }));
      }
      setSlide(t) {
        (this.slide = t), (this.hasSlide = !0), (this.instance = t.pswp);
      }
      onLoaded() {
        (this.state = _r),
          this.slide &&
          this.element &&
          (this.instance.dispatch("loadComplete", {
            slide: this.slide,
            content: this,
          }),
            this.slide.isActive &&
            this.slide.heavyAppended &&
            !this.element.parentNode &&
            (this.append(), this.slide.updateContentSize(!0)),
            (this.state !== _r && this.state !== wr) ||
            this.removePlaceholder());
      }
      onError() {
        (this.state = wr),
          this.slide &&
          (this.displayError(),
            this.instance.dispatch("loadComplete", {
              slide: this.slide,
              isError: !0,
              content: this,
            }),
            this.instance.dispatch("loadError", {
              slide: this.slide,
              content: this,
            }));
      }
      isLoading() {
        return this.instance.applyFilters(
          "isContentLoading",
          this.state === yr,
          this
        );
      }
      isError() {
        return this.state === wr;
      }
      isImageContent() {
        return "image" === this.type;
      }
      setDisplayedSize(t, e) {
        if (
          this.element &&
          (this.placeholder && this.placeholder.setDisplayedSize(t, e),
            !this.instance.dispatch("contentResize", {
              content: this,
              width: t,
              height: e,
            }).defaultPrevented &&
            (gr(this.element, t, e), this.isImageContent() && !this.isError()))
        ) {
          const i = !this.displayedImageWidth && t;
          (this.displayedImageWidth = t),
            (this.displayedImageHeight = e),
            i ? this.loadImage(!1) : this.updateSrcsetSizes(),
            this.slide &&
            this.instance.dispatch("imageSizeChange", {
              slide: this.slide,
              width: t,
              height: e,
              content: this,
            });
        }
      }
      isZoomable() {
        return this.instance.applyFilters(
          "isContentZoomable",
          this.isImageContent() && this.state !== wr,
          this
        );
      }
      updateSrcsetSizes() {
        if (!this.isImageContent() || !this.element || !this.data.srcset)
          return;
        const t = this.element,
          e = this.instance.applyFilters(
            "srcsetSizesWidth",
            this.displayedImageWidth,
            this
          );
        (!t.dataset.largestUsedSize ||
          e > parseInt(t.dataset.largestUsedSize, 10)) &&
          ((t.sizes = e + "px"), (t.dataset.largestUsedSize = String(e)));
      }
      usePlaceholder() {
        return this.instance.applyFilters(
          "useContentPlaceholder",
          this.isImageContent(),
          this
        );
      }
      lazyLoad() {
        this.instance.dispatch("contentLazyLoad", { content: this })
          .defaultPrevented || this.load(!0);
      }
      keepPlaceholder() {
        return this.instance.applyFilters(
          "isKeepingPlaceholder",
          this.isLoading(),
          this
        );
      }
      destroy() {
        (this.hasSlide = !1),
          (this.slide = void 0),
          this.instance.dispatch("contentDestroy", { content: this })
            .defaultPrevented ||
          (this.remove(),
            this.placeholder &&
            (this.placeholder.destroy(), (this.placeholder = void 0)),
            this.isImageContent() &&
            this.element &&
            ((this.element.onload = null),
              (this.element.onerror = null),
              (this.element = void 0)));
      }
      displayError() {
        if (this.slide) {
          var t, e;
          let i = mr("pswp__error-msg", "div");
          (i.innerText =
            null !==
              (t =
                null === (e = this.instance.options) || void 0 === e
                  ? void 0
                  : e.errorMsg) && void 0 !== t
              ? t
              : ""),
            (i = this.instance.applyFilters("contentErrorElement", i, this)),
            (this.element = mr(
              "pswp__content pswp__error-msg-container",
              "div"
            )),
            this.element.appendChild(i),
            (this.slide.container.innerText = ""),
            this.slide.container.appendChild(this.element),
            this.slide.updateContentSize(!0),
            this.removePlaceholder();
        }
      }
      append() {
        if (this.isAttached || !this.element) return;
        if (((this.isAttached = !0), this.state === wr))
          return void this.displayError();
        if (
          this.instance.dispatch("contentAppend", { content: this })
            .defaultPrevented
        )
          return;
        const t = "decode" in this.element;
        this.isImageContent()
          ? t && this.slide && (!this.slide.isActive || xr())
            ? ((this.isDecoding = !0),
              this.element
                .decode()
                .catch(() => { })
                .finally(() => {
                  (this.isDecoding = !1), this.appendImage();
                }))
            : this.appendImage()
          : this.slide &&
          !this.element.parentNode &&
          this.slide.container.appendChild(this.element);
      }
      activate() {
        !this.instance.dispatch("contentActivate", { content: this })
          .defaultPrevented &&
          this.slide &&
          (this.isImageContent() && this.isDecoding && !xr()
            ? this.appendImage()
            : this.isError() && this.load(!1, !0),
            this.slide.holderElement &&
            this.slide.holderElement.setAttribute("aria-hidden", "false"));
      }
      deactivate() {
        this.instance.dispatch("contentDeactivate", { content: this }),
          this.slide &&
          this.slide.holderElement &&
          this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
      remove() {
        (this.isAttached = !1),
          this.instance.dispatch("contentRemove", { content: this })
            .defaultPrevented ||
          (this.element && this.element.parentNode && this.element.remove(),
            this.placeholder &&
            this.placeholder.element &&
            this.placeholder.element.remove());
      }
      appendImage() {
        this.isAttached &&
          (this.instance.dispatch("contentAppendImage", { content: this })
            .defaultPrevented ||
            (this.slide &&
              this.element &&
              !this.element.parentNode &&
              this.slide.container.appendChild(this.element),
              (this.state !== _r && this.state !== wr) ||
              this.removePlaceholder()));
      }
    }
    function Sr(t, e, i, n, r) {
      let o = 0;
      if (e.paddingFn) o = e.paddingFn(i, n, r)[t];
      else if (e.padding) o = e.padding[t];
      else {
        const i = "padding" + t[0].toUpperCase() + t.slice(1);
        e[i] && (o = e[i]);
      }
      return Number(o) || 0;
    }
    class Tr {
      constructor(t, e, i, n) {
        (this.pswp = n),
          (this.options = t),
          (this.itemData = e),
          (this.index = i),
          (this.panAreaSize = null),
          (this.elementSize = null),
          (this.fit = 1),
          (this.fill = 1),
          (this.vFill = 1),
          (this.initial = 1),
          (this.secondary = 1),
          (this.max = 1),
          (this.min = 1);
      }
      update(t, e, i) {
        const n = { x: t, y: e };
        (this.elementSize = n), (this.panAreaSize = i);
        const r = i.x / n.x,
          o = i.y / n.y;
        (this.fit = Math.min(1, r < o ? r : o)),
          (this.fill = Math.min(1, r > o ? r : o)),
          (this.vFill = Math.min(1, o)),
          (this.initial = this._getInitial()),
          (this.secondary = this._getSecondary()),
          (this.max = Math.max(this.initial, this.secondary, this._getMax())),
          (this.min = Math.min(this.fit, this.initial, this.secondary)),
          this.pswp &&
          this.pswp.dispatch("zoomLevelsUpdate", {
            zoomLevels: this,
            slideData: this.itemData,
          });
      }
      _parseZoomLevelOption(t) {
        const e = t + "ZoomLevel",
          i = this.options[e];
        if (i)
          return "function" == typeof i
            ? i(this)
            : "fill" === i
              ? this.fill
              : "fit" === i
                ? this.fit
                : Number(i);
      }
      _getSecondary() {
        let t = this._parseZoomLevelOption("secondary");
        return (
          t ||
          ((t = Math.min(1, 3 * this.fit)),
            this.elementSize &&
            t * this.elementSize.x > 4e3 &&
            (t = 4e3 / this.elementSize.x),
            t)
        );
      }
      _getInitial() {
        return this._parseZoomLevelOption("initial") || this.fit;
      }
      _getMax() {
        return this._parseZoomLevelOption("max") || Math.max(1, 4 * this.fit);
      }
    }
    function Pr(t, e, i) {
      const n = e.createContentFromData(t, i);
      let r;
      const { options: o } = e;
      if (o) {
        let s;
        (r = new Tr(o, t, -1)),
          (s = e.pswp
            ? e.pswp.viewportSize
            : (function (t, e) {
              if (t.getViewportSizeFn) {
                const i = t.getViewportSizeFn(t, e);
                if (i) return i;
              }
              return {
                x: document.documentElement.clientWidth,
                y: window.innerHeight,
              };
            })(o, e));
        const a = (function (t, e, i, n) {
          return {
            x: e.x - Sr("left", t, e, i, n) - Sr("right", t, e, i, n),
            y: e.y - Sr("top", t, e, i, n) - Sr("bottom", t, e, i, n),
          };
        })(o, s, t, i);
        r.update(n.width, n.height, a);
      }
      return (
        n.lazyLoad(),
        r &&
        n.setDisplayedSize(
          Math.ceil(n.width * r.initial),
          Math.ceil(n.height * r.initial)
        ),
        n
      );
    }
    class Ar extends class extends class {
      constructor() {
        (this._listeners = {}),
          (this._filters = {}),
          (this.pswp = void 0),
          (this.options = void 0);
      }
      addFilter(t, e, i = 100) {
        var n, r, o;
        this._filters[t] || (this._filters[t] = []),
          null === (n = this._filters[t]) ||
          void 0 === n ||
          n.push({ fn: e, priority: i }),
          null === (r = this._filters[t]) ||
          void 0 === r ||
          r.sort((t, e) => t.priority - e.priority),
          null === (o = this.pswp) || void 0 === o || o.addFilter(t, e, i);
      }
      removeFilter(t, e) {
        this._filters[t] &&
          (this._filters[t] = this._filters[t].filter((t) => t.fn !== e)),
          this.pswp && this.pswp.removeFilter(t, e);
      }
      applyFilters(t, ...e) {
        var i;
        return (
          null === (i = this._filters[t]) ||
          void 0 === i ||
          i.forEach((t) => {
            e[0] = t.fn.apply(this, e);
          }),
          e[0]
        );
      }
      on(t, e) {
        var i, n;
        this._listeners[t] || (this._listeners[t] = []),
          null === (i = this._listeners[t]) || void 0 === i || i.push(e),
          null === (n = this.pswp) || void 0 === n || n.on(t, e);
      }
      off(t, e) {
        var i;
        this._listeners[t] &&
          (this._listeners[t] = this._listeners[t].filter((t) => e !== t)),
          null === (i = this.pswp) || void 0 === i || i.off(t, e);
      }
      dispatch(t, e) {
        var i;
        if (this.pswp) return this.pswp.dispatch(t, e);
        const n = new br(t, e);
        return (
          null === (i = this._listeners[t]) ||
          void 0 === i ||
          i.forEach((t) => {
            t.call(this, n);
          }),
          n
        );
      }
    } {
      getNumItems() {
        var t;
        let e = 0;
        const i =
          null === (t = this.options) || void 0 === t ? void 0 : t.dataSource;
        i && "length" in i
          ? (e = i.length)
          : i &&
          "gallery" in i &&
          (i.items || (i.items = this._getGalleryDOMElements(i.gallery)),
            i.items && (e = i.items.length));
        const n = this.dispatch("numItems", { dataSource: i, numItems: e });
        return this.applyFilters("numItems", n.numItems, i);
      }
      createContentFromData(t, e) {
        return new Er(t, this, e);
      }
      getItemData(t) {
        var e;
        const i =
          null === (e = this.options) || void 0 === e ? void 0 : e.dataSource;
        let n = {};
        Array.isArray(i)
          ? (n = i[t])
          : i &&
          "gallery" in i &&
          (i.items || (i.items = this._getGalleryDOMElements(i.gallery)),
            (n = i.items[t]));
        let r = n;
        r instanceof Element && (r = this._domElementToItemData(r));
        const o = this.dispatch("itemData", { itemData: r || {}, index: t });
        return this.applyFilters("itemData", o.itemData, t);
      }
      _getGalleryDOMElements(t) {
        var e, i;
        return (null !== (e = this.options) && void 0 !== e && e.children) ||
          (null !== (i = this.options) && void 0 !== i && i.childSelector)
          ? Dr(this.options.children, this.options.childSelector, t) || []
          : [t];
      }
      _domElementToItemData(t) {
        const e = { element: t },
          i = "A" === t.tagName ? t : t.querySelector("a");
        if (i) {
          (e.src = i.dataset.pswpSrc || i.href),
            i.dataset.pswpSrcset && (e.srcset = i.dataset.pswpSrcset),
            (e.width = i.dataset.pswpWidth
              ? parseInt(i.dataset.pswpWidth, 10)
              : 0),
            (e.height = i.dataset.pswpHeight
              ? parseInt(i.dataset.pswpHeight, 10)
              : 0),
            (e.w = e.width),
            (e.h = e.height),
            i.dataset.pswpType && (e.type = i.dataset.pswpType);
          const r = t.querySelector("img");
          var n;
          if (r)
            (e.msrc = r.currentSrc || r.src),
              (e.alt =
                null !== (n = r.getAttribute("alt")) && void 0 !== n ? n : "");
          (i.dataset.pswpCropped || i.dataset.cropped) && (e.thumbCropped = !0);
        }
        return this.applyFilters("domItemData", e, t, i);
      }
      lazyLoadData(t, e) {
        return Pr(t, this, e);
      }
    } {
      constructor(t) {
        super(),
          (this.options = t || {}),
          (this._uid = 0),
          (this.shouldOpen = !1),
          (this._preloadedContent = void 0),
          (this.onThumbnailsClick = this.onThumbnailsClick.bind(this));
      }
      init() {
        Dr(this.options.gallery, this.options.gallerySelector).forEach((t) => {
          t.addEventListener("click", this.onThumbnailsClick, !1);
        });
      }
      onThumbnailsClick(t) {
        if (
          (function (t) {
            return (
              ("button" in t && 1 === t.button) ||
              t.ctrlKey ||
              t.metaKey ||
              t.altKey ||
              t.shiftKey
            );
          })(t) ||
          window.pswp
        )
          return;
        let e = { x: t.clientX, y: t.clientY };
        e.x || e.y || (e = null);
        let i = this.getClickedIndex(t);
        i = this.applyFilters("clickedIndex", i, t, this);
        const n = { gallery: t.currentTarget };
        i >= 0 && (t.preventDefault(), this.loadAndOpen(i, n, e));
      }
      getClickedIndex(t) {
        if (this.options.getClickedIndexFn)
          return this.options.getClickedIndexFn.call(this, t);
        const e = t.target,
          i = Dr(
            this.options.children,
            this.options.childSelector,
            t.currentTarget
          ).findIndex((t) => t === e || t.contains(e));
        return -1 !== i
          ? i
          : this.options.children || this.options.childSelector
            ? -1
            : 0;
      }
      loadAndOpen(t, e, i) {
        if (window.pswp || !this.options) return !1;
        if (!e && this.options.gallery && this.options.children) {
          const t = Dr(this.options.gallery);
          t[0] && (e = { gallery: t[0] });
        }
        return (
          (this.options.index = t),
          (this.options.initialPointerPos = i),
          (this.shouldOpen = !0),
          this.preload(t, e),
          !0
        );
      }
      preload(t, e) {
        const { options: i } = this;
        e && (i.dataSource = e);
        const n = [],
          r = typeof i.pswpModule;
        if (
          "function" == typeof (o = i.pswpModule) &&
          o.prototype &&
          o.prototype.goTo
        )
          n.push(Promise.resolve(i.pswpModule));
        else {
          if ("string" === r)
            throw new Error("pswpModule as string is no longer supported");
          if ("function" !== r) throw new Error("pswpModule is not valid");
          n.push(i.pswpModule());
        }
        var o;
        "function" == typeof i.openPromise && n.push(i.openPromise()),
          !1 !== i.preloadFirstSlide &&
          t >= 0 &&
          (this._preloadedContent = (function (t, e) {
            const i = e.getItemData(t);
            if (
              !e.dispatch("lazyLoadSlide", { index: t, itemData: i })
                .defaultPrevented
            )
              return Pr(i, e, t);
          })(t, this));
        const s = ++this._uid;
        Promise.all(n).then((t) => {
          if (this.shouldOpen) {
            const e = t[0];
            this._openPhotoswipe(e, s);
          }
        });
      }
      _openPhotoswipe(t, e) {
        if (e !== this._uid && this.shouldOpen) return;
        if (((this.shouldOpen = !1), window.pswp)) return;
        const i =
          "object" == typeof t
            ? new t.default(this.options)
            : new t(this.options);
        (this.pswp = i),
          (window.pswp = i),
          Object.keys(this._listeners).forEach((t) => {
            var e;
            null === (e = this._listeners[t]) ||
              void 0 === e ||
              e.forEach((e) => {
                i.on(t, e);
              });
          }),
          Object.keys(this._filters).forEach((t) => {
            var e;
            null === (e = this._filters[t]) ||
              void 0 === e ||
              e.forEach((e) => {
                i.addFilter(t, e.fn, e.priority);
              });
          }),
          this._preloadedContent &&
          (i.contentLoader.addToCache(this._preloadedContent),
            (this._preloadedContent = void 0)),
          i.on("destroy", () => {
            (this.pswp = void 0), delete window.pswp;
          }),
          i.init();
      }
      destroy() {
        var t;
        null === (t = this.pswp) || void 0 === t || t.destroy(),
          (this.shouldOpen = !1),
          (this._listeners = {}),
          Dr(this.options.gallery, this.options.gallerySelector).forEach(
            (t) => {
              t.removeEventListener("click", this.onThumbnailsClick, !1);
            }
          );
      }
    }
    /*!
     * PhotoSwipe 5.4.4 - https://photoswipe.com
     * (c) 2024 Dmytro Semenov
     */ function Fr(t, e, i) {
      const n = document.createElement(e);
      return t && (n.className = t), i && i.appendChild(n), n;
    }
    function kr(t, e) {
      return (t.x = e.x), (t.y = e.y), void 0 !== e.id && (t.id = e.id), t;
    }
    function Mr(t) {
      (t.x = Math.round(t.x)), (t.y = Math.round(t.y));
    }
    function Lr(t, e) {
      const i = Math.abs(t.x - e.x),
        n = Math.abs(t.y - e.y);
      return Math.sqrt(i * i + n * n);
    }
    function Or(t, e) {
      return t.x === e.x && t.y === e.y;
    }
    function Ir(t, e, i) {
      return Math.min(Math.max(t, e), i);
    }
    function jr(t, e, i) {
      let n = `translate3d(${t}px,${e || 0}px,0)`;
      return void 0 !== i && (n += ` scale3d(${i},${i},1)`), n;
    }
    function zr(t, e, i, n) {
      t.style.transform = jr(e, i, n);
    }
    function Br(t, e, i, n) {
      t.style.transition = e
        ? `${e} ${i}ms ${n || "cubic-bezier(.4,0,.22,1)"}`
        : "none";
    }
    function Rr(t, e, i) {
      (t.style.width = "number" == typeof e ? e + "px" : e),
        (t.style.height = "number" == typeof i ? i + "px" : i);
    }
    const Nr = "idle",
      Hr = "loading",
      qr = "loaded",
      Zr = "error";
    function Qr() {
      return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
    }
    let Xr = !1;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: () => {
            Xr = !0;
          },
        })
      );
    } catch (t) { }
    class Yr {
      constructor() {
        this._pool = [];
      }
      add(t, e, i, n) {
        this._toggleListener(t, e, i, n);
      }
      remove(t, e, i, n) {
        this._toggleListener(t, e, i, n, !0);
      }
      removeAll() {
        this._pool.forEach((t) => {
          this._toggleListener(t.target, t.type, t.listener, t.passive, !0, !0);
        }),
          (this._pool = []);
      }
      _toggleListener(t, e, i, n, r, o) {
        if (!t) return;
        const s = r ? "removeEventListener" : "addEventListener";
        e.split(" ").forEach((e) => {
          if (e) {
            o ||
              (r
                ? (this._pool = this._pool.filter(
                  (n) => n.type !== e || n.listener !== i || n.target !== t
                ))
                : this._pool.push({
                  target: t,
                  type: e,
                  listener: i,
                  passive: n,
                }));
            const a = !!Xr && { passive: n || !1 };
            t[s](e, i, a);
          }
        });
      }
    }
    function Wr(t, e) {
      if (t.getViewportSizeFn) {
        const i = t.getViewportSizeFn(t, e);
        if (i) return i;
      }
      return { x: document.documentElement.clientWidth, y: window.innerHeight };
    }
    function Ur(t, e, i, n, r) {
      let o = 0;
      if (e.paddingFn) o = e.paddingFn(i, n, r)[t];
      else if (e.padding) o = e.padding[t];
      else {
        const i = "padding" + t[0].toUpperCase() + t.slice(1);
        e[i] && (o = e[i]);
      }
      return Number(o) || 0;
    }
    function Vr(t, e, i, n) {
      return {
        x: e.x - Ur("left", t, e, i, n) - Ur("right", t, e, i, n),
        y: e.y - Ur("top", t, e, i, n) - Ur("bottom", t, e, i, n),
      };
    }
    class Gr {
      constructor(t) {
        (this.slide = t),
          (this.currZoomLevel = 1),
          (this.center = { x: 0, y: 0 }),
          (this.max = { x: 0, y: 0 }),
          (this.min = { x: 0, y: 0 });
      }
      update(t) {
        (this.currZoomLevel = t),
          this.slide.width
            ? (this._updateAxis("x"),
              this._updateAxis("y"),
              this.slide.pswp.dispatch("calcBounds", { slide: this.slide }))
            : this.reset();
      }
      _updateAxis(t) {
        const { pswp: e } = this.slide,
          i = this.slide["x" === t ? "width" : "height"] * this.currZoomLevel,
          n = Ur(
            "x" === t ? "left" : "top",
            e.options,
            e.viewportSize,
            this.slide.data,
            this.slide.index
          ),
          r = this.slide.panAreaSize[t];
        (this.center[t] = Math.round((r - i) / 2) + n),
          (this.max[t] = i > r ? Math.round(r - i) + n : this.center[t]),
          (this.min[t] = i > r ? n : this.center[t]);
      }
      reset() {
        (this.center.x = 0),
          (this.center.y = 0),
          (this.max.x = 0),
          (this.max.y = 0),
          (this.min.x = 0),
          (this.min.y = 0);
      }
      correctPan(t, e) {
        return Ir(e, this.max[t], this.min[t]);
      }
    }
    class Kr {
      constructor(t, e, i, n) {
        (this.pswp = n),
          (this.options = t),
          (this.itemData = e),
          (this.index = i),
          (this.panAreaSize = null),
          (this.elementSize = null),
          (this.fit = 1),
          (this.fill = 1),
          (this.vFill = 1),
          (this.initial = 1),
          (this.secondary = 1),
          (this.max = 1),
          (this.min = 1);
      }
      update(t, e, i) {
        const n = { x: t, y: e };
        (this.elementSize = n), (this.panAreaSize = i);
        const r = i.x / n.x,
          o = i.y / n.y;
        (this.fit = Math.min(1, r < o ? r : o)),
          (this.fill = Math.min(1, r > o ? r : o)),
          (this.vFill = Math.min(1, o)),
          (this.initial = this._getInitial()),
          (this.secondary = this._getSecondary()),
          (this.max = Math.max(this.initial, this.secondary, this._getMax())),
          (this.min = Math.min(this.fit, this.initial, this.secondary)),
          this.pswp &&
          this.pswp.dispatch("zoomLevelsUpdate", {
            zoomLevels: this,
            slideData: this.itemData,
          });
      }
      _parseZoomLevelOption(t) {
        const e = t + "ZoomLevel",
          i = this.options[e];
        if (i)
          return "function" == typeof i
            ? i(this)
            : "fill" === i
              ? this.fill
              : "fit" === i
                ? this.fit
                : Number(i);
      }
      _getSecondary() {
        let t = this._parseZoomLevelOption("secondary");
        return (
          t ||
          ((t = Math.min(1, 3 * this.fit)),
            this.elementSize &&
            t * this.elementSize.x > 4e3 &&
            (t = 4e3 / this.elementSize.x),
            t)
        );
      }
      _getInitial() {
        return this._parseZoomLevelOption("initial") || this.fit;
      }
      _getMax() {
        return this._parseZoomLevelOption("max") || Math.max(1, 4 * this.fit);
      }
    }
    class $r {
      constructor(t, e, i) {
        (this.data = t),
          (this.index = e),
          (this.pswp = i),
          (this.isActive = e === i.currIndex),
          (this.currentResolution = 0),
          (this.panAreaSize = { x: 0, y: 0 }),
          (this.pan = { x: 0, y: 0 }),
          (this.isFirstSlide = this.isActive && !i.opener.isOpen),
          (this.zoomLevels = new Kr(i.options, t, e, i)),
          this.pswp.dispatch("gettingData", {
            slide: this,
            data: this.data,
            index: e,
          }),
          (this.content = this.pswp.contentLoader.getContentBySlide(this)),
          (this.container = Fr("pswp__zoom-wrap", "div")),
          (this.holderElement = null),
          (this.currZoomLevel = 1),
          (this.width = this.content.width),
          (this.height = this.content.height),
          (this.heavyAppended = !1),
          (this.bounds = new Gr(this)),
          (this.prevDisplayedWidth = -1),
          (this.prevDisplayedHeight = -1),
          this.pswp.dispatch("slideInit", { slide: this });
      }
      setIsActive(t) {
        t && !this.isActive
          ? this.activate()
          : !t && this.isActive && this.deactivate();
      }
      append(t) {
        (this.holderElement = t),
          (this.container.style.transformOrigin = "0 0"),
          this.data &&
          (this.calculateSize(),
            this.load(),
            this.updateContentSize(),
            this.appendHeavy(),
            this.holderElement.appendChild(this.container),
            this.zoomAndPanToInitial(),
            this.pswp.dispatch("firstZoomPan", { slide: this }),
            this.applyCurrentZoomPan(),
            this.pswp.dispatch("afterSetContent", { slide: this }),
            this.isActive && this.activate());
      }
      load() {
        this.content.load(!1), this.pswp.dispatch("slideLoad", { slide: this });
      }
      appendHeavy() {
        const { pswp: t } = this;
        !this.heavyAppended &&
          t.opener.isOpen &&
          !t.mainScroll.isShifted() &&
          (this.isActive, 1) &&
          (this.pswp.dispatch("appendHeavy", { slide: this })
            .defaultPrevented ||
            ((this.heavyAppended = !0),
              this.content.append(),
              this.pswp.dispatch("appendHeavyContent", { slide: this })));
      }
      activate() {
        (this.isActive = !0),
          this.appendHeavy(),
          this.content.activate(),
          this.pswp.dispatch("slideActivate", { slide: this });
      }
      deactivate() {
        (this.isActive = !1),
          this.content.deactivate(),
          this.currZoomLevel !== this.zoomLevels.initial &&
          this.calculateSize(),
          (this.currentResolution = 0),
          this.zoomAndPanToInitial(),
          this.applyCurrentZoomPan(),
          this.updateContentSize(),
          this.pswp.dispatch("slideDeactivate", { slide: this });
      }
      destroy() {
        (this.content.hasSlide = !1),
          this.content.remove(),
          this.container.remove(),
          this.pswp.dispatch("slideDestroy", { slide: this });
      }
      resize() {
        this.currZoomLevel !== this.zoomLevels.initial && this.isActive
          ? (this.calculateSize(),
            this.bounds.update(this.currZoomLevel),
            this.panTo(this.pan.x, this.pan.y))
          : (this.calculateSize(),
            (this.currentResolution = 0),
            this.zoomAndPanToInitial(),
            this.applyCurrentZoomPan(),
            this.updateContentSize());
      }
      updateContentSize(t) {
        const e = this.currentResolution || this.zoomLevels.initial;
        if (!e) return;
        const i = Math.round(this.width * e) || this.pswp.viewportSize.x,
          n = Math.round(this.height * e) || this.pswp.viewportSize.y;
        (this.sizeChanged(i, n) || t) && this.content.setDisplayedSize(i, n);
      }
      sizeChanged(t, e) {
        return (
          (t !== this.prevDisplayedWidth || e !== this.prevDisplayedHeight) &&
          ((this.prevDisplayedWidth = t), (this.prevDisplayedHeight = e), !0)
        );
      }
      getPlaceholderElement() {
        var t;
        return null === (t = this.content.placeholder) || void 0 === t
          ? void 0
          : t.element;
      }
      zoomTo(t, e, i, n) {
        const { pswp: r } = this;
        if (!this.isZoomable() || r.mainScroll.isShifted()) return;
        r.dispatch("beforeZoomTo", {
          destZoomLevel: t,
          centerPoint: e,
          transitionDuration: i,
        }),
          r.animations.stopAllPan();
        const o = this.currZoomLevel;
        n || (t = Ir(t, this.zoomLevels.min, this.zoomLevels.max)),
          this.setZoomLevel(t),
          (this.pan.x = this.calculateZoomToPanOffset("x", e, o)),
          (this.pan.y = this.calculateZoomToPanOffset("y", e, o)),
          Mr(this.pan);
        const s = () => {
          this._setResolution(t), this.applyCurrentZoomPan();
        };
        i
          ? r.animations.startTransition({
            isPan: !0,
            name: "zoomTo",
            target: this.container,
            transform: this.getCurrentTransform(),
            onComplete: s,
            duration: i,
            easing: r.options.easing,
          })
          : s();
      }
      toggleZoom(t) {
        this.zoomTo(
          this.currZoomLevel === this.zoomLevels.initial
            ? this.zoomLevels.secondary
            : this.zoomLevels.initial,
          t,
          this.pswp.options.zoomAnimationDuration
        );
      }
      setZoomLevel(t) {
        (this.currZoomLevel = t), this.bounds.update(this.currZoomLevel);
      }
      calculateZoomToPanOffset(t, e, i) {
        if (0 === this.bounds.max[t] - this.bounds.min[t])
          return this.bounds.center[t];
        e || (e = this.pswp.getViewportCenterPoint()),
          i || (i = this.zoomLevels.initial);
        const n = this.currZoomLevel / i;
        return this.bounds.correctPan(t, (this.pan[t] - e[t]) * n + e[t]);
      }
      panTo(t, e) {
        (this.pan.x = this.bounds.correctPan("x", t)),
          (this.pan.y = this.bounds.correctPan("y", e)),
          this.applyCurrentZoomPan();
      }
      isPannable() {
        return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
      }
      isZoomable() {
        return Boolean(this.width) && this.content.isZoomable();
      }
      applyCurrentZoomPan() {
        this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel),
          this === this.pswp.currSlide &&
          this.pswp.dispatch("zoomPanUpdate", { slide: this });
      }
      zoomAndPanToInitial() {
        (this.currZoomLevel = this.zoomLevels.initial),
          this.bounds.update(this.currZoomLevel),
          kr(this.pan, this.bounds.center),
          this.pswp.dispatch("initialZoomPan", { slide: this });
      }
      _applyZoomTransform(t, e, i) {
        (i /= this.currentResolution || this.zoomLevels.initial),
          zr(this.container, t, e, i);
      }
      calculateSize() {
        const { pswp: t } = this;
        kr(
          this.panAreaSize,
          Vr(t.options, t.viewportSize, this.data, this.index)
        ),
          this.zoomLevels.update(this.width, this.height, this.panAreaSize),
          t.dispatch("calcSlideSize", { slide: this });
      }
      getCurrentTransform() {
        const t =
          this.currZoomLevel /
          (this.currentResolution || this.zoomLevels.initial);
        return jr(this.pan.x, this.pan.y, t);
      }
      _setResolution(t) {
        t !== this.currentResolution &&
          ((this.currentResolution = t),
            this.updateContentSize(),
            this.pswp.dispatch("resolutionChanged"));
      }
    }
    class Jr {
      constructor(t) {
        (this.gestures = t),
          (this.pswp = t.pswp),
          (this.startPan = { x: 0, y: 0 });
      }
      start() {
        this.pswp.currSlide && kr(this.startPan, this.pswp.currSlide.pan),
          this.pswp.animations.stopAll();
      }
      change() {
        const { p1: t, prevP1: e, dragAxis: i } = this.gestures,
          { currSlide: n } = this.pswp;
        if (
          "y" === i &&
          this.pswp.options.closeOnVerticalDrag &&
          n &&
          n.currZoomLevel <= n.zoomLevels.fit &&
          !this.gestures.isMultitouch
        ) {
          const i = n.pan.y + (t.y - e.y);
          if (
            !this.pswp.dispatch("verticalDrag", { panY: i }).defaultPrevented
          ) {
            this._setPanWithFriction("y", i, 0.6);
            const t = 1 - Math.abs(this._getVerticalDragRatio(n.pan.y));
            this.pswp.applyBgOpacity(t), n.applyCurrentZoomPan();
          }
        } else {
          this._panOrMoveMainScroll("x") ||
            (this._panOrMoveMainScroll("y"),
              n && (Mr(n.pan), n.applyCurrentZoomPan()));
        }
      }
      end() {
        const { velocity: t } = this.gestures,
          { mainScroll: e, currSlide: i } = this.pswp;
        let n = 0;
        if ((this.pswp.animations.stopAll(), e.isShifted())) {
          const i = (e.x - e.getCurrSlideX()) / this.pswp.viewportSize.x;
          (t.x < -0.5 && i < 0) || (t.x < 0.1 && i < -0.5)
            ? ((n = 1), (t.x = Math.min(t.x, 0)))
            : ((t.x > 0.5 && i > 0) || (t.x > -0.1 && i > 0.5)) &&
            ((n = -1), (t.x = Math.max(t.x, 0))),
            e.moveIndexBy(n, !0, t.x);
        }
        (i && i.currZoomLevel > i.zoomLevels.max) || this.gestures.isMultitouch
          ? this.gestures.zoomLevels.correctZoomPan(!0)
          : (this._finishPanGestureForAxis("x"),
            this._finishPanGestureForAxis("y"));
      }
      _finishPanGestureForAxis(t) {
        const { velocity: e } = this.gestures,
          { currSlide: i } = this.pswp;
        if (!i) return;
        const { pan: n, bounds: r } = i,
          o = n[t],
          s = this.pswp.bgOpacity < 1 && "y" === t,
          a =
            o +
            (function (t, e) {
              return (t * e) / (1 - e);
            })(e[t], 0.995);
        if (s) {
          const t = this._getVerticalDragRatio(o),
            e = this._getVerticalDragRatio(a);
          if ((t < 0 && e < -0.4) || (t > 0 && e > 0.4))
            return void this.pswp.close();
        }
        const l = r.correctPan(t, a);
        if (o === l) return;
        const u = l === a ? 1 : 0.82,
          c = this.pswp.bgOpacity,
          h = l - o;
        this.pswp.animations.startSpring({
          name: "panGesture" + t,
          isPan: !0,
          start: o,
          end: l,
          velocity: e[t],
          dampingRatio: u,
          onUpdate: (e) => {
            if (s && this.pswp.bgOpacity < 1) {
              const t = 1 - (l - e) / h;
              this.pswp.applyBgOpacity(Ir(c + (1 - c) * t, 0, 1));
            }
            (n[t] = Math.floor(e)), i.applyCurrentZoomPan();
          },
        });
      }
      _panOrMoveMainScroll(t) {
        const {
          p1: e,
          dragAxis: i,
          prevP1: n,
          isMultitouch: r,
        } = this.gestures,
          { currSlide: o, mainScroll: s } = this.pswp,
          a = e[t] - n[t],
          l = s.x + a;
        if (!a || !o) return !1;
        if ("x" === t && !o.isPannable() && !r) return s.moveTo(l, !0), !0;
        const { bounds: u } = o,
          c = o.pan[t] + a;
        if (this.pswp.options.allowPanToNext && "x" === i && "x" === t && !r) {
          const e = s.getCurrSlideX(),
            i = s.x - e,
            n = a > 0,
            r = !n;
          if (c > u.min[t] && n) {
            if (u.min[t] <= this.startPan[t]) return s.moveTo(l, !0), !0;
            this._setPanWithFriction(t, c);
          } else if (c < u.max[t] && r) {
            if (this.startPan[t] <= u.max[t]) return s.moveTo(l, !0), !0;
            this._setPanWithFriction(t, c);
          } else if (0 !== i) {
            if (i > 0) return s.moveTo(Math.max(l, e), !0), !0;
            if (i < 0) return s.moveTo(Math.min(l, e), !0), !0;
          } else this._setPanWithFriction(t, c);
        } else
          ("y" === t && (s.isShifted() || u.min.y === u.max.y)) ||
            this._setPanWithFriction(t, c);
        return !1;
      }
      _getVerticalDragRatio(t) {
        var e, i;
        return (
          (t -
            (null !==
              (e =
                null === (i = this.pswp.currSlide) || void 0 === i
                  ? void 0
                  : i.bounds.center.y) && void 0 !== e
              ? e
              : 0)) /
          (this.pswp.viewportSize.y / 3)
        );
      }
      _setPanWithFriction(t, e, i) {
        const { currSlide: n } = this.pswp;
        if (!n) return;
        const { pan: r, bounds: o } = n;
        if (o.correctPan(t, e) !== e || i) {
          const n = Math.round(e - r[t]);
          r[t] += n * (i || 0.35);
        } else r[t] = e;
      }
    }
    function to(t, e, i) {
      return (t.x = (e.x + i.x) / 2), (t.y = (e.y + i.y) / 2), t;
    }
    class eo {
      constructor(t) {
        (this.gestures = t),
          (this._startPan = { x: 0, y: 0 }),
          (this._startZoomPoint = { x: 0, y: 0 }),
          (this._zoomPoint = { x: 0, y: 0 }),
          (this._wasOverFitZoomLevel = !1),
          (this._startZoomLevel = 1);
      }
      start() {
        const { currSlide: t } = this.gestures.pswp;
        t &&
          ((this._startZoomLevel = t.currZoomLevel), kr(this._startPan, t.pan)),
          this.gestures.pswp.animations.stopAllPan(),
          (this._wasOverFitZoomLevel = !1);
      }
      change() {
        const { p1: t, startP1: e, p2: i, startP2: n, pswp: r } = this.gestures,
          { currSlide: o } = r;
        if (!o) return;
        const s = o.zoomLevels.min,
          a = o.zoomLevels.max;
        if (!o.isZoomable() || r.mainScroll.isShifted()) return;
        to(this._startZoomPoint, e, n), to(this._zoomPoint, t, i);
        let l = (1 / Lr(e, n)) * Lr(t, i) * this._startZoomLevel;
        if (
          (l > o.zoomLevels.initial + o.zoomLevels.initial / 15 &&
            (this._wasOverFitZoomLevel = !0),
            l < s)
        )
          if (
            r.options.pinchToClose &&
            !this._wasOverFitZoomLevel &&
            this._startZoomLevel <= o.zoomLevels.initial
          ) {
            const t = 1 - (s - l) / (s / 1.2);
            r.dispatch("pinchClose", { bgOpacity: t }).defaultPrevented ||
              r.applyBgOpacity(t);
          } else l = s - 0.15 * (s - l);
        else l > a && (l = a + 0.05 * (l - a));
        (o.pan.x = this._calculatePanForZoomLevel("x", l)),
          (o.pan.y = this._calculatePanForZoomLevel("y", l)),
          o.setZoomLevel(l),
          o.applyCurrentZoomPan();
      }
      end() {
        const { pswp: t } = this.gestures,
          { currSlide: e } = t;
        (!e || e.currZoomLevel < e.zoomLevels.initial) &&
          !this._wasOverFitZoomLevel &&
          t.options.pinchToClose
          ? t.close()
          : this.correctZoomPan();
      }
      _calculatePanForZoomLevel(t, e) {
        const i = e / this._startZoomLevel;
        return (
          this._zoomPoint[t] - (this._startZoomPoint[t] - this._startPan[t]) * i
        );
      }
      correctZoomPan(t) {
        const { pswp: e } = this.gestures,
          { currSlide: i } = e;
        if (null == i || !i.isZoomable()) return;
        0 === this._zoomPoint.x && (t = !0);
        const n = i.currZoomLevel;
        let r,
          o = !0;
        n < i.zoomLevels.initial
          ? (r = i.zoomLevels.initial)
          : n > i.zoomLevels.max
            ? (r = i.zoomLevels.max)
            : ((o = !1), (r = n));
        const s = e.bgOpacity,
          a = e.bgOpacity < 1,
          l = kr({ x: 0, y: 0 }, i.pan);
        let u = kr({ x: 0, y: 0 }, l);
        t &&
          ((this._zoomPoint.x = 0),
            (this._zoomPoint.y = 0),
            (this._startZoomPoint.x = 0),
            (this._startZoomPoint.y = 0),
            (this._startZoomLevel = n),
            kr(this._startPan, l)),
          o &&
          (u = {
            x: this._calculatePanForZoomLevel("x", r),
            y: this._calculatePanForZoomLevel("y", r),
          }),
          i.setZoomLevel(r),
          (u = {
            x: i.bounds.correctPan("x", u.x),
            y: i.bounds.correctPan("y", u.y),
          }),
          i.setZoomLevel(n);
        const c = !Or(u, l);
        if (!c && !o && !a)
          return i._setResolution(r), void i.applyCurrentZoomPan();
        e.animations.stopAllPan(),
          e.animations.startSpring({
            isPan: !0,
            start: 0,
            end: 1e3,
            velocity: 0,
            dampingRatio: 1,
            naturalFrequency: 40,
            onUpdate: (t) => {
              if (((t /= 1e3), c || o)) {
                if (
                  (c &&
                    ((i.pan.x = l.x + (u.x - l.x) * t),
                      (i.pan.y = l.y + (u.y - l.y) * t)),
                    o)
                ) {
                  const e = n + (r - n) * t;
                  i.setZoomLevel(e);
                }
                i.applyCurrentZoomPan();
              }
              a &&
                e.bgOpacity < 1 &&
                e.applyBgOpacity(Ir(s + (1 - s) * t, 0, 1));
            },
            onComplete: () => {
              i._setResolution(r), i.applyCurrentZoomPan();
            },
          });
      }
    }
    function io(t) {
      return !!t.target.closest(".pswp__container");
    }
    class no {
      constructor(t) {
        this.gestures = t;
      }
      click(t, e) {
        const i = e.target.classList,
          n = i.contains("pswp__img"),
          r = i.contains("pswp__item") || i.contains("pswp__zoom-wrap");
        n
          ? this._doClickOrTapAction("imageClick", t, e)
          : r && this._doClickOrTapAction("bgClick", t, e);
      }
      tap(t, e) {
        io(e) && this._doClickOrTapAction("tap", t, e);
      }
      doubleTap(t, e) {
        io(e) && this._doClickOrTapAction("doubleTap", t, e);
      }
      _doClickOrTapAction(t, e, i) {
        var n;
        const { pswp: r } = this.gestures,
          { currSlide: o } = r,
          s = t + "Action",
          a = r.options[s];
        if (!r.dispatch(s, { point: e, originalEvent: i }).defaultPrevented)
          if ("function" != typeof a)
            switch (a) {
              case "close":
              case "next":
                r[a]();
                break;
              case "zoom":
                null == o || o.toggleZoom(e);
                break;
              case "zoom-or-close":
                null != o &&
                  o.isZoomable() &&
                  o.zoomLevels.secondary !== o.zoomLevels.initial
                  ? o.toggleZoom(e)
                  : r.options.clickToCloseNonZoomable && r.close();
                break;
              case "toggle-controls":
                null === (n = this.gestures.pswp.element) ||
                  void 0 === n ||
                  n.classList.toggle("pswp--ui-visible");
            }
          else a.call(r, e, i);
      }
    }
    class ro {
      constructor(t) {
        (this.pswp = t),
          (this.dragAxis = null),
          (this.p1 = { x: 0, y: 0 }),
          (this.p2 = { x: 0, y: 0 }),
          (this.prevP1 = { x: 0, y: 0 }),
          (this.prevP2 = { x: 0, y: 0 }),
          (this.startP1 = { x: 0, y: 0 }),
          (this.startP2 = { x: 0, y: 0 }),
          (this.velocity = { x: 0, y: 0 }),
          (this._lastStartP1 = { x: 0, y: 0 }),
          (this._intervalP1 = { x: 0, y: 0 }),
          (this._numActivePoints = 0),
          (this._ongoingPointers = []),
          (this._touchEventEnabled = "ontouchstart" in window),
          (this._pointerEventEnabled = !!window.PointerEvent),
          (this.supportsTouch =
            this._touchEventEnabled ||
            (this._pointerEventEnabled && navigator.maxTouchPoints > 1)),
          (this._numActivePoints = 0),
          (this._intervalTime = 0),
          (this._velocityCalculated = !1),
          (this.isMultitouch = !1),
          (this.isDragging = !1),
          (this.isZooming = !1),
          (this.raf = null),
          (this._tapTimer = null),
          this.supportsTouch || (t.options.allowPanToNext = !1),
          (this.drag = new Jr(this)),
          (this.zoomLevels = new eo(this)),
          (this.tapHandler = new no(this)),
          t.on("bindEvents", () => {
            t.events.add(t.scrollWrap, "click", this._onClick.bind(this)),
              this._pointerEventEnabled
                ? this._bindEvents("pointer", "down", "up", "cancel")
                : this._touchEventEnabled
                  ? (this._bindEvents("touch", "start", "end", "cancel"),
                    t.scrollWrap &&
                    ((t.scrollWrap.ontouchmove = () => { }),
                      (t.scrollWrap.ontouchend = () => { })))
                  : this._bindEvents("mouse", "down", "up");
          });
      }
      _bindEvents(t, e, i, n) {
        const { pswp: r } = this,
          { events: o } = r,
          s = n ? t + n : "";
        o.add(r.scrollWrap, t + e, this.onPointerDown.bind(this)),
          o.add(window, t + "move", this.onPointerMove.bind(this)),
          o.add(window, t + i, this.onPointerUp.bind(this)),
          s && o.add(r.scrollWrap, s, this.onPointerUp.bind(this));
      }
      onPointerDown(t) {
        const e = "mousedown" === t.type || "mouse" === t.pointerType;
        if (e && t.button > 0) return;
        const { pswp: i } = this;
        i.opener.isOpen
          ? i.dispatch("pointerDown", { originalEvent: t }).defaultPrevented ||
          (e &&
            (i.mouseDetected(),
              this._preventPointerEventBehaviour(t, "down")),
            i.animations.stopAll(),
            this._updatePoints(t, "down"),
            1 === this._numActivePoints &&
            ((this.dragAxis = null), kr(this.startP1, this.p1)),
            this._numActivePoints > 1
              ? (this._clearTapTimer(), (this.isMultitouch = !0))
              : (this.isMultitouch = !1))
          : t.preventDefault();
      }
      onPointerMove(t) {
        this._preventPointerEventBehaviour(t, "move"),
          this._numActivePoints &&
          (this._updatePoints(t, "move"),
            this.pswp.dispatch("pointerMove", { originalEvent: t })
              .defaultPrevented ||
            (1 !== this._numActivePoints || this.isDragging
              ? this._numActivePoints > 1 &&
              !this.isZooming &&
              (this._finishDrag(),
                (this.isZooming = !0),
                this._updateStartPoints(),
                this.zoomLevels.start(),
                this._rafStopLoop(),
                this._rafRenderLoop())
              : (this.dragAxis || this._calculateDragDirection(),
                this.dragAxis &&
                !this.isDragging &&
                (this.isZooming &&
                  ((this.isZooming = !1), this.zoomLevels.end()),
                  (this.isDragging = !0),
                  this._clearTapTimer(),
                  this._updateStartPoints(),
                  (this._intervalTime = Date.now()),
                  (this._velocityCalculated = !1),
                  kr(this._intervalP1, this.p1),
                  (this.velocity.x = 0),
                  (this.velocity.y = 0),
                  this.drag.start(),
                  this._rafStopLoop(),
                  this._rafRenderLoop()))));
      }
      _finishDrag() {
        this.isDragging &&
          ((this.isDragging = !1),
            this._velocityCalculated || this._updateVelocity(!0),
            this.drag.end(),
            (this.dragAxis = null));
      }
      onPointerUp(t) {
        this._numActivePoints &&
          (this._updatePoints(t, "up"),
            this.pswp.dispatch("pointerUp", { originalEvent: t })
              .defaultPrevented ||
            (0 === this._numActivePoints &&
              (this._rafStopLoop(),
                this.isDragging
                  ? this._finishDrag()
                  : this.isZooming || this.isMultitouch || this._finishTap(t)),
              this._numActivePoints < 2 &&
              this.isZooming &&
              ((this.isZooming = !1),
                this.zoomLevels.end(),
                1 === this._numActivePoints &&
                ((this.dragAxis = null), this._updateStartPoints()))));
      }
      _rafRenderLoop() {
        (this.isDragging || this.isZooming) &&
          (this._updateVelocity(),
            this.isDragging
              ? Or(this.p1, this.prevP1) || this.drag.change()
              : (Or(this.p1, this.prevP1) && Or(this.p2, this.prevP2)) ||
              this.zoomLevels.change(),
            this._updatePrevPoints(),
            (this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this))));
      }
      _updateVelocity(t) {
        const e = Date.now(),
          i = e - this._intervalTime;
        (i < 50 && !t) ||
          ((this.velocity.x = this._getVelocity("x", i)),
            (this.velocity.y = this._getVelocity("y", i)),
            (this._intervalTime = e),
            kr(this._intervalP1, this.p1),
            (this._velocityCalculated = !0));
      }
      _finishTap(t) {
        const { mainScroll: e } = this.pswp;
        if (e.isShifted()) return void e.moveIndexBy(0, !0);
        if (t.type.indexOf("cancel") > 0) return;
        if ("mouseup" === t.type || "mouse" === t.pointerType)
          return void this.tapHandler.click(this.startP1, t);
        const i = this.pswp.options.doubleTapAction ? 300 : 0;
        this._tapTimer
          ? (this._clearTapTimer(),
            Lr(this._lastStartP1, this.startP1) < 25 &&
            this.tapHandler.doubleTap(this.startP1, t))
          : (kr(this._lastStartP1, this.startP1),
            (this._tapTimer = setTimeout(() => {
              this.tapHandler.tap(this.startP1, t), this._clearTapTimer();
            }, i)));
      }
      _clearTapTimer() {
        this._tapTimer &&
          (clearTimeout(this._tapTimer), (this._tapTimer = null));
      }
      _getVelocity(t, e) {
        const i = this.p1[t] - this._intervalP1[t];
        return Math.abs(i) > 1 && e > 5 ? i / e : 0;
      }
      _rafStopLoop() {
        this.raf && (cancelAnimationFrame(this.raf), (this.raf = null));
      }
      _preventPointerEventBehaviour(t, e) {
        this.pswp.applyFilters("preventPointerEvent", !0, t, e) &&
          t.preventDefault();
      }
      _updatePoints(t, e) {
        if (this._pointerEventEnabled) {
          const i = t,
            n = this._ongoingPointers.findIndex((t) => t.id === i.pointerId);
          "up" === e && n > -1
            ? this._ongoingPointers.splice(n, 1)
            : "down" === e && -1 === n
              ? this._ongoingPointers.push(
                this._convertEventPosToPoint(i, { x: 0, y: 0 })
              )
              : n > -1 &&
              this._convertEventPosToPoint(i, this._ongoingPointers[n]),
            (this._numActivePoints = this._ongoingPointers.length),
            this._numActivePoints > 0 && kr(this.p1, this._ongoingPointers[0]),
            this._numActivePoints > 1 && kr(this.p2, this._ongoingPointers[1]);
        } else {
          const i = t;
          (this._numActivePoints = 0),
            i.type.indexOf("touch") > -1
              ? i.touches &&
              i.touches.length > 0 &&
              (this._convertEventPosToPoint(i.touches[0], this.p1),
                this._numActivePoints++,
                i.touches.length > 1 &&
                (this._convertEventPosToPoint(i.touches[1], this.p2),
                  this._numActivePoints++))
              : (this._convertEventPosToPoint(t, this.p1),
                "up" === e
                  ? (this._numActivePoints = 0)
                  : this._numActivePoints++);
        }
      }
      _updatePrevPoints() {
        kr(this.prevP1, this.p1), kr(this.prevP2, this.p2);
      }
      _updateStartPoints() {
        kr(this.startP1, this.p1),
          kr(this.startP2, this.p2),
          this._updatePrevPoints();
      }
      _calculateDragDirection() {
        if (this.pswp.mainScroll.isShifted()) this.dragAxis = "x";
        else {
          const t =
            Math.abs(this.p1.x - this.startP1.x) -
            Math.abs(this.p1.y - this.startP1.y);
          if (0 !== t) {
            const e = t > 0 ? "x" : "y";
            Math.abs(this.p1[e] - this.startP1[e]) >= 10 && (this.dragAxis = e);
          }
        }
      }
      _convertEventPosToPoint(t, e) {
        return (
          (e.x = t.pageX - this.pswp.offset.x),
          (e.y = t.pageY - this.pswp.offset.y),
          "pointerId" in t
            ? (e.id = t.pointerId)
            : void 0 !== t.identifier && (e.id = t.identifier),
          e
        );
      }
      _onClick(t) {
        this.pswp.mainScroll.isShifted() &&
          (t.preventDefault(), t.stopPropagation());
      }
    }
    class oo {
      constructor(t) {
        (this.pswp = t),
          (this.x = 0),
          (this.slideWidth = 0),
          (this._currPositionIndex = 0),
          (this._prevPositionIndex = 0),
          (this._containerShiftIndex = -1),
          (this.itemHolders = []);
      }
      resize(t) {
        const { pswp: e } = this,
          i = Math.round(
            e.viewportSize.x + e.viewportSize.x * e.options.spacing
          ),
          n = i !== this.slideWidth;
        n && ((this.slideWidth = i), this.moveTo(this.getCurrSlideX())),
          this.itemHolders.forEach((e, i) => {
            n && zr(e.el, (i + this._containerShiftIndex) * this.slideWidth),
              t && e.slide && e.slide.resize();
          });
      }
      resetPosition() {
        (this._currPositionIndex = 0),
          (this._prevPositionIndex = 0),
          (this.slideWidth = 0),
          (this._containerShiftIndex = -1);
      }
      appendHolders() {
        this.itemHolders = [];
        for (let t = 0; t < 3; t++) {
          const e = Fr("pswp__item", "div", this.pswp.container);
          e.setAttribute("role", "group"),
            e.setAttribute("aria-roledescription", "slide"),
            e.setAttribute("aria-hidden", "true"),
            (e.style.display = 1 === t ? "block" : "none"),
            this.itemHolders.push({ el: e });
        }
      }
      canBeSwiped() {
        return this.pswp.getNumItems() > 1;
      }
      moveIndexBy(t, e, i) {
        const { pswp: n } = this;
        let r = n.potentialIndex + t;
        const o = n.getNumItems();
        if (n.canLoop()) {
          r = n.getLoopedIndex(r);
          const e = (t + o) % o;
          t = e <= o / 2 ? e : e - o;
        } else
          r < 0 ? (r = 0) : r >= o && (r = o - 1), (t = r - n.potentialIndex);
        (n.potentialIndex = r),
          (this._currPositionIndex -= t),
          n.animations.stopMainScroll();
        const s = this.getCurrSlideX();
        if (e) {
          n.animations.startSpring({
            isMainScroll: !0,
            start: this.x,
            end: s,
            velocity: i || 0,
            naturalFrequency: 30,
            dampingRatio: 1,
            onUpdate: (t) => {
              this.moveTo(t);
            },
            onComplete: () => {
              this.updateCurrItem(), n.appendHeavy();
            },
          });
          let t = n.potentialIndex - n.currIndex;
          if (n.canLoop()) {
            const e = (t + o) % o;
            t = e <= o / 2 ? e : e - o;
          }
          Math.abs(t) > 1 && this.updateCurrItem();
        } else this.moveTo(s), this.updateCurrItem();
        return Boolean(t);
      }
      getCurrSlideX() {
        return this.slideWidth * this._currPositionIndex;
      }
      isShifted() {
        return this.x !== this.getCurrSlideX();
      }
      updateCurrItem() {
        var t;
        const { pswp: e } = this,
          i = this._prevPositionIndex - this._currPositionIndex;
        if (!i) return;
        (this._prevPositionIndex = this._currPositionIndex),
          (e.currIndex = e.potentialIndex);
        let n,
          r = Math.abs(i);
        r >= 3 &&
          ((this._containerShiftIndex += i + (i > 0 ? -3 : 3)),
            (r = 3),
            this.itemHolders.forEach((t) => {
              var e;
              null === (e = t.slide) || void 0 === e || e.destroy(),
                (t.slide = void 0);
            }));
        for (let t = 0; t < r; t++)
          i > 0
            ? ((n = this.itemHolders.shift()),
              n &&
              ((this.itemHolders[2] = n),
                this._containerShiftIndex++,
                zr(n.el, (this._containerShiftIndex + 2) * this.slideWidth),
                e.setContent(n, e.currIndex - r + t + 2)))
            : ((n = this.itemHolders.pop()),
              n &&
              (this.itemHolders.unshift(n),
                this._containerShiftIndex--,
                zr(n.el, this._containerShiftIndex * this.slideWidth),
                e.setContent(n, e.currIndex + r - t - 2)));
        Math.abs(this._containerShiftIndex) > 50 &&
          !this.isShifted() &&
          (this.resetPosition(), this.resize()),
          e.animations.stopAllPan(),
          this.itemHolders.forEach((t, e) => {
            t.slide && t.slide.setIsActive(1 === e);
          }),
          (e.currSlide =
            null === (t = this.itemHolders[1]) || void 0 === t
              ? void 0
              : t.slide),
          e.contentLoader.updateLazy(i),
          e.currSlide && e.currSlide.applyCurrentZoomPan(),
          e.dispatch("change");
      }
      moveTo(t, e) {
        if (!this.pswp.canLoop() && e) {
          let e =
            (this.slideWidth * this._currPositionIndex - t) / this.slideWidth;
          e += this.pswp.currIndex;
          const i = Math.round(t - this.x);
          ((e < 0 && i > 0) || (e >= this.pswp.getNumItems() - 1 && i < 0)) &&
            (t = this.x + 0.35 * i);
        }
        (this.x = t),
          this.pswp.container && zr(this.pswp.container, t),
          this.pswp.dispatch("moveMainScroll", {
            x: t,
            dragging: null != e && e,
          });
      }
    }
    const so = {
      Escape: 27,
      z: 90,
      ArrowLeft: 37,
      ArrowUp: 38,
      ArrowRight: 39,
      ArrowDown: 40,
      Tab: 9,
    },
      ao = (t, e) => (e ? t : so[t]);
    class lo {
      constructor(t) {
        (this.pswp = t),
          (this._wasFocused = !1),
          t.on("bindEvents", () => {
            t.options.trapFocus &&
              (t.options.initialPointerPos || this._focusRoot(),
                t.events.add(document, "focusin", this._onFocusIn.bind(this))),
              t.events.add(document, "keydown", this._onKeyDown.bind(this));
          });
        const e = document.activeElement;
        t.on("destroy", () => {
          t.options.returnFocus && e && this._wasFocused && e.focus();
        });
      }
      _focusRoot() {
        !this._wasFocused &&
          this.pswp.element &&
          (this.pswp.element.focus(), (this._wasFocused = !0));
      }
      _onKeyDown(t) {
        const { pswp: e } = this;
        if (e.dispatch("keydown", { originalEvent: t }).defaultPrevented)
          return;
        if (
          (function (t) {
            return (
              ("button" in t && 1 === t.button) ||
              t.ctrlKey ||
              t.metaKey ||
              t.altKey ||
              t.shiftKey
            );
          })(t)
        )
          return;
        let i,
          n,
          r = !1;
        const o = "key" in t;
        switch (o ? t.key : t.keyCode) {
          case ao("Escape", o):
            e.options.escKey && (i = "close");
            break;
          case ao("z", o):
            i = "toggleZoom";
            break;
          case ao("ArrowLeft", o):
            n = "x";
            break;
          case ao("ArrowUp", o):
            n = "y";
            break;
          case ao("ArrowRight", o):
            (n = "x"), (r = !0);
            break;
          case ao("ArrowDown", o):
            (r = !0), (n = "y");
            break;
          case ao("Tab", o):
            this._focusRoot();
        }
        if (n) {
          t.preventDefault();
          const { currSlide: o } = e;
          e.options.arrowKeys && "x" === n && e.getNumItems() > 1
            ? (i = r ? "next" : "prev")
            : o &&
            o.currZoomLevel > o.zoomLevels.fit &&
            ((o.pan[n] += r ? -80 : 80), o.panTo(o.pan.x, o.pan.y));
        }
        i && (t.preventDefault(), e[i]());
      }
      _onFocusIn(t) {
        const { template: e } = this.pswp;
        e &&
          document !== t.target &&
          e !== t.target &&
          !e.contains(t.target) &&
          e.focus();
      }
    }
    const uo = "cubic-bezier(.4,0,.22,1)";
    class co {
      constructor(t) {
        var e;
        this.props = t;
        const {
          target: i,
          onComplete: n,
          transform: r,
          onFinish: o = () => { },
          duration: s = 333,
          easing: a = uo,
        } = t;
        this.onFinish = o;
        const l = r ? "transform" : "opacity",
          u = null !== (e = t[l]) && void 0 !== e ? e : "";
        (this._target = i),
          (this._onComplete = n),
          (this._finished = !1),
          (this._onTransitionEnd = this._onTransitionEnd.bind(this)),
          (this._helperTimeout = setTimeout(() => {
            Br(i, l, s, a),
              (this._helperTimeout = setTimeout(() => {
                i.addEventListener("transitionend", this._onTransitionEnd, !1),
                  i.addEventListener(
                    "transitioncancel",
                    this._onTransitionEnd,
                    !1
                  ),
                  (this._helperTimeout = setTimeout(() => {
                    this._finalizeAnimation();
                  }, s + 500)),
                  (i.style[l] = u);
              }, 30));
          }, 0));
      }
      _onTransitionEnd(t) {
        t.target === this._target && this._finalizeAnimation();
      }
      _finalizeAnimation() {
        this._finished ||
          ((this._finished = !0),
            this.onFinish(),
            this._onComplete && this._onComplete());
      }
      destroy() {
        this._helperTimeout && clearTimeout(this._helperTimeout),
          Br(this._target),
          this._target.removeEventListener(
            "transitionend",
            this._onTransitionEnd,
            !1
          ),
          this._target.removeEventListener(
            "transitioncancel",
            this._onTransitionEnd,
            !1
          ),
          this._finished || this._finalizeAnimation();
      }
    }
    class ho {
      constructor(t, e, i) {
        (this.velocity = 1e3 * t),
          (this._dampingRatio = e || 0.75),
          (this._naturalFrequency = i || 12),
          (this._dampedFrequency = this._naturalFrequency),
          this._dampingRatio < 1 &&
          (this._dampedFrequency *= Math.sqrt(
            1 - this._dampingRatio * this._dampingRatio
          ));
      }
      easeFrame(t, e) {
        let i,
          n = 0;
        e /= 1e3;
        const r = Math.E ** (-this._dampingRatio * this._naturalFrequency * e);
        if (1 === this._dampingRatio)
          (i = this.velocity + this._naturalFrequency * t),
            (n = (t + i * e) * r),
            (this.velocity = n * -this._naturalFrequency + i * r);
        else if (this._dampingRatio < 1) {
          i =
            (1 / this._dampedFrequency) *
            (this._dampingRatio * this._naturalFrequency * t + this.velocity);
          const o = Math.cos(this._dampedFrequency * e),
            s = Math.sin(this._dampedFrequency * e);
          (n = r * (t * o + i * s)),
            (this.velocity =
              n * -this._naturalFrequency * this._dampingRatio +
              r *
              (-this._dampedFrequency * t * s +
                this._dampedFrequency * i * o));
        }
        return n;
      }
    }
    class po {
      constructor(t) {
        (this.props = t), (this._raf = 0);
        const {
          start: e,
          end: i,
          velocity: n,
          onUpdate: r,
          onComplete: o,
          onFinish: s = () => { },
          dampingRatio: a,
          naturalFrequency: l,
        } = t;
        this.onFinish = s;
        const u = new ho(n, a, l);
        let c = Date.now(),
          h = e - i;
        const d = () => {
          this._raf &&
            ((h = u.easeFrame(h, Date.now() - c)),
              Math.abs(h) < 1 && Math.abs(u.velocity) < 50
                ? (r(i), o && o(), this.onFinish())
                : ((c = Date.now()),
                  r(h + i),
                  (this._raf = requestAnimationFrame(d))));
        };
        this._raf = requestAnimationFrame(d);
      }
      destroy() {
        this._raf >= 0 && cancelAnimationFrame(this._raf), (this._raf = 0);
      }
    }
    class fo {
      constructor() {
        this.activeAnimations = [];
      }
      startSpring(t) {
        this._start(t, !0);
      }
      startTransition(t) {
        this._start(t);
      }
      _start(t, e) {
        const i = e ? new po(t) : new co(t);
        return (
          this.activeAnimations.push(i), (i.onFinish = () => this.stop(i)), i
        );
      }
      stop(t) {
        t.destroy();
        const e = this.activeAnimations.indexOf(t);
        e > -1 && this.activeAnimations.splice(e, 1);
      }
      stopAll() {
        this.activeAnimations.forEach((t) => {
          t.destroy();
        }),
          (this.activeAnimations = []);
      }
      stopAllPan() {
        this.activeAnimations = this.activeAnimations.filter(
          (t) => !t.props.isPan || (t.destroy(), !1)
        );
      }
      stopMainScroll() {
        this.activeAnimations = this.activeAnimations.filter(
          (t) => !t.props.isMainScroll || (t.destroy(), !1)
        );
      }
      isPanRunning() {
        return this.activeAnimations.some((t) => t.props.isPan);
      }
    }
    class mo {
      constructor(t) {
        (this.pswp = t),
          t.events.add(t.element, "wheel", this._onWheel.bind(this));
      }
      _onWheel(t) {
        t.preventDefault();
        const { currSlide: e } = this.pswp;
        let { deltaX: i, deltaY: n } = t;
        if (
          e &&
          !this.pswp.dispatch("wheel", { originalEvent: t }).defaultPrevented
        )
          if (t.ctrlKey || this.pswp.options.wheelToZoom) {
            if (e.isZoomable()) {
              let i = -n;
              1 === t.deltaMode ? (i *= 0.05) : (i *= t.deltaMode ? 1 : 0.002),
                (i = 2 ** i);
              const r = e.currZoomLevel * i;
              e.zoomTo(r, { x: t.clientX, y: t.clientY });
            }
          } else
            e.isPannable() &&
              (1 === t.deltaMode && ((i *= 18), (n *= 18)),
                e.panTo(e.pan.x - i, e.pan.y - n));
      }
    }
    class go {
      constructor(t, e) {
        var i;
        const n = e.name || e.className;
        let r = e.html;
        if (!1 === t.options[n]) return;
        "string" == typeof t.options[n + "SVG"] && (r = t.options[n + "SVG"]),
          t.dispatch("uiElementCreate", { data: e });
        let o = "";
        e.isButton
          ? ((o += "pswp__button "),
            (o += e.className || "pswp__button--" + e.name))
          : (o += e.className || "pswp__" + e.name);
        let s = e.isButton ? e.tagName || "button" : e.tagName || "div";
        s = s.toLowerCase();
        const a = Fr(o, s);
        if (e.isButton) {
          "button" === s && (a.type = "button");
          let { title: i } = e;
          const { ariaLabel: r } = e;
          "string" == typeof t.options[n + "Title"] &&
            (i = t.options[n + "Title"]),
            i && (a.title = i);
          const o = r || i;
          o && a.setAttribute("aria-label", o);
        }
        (a.innerHTML = (function (t) {
          if ("string" == typeof t) return t;
          if (!t || !t.isCustomSVG) return "";
          const e = t;
          let i =
            '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
          return (
            (i = i.split("%d").join(e.size || 32)),
            e.outlineID &&
            (i +=
              '<use class="pswp__icn-shadow" xlink:href="#' +
              e.outlineID +
              '"/>'),
            (i += e.inner),
            (i += "</svg>"),
            i
          );
        })(r)),
          e.onInit && e.onInit(a, t),
          e.onClick &&
          (a.onclick = (i) => {
            "string" == typeof e.onClick
              ? t[e.onClick]()
              : "function" == typeof e.onClick && e.onClick(i, a, t);
          });
        const l = e.appendTo || "bar";
        let u = t.element;
        "bar" === l
          ? (t.topBar ||
            (t.topBar = Fr(
              "pswp__top-bar pswp__hide-on-close",
              "div",
              t.scrollWrap
            )),
            (u = t.topBar))
          : (a.classList.add("pswp__hide-on-close"),
            "wrapper" === l && (u = t.scrollWrap)),
          null === (i = u) ||
          void 0 === i ||
          i.appendChild(t.applyFilters("uiElement", a, e));
      }
    }
    function vo(t, e, i) {
      t.classList.add("pswp__button--arrow"),
        t.setAttribute("aria-controls", "pswp__items"),
        e.on("change", () => {
          e.options.loop ||
            (t.disabled = i
              ? !(e.currIndex < e.getNumItems() - 1)
              : !(e.currIndex > 0));
        });
    }
    const yo = {
      name: "arrowPrev",
      className: "pswp__button--arrow--prev",
      title: "Previous",
      order: 10,
      isButton: !0,
      appendTo: "wrapper",
      html: {
        isCustomSVG: !0,
        size: 60,
        inner:
          '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
        outlineID: "pswp__icn-arrow",
      },
      onClick: "prev",
      onInit: vo,
    },
      _o = {
        name: "arrowNext",
        className: "pswp__button--arrow--next",
        title: "Next",
        order: 11,
        isButton: !0,
        appendTo: "wrapper",
        html: {
          isCustomSVG: !0,
          size: 60,
          inner: '<use xlink:href="#pswp__icn-arrow"/>',
          outlineID: "pswp__icn-arrow",
        },
        onClick: "next",
        onInit: (t, e) => {
          vo(t, e, !0);
        },
      },
      wo = {
        name: "close",
        title: "Close",
        order: 20,
        isButton: !0,
        html: {
          isCustomSVG: !0,
          inner:
            '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
          outlineID: "pswp__icn-close",
        },
        onClick: "close",
      },
      Do = {
        name: "zoom",
        title: "Zoom",
        order: 10,
        isButton: !0,
        html: {
          isCustomSVG: !0,
          inner:
            '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
          outlineID: "pswp__icn-zoom",
        },
        onClick: "toggleZoom",
      },
      xo = {
        name: "preloader",
        appendTo: "bar",
        order: 7,
        html: {
          isCustomSVG: !0,
          inner:
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
          outlineID: "pswp__icn-loading",
        },
        onInit: (t, e) => {
          let i,
            n = null;
          const r = (e) => {
            var n, r;
            i !== e &&
              ((i = e),
                (n = "active"),
                (r = e),
                t.classList.toggle("pswp__preloader--" + n, r));
          },
            o = () => {
              var t;
              if (
                null === (t = e.currSlide) ||
                void 0 === t ||
                !t.content.isLoading()
              )
                return r(!1), void (n && (clearTimeout(n), (n = null)));
              n ||
                (n = setTimeout(() => {
                  var t;
                  r(
                    Boolean(
                      null === (t = e.currSlide) || void 0 === t
                        ? void 0
                        : t.content.isLoading()
                    )
                  ),
                    (n = null);
                }, e.options.preloaderDelay));
            };
          e.on("change", o),
            e.on("loadComplete", (t) => {
              e.currSlide === t.slide && o();
            }),
            e.ui && (e.ui.updatePreloaderVisibility = o);
        },
      },
      bo = {
        name: "counter",
        order: 5,
        onInit: (t, e) => {
          e.on("change", () => {
            t.innerText =
              e.currIndex + 1 + e.options.indexIndicatorSep + e.getNumItems();
          });
        },
      };
    function Co(t, e) {
      t.classList.toggle("pswp--zoomed-in", e);
    }
    class Eo {
      constructor(t) {
        (this.pswp = t),
          (this.isRegistered = !1),
          (this.uiElementsData = []),
          (this.items = []),
          (this.updatePreloaderVisibility = () => { }),
          (this._lastUpdatedZoomLevel = void 0);
      }
      init() {
        const { pswp: t } = this;
        (this.isRegistered = !1),
          (this.uiElementsData = [wo, yo, _o, Do, xo, bo]),
          t.dispatch("uiRegister"),
          this.uiElementsData.sort((t, e) => (t.order || 0) - (e.order || 0)),
          (this.items = []),
          (this.isRegistered = !0),
          this.uiElementsData.forEach((t) => {
            this.registerElement(t);
          }),
          t.on("change", () => {
            var e;
            null === (e = t.element) ||
              void 0 === e ||
              e.classList.toggle("pswp--one-slide", 1 === t.getNumItems());
          }),
          t.on("zoomPanUpdate", () => this._onZoomPanUpdate());
      }
      registerElement(t) {
        this.isRegistered
          ? this.items.push(new go(this.pswp, t))
          : this.uiElementsData.push(t);
      }
      _onZoomPanUpdate() {
        const { template: t, currSlide: e, options: i } = this.pswp;
        if (this.pswp.opener.isClosing || !t || !e) return;
        let { currZoomLevel: n } = e;
        if (
          (this.pswp.opener.isOpen || (n = e.zoomLevels.initial),
            n === this._lastUpdatedZoomLevel)
        )
          return;
        this._lastUpdatedZoomLevel = n;
        const r = e.zoomLevels.initial - e.zoomLevels.secondary;
        if (Math.abs(r) < 0.01 || !e.isZoomable())
          return Co(t, !1), void t.classList.remove("pswp--zoom-allowed");
        t.classList.add("pswp--zoom-allowed");
        Co(
          t,
          (n === e.zoomLevels.initial
            ? e.zoomLevels.secondary
            : e.zoomLevels.initial) <= n
        ),
          ("zoom" !== i.imageClickAction &&
            "zoom-or-close" !== i.imageClickAction) ||
          t.classList.add("pswp--click-to-zoom");
      }
    }
    class So {
      constructor(t, e) {
        (this.type = t),
          (this.defaultPrevented = !1),
          e && Object.assign(this, e);
      }
      preventDefault() {
        this.defaultPrevented = !0;
      }
    }
    class To {
      constructor(t, e) {
        if (
          ((this.element = Fr(
            "pswp__img pswp__img--placeholder",
            t ? "img" : "div",
            e
          )),
            t)
        ) {
          const e = this.element;
          (e.decoding = "async"),
            (e.alt = ""),
            (e.src = t),
            e.setAttribute("role", "presentation");
        }
        this.element.setAttribute("aria-hidden", "true");
      }
      setDisplayedSize(t, e) {
        this.element &&
          ("IMG" === this.element.tagName
            ? (Rr(this.element, 250, "auto"),
              (this.element.style.transformOrigin = "0 0"),
              (this.element.style.transform = jr(0, 0, t / 250)))
            : Rr(this.element, t, e));
      }
      destroy() {
        var t;
        null !== (t = this.element) &&
          void 0 !== t &&
          t.parentNode &&
          this.element.remove(),
          (this.element = null);
      }
    }
    class Po {
      constructor(t, e, i) {
        (this.instance = e),
          (this.data = t),
          (this.index = i),
          (this.element = void 0),
          (this.placeholder = void 0),
          (this.slide = void 0),
          (this.displayedImageWidth = 0),
          (this.displayedImageHeight = 0),
          (this.width = Number(this.data.w) || Number(this.data.width) || 0),
          (this.height = Number(this.data.h) || Number(this.data.height) || 0),
          (this.isAttached = !1),
          (this.hasSlide = !1),
          (this.isDecoding = !1),
          (this.state = Nr),
          this.data.type
            ? (this.type = this.data.type)
            : this.data.src
              ? (this.type = "image")
              : (this.type = "html"),
          this.instance.dispatch("contentInit", { content: this });
      }
      removePlaceholder() {
        this.placeholder &&
          !this.keepPlaceholder() &&
          setTimeout(() => {
            this.placeholder &&
              (this.placeholder.destroy(), (this.placeholder = void 0));
          }, 1e3);
      }
      load(t, e) {
        if (this.slide && this.usePlaceholder())
          if (this.placeholder) {
            const t = this.placeholder.element;
            t && !t.parentElement && this.slide.container.prepend(t);
          } else {
            const t = this.instance.applyFilters(
              "placeholderSrc",
              !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc,
              this
            );
            this.placeholder = new To(t, this.slide.container);
          }
        (this.element && !e) ||
          this.instance.dispatch("contentLoad", { content: this, isLazy: t })
            .defaultPrevented ||
          (this.isImageContent()
            ? ((this.element = Fr("pswp__img", "img")),
              this.displayedImageWidth && this.loadImage(t))
            : ((this.element = Fr("pswp__content", "div")),
              (this.element.innerHTML = this.data.html || "")),
            e && this.slide && this.slide.updateContentSize(!0));
      }
      loadImage(t) {
        var e, i;
        if (
          !this.isImageContent() ||
          !this.element ||
          this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy: t,
          }).defaultPrevented
        )
          return;
        const n = this.element;
        this.updateSrcsetSizes(),
          this.data.srcset && (n.srcset = this.data.srcset),
          (n.src = null !== (e = this.data.src) && void 0 !== e ? e : ""),
          (n.alt = null !== (i = this.data.alt) && void 0 !== i ? i : ""),
          (this.state = Hr),
          n.complete
            ? this.onLoaded()
            : ((n.onload = () => {
              this.onLoaded();
            }),
              (n.onerror = () => {
                this.onError();
              }));
      }
      setSlide(t) {
        (this.slide = t), (this.hasSlide = !0), (this.instance = t.pswp);
      }
      onLoaded() {
        (this.state = qr),
          this.slide &&
          this.element &&
          (this.instance.dispatch("loadComplete", {
            slide: this.slide,
            content: this,
          }),
            this.slide.isActive &&
            this.slide.heavyAppended &&
            !this.element.parentNode &&
            (this.append(), this.slide.updateContentSize(!0)),
            (this.state !== qr && this.state !== Zr) ||
            this.removePlaceholder());
      }
      onError() {
        (this.state = Zr),
          this.slide &&
          (this.displayError(),
            this.instance.dispatch("loadComplete", {
              slide: this.slide,
              isError: !0,
              content: this,
            }),
            this.instance.dispatch("loadError", {
              slide: this.slide,
              content: this,
            }));
      }
      isLoading() {
        return this.instance.applyFilters(
          "isContentLoading",
          this.state === Hr,
          this
        );
      }
      isError() {
        return this.state === Zr;
      }
      isImageContent() {
        return "image" === this.type;
      }
      setDisplayedSize(t, e) {
        if (
          this.element &&
          (this.placeholder && this.placeholder.setDisplayedSize(t, e),
            !this.instance.dispatch("contentResize", {
              content: this,
              width: t,
              height: e,
            }).defaultPrevented &&
            (Rr(this.element, t, e), this.isImageContent() && !this.isError()))
        ) {
          const i = !this.displayedImageWidth && t;
          (this.displayedImageWidth = t),
            (this.displayedImageHeight = e),
            i ? this.loadImage(!1) : this.updateSrcsetSizes(),
            this.slide &&
            this.instance.dispatch("imageSizeChange", {
              slide: this.slide,
              width: t,
              height: e,
              content: this,
            });
        }
      }
      isZoomable() {
        return this.instance.applyFilters(
          "isContentZoomable",
          this.isImageContent() && this.state !== Zr,
          this
        );
      }
      updateSrcsetSizes() {
        if (!this.isImageContent() || !this.element || !this.data.srcset)
          return;
        const t = this.element,
          e = this.instance.applyFilters(
            "srcsetSizesWidth",
            this.displayedImageWidth,
            this
          );
        (!t.dataset.largestUsedSize ||
          e > parseInt(t.dataset.largestUsedSize, 10)) &&
          ((t.sizes = e + "px"), (t.dataset.largestUsedSize = String(e)));
      }
      usePlaceholder() {
        return this.instance.applyFilters(
          "useContentPlaceholder",
          this.isImageContent(),
          this
        );
      }
      lazyLoad() {
        this.instance.dispatch("contentLazyLoad", { content: this })
          .defaultPrevented || this.load(!0);
      }
      keepPlaceholder() {
        return this.instance.applyFilters(
          "isKeepingPlaceholder",
          this.isLoading(),
          this
        );
      }
      destroy() {
        (this.hasSlide = !1),
          (this.slide = void 0),
          this.instance.dispatch("contentDestroy", { content: this })
            .defaultPrevented ||
          (this.remove(),
            this.placeholder &&
            (this.placeholder.destroy(), (this.placeholder = void 0)),
            this.isImageContent() &&
            this.element &&
            ((this.element.onload = null),
              (this.element.onerror = null),
              (this.element = void 0)));
      }
      displayError() {
        if (this.slide) {
          var t, e;
          let i = Fr("pswp__error-msg", "div");
          (i.innerText =
            null !==
              (t =
                null === (e = this.instance.options) || void 0 === e
                  ? void 0
                  : e.errorMsg) && void 0 !== t
              ? t
              : ""),
            (i = this.instance.applyFilters("contentErrorElement", i, this)),
            (this.element = Fr(
              "pswp__content pswp__error-msg-container",
              "div"
            )),
            this.element.appendChild(i),
            (this.slide.container.innerText = ""),
            this.slide.container.appendChild(this.element),
            this.slide.updateContentSize(!0),
            this.removePlaceholder();
        }
      }
      append() {
        if (this.isAttached || !this.element) return;
        if (((this.isAttached = !0), this.state === Zr))
          return void this.displayError();
        if (
          this.instance.dispatch("contentAppend", { content: this })
            .defaultPrevented
        )
          return;
        const t = "decode" in this.element;
        this.isImageContent()
          ? t && this.slide && (!this.slide.isActive || Qr())
            ? ((this.isDecoding = !0),
              this.element
                .decode()
                .catch(() => { })
                .finally(() => {
                  (this.isDecoding = !1), this.appendImage();
                }))
            : this.appendImage()
          : this.slide &&
          !this.element.parentNode &&
          this.slide.container.appendChild(this.element);
      }
      activate() {
        !this.instance.dispatch("contentActivate", { content: this })
          .defaultPrevented &&
          this.slide &&
          (this.isImageContent() && this.isDecoding && !Qr()
            ? this.appendImage()
            : this.isError() && this.load(!1, !0),
            this.slide.holderElement &&
            this.slide.holderElement.setAttribute("aria-hidden", "false"));
      }
      deactivate() {
        this.instance.dispatch("contentDeactivate", { content: this }),
          this.slide &&
          this.slide.holderElement &&
          this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
      remove() {
        (this.isAttached = !1),
          this.instance.dispatch("contentRemove", { content: this })
            .defaultPrevented ||
          (this.element && this.element.parentNode && this.element.remove(),
            this.placeholder &&
            this.placeholder.element &&
            this.placeholder.element.remove());
      }
      appendImage() {
        this.isAttached &&
          (this.instance.dispatch("contentAppendImage", { content: this })
            .defaultPrevented ||
            (this.slide &&
              this.element &&
              !this.element.parentNode &&
              this.slide.container.appendChild(this.element),
              (this.state !== qr && this.state !== Zr) ||
              this.removePlaceholder()));
      }
    }
    function Ao(t, e, i) {
      const n = e.createContentFromData(t, i);
      let r;
      const { options: o } = e;
      if (o) {
        let s;
        (r = new Kr(o, t, -1)), (s = e.pswp ? e.pswp.viewportSize : Wr(o, e));
        const a = Vr(o, s, t, i);
        r.update(n.width, n.height, a);
      }
      return (
        n.lazyLoad(),
        r &&
        n.setDisplayedSize(
          Math.ceil(n.width * r.initial),
          Math.ceil(n.height * r.initial)
        ),
        n
      );
    }
    class Fo {
      constructor(t) {
        (this.pswp = t),
          (this.limit = Math.max(
            t.options.preload[0] + t.options.preload[1] + 1,
            5
          )),
          (this._cachedItems = []);
      }
      updateLazy(t) {
        const { pswp: e } = this;
        if (e.dispatch("lazyLoad").defaultPrevented) return;
        const { preload: i } = e.options,
          n = void 0 === t || t >= 0;
        let r;
        for (r = 0; r <= i[1]; r++)
          this.loadSlideByIndex(e.currIndex + (n ? r : -r));
        for (r = 1; r <= i[0]; r++)
          this.loadSlideByIndex(e.currIndex + (n ? -r : r));
      }
      loadSlideByIndex(t) {
        const e = this.pswp.getLoopedIndex(t);
        let i = this.getContentByIndex(e);
        i ||
          ((i = (function (t, e) {
            const i = e.getItemData(t);
            if (
              !e.dispatch("lazyLoadSlide", { index: t, itemData: i })
                .defaultPrevented
            )
              return Ao(i, e, t);
          })(e, this.pswp)),
            i && this.addToCache(i));
      }
      getContentBySlide(t) {
        let e = this.getContentByIndex(t.index);
        return (
          e ||
          ((e = this.pswp.createContentFromData(t.data, t.index)),
            this.addToCache(e)),
          e.setSlide(t),
          e
        );
      }
      addToCache(t) {
        if (
          (this.removeByIndex(t.index),
            this._cachedItems.push(t),
            this._cachedItems.length > this.limit)
        ) {
          const t = this._cachedItems.findIndex(
            (t) => !t.isAttached && !t.hasSlide
          );
          if (-1 !== t) {
            this._cachedItems.splice(t, 1)[0].destroy();
          }
        }
      }
      removeByIndex(t) {
        const e = this._cachedItems.findIndex((e) => e.index === t);
        -1 !== e && this._cachedItems.splice(e, 1);
      }
      getContentByIndex(t) {
        return this._cachedItems.find((e) => e.index === t);
      }
      destroy() {
        this._cachedItems.forEach((t) => t.destroy()), (this._cachedItems = []);
      }
    }
    class ko {
      constructor(t) {
        (this.pswp = t),
          (this.isClosed = !0),
          (this.isOpen = !1),
          (this.isClosing = !1),
          (this.isOpening = !1),
          (this._duration = void 0),
          (this._useAnimation = !1),
          (this._croppedZoom = !1),
          (this._animateRootOpacity = !1),
          (this._animateBgOpacity = !1),
          (this._placeholder = void 0),
          (this._opacityElement = void 0),
          (this._cropContainer1 = void 0),
          (this._cropContainer2 = void 0),
          (this._thumbBounds = void 0),
          (this._prepareOpen = this._prepareOpen.bind(this)),
          t.on("firstZoomPan", this._prepareOpen);
      }
      open() {
        this._prepareOpen(), this._start();
      }
      close() {
        if (this.isClosed || this.isClosing || this.isOpening) return;
        const t = this.pswp.currSlide;
        (this.isOpen = !1),
          (this.isOpening = !1),
          (this.isClosing = !0),
          (this._duration = this.pswp.options.hideAnimationDuration),
          t &&
          t.currZoomLevel * t.width >= this.pswp.options.maxWidthToAnimate &&
          (this._duration = 0),
          this._applyStartProps(),
          setTimeout(
            () => {
              this._start();
            },
            this._croppedZoom ? 30 : 0
          );
      }
      _prepareOpen() {
        if (
          (this.pswp.off("firstZoomPan", this._prepareOpen), !this.isOpening)
        ) {
          const t = this.pswp.currSlide;
          (this.isOpening = !0),
            (this.isClosing = !1),
            (this._duration = this.pswp.options.showAnimationDuration),
            t &&
            t.zoomLevels.initial * t.width >=
            this.pswp.options.maxWidthToAnimate &&
            (this._duration = 0),
            this._applyStartProps();
        }
      }
      _applyStartProps() {
        const { pswp: t } = this,
          e = this.pswp.currSlide,
          { options: i } = t;
        var n, r;
        ("fade" === i.showHideAnimationType
          ? ((i.showHideOpacity = !0), (this._thumbBounds = void 0))
          : "none" === i.showHideAnimationType
            ? ((i.showHideOpacity = !1),
              (this._duration = 0),
              (this._thumbBounds = void 0))
            : this.isOpening && t._initialThumbBounds
              ? (this._thumbBounds = t._initialThumbBounds)
              : (this._thumbBounds = this.pswp.getThumbBounds()),
          (this._placeholder = null == e ? void 0 : e.getPlaceholderElement()),
          t.animations.stopAll(),
          (this._useAnimation = Boolean(this._duration && this._duration > 50)),
          (this._animateZoom =
            Boolean(this._thumbBounds) &&
            (null == e ? void 0 : e.content.usePlaceholder()) &&
            (!this.isClosing || !t.mainScroll.isShifted())),
          this._animateZoom)
          ? (this._animateRootOpacity =
            null !== (n = i.showHideOpacity) && void 0 !== n && n)
          : ((this._animateRootOpacity = !0),
            this.isOpening &&
            e &&
            (e.zoomAndPanToInitial(), e.applyCurrentZoomPan()));
        if (
          ((this._animateBgOpacity =
            !this._animateRootOpacity && this.pswp.options.bgOpacity > 0.003),
            (this._opacityElement = this._animateRootOpacity ? t.element : t.bg),
            !this._useAnimation)
        )
          return (
            (this._duration = 0),
            (this._animateZoom = !1),
            (this._animateBgOpacity = !1),
            (this._animateRootOpacity = !0),
            void (
              this.isOpening &&
              (t.element && (t.element.style.opacity = String(0.003)),
                t.applyBgOpacity(1))
            )
          );
        this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect
          ? ((this._croppedZoom = !0),
            (this._cropContainer1 = this.pswp.container),
            (this._cropContainer2 =
              null === (r = this.pswp.currSlide) || void 0 === r
                ? void 0
                : r.holderElement),
            t.container &&
            ((t.container.style.overflow = "hidden"),
              (t.container.style.width = t.viewportSize.x + "px")))
          : (this._croppedZoom = !1);
        this.isOpening
          ? (this._animateRootOpacity
            ? (t.element && (t.element.style.opacity = String(0.003)),
              t.applyBgOpacity(1))
            : (this._animateBgOpacity &&
              t.bg &&
              (t.bg.style.opacity = String(0.003)),
              t.element && (t.element.style.opacity = "1")),
            this._animateZoom &&
            (this._setClosedStateZoomPan(),
              this._placeholder &&
              ((this._placeholder.style.willChange = "transform"),
                (this._placeholder.style.opacity = String(0.003)))))
          : this.isClosing &&
          (t.mainScroll.itemHolders[0] &&
            (t.mainScroll.itemHolders[0].el.style.display = "none"),
            t.mainScroll.itemHolders[2] &&
            (t.mainScroll.itemHolders[2].el.style.display = "none"),
            this._croppedZoom &&
            0 !== t.mainScroll.x &&
            (t.mainScroll.resetPosition(), t.mainScroll.resize()));
      }
      _start() {
        this.isOpening &&
          this._useAnimation &&
          this._placeholder &&
          "IMG" === this._placeholder.tagName
          ? new Promise((t) => {
            let e = !1,
              i = !0;
            var n;
            ((n = this._placeholder),
              "decode" in n
                ? n.decode().catch(() => { })
                : n.complete
                  ? Promise.resolve(n)
                  : new Promise((t, e) => {
                    (n.onload = () => t(n)), (n.onerror = e);
                  })).finally(() => {
                    (e = !0), i || t(!0);
                  }),
              setTimeout(() => {
                (i = !1), e && t(!0);
              }, 50),
              setTimeout(t, 250);
          }).finally(() => this._initiate())
          : this._initiate();
      }
      _initiate() {
        var t, e;
        null === (t = this.pswp.element) ||
          void 0 === t ||
          t.style.setProperty(
            "--pswp-transition-duration",
            this._duration + "ms"
          ),
          this.pswp.dispatch(
            this.isOpening ? "openingAnimationStart" : "closingAnimationStart"
          ),
          this.pswp.dispatch("initialZoom" + (this.isOpening ? "In" : "Out")),
          null === (e = this.pswp.element) ||
          void 0 === e ||
          e.classList.toggle("pswp--ui-visible", this.isOpening),
          this.isOpening
            ? (this._placeholder && (this._placeholder.style.opacity = "1"),
              this._animateToOpenState())
            : this.isClosing && this._animateToClosedState(),
          this._useAnimation || this._onAnimationComplete();
      }
      _onAnimationComplete() {
        const { pswp: t } = this;
        if (
          ((this.isOpen = this.isOpening),
            (this.isClosed = this.isClosing),
            (this.isOpening = !1),
            (this.isClosing = !1),
            t.dispatch(
              this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd"
            ),
            t.dispatch("initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")),
            this.isClosed)
        )
          t.destroy();
        else if (this.isOpen) {
          var e;
          this._animateZoom &&
            t.container &&
            ((t.container.style.overflow = "visible"),
              (t.container.style.width = "100%")),
            null === (e = t.currSlide) ||
            void 0 === e ||
            e.applyCurrentZoomPan();
        }
      }
      _animateToOpenState() {
        const { pswp: t } = this;
        this._animateZoom &&
          (this._croppedZoom &&
            this._cropContainer1 &&
            this._cropContainer2 &&
            (this._animateTo(
              this._cropContainer1,
              "transform",
              "translate3d(0,0,0)"
            ),
              this._animateTo(this._cropContainer2, "transform", "none")),
            t.currSlide &&
            (t.currSlide.zoomAndPanToInitial(),
              this._animateTo(
                t.currSlide.container,
                "transform",
                t.currSlide.getCurrentTransform()
              ))),
          this._animateBgOpacity &&
          t.bg &&
          this._animateTo(t.bg, "opacity", String(t.options.bgOpacity)),
          this._animateRootOpacity &&
          t.element &&
          this._animateTo(t.element, "opacity", "1");
      }
      _animateToClosedState() {
        const { pswp: t } = this;
        this._animateZoom && this._setClosedStateZoomPan(!0),
          this._animateBgOpacity &&
          t.bgOpacity > 0.01 &&
          t.bg &&
          this._animateTo(t.bg, "opacity", "0"),
          this._animateRootOpacity &&
          t.element &&
          this._animateTo(t.element, "opacity", "0");
      }
      _setClosedStateZoomPan(t) {
        if (!this._thumbBounds) return;
        const { pswp: e } = this,
          { innerRect: i } = this._thumbBounds,
          { currSlide: n, viewportSize: r } = e;
        if (
          this._croppedZoom &&
          i &&
          this._cropContainer1 &&
          this._cropContainer2
        ) {
          const e = -r.x + (this._thumbBounds.x - i.x) + i.w,
            n = -r.y + (this._thumbBounds.y - i.y) + i.h,
            o = r.x - i.w,
            s = r.y - i.h;
          t
            ? (this._animateTo(this._cropContainer1, "transform", jr(e, n)),
              this._animateTo(this._cropContainer2, "transform", jr(o, s)))
            : (zr(this._cropContainer1, e, n), zr(this._cropContainer2, o, s));
        }
        n &&
          (kr(n.pan, i || this._thumbBounds),
            (n.currZoomLevel = this._thumbBounds.w / n.width),
            t
              ? this._animateTo(n.container, "transform", n.getCurrentTransform())
              : n.applyCurrentZoomPan());
      }
      _animateTo(t, e, i) {
        if (!this._duration) return void (t.style[e] = i);
        const { animations: n } = this.pswp,
          r = {
            duration: this._duration,
            easing: this.pswp.options.easing,
            onComplete: () => {
              n.activeAnimations.length || this._onAnimationComplete();
            },
            target: t,
          };
        (r[e] = i), n.startTransition(r);
      }
    }
    const Mo = {
      allowPanToNext: !0,
      spacing: 0.1,
      loop: !0,
      pinchToClose: !0,
      closeOnVerticalDrag: !0,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      zoomAnimationDuration: 333,
      escKey: !0,
      arrowKeys: !0,
      trapFocus: !0,
      returnFocus: !0,
      maxWidthToAnimate: 4e3,
      clickToCloseNonZoomable: !0,
      imageClickAction: "zoom-or-close",
      bgClickAction: "close",
      tapAction: "toggle-controls",
      doubleTapAction: "zoom",
      indexIndicatorSep: " / ",
      preloaderDelay: 2e3,
      bgOpacity: 0.8,
      index: 0,
      errorMsg: "The image cannot be loaded",
      preload: [1, 2],
      easing: "cubic-bezier(.4,0,.22,1)",
    };
    class Lo extends class extends class {
      constructor() {
        (this._listeners = {}),
          (this._filters = {}),
          (this.pswp = void 0),
          (this.options = void 0);
      }
      addFilter(t, e, i = 100) {
        var n, r, o;
        this._filters[t] || (this._filters[t] = []),
          null === (n = this._filters[t]) ||
          void 0 === n ||
          n.push({ fn: e, priority: i }),
          null === (r = this._filters[t]) ||
          void 0 === r ||
          r.sort((t, e) => t.priority - e.priority),
          null === (o = this.pswp) || void 0 === o || o.addFilter(t, e, i);
      }
      removeFilter(t, e) {
        this._filters[t] &&
          (this._filters[t] = this._filters[t].filter((t) => t.fn !== e)),
          this.pswp && this.pswp.removeFilter(t, e);
      }
      applyFilters(t, ...e) {
        var i;
        return (
          null === (i = this._filters[t]) ||
          void 0 === i ||
          i.forEach((t) => {
            e[0] = t.fn.apply(this, e);
          }),
          e[0]
        );
      }
      on(t, e) {
        var i, n;
        this._listeners[t] || (this._listeners[t] = []),
          null === (i = this._listeners[t]) || void 0 === i || i.push(e),
          null === (n = this.pswp) || void 0 === n || n.on(t, e);
      }
      off(t, e) {
        var i;
        this._listeners[t] &&
          (this._listeners[t] = this._listeners[t].filter((t) => e !== t)),
          null === (i = this.pswp) || void 0 === i || i.off(t, e);
      }
      dispatch(t, e) {
        var i;
        if (this.pswp) return this.pswp.dispatch(t, e);
        const n = new So(t, e);
        return (
          null === (i = this._listeners[t]) ||
          void 0 === i ||
          i.forEach((t) => {
            t.call(this, n);
          }),
          n
        );
      }
    } {
      getNumItems() {
        var t;
        let e = 0;
        const i =
          null === (t = this.options) || void 0 === t ? void 0 : t.dataSource;
        i && "length" in i
          ? (e = i.length)
          : i &&
          "gallery" in i &&
          (i.items || (i.items = this._getGalleryDOMElements(i.gallery)),
            i.items && (e = i.items.length));
        const n = this.dispatch("numItems", { dataSource: i, numItems: e });
        return this.applyFilters("numItems", n.numItems, i);
      }
      createContentFromData(t, e) {
        return new Po(t, this, e);
      }
      getItemData(t) {
        var e;
        const i =
          null === (e = this.options) || void 0 === e ? void 0 : e.dataSource;
        let n = {};
        Array.isArray(i)
          ? (n = i[t])
          : i &&
          "gallery" in i &&
          (i.items || (i.items = this._getGalleryDOMElements(i.gallery)),
            (n = i.items[t]));
        let r = n;
        r instanceof Element && (r = this._domElementToItemData(r));
        const o = this.dispatch("itemData", { itemData: r || {}, index: t });
        return this.applyFilters("itemData", o.itemData, t);
      }
      _getGalleryDOMElements(t) {
        var e, i;
        return (null !== (e = this.options) && void 0 !== e && e.children) ||
          (null !== (i = this.options) && void 0 !== i && i.childSelector)
          ? (function (t, e, i = document) {
            let n = [];
            if (t instanceof Element) n = [t];
            else if (t instanceof NodeList || Array.isArray(t))
              n = Array.from(t);
            else {
              const r = "string" == typeof t ? t : e;
              r && (n = Array.from(i.querySelectorAll(r)));
            }
            return n;
          })(this.options.children, this.options.childSelector, t) || []
          : [t];
      }
      _domElementToItemData(t) {
        const e = { element: t },
          i = "A" === t.tagName ? t : t.querySelector("a");
        if (i) {
          (e.src = i.dataset.pswpSrc || i.href),
            i.dataset.pswpSrcset && (e.srcset = i.dataset.pswpSrcset),
            (e.width = i.dataset.pswpWidth
              ? parseInt(i.dataset.pswpWidth, 10)
              : 0),
            (e.height = i.dataset.pswpHeight
              ? parseInt(i.dataset.pswpHeight, 10)
              : 0),
            (e.w = e.width),
            (e.h = e.height),
            i.dataset.pswpType && (e.type = i.dataset.pswpType);
          const r = t.querySelector("img");
          var n;
          if (r)
            (e.msrc = r.currentSrc || r.src),
              (e.alt =
                null !== (n = r.getAttribute("alt")) && void 0 !== n ? n : "");
          (i.dataset.pswpCropped || i.dataset.cropped) && (e.thumbCropped = !0);
        }
        return this.applyFilters("domItemData", e, t, i);
      }
      lazyLoadData(t, e) {
        return Ao(t, this, e);
      }
    } {
      constructor(t) {
        super(),
          (this.options = this._prepareOptions(t || {})),
          (this.offset = { x: 0, y: 0 }),
          (this._prevViewportSize = { x: 0, y: 0 }),
          (this.viewportSize = { x: 0, y: 0 }),
          (this.bgOpacity = 1),
          (this.currIndex = 0),
          (this.potentialIndex = 0),
          (this.isOpen = !1),
          (this.isDestroying = !1),
          (this.hasMouse = !1),
          (this._initialItemData = {}),
          (this._initialThumbBounds = void 0),
          (this.topBar = void 0),
          (this.element = void 0),
          (this.template = void 0),
          (this.container = void 0),
          (this.scrollWrap = void 0),
          (this.currSlide = void 0),
          (this.events = new Yr()),
          (this.animations = new fo()),
          (this.mainScroll = new oo(this)),
          (this.gestures = new ro(this)),
          (this.opener = new ko(this)),
          (this.keyboard = new lo(this)),
          (this.contentLoader = new Fo(this));
      }
      init() {
        if (this.isOpen || this.isDestroying) return !1;
        (this.isOpen = !0),
          this.dispatch("init"),
          this.dispatch("beforeOpen"),
          this._createMainStructure();
        let t = "pswp--open";
        return (
          this.gestures.supportsTouch && (t += " pswp--touch"),
          this.options.mainClass && (t += " " + this.options.mainClass),
          this.element && (this.element.className += " " + t),
          (this.currIndex = this.options.index || 0),
          (this.potentialIndex = this.currIndex),
          this.dispatch("firstUpdate"),
          (this.scrollWheel = new mo(this)),
          (Number.isNaN(this.currIndex) ||
            this.currIndex < 0 ||
            this.currIndex >= this.getNumItems()) &&
          (this.currIndex = 0),
          this.gestures.supportsTouch || this.mouseDetected(),
          this.updateSize(),
          (this.offset.y = window.pageYOffset),
          (this._initialItemData = this.getItemData(this.currIndex)),
          this.dispatch("gettingData", {
            index: this.currIndex,
            data: this._initialItemData,
            slide: void 0,
          }),
          (this._initialThumbBounds = this.getThumbBounds()),
          this.dispatch("initialLayout"),
          this.on("openingAnimationEnd", () => {
            const { itemHolders: t } = this.mainScroll;
            t[0] &&
              ((t[0].el.style.display = "block"),
                this.setContent(t[0], this.currIndex - 1)),
              t[2] &&
              ((t[2].el.style.display = "block"),
                this.setContent(t[2], this.currIndex + 1)),
              this.appendHeavy(),
              this.contentLoader.updateLazy(),
              this.events.add(
                window,
                "resize",
                this._handlePageResize.bind(this)
              ),
              this.events.add(
                window,
                "scroll",
                this._updatePageScrollOffset.bind(this)
              ),
              this.dispatch("bindEvents");
          }),
          this.mainScroll.itemHolders[1] &&
          this.setContent(this.mainScroll.itemHolders[1], this.currIndex),
          this.dispatch("change"),
          this.opener.open(),
          this.dispatch("afterInit"),
          !0
        );
      }
      getLoopedIndex(t) {
        const e = this.getNumItems();
        return (
          this.options.loop && (t > e - 1 && (t -= e), t < 0 && (t += e)),
          Ir(t, 0, e - 1)
        );
      }
      appendHeavy() {
        this.mainScroll.itemHolders.forEach((t) => {
          var e;
          null === (e = t.slide) || void 0 === e || e.appendHeavy();
        });
      }
      goTo(t) {
        this.mainScroll.moveIndexBy(
          this.getLoopedIndex(t) - this.potentialIndex
        );
      }
      next() {
        this.goTo(this.potentialIndex + 1);
      }
      prev() {
        this.goTo(this.potentialIndex - 1);
      }
      zoomTo(...t) {
        var e;
        null === (e = this.currSlide) || void 0 === e || e.zoomTo(...t);
      }
      toggleZoom() {
        var t;
        null === (t = this.currSlide) || void 0 === t || t.toggleZoom();
      }
      close() {
        this.opener.isOpen &&
          !this.isDestroying &&
          ((this.isDestroying = !0),
            this.dispatch("close"),
            this.events.removeAll(),
            this.opener.close());
      }
      destroy() {
        var t;
        if (!this.isDestroying)
          return (
            (this.options.showHideAnimationType = "none"), void this.close()
          );
        this.dispatch("destroy"),
          (this._listeners = {}),
          this.scrollWrap &&
          ((this.scrollWrap.ontouchmove = null),
            (this.scrollWrap.ontouchend = null)),
          null === (t = this.element) || void 0 === t || t.remove(),
          this.mainScroll.itemHolders.forEach((t) => {
            var e;
            null === (e = t.slide) || void 0 === e || e.destroy();
          }),
          this.contentLoader.destroy(),
          this.events.removeAll();
      }
      refreshSlideContent(t) {
        this.contentLoader.removeByIndex(t),
          this.mainScroll.itemHolders.forEach((e, i) => {
            var n, r;
            let o =
              (null !==
                (n =
                  null === (r = this.currSlide) || void 0 === r
                    ? void 0
                    : r.index) && void 0 !== n
                ? n
                : 0) -
              1 +
              i;
            var s;
            (this.canLoop() && (o = this.getLoopedIndex(o)), o === t) &&
              (this.setContent(e, t, !0),
                1 === i &&
                ((this.currSlide = e.slide),
                  null === (s = e.slide) || void 0 === s || s.setIsActive(!0)));
          }),
          this.dispatch("change");
      }
      setContent(t, e, i) {
        if ((this.canLoop() && (e = this.getLoopedIndex(e)), t.slide)) {
          if (t.slide.index === e && !i) return;
          t.slide.destroy(), (t.slide = void 0);
        }
        if (!this.canLoop() && (e < 0 || e >= this.getNumItems())) return;
        const n = this.getItemData(e);
        (t.slide = new $r(n, e, this)),
          e === this.currIndex && (this.currSlide = t.slide),
          t.slide.append(t.el);
      }
      getViewportCenterPoint() {
        return { x: this.viewportSize.x / 2, y: this.viewportSize.y / 2 };
      }
      updateSize(t) {
        if (this.isDestroying) return;
        const e = Wr(this.options, this);
        (!t && Or(e, this._prevViewportSize)) ||
          (kr(this._prevViewportSize, e),
            this.dispatch("beforeResize"),
            kr(this.viewportSize, this._prevViewportSize),
            this._updatePageScrollOffset(),
            this.dispatch("viewportSize"),
            this.mainScroll.resize(this.opener.isOpen),
            !this.hasMouse &&
            window.matchMedia("(any-hover: hover)").matches &&
            this.mouseDetected(),
            this.dispatch("resize"));
      }
      applyBgOpacity(t) {
        (this.bgOpacity = Math.max(t, 0)),
          this.bg &&
          (this.bg.style.opacity = String(
            this.bgOpacity * this.options.bgOpacity
          ));
      }
      mouseDetected() {
        var t;
        this.hasMouse ||
          ((this.hasMouse = !0),
            null === (t = this.element) ||
            void 0 === t ||
            t.classList.add("pswp--has_mouse"));
      }
      _handlePageResize() {
        this.updateSize(),
          /iPhone|iPad|iPod/i.test(window.navigator.userAgent) &&
          setTimeout(() => {
            this.updateSize();
          }, 500);
      }
      _updatePageScrollOffset() {
        this.setScrollOffset(0, window.pageYOffset);
      }
      setScrollOffset(t, e) {
        (this.offset.x = t),
          (this.offset.y = e),
          this.dispatch("updateScrollOffset");
      }
      _createMainStructure() {
        (this.element = Fr("pswp", "div")),
          this.element.setAttribute("tabindex", "-1"),
          this.element.setAttribute("role", "dialog"),
          (this.template = this.element),
          (this.bg = Fr("pswp__bg", "div", this.element)),
          (this.scrollWrap = Fr("pswp__scroll-wrap", "section", this.element)),
          (this.container = Fr("pswp__container", "div", this.scrollWrap)),
          this.scrollWrap.setAttribute("aria-roledescription", "carousel"),
          this.container.setAttribute("aria-live", "off"),
          this.container.setAttribute("id", "pswp__items"),
          this.mainScroll.appendHolders(),
          (this.ui = new Eo(this)),
          this.ui.init(),
          (this.options.appendToEl || document.body).appendChild(this.element);
      }
      getThumbBounds() {
        return (function (t, e, i) {
          const n = i.dispatch("thumbBounds", {
            index: t,
            itemData: e,
            instance: i,
          });
          if (n.thumbBounds) return n.thumbBounds;
          const { element: r } = e;
          let o, s;
          if (r && !1 !== i.options.thumbSelector) {
            const t = i.options.thumbSelector || "img";
            s = r.matches(t) ? r : r.querySelector(t);
          }
          return (
            (s = i.applyFilters("thumbEl", s, e, t)),
            s &&
            (o = e.thumbCropped
              ? (function (t, e, i) {
                const n = t.getBoundingClientRect(),
                  r = n.width / e,
                  o = n.height / i,
                  s = r > o ? r : o,
                  a = (n.width - e * s) / 2,
                  l = (n.height - i * s) / 2,
                  u = { x: n.left + a, y: n.top + l, w: e * s };
                return (
                  (u.innerRect = { w: n.width, h: n.height, x: a, y: l }), u
                );
              })(s, e.width || e.w || 0, e.height || e.h || 0)
              : (function (t) {
                const e = t.getBoundingClientRect();
                return { x: e.left, y: e.top, w: e.width };
              })(s)),
            i.applyFilters("thumbBounds", o, e, t)
          );
        })(
          this.currIndex,
          this.currSlide ? this.currSlide.data : this._initialItemData,
          this
        );
      }
      canLoop() {
        return this.options.loop && this.getNumItems() > 2;
      }
      _prepareOptions(t) {
        return (
          window.matchMedia("(prefers-reduced-motion), (update: slow)")
            .matches &&
          ((t.showHideAnimationType = "none"), (t.zoomAnimationDuration = 0)),
          { ...Mo, ...t }
        );
      }
    }
    function Oo(t) {
      let e = jQuery(t.next.container).find(".js-popupGallery");
      r.a.utils.toArray(e).forEach((t) => {
        var e = t.querySelectorAll(".js-slides");
        new Ar({
          bgOpacity: 1,
          counter: !1,
          zoom: !1,
          paddingFn: (t, e, i) => ({
            top: t.x > 600 ? 0 : 20,
            bottom: t.x > 600 ? 0 : 20,
            left: t.x < 600 ? 0 : 60,
            right: t.x < 600 ? 0 : 60,
          }),
          gallery: t,
          children: e,
          pswpModule: Lo,
        }).init();
      });
    }
    let Io;
    r.a.registerPlugin(o.a, Ot, ct, se),
      "scrollRestoration" in history && (history.scrollRestoration = "manual"),
      1 === o.a.isTouch
        ? (o.a.config({
          autoRefreshEvents: "DOMContentLoaded,load",
          ignoreMobileResize: !0,
        }),
          window.addEventListener("orientationchange", () => {
            window.scrollTo({ top: 0 }),
              setTimeout(function () {
                o.a.refresh();
              }, 500);
          }))
        : o.a.config({
          ignoreMobileResize: !0,
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
        });
    const jo = document.querySelector(".js-menu");
    document.querySelector(".js-navigation"),
      document.querySelector(".js-toggleNavigation");
    function zo() {
      // jQuery.post(
      //   woocommerce_params.ajax_url,
      //   { action: "mode_theme_update_mini_cart" },
      //   function (t) {
      //     jQuery("#mode-mini-cart").html(t);
      //   }
      // );
    }
    function Bo() {
      let t = document.querySelector("#smooth-content nav.m-navigation"),
        e = document.querySelector("header"),
        n = e.querySelector("nav"),
        r = document.querySelector(".o-header__switchHolder");
      // o = r.querySelector(".language-switch"),
      // s = document.querySelector("#smooth-content .language-switch");
      if ((t && n ? e.replaceChild(t, n) : e.appendChild(t), s)) {
        // r.replaceChild(s, o);
        // let t = s.querySelector(".js-selectAlways");
        // (0, i(3).default)(t);
        // jQuery(t).on("change", function (t) {
        //   window.location.href = jQuery(".js-selectAlways").val();
        // });
      } else r.appendChild(s);
      for (
        var a = document.querySelectorAll("a[href]"),
        l = function (t) {
          t.currentTarget.href === window.location.href &&
            (t.preventDefault(), t.stopPropagation());
        },
        u = 0;
        u < a.length;
        u++
      )
        a[u].addEventListener("click", l);
    }
    function Ro(t) {
      var e = r.a.timeline({});
      r.a.timeline({ paused: !0 });
      var i = jQuery(".js-introAni .js-line__inner"),
        n = jQuery(".js-introAni .js-tag"),
        o = jQuery(".js-introAni .js-text");
      e.fromTo(
        n,
        { opacity: 0, y: "-100%" },
        { opacity: 1, y: "0%", ease: "power4.out", duration: 1 }
      ),
        e.to(
          i,
          { y: "0%", ease: "power4.out", duration: 1, stagger: 0.2 },
          0.1
        ),
        e.fromTo(
          o,
          { y: "4vh", opacity: 0 },
          { opacity: 1, y: 0, ease: "power4.out", duration: 0.6, delay: "-0.6" }
        );
    }
    let No,
      Ho,
      qo = r.a.timeline({
        repeat: -1,
        repeatDelay: 0,
        defaults: { duration: 0 },
        paused: !0,
      }),
      Zo =
        (r.a.timeline({
          repeat: 0,
          repeatDelay: 0,
          defaults: { duration: 0 },
          paused: !0,
        }),
          r.a.timeline({
            repeat: -1,
            repeatDelay: 0,
            defaults: { duration: 0 },
            paused: !0,
          }));
    function Qo() {
      (Io = new Ot(".js-titleLine", {
        type: "lines",
        linesClass: "js-line__inner",
      })),
        (Io = new Ot(".js-titleLine", {
          type: "lines",
          linesClass: "js-line",
        })),
        r.a.utils.toArray(".js-splitLoader").forEach((t, e) => {
          new Ot(t, {
            type: "lines, words, chars",
            linesClass: "line line++",
            wordsClass: "word word++",
            charsClass: "char char++",
          });
          var i = jQuery(t).find(".line");
          jQuery(t).find(".word");
          i.wrap('<div class="line-wrapper">');
        });
    }
    var Xo,
      Yo = Object(n.b)();
    (Xo = Yo),
      Qt.a.init({
        debug: !0,
        prefetchIgnore: !1,
        preventRunning: !0,
        timeout: 1e4,
        prevent: (t) => {
          let { el: e } = t;
          return e.classList && e.classList.contains("no-barba");
        },
        transitions: [
          {
            async leave(t) {
              var e;
              r.a.set(".o-wiper", { zIndex: 30 }),
                r.a.set("body", { background: "#454545", overwrite: !0 }),
                await ((e = r.a.timeline({
                  defaults: { ease: "power3.inOut" },
                })),
                  e.set(".o-wiper__in", { y: "100%" }),
                  e.set(".o-wiper__in", {
                    clipPath:
                      "polygon(50% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
                  }),
                  e.set(".o-wiper__over", { y: "100%" }),
                  e.set(".o-wiper__over", {
                    clipPath:
                      "polygon(50% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
                  }),
                  e.to(
                    ".o-wiper__in",
                    1.5,
                    {
                      clipPath:
                        "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
                    },
                    0
                  ),
                  e.to(".o-wiper__in", 1.5, { y: "0%" }, 0),
                  e.to(
                    ".o-wiper__over",
                    1.5,
                    {
                      clipPath:
                        "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
                    },
                    0.3
                  ),
                  e.to(".o-wiper__over", 1.5, { y: "0%" }, 0.4),
                  e),
                Xo
                  ? (await Xo.scrollTo(0, !1), await Xo.paused(!0))
                  : window.scrollTo({ top: 0 }),
                await jQuery("html").addClass("is-loading"),
                await jQuery("body").removeClass(
                  "-work -team -none -insights woocommerce-checkout"
                );
            },
            afterLeave(t) {
              !(function () {
                let t = 0;
                o.a.getAll().forEach(function (e) {
                  (t += 1), e.kill(!0);
                });
              })(),
                fr(t.next.container),
                Oo(t),
                r.a.set(".o-header", { y: "0", overwrite: !0 }),
                jo.classList.remove("-animatedOut"),
                jo.classList.add("-animatedIn"),
                zo(),
                r.a.set(".m-tool", {
                  pointerEvents: "all",
                  opacity: "1",
                  overwrite: !0,
                });
            },
            beforeEnter(t) {
              jQuery(".js-filterSearch").val(""),
                Se(t),
                Qo(),
                ae(t),
                hr(t, Xo),
                Object(n.c)(),
                Object(pr.closeNavigation)();
            },
            enter(t) {
              !(function (t) {
                var e = r.a.timeline({ defaults: { ease: "power3.inOut" } }),
                  i = jQuery(t.next.container).find(".js-introAni .js-tag"),
                  n = jQuery(t.next.container).find(".js-introAni .js-text");
                e.set(n, { opacity: "0" }),
                  e.set(i, { opacity: "0" }),
                  e.to(".o-wiper__over", 1, { y: "-100%" }),
                  e.to(".o-wiper__in", 1, { y: "-100%" }, 0.3),
                  e.set(".o-wiper", { zIndex: -1 });
              })(t);
              let e = jQuery(".js-filterSearch").data(
                "placeholder-" + jQuery(t.next.container).data("body-class")
              );
              null == e && (e = jQuery(".js-filterSearch").data("placeholder")),
                jQuery(".js-filterSearch").attr("placeholder", e),
                jQuery("body").addClass(
                  "-" + jQuery(t.next.container).data("body-class")
                ),
                o.a.refresh();
            },
            after(t) {
              initializeOwlCarousel();
              setTimeout(function () {
                Ro(),
                  Xo && Xo.paused(!1),
                  Bo(),
                  jQuery("html").removeClass("is-loading");
              }, 500),
                setTimeout(function () {
                  o.a.refresh();
                }, 600);
            },
            once(t) {
              Oo(t),
                "1" == jQuery(t.next.container).data("barba-disabled")
                  ? (jQuery(".o-loader").remove(),
                    jQuery("html").removeClass("is-loading"),
                    le(Xo),
                    hr(t, Xo),
                    Bo())
                  : t.next.url.query.disable_barba &&
                    "1" == t.next.url.query.disable_barba
                    ? (jQuery(".o-loader").remove(),
                      jQuery("html").removeClass("is-loading"),
                      le(Xo),
                      hr(t, Xo),
                      Bo(),
                      Se(t),
                      Qo(),
                      le(Xo),
                      ae(t),
                      fr(t.next.container),
                      zo(),
                      Ro())
                    : (Xo && Xo.paused(!0),
                      r.a.set("body", { background: "#000000", overwrite: !0 }),
                      Se(t),
                      Qo(),
                      r.a.set(".o-loader__text", { opacity: "1" }),
                      (function () {
                        let t = r.a.matchMedia();
                        ct.convertToPath("#start_path"),
                          ct.convertToPath("#end_path"),
                          (No = r.a.utils.toArray(".o-loader__textLeft li")),
                          No.forEach((t, e) => {
                            let i = jQuery(t),
                              n = i.find(".line"),
                              o = i.find(".o-loader__faded");
                            r.a.set(n, { yPercent: 110 });
                            const s = r.a.timeline({
                              defaults: { ease: "power3.inOut" },
                            });
                            s.to(n, {
                              duration: 0.6,
                              yPercent: 0,
                              ease: "power3.inOut",
                            }),
                              s.to(
                                o,
                                {
                                  duration: 0.6,
                                  opacity: 1,
                                  ease: "none",
                                  stagger: 0.5,
                                },
                                "-=0.2"
                              ),
                              s.to(n, {
                                duration: 0.6,
                                yPercent: -110,
                                ease: "power3.inOut",
                              }),
                              qo.add(s, 1 * e);
                          });
                        let e = r.a.utils.toArray(".o-loader__textCenter"),
                          i = jQuery(e).find(".word");
                        r.a.fromTo(
                          i,
                          0.6,
                          { yPercent: 110 },
                          { yPercent: 0, ease: "power3.inOut", delay: 0.1 }
                        ),
                          (Ho = r.a.utils.toArray(".o-loader__textRight li")),
                          Ho.forEach((e, i) => {
                            let n = jQuery(e),
                              o = n.find(".line"),
                              s = n.find(".o-loader__faded");
                            t.add("(max-width: 666px)", () => {
                              r.a.set(o, { yPercent: -110 });
                              const t = r.a.timeline({
                                rdefaults: { ease: "power3.inOut" },
                              });
                              t.to(o, {
                                duration: 0.6,
                                yPercent: 0,
                                ease: "power3.inOut",
                              }),
                                t.to(
                                  s,
                                  { duration: 0.6, opacity: 1, ease: "none" },
                                  "-=0.2"
                                ),
                                t.to(o, {
                                  duration: 0.6,
                                  yPercent: 110,
                                  ease: "power3.inOut",
                                }),
                                Zo.add(t, 1 * i);
                            }),
                              t.add("(min-width: 667px)", () => {
                                r.a.set(o, { xPercent: -110 });
                                const t = r.a.timeline({
                                  rdefaults: { ease: "power3.inOut" },
                                });
                                t.to(o, {
                                  duration: 0.6,
                                  xPercent: 0,
                                  ease: "power3.inOut",
                                }),
                                  t.to(
                                    s,
                                    { duration: 0.6, opacity: 1, ease: "none" },
                                    "-=0.2"
                                  ),
                                  t.to(o, {
                                    duration: 0.6,
                                    xPercent: 110,
                                    ease: "power3.inOut",
                                  }),
                                  Zo.add(t, 1 * i);
                              });
                          }),
                          qo.play(),
                          Zo.play();
                      })(),
                      fr(t.next.container),
                      Xo ? Xo.scrollTo(0, !1) : window.scrollTo({ top: 0 }),
                      zo(),
                      fr(t.next.container),
                      setTimeout(function () {
                        !(function (t) {
                          var e = jQuery(t.next.container).find(
                            ".js-introAni .js-tag"
                          ),
                            i = jQuery(t.next.container).find(
                              ".js-introAni .js-text"
                            );
                          r.a.set(i, { opacity: "0" }),
                            r.a.set(e, { opacity: "0" });
                          var n = r.a.timeline({});
                          jQuery(t.next.container).find(".js-banner");
                          let o = jQuery(t.next.container).find(".js-bannerTop"),
                            s = jQuery(t.next.container).find(".js-bannerBottom");
                          n.fromTo(
                            ".o-loader__text",
                            1,
                            { opacity: 1 },
                            { opacity: 0, ease: "power2.inOut" }
                          ),
                            n.to("#start_path", {
                              morphSVG: "#end_path",
                              ease: "power4.inOut",
                              duration: 1.2,
                              delay: "-0.4",
                            }),
                            n.fromTo(
                              o,
                              { x: "-100%", opacity: 0 },
                              {
                                x: "0%",
                                opacity: 1,
                                ease: "power3.inOut",
                                duration: 1.2,
                                delay: "-0.8",
                              }
                            ),
                            n.fromTo(
                              s,
                              { x: "100%", opacity: 0 },
                              {
                                x: "0%",
                                opacity: 1,
                                ease: "power3.inOut",
                                duration: 1.2,
                                delay: "-1.2",
                              }
                            ),
                            n.to("body", {
                              backgroundColor: "#454545",
                              ease: "power4.inOut",
                              duration: 0.6,
                              delay: "-0.6",
                            }),
                            n.to(
                              "body",
                              {
                                background: "#454545",
                                ease: "power4.inOut",
                                duration: 0.6,
                                overwrite: !0,
                              },
                              1
                            );
                        })(t);
                      }, 4300),
                      setTimeout(function () {
                        le(Xo), ae(t), hr(t, Xo);
                      }, 5200),
                      setTimeout(function () {
                        Ro(), Xo && Xo.paused(!1);
                      }, 5600),
                      setTimeout(function () {
                        jQuery("html").removeClass("is-loading");
                      }, 5500),
                      setTimeout(function () {
                        Bo(), jQuery(".o-loader").remove(), o.a.refresh();
                      }, 5600));
            },
          },
        ],
      }),
      window.addEventListener("DOMContentLoaded", function () { }, !0);
  },
]);



document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = "We Miss you 😔"; // Change title when tab is hidden
    } else {
        document.title = "Chris & Co"; // Restore original title when tab is visible
    }
});


function initializeOwlCarousel() {

  // Create the fixed box container
  const fixedBox = document.createElement("div");
  fixedBox.id = "mobile-fixed-box";
  fixedBox.innerHTML = `
    <a href="tel:0468404516">Call: 0468 404 516</a>
  `;

  // Append the box to the body
  document.body.appendChild(fixedBox);

  jQuery("#menu-item-506 .dropdown").slideUp();
  jQuery(".dropdown-toggle").on("click", function () {
    jQuery(this).next(".dropdown").slideToggle();
  });

  // Prevent default action for any remaining <a> tags in Services
  jQuery(".dropdown-toggle").on("click", function (e) {
    e.preventDefault(); // Prevents the link action
  });

  if (!jQuery("#testimonial-carousel").hasClass("owl-loaded")) {
    jQuery("#testimonial-carousel").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000, // Change this value for a different slide duration
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      
      responsive: {
          0: {
              items: 1 // 1 item on small screens (under 767px)
          },
          767: {
              items: 2 // 2 items on medium screens (between 767px and 991px)
          },
          991: {
              items: 3 // 3 items on large screens (above 991px)
          }
      }
    });
    console.log("Owl Carousel initialized"); // Debugging
    return true; // Initialization successful
  }
  return false; // Initialization not yet successful
}


// Start checking on document ready
jQuery(document).ready(function () {
  initializeOwlCarousel();
});



