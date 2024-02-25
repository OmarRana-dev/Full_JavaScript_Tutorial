(() => {
  "use strict";
  var e,
    n,
    t,
    r,
    o,
    a,
    i,
    s,
    c,
    u,
    l,
    d,
    p,
    f,
    m = {
      208: (e, n, t) => {
        t.d(n, { A: () => s });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          e.id,
          'body {\n  background-color: #333;\n  color: white;\n  font-family: "Courier New", Courier, monospace;\n}\nh1 {\n  color: blueviolet;\n}\n',
          "",
        ]);
        const s = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              u = r.base ? c[0] + r.base : c[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = t(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: d, updater: m, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = r(e, o), u = 0; u < a.length; u++) {
              var l = t(a[u]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            a = c;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    v = {};
  function h(e) {
    var n = v[e];
    if (void 0 !== n) return n.exports;
    var t = (v[e] = { id: e, exports: {} });
    return m[e](t, t.exports, h), t.exports;
  }
  (h.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return h.d(n, { a: n }), n;
  }),
    (h.d = (e, n) => {
      for (var t in n)
        h.o(n, t) &&
          !h.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (h.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (h.nc = void 0),
    (e = h(72)),
    (n = h.n(e)),
    (t = h(825)),
    (r = h.n(t)),
    (o = h(659)),
    (a = h.n(o)),
    (i = h(56)),
    (s = h.n(i)),
    (c = h(540)),
    (u = h.n(c)),
    (l = h(113)),
    (d = h.n(l)),
    (p = h(208)),
    ((f = {}).styleTagTransform = d()),
    (f.setAttributes = s()),
    (f.insert = a().bind(null, "head")),
    (f.domAPI = r()),
    (f.insertStyleElement = u()),
    n()(p.A, f),
    p.A && p.A.locals && p.A.locals,
    document.body.appendChild(
      (function () {
        const e = document.createElement("h1");
        return (e.textContent = "Hi! My name is UMAR"), e;
      })()
    ),
    document.body.appendChild(
      (function () {
        const e = document.createElement("p");
        return (
          (e.textContent =
            "Umar is a self-taught web developer with a passion for mastering HTML, CSS, and JavaScript. He immerses himself in coding, constantly seeking new challenges and opportunities for growth. When not coding, Umar enjoys indulging in self-help literature, inspirational movies, and shows like 'Gotham' and 'Silicon Valley.' He aspires to excel in web development, aiming for internships and ultimately freelancing to empower others while sharing his journey through Learn in Public."),
          e
        );
      })()
    );
})();
