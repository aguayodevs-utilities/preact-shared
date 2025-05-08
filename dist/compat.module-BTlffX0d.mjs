import { options as s, Component as m, createElement as d, Fragment as E, toChildArray as h, createRef as Ee, createContext as Ne, cloneElement as ge, render as S, hydrate as ke } from "preact";
var v, i, P, W, y = 0, ne = [], c = s, L = c.__b, M = c.__r, q = c.diffed, B = c.__c, z = c.unmount, j = c.__;
function b(e, t) {
  c.__h && c.__h(i, e, y || t), y = 0;
  var n = i.__H || (i.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function A(e) {
  return y = 1, T(ce, e);
}
function T(e, t, n) {
  var r = b(v++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ce(void 0, t), function(l) {
    var a = r.__N ? r.__N[0] : r.__[0], f = r.t(a, l);
    a !== f && (r.__N = [f, r.__[1]], r.__c.setState({}));
  }], r.__c = i, !i.__f)) {
    var _ = function(l, a, f) {
      if (!r.__c.__H) return !0;
      var g = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (g.every(function(p) {
        return !p.__N;
      })) return !u || u.call(this, l, a, f);
      var I = r.__c.props !== l;
      return g.forEach(function(p) {
        if (p.__N) {
          var Ce = p.__[0];
          p.__ = p.__N, p.__N = void 0, Ce !== p.__[0] && (I = !0);
        }
      }), u && u.call(this, l, a, f) || I;
    };
    i.__f = !0;
    var u = i.shouldComponentUpdate, o = i.componentWillUpdate;
    i.componentWillUpdate = function(l, a, f) {
      if (this.__e) {
        var g = u;
        u = void 0, _(l, a, f), u = g;
      }
      o && o.call(this, l, a, f);
    }, i.shouldComponentUpdate = _;
  }
  return r.__N || r.__;
}
function D(e, t) {
  var n = b(v++, 3);
  !c.__s && F(n.__H, t) && (n.__ = e, n.u = t, i.__H.__h.push(n));
}
function N(e, t) {
  var n = b(v++, 4);
  !c.__s && F(n.__H, t) && (n.__ = e, n.u = t, i.__h.push(n));
}
function re(e) {
  return y = 5, x(function() {
    return { current: e };
  }, []);
}
function _e(e, t, n) {
  y = 6, N(function() {
    if (typeof e == "function") {
      var r = e(t());
      return function() {
        e(null), r && typeof r == "function" && r();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, n == null ? n : n.concat(e));
}
function x(e, t) {
  var n = b(v++, 7);
  return F(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function oe(e, t) {
  return y = 8, x(function() {
    return e;
  }, t);
}
function ue(e) {
  var t = i.context[e.__c], n = b(v++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(i)), t.props.value) : e.__;
}
function ie(e, t) {
  c.useDebugValue && c.useDebugValue(t ? t(e) : e);
}
function ae() {
  var e = b(v++, 11);
  if (!e.__) {
    for (var t = i.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function He() {
  for (var e; e = ne.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(k), e.__H.__h.forEach(O), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], c.__e(t, e.__v);
  }
}
c.__b = function(e) {
  i = null, L && L(e);
}, c.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), j && j(e, t);
}, c.__r = function(e) {
  M && M(e), v = 0;
  var t = (i = e.__c).__H;
  t && (P === i ? (t.__h = [], i.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(k), t.__h.forEach(O), t.__h = [], v = 0)), P = i;
}, c.diffed = function(e) {
  q && q(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ne.push(t) !== 1 && W === c.requestAnimationFrame || ((W = c.requestAnimationFrame) || Se)(He)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), P = i = null;
}, c.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(k), n.__h = n.__h.filter(function(r) {
        return !r.__ || O(r);
      });
    } catch (r) {
      t.some(function(_) {
        _.__h && (_.__h = []);
      }), t = [], c.__e(r, n.__v);
    }
  }), B && B(e, t);
}, c.unmount = function(e) {
  z && z(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      k(r);
    } catch (_) {
      t = _;
    }
  }), n.__H = void 0, t && c.__e(t, n.__v));
};
var Z = typeof requestAnimationFrame == "function";
function Se(e) {
  var t, n = function() {
    clearTimeout(r), Z && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Z && (t = requestAnimationFrame(n));
}
function k(e) {
  var t = i, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), i = t;
}
function O(e) {
  var t = i;
  e.__c = e.__(), i = t;
}
function F(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function ce(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function le(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function U(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function fe(e, t) {
  var n = t(), r = A({ t: { __: n, u: t } }), _ = r[0].t, u = r[1];
  return N(function() {
    _.__ = n, _.u = t, $(_) && u({ t: _ });
  }, [e, n, t]), D(function() {
    return $(_) && u({ t: _ }), e(function() {
      $(_) && u({ t: _ });
    });
  }, [e]), n;
}
function $(e) {
  var t, n, r = e.u, _ = e.__;
  try {
    var u = r();
    return !((t = _) === (n = u) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function se(e) {
  e();
}
function pe(e) {
  return e;
}
function he() {
  return [!1, se];
}
var de = N;
function w(e, t) {
  this.props = e, this.context = t;
}
function xe(e, t) {
  function n(_) {
    var u = this.props.ref, o = u == _.ref;
    return !o && u && (u.call ? u(null) : u.current = null), t ? !t(this.props, _) || !o : U(this.props, _);
  }
  function r(_) {
    return this.shouldComponentUpdate = n, d(e, _);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(w.prototype = new m()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function(e, t) {
  return U(this.props, e) || U(this.state, t);
};
var Y = s.__b;
s.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Y && Y(e);
};
var Re = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Pe(e) {
  function t(n) {
    var r = le({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Re, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var G = function(e, t) {
  return e == null ? null : h(h(e).map(t));
}, $e = { map: G, forEach: G, count: function(e) {
  return e ? h(e).length : 0;
}, only: function(e) {
  var t = h(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: h }, Oe = s.__e;
s.__e = function(e, t, n, r) {
  if (e.then) {
    for (var _, u = t; u = u.__; ) if ((_ = u.__c) && _.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), _.__c(e, t);
  }
  Oe(e, t, n, r);
};
var J = s.unmount;
function ve(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = le({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return ve(r, t, n);
  })), e;
}
function me(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return me(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function H() {
  this.__u = 0, this.o = null, this.__b = null;
}
function ye(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ue(e) {
  var t, n, r;
  function _(u) {
    if (t || (t = e()).then(function(o) {
      n = o.default || o;
    }, function(o) {
      r = o;
    }), r) throw r;
    if (!n) throw t;
    return d(n, u);
  }
  return _.displayName = "Lazy", _.__f = !0, _;
}
function C() {
  this.i = null, this.l = null;
}
s.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), J && J(e);
}, (H.prototype = new m()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var _ = ye(r.__v), u = !1, o = function() {
    u || (u = !0, n.__R = null, _ ? _(l) : l());
  };
  n.__R = o;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = me(a, a.__c.__P, a.__c.__O);
      }
      var f;
      for (r.setState({ __a: r.__b = null }); f = r.o.pop(); ) f.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
}, H.prototype.componentWillUnmount = function() {
  this.o = [];
}, H.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = ve(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var _ = t.__a && d(E, null, e.fallback);
  return _ && (_.__u &= -33), [d(E, null, t.__a ? null : e.children), _];
};
var K = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function we(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ae(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    S(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, _) {
    this.childNodes.push(r), t.h.insertBefore(r, _);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), S(d(we, { context: t.context }, e.__v), t.v);
}
function Te(e, t) {
  var n = d(Ae, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(C.prototype = new m()).__a = function(e) {
  var t = this, n = ye(t.__v), r = t.l.get(e);
  return r[0]++, function(_) {
    var u = function() {
      t.props.revealOrder ? (r.push(_), K(t, e, r)) : _();
    };
    n ? n(u) : u();
  };
}, C.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = h(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, C.prototype.componentDidUpdate = C.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    K(e, n, t);
  });
};
var be = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, De = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Fe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ve = /[A-Z0-9]/g, Ie = typeof document < "u", We = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Le(e, t, n) {
  return t.__k == null && (t.textContent = ""), S(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Me(e, t, n) {
  return ke(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
m.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(m.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Q = s.event;
function qe() {
}
function Be() {
  return this.cancelBubble;
}
function ze() {
  return this.defaultPrevented;
}
s.event = function(e) {
  return Q && (e = Q(e)), e.persist = qe, e.isPropagationStopped = Be, e.isDefaultPrevented = ze, e.nativeEvent = e;
};
var V, je = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, X = s.vnode;
s.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, _ = {}, u = r.indexOf("-") === -1;
    for (var o in n) {
      var l = n[o];
      if (!(o === "value" && "defaultValue" in n && l == null || Ie && o === "children" && r === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && l === !0 ? l = "" : a === "translate" && l === "no" ? l = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || We(n.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : Fe.test(o) && (o = a) : a = o = "oninput" : u && De.test(o) ? o = o.replace(Ve, "-$&").toLowerCase() : l === null && (l = void 0), a === "oninput" && _[o = a] && (o = "oninputCapture"), _[o] = l;
      }
    }
    r == "select" && _.multiple && Array.isArray(_.value) && (_.value = h(n.children).forEach(function(f) {
      f.props.selected = _.value.indexOf(f.props.value) != -1;
    })), r == "select" && _.defaultValue != null && (_.value = h(n.children).forEach(function(f) {
      f.props.selected = _.multiple ? _.defaultValue.indexOf(f.props.value) != -1 : _.defaultValue == f.props.value;
    })), n.class && !n.className ? (_.class = n.class, Object.defineProperty(_, "className", je)) : (n.className && !n.class || n.class && n.className) && (_.class = _.className = n.className), t.props = _;
  }(e), e.$$typeof = be, X && X(e);
};
var ee = s.__r;
s.__r = function(e) {
  ee && ee(e), V = e.__c;
};
var te = s.diffed;
s.diffed = function(e) {
  te && te(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), V = null;
};
var Ze = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return V.__n[e.__c].props.value;
}, useCallback: oe, useContext: ue, useDebugValue: ie, useDeferredValue: pe, useEffect: D, useId: ae, useImperativeHandle: _e, useInsertionEffect: de, useLayoutEffect: N, useMemo: x, useReducer: T, useRef: re, useState: A, useSyncExternalStore: fe, useTransition: he } } }, ot = "18.3.1";
function Ye(e) {
  return d.bind(null, e);
}
function R(e) {
  return !!e && e.$$typeof === be;
}
function Ge(e) {
  return R(e) && e.type === E;
}
function Je(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Ke(e) {
  return R(e) ? ge.apply(null, arguments) : e;
}
function Qe(e) {
  return !!e.__k && (S(null, e), !0);
}
function Xe(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var et = function(e, t) {
  return e(t);
}, tt = function(e, t) {
  return e(t);
}, nt = E, rt = R, ut = { useState: A, useId: ae, useReducer: T, useEffect: D, useLayoutEffect: N, useInsertionEffect: de, useTransition: he, useDeferredValue: pe, useSyncExternalStore: fe, startTransition: se, useRef: re, useImperativeHandle: _e, useMemo: x, useCallback: oe, useContext: ue, useDebugValue: ie, version: "18.3.1", Children: $e, render: Le, hydrate: Me, unmountComponentAtNode: Qe, createPortal: Te, createElement: d, createContext: Ne, createFactory: Ye, cloneElement: Ke, createRef: Ee, Fragment: E, isValidElement: R, isElement: rt, isFragment: Ge, isMemo: Je, findDOMNode: Xe, Component: m, PureComponent: w, memo: xe, forwardRef: Pe, flushSync: tt, unstable_batchedUpdates: et, StrictMode: nt, Suspense: H, SuspenseList: C, lazy: Ue, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ze };
export {
  Te as $,
  re as A,
  fe as C,
  Pe as D,
  xe as M,
  ie as P,
  ut as R,
  x as T,
  N as _,
  Ke as a,
  A as d,
  R as p,
  oe as q,
  ot as v,
  ue as x,
  D as y
};
