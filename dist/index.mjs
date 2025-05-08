import { jsx as O, jsxs as ce, Fragment as Bn } from "preact/jsx-runtime";
import { Typography as Po, ThemeProvider as Ao, Breadcrumbs as No, Link as Yr, Button as jn, Container as _o, AppBar as Io, Toolbar as Mo, Box as Ze, Avatar as yr, CssBaseline as Do, Paper as Bo, Stack as jo, List as Lo, ListItemText as Vo, Autocomplete as Fo, InputAdornment as Wo, TextField as Tr } from "@mui/material";
import { p as dt, x as ft, D as ze, _ as Uo, y as ge, P as Ln, T as ye, d as pt, q as et, A as ae, M as zo, v as Yo, a as Vt, $ as qo, R as we } from "./compat.module-BTlffX0d.mjs";
import { c as Fe, L as Ko } from "./index-Lz88NcDu.mjs";
import Go from "@emotion/styled";
import { Global as Ho, ThemeContext as Vn } from "@emotion/react";
import { createContext as Ft, Fragment as Fn } from "preact";
import { appColors as Xo } from "./Constants.mjs";
import { u as Qo } from "./useUserSession-CZBd_H0h.mjs";
const qr = (e) => e, Jo = () => {
  let e = qr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = qr;
    }
  };
}, Wn = Jo();
function Ne(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function We(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ne(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Kr(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} }, Ct = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function ei() {
  if (Gr) return G;
  Gr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
  function T(v) {
    if (typeof v == "object" && v !== null) {
      var I = v.$$typeof;
      switch (I) {
        case t:
          switch (v = v.type, v) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case m:
                case y:
                case b:
                case s:
                  return v;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function C(v) {
    return T(v) === f;
  }
  return G.AsyncMode = d, G.ConcurrentMode = f, G.ContextConsumer = a, G.ContextProvider = s, G.Element = t, G.ForwardRef = m, G.Fragment = n, G.Lazy = y, G.Memo = b, G.Portal = r, G.Profiler = i, G.StrictMode = o, G.Suspense = p, G.isAsyncMode = function(v) {
    return C(v) || T(v) === d;
  }, G.isConcurrentMode = C, G.isContextConsumer = function(v) {
    return T(v) === a;
  }, G.isContextProvider = function(v) {
    return T(v) === s;
  }, G.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, G.isForwardRef = function(v) {
    return T(v) === m;
  }, G.isFragment = function(v) {
    return T(v) === n;
  }, G.isLazy = function(v) {
    return T(v) === y;
  }, G.isMemo = function(v) {
    return T(v) === b;
  }, G.isPortal = function(v) {
    return T(v) === r;
  }, G.isProfiler = function(v) {
    return T(v) === i;
  }, G.isStrictMode = function(v) {
    return T(v) === o;
  }, G.isSuspense = function(v) {
    return T(v) === p;
  }, G.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === f || v === i || v === o || v === p || v === h || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === b || v.$$typeof === s || v.$$typeof === a || v.$$typeof === m || v.$$typeof === x || v.$$typeof === w || v.$$typeof === V || v.$$typeof === u);
  }, G.typeOf = T, G;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function ti() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
    function T($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === f || $ === i || $ === o || $ === p || $ === h || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === b || $.$$typeof === s || $.$$typeof === a || $.$$typeof === m || $.$$typeof === x || $.$$typeof === w || $.$$typeof === V || $.$$typeof === u);
    }
    function C($) {
      if (typeof $ == "object" && $ !== null) {
        var fe = $.$$typeof;
        switch (fe) {
          case t:
            var Be = $.type;
            switch (Be) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case p:
                return Be;
              default:
                var nt = Be && Be.$$typeof;
                switch (nt) {
                  case a:
                  case m:
                  case y:
                  case b:
                  case s:
                    return nt;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var v = d, I = f, U = a, R = s, P = t, c = m, S = n, N = y, z = b, B = r, j = i, M = o, ee = p, de = !1;
    function xe($) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E($) || C($) === d;
    }
    function E($) {
      return C($) === f;
    }
    function k($) {
      return C($) === a;
    }
    function A($) {
      return C($) === s;
    }
    function _($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function D($) {
      return C($) === m;
    }
    function Y($) {
      return C($) === n;
    }
    function F($) {
      return C($) === y;
    }
    function L($) {
      return C($) === b;
    }
    function q($) {
      return C($) === r;
    }
    function K($) {
      return C($) === i;
    }
    function W($) {
      return C($) === o;
    }
    function se($) {
      return C($) === p;
    }
    H.AsyncMode = v, H.ConcurrentMode = I, H.ContextConsumer = U, H.ContextProvider = R, H.Element = P, H.ForwardRef = c, H.Fragment = S, H.Lazy = N, H.Memo = z, H.Portal = B, H.Profiler = j, H.StrictMode = M, H.Suspense = ee, H.isAsyncMode = xe, H.isConcurrentMode = E, H.isContextConsumer = k, H.isContextProvider = A, H.isElement = _, H.isForwardRef = D, H.isFragment = Y, H.isLazy = F, H.isMemo = L, H.isPortal = q, H.isProfiler = K, H.isStrictMode = W, H.isSuspense = se, H.isValidElementType = T, H.typeOf = C;
  }()), H;
}
var Xr;
function Un() {
  return Xr || (Xr = 1, process.env.NODE_ENV === "production" ? Ct.exports = ei() : Ct.exports = ti()), Ct.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var or, Qr;
function ri() {
  if (Qr) return or;
  Qr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var d = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return or = o() ? Object.assign : function(i, s) {
    for (var a, d = n(i), f, m = 1; m < arguments.length; m++) {
      a = Object(arguments[m]);
      for (var p in a)
        t.call(a, p) && (d[p] = a[p]);
      if (e) {
        f = e(a);
        for (var h = 0; h < f.length; h++)
          r.call(a, f[h]) && (d[f[h]] = a[f[h]]);
      }
    }
    return d;
  }, or;
}
var ir, Jr;
function Cr() {
  if (Jr) return ir;
  Jr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ir = e, ir;
}
var sr, Zr;
function zn() {
  return Zr || (Zr = 1, sr = Function.call.bind(Object.prototype.hasOwnProperty)), sr;
}
var ar, en;
function ni() {
  if (en) return ar;
  en = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Cr(), r = {}, n = /* @__PURE__ */ zn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var h = Error(
                (d || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[m](s, m, d, a, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var b = f ? f() : "";
            e(
              "Failed " + a + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ar = o, ar;
}
var cr, tn;
function oi() {
  if (tn) return cr;
  tn = 1;
  var e = Un(), t = ri(), r = /* @__PURE__ */ Cr(), n = /* @__PURE__ */ zn(), o = /* @__PURE__ */ ni(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return cr = function(a, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(E) {
      var k = E && (f && E[f] || E[m]);
      if (typeof k == "function")
        return k;
    }
    var h = "<<anonymous>>", b = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: V(),
      arrayOf: T,
      element: C(),
      elementType: v(),
      instanceOf: I,
      node: c(),
      objectOf: R,
      oneOf: U,
      oneOfType: P,
      shape: N,
      exact: z
    };
    function y(E, k) {
      return E === k ? E !== 0 || 1 / E === 1 / k : E !== E && k !== k;
    }
    function u(E, k) {
      this.message = E, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function x(E) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, A = 0;
      function _(Y, F, L, q, K, W, se) {
        if (q = q || h, W = W || L, se !== r) {
          if (d) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = q + ":" + L;
            !k[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[fe] = !0, A++);
          }
        }
        return F[L] == null ? Y ? F[L] === null ? new u("The " + K + " `" + W + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new u("The " + K + " `" + W + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : E(F, L, q, K, W);
      }
      var D = _.bind(null, !1);
      return D.isRequired = _.bind(null, !0), D;
    }
    function w(E) {
      function k(A, _, D, Y, F, L) {
        var q = A[_], K = M(q);
        if (K !== E) {
          var W = ee(q);
          return new u(
            "Invalid " + Y + " `" + F + "` of type " + ("`" + W + "` supplied to `" + D + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return x(k);
    }
    function V() {
      return x(s);
    }
    function T(E) {
      function k(A, _, D, Y, F) {
        if (typeof E != "function")
          return new u("Property `" + F + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var L = A[_];
        if (!Array.isArray(L)) {
          var q = M(L);
          return new u("Invalid " + Y + " `" + F + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected an array."));
        }
        for (var K = 0; K < L.length; K++) {
          var W = E(L, K, D, Y, F + "[" + K + "]", r);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return x(k);
    }
    function C() {
      function E(k, A, _, D, Y) {
        var F = k[A];
        if (!a(F)) {
          var L = M(F);
          return new u("Invalid " + D + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(E);
    }
    function v() {
      function E(k, A, _, D, Y) {
        var F = k[A];
        if (!e.isValidElementType(F)) {
          var L = M(F);
          return new u("Invalid " + D + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(E);
    }
    function I(E) {
      function k(A, _, D, Y, F) {
        if (!(A[_] instanceof E)) {
          var L = E.name || h, q = xe(A[_]);
          return new u("Invalid " + Y + " `" + F + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return x(k);
    }
    function U(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(A, _, D, Y, F) {
        for (var L = A[_], q = 0; q < E.length; q++)
          if (y(L, E[q]))
            return null;
        var K = JSON.stringify(E, function(se, $) {
          var fe = ee($);
          return fe === "symbol" ? String($) : $;
        });
        return new u("Invalid " + Y + " `" + F + "` of value `" + String(L) + "` " + ("supplied to `" + D + "`, expected one of " + K + "."));
      }
      return x(k);
    }
    function R(E) {
      function k(A, _, D, Y, F) {
        if (typeof E != "function")
          return new u("Property `" + F + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var L = A[_], q = M(L);
        if (q !== "object")
          return new u("Invalid " + Y + " `" + F + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected an object."));
        for (var K in L)
          if (n(L, K)) {
            var W = E(L, K, D, Y, F + "." + K, r);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return x(k);
    }
    function P(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < E.length; k++) {
        var A = E[k];
        if (typeof A != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(A) + " at index " + k + "."
          ), s;
      }
      function _(D, Y, F, L, q) {
        for (var K = [], W = 0; W < E.length; W++) {
          var se = E[W], $ = se(D, Y, F, L, q, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && K.push($.data.expectedType);
        }
        var fe = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new u("Invalid " + L + " `" + q + "` supplied to " + ("`" + F + "`" + fe + "."));
      }
      return x(_);
    }
    function c() {
      function E(k, A, _, D, Y) {
        return B(k[A]) ? null : new u("Invalid " + D + " `" + Y + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return x(E);
    }
    function S(E, k, A, _, D) {
      return new u(
        (E || "React class") + ": " + k + " type `" + A + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function N(E) {
      function k(A, _, D, Y, F) {
        var L = A[_], q = M(L);
        if (q !== "object")
          return new u("Invalid " + Y + " `" + F + "` of type `" + q + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var K in E) {
          var W = E[K];
          if (typeof W != "function")
            return S(D, Y, F, K, ee(W));
          var se = W(L, K, D, Y, F + "." + K, r);
          if (se)
            return se;
        }
        return null;
      }
      return x(k);
    }
    function z(E) {
      function k(A, _, D, Y, F) {
        var L = A[_], q = M(L);
        if (q !== "object")
          return new u("Invalid " + Y + " `" + F + "` of type `" + q + "` " + ("supplied to `" + D + "`, expected `object`."));
        var K = t({}, A[_], E);
        for (var W in K) {
          var se = E[W];
          if (n(E, W) && typeof se != "function")
            return S(D, Y, F, W, ee(se));
          if (!se)
            return new u(
              "Invalid " + Y + " `" + F + "` key `" + W + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(A[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var $ = se(L, W, D, Y, F + "." + W, r);
          if ($)
            return $;
        }
        return null;
      }
      return x(k);
    }
    function B(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(B);
          if (E === null || a(E))
            return !0;
          var k = p(E);
          if (k) {
            var A = k.call(E), _;
            if (k !== E.entries) {
              for (; !(_ = A.next()).done; )
                if (!B(_.value))
                  return !1;
            } else
              for (; !(_ = A.next()).done; ) {
                var D = _.value;
                if (D && !B(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(E, k) {
      return E === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function M(E) {
      var k = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : j(k, E) ? "symbol" : k;
    }
    function ee(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var k = M(E);
      if (k === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function de(E) {
      var k = ee(E);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function xe(E) {
      return !E.constructor || !E.constructor.name ? h : E.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, cr;
}
var lr, rn;
function ii() {
  if (rn) return lr;
  rn = 1;
  var e = /* @__PURE__ */ Cr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, lr = function() {
    function n(s, a, d, f, m, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, lr;
}
var nn;
function si() {
  if (nn) return Tt.exports;
  if (nn = 1, process.env.NODE_ENV !== "production") {
    var e = Un(), t = !0;
    Tt.exports = /* @__PURE__ */ oi()(e.isElement, t);
  } else
    Tt.exports = /* @__PURE__ */ ii()();
  return Tt.exports;
}
var ai = /* @__PURE__ */ si();
const l = /* @__PURE__ */ Zo(ai);
function xr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let d = 0; d < i.length; d += 1) {
      const f = i[d];
      f && (s += (a === !0 ? "" : " ") + t(f), a = !1, r && r[f] && (s += " " + r[f]));
    }
    n[o] = s;
  }
  return n;
}
var xt = { exports: {} }, X = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function ci() {
  if (on) return X;
  on = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
  function y(u) {
    if (typeof u == "object" && u !== null) {
      var x = u.$$typeof;
      switch (x) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case d:
            case f:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case a:
                case p:
                case m:
                  return u;
                case i:
                  return u;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return X.ContextConsumer = i, X.ContextProvider = s, X.Element = e, X.ForwardRef = a, X.Fragment = r, X.Lazy = p, X.Memo = m, X.Portal = t, X.Profiler = o, X.StrictMode = n, X.Suspense = d, X.SuspenseList = f, X.isContextConsumer = function(u) {
    return y(u) === i;
  }, X.isContextProvider = function(u) {
    return y(u) === s;
  }, X.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, X.isForwardRef = function(u) {
    return y(u) === a;
  }, X.isFragment = function(u) {
    return y(u) === r;
  }, X.isLazy = function(u) {
    return y(u) === p;
  }, X.isMemo = function(u) {
    return y(u) === m;
  }, X.isPortal = function(u) {
    return y(u) === t;
  }, X.isProfiler = function(u) {
    return y(u) === o;
  }, X.isStrictMode = function(u) {
    return y(u) === n;
  }, X.isSuspense = function(u) {
    return y(u) === d;
  }, X.isSuspenseList = function(u) {
    return y(u) === f;
  }, X.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === m || u.$$typeof === s || u.$$typeof === i || u.$$typeof === a || u.$$typeof === b || u.getModuleId !== void 0);
  }, X.typeOf = y, X;
}
var Q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function li() {
  return sn || (sn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var x = u.$$typeof;
        switch (x) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case f:
              case m:
              case b:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case a:
                  case d:
                  case h:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return x;
                }
            }
          case r:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    Q.ContextConsumer = s, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = d, Q.Fragment = n, Q.Lazy = h, Q.Memo = p, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = f, Q.SuspenseList = m, Q.isContextConsumer = function(u) {
      return e(u) === s;
    }, Q.isContextProvider = function(u) {
      return e(u) === a;
    }, Q.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Q.isForwardRef = function(u) {
      return e(u) === d;
    }, Q.isFragment = function(u) {
      return e(u) === n;
    }, Q.isLazy = function(u) {
      return e(u) === h;
    }, Q.isMemo = function(u) {
      return e(u) === p;
    }, Q.isPortal = function(u) {
      return e(u) === r;
    }, Q.isProfiler = function(u) {
      return e(u) === i;
    }, Q.isStrictMode = function(u) {
      return e(u) === o;
    }, Q.isSuspense = function(u) {
      return e(u) === f;
    }, Q.isSuspenseList = function(u) {
      return e(u) === m;
    }, Q.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === f || u === m || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === a || u.$$typeof === s || u.$$typeof === d || u.$$typeof === y || u.getModuleId !== void 0);
    }, Q.typeOf = e;
  }()), Q;
}
var an;
function ui() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? xt.exports = /* @__PURE__ */ ci() : xt.exports = /* @__PURE__ */ li()), xt.exports;
}
var Pt = /* @__PURE__ */ ui();
function Ce(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Yn(e) {
  if (/* @__PURE__ */ dt(e) || Pt.isValidElementType(e) || !Ce(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Yn(e[r]);
  }), t;
}
function me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ce(e) && Ce(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ dt(t[o]) || Pt.isValidElementType(t[o]) ? n[o] = t[o] : Ce(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ce(e[o]) ? n[o] = me(e[o], t[o], r) : r.clone ? n[o] = Ce(t[o]) ? Yn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function lt(e, t) {
  return t ? me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Me = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function di(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, a;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = o.match(i)) == null ? void 0 : a[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function fi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function pi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ne(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function mi(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const d = t(e.breakpoints.not(...a), s);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Wt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, cn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wt[e]}px)`
}, hi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Wt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || cn;
    return t.reduce((s, a, d) => (s[i.up(i.keys[d])] = r(t[d]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || cn;
    return Object.keys(t).reduce((s, a) => {
      if (fi(i.keys, a)) {
        const d = pi(n.containerQueries ? n : hi, a);
        d && (s[d] = r(t[a], a));
      } else if (Object.keys(i.values || Wt).includes(a)) {
        const d = i.up(a);
        s[d] = r(t[a], a);
      } else {
        const d = a;
        s[d] = t[d];
      }
      return s;
    }, {});
  }
  return r(t);
}
function yi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function gi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Ut(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function At(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ut(e, r) || n, t && (o = t(o, n, e)), o;
}
function ie(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], d = s.theme, f = Ut(d, n) || {};
    return ke(s, a, (p) => {
      let h = At(f, o, p);
      return p === h && typeof p == "string" && (h = At(f, o, `${t}${p === "default" ? "" : We(p)}`, p)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, i.filterProps = [t], i;
}
function bi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const vi = {
  m: "margin",
  p: "padding"
}, Si = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ln = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ei = bi((e) => {
  if (e.length > 2)
    if (ln[e])
      e = ln[e];
    else
      return [e];
  const [t, r] = e.split(""), n = vi[t], o = Si[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), zt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Yt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ti = [...zt, ...Yt];
function yt(e, t, r, n) {
  const o = Ut(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Or(e) {
  return yt(e, "spacing", 8, "spacing");
}
function gt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ci(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = gt(t, r), n), {});
}
function xi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Ei(r), i = Ci(o, n), s = e[r];
  return ke(e, s, i);
}
function qn(e, t) {
  const r = Or(e.theme);
  return Object.keys(e).map((n) => xi(e, t, n, r)).reduce(lt, {});
}
function re(e) {
  return qn(e, zt);
}
re.propTypes = process.env.NODE_ENV !== "production" ? zt.reduce((e, t) => (e[t] = Me, e), {}) : {};
re.filterProps = zt;
function ne(e) {
  return qn(e, Yt);
}
ne.propTypes = process.env.NODE_ENV !== "production" ? Yt.reduce((e, t) => (e[t] = Me, e), {}) : {};
ne.filterProps = Yt;
process.env.NODE_ENV !== "production" && Ti.reduce((e, t) => (e[t] = Me, e), {});
function qt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? lt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function be(e, t) {
  return ie({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Oi = be("border", he), wi = be("borderTop", he), $i = be("borderRight", he), ki = be("borderBottom", he), Ri = be("borderLeft", he), Pi = be("borderColor"), Ai = be("borderTopColor"), Ni = be("borderRightColor"), _i = be("borderBottomColor"), Ii = be("borderLeftColor"), Mi = be("outline", he), Di = be("outlineColor"), Kt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = yt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: gt(t, n)
    });
    return ke(e, e.borderRadius, r);
  }
  return null;
};
Kt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
Kt.filterProps = ["borderRadius"];
qt(Oi, wi, $i, ki, Ri, Pi, Ai, Ni, _i, Ii, Kt, Mi, Di);
const Gt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = yt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: gt(t, n)
    });
    return ke(e, e.gap, r);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
Gt.filterProps = ["gap"];
const Ht = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = yt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: gt(t, n)
    });
    return ke(e, e.columnGap, r);
  }
  return null;
};
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
Ht.filterProps = ["columnGap"];
const Xt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = yt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: gt(t, n)
    });
    return ke(e, e.rowGap, r);
  }
  return null;
};
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
Xt.filterProps = ["rowGap"];
const Bi = ie({
  prop: "gridColumn"
}), ji = ie({
  prop: "gridRow"
}), Li = ie({
  prop: "gridAutoFlow"
}), Vi = ie({
  prop: "gridAutoColumns"
}), Fi = ie({
  prop: "gridAutoRows"
}), Wi = ie({
  prop: "gridTemplateColumns"
}), Ui = ie({
  prop: "gridTemplateRows"
}), zi = ie({
  prop: "gridTemplateAreas"
}), Yi = ie({
  prop: "gridArea"
});
qt(Gt, Ht, Xt, Bi, ji, Li, Vi, Fi, Wi, Ui, zi, Yi);
function tt(e, t) {
  return t === "grey" ? t : e;
}
const qi = ie({
  prop: "color",
  themeKey: "palette",
  transform: tt
}), Ki = ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: tt
}), Gi = ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: tt
});
qt(qi, Ki, Gi);
function pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hi = ie({
  prop: "width",
  transform: pe
}), wr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, a, d;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || Wt[r];
      return n ? ((d = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: pe(r)
      };
    };
    return ke(e, e.maxWidth, t);
  }
  return null;
};
wr.filterProps = ["maxWidth"];
const Xi = ie({
  prop: "minWidth",
  transform: pe
}), Qi = ie({
  prop: "height",
  transform: pe
}), Ji = ie({
  prop: "maxHeight",
  transform: pe
}), Zi = ie({
  prop: "minHeight",
  transform: pe
});
ie({
  prop: "size",
  cssProperty: "width",
  transform: pe
});
ie({
  prop: "size",
  cssProperty: "height",
  transform: pe
});
const es = ie({
  prop: "boxSizing"
});
qt(Hi, wr, Xi, Qi, Ji, Zi, es);
const bt = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: he
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Kt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: tt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: tt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: tt
  },
  // spacing
  p: {
    style: ne
  },
  pt: {
    style: ne
  },
  pr: {
    style: ne
  },
  pb: {
    style: ne
  },
  pl: {
    style: ne
  },
  px: {
    style: ne
  },
  py: {
    style: ne
  },
  padding: {
    style: ne
  },
  paddingTop: {
    style: ne
  },
  paddingRight: {
    style: ne
  },
  paddingBottom: {
    style: ne
  },
  paddingLeft: {
    style: ne
  },
  paddingX: {
    style: ne
  },
  paddingY: {
    style: ne
  },
  paddingInline: {
    style: ne
  },
  paddingInlineStart: {
    style: ne
  },
  paddingInlineEnd: {
    style: ne
  },
  paddingBlock: {
    style: ne
  },
  paddingBlockStart: {
    style: ne
  },
  paddingBlockEnd: {
    style: ne
  },
  m: {
    style: re
  },
  mt: {
    style: re
  },
  mr: {
    style: re
  },
  mb: {
    style: re
  },
  ml: {
    style: re
  },
  mx: {
    style: re
  },
  my: {
    style: re
  },
  margin: {
    style: re
  },
  marginTop: {
    style: re
  },
  marginRight: {
    style: re
  },
  marginBottom: {
    style: re
  },
  marginLeft: {
    style: re
  },
  marginX: {
    style: re
  },
  marginY: {
    style: re
  },
  marginInline: {
    style: re
  },
  marginInlineStart: {
    style: re
  },
  marginInlineEnd: {
    style: re
  },
  marginBlock: {
    style: re
  },
  marginBlockStart: {
    style: re
  },
  marginBlockEnd: {
    style: re
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Gt
  },
  rowGap: {
    style: Xt
  },
  columnGap: {
    style: Ht
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: pe
  },
  maxWidth: {
    style: wr
  },
  minWidth: {
    transform: pe
  },
  height: {
    transform: pe
  },
  maxHeight: {
    transform: pe
  },
  minHeight: {
    transform: pe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ts(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function rs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ns() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: d = r,
      themeKey: f,
      transform: m,
      style: p
    } = a;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Ut(o, f) || {};
    return p ? p(s) : ke(s, n, (y) => {
      let u = At(h, m, y);
      return y === u && typeof y == "string" && (u = At(h, m, `${r}${y === "default" ? "" : We(y)}`, y)), d === !1 ? u : {
        [d]: u
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? bt;
    function s(a) {
      let d = a;
      if (typeof a == "function")
        d = a(o);
      else if (typeof a != "object")
        return a;
      if (!d)
        return null;
      const f = yi(o.breakpoints), m = Object.keys(f);
      let p = f;
      return Object.keys(d).forEach((h) => {
        const b = rs(d[h], o);
        if (b != null)
          if (typeof b == "object")
            if (i[h])
              p = lt(p, e(h, b, o, i));
            else {
              const y = ke({
                theme: o
              }, b, (u) => ({
                [h]: u
              }));
              ts(y, b) ? p[h] = t({
                sx: b,
                theme: o
              }) : p = lt(p, y);
            }
          else
            p = lt(p, e(h, b, o, i));
      }), di(o, gi(m, p));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const _e = ns();
_e.filterProps = ["sx"];
const os = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? bt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function is(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = os(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ce(a) ? {
      ...n,
      ...a
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function ss(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var as = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function cs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ls = /[A-Z]|^ms/g, us = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Kn = function(t) {
  return t.charCodeAt(1) === 45;
}, un = function(t) {
  return t != null && typeof t != "boolean";
}, ur = /* @__PURE__ */ cs(function(e) {
  return Kn(e) ? e : e.replace(ls, "-$&").toLowerCase();
}), dn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(us, function(n, o, i) {
          return Ae = {
            name: o,
            styles: i,
            next: Ae
          }, o;
        });
  }
  return as[t] !== 1 && !Kn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Nt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ae = {
          name: o.name,
          styles: o.styles,
          next: Ae
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ae = {
              name: s.name,
              styles: s.styles,
              next: Ae
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return ds(e, t, r);
    }
  }
  var d = r;
  return d;
}
function ds(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Nt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var a = s;
        un(a) && (n += ur(i) + ":" + dn(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var d = 0; d < s.length; d++)
          un(s[d]) && (n += ur(i) + ":" + dn(i, s[d]) + ";");
      else {
        var f = Nt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += ur(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var fn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ae;
function fs(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ae = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Nt(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Nt(r, t, e[a]), n) {
      var d = i;
      o += d[a];
    }
  fn.lastIndex = 0;
  for (var f = "", m; (m = fn.exec(o)) !== null; )
    f += "-" + m[1];
  var p = ss(o) + f;
  return {
    name: p,
    styles: o,
    next: Ae
  };
}
function ps(e) {
  return e == null || Object.keys(e).length === 0;
}
function Gn(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ O(Ho, {
    styles: typeof t == "function" ? (o) => t(ps(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  defaultTheme: l.object,
  styles: l.oneOfType([l.array, l.string, l.object, l.func])
});
/**
 * @mui/styled-engine v7.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Hn(e, t) {
  const r = Go(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function ms(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const pn = [];
function mn(e) {
  return pn[0] = e, fs(pn);
}
const hs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ys(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = hs(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function d(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function f(h, b) {
    const y = s.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : b) - n / 100}${r})`;
  }
  function m(h) {
    return s.indexOf(h) + 1 < s.length ? f(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function p(h) {
    const b = s.indexOf(h);
    return b === 0 ? a(s[1]) : b === s.length - 1 ? d(s[b]) : f(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: d,
    between: f,
    only: m,
    not: p,
    unit: r,
    ...o
  };
}
const gs = {
  borderRadius: 4
};
function Xn(e = 8, t = Or({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function bs(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function $r(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = ys(r), d = Xn(o);
  let f = me({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...gs,
      ...i
    }
  }, s);
  return f = mi(f), f.applyStyles = bs, f = t.reduce((m, p) => me(m, p), f), f.unstable_sxConfig = {
    ...bt,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return _e({
      sx: p,
      theme: this
    });
  }, f;
}
function vs(e) {
  return Object.keys(e).length === 0;
}
function Qn(e = null) {
  const t = ft(Vn);
  return !t || vs(t) ? e : t;
}
const Ss = $r();
function Jn(e = Ss) {
  return Qn(e);
}
function Es(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Hn("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(_e);
  return /* @__PURE__ */ ze(function(d, f) {
    const m = Jn(r), {
      className: p,
      component: h = "div",
      ...b
    } = is(d);
    return /* @__PURE__ */ O(i, {
      as: h,
      ref: f,
      className: Fe(p, o ? o(n) : n),
      theme: t && m[t] || m,
      ...b
    });
  });
}
const Ts = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function vt(e, t, r = "Mui") {
  const n = Ts[t];
  return n ? `${r}-${n}` : `${Wn.generate(e)}-${t}`;
}
function Qt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = vt(e, o, r);
  }), n;
}
function Zn(e, t = "") {
  return e.displayName || e.name || t;
}
function hn(e, t, r) {
  const n = Zn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Cs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Zn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Pt.ForwardRef:
          return hn(e, e.render, "ForwardRef");
        case Pt.Memo:
          return hn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function eo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: mn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = mn(o.style));
  }), n;
}
const xs = $r();
function dr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Os(e) {
  return e ? (t, r) => r[e] : null;
}
function ws(e, t, r) {
  e.theme = Ps(e.theme) ? r : e.theme[t] || e.theme;
}
function Rt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Rt(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return to(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function to(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function $s(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xs,
    rootShouldForwardProp: n = dr,
    slotShouldForwardProp: o = dr
  } = e;
  function i(a) {
    ws(a, t, r);
  }
  return (a, d = {}) => {
    ms(a, (v) => v.filter((I) => I !== _e));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = Os(ro(m)),
      ...y
    } = d, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), x = h || !1;
    let w = dr;
    m === "Root" || m === "root" ? w = n : m ? w = o : As(a) && (w = void 0);
    const V = Hn(a, {
      shouldForwardProp: w,
      label: Rs(f, m),
      ...y
    }), T = (v) => {
      if (typeof v == "function" && v.__emotion_real !== v)
        return function(U) {
          return Rt(U, v);
        };
      if (Ce(v)) {
        const I = eo(v);
        return I.variants ? function(R) {
          return Rt(R, I);
        } : I.style;
      }
      return v;
    }, C = (...v) => {
      const I = [], U = v.map(T), R = [];
      if (I.push(i), f && b && R.push(function(N) {
        var M, ee;
        const B = (ee = (M = N.theme.components) == null ? void 0 : M[f]) == null ? void 0 : ee.styleOverrides;
        if (!B)
          return null;
        const j = {};
        for (const de in B)
          j[de] = Rt(N, B[de]);
        return b(N, j);
      }), f && !u && R.push(function(N) {
        var j, M;
        const z = N.theme, B = (M = (j = z == null ? void 0 : z.components) == null ? void 0 : j[f]) == null ? void 0 : M.variants;
        return B ? to(N, B) : null;
      }), x || R.push(_e), Array.isArray(U[0])) {
        const S = U.shift(), N = new Array(I.length).fill(""), z = new Array(R.length).fill("");
        let B;
        B = [...N, ...S, ...z], B.raw = [...N, ...S.raw, ...z], I.unshift(B);
      }
      const P = [...I, ...U, ...R], c = V(...P);
      return a.muiName && (c.muiName = a.muiName), process.env.NODE_ENV !== "production" && (c.displayName = ks(f, m, a)), c;
    };
    return V.withConfig && (C.withConfig = V.withConfig), C;
  };
}
function ks(e, t, r) {
  return e ? `${e}${We(t || "")}` : `Styled(${Cs(r)})`;
}
function Rs(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ro(t || "Root")}`), r;
}
function Ps(e) {
  for (const t in e)
    return !1;
  return !0;
}
function As(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ro(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function gr(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const d = a;
              r[o][d] = gr(i[d], s[d]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const _t = typeof window < "u" ? Uo : ge;
function Ns(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function kr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ns(e, t, r);
}
function _s(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ie(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ie(_s(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ne(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ne(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Is = (e) => {
  const t = Ie(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, st = (e, t) => {
  try {
    return Is(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Jt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function no(e) {
  e = Ie(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (f, m = (f + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let a = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), Jt({
    type: a,
    values: d
  });
}
function br(e) {
  e = Ie(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ie(no(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function yn(e, t) {
  const r = br(e), n = br(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ms(e, t) {
  return e = Ie(e), t = kr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Jt(e);
}
function Ot(e, t, r) {
  try {
    return Ms(e, t);
  } catch {
    return e;
  }
}
function Rr(e, t) {
  if (e = Ie(e), t = kr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Jt(e);
}
function J(e, t, r) {
  try {
    return Rr(e, t);
  } catch {
    return e;
  }
}
function Pr(e, t) {
  if (e = Ie(e), t = kr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Jt(e);
}
function Z(e, t, r) {
  try {
    return Pr(e, t);
  } catch {
    return e;
  }
}
function Ds(e, t = 0.15) {
  return br(e) > 0.5 ? Rr(e, t) : Pr(e, t);
}
function wt(e, t, r) {
  try {
    return Ds(e, t);
  } catch {
    return e;
  }
}
const Bs = "exact-prop: ​";
function Zt(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Bs]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Ar = /* @__PURE__ */ Ft(null);
process.env.NODE_ENV !== "production" && (Ar.displayName = "ThemeContext");
function Nr() {
  const e = ft(Ar);
  return process.env.NODE_ENV !== "production" && Ln(e), e;
}
const js = typeof Symbol == "function" && Symbol.for, Ls = js ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Vs(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function It(e) {
  const {
    children: t,
    theme: r
  } = e, n = Nr();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = ye(() => {
    const i = n === null ? {
      ...r
    } : Vs(n, r);
    return i != null && (i[Ls] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ O(Ar.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (It.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (It.propTypes = Zt(It.propTypes));
const Fs = /* @__PURE__ */ Ft();
function oo({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ O(Fs.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  children: l.node,
  value: l.bool
});
const io = /* @__PURE__ */ Ft(void 0);
function so({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ O(io.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (so.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * @ignore
   */
  value: l.object
});
function Ws(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? gr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? gr(o, n) : n;
}
function Us({
  props: e,
  name: t
}) {
  const r = ft(io);
  return Ws({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const gn = {};
function bn(e, t, r, n = !1) {
  return ye(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? {
        ...t,
        [e]: i
      } : i;
      return n ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function mt(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Qn(gn), i = Nr() || gn;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = bn(n, o, r), a = bn(n, i, r, !0), d = (n ? s[n] : s).direction === "rtl";
  return /* @__PURE__ */ O(It, {
    theme: a,
    children: /* @__PURE__ */ O(Vn.Provider, {
      value: s,
      children: /* @__PURE__ */ O(oo, {
        value: d,
        children: /* @__PURE__ */ O(so, {
          value: n ? s[n].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.func, l.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: l.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (mt.propTypes = Zt(mt.propTypes));
const vn = {
  theme: void 0
};
function zs(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (vn.theme = o.theme, i = eo(e(vn)), t = i, r = o.theme), i;
  };
}
const _r = "mode", Ir = "color-scheme", Ys = "data-color-scheme";
function qs(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = _r,
    colorSchemeStorageKey: i = Ir,
    attribute: s = Ys,
    colorSchemeNode: a = "document.documentElement",
    nonce: d
  } = e || {};
  let f = "", m = s;
  if (s === "class" && (m = ".%s"), s === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const h = m.substring(1);
    f += `${a}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${a}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const p = m.match(/\[([^\]]+)\]/);
  if (p) {
    const [h, b] = p[1].split("=");
    b || (f += `${a}.removeAttribute('${h}'.replace('%s', light));
      ${a}.removeAttribute('${h}'.replace('%s', dark));`), f += `
      ${a}.setAttribute('${h}'.replace('%s', colorScheme), ${b ? `${b}.replace('%s', colorScheme)` : '""'});`;
  } else
    f += `${a}.setAttribute('${m}', colorScheme);`;
  return /* @__PURE__ */ O("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? d : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${f}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Ks() {
}
const Gs = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return Ks;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function fr() {
}
function Sn(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ao(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Hs(e) {
  return ao(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Xs(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = _r,
    colorSchemeStorageKey: s = Ir,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    storageManager: d = Gs,
    noSsr: f = !1
  } = e, m = o.join(","), p = o.length > 1, h = ye(() => d == null ? void 0 : d({
    key: i,
    storageWindow: a
  }), [d, i, a]), b = ye(() => d == null ? void 0 : d({
    key: `${s}-light`,
    storageWindow: a
  }), [d, s, a]), y = ye(() => d == null ? void 0 : d({
    key: `${s}-dark`,
    storageWindow: a
  }), [d, s, a]), [u, x] = pt(() => {
    const R = (h == null ? void 0 : h.get(t)) || t, P = (b == null ? void 0 : b.get(r)) || r, c = (y == null ? void 0 : y.get(n)) || n;
    return {
      mode: R,
      systemMode: Sn(R),
      lightColorScheme: P,
      darkColorScheme: c
    };
  }), [w, V] = pt(f || !p);
  ge(() => {
    V(!0);
  }, []);
  const T = Hs(u), C = et((R) => {
    x((P) => {
      if (R === P.mode)
        return P;
      const c = R ?? t;
      return h == null || h.set(c), {
        ...P,
        mode: c,
        systemMode: Sn(c)
      };
    });
  }, [h, t]), v = et((R) => {
    R ? typeof R == "string" ? R && !m.includes(R) ? console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`) : x((P) => {
      const c = {
        ...P
      };
      return ao(P, (S) => {
        S === "light" && (b == null || b.set(R), c.lightColorScheme = R), S === "dark" && (y == null || y.set(R), c.darkColorScheme = R);
      }), c;
    }) : x((P) => {
      const c = {
        ...P
      }, S = R.light === null ? r : R.light, N = R.dark === null ? n : R.dark;
      return S && (m.includes(S) ? (c.lightColorScheme = S, b == null || b.set(S)) : console.error(`\`${S}\` does not exist in \`theme.colorSchemes\`.`)), N && (m.includes(N) ? (c.darkColorScheme = N, y == null || y.set(N)) : console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)), c;
    }) : x((P) => (b == null || b.set(r), y == null || y.set(n), {
      ...P,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [m, b, y, r, n]), I = et((R) => {
    u.mode === "system" && x((P) => {
      const c = R != null && R.matches ? "dark" : "light";
      return P.systemMode === c ? P : {
        ...P,
        systemMode: c
      };
    });
  }, [u.mode]), U = ae(I);
  return U.current = I, ge(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const R = (...c) => U.current(...c), P = window.matchMedia("(prefers-color-scheme: dark)");
    return P.addListener(R), R(P), () => {
      P.removeListener(R);
    };
  }, [p]), ge(() => {
    if (p) {
      const R = (h == null ? void 0 : h.subscribe((S) => {
        (!S || ["light", "dark", "system"].includes(S)) && C(S || t);
      })) || fr, P = (b == null ? void 0 : b.subscribe((S) => {
        (!S || m.match(S)) && v({
          light: S
        });
      })) || fr, c = (y == null ? void 0 : y.subscribe((S) => {
        (!S || m.match(S)) && v({
          dark: S
        });
      })) || fr;
      return () => {
        R(), P(), c();
      };
    }
  }, [v, C, m, t, a, p, h, b, y]), {
    ...u,
    mode: w ? u.mode : void 0,
    systemMode: w ? u.systemMode : void 0,
    colorScheme: w ? T : void 0,
    setMode: C,
    setColorScheme: v
  };
}
const Qs = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Js(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = _r,
    colorSchemeStorageKey: o = Ir,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: a
  } = e, d = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, f = /* @__PURE__ */ Ft(void 0);
  process.env.NODE_ENV !== "production" && (f.displayName = "ColorSchemeContext");
  const m = () => ft(f) || d, p = {}, h = {};
  function b(w) {
    var Fr, Wr, Ur, zr;
    const {
      children: V,
      theme: T,
      modeStorageKey: C = n,
      colorSchemeStorageKey: v = o,
      disableTransitionOnChange: I = i,
      storageManager: U,
      storageWindow: R = typeof window > "u" ? void 0 : window,
      documentNode: P = typeof document > "u" ? void 0 : document,
      colorSchemeNode: c = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: S = !1,
      disableStyleSheetGeneration: N = !1,
      defaultMode: z = "system",
      forceThemeRerender: B = !1,
      noSsr: j
    } = w, M = ae(!1), ee = Nr(), de = ft(f), xe = !!de && !S, E = ye(() => T || (typeof r == "function" ? r() : r), [T]), k = E[t], A = k || E, {
      colorSchemes: _ = p,
      components: D = h,
      cssVarPrefix: Y
    } = A, F = Object.keys(_).filter((le) => !!_[le]).join(","), L = ye(() => F.split(","), [F]), q = typeof s == "string" ? s : s.light, K = typeof s == "string" ? s : s.dark, W = _[q] && _[K] ? z : ((Wr = (Fr = _[A.defaultColorScheme]) == null ? void 0 : Fr.palette) == null ? void 0 : Wr.mode) || ((Ur = A.palette) == null ? void 0 : Ur.mode), {
      mode: se,
      setMode: $,
      systemMode: fe,
      lightColorScheme: Be,
      darkColorScheme: nt,
      colorScheme: $o,
      setColorScheme: jr
    } = Xs({
      supportedColorSchemes: L,
      defaultLightColorScheme: q,
      defaultDarkColorScheme: K,
      modeStorageKey: C,
      colorSchemeStorageKey: v,
      defaultMode: W,
      storageManager: U,
      storageWindow: R,
      noSsr: j
    });
    let nr = se, ve = $o;
    xe && (nr = de.mode, ve = de.colorScheme), process.env.NODE_ENV !== "production" && B && !A.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Et = ve || A.defaultColorScheme;
    A.vars && !B && (Et = A.defaultColorScheme);
    const Ye = ye(() => {
      var je;
      const le = ((je = A.generateThemeVars) == null ? void 0 : je.call(A)) || A.vars, oe = {
        ...A,
        components: D,
        colorSchemes: _,
        cssVarPrefix: Y,
        vars: le
      };
      if (typeof oe.generateSpacing == "function" && (oe.spacing = oe.generateSpacing()), Et) {
        const Ee = _[Et];
        Ee && typeof Ee == "object" && Object.keys(Ee).forEach((Se) => {
          Ee[Se] && typeof Ee[Se] == "object" ? oe[Se] = {
            ...oe[Se],
            ...Ee[Se]
          } : oe[Se] = Ee[Se];
        });
      }
      return a ? a(oe) : oe;
    }, [A, Et, D, _, Y]), ot = A.colorSchemeSelector;
    _t(() => {
      if (ve && c && ot && ot !== "media") {
        const le = ot;
        let oe = ot;
        if (le === "class" && (oe = ".%s"), le === "data" && (oe = "[data-%s]"), le != null && le.startsWith("data-") && !le.includes("%s") && (oe = `[${le}="%s"]`), oe.startsWith("."))
          c.classList.remove(...L.map((je) => oe.substring(1).replace("%s", je))), c.classList.add(oe.substring(1).replace("%s", ve));
        else {
          const je = oe.replace("%s", ve).match(/\[([^\]]+)\]/);
          if (je) {
            const [Ee, Se] = je[1].split("=");
            Se || L.forEach((Ro) => {
              c.removeAttribute(Ee.replace(ve, Ro));
            }), c.setAttribute(Ee, Se ? Se.replace(/"|'/g, "") : "");
          } else
            c.setAttribute(oe, ve);
        }
      }
    }, [ve, ot, c, L]), ge(() => {
      let le;
      if (I && M.current && P) {
        const oe = P.createElement("style");
        oe.appendChild(P.createTextNode(Qs)), P.head.appendChild(oe), window.getComputedStyle(P.body), le = setTimeout(() => {
          P.head.removeChild(oe);
        }, 1);
      }
      return () => {
        clearTimeout(le);
      };
    }, [ve, I, P]), ge(() => (M.current = !0, () => {
      M.current = !1;
    }), []);
    const ko = ye(() => ({
      allColorSchemes: L,
      colorScheme: ve,
      darkColorScheme: nt,
      lightColorScheme: Be,
      mode: nr,
      setColorScheme: jr,
      setMode: process.env.NODE_ENV === "production" ? $ : (le) => {
        Ye.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), $(le);
      },
      systemMode: fe
    }), [L, ve, nt, Be, nr, jr, $, fe, Ye.colorSchemeSelector]);
    let Lr = !0;
    (N || A.cssVariables === !1 || xe && (ee == null ? void 0 : ee.cssVarPrefix) === Y) && (Lr = !1);
    const Vr = /* @__PURE__ */ ce(Fn, {
      children: [/* @__PURE__ */ O(mt, {
        themeId: k ? t : void 0,
        theme: Ye,
        children: V
      }), Lr && /* @__PURE__ */ O(Gn, {
        styles: ((zr = Ye.generateStyleSheets) == null ? void 0 : zr.call(Ye)) || []
      })]
    });
    return xe ? Vr : /* @__PURE__ */ O(f.Provider, {
      value: ko,
      children: Vr
    });
  }
  process.env.NODE_ENV !== "production" && (b.propTypes = {
    /**
     * The component tree.
     */
    children: l.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: l.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: l.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: l.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: l.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: l.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: l.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: l.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: l.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: l.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: l.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: l.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: l.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: l.object
  });
  const y = typeof s == "string" ? s : s.light, u = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: b,
    useColorScheme: m,
    getInitColorSchemeScript: (w) => qs({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: u,
      modeStorageKey: n,
      ...w
    })
  };
}
function Zs(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const En = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ea = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([a, d]) => {
      (!r || r && !r([...i, a])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...i, a], Array.isArray(d) ? [...s, a] : s) : t([...i, a], d, s));
    });
  }
  n(e);
}, ta = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function pr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return ea(
    e,
    (a, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(a, d))) {
        const m = `--${r ? `${r}-` : ""}${a.join("-")}`, p = ta(a, d);
        Object.assign(o, {
          [m]: p
        }), En(i, a, `var(${m})`, f), En(s, a, `var(${m}, ${p})`, f);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function ra(e, t = {}) {
  const {
    getSelector: r = x,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...d
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: p
  } = pr(d, t);
  let h = p;
  const b = {}, {
    [a]: y,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([T, C]) => {
    const {
      vars: v,
      css: I,
      varsWithDefaults: U
    } = pr(C, t);
    h = me(h, U), b[T] = {
      css: I,
      vars: v
    };
  }), y) {
    const {
      css: T,
      vars: C,
      varsWithDefaults: v
    } = pr(y, t);
    h = me(h, v), b[a] = {
      css: T,
      vars: C
    };
  }
  function x(T, C) {
    var I, U;
    let v = o;
    if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (v = `[${o}="%s"]`), T) {
      if (v === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((U = (I = i[T]) == null ? void 0 : I.palette) == null ? void 0 : U.mode) || T})`]: {
            ":root": C
          }
        };
      if (v)
        return e.defaultColorScheme === T ? `:root, ${v.replace("%s", String(T))}` : v.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let T = {
        ...f
      };
      return Object.entries(b).forEach(([, {
        vars: C
      }]) => {
        T = me(T, C);
      }), T;
    },
    generateStyleSheets: () => {
      var R, P;
      const T = [], C = e.defaultColorScheme || "light";
      function v(c, S) {
        Object.keys(S).length && T.push(typeof c == "string" ? {
          [c]: {
            ...S
          }
        } : c);
      }
      v(r(void 0, {
        ...m
      }), m);
      const {
        [C]: I,
        ...U
      } = b;
      if (I) {
        const {
          css: c
        } = I, S = (P = (R = i[C]) == null ? void 0 : R.palette) == null ? void 0 : P.mode, N = !n && S ? {
          colorScheme: S,
          ...c
        } : {
          ...c
        };
        v(r(C, {
          ...N
        }), N);
      }
      return Object.entries(U).forEach(([c, {
        css: S
      }]) => {
        var B, j;
        const N = (j = (B = i[c]) == null ? void 0 : B.palette) == null ? void 0 : j.mode, z = !n && N ? {
          colorScheme: N,
          ...S
        } : {
          ...S
        };
        v(r(c, {
          ...z
        }), z);
      }), T;
    }
  };
}
function na(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const ht = {
  black: "#000",
  white: "#fff"
}, oa = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, qe = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ke = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, it = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ge = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, He = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Xe = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function co() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: ht.white,
      default: ht.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ia = co();
function lo() {
  return {
    text: {
      primary: ht.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: ht.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Tn = lo();
function Cn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Pr(e.main, o) : t === "dark" && (e.dark = Rr(e.main, i)));
}
function sa(e = "light") {
  return e === "dark" ? {
    main: Ge[200],
    light: Ge[50],
    dark: Ge[400]
  } : {
    main: Ge[700],
    light: Ge[400],
    dark: Ge[800]
  };
}
function aa(e = "light") {
  return e === "dark" ? {
    main: qe[200],
    light: qe[50],
    dark: qe[400]
  } : {
    main: qe[500],
    light: qe[300],
    dark: qe[700]
  };
}
function ca(e = "light") {
  return e === "dark" ? {
    main: Ke[500],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[700],
    light: Ke[400],
    dark: Ke[800]
  };
}
function la(e = "light") {
  return e === "dark" ? {
    main: He[400],
    light: He[300],
    dark: He[700]
  } : {
    main: He[700],
    light: He[500],
    dark: He[900]
  };
}
function ua(e = "light") {
  return e === "dark" ? {
    main: Xe[400],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: Xe[800],
    light: Xe[500],
    dark: Xe[900]
  };
}
function da(e = "light") {
  return e === "dark" ? {
    main: it[400],
    light: it[300],
    dark: it[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: it[500],
    dark: it[900]
  };
}
function Mr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || sa(t), s = e.secondary || aa(t), a = e.error || ca(t), d = e.info || la(t), f = e.success || ua(t), m = e.warning || da(t);
  function p(u) {
    const x = yn(u, Tn.text.primary) >= r ? Tn.text.primary : ia.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = yn(u, x);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${x} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const h = ({
    color: u,
    name: x,
    mainShade: w = 500,
    lightShade: V = 300,
    darkShade: T = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[w] && (u.main = u[w]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Ne(11, x ? ` (${x})` : "", w));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ne(12, x ? ` (${x})` : "", JSON.stringify(u.main)));
    return Cn(u, "light", V, n), Cn(u, "dark", T, n), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let b;
  return t === "light" ? b = co() : t === "dark" && (b = lo()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), me({
    // A collection of common colors.
    common: {
      ...ht
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: oa,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, o);
}
function fa(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function pa(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ma(e) {
  return Math.round(e * 1e5) / 1e5;
}
const xn = {
  textTransform: "uppercase"
}, On = '"Roboto", "Helvetica", "Arial", sans-serif';
function uo(e, t) {
  const {
    fontFamily: r = On,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, b = m || ((x) => `${x / d * h}rem`), y = (x, w, V, T, C) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: b(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: V,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === On ? {
      letterSpacing: `${ma(T / w)}em`
    } : {},
    ...C,
    ...f
  }), u = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, xn),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, xn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return me({
    htmlFontSize: d,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const ha = 0.2, ya = 0.14, ga = 0.12;
function te(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ha})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ya})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ga})`].join(",");
}
const ba = ["none", te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], va = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Sa = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function wn(e) {
  return `${Math.round(e)}ms`;
}
function Ea(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ta(e) {
  const t = {
    ...va,
    ...e.easing
  }, r = {
    ...Sa,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ea,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(a) || console.error('MUI: Argument "easing" must be a string.'), !p(d) && !m(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : wn(s)} ${a} ${typeof d == "string" ? d : wn(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ca = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function xa(e) {
  return Ce(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function fo(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !xa(a) || s.startsWith("unstable_") ? delete n[s] : Ce(a) && (n[s] = {
        ...a
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function vr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: d,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ne(20));
  const m = Mr(i), p = $r(e);
  let h = me(p, {
    mixins: pa(p.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ba.slice(),
    typography: uo(m, a),
    transitions: Ta(s),
    zIndex: {
      ...Ca
    }
  });
  if (h = me(h, f), h = t.reduce((b, y) => me(b, y), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (u, x) => {
      let w;
      for (w in u) {
        const V = u[w];
        if (b.includes(w) && Object.keys(V).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = vt("", w);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: V
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[w] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const x = h.components[u].styleOverrides;
      x && u.startsWith("Mui") && y(x, u);
    });
  }
  return h.unstable_sxConfig = {
    ...bt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return _e({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = fo, h;
}
function Oa(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const wa = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Oa(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function po(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function mo(e) {
  return e === "dark" ? wa : [];
}
function $a(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Mr(t);
  return {
    palette: i,
    opacity: {
      ...po(i.mode),
      ...r
    },
    overlays: n || mo(i.mode),
    ...o
  };
}
function ka(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ra = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Pa = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ra(e.cssVarPrefix).forEach((a) => {
        s[a] = r[a], delete r[a];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Aa(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function g(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function at(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : no(e);
}
function Oe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = st(at(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Na(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Te = (e) => {
  try {
    return e();
  } catch {
  }
}, _a = (e = "mui") => Zs(e);
function mr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = $a({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = vr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...po(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || mo(o)
  }, s;
}
function Ia(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = ka,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, m = Object.keys(r)[0], p = n || (r.light && m !== "light" ? "light" : m), h = _a(i), {
    [p]: b,
    light: y,
    dark: u,
    ...x
  } = r, w = {
    ...x
  };
  let V = b;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (V = !0), !V)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ne(21, p));
  const T = mr(w, V, f, p);
  y && !w.light && mr(w, y, void 0, "light"), u && !w.dark && mr(w, u, void 0, "dark");
  let C = {
    defaultColorScheme: p,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: d,
    getCssVar: h,
    colorSchemes: w,
    font: {
      ...fa(T.typography),
      ...T.font
    },
    spacing: Na(f.spacing)
  };
  Object.keys(C.colorSchemes).forEach((P) => {
    const c = C.colorSchemes[P].palette, S = (N) => {
      const z = N.split("-"), B = z[1], j = z[2];
      return h(N, c[B][j]);
    };
    if (c.mode === "light" && (g(c.common, "background", "#fff"), g(c.common, "onBackground", "#000")), c.mode === "dark" && (g(c.common, "background", "#000"), g(c.common, "onBackground", "#fff")), Aa(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      g(c.Alert, "errorColor", J(c.error.light, 0.6)), g(c.Alert, "infoColor", J(c.info.light, 0.6)), g(c.Alert, "successColor", J(c.success.light, 0.6)), g(c.Alert, "warningColor", J(c.warning.light, 0.6)), g(c.Alert, "errorFilledBg", S("palette-error-main")), g(c.Alert, "infoFilledBg", S("palette-info-main")), g(c.Alert, "successFilledBg", S("palette-success-main")), g(c.Alert, "warningFilledBg", S("palette-warning-main")), g(c.Alert, "errorFilledColor", Te(() => c.getContrastText(c.error.main))), g(c.Alert, "infoFilledColor", Te(() => c.getContrastText(c.info.main))), g(c.Alert, "successFilledColor", Te(() => c.getContrastText(c.success.main))), g(c.Alert, "warningFilledColor", Te(() => c.getContrastText(c.warning.main))), g(c.Alert, "errorStandardBg", Z(c.error.light, 0.9)), g(c.Alert, "infoStandardBg", Z(c.info.light, 0.9)), g(c.Alert, "successStandardBg", Z(c.success.light, 0.9)), g(c.Alert, "warningStandardBg", Z(c.warning.light, 0.9)), g(c.Alert, "errorIconColor", S("palette-error-main")), g(c.Alert, "infoIconColor", S("palette-info-main")), g(c.Alert, "successIconColor", S("palette-success-main")), g(c.Alert, "warningIconColor", S("palette-warning-main")), g(c.AppBar, "defaultBg", S("palette-grey-100")), g(c.Avatar, "defaultBg", S("palette-grey-400")), g(c.Button, "inheritContainedBg", S("palette-grey-300")), g(c.Button, "inheritContainedHoverBg", S("palette-grey-A100")), g(c.Chip, "defaultBorder", S("palette-grey-400")), g(c.Chip, "defaultAvatarColor", S("palette-grey-700")), g(c.Chip, "defaultIconColor", S("palette-grey-700")), g(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), g(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), g(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), g(c.LinearProgress, "primaryBg", Z(c.primary.main, 0.62)), g(c.LinearProgress, "secondaryBg", Z(c.secondary.main, 0.62)), g(c.LinearProgress, "errorBg", Z(c.error.main, 0.62)), g(c.LinearProgress, "infoBg", Z(c.info.main, 0.62)), g(c.LinearProgress, "successBg", Z(c.success.main, 0.62)), g(c.LinearProgress, "warningBg", Z(c.warning.main, 0.62)), g(c.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.11)`), g(c.Slider, "primaryTrack", Z(c.primary.main, 0.62)), g(c.Slider, "secondaryTrack", Z(c.secondary.main, 0.62)), g(c.Slider, "errorTrack", Z(c.error.main, 0.62)), g(c.Slider, "infoTrack", Z(c.info.main, 0.62)), g(c.Slider, "successTrack", Z(c.success.main, 0.62)), g(c.Slider, "warningTrack", Z(c.warning.main, 0.62));
      const N = wt(c.background.default, 0.8);
      g(c.SnackbarContent, "bg", N), g(c.SnackbarContent, "color", Te(() => c.getContrastText(N))), g(c.SpeedDialAction, "fabHoverBg", wt(c.background.paper, 0.15)), g(c.StepConnector, "border", S("palette-grey-400")), g(c.StepContent, "border", S("palette-grey-400")), g(c.Switch, "defaultColor", S("palette-common-white")), g(c.Switch, "defaultDisabledColor", S("palette-grey-100")), g(c.Switch, "primaryDisabledColor", Z(c.primary.main, 0.62)), g(c.Switch, "secondaryDisabledColor", Z(c.secondary.main, 0.62)), g(c.Switch, "errorDisabledColor", Z(c.error.main, 0.62)), g(c.Switch, "infoDisabledColor", Z(c.info.main, 0.62)), g(c.Switch, "successDisabledColor", Z(c.success.main, 0.62)), g(c.Switch, "warningDisabledColor", Z(c.warning.main, 0.62)), g(c.TableCell, "border", Z(Ot(c.divider, 1), 0.88)), g(c.Tooltip, "bg", Ot(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      g(c.Alert, "errorColor", Z(c.error.light, 0.6)), g(c.Alert, "infoColor", Z(c.info.light, 0.6)), g(c.Alert, "successColor", Z(c.success.light, 0.6)), g(c.Alert, "warningColor", Z(c.warning.light, 0.6)), g(c.Alert, "errorFilledBg", S("palette-error-dark")), g(c.Alert, "infoFilledBg", S("palette-info-dark")), g(c.Alert, "successFilledBg", S("palette-success-dark")), g(c.Alert, "warningFilledBg", S("palette-warning-dark")), g(c.Alert, "errorFilledColor", Te(() => c.getContrastText(c.error.dark))), g(c.Alert, "infoFilledColor", Te(() => c.getContrastText(c.info.dark))), g(c.Alert, "successFilledColor", Te(() => c.getContrastText(c.success.dark))), g(c.Alert, "warningFilledColor", Te(() => c.getContrastText(c.warning.dark))), g(c.Alert, "errorStandardBg", J(c.error.light, 0.9)), g(c.Alert, "infoStandardBg", J(c.info.light, 0.9)), g(c.Alert, "successStandardBg", J(c.success.light, 0.9)), g(c.Alert, "warningStandardBg", J(c.warning.light, 0.9)), g(c.Alert, "errorIconColor", S("palette-error-main")), g(c.Alert, "infoIconColor", S("palette-info-main")), g(c.Alert, "successIconColor", S("palette-success-main")), g(c.Alert, "warningIconColor", S("palette-warning-main")), g(c.AppBar, "defaultBg", S("palette-grey-900")), g(c.AppBar, "darkBg", S("palette-background-paper")), g(c.AppBar, "darkColor", S("palette-text-primary")), g(c.Avatar, "defaultBg", S("palette-grey-600")), g(c.Button, "inheritContainedBg", S("palette-grey-800")), g(c.Button, "inheritContainedHoverBg", S("palette-grey-700")), g(c.Chip, "defaultBorder", S("palette-grey-700")), g(c.Chip, "defaultAvatarColor", S("palette-grey-300")), g(c.Chip, "defaultIconColor", S("palette-grey-300")), g(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), g(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), g(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), g(c.LinearProgress, "primaryBg", J(c.primary.main, 0.5)), g(c.LinearProgress, "secondaryBg", J(c.secondary.main, 0.5)), g(c.LinearProgress, "errorBg", J(c.error.main, 0.5)), g(c.LinearProgress, "infoBg", J(c.info.main, 0.5)), g(c.LinearProgress, "successBg", J(c.success.main, 0.5)), g(c.LinearProgress, "warningBg", J(c.warning.main, 0.5)), g(c.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.13)`), g(c.Slider, "primaryTrack", J(c.primary.main, 0.5)), g(c.Slider, "secondaryTrack", J(c.secondary.main, 0.5)), g(c.Slider, "errorTrack", J(c.error.main, 0.5)), g(c.Slider, "infoTrack", J(c.info.main, 0.5)), g(c.Slider, "successTrack", J(c.success.main, 0.5)), g(c.Slider, "warningTrack", J(c.warning.main, 0.5));
      const N = wt(c.background.default, 0.98);
      g(c.SnackbarContent, "bg", N), g(c.SnackbarContent, "color", Te(() => c.getContrastText(N))), g(c.SpeedDialAction, "fabHoverBg", wt(c.background.paper, 0.15)), g(c.StepConnector, "border", S("palette-grey-600")), g(c.StepContent, "border", S("palette-grey-600")), g(c.Switch, "defaultColor", S("palette-grey-300")), g(c.Switch, "defaultDisabledColor", S("palette-grey-600")), g(c.Switch, "primaryDisabledColor", J(c.primary.main, 0.55)), g(c.Switch, "secondaryDisabledColor", J(c.secondary.main, 0.55)), g(c.Switch, "errorDisabledColor", J(c.error.main, 0.55)), g(c.Switch, "infoDisabledColor", J(c.info.main, 0.55)), g(c.Switch, "successDisabledColor", J(c.success.main, 0.55)), g(c.Switch, "warningDisabledColor", J(c.warning.main, 0.55)), g(c.TableCell, "border", J(Ot(c.divider, 1), 0.68)), g(c.Tooltip, "bg", Ot(c.grey[700], 0.92));
    }
    Oe(c.background, "default"), Oe(c.background, "paper"), Oe(c.common, "background"), Oe(c.common, "onBackground"), Oe(c, "divider"), Object.keys(c).forEach((N) => {
      const z = c[N];
      N !== "tonalOffset" && z && typeof z == "object" && (z.main && g(c[N], "mainChannel", st(at(z.main))), z.light && g(c[N], "lightChannel", st(at(z.light))), z.dark && g(c[N], "darkChannel", st(at(z.dark))), z.contrastText && g(c[N], "contrastTextChannel", st(at(z.contrastText))), N === "text" && (Oe(c[N], "primary"), Oe(c[N], "secondary")), N === "action" && (z.active && Oe(c[N], "active"), z.selected && Oe(c[N], "selected")));
    });
  }), C = t.reduce((P, c) => me(P, c), C);
  const v = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Pa(C)
  }, {
    vars: I,
    generateThemeVars: U,
    generateStyleSheets: R
  } = ra(C, v);
  return C.vars = I, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([P, c]) => {
    C[P] = c;
  }), C.generateThemeVars = U, C.generateStyleSheets = R, C.generateSpacing = function() {
    return Xn(f.spacing, Or(this));
  }, C.getColorSchemeSelector = na(a), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = s, C.unstable_sxConfig = {
    ...bt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, C.unstable_sx = function(c) {
    return _e({
      sx: c,
      theme: this
    });
  }, C.toRuntimeSource = fo, C;
}
function $n(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Mr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function er(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, a = i || "light", d = o == null ? void 0 : o[a], f = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return vr(e, ...t);
    let m = r;
    "palette" in e || f[a] && (f[a] !== !0 ? m = f[a].palette : a === "dark" && (m = {
      mode: "dark"
    }));
    const p = vr({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, $n(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, $n(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && a === "light" && (f.light = !0), Ia({
    ...s,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ho = er(), $e = "$$material";
function tr() {
  const e = Jn(ho);
  return process.env.NODE_ENV !== "production" && Ln(e), e[$e] || e;
}
function Ma(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Da = (e) => Ma(e) && e !== "classes", rt = $s({
  themeId: $e,
  defaultTheme: ho,
  rootShouldForwardProp: Da
}), yo = zs;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function Dr(e) {
  return Us(e);
}
function Ba(e) {
  return vt("MuiSvgIcon", e);
}
Qt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ja = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${We(t)}`, `fontSize${We(r)}`]
  };
  return xr(o, Ba, n);
}, La = rt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${We(r.color)}`], t[`fontSize${We(r.fontSize)}`]];
  }
})(yo(({
  theme: e
}) => {
  var t, r, n, o, i, s, a, d, f, m, p, h, b, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((d = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : d.call(a, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : m.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var x, w;
        return {
          props: {
            color: u
          },
          style: {
            color: (w = (x = (e.vars ?? e).palette) == null ? void 0 : x[u]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : y.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Mt = /* @__PURE__ */ ze(function(t, r) {
  const n = Dr({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: d = "medium",
    htmlColor: f,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24",
    ...b
  } = n, y = /* @__PURE__ */ dt(o) && o.type === "svg", u = {
    ...n,
    color: s,
    component: a,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: h,
    hasSvgAsChild: y
  }, x = {};
  m || (x.viewBox = h);
  const w = ja(u);
  return /* @__PURE__ */ ce(La, {
    as: a,
    className: Fe(w.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...x,
    ...b,
    ...y && o.props,
    ownerState: u,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ O("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
Mt.muiName = "SvgIcon";
function go(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ O(Mt, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Mt.muiName, /* @__PURE__ */ zo(/* @__PURE__ */ ze(r));
}
function Ue(e) {
  return e && e.ownerDocument || document;
}
function Dt(e) {
  return Ue(e).defaultView || window;
}
function kn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Rn(e) {
  const t = ae(e);
  return _t(() => {
    t.current = e;
  }), ae((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function St(...e) {
  const t = ae(void 0), r = et((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, a = s(n);
        return typeof a == "function" ? a : () => {
          s(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return ye(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const Va = go(/* @__PURE__ */ O("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), "Home"), Fa = {
  admin: "Administrador",
  client: "Cliente",
  sso: "SSO",
  chatbots: "Mis chatbots",
  apps: "Aplicaciones",
  welcome: "Bienvenido",
  "my-apps": "Mis aplicaciones",
  edit: "Modificar",
  create: "Crear"
};
function Wa() {
  const e = et(() => {
    const o = window.location.pathname.replace(/^\/|\/$/g, "").split("/"), i = [];
    return o.forEach((s, a) => {
      const d = "/" + o.slice(0, a + 1).join("/");
      i.push({
        label: Fa[s] ?? decodeURIComponent(s),
        href: d,
        last: a === o.length - 1
      });
    }), i.length ? i : [{ label: "Inicio", href: "/", last: !0 }];
  }, []), [t, r] = pt(e), n = (o) => {
    window.location.href = o;
  };
  return ge(() => {
    const o = () => r(e());
    return window.addEventListener("popstate", o), () => window.removeEventListener("popstate", o);
  }, [e]), [t, n];
}
function Ua({
  theme: e,
  ...t
}) {
  const r = $e in e ? e[$e] : void 0;
  return /* @__PURE__ */ O(mt, {
    ...t,
    themeId: r ? $e : void 0,
    theme: r || e
  });
}
const $t = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (l.string, l.string, l.string, l.string, l.string, l.oneOf(["dark", "light", "system"]), l.string, l.string);
const {
  CssVarsProvider: za
} = Js({
  themeId: $e,
  // @ts-ignore ignore module augmentation tests
  theme: () => er({
    cssVariables: !0
  }),
  colorSchemeStorageKey: $t.colorSchemeStorageKey,
  modeStorageKey: $t.modeStorageKey,
  defaultColorScheme: {
    light: $t.defaultLightColorScheme,
    dark: $t.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: uo(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return _e({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Ya = za;
function De({
  theme: e,
  ...t
}) {
  const r = ye(() => {
    if (typeof e == "function")
      return e;
    const n = $e in e ? e[$e] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ O(Ua, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ O(Ya, {
    theme: e,
    ...t
  });
}
const Re = er({
  palette: Xo
}), qa = (e) => {
  const t = tr();
  return /* @__PURE__ */ O(
    Po,
    {
      variant: e.variant || "body1",
      onClick: e.onClick || void 0,
      sx: {
        color: e.color || t.palette.primary.dark,
        strokeWidth: e.strokeWidth || "0.5px",
        WebkitTextStroke: `${e.strokeWidth || "1px"} ${e.strokeColor || t.palette.primary.light}`,
        fontWeight: 900,
        ...e.sx
      },
      children: e.children || null
    }
  );
}, ue = (e) => /* @__PURE__ */ O(Ao, { theme: Re, children: /* @__PURE__ */ O(qa, { ...e }) }), Ka = () => {
  const [e, t] = Wa();
  return /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ ce(No, { "aria-label": "breadcrumb", sx: { mb: 2, fontSize: "24px" }, children: [
    /* @__PURE__ */ ce(
      Yr,
      {
        underline: "hover",
        sx: { display: "flex", alignItems: "center", cursor: "pointer" },
        onClick: () => t("/"),
        children: [
          /* @__PURE__ */ O(Va, { sx: { mr: 0.5 }, fontSize: "inherit" }),
          " ",
          /* @__PURE__ */ O(ue, { variant: "h6", children: "Inicio" })
        ]
      }
    ),
    e.map(
      ({ label: r, href: n, last: o }) => o ? /* @__PURE__ */ O(ue, { variant: "h6", children: r }, n) : /* @__PURE__ */ O(
        Yr,
        {
          underline: "hover",
          onClick: () => t(n),
          sx: { cursor: "pointer" },
          children: /* @__PURE__ */ O(ue, { variant: "h6", children: r })
        },
        n
      )
    )
  ] }) });
}, Ga = Qt("MuiBox", ["root"]), Ha = er(), bo = Es({
  themeId: $e,
  defaultTheme: Ha,
  defaultClassName: Ga.root,
  generateClassName: Wn.generate
});
process.env.NODE_ENV !== "production" && (bo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function Xa(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Qa(e) {
  const t = Ue(e);
  return t.body === e ? Dt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ut(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Pn(e) {
  return parseInt(Dt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ja(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function An(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), d = !Ja(s);
    a && d && ut(s, o);
  });
}
function hr(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function Za(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (Qa(n)) {
      const s = Xa(Dt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${Pn(n) + s}px`;
      const a = Ue(n).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (d) => {
        r.push({
          value: d.style.paddingRight,
          property: "padding-right",
          el: d
        }), d.style.paddingRight = `${Pn(d) + s}px`;
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment)
      i = Ue(n).body;
    else {
      const s = n.parentElement, a = Dt(n);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : n;
    }
    r.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function ec(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class tc {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && ut(t.modalRef, !1);
    const o = ec(r);
    An(r, t.mount, t.modalRef, o, !0);
    const i = hr(this.containers, (s) => s.container === r);
    return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = hr(this.containers, (i) => i.modals.includes(t)), o = this.containers[n];
    o.restore || (o.restore = Za(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = hr(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ut(t.modalRef, r), An(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ut(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function vo(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function So(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function rc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Eo(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const d = i.type;
  return typeof d == "function" && !rc(d) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const rr = So(l.element, Eo);
rr.isRequired = So(l.element.isRequired, Eo);
function Br(e) {
  var t;
  return parseInt(Yo, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const nc = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function oc(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ic(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function sc(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ic(e));
}
function ac(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(nc)).forEach((n, o) => {
    const i = oc(n);
    i === -1 || !sc(n) || (i === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: i,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function cc() {
  return !0;
}
function Bt(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = ac,
    isEnabled: s = cc,
    open: a
  } = e, d = ae(!1), f = ae(null), m = ae(null), p = ae(null), h = ae(null), b = ae(!1), y = ae(null), u = St(Br(t), y), x = ae(null);
  ge(() => {
    !a || !y.current || (b.current = !r);
  }, [r, a]), ge(() => {
    if (!a || !y.current)
      return;
    const T = Ue(y.current);
    return y.current.contains(T.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), b.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (d.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), ge(() => {
    if (!a || !y.current)
      return;
    const T = Ue(y.current), C = (U) => {
      x.current = U, !(n || !s() || U.key !== "Tab") && T.activeElement === y.current && U.shiftKey && (d.current = !0, m.current && m.current.focus());
    }, v = () => {
      var P, c;
      const U = y.current;
      if (U === null)
        return;
      if (!T.hasFocus() || !s() || d.current) {
        d.current = !1;
        return;
      }
      if (U.contains(T.activeElement) || n && T.activeElement !== f.current && T.activeElement !== m.current)
        return;
      if (T.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let R = [];
      if ((T.activeElement === f.current || T.activeElement === m.current) && (R = i(y.current)), R.length > 0) {
        const S = !!((P = x.current) != null && P.shiftKey && ((c = x.current) == null ? void 0 : c.key) === "Tab"), N = R[0], z = R[R.length - 1];
        typeof N != "string" && typeof z != "string" && (S ? z.focus() : N.focus());
      } else
        U.focus();
    };
    T.addEventListener("focusin", v), T.addEventListener("keydown", C, !0);
    const I = setInterval(() => {
      T.activeElement && T.activeElement.tagName === "BODY" && v();
    }, 50);
    return () => {
      clearInterval(I), T.removeEventListener("focusin", v), T.removeEventListener("keydown", C, !0);
    };
  }, [r, n, o, s, a, i]);
  const w = (T) => {
    p.current === null && (p.current = T.relatedTarget), b.current = !0, h.current = T.target;
    const C = t.props.onFocus;
    C && C(T);
  }, V = (T) => {
    p.current === null && (p.current = T.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ ce(Fn, {
    children: [/* @__PURE__ */ O("div", {
      tabIndex: a ? 0 : -1,
      onFocus: V,
      ref: f,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ Vt(t, {
      ref: u,
      onFocus: w
    }), /* @__PURE__ */ O("div", {
      tabIndex: a ? 0 : -1,
      onFocus: V,
      ref: m,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Bt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: rr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: l.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: l.func,
  /**
   * If `true`, focus is locked.
   */
  open: l.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Bt.propTypes = Zt(Bt.propTypes));
function lc(e) {
  return typeof e == "function" ? e() : e;
}
const jt = /* @__PURE__ */ ze(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = pt(null), d = St(/* @__PURE__ */ dt(n) ? Br(n) : null, r);
  return _t(() => {
    i || a(lc(o) || document.body);
  }, [o, i]), _t(() => {
    if (s && !i)
      return kn(r, s), () => {
        kn(r, null);
      };
  }, [r, s, i]), i ? /* @__PURE__ */ dt(n) ? /* @__PURE__ */ Vt(n, {
    ref: d
  }) : n : s && /* @__PURE__ */ qo(n, s);
});
process.env.NODE_ENV !== "production" && (jt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: l.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vo, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (jt.propTypes = Zt(jt.propTypes));
function uc(e) {
  return typeof e == "string";
}
function dc(e, t, r) {
  return e === void 0 || uc(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function fc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function To(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Nn(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function pc(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = Fe(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, u = {
      ...r,
      ...o,
      ...n
    };
    return b.length > 0 && (u.className = b), Object.keys(y).length > 0 && (u.style = y), {
      props: u,
      internalRef: void 0
    };
  }
  const s = To({
    ...o,
    ...n
  }), a = Nn(n), d = Nn(o), f = t(s), m = Fe(f == null ? void 0 : f.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = {
    ...f == null ? void 0 : f.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, h = {
    ...f,
    ...r,
    ...d,
    ...a
  };
  return m.length > 0 && (h.className = m), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: f.ref
  };
}
function Lt(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...d
  } = t, {
    component: f,
    slots: m = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...h
  } = i, b = m[e] || n, y = fc(p[e], o), {
    props: {
      component: u,
      ...x
    },
    internalRef: w
  } = pc({
    className: r,
    ...d,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), V = St(w, y == null ? void 0 : y.ref, t.ref), T = e === "root" ? u || f : u, C = dc(b, {
    ...e === "root" && !f && !m[e] && s,
    ...e !== "root" && !m[e] && s,
    ...x,
    ...T && !a && {
      as: T
    },
    ...T && a && {
      component: T
    },
    ref: V
  }, o);
  return [b, C];
}
function mc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Sr(e, t) {
  return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Sr(e, t);
}
function hc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Sr(e, t);
}
const _n = {
  disabled: !1
};
var yc = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]);
const Co = we.createContext(null);
var gc = function(t) {
  return t.scrollTop;
}, ct = "unmounted", Le = "exited", Ve = "entering", Je = "entered", Er = "exiting", Pe = /* @__PURE__ */ function(e) {
  hc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, a = s && !s.isMounting ? n.enter : n.appear, d;
    return i.appearStatus = null, n.in ? a ? (d = Le, i.appearStatus = Ve) : d = Je : n.unmountOnExit || n.mountOnEnter ? d = ct : d = Le, i.state = {
      status: d
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === ct ? {
      status: Le
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Ve && s !== Je && (i = Ve) : (s === Ve || s === Je) && (i = Er);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ve) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : we.findDOMNode(this);
          s && gc(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Le && this.setState({
      status: ct
    });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, d = this.props.nodeRef ? [a] : [we.findDOMNode(this), a], f = d[0], m = d[1], p = this.getTimeouts(), h = a ? p.appear : p.enter;
    if (!o && !s || _n.disabled) {
      this.safeSetState({
        status: Je
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, m), this.safeSetState({
      status: Ve
    }, function() {
      i.props.onEntering(f, m), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: Je
        }, function() {
          i.props.onEntered(f, m);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : we.findDOMNode(this);
    if (!i || _n.disabled) {
      this.safeSetState({
        status: Le
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Er
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Le
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : we.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = d[0], m = d[1];
      this.props.addEndListener(f, m);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === ct)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = mc(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ we.createElement(Co.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : we.cloneElement(we.Children.only(s), a))
    );
  }, t;
}(we.Component);
Pe.contextType = Co;
Pe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(e, t, r, n, o, i) {
      var s = e[t];
      return l.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = yc;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function Qe() {
}
Pe.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Qe,
  onEntering: Qe,
  onEntered: Qe,
  onExit: Qe,
  onExiting: Qe,
  onExited: Qe
};
Pe.UNMOUNTED = ct;
Pe.EXITED = Le;
Pe.ENTERING = Ve;
Pe.ENTERED = Je;
Pe.EXITING = Er;
const bc = (e) => e.scrollTop;
function In(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
const vc = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, xo = /* @__PURE__ */ ze(function(t, r) {
  const n = tr(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: d,
    in: f,
    onEnter: m,
    onEntered: p,
    onEntering: h,
    onExit: b,
    onExited: y,
    onExiting: u,
    style: x,
    timeout: w = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: V = Pe,
    ...T
  } = t, C = ae(null), v = St(C, Br(a), r), I = (B) => (j) => {
    if (B) {
      const M = C.current;
      j === void 0 ? B(M) : B(M, j);
    }
  }, U = I(h), R = I((B, j) => {
    bc(B);
    const M = In({
      style: x,
      timeout: w,
      easing: d
    }, {
      mode: "enter"
    });
    B.style.webkitTransition = n.transitions.create("opacity", M), B.style.transition = n.transitions.create("opacity", M), m && m(B, j);
  }), P = I(p), c = I(u), S = I((B) => {
    const j = In({
      style: x,
      timeout: w,
      easing: d
    }, {
      mode: "exit"
    });
    B.style.webkitTransition = n.transitions.create("opacity", j), B.style.transition = n.transitions.create("opacity", j), b && b(B);
  }), N = I(y);
  return /* @__PURE__ */ O(V, {
    appear: s,
    in: f,
    nodeRef: C,
    onEnter: R,
    onEntered: P,
    onEntering: U,
    onExit: S,
    onExited: N,
    onExiting: c,
    addEndListener: (B) => {
      i && i(C.current, B);
    },
    timeout: w,
    ...T,
    children: (B, {
      ownerState: j,
      ...M
    }) => /* @__PURE__ */ Vt(a, {
      style: {
        opacity: 0,
        visibility: B === "exited" && !f ? "hidden" : void 0,
        ...vc[B],
        ...x,
        ...a.props.style
      },
      ref: v,
      ...M
    })
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: rr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function Sc(e) {
  return vt("MuiBackdrop", e);
}
Qt("MuiBackdrop", ["root", "invisible"]);
const Ec = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return xr({
    root: ["root", r && "invisible"]
  }, Sc, t);
}, Tc = rt("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Oo = /* @__PURE__ */ ze(function(t, r) {
  const n = Dr({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: d,
    components: f = {},
    componentsProps: m = {},
    slotProps: p = {},
    slots: h = {},
    TransitionComponent: b,
    transitionDuration: y,
    ...u
  } = n, x = {
    ...n,
    component: s,
    invisible: a
  }, w = Ec(x), V = {
    transition: b,
    root: f.Root,
    ...h
  }, T = {
    ...m,
    ...p
  }, C = {
    slots: V,
    slotProps: T
  }, [v, I] = Lt("root", {
    elementType: Tc,
    externalForwardedProps: C,
    className: Fe(w.root, i),
    ownerState: x
  }), [U, R] = Lt("transition", {
    elementType: xo,
    externalForwardedProps: C,
    ownerState: x
  });
  return /* @__PURE__ */ O(U, {
    in: d,
    timeout: y,
    ...u,
    ...R,
    children: /* @__PURE__ */ O(v, {
      "aria-hidden": !0,
      ...I,
      classes: w,
      ref: r,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    root: l.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: l.bool,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: l.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function Cc(e) {
  return typeof e == "function" ? e() : e;
}
function xc(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Mn = () => {
}, kt = new tc();
function Oc(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: d,
    open: f,
    rootRef: m
  } = e, p = ae({}), h = ae(null), b = ae(null), y = St(b, m), [u, x] = pt(!f), w = xc(a);
  let V = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (V = !1);
  const T = () => Ue(h.current), C = () => (p.current.modalRef = b.current, p.current.mount = h.current, p.current), v = () => {
    kt.mount(C(), {
      disableScrollLock: n
    }), b.current && (b.current.scrollTop = 0);
  }, I = Rn(() => {
    const j = Cc(t) || T().body;
    kt.add(C(), j), b.current && v();
  }), U = () => kt.isTopModal(C()), R = Rn((j) => {
    h.current = j, j && (f && U() ? v() : b.current && ut(b.current, V));
  }), P = et(() => {
    kt.remove(C(), V);
  }, [V]);
  ge(() => () => {
    P();
  }, [P]), ge(() => {
    f ? I() : (!w || !o) && P();
  }, [f, P, w, o, I]);
  const c = (j) => (M) => {
    var ee;
    (ee = j.onKeyDown) == null || ee.call(j, M), !(M.key !== "Escape" || M.which === 229 || // Wait until IME is settled.
    !U()) && (r || (M.stopPropagation(), d && d(M, "escapeKeyDown")));
  }, S = (j) => (M) => {
    var ee;
    (ee = j.onClick) == null || ee.call(j, M), M.target === M.currentTarget && d && d(M, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const M = To(e);
      delete M.onTransitionEnter, delete M.onTransitionExited;
      const ee = {
        ...M,
        ...j
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...ee,
        onKeyDown: c(ee),
        ref: y
      };
    },
    getBackdropProps: (j = {}) => {
      const M = j;
      return {
        "aria-hidden": !0,
        ...M,
        onClick: S(M),
        open: f
      };
    },
    getTransitionProps: () => {
      const j = () => {
        x(!1), i && i();
      }, M = () => {
        x(!0), s && s(), o && P();
      };
      return {
        onEnter: Kr(j, (a == null ? void 0 : a.props.onEnter) ?? Mn),
        onExited: Kr(M, (a == null ? void 0 : a.props.onExited) ?? Mn)
      };
    },
    rootRef: y,
    portalRef: R,
    isTopModal: U,
    exited: u,
    hasTransition: w
  };
}
function wc(e) {
  return vt("MuiModal", e);
}
Qt("MuiModal", ["root", "hidden", "backdrop"]);
const $c = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return xr({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, wc, n);
}, kc = rt("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(yo(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Rc = rt(Oo, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), wo = /* @__PURE__ */ ze(function(t, r) {
  const n = Dr({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = Rc,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: d = !1,
    children: f,
    container: m,
    component: p,
    components: h = {},
    componentsProps: b = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: w = !1,
    disableRestoreFocus: V = !1,
    disableScrollLock: T = !1,
    hideBackdrop: C = !1,
    keepMounted: v = !1,
    onClose: I,
    onTransitionEnter: U,
    onTransitionExited: R,
    open: P,
    slotProps: c = {},
    slots: S = {},
    // eslint-disable-next-line react/prop-types
    theme: N,
    ...z
  } = n, B = {
    ...n,
    closeAfterTransition: d,
    disableAutoFocus: y,
    disableEnforceFocus: u,
    disableEscapeKeyDown: x,
    disablePortal: w,
    disableRestoreFocus: V,
    disableScrollLock: T,
    hideBackdrop: C,
    keepMounted: v
  }, {
    getRootProps: j,
    getBackdropProps: M,
    getTransitionProps: ee,
    portalRef: de,
    isTopModal: xe,
    exited: E,
    hasTransition: k
  } = Oc({
    ...B,
    rootRef: r
  }), A = {
    ...B,
    exited: E
  }, _ = $c(A), D = {};
  if (f.props.tabIndex === void 0 && (D.tabIndex = "-1"), k) {
    const {
      onEnter: W,
      onExited: se
    } = ee();
    D.onEnter = W, D.onExited = se;
  }
  const Y = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...S
    },
    slotProps: {
      ...b,
      ...c
    }
  }, [F, L] = Lt("root", {
    ref: r,
    elementType: kc,
    externalForwardedProps: {
      ...Y,
      ...z,
      component: p
    },
    getSlotProps: j,
    ownerState: A,
    className: Fe(a, _ == null ? void 0 : _.root, !A.open && A.exited && (_ == null ? void 0 : _.hidden))
  }), [q, K] = Lt("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: o,
    externalForwardedProps: Y,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (W) => M({
      ...W,
      onClick: (se) => {
        W != null && W.onClick && W.onClick(se);
      }
    }),
    className: Fe(i == null ? void 0 : i.className, _ == null ? void 0 : _.backdrop),
    ownerState: A
  });
  return !v && !P && (!k || E) ? null : /* @__PURE__ */ O(jt, {
    ref: de,
    container: m,
    disablePortal: w,
    children: /* @__PURE__ */ ce(F, {
      ...L,
      children: [!C && o ? /* @__PURE__ */ O(q, {
        ...K
      }) : null, /* @__PURE__ */ O(Bt, {
        disableEnforceFocus: u,
        disableAutoFocus: y,
        disableRestoreFocus: V,
        isEnabled: xe,
        open: P,
        children: /* @__PURE__ */ Vt(f, D)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: l.object,
  /**
   * A single child content element.
   */
  children: rr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: l.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Backdrop: l.elementType,
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vo, l.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: l.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: l.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Pc = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}, Ac = ({ open: e, setOpen: t, title: r, children: n }) => {
  const o = () => t(!1);
  return e ? /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ O(
    wo,
    {
      open: e,
      onClose: o,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0,
      children: /* @__PURE__ */ ce(bo, { sx: Pc, children: [
        /* @__PURE__ */ O(ue, { variant: "h4", children: r || "Modal sin título." }),
        n
      ] })
    }
  ) }) : null;
}, Nc = (e) => /* @__PURE__ */ O(
  jn,
  {
    ...e,
    variant: e.variant || "contained",
    sx: {
      backgroundColor: e.color || "primary",
      color: e.color || "primary.dark",
      "&:hover": {
        backgroundColor: e.color || "primary",
        color: e.color || "primary.dark"
      },
      ...e.sx
    },
    children: /* @__PURE__ */ O(ue, { color: e.color || "primary.dark", children: e.children })
  }
), Dn = (e) => /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ O(Nc, { ...e }) }), qc = ({
  title: e,
  message: t,
  onConfirm: r,
  onCancel: n,
  confirmTitle: o,
  cancelTitle: i,
  open: s,
  setOpen: a
}) => /* @__PURE__ */ ce(
  Ac,
  {
    title: e,
    open: s,
    setOpen: a,
    children: [
      /* @__PURE__ */ O(ue, { sx: { marginBottom: 2, textAlign: "center" }, children: t }),
      /* @__PURE__ */ ce(_o, { sx: { display: "flex", justifyContent: "center", gap: 2 }, children: [
        /* @__PURE__ */ O(Dn, { onClick: r, color: "primary", children: o || "Confirmar" }),
        /* @__PURE__ */ O(Dn, { onClick: n, color: "secondary", children: i || "Cancelar" })
      ] })
    ]
  }
), _c = () => {
  const { user: e, logout: t } = Qo();
  return tr(), /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ O(
    Io,
    {
      position: "static",
      color: "secondary",
      sx: {
        bgcolor: "background.default"
      },
      children: /* @__PURE__ */ ce(Mo, { children: [
        /* @__PURE__ */ O(
          "img",
          {
            src: "/logo.png",
            alt: "Logo",
            style: {
              width: "60px",
              height: "60px",
              marginRight: "10px",
              cursor: "pointer"
            },
            onClick: () => window.location.href = "/"
          }
        ),
        /* @__PURE__ */ O(ue, { variant: "h6", sx: { flexGrow: 1 }, children: e ? `${e.role.charAt(0).toUpperCase() + e.role.slice(1)} Portal` : "Portal" }),
        /* @__PURE__ */ O(Ze, { display: "flex", gap: 2, alignItems: "center", children: e && /* @__PURE__ */ ce(Bn, { children: [
          /* @__PURE__ */ ce(ue, { children: [
            e.name.charAt(0).toUpperCase() + e.name.slice(1),
            " / ",
            e.role.toUpperCase()
          ] }),
          /* @__PURE__ */ O(
            yr,
            {
              src: e.image,
              alt: e.name + " " + e.second_name,
              sx: { width: 45, height: 45, bgcolor: "secondary", color: "text.primary" }
            }
          ),
          /* @__PURE__ */ O(ue, { sx: { cursor: "pointer" }, onClick: t, children: "Salir" })
        ] }) })
      ] })
    }
  ) });
}, Kc = ({ children: e, environment: t }) => /* @__PURE__ */ ce(Bn, { children: [
  /* @__PURE__ */ O(Do, {}),
  /* @__PURE__ */ O(_c, { environment: t }),
  /* @__PURE__ */ O(Ka, {}),
  e,
  /* @__PURE__ */ O(Ko, {})
] }), Ic = go([/* @__PURE__ */ O("circle", {
  cx: "15.5",
  cy: "9.5",
  r: "1.5"
}, "0"), /* @__PURE__ */ O("circle", {
  cx: "8.5",
  cy: "9.5",
  r: "1.5"
}, "1"), /* @__PURE__ */ O("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5"
}, "2")], "SentimentVeryDissatisfied"), Gc = ({
  title: e = "Algo salió mal",
  message: t,
  icon: r = /* @__PURE__ */ O(Ic, { color: "secondary", sx: { fontSize: 50, fontWeight: "bold" } }),
  actionLabel: n,
  onAction: o
}) => /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ O(
  Ze,
  {
    component: Bo,
    elevation: 0,
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.default",
      px: 2,
      mt: 2,
      borderRadius: 2,
      boxShadow: 3,
      p: 4
    },
    children: /* @__PURE__ */ ce(jo, { spacing: 2, textAlign: "center", maxWidth: 400, children: [
      /* @__PURE__ */ O(Ze, { children: r }),
      /* @__PURE__ */ O(ue, { variant: "h4", children: e }),
      Array.isArray(t) ? /* @__PURE__ */ O(Lo, { children: t.map((i, s) => /* @__PURE__ */ O(Ze, { sx: {
        bgcolor: "error.main",
        borderRadius: 2,
        p: 1,
        m: 1
      }, children: /* @__PURE__ */ O(
        Vo,
        {
          sx: {
            bgcolor: "error.main",
            borderRadius: 2
          },
          primary: /* @__PURE__ */ O(ue, { sx: { textAlign: "center" }, strokeColor: "primary.main", color: "secondary.main", children: i })
        }
      ) }, s)) }) : /* @__PURE__ */ O(ue, { children: t }),
      n && o && /* @__PURE__ */ O(jn, { variant: "contained", onClick: o, sx: { alignSelf: "center" }, children: /* @__PURE__ */ O(ue, { children: n }) })
    ] })
  }
) }), Hc = ({
  options: e,
  placeholder: t = "Selecciona una opción",
  value: r,
  onChange: n,
  disabled: o = !1
}) => {
  const i = ye(
    () => e.find((s) => s.value === r) || null,
    [e, r]
  );
  return tr(), /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ O(
    Fo,
    {
      options: e,
      getOptionLabel: (s) => s.label,
      value: i || void 0,
      onChange: (s, a) => n == null ? void 0 : n(a),
      isOptionEqualToValue: (s, a) => s.value === a.value,
      disableClearable: !0,
      disabled: o,
      openOnFocus: !0,
      noOptionsText: "Sin resultados",
      sx: {
        width: "100%",
        "& .MuiOutlinedInput-root": { backgroundColor: "#fff" }
      },
      renderInput: (s) => {
        const { id: a, InputProps: d, inputProps: f } = s, m = i ? /* @__PURE__ */ O(Wo, { position: "start", children: /* @__PURE__ */ O(
          yr,
          {
            src: i.img,
            variant: "rounded",
            sx: { width: 24, height: 24 }
          }
        ) }) : null;
        return /* @__PURE__ */ O(
          Tr,
          {
            id: a,
            placeholder: t,
            size: "medium",
            fullWidth: !0,
            disabled: o,
            color: "primary",
            sx: {
              backgroundColor: "#fff",
              "& input::placeholder": (p) => ({
                color: p.palette.primary.main,
                opacity: 1
              }),
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main"
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main"
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main"
              }
            },
            InputProps: {
              ...d,
              startAdornment: m ?? d.startAdornment,
              sx: (p) => ({
                ".MuiAutocomplete-input": {
                  fontWeight: 700,
                  color: p.palette.primary.dark,
                  strokeWidth: "0.5px",
                  WebkitTextStroke: `1px ${p.palette.primary.light}`
                }
              })
            },
            inputProps: f
          }
        );
      },
      renderOption: (s, a, d) => /* @__PURE__ */ ce(
        Ze,
        {
          component: "li",
          ...s,
          sx: { display: "flex", alignItems: "center", gap: 2, py: 1 },
          children: [
            /* @__PURE__ */ O(
              yr,
              {
                src: a.img,
                variant: "rounded",
                sx: { width: 48, height: 48, flexShrink: 0 }
              }
            ),
            /* @__PURE__ */ ce(Ze, { sx: { minWidth: 0 }, children: [
              /* @__PURE__ */ O(ue, { variant: "h6", children: a.label }),
              /* @__PURE__ */ O(
                ue,
                {
                  variant: "h6",
                  sx: { maxWidth: "100%" },
                  children: a.description
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}, Mc = rt(Tr)(({ theme: e }) => ({
  backgroundColor: e.palette.common.white,
  "& input::placeholder": {
    color: e.palette.primary.main,
    opacity: 1
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: e.palette.primary.main
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: e.palette.primary.main
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: e.palette.primary.main
  },
  "& .MuiInputBase-input": {
    fontWeight: 700,
    color: e.palette.primary.dark,
    WebkitTextStroke: `0.5px ${e.palette.primary.light}`
  },
  // Sólo para outlined:
  "& .MuiOutlinedInput-input": {
    fontWeight: 700,
    color: e.palette.primary.dark,
    WebkitTextStroke: `0.5px ${e.palette.primary.light}`
  }
})), Xc = ({
  variant: e = "outlined",
  fullWidth: t = !0,
  sx: r,
  ...n
}) => /* @__PURE__ */ ce(De, { theme: Re, children: [
  /* @__PURE__ */ O(
    Mc,
    {
      variant: e,
      fullWidth: t,
      sx: r,
      ...n
    }
  ),
  /* @__PURE__ */ O(ue, { children: n.children })
] }), Dc = rt(Tr)(({ theme: e }) => ({
  backgroundColor: e.palette.common.white,
  "& textarea": {
    // opcional: añade algo de padding interno
    padding: e.spacing(1.5)
  },
  "& textarea::placeholder": {
    color: e.palette.primary.main,
    opacity: 1
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: e.palette.primary.main
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: e.palette.primary.main
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: e.palette.primary.main
  },
  "& .MuiInputBase-input": {
    fontWeight: 700,
    color: e.palette.primary.dark,
    WebkitTextStroke: `0.5px ${e.palette.primary.light}`
  }
})), Qc = ({
  variant: e = "outlined",
  fullWidth: t = !0,
  color: r = "primary",
  multiline: n = !0,
  minRows: o = 4,
  maxRows: i,
  sx: s,
  ...a
}) => /* @__PURE__ */ O(De, { theme: Re, children: /* @__PURE__ */ O(
  Dc,
  {
    variant: e,
    fullWidth: t,
    color: r,
    multiline: n,
    minRows: o,
    maxRows: i,
    sx: s,
    ...a
  }
) });
export {
  Ka as CustomBreadcrumb,
  Dn as CustomButton,
  Nc as CustomButtonComponent,
  qc as CustomConfirm,
  Xc as CustomInput,
  Ac as CustomModal,
  Qc as CustomTextarea,
  ue as CustomTypography,
  qa as CustomTypographyComponent,
  Gc as ErrorState,
  Hc as ImageComboBox,
  Kc as Layout,
  _c as Navbar,
  Re as appTheme
};
